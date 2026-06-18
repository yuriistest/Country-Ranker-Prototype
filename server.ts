/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import express, { Request, Response } from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { INITIAL_COUNTRIES, INDICATOR_MAPPINGS } from "./src/data/countries.js";
import { enrichCountriesData } from "./src/data/baselines.js";
import { SyncStatus } from "./src/types.js";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Memory store for the actual active country dataset (initialized with static high-fidelity data)
  let activeCountryData = enrichCountriesData(JSON.parse(JSON.stringify(INITIAL_COUNTRIES)));

  // Sync status model
  let syncStatus: SyncStatus = {
    active: false,
    currentIndicatorIndex: 0,
    currentIndicatorCode: "",
    progress: 0,
    logs: ["Ready to pull live data from World Bank API."]
  };

  // 1. API: Get classification of indices
  app.get("/api/indicators", (req: Request, res: Response) => {
    res.json(INDICATOR_MAPPINGS);
  });

  // 2. API: Get country datasets
  app.get("/api/countries", (req: Request, res: Response) => {
    res.json(activeCountryData);
  });

  // 3. API: Get sync status
  app.get("/api/sync-status", (req: Request, res: Response) => {
    res.json(syncStatus);
  });

  // 4. API: Reset country datasets back to initial baseline numbers
  app.post("/api/reset", (req: Request, res: Response) => {
    activeCountryData = enrichCountriesData(JSON.parse(JSON.stringify(INITIAL_COUNTRIES)));
    syncStatus = {
      active: false,
      currentIndicatorIndex: 0,
      currentIndicatorCode: "",
      progress: 0,
      logs: ["Country data reset successfully into high-fidelity World Bank baseline data."]
    };
    res.json({ success: true, countries: activeCountryData });
  });

  // 5. API: Trigger a live sync of indicators from World Bank API
  app.post("/api/sync-live", async (req: Request, res: Response) => {
    if (syncStatus.active) {
      res.status(400).json({ error: "A synchronization is already actively in progress." });
      return;
    }

    syncStatus.active = true;
    syncStatus.progress = 0;
    syncStatus.logs = ["Initiated full connection sequence to api.worldbank.org..."];
    res.json({ started: true });

    // Background process for synchronization to prevent blocking the HTTP response
    (async () => {
      try {
        const mappings = INDICATOR_MAPPINGS;
        
        for (let idx = 0; idx < mappings.length; idx++) {
          const indicator = mappings[idx];
          syncStatus.currentIndicatorIndex = idx;
          syncStatus.currentIndicatorCode = indicator.code;
          syncStatus.progress = Math.round((idx / mappings.length) * 100);
          syncStatus.logs.push(`[${idx + 1}/${mappings.length}] Fetching series code ${indicator.code} (${indicator.name})...`);

          try {
            // World Bank WDI indicators endpoint: get data from year 2021 to 2024 to find the most recent non-null records
            const response = await fetch(
              `https://api.worldbank.org/v2/country/all/indicator/${indicator.code}?format=json&date=2021:2024&per_page=1500`,
              { headers: { "Accept": "application/json" } }
            );

            if (!response.ok) {
              throw new Error(`HTTP network error: status ${response.status}`);
            }

            const data = await response.json();
            
            // Check if World Bank returned valid array data
            if (Array.isArray(data) && data.length >= 2 && Array.isArray(data[1])) {
              const records = data[1];
              let matchedCount = 0;

              // Filter records that have values and match our country items
              for (const record of records) {
                if (record.value === null) continue;
                
                const iso3 = record.countryiso3code;
                const yearValue = parseFloat(record.value);
                
                // Find country in activeCountryData
                const targetCountry = activeCountryData.find(
                  (c: any) => c.countryCode.toUpperCase() === iso3?.toUpperCase()
                );

                if (targetCountry) {
                  // Only update if we don't have a value yet, or if this is the newest date available
                  const currentStoredVal = targetCountry.values[indicator.code];
                  
                  // World bank returns data sorted desc by date, so the first non-null record for a country is the most recent!
                  if (currentStoredVal === undefined || record.date > (targetCountry._last_dates?.[indicator.code] || "0000")) {
                    targetCountry.values[indicator.code] = yearValue;
                    if (!targetCountry._last_dates) targetCountry._last_dates = {};
                    targetCountry._last_dates[indicator.code] = record.date;
                    matchedCount++;
                  }
                }
              }

              syncStatus.logs.push(
                `✓ Successfully processed ${matchedCount} records for series ${indicator.code}.`
              );
            } else {
              syncStatus.logs.push(`⚠ Warning: World Bank API returned empty or unexpected format for ${indicator.code}.`);
            }
          } catch (fetchErr: any) {
            syncStatus.logs.push(`❌ Error loading indicators ${indicator.code}: ${fetchErr.message}`);
          }

          // Small delay between calls to be nice to World Bank servers
          await new Promise((r) => setTimeout(r, 600));
        }

        // Clean internal helper dates before finalization
        activeCountryData.forEach((c: any) => {
          delete c._last_dates;
        });

        syncStatus.active = false;
        syncStatus.progress = 100;
        syncStatus.logs.push("🎉 Complete synchronization achieved! Active indicators database is live and fully updated.");
      } catch (err: any) {
        syncStatus.active = false;
        syncStatus.error = err.message;
        syncStatus.logs.push(`🛑 Process failed: ${err.message}`);
      }
    })();
  });

  // Serve Vite in development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // Serve static files in production
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req: Request, res: Response) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Express application active on http://0.0.0.0:${PORT}`);
  });
}

startServer();
