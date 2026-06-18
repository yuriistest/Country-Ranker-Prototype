/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { WellBeingCategory, CountryValue, IndicatorMapping, MCDAResult, MCDAMethod } from "../types";

/**
 * Derives numeric weights based on candidate rank order (1-indexed, size N)
 */
export function calculateRankWeights(
  orderedCategories: WellBeingCategory[],
  formula: "linear" | "roc" | "exponential" | "equal" = "linear"
): { [category in WellBeingCategory]?: number } {
  const N = orderedCategories.length;
  const weights: { [category in WellBeingCategory]?: number } = {};

  if (formula === "equal") {
    const w = 1 / N;
    orderedCategories.forEach((cat) => {
      weights[cat] = w;
    });
    return weights;
  }

  if (formula === "linear") {
    const sum = (N * (N + 1)) / 2;
    orderedCategories.forEach((cat, idx) => {
      // Rank is standard 1-indexed: idx + 1
      const rank = idx + 1;
      weights[cat] = (N - rank + 1) / sum;
    });
    return weights;
  }

  if (formula === "roc") {
    // Rank Order Centroid: w_i = (1 / N) * sum_{k=i}^N (1 / k)
    orderedCategories.forEach((cat, idx) => {
      const i = idx + 1;
      let sum = 0;
      for (let k = i; k <= N; k++) {
        sum += 1 / k;
      }
      weights[cat] = sum / N;
    });
    return weights;
  }

  if (formula === "exponential") {
    let sum = 0;
    const decay = 0.4; // decay factor
    orderedCategories.forEach((cat, idx) => {
      const value = Math.exp(-decay * idx);
      weights[cat] = value;
      sum += value;
    });
    // Normalize
    orderedCategories.forEach((cat) => {
      weights[cat] = (weights[cat] || 0) / sum;
    });
    return weights;
  }

  return weights;
}

/**
 * Normalizes values across countries for a specific indicator.
 * Handles both profit parameters (higher is better) and cost parameters (lower is better).
 */
export function getNormalizedMatrix(
  countries: CountryValue[],
  indicators: IndicatorMapping[]
): { [countryCode: string]: { [indicatorCode: string]: number } } {
  const matrix: { [countryCode: string]: { [indicatorCode: string]: number } } = {};
  
  // Initialize matrix objects
  countries.forEach((country) => {
    matrix[country.countryCode] = {};
  });

  indicators.forEach((ind) => {
    // Extract non-null points
    const points = countries
      .map((c) => c.values[ind.code])
      .filter((v) => v !== undefined && !isNaN(v));

    if (points.length === 0) return;

    const maxVal = Math.max(...points);
    const minVal = Math.min(...points);
    const diff = maxVal - minVal;

    countries.forEach((c) => {
      const raw = c.values[ind.code];
      if (raw === undefined || isNaN(raw)) {
        matrix[c.countryCode][ind.code] = 0; // fallback if missing
        return;
      }

      if (diff === 0) {
        matrix[c.countryCode][ind.code] = 1.0;
        return;
      }

      if (ind.influenceType === "positive") {
        matrix[c.countryCode][ind.code] = (raw - minVal) / diff;
      } else {
        // Lower is better (PM2.5, Homicides, Unemployment)
        matrix[c.countryCode][ind.code] = (maxVal - raw) / diff;
      }
    });
  });

  return matrix;
}

/**
 * 1. Weighted Sum Model (WSM) implementation
 */
export function runWSM(
  countries: CountryValue[],
  indicators: IndicatorMapping[],
  weights: { [category in WellBeingCategory]?: number },
  normMatrix: { [cc: string]: { [indCode: string]: number } }
): MCDAResult[] {
  const categoryCounts: { [category: string]: number } = {};
  indicators.forEach((ind) => {
    categoryCounts[ind.category] = (categoryCounts[ind.category] || 0) + 1;
  });

  const results: MCDAResult[] = countries.map((c) => {
    let score = 0;
    const scoreBreakdown: { [category: string]: number } = {};

    indicators.forEach((ind) => {
      const normVal = normMatrix[c.countryCode][ind.code] || 0;
      const categoryWeight = weights[ind.category] || 0;
      const indicatorCount = categoryCounts[ind.category] || 1;
      const contributedScore = normVal * (categoryWeight / indicatorCount);
      score += contributedScore;
      scoreBreakdown[ind.category] = (scoreBreakdown[ind.category] || 0) + contributedScore;
    });

    return {
      countryCode: c.countryCode,
      countryName: c.countryName,
      score,
      rank: 0,
      scoreBreakdown
    };
  });

  // Sort down by score
  return sortAndRank(results);
}

