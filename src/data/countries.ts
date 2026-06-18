/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { WellBeingCategory, IndicatorMapping, CountryValue } from "../types";

export const INDICATOR_MAPPINGS: IndicatorMapping[] = [
  // 1. Income and Wealth
  {
    code: "WB_WDI_NY_GDP_PCAP_PP_KD",
    name: "GDP per Capita (PPP, Constant 2017 $)",
    category: WellBeingCategory.INCOME_WEALTH,
    description: "Gross domestic product split by population, adjusted for price level differences (purchasing power parity) across countries.",
    influenceType: "positive",
    scientificRationale: "Higher per capita income directly expands the personal consumption capability, resource buffer, housing choice, and materials security of households."
  },
  {
    code: "WB_WDI_NY_ADJ_NNTY_PC_KD",
    name: "Adjusted Net National Income per Capita (Constant 2015 $)",
    category: WellBeingCategory.INCOME_WEALTH,
    description: "Adjusted net national income is of gross national income minus consumption of fixed capital and natural resources depletion to represent sustainable purchasing power per capita.",
    influenceType: "positive",
    scientificRationale: "Directly relates to the real surplus income households have access to for basic and discretionary spending once capital deterioration and resource drain are subtracted."
  },
  {
    code: "WB_WDI_SI_POV_GINI",
    name: "Gini Index (Income Inequality)",
    category: WellBeingCategory.INCOME_WEALTH,
    description: "Measures the extent to which the distribution of income among individuals or households within an economy deviates from a perfectly equal distribution.",
    influenceType: "negative",
    scientificRationale: "Lower income inequality ensures broader financial security, social stability, and higher trust within the population."
  },

  // 2. Work and Job Quality
  {
    code: "WB_WDI_SL_UEM_TOTL_ZS",
    name: "Unemployment Rate (% of Labor Force)",
    category: WellBeingCategory.WORK_JOB_QUALITY,
    description: "The percentage of the active labor force that is currently out of work but actively seeking a job position.",
    influenceType: "negative",
    scientificRationale: "Stable, high-quality employment provides not only material livelihood but also pride, structural daily routine, and personal dignity. Low unemployment is a primary benchmark of labor market quality."
  },
  {
    code: "WB_WDI_SL_EMP_TOTL_SP_ZS",
    name: "Employment to Population Ratio (%, Age 15+)",
    category: WellBeingCategory.WORK_JOB_QUALITY,
    description: "The proportion of a nation's population aged 15 and older that is actively employed, indicating overall labor market integration.",
    influenceType: "positive",
    scientificRationale: "Higher employment-to-population indices represent robust social integration and economic active engagement, reducing long-term household financial dependency."
  },
  {
    code: "WB_WDI_SL_TLF_ACTI_ZS",
    name: "Labor Force Participation Rate (%)",
    category: WellBeingCategory.WORK_JOB_QUALITY,
    description: "The proportion of the population ages 15 and older that is economically active: all people who supply labor for the production of goods and services.",
    influenceType: "positive",
    scientificRationale: "Active participation in economic life is strongly associated with social integration, personal agency, and economic security."
  },

  // 3. Social Connections
  {
    code: "WB_WDI_IT_NET_USER_ZS",
    name: "Internet Use (% of Population)",
    category: WellBeingCategory.SOCIAL_CONNECTIONS,
    description: "The share of individuals who have accessed the worldwide web over the last 3 months via mobile or stationary hardware.",
    influenceType: "positive",
    scientificRationale: "Digital exclusion hampers social connectivity in modern societies. Internet access acts as an essential catalyst for maintaining domestic relationships, accessing knowledge communities, and organizing peer meetings."
  },
  {
    code: "WB_WDI_IT_CEL_SETS_P2",
    name: "Mobile Cellular Subscriptions (per 100 people)",
    category: WellBeingCategory.SOCIAL_CONNECTIONS,
    description: "The number of active mobile connection subscriptions per 100 people, showing local communications coverage.",
    influenceType: "positive",
    scientificRationale: "Ubiquitous mobile communication tools are fundamental for maintaining contact and emergency coordinates, promoting social bonding and peer support networks."
  },
  {
    code: "WB_WDI_IT_NET_BBND",
    name: "Fixed Broadband Subscriptions (per 100 people)",
    category: WellBeingCategory.SOCIAL_CONNECTIONS,
    description: "Fixed subscriptions to high-speed internet services, providing reliable connectivity for households and businesses.",
    influenceType: "positive",
    scientificRationale: "High-speed internet access is crucial for deep social inclusion, remote working, and keeping in touch with global communities."
  },

  // 4. Knowledge and Skills
  {
    code: "WB_WDI_SE_SEC_ENRL",
    name: "Secondary Education Enrollment Ratio (%)",
    category: WellBeingCategory.KNOWLEDGE_SKILLS,
    description: "Gross enrollment ratio of primary school graduates entering secondary schooling environments, indicating access to academic development.",
    influenceType: "positive",
    scientificRationale: "Reflects the depth of institutional competency building and human capital investment which empowers individuals to navigate complex socio-economic realities and pursue high-skill livelihoods."
  },
  {
    code: "WB_WDI_SE_TER_ENRL",
    name: "Tertiary Education Enrollment Ratio (%)",
    category: WellBeingCategory.KNOWLEDGE_SKILLS,
    description: "Gross education enrollment ratio for post-secondary academic systems, reflecting advanced skill development and specialized qualifications.",
    influenceType: "positive",
    scientificRationale: "Highly advanced, tertiary-level training is key to scientific development, specialized career paths, logic cultivation, and high-order societal problem solving."
  },
  {
    code: "WB_WDI_SE_PRM_CMPT_ZS",
    name: "Primary Education Completion Rate (%)",
    category: WellBeingCategory.KNOWLEDGE_SKILLS,
    description: "The percentage of students completing the last year of primary school. Indicates basic educational foundation.",
    influenceType: "positive",
    scientificRationale: "Successfully completing primary education is the foundational pillar of literacy, lifelong cognitive development, and subsequent skill acquisition."
  },

  // 5. Environmental Quality
  {
    code: "WB_WDI_EN_ATM_PM25_MC_M3",
    name: "PM2.5 Air Pollution (μg/m³ Exposure)",
    category: WellBeingCategory.ENVIRONMENTAL_QUALITY,
    description: "Mean annual population-weighted exposure to ambient suspended particulate matter measuring under 2.5 micrometers in aerodynamic diameter.",
    influenceType: "negative",
    scientificRationale: "Fine PM2.5 particulates penetrate deep into the human alveoli and bloodstream, representing major respiratory hazards. Cleaner, pollutant-free air is foundational to ecological well-being."
  },
  {
    code: "WB_WDI_EN_ATM_CO2E_PC",
    name: "CO2 Emissions (Metric Tons per Capita)",
    category: WellBeingCategory.ENVIRONMENTAL_QUALITY,
    description: "Carbon dioxide emissions stemming from burning fossil fuels and cement manufacture, standardized on a per capita basis.",
    influenceType: "negative",
    scientificRationale: "Greenhouse gas output reflects the carbon intensity and ecological sustainability of human industrial systems. Minimizing CO2 per capita is vital for mitigating climate disruptions."
  },
  {
    code: "WB_WDI_EG_FEC_RNEW_ZS",
    name: "Renewable Energy Consumption Share (%)",
    category: WellBeingCategory.ENVIRONMENTAL_QUALITY,
    description: "The share of renewable energy in total final energy consumption, indicating transition to green power.",
    influenceType: "positive",
    scientificRationale: "A higher share of renewable energy consumption directly offsets fossil fuels, protects local ecosystems, and mitigates long-term global warming threat."
  },

  // 6. Civic Engagement
  {
    code: "WB_WDI_SG_GEN_PARL_ZS",
    name: "Women in National Parliaments (%)",
    category: WellBeingCategory.CIVIC_ENGAGEMENT,
    description: "The percentage of governmental legislative tier seats occupied by women, depicting political and civic pluralism.",
    influenceType: "positive",
    scientificRationale: "A robust indicator of institutional fairness, democratic openness, gender representation, and civic inclusivity in state policy-making frameworks."
  },
  {
    code: "WB_WDI_SL_TLF_TOTL_FE_ZS",
    name: "Female Labor Force Share (% of Total Labor Force)",
    category: WellBeingCategory.CIVIC_ENGAGEMENT,
    description: "The percentage of the total active labor force that is female, showcasing civic inclusion and institutional gender parity in public life.",
    influenceType: "positive",
    scientificRationale: "Measures economic democratization and the active participation of women in the socio-political and economic spheres of national life."
  },
  {
    code: "WB_WDI_IC_REG_DURS",
    name: "Time Required to Start a Business (Days)",
    category: WellBeingCategory.CIVIC_ENGAGEMENT,
    description: "The number of calendar days needed to complete the required procedures to legally operate a commercial or industrial business.",
    influenceType: "negative",
    scientificRationale: "Lower regulatory barriers enable entrepreneurial civic expression, enhance economic democratization, and reduce corrupt gatekeeping."
  },

  // 7. Health
  {
    code: "WB_WDI_SP_DYN_LE00_IN",
    name: "Life Expectancy at Birth (Years)",
    category: WellBeingCategory.HEALTH,
    description: "Average number of years a biological newborn is projected to survive if prevailing age-specific mortality patterns persist throughout its lifetime.",
    influenceType: "positive",
    scientificRationale: "The supreme summary indicator of aggregate somatic health outcomes, nutrition, clinical safety, hygiene infrastructure, and lifestyle survivability."
  },
  {
    code: "WB_WDI_SP_DYN_IMRT_IN",
    name: "Infant Mortality Rate (per 1,000 live births)",
    category: WellBeingCategory.HEALTH,
    description: "The number of infant deaths occurring under one year of age per 1,000 live births in a given year.",
    influenceType: "negative",
    scientificRationale: "An extremely sensitive proxy for neonatal care standards, household nutritional quality, sanitary security, access to clinics, and baseline child survival factors."
  },
  {
    code: "WB_WDI_SH_XPD_CHEX_GD_ZS",
    name: "Current Health Expenditure (% of GDP)",
    category: WellBeingCategory.HEALTH,
    description: "Level of healthcare spending relative to the size of the economy, including both public and private expenditures.",
    influenceType: "positive",
    scientificRationale: "Robust national investment in health infrastructures correlates with better medical access, lower patient burden, and preemptive sanitary security."
  },

  // 8. Subjective Well-being
  {
    code: "WB_WDI_NY_ADJ_SVNG_GN_ZS",
    name: "Adjusted Net National Savings (% of GNI)",
    category: WellBeingCategory.SUBJECTIVE_WELL_BEING,
    description: "Net national savings adjusted for education spending (positive) and natural resource depletion / pollution damages (positive/negative), representing long-term system stability.",
    influenceType: "positive",
    scientificRationale: "High long-term adjusted savings reflect lower systemic vulnerability and stable community futures, correlating highly with high national confidence, trust, and subjective well-being."
  },
  {
    code: "WB_WDI_FP_CPI_TOTL_ZG",
    name: "Inflation Rate (Annual % of Consumer Prices)",
    category: WellBeingCategory.SUBJECTIVE_WELL_BEING,
    description: "The percentage change in the cost to the average consumer of acquiring a basket of goods and services, measuring price stability.",
    influenceType: "negative",
    scientificRationale: "Unstable or soaring consumer inflation directly degrades real purchasing power, induces financial anxiety, and lowers people's psychological well-being and life satisfaction scores."
  },
  {
    code: "WB_WDI_NY_GDP_MKTP_KD_ZG",
    name: "Annual GDP Growth Rate (%)",
    category: WellBeingCategory.SUBJECTIVE_WELL_BEING,
    description: "Annual percentage growth rate of GDP at market prices based on constant local currency, indicating economic momentum.",
    influenceType: "positive",
    scientificRationale: "Positive economic growth increases consumer confidence, elevates life satisfaction, and expands job opportunities, boosting overall subjective well-being."
  },

  // 9. Safety
  {
    code: "WB_WDI_VC_IHR_PSRC_P5",
    name: "Intentional Homicide Rate (per 100k people)",
    category: WellBeingCategory.SAFETY,
    description: "The count of intentional unlawful killings of humans with death outcomes, standardized per 100,000 citizens.",
    influenceType: "negative",
    scientificRationale: "Personal, physical safety and protection from violent crime is the absolute baseline need. High homicide indices directly fracture community trust, freedom of movement, and mental tranquility."
  },
  {
    code: "WB_WDI_SH_STA_TRAF_P5",
    name: "Road Traffic Mortality Rate (per 100,000 people)",
    category: WellBeingCategory.SAFETY,
    description: "Standardized rate of deaths resulting from road traffic accidents per 100,000 people.",
    influenceType: "negative",
    scientificRationale: "Reflects public transport infrastructure quality, safety regulations, and public space security. Safe streets are vital for secure human development and peace of mind."
  },
  {
    code: "WB_WDI_SH_H2O_SMWR_ZS",
    name: "Safely Managed Drinking Water Access (%)",
    category: WellBeingCategory.SAFETY,
    description: "The percentage of the population using an improved drinking water source that is located on premises, available when needed, and free from contamination.",
    influenceType: "positive",
    scientificRationale: "Access to safe, clean drinking water is the most fundamental physical safety and health protection requirement for human survivability."
  },

  // 10. Work-life Balance
  {
    code: "WB_WDI_SL_TLF_PART_ZS",
    name: "Part-Time Employment Share (% of Total)",
    category: WellBeingCategory.WORK_LIFE_BALANCE,
    description: "The ratio of employed individuals working shorter scheduling blocks, showing the flexibility of national work regimes and availability of family time.",
    influenceType: "positive",
    scientificRationale: "The prevalence of part-time, flexible scheduling choices allows citizens to successfully negotiate child rearing, family duties, educational development, and creative leisure cycles, improving work-life balance."
  },
  {
    code: "WB_WDI_SL_SRV_EMPL_ZS",
    name: "Employment in Services (% of Total Employment)",
    category: WellBeingCategory.WORK_LIFE_BALANCE,
    description: "The percentage of employed individuals working in service sectors, which often feature white-collar, flexible, and urbanized work configurations.",
    influenceType: "positive",
    scientificRationale: "Service sector expansion correlates with highly flexible work practices, technical remote options, and less physically arduous labor cycles, enhancing work-life quality."
  },
  {
    code: "WB_WDI_SP_URB_TOTL_IN_ZS",
    name: "Urban Population Share (%)",
    category: WellBeingCategory.WORK_LIFE_BALANCE,
    description: "The portion of the total population living in urban areas, reflecting closeness to advanced labor markets, transport, and recreational options.",
    influenceType: "positive",
    scientificRationale: "Urban living offers close proximity to modern public transit hubs, diverse workspaces, and leisure options, lessening extreme commutes and aiding balance."
  }
];

