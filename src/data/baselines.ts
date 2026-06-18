/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

// Baseline estimates for the 10 newly added indicators for high-fidelity offline performance.
export const NEW_INDICATOR_BASELINES: { [countryCode: string]: { [indicatorCode: string]: number } } = {
  NOR: {
    "WB_WDI_SI_POV_GINI": 25.8,
    "WB_WDI_SL_TLF_ACTI_ZS": 71.2,
    "WB_WDI_IT_NET_BBND": 44.5,
    "WB_WDI_SE_PRM_CMPT_ZS": 100.0,
    "WB_WDI_EG_FEC_RNEW_ZS": 61.2,
    "WB_WDI_IC_REG_DURS": 4.5,
    "WB_WDI_SH_XPD_CHEX_GD_ZS": 10.5,
    "WB_WDI_NY_GDP_MKTP_KD_ZG": 1.6,
    "WB_WDI_SH_H2O_SMWR_ZS": 100.0,
    "WB_WDI_SP_URB_TOTL_IN_ZS": 83.5
  },
  DNK: {
    "WB_WDI_SI_POV_GINI": 26.1,
    "WB_WDI_SL_TLF_ACTI_ZS": 70.8,
    "WB_WDI_IT_NET_BBND": 45.1,
    "WB_WDI_SE_PRM_CMPT_ZS": 99.8,
    "WB_WDI_EG_FEC_RNEW_ZS": 40.5,
    "WB_WDI_IC_REG_DURS": 3.5,
    "WB_WDI_SH_XPD_CHEX_GD_ZS": 10.2,
    "WB_WDI_NY_GDP_MKTP_KD_ZG": 1.4,
    "WB_WDI_SH_H2O_SMWR_ZS": 100.0,
    "WB_WDI_SP_URB_TOTL_IN_ZS": 88.2
  },
  FIN: {
    "WB_WDI_SI_POV_GINI": 26.5,
    "WB_WDI_SL_TLF_ACTI_ZS": 68.5,
    "WB_WDI_IT_NET_BBND": 43.8,
    "WB_WDI_SE_PRM_CMPT_ZS": 100.0,
    "WB_WDI_EG_FEC_RNEW_ZS": 47.2,
    "WB_WDI_IC_REG_DURS": 13.0,
    "WB_WDI_SH_XPD_CHEX_GD_ZS": 9.6,
    "WB_WDI_NY_GDP_MKTP_KD_ZG": 1.0,
    "WB_WDI_SH_H2O_SMWR_ZS": 100.0,
    "WB_WDI_SP_URB_TOTL_IN_ZS": 85.6
  },
  SWE: {
    "WB_WDI_SI_POV_GINI": 27.2,
    "WB_WDI_SL_TLF_ACTI_ZS": 73.1,
    "WB_WDI_IT_NET_BBND": 42.9,
    "WB_WDI_SE_PRM_CMPT_ZS": 99.9,
    "WB_WDI_EG_FEC_RNEW_ZS": 53.4,
    "WB_WDI_IC_REG_DURS": 7.5,
    "WB_WDI_SH_XPD_CHEX_GD_ZS": 10.9,
    "WB_WDI_NY_GDP_MKTP_KD_ZG": 1.5,
    "WB_WDI_SH_H2O_SMWR_ZS": 100.0,
    "WB_WDI_SP_URB_TOTL_IN_ZS": 88.5
  },
  CHE: {
    "WB_WDI_SI_POV_GINI": 31.5,
    "WB_WDI_SL_TLF_ACTI_ZS": 69.4,
    "WB_WDI_IT_NET_BBND": 47.2,
    "WB_WDI_SE_PRM_CMPT_ZS": 100.0,
    "WB_WDI_EG_FEC_RNEW_ZS": 30.2,
    "WB_WDI_IC_REG_DURS": 8.0,
    "WB_WDI_SH_XPD_CHEX_GD_ZS": 11.5,
    "WB_WDI_NY_GDP_MKTP_KD_ZG": 2.0,
    "WB_WDI_SH_H2O_SMWR_ZS": 100.0,
    "WB_WDI_SP_URB_TOTL_IN_ZS": 74.2
  },
  USA: {
    "WB_WDI_SI_POV_GINI": 41.5,
    "WB_WDI_SL_TLF_ACTI_ZS": 62.4,
    "WB_WDI_IT_NET_BBND": 38.5,
    "WB_WDI_SE_PRM_CMPT_ZS": 100.0,
    "WB_WDI_EG_FEC_RNEW_ZS": 10.8,
    "WB_WDI_IC_REG_DURS": 4.2,
    "WB_WDI_SH_XPD_CHEX_GD_ZS": 16.6,
    "WB_WDI_NY_GDP_MKTP_KD_ZG": 2.5,
    "WB_WDI_SH_H2O_SMWR_ZS": 99.8,
    "WB_WDI_SP_URB_TOTL_IN_ZS": 83.1
  },
  CAN: {
    "WB_WDI_SI_POV_GINI": 32.5,
    "WB_WDI_SL_TLF_ACTI_ZS": 65.2,
    "WB_WDI_IT_NET_BBND": 41.2,
    "WB_WDI_SE_PRM_CMPT_ZS": 100.0,
    "WB_WDI_EG_FEC_RNEW_ZS": 22.4,
    "WB_WDI_IC_REG_DURS": 1.5,
    "WB_WDI_SH_XPD_CHEX_GD_ZS": 11.2,
    "WB_WDI_NY_GDP_MKTP_KD_ZG": 1.8,
    "WB_WDI_SH_H2O_SMWR_ZS": 99.9,
    "WB_WDI_SP_URB_TOTL_IN_ZS": 81.8
  },
  DEU: {
    "WB_WDI_SI_POV_GINI": 31.7,
    "WB_WDI_SL_TLF_ACTI_ZS": 61.8,
    "WB_WDI_IT_NET_BBND": 43.1,
    "WB_WDI_SE_PRM_CMPT_ZS": 99.6,
    "WB_WDI_EG_FEC_RNEW_ZS": 18.2,
    "WB_WDI_IC_REG_DURS": 8.0,
    "WB_WDI_SH_XPD_CHEX_GD_ZS": 12.8,
    "WB_WDI_NY_GDP_MKTP_KD_ZG": -0.1,
    "WB_WDI_SH_H2O_SMWR_ZS": 100.0,
    "WB_WDI_SP_URB_TOTL_IN_ZS": 77.7
  },
  GBR: {
    "WB_WDI_SI_POV_GINI": 34.2,
    "WB_WDI_SL_TLF_ACTI_ZS": 63.5,
    "WB_WDI_IT_NET_BBND": 40.5,
    "WB_WDI_SE_PRM_CMPT_ZS": 100.0,
    "WB_WDI_EG_FEC_RNEW_ZS": 14.5,
    "WB_WDI_IC_REG_DURS": 4.5,
    "WB_WDI_SH_XPD_CHEX_GD_ZS": 11.3,
    "WB_WDI_NY_GDP_MKTP_KD_ZG": 0.5,
    "WB_WDI_SH_H2O_SMWR_ZS": 100.0,
    "WB_WDI_SP_URB_TOTL_IN_ZS": 84.4
  },
  FRA: {
    "WB_WDI_SI_POV_GINI": 32.4,
    "WB_WDI_SL_TLF_ACTI_ZS": 57.2,
    "WB_WDI_IT_NET_BBND": 46.8,
    "WB_WDI_SE_PRM_CMPT_ZS": 99.5,
    "WB_WDI_EG_FEC_RNEW_ZS": 19.1,
    "WB_WDI_IC_REG_DURS": 4.0,
    "WB_WDI_SH_XPD_CHEX_GD_ZS": 12.1,
    "WB_WDI_NY_GDP_MKTP_KD_ZG": 0.7,
    "WB_WDI_SH_H2O_SMWR_ZS": 100.0,
    "WB_WDI_SP_URB_TOTL_IN_ZS": 81.5
  },
  JPN: {
    "WB_WDI_SI_POV_GINI": 33.4,
    "WB_WDI_SL_TLF_ACTI_ZS": 63.1,
    "WB_WDI_IT_NET_BBND": 35.8,
    "WB_WDI_SE_PRM_CMPT_ZS": 100.0,
    "WB_WDI_EG_FEC_RNEW_ZS": 8.0,
    "WB_WDI_IC_REG_DURS": 11.2,
    "WB_WDI_SH_XPD_CHEX_GD_ZS": 11.5,
    "WB_WDI_NY_GDP_MKTP_KD_ZG": 1.9,
    "WB_WDI_SH_H2O_SMWR_ZS": 99.0,
    "WB_WDI_SP_URB_TOTL_IN_ZS": 91.8
  },
  SGP: {
    "WB_WDI_SI_POV_GINI": 38.8,
    "WB_WDI_SL_TLF_ACTI_ZS": 70.5,
    "WB_WDI_IT_NET_BBND": 42.4,
    "WB_WDI_SE_PRM_CMPT_ZS": 100.0,
    "WB_WDI_EG_FEC_RNEW_ZS": 1.5,
    "WB_WDI_IC_REG_DURS": 1.5,
    "WB_WDI_SH_XPD_CHEX_GD_ZS": 4.4,
    "WB_WDI_NY_GDP_MKTP_KD_ZG": 1.2,
    "WB_WDI_SH_H2O_SMWR_ZS": 100.0,
    "WB_WDI_SP_URB_TOTL_IN_ZS": 100.0
  },
  AUS: {
    "WB_WDI_SI_POV_GINI": 34.3,
    "WB_WDI_SL_TLF_ACTI_ZS": 66.8,
    "WB_WDI_IT_NET_BBND": 35.4,
    "WB_WDI_SE_PRM_CMPT_ZS": 99.8,
    "WB_WDI_EG_FEC_RNEW_ZS": 12.4,
    "WB_WDI_IC_REG_DURS": 2.0,
    "WB_WDI_SH_XPD_CHEX_GD_ZS": 10.1,
    "WB_WDI_NY_GDP_MKTP_KD_ZG": 2.1,
    "WB_WDI_SH_H2O_SMWR_ZS": 100.0,
    "WB_WDI_SP_URB_TOTL_IN_ZS": 86.4
  },
  NZL: {
    "WB_WDI_SI_POV_GINI": 33.5,
    "WB_WDI_SL_TLF_ACTI_ZS": 71.8,
    "WB_WDI_IT_NET_BBND": 37.8,
    "WB_WDI_SE_PRM_CMPT_ZS": 100.0,
    "WB_WDI_EG_FEC_RNEW_ZS": 41.5,
    "WB_WDI_IC_REG_DURS": 0.5,
    "WB_WDI_SH_XPD_CHEX_GD_ZS": 9.7,
    "WB_WDI_NY_GDP_MKTP_KD_ZG": 0.6,
    "WB_WDI_SH_H2O_SMWR_ZS": 100.0,
    "WB_WDI_SP_URB_TOTL_IN_ZS": 86.8
  },
  KOR: {
    "WB_WDI_SI_POV_GINI": 31.4,
    "WB_WDI_SL_TLF_ACTI_ZS": 64.2,
    "WB_WDI_IT_NET_BBND": 41.5,
    "WB_WDI_SE_PRM_CMPT_ZS": 100.0,
    "WB_WDI_EG_FEC_RNEW_ZS": 3.4,
    "WB_WDI_IC_REG_DURS": 8.0,
    "WB_WDI_SH_XPD_CHEX_GD_ZS": 9.7,
    "WB_WDI_NY_GDP_MKTP_KD_ZG": 1.4,
    "WB_WDI_SH_H2O_SMWR_ZS": 99.5,
    "WB_WDI_SP_URB_TOTL_IN_ZS": 81.4
  },
  IRL: {
    "WB_WDI_SI_POV_GINI": 29.2,
    "WB_WDI_SL_TLF_ACTI_ZS": 65.4,
    "WB_WDI_IT_NET_BBND": 38.6,
    "WB_WDI_SE_PRM_CMPT_ZS": 99.7,
    "WB_WDI_EG_FEC_RNEW_ZS": 13.5,
    "WB_WDI_IC_REG_DURS": 11.0,
    "WB_WDI_SH_XPD_CHEX_GD_ZS": 6.7,
    "WB_WDI_NY_GDP_MKTP_KD_ZG": 2.3,
    "WB_WDI_SH_H2O_SMWR_ZS": 99.2,
    "WB_WDI_SP_URB_TOTL_IN_ZS": 64.2
  },
  BRA: {
    "WB_WDI_SI_POV_GINI": 48.9,
    "WB_WDI_SL_TLF_ACTI_ZS": 61.8,
    "WB_WDI_IT_NET_BBND": 19.5,
    "WB_WDI_SE_PRM_CMPT_ZS": 95.4,
    "WB_WDI_EG_FEC_RNEW_ZS": 48.2,
    "WB_WDI_IC_REG_DURS": 17.0,
    "WB_WDI_SH_XPD_CHEX_GD_ZS": 9.5,
    "WB_WDI_NY_GDP_MKTP_KD_ZG": 2.9,
    "WB_WDI_SH_H2O_SMWR_ZS": 88.2,
    "WB_WDI_SP_URB_TOTL_IN_ZS": 87.5
  },
  MEX: {
    "WB_WDI_SI_POV_GINI": 45.4,
    "WB_WDI_SL_TLF_ACTI_ZS": 60.5,
    "WB_WDI_IT_NET_BBND": 18.2,
    "WB_WDI_SE_PRM_CMPT_ZS": 96.1,
    "WB_WDI_EG_FEC_RNEW_ZS": 10.4,
    "WB_WDI_IC_REG_DURS": 8.5,
    "WB_WDI_SH_XPD_CHEX_GD_ZS": 5.5,
    "WB_WDI_NY_GDP_MKTP_KD_ZG": 3.2,
    "WB_WDI_SH_H2O_SMWR_ZS": 43.0,
    "WB_WDI_SP_URB_TOTL_IN_ZS": 81.3
  },
  ZAF: {
    "WB_WDI_SI_POV_GINI": 63.0,
    "WB_WDI_SL_TLF_ACTI_ZS": 58.0,
    "WB_WDI_IT_NET_BBND": 15.5,
    "WB_WDI_SE_PRM_CMPT_ZS": 84.2,
    "WB_WDI_EG_FEC_RNEW_ZS": 16.5,
    "WB_WDI_IC_REG_DURS": 40.0,
    "WB_WDI_SH_XPD_CHEX_GD_ZS": 8.5,
    "WB_WDI_NY_GDP_MKTP_KD_ZG": 0.6,
    "WB_WDI_SH_H2O_SMWR_ZS": 46.0,
    "WB_WDI_SP_URB_TOTL_IN_ZS": 68.2
  },
  IND: {
    "WB_WDI_SI_POV_GINI": 34.2,
    "WB_WDI_SL_TLF_ACTI_ZS": 52.4,
    "WB_WDI_IT_NET_BBND": 2.4,
    "WB_WDI_SE_PRM_CMPT_ZS": 92.5,
    "WB_WDI_EG_FEC_RNEW_ZS": 32.5,
    "WB_WDI_IC_REG_DURS": 18.0,
    "WB_WDI_SH_XPD_CHEX_GD_ZS": 3.1,
    "WB_WDI_NY_GDP_MKTP_KD_ZG": 7.3,
    "WB_WDI_SH_H2O_SMWR_ZS": 55.4,
    "WB_WDI_SP_URB_TOTL_IN_ZS": 35.9
  },
  CHN: {
    "WB_WDI_SI_POV_GINI": 38.2,
    "WB_WDI_SL_TLF_ACTI_ZS": 68.2,
    "WB_WDI_IT_NET_BBND": 34.2,
    "WB_WDI_SE_PRM_CMPT_ZS": 98.8,
    "WB_WDI_EG_FEC_RNEW_ZS": 14.8,
    "WB_WDI_IC_REG_DURS": 9.0,
    "WB_WDI_SH_XPD_CHEX_GD_ZS": 5.4,
    "WB_WDI_NY_GDP_MKTP_KD_ZG": 5.2,
    "WB_WDI_SH_H2O_SMWR_ZS": 68.5,
    "WB_WDI_SP_URB_TOTL_IN_ZS": 63.6
  },
  ARG: {
    "WB_WDI_SI_POV_GINI": 42.0,
    "WB_WDI_SL_TLF_ACTI_ZS": 59.5,
    "WB_WDI_IT_NET_BBND": 23.4,
    "WB_WDI_SE_PRM_CMPT_ZS": 98.1,
    "WB_WDI_EG_FEC_RNEW_ZS": 10.2,
    "WB_WDI_IC_REG_DURS": 11.5,
    "WB_WDI_SH_XPD_CHEX_GD_ZS": 10.0,
    "WB_WDI_NY_GDP_MKTP_KD_ZG": -1.6,
    "WB_WDI_SH_H2O_SMWR_ZS": 72.4,
    "WB_WDI_SP_URB_TOTL_IN_ZS": 92.1
  },
  SAU: {
    "WB_WDI_SI_POV_GINI": 35.4,
    "WB_WDI_SL_TLF_ACTI_ZS": 61.2,
    "WB_WDI_IT_NET_BBND": 25.4,
    "WB_WDI_SE_PRM_CMPT_ZS": 98.4,
    "WB_WDI_EG_FEC_RNEW_ZS": 0.1,
    "WB_WDI_IC_REG_DURS": 18.0,
    "WB_WDI_SH_XPD_CHEX_GD_ZS": 5.7,
    "WB_WDI_NY_GDP_MKTP_KD_ZG": -0.8,
    "WB_WDI_SH_H2O_SMWR_ZS": 92.0,
    "WB_WDI_SP_URB_TOTL_IN_ZS": 84.5
  },
  TUR: {
    "WB_WDI_SI_POV_GINI": 41.9,
    "WB_WDI_SL_TLF_ACTI_ZS": 53.4,
    "WB_WDI_IT_NET_BBND": 21.8,
    "WB_WDI_SE_PRM_CMPT_ZS": 94.2,
    "WB_WDI_EG_FEC_RNEW_ZS": 13.8,
    "WB_WDI_IC_REG_DURS": 7.0,
    "WB_WDI_SH_XPD_CHEX_GD_ZS": 4.6,
    "WB_WDI_NY_GDP_MKTP_KD_ZG": 4.0,
    "WB_WDI_SH_H2O_SMWR_ZS": 74.5,
    "WB_WDI_SP_URB_TOTL_IN_ZS": 76.5
  },
  NGA: {
    "WB_WDI_SI_POV_GINI": 35.1,
    "WB_WDI_SL_TLF_ACTI_ZS": 56.5,
    "WB_WDI_IT_NET_BBND": 0.1,
    "WB_WDI_SE_PRM_CMPT_ZS": 72.8,
    "WB_WDI_EG_FEC_RNEW_ZS": 80.5,
    "WB_WDI_IC_REG_DURS": 7.2,
    "WB_WDI_SH_XPD_CHEX_GD_ZS": 3.8,
    "WB_WDI_NY_GDP_MKTP_KD_ZG": 2.8,
    "WB_WDI_SH_H2O_SMWR_ZS": 31.2,
    "WB_WDI_SP_URB_TOTL_IN_ZS": 53.5
  },
  KEN: {
    "WB_WDI_SI_POV_GINI": 38.9,
    "WB_WDI_SL_TLF_ACTI_ZS": 74.2,
    "WB_WDI_IT_NET_BBND": 0.8,
    "WB_WDI_SE_PRM_CMPT_ZS": 84.5,
    "WB_WDI_EG_FEC_RNEW_ZS": 65.4,
    "WB_WDI_IC_REG_DURS": 22.5,
    "WB_WDI_SH_XPD_CHEX_GD_ZS": 4.6,
    "WB_WDI_NY_GDP_MKTP_KD_ZG": 5.4,
    "WB_WDI_SH_H2O_SMWR_ZS": 50.0,
    "WB_WDI_SP_URB_TOTL_IN_ZS": 28.5
  },
  EGY: {
    "WB_WDI_SI_POV_GINI": 31.5,
    "WB_WDI_SL_TLF_ACTI_ZS": 46.5,
    "WB_WDI_IT_NET_BBND": 11.2,
    "WB_WDI_SE_PRM_CMPT_ZS": 98.4,
    "WB_WDI_EG_FEC_RNEW_ZS": 5.2,
    "WB_WDI_IC_REG_DURS": 12.5,
    "WB_WDI_SH_XPD_CHEX_GD_ZS": 4.8,
    "WB_WDI_NY_GDP_MKTP_KD_ZG": 3.8,
    "WB_WDI_SH_H2O_SMWR_ZS": 59.8,
    "WB_WDI_SP_URB_TOTL_IN_ZS": 43.1
  },
  ESP: {
    "WB_WDI_SI_POV_GINI": 33.9,
    "WB_WDI_SL_TLF_ACTI_ZS": 58.8,
    "WB_WDI_IT_NET_BBND": 39.8,
    "WB_WDI_SE_PRM_CMPT_ZS": 99.8,
    "WB_WDI_EG_FEC_RNEW_ZS": 17.5,
    "WB_WDI_IC_REG_DURS": 12.5,
    "WB_WDI_SH_XPD_CHEX_GD_ZS": 10.7,
    "WB_WDI_NY_GDP_MKTP_KD_ZG": 2.5,
    "WB_WDI_SH_H2O_SMWR_ZS": 100.0,
    "WB_WDI_SP_URB_TOTL_IN_ZS": 81.3
  },
  ITA: {
    "WB_WDI_SI_POV_GINI": 35.2,
    "WB_WDI_SL_TLF_ACTI_ZS": 49.6,
    "WB_WDI_IT_NET_BBND": 31.5,
    "WB_WDI_SE_PRM_CMPT_ZS": 99.8,
    "WB_WDI_EG_FEC_RNEW_ZS": 19.1,
    "WB_WDI_IC_REG_DURS": 11.0,
    "WB_WDI_SH_XPD_CHEX_GD_ZS": 9.4,
    "WB_WDI_NY_GDP_MKTP_KD_ZG": 0.9,
    "WB_WDI_SH_H2O_SMWR_ZS": 100.0,
    "WB_WDI_SP_URB_TOTL_IN_ZS": 71.5
  },
  NLD: {
    "WB_WDI_SI_POV_GINI": 25.8,
    "WB_WDI_SL_TLF_ACTI_ZS": 70.8,
    "WB_WDI_IT_NET_BBND": 46.1,
    "WB_WDI_SE_PRM_CMPT_ZS": 100.0,
    "WB_WDI_EG_FEC_RNEW_ZS": 15.0,
    "WB_WDI_IC_REG_DURS": 3.5,
    "WB_WDI_SH_XPD_CHEX_GD_ZS": 11.2,
    "WB_WDI_NY_GDP_MKTP_KD_ZG": 0.8,
    "WB_WDI_SH_H2O_SMWR_ZS": 100.0,
    "WB_WDI_SP_URB_TOTL_IN_ZS": 92.5
  },
  UKR: {
    "WB_WDI_SI_POV_GINI": 25.6,
    "WB_WDI_SL_TLF_ACTI_ZS": 61.5,
    "WB_WDI_IT_NET_BBND": 18.5,
    "WB_WDI_SE_PRM_CMPT_ZS": 99.8,
    "WB_WDI_EG_FEC_RNEW_ZS": 9.8,
    "WB_WDI_IC_REG_DURS": 6.5,
    "WB_WDI_SH_XPD_CHEX_GD_ZS": 7.8,
    "WB_WDI_NY_GDP_MKTP_KD_ZG": 5.3,
    "WB_WDI_SH_H2O_SMWR_ZS": 94.2,
    "WB_WDI_SP_URB_TOTL_IN_ZS": 69.8
  }
};