/**
 * 2. TOPSIS Algorithm implementation
 */
export function runTOPSIS(
  countries: CountryValue[],
  indicators: IndicatorMapping[],
  weights: { [category in WellBeingCategory]?: number },
  normMatrix: { [cc: string]: { [indCode: string]: number } }
): MCDAResult[] {
  const categoryCounts: { [category: string]: number } = {};
  indicators.forEach((ind) => {
    categoryCounts[ind.category] = (categoryCounts[ind.category] || 0) + 1;
  });

  // 1. Calculate Vector Normalization helper (TOPSIS traditionally uses vector normalization,
  // but min-max is often preferred. We will apply weighted normalized values v_ij = w_j * norm_ij)
  const weightedMatrix: { [cc: string]: { [indCode: string]: number } } = {};
  countries.forEach((c) => {
    weightedMatrix[c.countryCode] = {};
    indicators.forEach((ind) => {
      const normVal = normMatrix[c.countryCode][ind.code] || 0;
      const categoryWeight = weights[ind.category] || 0;
      const indicatorCount = categoryCounts[ind.category] || 1;
      weightedMatrix[c.countryCode][ind.code] = normVal * (categoryWeight / indicatorCount);
    });
  });

  // 2. Identify Ideal-Best (V+) and Ideal-Worst (V-) values for indicators
  const idealBest: { [indCode: string]: number } = {};
  const idealWorst: { [indCode: string]: number } = {};

  indicators.forEach((ind) => {
    const list = countries.map((c) => weightedMatrix[c.countryCode][ind.code] || 0);
    idealBest[ind.code] = Math.max(...list);
    idealWorst[ind.code] = Math.min(...list);
  });

  // 3. Compute distances and relative closeness index
  const results: MCDAResult[] = countries.map((c) => {
    let distBestSum = 0;
    let distWorstSum = 0;
    const scoreBreakdown: { [category: string]: number } = {};

    indicators.forEach((ind) => {
      const v = weightedMatrix[c.countryCode][ind.code] || 0;
      distBestSum += Math.pow(v - idealBest[ind.code], 2);
      distWorstSum += Math.pow(v - idealWorst[ind.code], 2);

      // Save breakdown for charts
      scoreBreakdown[ind.category] = (scoreBreakdown[ind.category] || 0) + v;
    });

    const dBest = Math.sqrt(distBestSum);
    const dWorst = Math.sqrt(distWorstSum);
    
    // Relative Closeness to ideal: CC = distance_worst / (distance_best + distance_worst)
    const cc = (dBest + dWorst === 0) ? 0 : dWorst / (dBest + dWorst);

    return {
      countryCode: c.countryCode,
      countryName: c.countryName,
      score: cc,
      rank: 0,
      scoreBreakdown
    };
  });

  return sortAndRank(results);
}

/**
 * 3. PROMETHEE II Algorithm implementation (Net Outranking Flows)
 */
export function runPROMETHEE(
  countries: CountryValue[],
  indicators: IndicatorMapping[],
  weights: { [category in WellBeingCategory]?: number },
  normMatrix: { [cc: string]: { [indCode: string]: number } }
): MCDAResult[] {
  const categoryCounts: { [category: string]: number } = {};
  indicators.forEach((ind) => {
    categoryCounts[ind.category] = (categoryCounts[ind.category] || 0) + 1;
  });

  // Pairing comparisons Matrix
  const m = countries.length;
  const leavingFlow: { [cc: string]: number } = {};
  const enteringFlow: { [cc: string]: number } = {};

  countries.forEach((c) => {
    leavingFlow[c.countryCode] = 0;
    enteringFlow[c.countryCode] = 0;
  });

  // For each pair (a, b) compute global preferences
  countries.forEach((countryA) => {
    countries.forEach((countryB) => {
      if (countryA.countryCode === countryB.countryCode) return;

      let preferenceIndex = 0;
      indicators.forEach((ind) => {
        const valA = normMatrix[countryA.countryCode][ind.code] || 0;
        const valB = normMatrix[countryB.countryCode][ind.code] || 0;
        const categoryWeight = weights[ind.category] || 0;
        const indicatorCount = categoryCounts[ind.category] || 1;

        // Linear preference function: P(a, b) = max(0, valA - valB)
        const d = valA - valB;
        if (d > 0) {
          preferenceIndex += d * (categoryWeight / indicatorCount);
        }
      });

      // leaving flow is total preference countryA outranks others
      leavingFlow[countryA.countryCode] += preferenceIndex;
      // entering flow is total preference others outrank countryA
      enteringFlow[countryB.countryCode] += preferenceIndex;
    });
  });

  // Calculate average flows and net outranking scores
  const results: MCDAResult[] = countries.map((c) => {
    const leaving = leavingFlow[c.countryCode] / (m - 1);
    const entering = enteringFlow[c.countryCode] / (m - 1);
    const net = leaving - entering; // ranges between -1 and 1

    // Build static score breakdown based on weighted normalised values
    const scoreBreakdown: { [category: string]: number } = {};
    indicators.forEach((ind) => {
      const v = normMatrix[c.countryCode][ind.code] || 0;
      const categoryWeight = weights[ind.category] || 0;
      const indicatorCount = categoryCounts[ind.category] || 1;
      scoreBreakdown[ind.category] = (scoreBreakdown[ind.category] || 0) + v * (categoryWeight / indicatorCount);
    });

    return {
      countryCode: c.countryCode,
      countryName: c.countryName,
      score: net,
      rank: 0,
      scoreBreakdown
    };
  });

  return sortAndRank(results);
}

