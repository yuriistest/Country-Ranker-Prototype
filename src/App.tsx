/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { 
  motion, 
  AnimatePresence,
  Reorder
} from "motion/react";
import { 
  Sliders, 
  RefreshCw, 
  Database, 
  Info, 
  Globe, 
  Award, 
  Search, 
  GripVertical,
  Sun,
  Moon,
  ChevronUp,
  ChevronDown,
  X,
  BookOpen,
  ArrowUpDown
} from "lucide-react";
import { WellBeingCategory, MCDAMethod, CountryValue, IndicatorMapping, MCDAResult, SyncStatus } from "./types";
import { INDICATOR_MAPPINGS } from "./data/countries";
import { 
  calculateRankWeights, 
  getNormalizedMatrix, 
  runWSM, 
  runTOPSIS, 
  runPROMETHEE, 
  runAHP, 
  runELECTRE, 
  runConsensus, 
  scaleScoresToPercentage 
} from "./components/MCDAMethods";
import { Language, TRANSLATIONS, LANGUAGE_NAMES } from "./data/translations";

const FLAG_MAP: { [code: string]: string } = {
  NOR: "🇳🇴", DNK: "🇩🇰", FIN: "🇫🇮", SWE: "🇸🇪", CHE: "🇨🇭",
  USA: "🇺🇸", CAN: "🇨🇦", DEU: "🇩🇪", GBR: "🇬🇧", FRA: "🇫🇷",
  JPN: "🇯🇵", SGP: "🇸🇬", AUS: "🇦🇺", NZL: "🇳🇿", KOR: "🇰🇷",
  IRL: "🇮🇪", BRA: "🇧🇷", MEX: "🇲🇽", ZAF: "🇿🇦", IND: "🇮🇳",
  CHN: "🇨🇳", ARG: "🇦🇷", SAU: "🇸🇦", TUR: "🇹🇷", NGA: "🇳🇬",
  KEN: "🇰🇪", EGY: "🇪🇬", ESP: "🇪🇸", ITA: "🇮🇹", NLD: "🇳🇱",
  UKR: "🇺🇦"
};

// Default alphabetical categories order
const getSortedCategoriesForLanguage = (language: Language): WellBeingCategory[] => {
  const translationsForLang = TRANSLATIONS[language];
  return Object.values(WellBeingCategory).sort((a, b) => {
    const nameA = translationsForLang?.categoryNames[a] || a;
    const nameB = translationsForLang?.categoryNames[b] || b;
    return nameA.localeCompare(nameB, language);
  });
};

