/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export enum WellBeingCategory {
  INCOME_WEALTH = "Income and wealth",
  WORK_JOB_QUALITY = "Work and job quality",
  SOCIAL_CONNECTIONS = "Social connections",
  KNOWLEDGE_SKILLS = "Knowledge and skills",
  ENVIRONMENTAL_QUALITY = "Environmental quality",
  CIVIC_ENGAGEMENT = "Civic Engagement",
  HEALTH = "Health",
  SUBJECTIVE_WELL_BEING = "Subjective well-being",
  SAFETY = "Safety",
  WORK_LIFE_BALANCE = "Work-life balance"
}

export enum MCDAMethod {
  WSM = "Weighted sum model (WSM)",
  TOPSIS = "TOPSIS (Ideal Solution Similarity)",
  PROMETHEE = "PROMETHEE II (Net Outranking Flows)",
  ELECTRE = "ELECTRE (Simplified Outranking)",
  AHP = "Analytic hierarchy process (AHP)",
  COMPROMISE = "Concensus/Combination Tracker"
}

export interface IndicatorMapping {
  code: string;
  name: string;
  category: WellBeingCategory;
  description: string;
  influenceType: "positive" | "negative"; // positive (higher is better) or negative (lower is better, e.g. homicides, PM2.5)
  scientificRationale: string;
}

export interface CountryValue {
  countryCode: string; // ISO 3166-1 alpha-3
  countryName: string;
  values: { [indicatorCode: string]: number }; // Cached/real values
}

export interface MCDAResult {
  countryCode: string;
  countryName: string;
  score: number;
  rank: number;
  scoreBreakdown: { [category: string]: number }; // Normalized/weighted components for charts
}

export interface SyncStatus {
  active: boolean;
  currentIndicatorIndex: number;
  currentIndicatorCode: string;
  progress: number;
  logs: string[];
  error?: string;
}