/**
 * 4. Analytic Hierarchy Process (AHP) simulation.
 * In a real AHP, weights are computed from a pairwise comparison matrix of criteria.
 * Since the user provides a linear ranking list, we can model the AHP comparison matrix
 * mathematically based on rank distance (using standard Saaty scales: 1 to 9).
 * E.g., if criteria A has rank 1 and B has rank 3, ratio is ~3.
 */
export function runAHP(
  countries: CountryValue[],
  indicators: IndicatorMapping[],
  orderedCategories: WellBeingCategory[],
  normMatrix: { [cc: string]: { [indCode: string]: number } }
): MCDAResult[] {
  // Step 1: Create Saaty ratio matrix of categories which are active
  const cats = orderedCategories;
  const size = cats.length;
  const comparisonMatrix: number[][] = Array(size)
    .fill(0)
    .map(() => Array(size).fill(1));

  // Populate Saaty ratio matrix based on ranking positions
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      if (i === j) {
        comparisonMatrix[i][j] = 1;
      } else {
        const rankDiff = j - i; // positive if j is worse than i, negative if better
        if (rankDiff > 0) {
          // i outranks j: Saaty scores 1, 3, 5, 7, 9
          const value = Math.min(9, 1 + rankDiff * 2);
          comparisonMatrix[i][j] = value;
        } else {
          // j outranks i
          const value = Math.min(9, 1 + Math.abs(rankDiff) * 2);
          comparisonMatrix[i][j] = 1 / value;
        }
      }
    }
  }

  // Step 2: Compute priority vector using geometric mean or column normalization method
  const colSums = Array(size).fill(0);
  for (let col = 0; col < size; col++) {
    for (let row = 0; row < size; row++) {
      colSums[col] += comparisonMatrix[row][col];
    }
  }

  const ahpWeightsList = Array(size).fill(0);
  for (let row = 0; row < size; row++) {
    let sum = 0;
    for (let col = 0; col < size; col++) {
      sum += comparisonMatrix[row][col] / colSums[col];
    }
    ahpWeightsList[row] = sum / size;
  }

  // Map back to category weights
  const ahpWeights: { [category in WellBeingCategory]?: number } = {};
  cats.forEach((cat, idx) => {
    ahpWeights[cat] = ahpWeightsList[idx];
  });

  // Run WSM scoring using Saaty priority weights
  return runWSM(countries, indicators, ahpWeights, normMatrix);
}

/**
 * 5. ELECTRE Simplified Outranking method.
 * We calculate concordance indexes C(a, b) and filter outranked alternatives.
 * Scores are summarized from the outranking dominance.
 */