export default function App() {
  // 1. Language & Theme States
  const [lang, setLang] = useState<Language>(() => {
    const cached = localStorage.getItem("app_lang");
    return (cached && Object.values(Language).includes(cached as Language)) ? (cached as Language) : Language.EN;
  });
  
  const [isDark, setIsDark] = useState<boolean>(() => {
    return localStorage.getItem("app_theme") === "dark";
  });

  // 2. Core Operational States
  const [categories, setCategories] = useState<WellBeingCategory[]>(() => {
    const cached = localStorage.getItem("app_lang");
    const initialLang = (cached && Object.values(Language).includes(cached as Language)) ? (cached as Language) : Language.EN;
    return getSortedCategoriesForLanguage(initialLang);
  });
  const [countriesData, setCountriesData] = useState<CountryValue[]>([]);
  const [selectedMethod, setSelectedMethod] = useState<MCDAMethod>(MCDAMethod.WSM);
  
  // Results structures
  const [results, setResults] = useState<MCDAResult[]>([]);
  const [top3, setTop3] = useState<MCDAResult[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");

  // UI accordion views toggles
  const [expandedCategories, setExpandedCategories] = useState<{ [cat in WellBeingCategory]?: boolean }>({});
  const [showSyncPanel, setShowSyncPanel] = useState<boolean>(false);
  const [showFramework, setShowFramework] = useState<boolean>(false);
  const [showEquations, setShowEquations] = useState<boolean>(false);
  const [showAllRankings, setShowAllRankings] = useState<boolean>(false);
  const [overlaySearch, setOverlaySearch] = useState<string>("");
  const [expandedCountryInOverlay, setExpandedCountryInOverlay] = useState<string | null>(null);

  // Sync status
  const [syncStatus, setSyncStatus] = useState<SyncStatus>({
    active: false,
    currentIndicatorIndex: 0,
    currentIndicatorCode: "",
    progress: 0,
    logs: ["Ready to connect to World Bank API."]
  });

  // Load translations dictionary
  const t = TRANSLATIONS[lang] || TRANSLATIONS[Language.EN];

  // Persist settings
  useEffect(() => {
    localStorage.setItem("app_lang", lang);
  }, [lang]);

  useEffect(() => {
    localStorage.setItem("app_theme", isDark ? "dark" : "light");
    const root = document.getElementById("main-root");
    if (root) {
      if (isDark) {
        root.classList.add("dark");
      } else {
        root.classList.remove("dark");
      }
    }
  }, [isDark]);

  // Load baseline values on component mount
  useEffect(() => {
    fetchCountriesData();
    fetchSyncStatus();
  }, []);

  // Poll server sync status if sync is running
  useEffect(() => {
    let intervalId: any;
    if (syncStatus.active) {
      intervalId = setInterval(() => {
        fetchSyncStatus();
      }, 1200);
    }
    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [syncStatus.active]);

  // AUTOMATIC CALCULATION IN REAL TIME on state changes
  useEffect(() => {
    if (countriesData && countriesData.length > 0) {
      performMCDACalculation(countriesData, categories, selectedMethod);
    }
  }, [countriesData, categories, selectedMethod]);

  const fetchCountriesData = async () => {
    try {
      const res = await fetch("/api/countries");
      if (res.ok) {
        const data = await res.json();
        setCountriesData(data);
      }
    } catch (err) {
      console.error("Failed to load country data", err);
    }
  };

  const fetchSyncStatus = async () => {
    try {
      const res = await fetch("/api/sync-status");
      if (res.ok) {
        const data = await res.json();
        setSyncStatus(data);
        if (!data.active && syncStatus.active) {
          fetchCountriesData();
        }
      }
    } catch (err) {
      console.error("Failed to retrieve sync status", err);
    }
  };

  const startLiveSync = async () => {
    try {
      const res = await fetch("/api/sync-live", { method: "POST" });
      if (res.ok) {
        setSyncStatus(prev => ({ ...prev, active: true, logs: ["Connecting..."] }));
        setShowSyncPanel(true);
      }
    } catch (err) {
      console.error("Failed to start live sync", err);
    }
  };

  const resetToBaseline = async () => {
    if (confirm(t.confirmReset)) {
      try {
        const res = await fetch("/api/reset", { method: "POST" });
        if (res.ok) {
          const data = await res.json();
          setCountriesData(data.countries);
        }
      } catch (err) {
        console.error("Reset failed", err);
      }
    }
  };

  // MCDA Computation Engine
  const performMCDACalculation = (
    currentData: CountryValue[],
    activeCategories: WellBeingCategory[],
    method: MCDAMethod
  ) => {
    if (!currentData || currentData.length === 0) return;

    // A. Normalise raw indicators uniformly (using min-max feature scaling)
    const normMatrix = getNormalizedMatrix(currentData, INDICATOR_MAPPINGS);

    // B. Calculate Rank Order Centroid (ROC) weights dynamically on the fly
    const weights = calculateRankWeights(activeCategories, "roc");

    // C. Resolve using chosen evaluation logic
    let computedResults: MCDAResult[] = [];

    switch (method) {
      case MCDAMethod.WSM:
        computedResults = runWSM(currentData, INDICATOR_MAPPINGS, weights, normMatrix);
        break;
      case MCDAMethod.TOPSIS:
        computedResults = runTOPSIS(currentData, INDICATOR_MAPPINGS, weights, normMatrix);
        break;
      case MCDAMethod.PROMETHEE:
        computedResults = runPROMETHEE(currentData, INDICATOR_MAPPINGS, weights, normMatrix);
        break;
      case MCDAMethod.AHP:
        computedResults = runAHP(currentData, INDICATOR_MAPPINGS, activeCategories, normMatrix);
        break;
      case MCDAMethod.ELECTRE:
        computedResults = runELECTRE(currentData, INDICATOR_MAPPINGS, weights, normMatrix);
        break;
      case MCDAMethod.COMPROMISE:
        const rWSM = runWSM(currentData, INDICATOR_MAPPINGS, weights, normMatrix);
        const rTOPSIS = runTOPSIS(currentData, INDICATOR_MAPPINGS, weights, normMatrix);
        const rPROMETHEE = runPROMETHEE(currentData, INDICATOR_MAPPINGS, weights, normMatrix);
        const rAHP = runAHP(currentData, INDICATOR_MAPPINGS, activeCategories, normMatrix);
        const rELECTRE = runELECTRE(currentData, INDICATOR_MAPPINGS, weights, normMatrix);
        computedResults = runConsensus(rWSM, rTOPSIS, rPROMETHEE, rAHP, rELECTRE);
        break;
    }

    // D. Scale scores to beautiful 0-100% ranges
    const scaledResults = scaleScoresToPercentage(computedResults);

    setResults(scaledResults);
    setTop3(scaledResults.slice(0, 3));
  };

  // Up/Down arrows for mobile screen clicks and Accessibility
  const moveCategory = (index: number, direction: "up" | "down") => {
    const targetIdx = index + (direction === "up" ? -1 : 1);
    if (targetIdx < 0 || targetIdx >= categories.length) return;
    
    const nextCategories = [...categories];
    const temp = nextCategories[index];
    nextCategories[index] = nextCategories[targetIdx];
    nextCategories[targetIdx] = temp;
    
    setCategories(nextCategories);
  };

  const reorderAtoZ = () => {
    setCategories(getSortedCategoriesForLanguage(lang));
  };

  const invertOrder = () => {
    setCategories([...categories].reverse());
  };

  const toggleCategoryExpand = (cat: WellBeingCategory) => {
    setExpandedCategories(prev => ({
      ...prev,
      [cat]: !prev[cat]
    }));
  };

  // Full indicator weights calculation for visual indicator bars
  const computedWeights = calculateRankWeights(categories, "roc");

  // Filter rankings list based on search/filtering input
  const filteredResults = results.filter((r) =>
    r.countryName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    r.countryCode.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Helper to extract top 3 performing well-being categories for a country card
  const getCategoryPerformanceForCountry = (ccResult: MCDAResult, limit = 3) => {
    if (!ccResult || !ccResult.scoreBreakdown) return [];
    
    return Object.entries(ccResult.scoreBreakdown)
      .map(([cat, val]) => {
        const weight = computedWeights[cat as WellBeingCategory] || 0;
        const score = weight > 0 ? (val / weight) : 0;
        return { category: cat as WellBeingCategory, score, weight };
      })
      .filter(item => item.weight > 0.001) // Only active categories with non-trivial decision weight
      .sort((a, b) => b.score - a.score)
      .slice(0, limit);
  };

  // Helper to render beautiful visual scorecard tags inside country tiles
  const renderCountryDimensions = (ccResult: MCDAResult) => {
    const topCats = getCategoryPerformanceForCountry(ccResult, 3);
    
    const isFirst = top3[0]?.countryCode === ccResult.countryCode;
    const isSecond = top3[1]?.countryCode === ccResult.countryCode;
    
    let barColor = "bg-amber-500";
    let textColor = "text-amber-800 dark:text-amber-300";
    let bgBarColor = "bg-amber-500/10 dark:bg-amber-500/20";
    
    if (isSecond) {
      barColor = "bg-slate-400";
      textColor = "text-slate-600 dark:text-[#A3A99B]";
      bgBarColor = "bg-slate-400/10 dark:bg-slate-400/20";
    } else if (!isFirst && !isSecond) {
      barColor = "bg-amber-700";
      textColor = "text-amber-700 dark:text-amber-500";
      bgBarColor = "bg-amber-700/10 dark:bg-amber-700/20";
    }

    if (topCats.length === 0) return null;

    return (
      <div className="my-2.5 py-1 flex-1 flex flex-col justify-center min-h-0">
        <span className={`text-[9px] uppercase tracking-wider font-bold block mb-1.5 ${textColor}`}>
          {t.weightedAchievementsLabel}
        </span>
        <div className="space-y-1.5">
          {topCats.map(({ category, score }) => {
            const pct = Math.round(score * 100);
            return (
              <div key={category} className="space-y-0.5" id={`card-cat-${category}`}>
                <div className="flex justify-between items-center text-[10px]">
                  <span className={`truncate mr-2 font-medium ${isDark ? "text-[#E5E9E2]/85" : "text-[#3E4238]/85"}`}>
                    {t.categoryNames[category] || category}
                  </span>
                  <span className={`font-mono font-bold text-[9px] shrink-0 ${isDark ? "text-[#A3A99B]" : "text-[#7C8573]"}`}>
                    {pct}%
                  </span>
                </div>
                {/* Visual score micro-indicator bar */}
                <div className={`h-1.5 w-full rounded-full overflow-hidden ${bgBarColor}`}>
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${pct}%` }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className={`h-full rounded-full ${barColor}`}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div 
      id="main-root" 
      className={`min-h-screen lg:h-screen lg:overflow-hidden font-sans antialiased transition-colors duration-300 flex flex-col ${
        isDark 
          ? "bg-[#11140E] text-[#E5E9E2]" 
          : "bg-[#FDFCF8] text-[#3E4238]"
      }`}
    >
      
      {/* 1. HEADER & GLOBAL CONTROLS */}
      <header className={`border-b transition-colors duration-300 py-3.5 px-4 md:px-8 shadow-xs shrink-0 ${
        isDark ? "bg-[#191D16] border-[#252C21]" : "bg-white border-[#E6E8E1]"
      }`}>
        <div className="max-w-7xl mx-auto flex flex-row justify-between items-center gap-4">
          <div className="space-y-px">
            <h1 className={`text-lg md:text-xl font-serif font-semibold tracking-tight leading-none ${
              isDark ? "text-white" : "text-[#2C332A]"
            }`}>
              {t.title}
            </h1>
            <p className={`text-[11px] md:text-xs opacity-85 ${
              isDark ? "text-[#A3A99B]" : "text-[#7C8573]"
            }`}>
              {t.subtitle}
            </p>
          </div>

          {/* Compact Action Hub */}
          <div className="flex items-center gap-2.5 shrink-0">
            {/* Language Selector */}
            <div className="flex items-center gap-1">
              <span className="text-[10px] font-bold uppercase tracking-wider opacity-75 hidden sm:inline">{t.langLabel}:</span>
              <select
                value={lang}
                onChange={(e) => setLang(e.target.value as Language)}
                className={`py-1 pl-1.5 pr-6 text-[11px] font-bold rounded border focus:outline-none cursor-pointer ${
                  isDark 
                    ? "bg-[#242A20] border-[#384332] text-white" 
                    : "bg-[#FDFCF8] border-[#D6DBCF] text-[#3E4238]"
                }`}
              >
                {Object.entries(Language).map(([key, val]) => (
                  <option key={val} value={val}>{LANGUAGE_NAMES[val]}</option>
                ))}
              </select>
            </div>

            {/* Dark Theme Toggle */}
            <button
              onClick={() => setIsDark(!isDark)}
              className={`p-1.5 rounded border transition-colors cursor-pointer ${
                isDark 
                  ? "bg-[#242A20] border-[#384332] text-amber-400 hover:bg-[#323B2D]" 
                  : "bg-white border-[#D6DBCF] text-amber-600 hover:bg-[#F4F5F0]"
              }`}
              title={isDark ? t.themeToggleLight : t.themeToggleDark}
            >
              {isDark ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
            </button>

            {/* Reset Button */}
            <button
              onClick={resetToBaseline}
              className={`p-1.5 rounded border transition-colors cursor-pointer ${
                isDark 
                  ? "bg-[#242A20] border-[#384332] text-white hover:bg-[#323B2D]" 
                  : "bg-white border-[#D6DBCF] text-[#5A6D56] hover:bg-[#F4F5F0]"
              }`}
              title={t.resetStatsBtn}
            >
              <RefreshCw className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </header>

      {/* 2. CORE COMPACT VIEWPORT: NO SCROLLING NEEDED */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 md:px-8 py-4 overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-6 min-h-0">
        {/* ================= LEFT COLUMN: CATEGORIES prioritization (5/12 COLS) ================= */}
        <div className={`lg:col-span-5 border rounded-2xl p-4 flex flex-col h-full min-h-0 overflow-hidden transition-colors duration-300 ${
          isDark ? "bg-[#191D16] border-[#252C21]" : "bg-white border-[#E6E8E1]"
        }`}>
          <div className="flex justify-between items-center mb-1 shrink-0">
            <h2 className={`text-sm font-bold inline-flex items-center gap-1.5 ${
              isDark ? "text-white" : "text-[#5A634F]"
            }`}>
              <Sliders className="w-4 h-4 font-bold" />
              {t.prioritiesTitle}
            </h2>
            <span className={`text-[9px] font-mono tracking-wider uppercase px-1.5 py-0.5 rounded ${
              isDark ? "bg-[#252C21] text-[#A3A99B]" : "bg-[#EDF0E9] text-[#7C8573]"
            }`}>
              {t.prioritiesRankHelp}
            </span>
          </div>
                      {/* Quick Sort Actions */}
            <div className="flex items-center gap-1.5 mb-3 shrink-0">
              <button
                onClick={reorderAtoZ}
                className={`px-2 py-1 text-[10px] font-semibold border rounded transition cursor-pointer flex items-center gap-1 ${
                  isDark 
                    ? "bg-[#242A20] border-[#384332] text-white hover:bg-[#323B2D]" 
                    : "bg-[#EDF0E9] border-[#D6DBCF] text-[#5A634F] hover:bg-[#D6DBCF]"
                }`}
              >
                <ArrowUpDown className="w-2.5 h-2.5" />
                {t.sortAzBtn}
              </button>
              <button
                onClick={invertOrder}
                className={`px-2 py-1 text-[10px] font-semibold border rounded transition cursor-pointer flex items-center gap-1 ${
                  isDark 
                    ? "bg-[#242A20] border-[#384332] text-white hover:bg-[#323B2D]" 
                    : "bg-[#EDF0E9] border-[#D6DBCF] text-[#5A634F] hover:bg-[#D6DBCF]"
                }`}
              >
                <ArrowUpDown className="w-2.5 h-2.5" />
                {t.invertOrderBtn}
              </button>
            </div>

            {/* Compact Sortable priorities list */}
            <Reorder.Group
              as="div"
              axis="y"
              values={categories}
              onReorder={setCategories}
              className="space-y-1.5 flex-1 overflow-y-auto pr-1 scrollbar-thin container-snap min-h-0"
              id="categories-sortable-list"
            >
              {categories.map((category, index) => {
                const isExpanded = !!expandedCategories[category];
                const mappedIndicators = INDICATOR_MAPPINGS.filter(m => m.category === category);

                return (
                  <Reorder.Item
                    as="div"
                    key={category}
                    value={category}
                    className={`border rounded-xl cursor-grab active:cursor-grabbing overflow-hidden ${
                      isDark 
                        ? "bg-[#20261D]/50 border-[#2D3528]/80 hover:bg-[#252D21] hover:border-[#3E4935]" 
                        : "bg-[#FDFCF8] border-[#E6E8E1] hover:bg-white hover:border-[#5A6D56]"
                    }`}
                  >
                    <div className="p-2 px-3 flex items-center justify-between gap-2">
                      {/* Drag handles + Ordinal index */}
                      <div className="flex items-center gap-2 min-w-0">
                        <span className={`text-[10px] font-mono font-bold w-5 h-5 rounded-full flex items-center justify-center border shrink-0 ${
                          isDark 
                            ? "bg-[#283024] text-[#8EA685] border-[#384332]" 
                            : "bg-[#EDF0E9] text-[#5A6D56] border-[#D6DBCF]"
                        }`}>
                          {index + 1}
                        </span>
                        
                        <div className="text-neutral-400 cursor-grab active:cursor-grabbing p-0.5 shrink-0 opacity-40 hover:opacity-100" title="Drag to reorder">
                          <GripVertical className="w-3.5 h-3.5" />
                        </div>

                        <h4 className={`font-semibold font-serif text-xs truncate ${isDark ? "text-white" : "text-[#2C332A]"}`}>
                          {t.categoryNames[category] || category}
                        </h4>
                      </div>

                      {/* Expand / Collapse Details Chevron */}
                      <div className="flex items-center shrink-0">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleCategoryExpand(category);
                          }}
                          className={`p-1 rounded-md border transition active:scale-95 cursor-pointer ${
                            isDark 
                              ? "bg-[#2A3126] border-[#3E4935] text-neutral-300 hover:bg-[#384332]" 
                              : "bg-[#F4F5F0] border-[#D6DBCF] text-[#5A6D56] hover:bg-[#EDF0E9]"
                          }`}
                          title={isExpanded ? "Collapse details" : "Expand details"}
                        >
                          {isExpanded ? (
                            <ChevronUp className="w-3.5 h-3.5" />
                          ) : (
                            <ChevronDown className="w-3.5 h-3.5" />
                          )}
                        </button>
                      </div>
                    </div>

                    {/* Collapsible panel with detailed World Bank indicators */}
                    <AnimatePresence initial={false}>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.15 }}
                          className={`border-t p-3 text-xs space-y-2.5 leading-relaxed transition-colors duration-150 ${
                            isDark ? "bg-[#1E231C]/60 border-[#252C21]" : "bg-[#F4F5F0]/40 border-[#E6E8E1]"
                          }`}
                        >
                          <div className="space-y-2.5 max-h-48 overflow-y-auto pr-1 scrollbar-thin">
                            {mappedIndicators.map((ind) => (
                              <div key={ind.code} className="space-y-1 text-[11px] border-b last:border-0 pb-2 last:pb-0 border-dashed border-neutral-300 dark:border-neutral-700">
                                <div className="flex justify-between items-start gap-2">
                                  <span className={`font-bold font-serif leading-tight ${isDark ? "text-white" : "text-[#2C332A]"}`}>
                                    {ind.name}
                                  </span>
                                  <span className={`px-1.5 py-0.5 rounded text-[8px] font-bold uppercase shrink-0 ${
                                    ind.influenceType === "positive" 
                                      ? "bg-[#EDF0E9] text-[#5A634F] border border-[#D6DBCF]" 
                                      : "bg-red-500/10 text-red-400 border border-red-500/20"
                                  }`}>
                                    {ind.influenceType === "positive" ? t.benefitType : t.costType}
                                  </span>
                                </div>
                                <span className="text-[9px] font-mono opacity-70 block mt-0.5">
                                  WDI series: {ind.code}
                                </span>
                                <p className="opacity-80 text-[#7C8573] dark:text-[#A3A99B] leading-relaxed">
                                  {ind.description}
                                </p>
                                
                                <div className={`p-2 rounded-lg text-[10px] border leading-relaxed ${
                                  isDark ? "bg-[#141812] border-[#2C3328]" : "bg-white border-[#D6DBCF]"
                                }`}>
                                  <strong className="block text-[#5A6D56] font-semibold">
                                    {t.scientificRationaleTitle}
                                  </strong>
                                  {ind.scientificRationale}
                                </div>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </Reorder.Item>
                );
              })}
            </Reorder.Group>
          </div>

          {/* ================= RIGHT COLUMN: WELL-BEING DASHBOARD (7/12 COLS) ================= */}
        <div className="lg:col-span-7 flex flex-col h-full min-h-0 overflow-hidden space-y-4">
          
          {/* SECTION 2: ALGORITHM SELECTOR */}
          <div className={`border rounded-2xl p-4 flex flex-col shrink-0 transition-colors duration-300 ${
            isDark ? "bg-[#191D16] border-[#252C21]" : "bg-white border-[#E6E8E1]"
          }`}>
            <h2 className={`text-sm font-bold mb-1.5 inline-flex items-center gap-1.5 ${
              isDark ? "text-white" : "text-[#5A634F]"
            }`}>
              <Award className="w-4 h-4 text-[#5A6D56]" />
              {t.algorithmTitle}
            </h2>

            {/* Seamless segmented decision tool grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5 shrink-0">
              {Object.values(MCDAMethod).map((method) => {
                const isActive = selectedMethod === method;
                return (
                  <button
                    key={method}
                    onClick={() => setSelectedMethod(method)}
                    className={`px-2.5 py-1.5 text-left text-[11px] font-bold rounded-xl border transition duration-150 cursor-pointer flex flex-col justify-between ${
                      isActive
                        ? isDark 
                          ? "bg-[#5A6D56] border-[#8EA685] text-white shadow-xs" 
                          : "bg-[#5A6D56] border-[#5A6D56] text-white shadow-xs"
                        : isDark
                          ? "bg-[#20261D] border-[#2D3328] text-[#A3A99B] hover:bg-[#252D21] hover:text-white"
                          : "bg-[#FDFCF8] border-[#E6E8E1] text-[#5A634F] hover:bg-[#F4F5F0] hover:text-[#2C332A]"
                    }`}
                  >
                    <span className="block">{t.methodNames[method] || method}</span>
                  </button>
                );
              })}
            </div>

            {/* Micro Algorithm Information Panel inlined */}
            <div className={`mt-2 p-2 rounded-lg border flex items-start gap-2 text-[10.5px] leading-snug transition-colors duration-200 shrink-0 ${
              isDark 
                ? "bg-[#1E231C] border-[#2A3226]" 
                : "bg-[#F4F5F0]/40 border-[#E6E8E1]"
            }`}>
              <Info className="w-4 h-4 text-[#5A6D56] shrink-0 mt-0.5" />
              <p className="opacity-90">{t.activeMethodInsights[selectedMethod]}</p>
            </div>
          </div>

          {/* RESULTS DASHBOARD: TOP PERFORMERS */}
          <div className={`border rounded-2xl p-4 flex flex-col flex-1 min-h-0 overflow-hidden transition-colors duration-300 ${
            isDark ? "bg-[#191D16] border-[#252C21]" : "bg-white border-[#E6E8E1]"
          }`}>
            <div className="shrink-0 mb-3 flex items-start justify-between gap-4">
              <div>
                <h2 className={`text-sm font-bold inline-flex items-center gap-1.5 ${
                  isDark ? "text-white" : "text-[#5A634F]"
                }`}>
                  🏆 {t.podiumTitle}
                </h2>
                <p className={`text-[11px] leading-snug mt-0.5 ${
                  isDark ? "text-[#A3A99B]" : "text-[#7C8573]"
                }`}>
                  {t.podiumSub}
                </p>
              </div>
              <button
                onClick={() => {
                  setOverlaySearch("");
                  setExpandedCountryInOverlay(null);
                  setShowAllRankings(true);
                }}
                className={`text-xs font-bold inline-flex items-center gap-1.5 py-1 px-3.5 rounded-xl border cursor-pointer active:scale-95 transition-all duration-150 shrink-0 ${
                  isDark 
                    ? "bg-[#5A6D56]/15 hover:bg-[#5A6D56]/25 border-[#5A6D56]/40 text-[#8EA685]" 
                    : "bg-[#EDF0E9] hover:bg-[#E2E7DE] border-[#D6DBCF] text-[#5A6D56]"
                }`}
              >
                <Globe className="w-3.5 h-3.5 animate-pulse" />
                <span>{t.allRankingsTitle}</span>
              </button>
            </div>

            {/* Dynamic Podium View: ORDERED FROM LEFT TO RIGHT (#1, #2, #3) */}
            {top3.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 flex-1 overflow-y-auto pr-1">
                {/* #1 Champion */}
                <motion.div
                  key={`podium-1-${top3[0]?.countryCode}`}
                  initial={{ scale: 0.98, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className={`relative rounded-xl border p-3 flex flex-col justify-between overflow-hidden shadow-xs border-amber-500/25 ${
                    isDark ? "bg-[#2B271A]" : "bg-[#FFFCEB]"
                  }`}
                >
                  <div className="absolute top-0 right-0 p-2 text-xl font-black text-amber-500/20 font-serif">
                    #1
                  </div>
                  <div>
                    <span className="text-2xl leading-none mb-0.5 block">
                      {FLAG_MAP[top3[0].countryCode] || "🏳️"}
                    </span>
                    <h3 className={`font-bold font-serif text-xs uppercase truncate ${
                      isDark ? "text-amber-200" : "text-amber-950"
                    }`}>
                      {top3[0].countryName}
                    </h3>
                    <span className="text-[9px] font-mono tracking-wider text-amber-600 block leading-none mt-0.5">
                      {top3[0].countryCode}
                    </span>
                  </div>

                  {/* Render the country's top well-being index components in the empty space */}
                  {renderCountryDimensions(top3[0])}

                  <div className="mt-2 pt-2 border-t border-amber-500/10 flex justify-between items-center bg-transparent mt-auto">
                    <span className="text-[9px] uppercase font-bold text-amber-600">
                      {t.aggregatedScoreLabel}
                    </span>
                    <span className="font-mono font-bold text-[10px] bg-amber-500/10 border border-amber-500/20 text-amber-600 px-1.5 py-0.5 rounded">
                      {top3[0].score}%
                    </span>
                  </div>
                </motion.div>
 
                {/* #2 Runner up */}
                {top3[1] && (
                  <motion.div
                    key={`podium-2-${top3[1]?.countryCode}`}
                    initial={{ scale: 0.98, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className={`relative rounded-xl border p-3 flex flex-col justify-between overflow-hidden shadow-xs border-slate-500/20 ${
                      isDark ? "bg-[#202525]" : "bg-[#F7FAF9]"
                    }`}
                  >
                    <div className="absolute top-0 right-0 p-2 text-xl font-black text-slate-500/20 font-serif">
                      #2
                    </div>
                    <div>
                      <span className="text-2xl leading-none mb-0.5 block">
                        {FLAG_MAP[top3[1].countryCode] || "🏳️"}
                      </span>
                      <h3 className={`font-bold font-serif text-xs uppercase truncate ${
                        isDark ? "text-slate-200" : "text-slate-950"
                      }`}>
                        {top3[1].countryName}
                      </h3>
                      <span className="text-[9px] font-mono tracking-wider text-slate-500 block leading-none mt-0.5">
                        {top3[1].countryCode}
                      </span>
                    </div>

                    {/* Render the country's top well-being index components in the empty space */}
                    {renderCountryDimensions(top3[1])}

                    <div className="mt-2 pt-2 border-t border-slate-500/10 flex justify-between items-center bg-transparent mt-auto">
                      <span className="text-[9px] uppercase font-bold text-slate-500">
                        {t.aggregatedScoreLabel}
                      </span>
                      <span className="font-mono font-bold text-[10px] bg-slate-500/10 border border-slate-500/20 text-slate-500 px-1.5 py-0.5 rounded">
                        {top3[1].score}%
                      </span>
                    </div>
                  </motion.div>
                )}
 
                {/* #3 Second Runner up */}
                {top3[2] && (
                  <motion.div
                    key={`podium-3-${top3[2]?.countryCode}`}
                    initial={{ scale: 0.98, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className={`relative rounded-xl border p-3 flex flex-col justify-between overflow-hidden shadow-xs border-amber-700/15 ${
                      isDark ? "bg-[#29221D]" : "bg-[#FCF7F2]"
                    }`}
                  >
                    <div className="absolute top-0 right-0 p-2 text-xl font-black text-amber-700/15 font-serif">
                      #3
                    </div>
                    <div>
                      <span className="text-2xl leading-none mb-0.5 block">
                        {FLAG_MAP[top3[2].countryCode] || "🏳️"}
                      </span>
                      <h3 className={`font-bold font-serif text-xs uppercase truncate ${
                        isDark ? "text-amber-600" : "text-amber-950"
                      }`}>
                        {top3[2].countryName}
                      </h3>
                      <span className="text-[9px] font-mono tracking-wider text-amber-700 block leading-none mt-0.5">
                        {top3[2].countryCode}
                      </span>
                    </div>

                    {/* Render the country's top well-being index components in the empty space */}
                    {renderCountryDimensions(top3[2])}

                    <div className="mt-2 pt-2 border-t border-amber-700/10 flex justify-between items-center bg-transparent mt-auto">
                      <span className="text-[9px] uppercase font-bold text-amber-700 font-semibold">
                        {t.aggregatedScoreLabel}
                      </span>
                      <span className="font-mono font-bold text-[10px] bg-amber-700/10 border border-amber-700/20 text-amber-700 px-1.5 py-0.5 rounded">
                        {top3[2].score}%
                      </span>
                    </div>
                  </motion.div>
                )}
              </div>
            ) : (
              <div className="text-center py-6 opacity-65 text-xs">
                {t.noDataDescription}
              </div>
            )}
          </div>
        </div>

      </main>

      {/* FULL COUNTRIES STANDINGS OVERLAY */}
      <AnimatePresence>
        {showAllRankings && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
            {/* Backdrop click to dismiss */}
            <div className="absolute inset-0" onClick={() => setShowAllRankings(false)} />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className={`relative w-full max-w-2xl rounded-2xl border shadow-2xl flex flex-col max-h-[85vh] overflow-hidden ${
                isDark 
                  ? "bg-[#161A13] border-[#252C21] text-[#E5E9E2]" 
                  : "bg-white border-[#E6E8E1] text-[#3E4238]"
              }`}
            >
              {/* Overlay Header */}
              <div className={`p-4 border-b flex justify-between items-start shrink-0 ${
                isDark ? "border-[#252C21]" : "border-[#E6E8E1]"
              }`}>
                <div>
                  <h3 className={`text-sm font-bold font-serif flex items-center gap-2 ${
                    isDark ? "text-white" : "text-[#2C332A]"
                  }`}>
                    <Globe className="w-5 h-5 text-[#5A6D56]" />
                    {t.allRankingsTitle}
                  </h3>
                  <p className={`text-[11px] leading-snug mt-0.5 ${
                    isDark ? "text-[#A3A99B]" : "text-[#7C8573]"
                  }`}>
                    {t.allRankingsSub} ({Math.min(20, results.length)} {t.tableCountryCol.toLowerCase()})
                  </p>
                </div>
                <button
                  onClick={() => setShowAllRankings(false)}
                  className={`p-1.5 rounded-lg border transition cursor-pointer active:scale-95 ${
                    isDark 
                      ? "bg-[#20261D] border-[#2D3328] hover:bg-[#252D21] text-neutral-400" 
                      : "bg-[#FDFCF8] border-[#E6E8E1] hover:bg-[#F4F5F0] text-neutral-500"
                  }`}
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Overlay Search */}
              <div className={`p-3 border-b shrink-0 flex items-center gap-2 ${
                isDark ? "border-[#252C21] bg-[#1B2118]" : "border-[#E6E8E1] bg-[#FDFCF8]"
              }`}>
                <Search className="w-4 h-4 text-neutral-400 shrink-0" />
                <input
                  type="text"
                  value={overlaySearch}
                  onChange={(e) => setOverlaySearch(e.target.value)}
                  placeholder={t.searchPlaceholder || "Search countries..."}
                  className="w-full bg-transparent border-0 focus:outline-none text-xs"
                />
                {overlaySearch && (
                  <button
                    onClick={() => setOverlaySearch("")}
                    className="text-[10px] uppercase font-bold text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200"
                  >
                    Clear
                  </button>
                )}
              </div>

              {/* Scrollable stand list */}
              <div className="flex-1 overflow-y-auto divide-y divide-neutral-100 dark:divide-neutral-800">
                {results
                  .slice(0, 20)
                  .filter((r) =>
                    r.countryName.toLowerCase().includes(overlaySearch.toLowerCase()) ||
                    r.countryCode.toLowerCase().includes(overlaySearch.toLowerCase())
                  )
                  .map((r) => {
                    const isExpanded = expandedCountryInOverlay === r.countryCode;
                    const topCats = getCategoryPerformanceForCountry(r, 6);
                    
                    let rankBadgeBg = "bg-neutral-500/10 text-neutral-500 border-neutral-500/20";
                    if (r.rank === 1) rankBadgeBg = "bg-amber-500/20 text-amber-500 border-amber-500/30";
                    else if (r.rank === 2) rankBadgeBg = "bg-slate-400/20 text-slate-400 border-slate-400/30";
                    else if (r.rank === 3) rankBadgeBg = "bg-amber-700/20 text-amber-700 border-amber-700/30";

                    return (
                      <div key={r.countryCode} className="flex flex-col transition duration-150">
                        <div 
                          onClick={() => setExpandedCountryInOverlay(isExpanded ? null : r.countryCode)}
                          className={`flex items-center justify-between p-3.5 cursor-pointer text-xs select-none ${
                            isDark 
                              ? "hover:bg-[#20261D] active:bg-[#1C2119]" 
                              : "hover:bg-[#F4F5F0]/60 active:bg-[#EDF0E9]"
                          }`}
                        >
                          <div className="flex items-center gap-3 min-w-0">
                            {/* Rank Badge */}
                            <span className={`w-8 h-8 rounded-full border flex items-center justify-center font-mono font-bold text-[11px] shrink-0 ${rankBadgeBg}`}>
                              #{r.rank}
                            </span>
                            
                            {/* Flag & Name */}
                            <div className="min-w-0">
                              <div className="flex items-center gap-1.5">
                                <span className="text-lg leading-none shrink-0">{FLAG_MAP[r.countryCode] || "🏳️"}</span>
                                <span className={`font-serif font-semibold truncate ${
                                  isDark ? "text-white" : "text-[#2C332A]"
                                }`}>
                                  {r.countryName}
                                </span>
                              </div>
                              <span className="text-[9px] font-mono opacity-60 tracking-wider">
                                Code: {r.countryCode}
                              </span>
                            </div>
                          </div>

                          {/* Score and percentage */}
                          <div className="flex items-center gap-4 shrink-0">
                            <div className="hidden sm:flex flex-col items-end gap-1 w-24">
                              <div className="flex justify-between w-full text-[10px] font-medium opacity-75">
                                <span>Score</span>
                                <span className="font-mono">{r.score}%</span>
                              </div>
                              <div className={`h-1.5 w-full rounded-full overflow-hidden ${
                                isDark ? "bg-[#252D21]" : "bg-[#EDF0E9]"
                              }`}>
                                <div 
                                  className={`h-full rounded-full transition-all duration-300 ${
                                    r.rank === 1 ? "bg-amber-500" : r.rank === 2 ? "bg-slate-400" : "bg-emerald-600"
                                  }`} 
                                  style={{ width: `${r.score}%` }} 
                                />
                              </div>
                            </div>
                            <div className="flex flex-col items-center gap-0.5">
                              <span className={`font-mono font-bold text-[10px] px-1.5 py-0.5 rounded ${
                                isDark ? "bg-[#20261D] border border-[#2D3328]" : "bg-[#EDF0E9] border border-[#D6DBCF]"
                              }`}>
                                {r.score}%
                              </span>
                              <span className="text-[8px] uppercase tracking-wider text-neutral-400 font-bold block sm:hidden">
                                Score
                              </span>
                            </div>
                            <span className="text-neutral-400">
                              {isExpanded ? (
                                <ChevronUp className="w-4 h-4" />
                              ) : (
                                <ChevronDown className="w-4 h-4" />
                              )}
                            </span>
                          </div>
                        </div>

                        {/* Breakdown dropdown panel */}
                        <AnimatePresence>
                          {isExpanded && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.15 }}
                              className={`border-t px-12 py-3 text-[11px] ${
                                isDark ? "bg-[#121610]" : "bg-[#FBFBFA]"
                              }`}
                            >
                              <span className={`text-[9px] uppercase tracking-wider font-bold block mb-2 text-[#5A6D56]`}>
                                🔍 {t.weightedAchievementsLabel} & Dimension Scorecard
                              </span>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 mt-1">
                                {topCats.map(({ category, score, weight }) => {
                                  const pct = Math.round(score * 100);
                                  return (
                                    <div key={category} className="space-y-1 pb-1 border-b last:border-0 sm:last:border-b border-neutral-100 dark:border-[#20241D]">
                                      <div className="flex justify-between items-center text-[10.5px]">
                                        <span className={`truncate mr-2 ${isDark ? "text-neutral-300" : "text-[#3E4238]"}`}>
                                          {t.categoryNames[category] || category}
                                        </span>
                                        <div className="font-mono text-[9.5px] text-neutral-500 flex items-center gap-1.5">
                                          <span className="opacity-75">wt: {(weight * 100).toFixed(1)}%</span>
                                          <span className={`font-bold ${isDark ? "text-neutral-300" : "text-[#2C332A]"}`}>{pct}%</span>
                                        </div>
                                      </div>
                                      <div className={`h-1.5 w-full rounded-full overflow-hidden ${
                                        isDark ? "bg-[#1E231C]" : "bg-neutral-100"
                                      }`}>
                                        <div 
                                          className="h-full rounded-full bg-[#5A6D56]" 
                                          style={{ width: `${pct}%` }}
                                        />
                                      </div>
                                    </div>
                                  );
                                })}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
              </div>

              {/* Overlay Footer */}
              <div className={`p-3 border-t text-[10px] opacity-75 flex justify-between items-center shrink-0 ${
                isDark ? "border-[#252C21] bg-[#121510]" : "border-[#E6E8E1] bg-[#FDFCF8]"
              }`}>
                <span>Selected Decision Model: <strong>{t.methodNames[selectedMethod]}</strong></span>
                <span>Click any item to view indicator details</span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* FOOTER */}
      <footer className={`mt-16 py-8 px-4 md:px-8 text-center text-xs border-t transition-colors duration-300 ${
        isDark ? "bg-[#191D16] border-[#252C21] text-[#7C8573]" : "bg-white border-[#E6E8E1] text-[#A3A99B]"
      }`}>
        <p className="max-w-md mx-auto leading-relaxed mb-3">
          Designed with Inter & Space Grotesk typography. Powered by real-time Multi-Criteria Decision Analysis math on the World Bank World Development Indicators (WDI) CC BY 4.0 sandbox database.
        </p>
        <p className={`text-[10px] uppercase tracking-wider font-bold ${isDark ? "text-[#8EA685]" : "text-[#5A634F]"}`}>
          UNESCO, World Bank & FAO Development Datasets, © 2026
        </p>
      </footer>

    </div>
  );
}

// Spin loader
function LoaderIcon({ className }: { className?: string }) {
  return (
    <svg className={`animate-spin h-4 w-4 ${className}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
  );
}