export const INITIAL_COUNTRIES: CountryValue[] = [
  {
    countryCode: "NOR",
    countryName: "Norway",
    values: {
      "WB_WDI_NY_GDP_PCAP_PP_KD": 83600,
      "WB_WDI_NY_ADJ_NNTY_PC_KD": 71800,
      "WB_WDI_SL_UEM_TOTL_ZS": 3.2,
      "WB_WDI_SL_EMP_TOTL_SP_ZS": 64.8,
      "WB_WDI_IT_NET_USER_ZS": 99.0,
      "WB_WDI_IT_CEL_SETS_P2": 108.5,
      "WB_WDI_SE_SEC_ENRL": 114.5,
      "WB_WDI_SE_TER_ENRL": 81.2,
      "WB_WDI_EN_ATM_PM25_MC_M3": 6.2,
      "WB_WDI_EN_ATM_CO2E_PC": 6.5,
      "WB_WDI_SG_GEN_PARL_ZS": 46.2,
      "WB_WDI_SL_TLF_TOTL_FE_ZS": 47.1,
      "WB_WDI_SP_DYN_LE00_IN": 83.2,
      "WB_WDI_SP_DYN_IMRT_IN": 1.8,
      "WB_WDI_NY_ADJ_SVNG_GN_ZS": 29.5,
      "WB_WDI_FP_CPI_TOTL_ZG": 3.0,
      "WB_WDI_VC_IHR_PSRC_P5": 0.6,
      "WB_WDI_SH_STA_TRAF_P5": 2.1,
      "WB_WDI_SL_TLF_PART_ZS": 24.8,
      "WB_WDI_SL_SRV_EMPL_ZS": 79.2
    }
  },
  {
    countryCode: "DNK",
    countryName: "Denmark",
    values: {
      "WB_WDI_NY_GDP_PCAP_PP_KD": 71800,
      "WB_WDI_NY_ADJ_NNTY_PC_KD": 60500,
      "WB_WDI_SL_UEM_TOTL_ZS": 4.1,
      "WB_WDI_SL_EMP_TOTL_SP_ZS": 65.1,
      "WB_WDI_IT_NET_USER_ZS": 98.8,
      "WB_WDI_IT_CEL_SETS_P2": 115.4,
      "WB_WDI_SE_SEC_ENRL": 115.1,
      "WB_WDI_SE_TER_ENRL": 82.5,
      "WB_WDI_EN_ATM_PM25_MC_M3": 8.1,
      "WB_WDI_EN_ATM_CO2E_PC": 5.4,
      "WB_WDI_SG_GEN_PARL_ZS": 44.1,
      "WB_WDI_SL_TLF_TOTL_FE_ZS": 47.4,
      "WB_WDI_SP_DYN_LE00_IN": 81.5,
      "WB_WDI_SP_DYN_IMRT_IN": 2.0,
      "WB_WDI_NY_ADJ_SVNG_GN_ZS": 21.2,
      "WB_WDI_FP_CPI_TOTL_ZG": 3.3,
      "WB_WDI_VC_IHR_PSRC_P5": 0.8,
      "WB_WDI_SH_STA_TRAF_P5": 3.0,
      "WB_WDI_SL_TLF_PART_ZS": 22.1,
      "WB_WDI_SL_SRV_EMPL_ZS": 80.1
    }
  },
  {
    countryCode: "FIN",
    countryName: "Finland",
    values: {
      "WB_WDI_NY_GDP_PCAP_PP_KD": 57000,
      "WB_WDI_NY_ADJ_NNTY_PC_KD": 48200,
      "WB_WDI_SL_UEM_TOTL_ZS": 6.8,
      "WB_WDI_SL_EMP_TOTL_SP_ZS": 62.4,
      "WB_WDI_IT_NET_USER_ZS": 96.5,
      "WB_WDI_IT_CEL_SETS_P2": 128.8,
      "WB_WDI_SE_SEC_ENRL": 128.2,
      "WB_WDI_SE_TER_ENRL": 91.5,
      "WB_WDI_EN_ATM_PM25_MC_M3": 5.1,
      "WB_WDI_EN_ATM_CO2E_PC": 4.1,
      "WB_WDI_SG_GEN_PARL_ZS": 45.5,
      "WB_WDI_SL_TLF_TOTL_FE_ZS": 48.0,
      "WB_WDI_SP_DYN_LE00_IN": 82.1,
      "WB_WDI_SP_DYN_IMRT_IN": 1.9,
      "WB_WDI_NY_ADJ_SVNG_GN_ZS": 17.8,
      "WB_WDI_FP_CPI_TOTL_ZG": 3.1,
      "WB_WDI_VC_IHR_PSRC_P5": 1.2,
      "WB_WDI_SH_STA_TRAF_P5": 3.7,
      "WB_WDI_SL_TLF_PART_ZS": 19.4,
      "WB_WDI_SL_SRV_EMPL_ZS": 76.8
    }
  },
  {
    countryCode: "SWE",
    countryName: "Sweden",
    values: {
      "WB_WDI_NY_GDP_PCAP_PP_KD": 61200,
      "WB_WDI_NY_ADJ_NNTY_PC_KD": 51500,
      "WB_WDI_SL_UEM_TOTL_ZS": 7.4,
      "WB_WDI_SL_EMP_TOTL_SP_ZS": 66.8,
      "WB_WDI_IT_NET_USER_ZS": 97.2,
      "WB_WDI_IT_CEL_SETS_P2": 124.2,
      "WB_WDI_SE_SEC_ENRL": 102.5,
      "WB_WDI_SE_TER_ENRL": 74.8,
      "WB_WDI_EN_ATM_PM25_MC_M3": 5.8,
      "WB_WDI_EN_ATM_CO2E_PC": 3.4,
      "WB_WDI_SG_GEN_PARL_ZS": 46.7,
      "WB_WDI_SL_TLF_TOTL_FE_ZS": 48.2,
      "WB_WDI_SP_DYN_LE00_IN": 83.2,
      "WB_WDI_SP_DYN_IMRT_IN": 2.1,
      "WB_WDI_NY_ADJ_SVNG_GN_ZS": 22.4,
      "WB_WDI_FP_CPI_TOTL_ZG": 3.5,
      "WB_WDI_VC_IHR_PSRC_P5": 1.1,
      "WB_WDI_SH_STA_TRAF_P5": 2.0,
      "WB_WDI_SL_TLF_PART_ZS": 21.0,
      "WB_WDI_SL_SRV_EMPL_ZS": 81.2
    }
  },
  {
    countryCode: "CHE",
    countryName: "Switzerland",
    values: {
      "WB_WDI_NY_GDP_PCAP_PP_KD": 81500,
      "WB_WDI_NY_ADJ_NNTY_PC_KD": 68400,
      "WB_WDI_SL_UEM_TOTL_ZS": 4.2,
      "WB_WDI_SL_EMP_TOTL_SP_ZS": 67.8,
      "WB_WDI_IT_NET_USER_ZS": 96.0,
      "WB_WDI_IT_CEL_SETS_P2": 132.5,
      "WB_WDI_SE_SEC_ENRL": 100.2,
      "WB_WDI_SE_TER_ENRL": 61.8,
      "WB_WDI_EN_ATM_PM25_MC_M3": 8.7,
      "WB_WDI_EN_ATM_CO2E_PC": 3.9,
      "WB_WDI_SG_GEN_PARL_ZS": 38.5,
      "WB_WDI_SL_TLF_TOTL_FE_ZS": 46.5,
      "WB_WDI_SP_DYN_LE00_IN": 84.0,
      "WB_WDI_SP_DYN_IMRT_IN": 2.9,
      "WB_WDI_NY_ADJ_SVNG_GN_ZS": 25.1,
      "WB_WDI_FP_CPI_TOTL_ZG": 2.1,
      "WB_WDI_VC_IHR_PSRC_P5": 0.5,
      "WB_WDI_SH_STA_TRAF_P5": 2.6,
      "WB_WDI_SL_TLF_PART_ZS": 37.2,
      "WB_WDI_SL_SRV_EMPL_ZS": 78.5
    }
  },
  {
    countryCode: "USA",
    countryName: "United States",
    values: {
      "WB_WDI_NY_GDP_PCAP_PP_KD": 76500,
      "WB_WDI_NY_ADJ_NNTY_PC_KD": 64800,
      "WB_WDI_SL_UEM_TOTL_ZS": 3.6,
      "WB_WDI_SL_EMP_TOTL_SP_ZS": 60.2,
      "WB_WDI_IT_NET_USER_ZS": 92.0,
      "WB_WDI_IT_CEL_SETS_P2": 110.2,
      "WB_WDI_SE_SEC_ENRL": 100.8,
      "WB_WDI_SE_TER_ENRL": 88.3,
      "WB_WDI_EN_ATM_PM25_MC_M3": 7.3,
      "WB_WDI_EN_ATM_CO2E_PC": 14.2,
      "WB_WDI_SG_GEN_PARL_ZS": 28.2,
      "WB_WDI_SL_TLF_TOTL_FE_ZS": 46.6,
      "WB_WDI_SP_DYN_LE00_IN": 77.2,
      "WB_WDI_SP_DYN_IMRT_IN": 5.4,
      "WB_WDI_NY_ADJ_SVNG_GN_ZS": 7.4,
      "WB_WDI_FP_CPI_TOTL_ZG": 3.5,
      "WB_WDI_VC_IHR_PSRC_P5": 6.4,
      "WB_WDI_SH_STA_TRAF_P5": 12.4,
      "WB_WDI_SL_TLF_PART_ZS": 16.2,
      "WB_WDI_SL_SRV_EMPL_ZS": 79.8
    }
  },
  {
    countryCode: "CAN",
    countryName: "Canada",
    values: {
      "WB_WDI_NY_GDP_PCAP_PP_KD": 55800,
      "WB_WDI_NY_ADJ_NNTY_PC_KD": 46500,
      "WB_WDI_SL_UEM_TOTL_ZS": 5.2,
      "WB_WDI_SL_EMP_TOTL_SP_ZS": 61.5,
      "WB_WDI_IT_NET_USER_ZS": 94.5,
      "WB_WDI_IT_CEL_SETS_P2": 104.5,
      "WB_WDI_SE_SEC_ENRL": 108.3,
      "WB_WDI_SE_TER_ENRL": 78.4,
      "WB_WDI_EN_ATM_PM25_MC_M3": 6.5,
      "WB_WDI_EN_ATM_CO2E_PC": 14.5,
      "WB_WDI_SG_GEN_PARL_ZS": 30.5,
      "WB_WDI_SL_TLF_TOTL_FE_ZS": 47.2,
      "WB_WDI_SP_DYN_LE00_IN": 81.3,
      "WB_WDI_SP_DYN_IMRT_IN": 4.3,
      "WB_WDI_NY_ADJ_SVNG_GN_ZS": 11.2,
      "WB_WDI_FP_CPI_TOTL_ZG": 3.8,
      "WB_WDI_VC_IHR_PSRC_P5": 2.2,
      "WB_WDI_SH_STA_TRAF_P5": 4.8,
      "WB_WDI_SL_TLF_PART_ZS": 18.5,
      "WB_WDI_SL_SRV_EMPL_ZS": 78.9
    }
  },
  {
    countryCode: "DEU",
    countryName: "Germany",
    values: {
      "WB_WDI_NY_GDP_PCAP_PP_KD": 63200,
      "WB_WDI_NY_ADJ_NNTY_PC_KD": 52400,
      "WB_WDI_SL_UEM_TOTL_ZS": 3.1,
      "WB_WDI_SL_EMP_TOTL_SP_ZS": 57.5,
      "WB_WDI_IT_NET_USER_ZS": 91.5,
      "WB_WDI_IT_CEL_SETS_P2": 126.3,
      "WB_WDI_SE_SEC_ENRL": 101.4,
      "WB_WDI_SE_TER_ENRL": 73.5,
      "WB_WDI_EN_ATM_PM25_MC_M3": 11.5,
      "WB_WDI_EN_ATM_CO2E_PC": 7.9,
      "WB_WDI_SG_GEN_PARL_ZS": 35.1,
      "WB_WDI_SL_TLF_TOTL_FE_ZS": 46.8,
      "WB_WDI_SP_DYN_LE00_IN": 80.9,
      "WB_WDI_SP_DYN_IMRT_IN": 3.1,
      "WB_WDI_NY_ADJ_SVNG_GN_ZS": 18.5,
      "WB_WDI_FP_CPI_TOTL_ZG": 5.9,
      "WB_WDI_VC_IHR_PSRC_P5": 0.8,
      "WB_WDI_SH_STA_TRAF_P5": 3.8,
      "WB_WDI_SL_TLF_PART_ZS": 27.5,
      "WB_WDI_SL_SRV_EMPL_ZS": 72.4
    }
  },
  {
    countryCode: "GBR",
    countryName: "United Kingdom",
    values: {
      "WB_WDI_NY_GDP_PCAP_PP_KD": 53500,
      "WB_WDI_NY_ADJ_NNTY_PC_KD": 43800,
      "WB_WDI_SL_UEM_TOTL_ZS": 3.7,
      "WB_WDI_SL_EMP_TOTL_SP_ZS": 60.5,
      "WB_WDI_IT_NET_USER_ZS": 97.0,
      "WB_WDI_IT_CEL_SETS_P2": 118.5,
      "WB_WDI_SE_SEC_ENRL": 102.6,
      "WB_WDI_SE_TER_ENRL": 71.8,
      "WB_WDI_EN_ATM_PM25_MC_M3": 9.4,
      "WB_WDI_EN_ATM_CO2E_PC": 4.7,
      "WB_WDI_SG_GEN_PARL_ZS": 34.6,
      "WB_WDI_SL_TLF_TOTL_FE_ZS": 47.0,
      "WB_WDI_SP_DYN_LE00_IN": 80.7,
      "WB_WDI_SP_DYN_IMRT_IN": 3.4,
      "WB_WDI_NY_ADJ_SVNG_GN_ZS": 8.1,
      "WB_WDI_FP_CPI_TOTL_ZG": 7.3,
      "WB_WDI_VC_IHR_PSRC_P5": 1.0,
      "WB_WDI_SH_STA_TRAF_P5": 2.9,
      "WB_WDI_SL_TLF_PART_ZS": 22.8,
      "WB_WDI_SL_SRV_EMPL_ZS": 81.0
    }
  },
  {
    countryCode: "FRA",
    countryName: "France",
    values: {
      "WB_WDI_NY_GDP_PCAP_PP_KD": 54200,
      "WB_WDI_NY_ADJ_NNTY_PC_KD": 44100,
      "WB_WDI_SL_UEM_TOTL_ZS": 7.3,
      "WB_WDI_SL_EMP_TOTL_SP_ZS": 52.8,
      "WB_WDI_IT_NET_USER_ZS": 92.5,
      "WB_WDI_IT_CEL_SETS_P2": 112.1,
      "WB_WDI_SE_SEC_ENRL": 101.2,
      "WB_WDI_SE_TER_ENRL": 68.3,
      "WB_WDI_EN_ATM_PM25_MC_M3": 10.6,
      "WB_WDI_EN_ATM_CO2E_PC": 4.2,
      "WB_WDI_SG_GEN_PARL_ZS": 37.3,
      "WB_WDI_SL_TLF_TOTL_FE_ZS": 48.1,
      "WB_WDI_SP_DYN_LE00_IN": 82.5,
      "WB_WDI_SP_DYN_IMRT_IN": 3.2,
      "WB_WDI_NY_ADJ_SVNG_GN_ZS": 11.0,
      "WB_WDI_FP_CPI_TOTL_ZG": 5.2,
      "WB_WDI_VC_IHR_PSRC_P5": 1.1,
      "WB_WDI_SH_STA_TRAF_P5": 4.6,
      "WB_WDI_SL_TLF_PART_ZS": 17.5,
      "WB_WDI_SL_SRV_EMPL_ZS": 77.4
    }
  },
  {
    countryCode: "JPN",
    countryName: "Japan",
    values: {
      "WB_WDI_NY_GDP_PCAP_PP_KD": 45800,
      "WB_WDI_NY_ADJ_NNTY_PC_KD": 37800,
      "WB_WDI_SL_UEM_TOTL_ZS": 2.6,
      "WB_WDI_SL_EMP_TOTL_SP_ZS": 61.2,
      "WB_WDI_IT_NET_USER_ZS": 93.8,
      "WB_WDI_IT_CEL_SETS_P2": 142.1,
      "WB_WDI_SE_SEC_ENRL": 102.1,
      "WB_WDI_SE_TER_ENRL": 63.5,
      "WB_WDI_EN_ATM_PM25_MC_M3": 11.1,
      "WB_WDI_EN_ATM_CO2E_PC": 8.6,
      "WB_WDI_SG_GEN_PARL_ZS": 10.3,
      "WB_WDI_SL_TLF_TOTL_FE_ZS": 44.5,
      "WB_WDI_SP_DYN_LE00_IN": 84.6,
      "WB_WDI_SP_DYN_IMRT_IN": 1.7,
      "WB_WDI_NY_ADJ_SVNG_GN_ZS": 16.5,
      "WB_WDI_FP_CPI_TOTL_ZG": 2.5,
      "WB_WDI_VC_IHR_PSRC_P5": 0.2,
      "WB_WDI_SH_STA_TRAF_P5": 3.2,
      "WB_WDI_SL_TLF_PART_ZS": 23.1,
      "WB_WDI_SL_SRV_EMPL_ZS": 72.8
    }
  },
  {
    countryCode: "SGP",
    countryName: "Singapore",
    values: {
      "WB_WDI_NY_GDP_PCAP_PP_KD": 127500,
      "WB_WDI_NY_ADJ_NNTY_PC_KD": 95100,
      "WB_WDI_SL_UEM_TOTL_ZS": 2.1,
      "WB_WDI_SL_EMP_TOTL_SP_ZS": 66.5,
      "WB_WDI_IT_NET_USER_ZS": 92.0,
      "WB_WDI_IT_CEL_SETS_P2": 158.4,
      "WB_WDI_SE_SEC_ENRL": 109.2,
      "WB_WDI_SE_TER_ENRL": 91.0,
      "WB_WDI_EN_ATM_PM25_MC_M3": 16.2,
      "WB_WDI_EN_ATM_CO2E_PC": 8.1,
      "WB_WDI_SG_GEN_PARL_ZS": 29.1,
      "WB_WDI_SL_TLF_TOTL_FE_ZS": 45.2,
      "WB_WDI_SP_DYN_LE00_IN": 83.5,
      "WB_WDI_SP_DYN_IMRT_IN": 1.6,
      "WB_WDI_NY_ADJ_SVNG_GN_ZS": 33.4,
      "WB_WDI_FP_CPI_TOTL_ZG": 4.1,
      "WB_WDI_VC_IHR_PSRC_P5": 0.1,
      "WB_WDI_SH_STA_TRAF_P5": 1.8,
      "WB_WDI_SL_TLF_PART_ZS": 11.5,
      "WB_WDI_SL_SRV_EMPL_ZS": 85.0
    }
  },
  {
    countryCode: "AUS",
    countryName: "Australia",
    values: {
      "WB_WDI_NY_GDP_PCAP_PP_KD": 62500,
      "WB_WDI_NY_ADJ_NNTY_PC_KD": 52100,
      "WB_WDI_SL_UEM_TOTL_ZS": 3.7,
      "WB_WDI_SL_EMP_TOTL_SP_ZS": 64.2,
      "WB_WDI_IT_NET_USER_ZS": 96.2,
      "WB_WDI_IT_CEL_SETS_P2": 108.4,
      "WB_WDI_SE_SEC_ENRL": 118.5,
      "WB_WDI_SE_TER_ENRL": 115.4,
      "WB_WDI_EN_ATM_PM25_MC_M3": 6.1,
      "WB_WDI_EN_ATM_CO2E_PC": 15.0,
      "WB_WDI_SG_GEN_PARL_ZS": 38.2,
      "WB_WDI_SL_TLF_TOTL_FE_ZS": 46.8,
      "WB_WDI_SP_DYN_LE00_IN": 83.2,
      "WB_WDI_SP_DYN_IMRT_IN": 3.0,
      "WB_WDI_NY_ADJ_SVNG_GN_ZS": 13.8,
      "WB_WDI_FP_CPI_TOTL_ZG": 5.6,
      "WB_WDI_VC_IHR_PSRC_P5": 0.9,
      "WB_WDI_SH_STA_TRAF_P5": 4.4,
      "WB_WDI_SL_TLF_PART_ZS": 25.1,
      "WB_WDI_SL_SRV_EMPL_ZS": 78.4
    }
  },
  {
    countryCode: "NZL",
    countryName: "New Zealand",
    values: {
      "WB_WDI_NY_GDP_PCAP_PP_KD": 50800,
      "WB_WDI_NY_ADJ_NNTY_PC_KD": 41800,
      "WB_WDI_SL_UEM_TOTL_ZS": 3.3,
      "WB_WDI_SL_EMP_TOTL_SP_ZS": 68.1,
      "WB_WDI_IT_NET_USER_ZS": 94.2,
      "WB_WDI_IT_CEL_SETS_P2": 122.4,
      "WB_WDI_SE_SEC_ENRL": 111.4,
      "WB_WDI_SE_TER_ENRL": 79.5,
      "WB_WDI_EN_ATM_PM25_MC_M3": 5.5,
      "WB_WDI_EN_ATM_CO2E_PC": 6.2,
      "WB_WDI_SG_GEN_PARL_ZS": 50.0,
      "WB_WDI_SL_TLF_TOTL_FE_ZS": 47.9,
      "WB_WDI_SP_DYN_LE00_IN": 82.5,
      "WB_WDI_SP_DYN_IMRT_IN": 3.9,
      "WB_WDI_NY_ADJ_SVNG_GN_ZS": 10.5,
      "WB_WDI_FP_CPI_TOTL_ZG": 5.7,
      "WB_WDI_VC_IHR_PSRC_P5": 1.1,
      "WB_WDI_SH_STA_TRAF_P5": 7.4,
      "WB_WDI_SL_TLF_PART_ZS": 20.4,
      "WB_WDI_SL_SRV_EMPL_ZS": 75.3
    }
  },
  {
    countryCode: "KOR",
    countryName: "South Korea",
    values: {
      "WB_WDI_NY_GDP_PCAP_PP_KD": 50200,
      "WB_WDI_NY_ADJ_NNTY_PC_KD": 41500,
      "WB_WDI_SL_UEM_TOTL_ZS": 2.9,
      "WB_WDI_SL_EMP_TOTL_SP_ZS": 61.8,
      "WB_WDI_IT_NET_USER_ZS": 97.6,
      "WB_WDI_IT_CEL_SETS_P2": 138.5,
      "WB_WDI_SE_SEC_ENRL": 100.5,
      "WB_WDI_SE_TER_ENRL": 96.2,
      "WB_WDI_EN_ATM_PM25_MC_M3": 21.4,
      "WB_WDI_EN_ATM_CO2E_PC": 11.8,
      "WB_WDI_SG_GEN_PARL_ZS": 19.1,
      "WB_WDI_SL_TLF_TOTL_FE_ZS": 43.1,
      "WB_WDI_SP_DYN_LE00_IN": 83.6,
      "WB_WDI_SP_DYN_IMRT_IN": 2.4,
      "WB_WDI_NY_ADJ_SVNG_GN_ZS": 24.2,
      "WB_WDI_FP_CPI_TOTL_ZG": 3.6,
      "WB_WDI_VC_IHR_PSRC_P5": 0.6,
      "WB_WDI_SH_STA_TRAF_P5": 5.9,
      "WB_WDI_SL_TLF_PART_ZS": 15.8,
      "WB_WDI_SL_SRV_EMPL_ZS": 70.5
    }
  },
  {
    countryCode: "IRL",
    countryName: "Ireland",
    values: {
      "WB_WDI_NY_GDP_PCAP_PP_KD": 113700,
      "WB_WDI_NY_ADJ_NNTY_PC_KD": 81500,
      "WB_WDI_SL_UEM_TOTL_ZS": 4.5,
      "WB_WDI_SL_EMP_TOTL_SP_ZS": 62.4,
      "WB_WDI_IT_NET_USER_ZS": 94.8,
      "WB_WDI_IT_CEL_SETS_P2": 105.1,
      "WB_WDI_SE_SEC_ENRL": 115.1,
      "WB_WDI_SE_TER_ENRL": 76.5,
      "WB_WDI_EN_ATM_PM25_MC_M3": 6.8,
      "WB_WDI_EN_ATM_CO2E_PC": 7.4,
      "WB_WDI_SG_GEN_PARL_ZS": 23.0,
      "WB_WDI_SL_TLF_TOTL_FE_ZS": 46.2,
      "WB_WDI_SP_DYN_LE00_IN": 82.1,
      "WB_WDI_SP_DYN_IMRT_IN": 2.5,
      "WB_WDI_NY_ADJ_SVNG_GN_ZS": 22.8,
      "WB_WDI_FP_CPI_TOTL_ZG": 5.2,
      "WB_WDI_VC_IHR_PSRC_P5": 0.8,
      "WB_WDI_SH_STA_TRAF_P5": 2.8,
      "WB_WDI_SL_TLF_PART_ZS": 18.2,
      "WB_WDI_SL_SRV_EMPL_ZS": 76.8
    }
  },
  {
    countryCode: "BRA",
    countryName: "Brazil",
    values: {
      "WB_WDI_NY_GDP_PCAP_PP_KD": 17800,
      "WB_WDI_NY_ADJ_NNTY_PC_KD": 13200,
      "WB_WDI_SL_UEM_TOTL_ZS": 8.0,
      "WB_WDI_SL_EMP_TOTL_SP_ZS": 55.4,
      "WB_WDI_IT_NET_USER_ZS": 81.3,
      "WB_WDI_IT_CEL_SETS_P2": 102.5,
      "WB_WDI_SE_SEC_ENRL": 101.5,
      "WB_WDI_SE_TER_ENRL": 51.5,
      "WB_WDI_EN_ATM_PM25_MC_M3": 11.2,
      "WB_WDI_EN_ATM_CO2E_PC": 2.1,
      "WB_WDI_SG_GEN_PARL_ZS": 17.7,
      "WB_WDI_SL_TLF_TOTL_FE_ZS": 44.1,
      "WB_WDI_SP_DYN_LE00_IN": 72.8,
      "WB_WDI_SP_DYN_IMRT_IN": 12.5,
      "WB_WDI_NY_ADJ_SVNG_GN_ZS": 3.8,
      "WB_WDI_FP_CPI_TOTL_ZG": 4.6,
      "WB_WDI_VC_IHR_PSRC_P5": 22.4,
      "WB_WDI_SH_STA_TRAF_P5": 14.8,
      "WB_WDI_SL_TLF_PART_ZS": 12.4,
      "WB_WDI_SL_SRV_EMPL_ZS": 71.2
    }
  },
  {
    countryCode: "MEX",
    countryName: "Mexico",
    values: {
      "WB_WDI_NY_GDP_PCAP_PP_KD": 21500,
      "WB_WDI_NY_ADJ_NNTY_PC_KD": 16400,
      "WB_WDI_SL_UEM_TOTL_ZS": 3.2,
      "WB_WDI_SL_EMP_TOTL_SP_ZS": 58.1,
      "WB_WDI_IT_NET_USER_ZS": 73.5,
      "WB_WDI_IT_CEL_SETS_P2": 99.4,
      "WB_WDI_SE_SEC_ENRL": 90.4,
      "WB_WDI_SE_TER_ENRL": 42.8,
      "WB_WDI_EN_ATM_PM25_MC_M3": 19.5,
      "WB_WDI_EN_ATM_CO2E_PC": 3.7,
      "WB_WDI_SG_GEN_PARL_ZS": 50.0,
      "WB_WDI_SL_TLF_TOTL_FE_ZS": 40.5,
      "WB_WDI_SP_DYN_LE00_IN": 74.8,
      "WB_WDI_SP_DYN_IMRT_IN": 11.2,
      "WB_WDI_NY_ADJ_SVNG_GN_ZS": 6.4,
      "WB_WDI_FP_CPI_TOTL_ZG": 5.5,
      "WB_WDI_VC_IHR_PSRC_P5": 25.2,
      "WB_WDI_SH_STA_TRAF_P5": 12.8,
      "WB_WDI_SL_TLF_PART_ZS": 14.1,
      "WB_WDI_SL_SRV_EMPL_ZS": 61.5
    }
  },
  {
    countryCode: "ZAF",
    countryName: "South Africa",
    values: {
      "WB_WDI_NY_GDP_PCAP_PP_KD": 14200,
      "WB_WDI_NY_ADJ_NNTY_PC_KD": 9800,
      "WB_WDI_SL_UEM_TOTL_ZS": 32.2,
      "WB_WDI_SL_EMP_TOTL_SP_ZS": 39.5,
      "WB_WDI_IT_NET_USER_ZS": 72.3,
      "WB_WDI_IT_CEL_SETS_P2": 165.2,
      "WB_WDI_SE_SEC_ENRL": 103.8,
      "WB_WDI_SE_TER_ENRL": 24.3,
      "WB_WDI_EN_ATM_PM25_MC_M3": 25.1,
      "WB_WDI_EN_ATM_CO2E_PC": 7.5,
      "WB_WDI_SG_GEN_PARL_ZS": 46.2,
      "WB_WDI_SL_TLF_TOTL_FE_ZS": 46.2,
      "WB_WDI_SP_DYN_LE00_IN": 62.3,
      "WB_WDI_SP_DYN_IMRT_IN": 26.5,
      "WB_WDI_NY_ADJ_SVNG_GN_ZS": 6.8,
      "WB_WDI_FP_CPI_TOTL_ZG": 6.0,
      "WB_WDI_VC_IHR_PSRC_P5": 34.0,
      "WB_WDI_SH_STA_TRAF_P5": 21.0,
      "WB_WDI_SL_TLF_PART_ZS": 10.2,
      "WB_WDI_SL_SRV_EMPL_ZS": 73.1
    }
  },
  {
    countryCode: "IND",
    countryName: "India",
    values: {
      "WB_WDI_NY_GDP_PCAP_PP_KD": 8400,
      "WB_WDI_NY_ADJ_NNTY_PC_KD": 6500,
      "WB_WDI_SL_UEM_TOTL_ZS": 7.6,
      "WB_WDI_SL_EMP_TOTL_SP_ZS": 49.5,
      "WB_WDI_IT_NET_USER_ZS": 46.5,
      "WB_WDI_IT_CEL_SETS_P2": 84.8,
      "WB_WDI_SE_SEC_ENRL": 77.8,
      "WB_WDI_SE_TER_ENRL": 31.2,
      "WB_WDI_EN_ATM_PM25_MC_M3": 46.5,
      "WB_WDI_EN_ATM_CO2E_PC": 1.9,
      "WB_WDI_SG_GEN_PARL_ZS": 14.4,
      "WB_WDI_SL_TLF_TOTL_FE_ZS": 23.5,
      "WB_WDI_SP_DYN_LE00_IN": 67.2,
      "WB_WDI_SP_DYN_IMRT_IN": 25.8,
      "WB_WDI_NY_ADJ_SVNG_GN_ZS": 19.8,
      "WB_WDI_FP_CPI_TOTL_ZG": 5.4,
      "WB_WDI_VC_IHR_PSRC_P5": 3.0,
      "WB_WDI_SH_STA_TRAF_P5": 15.6,
      "WB_WDI_SL_TLF_PART_ZS": 8.5,
      "WB_WDI_SL_SRV_EMPL_ZS": 32.5
    }
  },
  {
    countryCode: "CHN",
    countryName: "China",
    values: {
      "WB_WDI_NY_GDP_PCAP_PP_KD": 21400,
      "WB_WDI_NY_ADJ_NNTY_PC_KD": 16900,
      "WB_WDI_SL_UEM_TOTL_ZS": 4.8,
      "WB_WDI_SL_EMP_TOTL_SP_ZS": 63.5,
      "WB_WDI_IT_NET_USER_ZS": 75.6,
      "WB_WDI_IT_CEL_SETS_P2": 118.9,
      "WB_WDI_SE_SEC_ENRL": 94.2,
      "WB_WDI_SE_TER_ENRL": 72.0,
      "WB_WDI_EN_ATM_PM25_MC_M3": 34.8,
      "WB_WDI_EN_ATM_CO2E_PC": 8.0,
      "WB_WDI_SG_GEN_PARL_ZS": 24.9,
      "WB_WDI_SL_TLF_TOTL_FE_ZS": 43.6,
      "WB_WDI_SP_DYN_LE00_IN": 78.2,
      "WB_WDI_SP_DYN_IMRT_IN": 5.5,
      "WB_WDI_NY_ADJ_SVNG_GN_ZS": 28.5,
      "WB_WDI_FP_CPI_TOTL_ZG": 1.5,
      "WB_WDI_VC_IHR_PSRC_P5": 0.5,
      "WB_WDI_SH_STA_TRAF_P5": 12.0,
      "WB_WDI_SL_TLF_PART_ZS": 7.2,
      "WB_WDI_SL_SRV_EMPL_ZS": 46.8
    }
  },
  {
    countryCode: "ARG",
    countryName: "Argentina",
    values: {
      "WB_WDI_NY_GDP_PCAP_PP_KD": 22200,
      "WB_WDI_NY_ADJ_NNTY_PC_KD": 16500,
      "WB_WDI_SL_UEM_TOTL_ZS": 6.9,
      "WB_WDI_SL_EMP_TOTL_SP_ZS": 56.4,
      "WB_WDI_IT_NET_USER_ZS": 87.2,
      "WB_WDI_IT_CEL_SETS_P2": 128.4,
      "WB_WDI_SE_SEC_ENRL": 105.1,
      "WB_WDI_SE_TER_ENRL": 95.8,
      "WB_WDI_EN_ATM_PM25_MC_M3": 11.4,
      "WB_WDI_EN_ATM_CO2E_PC": 3.5,
      "WB_WDI_SG_GEN_PARL_ZS": 44.8,
      "WB_WDI_SL_TLF_TOTL_FE_ZS": 43.1,
      "WB_WDI_SP_DYN_LE00_IN": 75.4,
      "WB_WDI_SP_DYN_IMRT_IN": 8.2,
      "WB_WDI_NY_ADJ_SVNG_GN_ZS": 4.1,
      "WB_WDI_FP_CPI_TOTL_ZG": 142.1,
      "WB_WDI_VC_IHR_PSRC_P5": 4.2,
      "WB_WDI_SH_STA_TRAF_P5": 11.0,
      "WB_WDI_SL_TLF_PART_ZS": 13.5,
      "WB_WDI_SL_SRV_EMPL_ZS": 72.4
    }
  },
  {
    countryCode: "SAU",
    countryName: "Saudi Arabia",
    values: {
      "WB_WDI_NY_GDP_PCAP_PP_KD": 49500,
      "WB_WDI_NY_ADJ_NNTY_PC_KD": 38100,
      "WB_WDI_SL_UEM_TOTL_ZS": 5.6,
      "WB_WDI_SL_EMP_TOTL_SP_ZS": 54.8,
      "WB_WDI_IT_NET_USER_ZS": 99.0,
      "WB_WDI_IT_CEL_SETS_P2": 118.5,
      "WB_WDI_SE_SEC_ENRL": 96.5,
      "WB_WDI_SE_TER_ENRL": 71.2,
      "WB_WDI_EN_ATM_PM25_MC_M3": 42.1,
      "WB_WDI_EN_ATM_CO2E_PC": 16.5,
      "WB_WDI_SG_GEN_PARL_ZS": 19.9,
      "WB_WDI_SL_TLF_TOTL_FE_ZS": 21.8,
      "WB_WDI_SP_DYN_LE00_IN": 75.4,
      "WB_WDI_SP_DYN_IMRT_IN": 5.9,
      "WB_WDI_NY_ADJ_SVNG_GN_ZS": 15.2,
      "WB_WDI_FP_CPI_TOTL_ZG": 2.2,
      "WB_WDI_VC_IHR_PSRC_P5": 0.8,
      "WB_WDI_SH_STA_TRAF_P5": 12.1,
      "WB_WDI_SL_TLF_PART_ZS": 5.5,
      "WB_WDI_SL_SRV_EMPL_ZS": 74.8
    }
  },
  {
    countryCode: "TUR",
    countryName: "Turkey",
    values: {
      "WB_WDI_NY_GDP_PCAP_PP_KD": 37200,
      "WB_WDI_NY_ADJ_NNTY_PC_KD": 29800,
      "WB_WDI_SL_UEM_TOTL_ZS": 9.6,
      "WB_WDI_SL_EMP_TOTL_SP_ZS": 48.2,
      "WB_WDI_IT_NET_USER_ZS": 85.0,
      "WB_WDI_IT_CEL_SETS_P2": 105.1,
      "WB_WDI_SE_SEC_ENRL": 98.2,
      "WB_WDI_SE_TER_ENRL": 91.5,
      "WB_WDI_EN_ATM_PM25_MC_M3": 27.2,
      "WB_WDI_EN_ATM_CO2E_PC": 4.8,
      "WB_WDI_SG_GEN_PARL_ZS": 17.4,
      "WB_WDI_SL_TLF_TOTL_FE_ZS": 34.2,
      "WB_WDI_SP_DYN_LE00_IN": 76.0,
      "WB_WDI_SP_DYN_IMRT_IN": 8.1,
      "WB_WDI_NY_ADJ_SVNG_GN_ZS": 14.5,
      "WB_WDI_FP_CPI_TOTL_ZG": 53.9,
      "WB_WDI_VC_IHR_PSRC_P5": 2.5,
      "WB_WDI_SH_STA_TRAF_P5": 10.4,
      "WB_WDI_SL_TLF_PART_ZS": 11.2,
      "WB_WDI_SL_SRV_EMPL_ZS": 57.5
    }
  },
  {
    countryCode: "NGA",
    countryName: "Nigeria",
    values: {
      "WB_WDI_NY_GDP_PCAP_PP_KD": 4900,
      "WB_WDI_NY_ADJ_NNTY_PC_KD": 3800,
      "WB_WDI_SL_UEM_TOTL_ZS": 4.1,
      "WB_WDI_SL_EMP_TOTL_SP_ZS": 52.1,
      "WB_WDI_IT_NET_USER_ZS": 55.4,
      "WB_WDI_IT_CEL_SETS_P2": 96.5,
      "WB_WDI_SE_SEC_ENRL": 44.2,
      "WB_WDI_SE_TER_ENRL": 9.8,
      "WB_WDI_EN_ATM_PM25_MC_M3": 51.8,
      "WB_WDI_EN_ATM_CO2E_PC": 0.6,
      "WB_WDI_SG_GEN_PARL_ZS": 3.6,
      "WB_WDI_SL_TLF_TOTL_FE_ZS": 43.8,
      "WB_WDI_SP_DYN_LE00_IN": 52.7,
      "WB_WDI_SP_DYN_IMRT_IN": 71.2,
      "WB_WDI_NY_ADJ_SVNG_GN_ZS": 3.2,
      "WB_WDI_FP_CPI_TOTL_ZG": 24.5,
      "WB_WDI_VC_IHR_PSRC_P5": 21.8,
      "WB_WDI_SH_STA_TRAF_P5": 20.2,
      "WB_WDI_SL_TLF_PART_ZS": 9.5,
      "WB_WDI_SL_SRV_EMPL_ZS": 52.4
    }
  },
  {
    countryCode: "KEN",
    countryName: "Kenya",
    values: {
      "WB_WDI_NY_GDP_PCAP_PP_KD": 4800,
      "WB_WDI_NY_ADJ_NNTY_PC_KD": 3600,
      "WB_WDI_SL_UEM_TOTL_ZS": 5.4,
      "WB_WDI_SL_EMP_TOTL_SP_ZS": 58.5,
      "WB_WDI_IT_NET_USER_ZS": 42.0,
      "WB_WDI_IT_CEL_SETS_P2": 114.5,
      "WB_WDI_SE_SEC_ENRL": 60.5,
      "WB_WDI_SE_TER_ENRL": 10.8,
      "WB_WDI_EN_ATM_PM25_MC_M3": 17.2,
      "WB_WDI_EN_ATM_CO2E_PC": 0.4,
      "WB_WDI_SG_GEN_PARL_ZS": 20.3,
      "WB_WDI_SL_TLF_TOTL_FE_ZS": 46.5,
      "WB_WDI_SP_DYN_LE00_IN": 61.4,
      "WB_WDI_SP_DYN_IMRT_IN": 31.2,
      "WB_WDI_NY_ADJ_SVNG_GN_ZS": 7.6,
      "WB_WDI_FP_CPI_TOTL_ZG": 7.5,
      "WB_WDI_VC_IHR_PSRC_P5": 5.1,
      "WB_WDI_SH_STA_TRAF_P5": 26.8,
      "WB_WDI_SL_TLF_PART_ZS": 13.2,
      "WB_WDI_SL_SRV_EMPL_ZS": 41.5
    }
  },
  {
    countryCode: "EGY",
    countryName: "Egypt",
    values: {
      "WB_WDI_NY_GDP_PCAP_PP_KD": 15000,
      "WB_WDI_NY_ADJ_NNTY_PC_KD": 11500,
      "WB_WDI_SL_UEM_TOTL_ZS": 7.2,
      "WB_WDI_SL_EMP_TOTL_SP_ZS": 38.5,
      "WB_WDI_IT_NET_USER_ZS": 71.8,
      "WB_WDI_IT_CEL_SETS_P2": 101.5,
      "WB_WDI_SE_SEC_ENRL": 91.5,
      "WB_WDI_SE_TER_ENRL": 38.8,
      "WB_WDI_EN_ATM_PM25_MC_M3": 50.4,
      "WB_WDI_EN_ATM_CO2E_PC": 2.2,
      "WB_WDI_SG_GEN_PARL_ZS": 27.7,
      "WB_WDI_SL_TLF_TOTL_FE_ZS": 15.6,
      "WB_WDI_SP_DYN_LE00_IN": 70.2,
      "WB_WDI_SP_DYN_IMRT_IN": 16.5,
      "WB_WDI_NY_ADJ_SVNG_GN_ZS": 5.8,
      "WB_WDI_FP_CPI_TOTL_ZG": 13.5,
      "WB_WDI_VC_IHR_PSRC_P5": 1.3,
      "WB_WDI_SH_STA_TRAF_P5": 10.1,
      "WB_WDI_SL_TLF_PART_ZS": 12.0,
      "WB_WDI_SL_SRV_EMPL_ZS": 51.5
    }
  },
  {
    countryCode: "ESP",
    countryName: "Spain",
    values: {
      "WB_WDI_NY_GDP_PCAP_PP_KD": 45800,
      "WB_WDI_NY_ADJ_NNTY_PC_KD": 36800,
      "WB_WDI_SL_UEM_TOTL_ZS": 12.9,
      "WB_WDI_SL_EMP_TOTL_SP_ZS": 52.1,
      "WB_WDI_IT_NET_USER_ZS": 94.0,
      "WB_WDI_IT_CEL_SETS_P2": 118.5,
      "WB_WDI_SE_SEC_ENRL": 102.8,
      "WB_WDI_SE_TER_ENRL": 90.1,
      "WB_WDI_EN_ATM_PM25_MC_M3": 9.2,
      "WB_WDI_EN_ATM_CO2E_PC": 4.9,
      "WB_WDI_SG_GEN_PARL_ZS": 43.1,
      "WB_WDI_SL_TLF_TOTL_FE_ZS": 46.8,
      "WB_WDI_SP_DYN_LE00_IN": 83.3,
      "WB_WDI_SP_DYN_IMRT_IN": 2.5,
      "WB_WDI_NY_ADJ_SVNG_GN_ZS": 10.4,
      "WB_WDI_FP_CPI_TOTL_ZG": 4.1,
      "WB_WDI_VC_IHR_PSRC_P5": 0.6,
      "WB_WDI_SH_STA_TRAF_P5": 3.1,
      "WB_WDI_SL_TLF_PART_ZS": 13.8,
      "WB_WDI_SL_SRV_EMPL_ZS": 76.5
    }
  },
  {
    countryCode: "ITA",
    countryName: "Italy",
    values: {
      "WB_WDI_NY_GDP_PCAP_PP_KD": 46500,
      "WB_WDI_NY_ADJ_NNTY_PC_KD": 37200,
      "WB_WDI_SL_UEM_TOTL_ZS": 8.1,
      "WB_WDI_SL_EMP_TOTL_SP_ZS": 45.8,
      "WB_WDI_IT_NET_USER_ZS": 84.3,
      "WB_WDI_IT_CEL_SETS_P2": 125.1,
      "WB_WDI_SE_SEC_ENRL": 103.1,
      "WB_WDI_SE_TER_ENRL": 61.2,
      "WB_WDI_EN_ATM_PM25_MC_M3": 15.8,
      "WB_WDI_EN_ATM_CO2E_PC": 5.2,
      "WB_WDI_SG_GEN_PARL_ZS": 32.3,
      "WB_WDI_SL_TLF_TOTL_FE_ZS": 42.5,
      "WB_WDI_SP_DYN_LE00_IN": 82.8,
      "WB_WDI_SP_DYN_IMRT_IN": 2.4,
      "WB_WDI_NY_ADJ_SVNG_GN_ZS": 9.2,
      "WB_WDI_FP_CPI_TOTL_ZG": 5.8,
      "WB_WDI_VC_IHR_PSRC_P5": 0.5,
      "WB_WDI_SH_STA_TRAF_P5": 5.2,
      "WB_WDI_SL_TLF_PART_ZS": 18.2,
      "WB_WDI_SL_SRV_EMPL_ZS": 72.5
    }
  },
  {
    countryCode: "NLD",
    countryName: "Netherlands",
    values: {
      "WB_WDI_NY_GDP_PCAP_PP_KD": 69500,
      "WB_WDI_NY_ADJ_NNTY_PC_KD": 58500,
      "WB_WDI_SL_UEM_TOTL_ZS": 3.5,
      "WB_WDI_SL_EMP_TOTL_SP_ZS": 68.2,
      "WB_WDI_IT_NET_USER_ZS": 97.5,
      "WB_WDI_IT_CEL_SETS_P2": 118.9,
      "WB_WDI_SE_SEC_ENRL": 113.8,
      "WB_WDI_SE_TER_ENRL": 87.5,
      "WB_WDI_EN_ATM_PM25_MC_M3": 10.5,
      "WB_WDI_EN_ATM_CO2E_PC": 7.4,
      "WB_WDI_SG_GEN_PARL_ZS": 39.1,
      "WB_WDI_SL_TLF_TOTL_FE_ZS": 47.2,
      "WB_WDI_SP_DYN_LE00_IN": 81.5,
      "WB_WDI_SP_DYN_IMRT_IN": 2.1,
      "WB_WDI_NY_ADJ_SVNG_GN_ZS": 20.8,
      "WB_WDI_FP_CPI_TOTL_ZG": 3.8,
      "WB_WDI_VC_IHR_PSRC_P5": 0.6,
      "WB_WDI_SH_STA_TRAF_P5": 3.5,
      "WB_WDI_SL_TLF_PART_ZS": 46.5,
      "WB_WDI_SL_SRV_EMPL_ZS": 81.8
    }
  }
];