export function runELECTRE(
  countries: CountryValue[],
  indicators: IndicatorMapping[],
  weights: { [category in WellBeingCategory]?: number },
  normMatrix: { [cc: string]: { [indCode: string]: number } }
): MCDAResult[] {
  const categoryCounts: { [category: string]: number } = {};
  indicators.forEach((ind) => {
    categoryCounts[ind.category] = (categoryCounts[ind.category] || 0) + 1;
  });

  const m = countries.length;
  const dominanceScore: { [cc: string]: number } = {};
  countries.forEach((c) => {
    dominanceScore[c.countryCode] = 0;
  });

  // Calculate pairwise Concordance Matrix: C(a, b) = sum of weights where valA >= valB
  const concordance: { [pair: string]: number } = {};
  countries.forEach((cA) => {
    countries.forEach((cB) => {
      if (cA.countryCode === cB.countryCode) return;

      let weightSum = 0;
      let totalWeights = 0;

      indicators.forEach((ind) => {
        const valA = normMatrix[cA.countryCode][ind.code] || 0;
        const valB = normMatrix[cB.countryCode][ind.code] || 0;
        const categoryWeight = weights[ind.category] || 0;
        const indicatorCount = categoryCounts[ind.category] || 1;
        const w = categoryWeight / indicatorCount;
        
        totalWeights += w;
        if (valA >= valB) {
          weightSum += w;
        }
      });

      concordance[`${cA.countryCode}-${cB.countryCode}`] = totalWeights > 0 ? weightSum / totalWeights : 0;
    });
  });

  // Calculate Net Concordance Index to rank alternatives (traditional ELECTRE outranking dominance):
  // Score = sum_{b} C(a, b) - sum_{b} C(b, a)
  countries.forEach((cA) => {
    countries.forEach((cB) => {
      if (cA.countryCode === cB.countryCode) return;
      const cAB = concordance[`${cA.countryCode}-${cB.countryCode}`] || 0;
      const cBA = concordance[`${cB.countryCode}-${cA.countryCode}`] || 0;
      
      dominanceScore[cA.countryCode] += cAB;
      dominanceScore[cB.countryCode] -= cAB;
    });
  });

  const results: MCDAResult[] = countries.map((c) => {
    const rawScore = dominanceScore[c.countryCode] / (m - 1); // average outranking dominance
    
    // Scale to positive [0-1] range for visual polish
    const scoreBreakdown: { [category: string]: number } = {};
    indicators.forEach((ind) => {
      const v = normMatrix[c.countryCode][ind.code] || 0;
      const categoryWeight = weights[ind.category] || 0;
      const indicatorCount = categoryCounts[ind.category] || 1;
      scoreBreakdown[ind.category] = (scoreBreakdown[ind.category] || 0) + v * (categoryWeight / indicatorCount);
    });

    return {
      countryCode: c.countryCode,
      countryName: c.countryName,
      score: rawScore,
      rank: 0,
      scoreBreakdown
    };
  });

  return sortAndRank(results);
}

/**
 * Normalizes scores to [0 - 100] range for sleek UI plotting
 */
export function scaleScoresToPercentage(results: MCDAResult[]): MCDAResult[] {
  if (results.length === 0) return results;
  const scores = results.map((r) => r.score);
  const max = Math.max(...scores);
  const min = Math.min(...scores);
  const diff = max - min;

  return results.map((r) => {
    const pctScore = diff === 0 ? 100 : Math.round(((r.score - min) / diff) * 100);
    return {
      ...r,
      score: pctScore
    };
  });
}

/**
 * Computes Consensus Rank by aggregating and averaging ranks across all decision methodologies
 */
export function runConsensus(
  wsm: MCDAResult[],
  topsis: MCDAResult[],
  promethee: MCDAResult[],
  ahp: MCDAResult[],
  electre: MCDAResult[]
): MCDAResult[] {
  const scoreMap: { [cc: string]: { name: string; sumRank: number; breakdowns: any } } = {};

  const accum = (list: MCDAResult[]) => {
    list.forEach((r) => {
      if (!scoreMap[r.countryCode]) {
        scoreMap[r.countryCode] = {
          name: r.countryName,
          sumRank: 0,
          breakdowns: r.scoreBreakdown
        };
      }
      scoreMap[r.countryCode].sumRank += r.rank;
    });
  };

  accum(wsm);
  accum(topsis);
  accum(promethee);
  accum(ahp);
  accum(electre);

  const results: MCDAResult[] = Object.keys(scoreMap).map((cc) => {
    const entry = scoreMap[cc];
    const avgRank = entry.sumRank / 5; // 5 constituent methods
    
    // Invert avg rank for score logic: lower average rank is better, so out of 30, (30 - avgRank) is higher score
    const size = Object.keys(scoreMap).length;
    const computedScore = size - avgRank + 1;

    return {
      countryCode: cc,
      countryName: entry.name,
      score: computedScore,
      rank: 0,
      scoreBreakdown: entry.breakdowns
    };
  });

  return sortAndRank(results);
}

/**
 * Internal utility to sort results descending and append ordinal ranks
 */
function sortAndRank(results: MCDAResult[]): MCDAResult[] {
  const sorted = [...results].sort((a, b) => b.score - a.score);
  return sorted.map((res, idx) => ({
    ...res,
    rank: idx + 1
  }));
}