// UKR full model record
export const UKRAINE_MOCK: any = {
  countryCode: "UKR",
  countryName: "Ukraine",
  values: {
    "WB_WDI_NY_GDP_PCAP_PP_KD": 14500,
    "WB_WDI_NY_ADJ_NNTY_PC_KD": 11200,
    "WB_WDI_SL_UEM_TOTL_ZS": 10.5,
    "WB_WDI_SL_EMP_TOTL_SP_ZS": 50.4,
    "WB_WDI_IT_NET_USER_ZS": 78.5,
    "WB_WDI_IT_CEL_SETS_P2": 122.4,
    "WB_WDI_SE_SEC_ENRL": 98.2,
    "WB_WDI_SE_TER_ENRL": 82.5,
    "WB_WDI_EN_ATM_PM25_MC_M3": 18.2,
    "WB_WDI_EN_ATM_CO2E_PC": 3.8,
    "WB_WDI_SG_GEN_PARL_ZS": 20.8,
    "WB_WDI_SL_TLF_TOTL_FE_ZS": 47.5,
    "WB_WDI_SP_DYN_LE00_IN": 71.8,
    "WB_WDI_SP_DYN_IMRT_IN": 7.0,
    "WB_WDI_NY_ADJ_SVNG_GN_ZS": 7.5,
    "WB_WDI_FP_CPI_TOTL_ZG": 12.8,
    "WB_WDI_VC_IHR_PSRC_P5": 3.8,
    "WB_WDI_SH_STA_TRAF_P5": 10.5,
    "WB_WDI_SL_TLF_PART_ZS": 11.5,
    "WB_WDI_SL_SRV_EMPL_ZS": 60.5
  }
};

export function enrichCountriesData(countries: any[]): any[] {
  // 1. Check if Ukraine is in the list; if not add it!
  const hasUkr = countries.some(c => c.countryCode === "UKR");
  let list = [...countries];
  if (!hasUkr) {
    const ukrCopy = JSON.parse(JSON.stringify(UKRAINE_MOCK));
    list.push(ukrCopy);
  }

  // 2. Inject baseline measurements for the 10 new indicators if they are missing
  return list.map(c => {
    const updated = JSON.parse(JSON.stringify(c));
    const baselines = NEW_INDICATOR_BASELINES[c.countryCode] || {};
    Object.keys(baselines).forEach(indCode => {
      if (updated.values[indCode] === undefined) {
        updated.values[indCode] = baselines[indCode];
      }
    });
    return updated;
  });
}
