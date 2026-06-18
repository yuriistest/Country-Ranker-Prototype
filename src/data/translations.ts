/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export enum Language {
  EN = "en",
  UK = "uk",
  ES = "es",
  FR = "fr",
  DE = "de",
  ZH = "zh"
}

export const LANGUAGE_NAMES: { [key in Language]: string } = {
  [Language.EN]: "English",
  [Language.UK]: "Українська",
  [Language.ES]: "Español",
  [Language.FR]: "Français",
  [Language.DE]: "Deutsch",
  [Language.ZH]: "中文"
};

export interface TranslationSchema {
  title: string;
  subtitle: string;
  sandboxTag: string;
  datasetSyncBtn: string;
  resetStatsBtn: string;
  langLabel: string;
  themeToggleDark: string;
  themeToggleLight: string;
  prioritiesTitle: string;
  prioritiesRankHelp: string;
  prioritiesSub: string;
  sortAzBtn: string;
  invertOrderBtn: string;
  indicatorsCount: string;
  causalMappingTitle: string;
  scientificRationaleTitle: string;
  benefitType: string;
  costType: string;
  algorithmTitle: string;
  algorithmSub: string;
  insightsTitle: string;
  weightsBreakdownTitle: string;
  searchPlaceholder: string;
  tableRankCol: string;
  tableCountryCol: string;
  tableCodeCol: string;
  tableScoreCol: string;
  tableProfileCol: string;
  podiumTitle: string;
  podiumSub: string;
  aggregatedScoreLabel: string;
  weightedAchievementsLabel: string;
  allRankingsTitle: string;
  allRankingsSub: string;
  syncTitle: string;
  syncSub: string;
  syncBtn: string;
  syncLogsTitle: string;
  syncProgress: string;
  syncSuccess: string;
  confirmReset: string;
  noDataDescription: string;
  categoryNames: { [key: string]: string };
  methodNames: { [key: string]: string };
  activeMethodInsights: { [key: string]: string };
}

export const TRANSLATIONS: { [key in Language]: TranslationSchema } = {
  [Language.EN]: {
    title: "Well-being Index",
    subtitle: "Select and prioritize dimensions below to compare and rank country-level scores.",
    sandboxTag: "World Bank Data",
    datasetSyncBtn: "API Status",
    resetStatsBtn: "Reset",
    langLabel: "Language",
    themeToggleDark: "Dark",
    themeToggleLight: "Light",
    prioritiesTitle: "1. Key Priorities",
    prioritiesRankHelp: "Rank 1 = Top Priority",
    prioritiesSub: "Arrange the 10 dimensions below. Categories at the top are assigned higher decision weight.",
    sortAzBtn: "A-Z Order",
    invertOrderBtn: "Invert Order",
    indicatorsCount: "{count} Indicators",
    causalMappingTitle: "Category Mapping",
    scientificRationaleTitle: "Scientific Rationale",
    benefitType: "Higher is better",
    costType: "Lower is better",
    algorithmTitle: "2. Decision Model",
    algorithmSub: "Select a mathematical model to aggregate scores and resolve category trade-offs.",
    insightsTitle: "Model Logic:",
    weightsBreakdownTitle: "Indicator Weights",
    searchPlaceholder: "Search countries...",
    tableRankCol: "Rank",
    tableCountryCol: "Country",
    tableCodeCol: "Code",
    tableScoreCol: "Score",
    tableProfileCol: "Indicators",
    podiumTitle: "Top Ranked Countries",
    podiumSub: "The highest-performing countries based on your active priorities and decision model.",
    aggregatedScoreLabel: "Overall Score",
    weightedAchievementsLabel: "Weighted Scores",
    allRankingsTitle: "Top 20 Leaderboard",
    allRankingsSub: "The top 20 countries ranked by selected well-being priorities.",
    syncTitle: "Database Sync",
    syncSub: "Connect to live World Bank api endpoints to fetch recent indicator values.",
    syncBtn: "Pull Live Data (30 Indicators)",
    syncLogsTitle: "Connection Console Logs",
    syncProgress: "Synchronizing",
    syncSuccess: "🎉 Complete synchronization achieved! Active indicators database is live and fully updated.",
    confirmReset: "Reset current data changes back to the reliable high-fidelity World Bank baseline estimates?",
    noDataDescription: "Rearrange categories to represent your preferences, refine weighting, and view rankings.",
    categoryNames: {
      "Income and wealth": "Income and Wealth",
      "Work and job quality": "Work and Job Quality",
      "Social connections": "Social Connections",
      "Knowledge and skills": "Knowledge and Skills",
      "Environmental quality": "Environmental Quality",
      "Civic Engagement": "Civic Engagement",
      "Health": "Health",
      "Subjective well-being": "Subjective Well-being",
      "Safety": "Safety",
      "Work-life balance": "Work-life Balance"
    },
    methodNames: {
      "Weighted sum model (WSM)": "Weighted Sum Model (WSM)",
      "TOPSIS (Ideal Solution Similarity)": "TOPSIS (Ideal Solution Similarity)",
      "PROMETHEE II (Net Outranking Flows)": "PROMETHEE II (Net Outranking)",
      "ELECTRE (Simplified Outranking)": "ELECTRE (Simplified Outranking)",
      "Analytic hierarchy process (AHP)": "Analytic Hierarchy Process (AHP)",
      "Concensus/Combination Tracker": "Consensus/Combination Tracker"
    },
    activeMethodInsights: {
      "Weighted sum model (WSM)": "Simple and Robust: For each country, the normalized score is calculated as a direct linear sum of weighted indicator levels: Score = Sum [ Weight_j * Normalized_ij ].",
      "TOPSIS (Ideal Solution Similarity)": "Ideal Reference Scoring: Determines the hypothetical 'Perfect Country' and 'Worst Country'. TOPSIS calculates the geometric Euclidean distance of each nation to both extremes and ranks based on proximity to the optimal.",
      "PROMETHEE II (Net Outranking Flows)": "Preference Outranking: Compares every country pair-wise for every category. It computes leaving and entering outranking trend flows. Ranking is determined by the final net outranking flow (Phi).",
      "Analytic hierarchy process (AHP)": "Analytic Hierarchy Priority: Generates a Saaty pairwise matrix based on the ranked list intervals. The final weights are derived by calculating the principal eigenvector values of the priority matrix.",
      "ELECTRE (Simplified Outranking)": "Outranking Over-dominance: Concordance levels are calculated by evaluating binary outranking relationships based on threshold filters. Measures alternative power over other alternatives.",
      "Concensus/Combination Tracker": "Consensus Aggregator: Computes all 5 decision algorithms independently behind the scenes, finds the ordinal country rank in each model, and outputs they list sorted by average integrated rank position."
    }
  },
  [Language.UK]: {
    title: "Рейтинг добробуту",
    subtitle: "Оберіть та впорядкуйте категорійні пріоритети для розрахунку рейтингу країн.",
    sandboxTag: "Дані Світового банку",
    datasetSyncBtn: "Статус API",
    resetStatsBtn: "Скинути",
    langLabel: "Мова",
    themeToggleDark: "Темна",
    themeToggleLight: "Світла",
    prioritiesTitle: "1. Пріоритети",
    prioritiesRankHelp: "Ранг 1 = Топ-пріоритет",
    prioritiesSub: "Впорядкуйте 10 категорій добробуту. Категорії зверху отримують більшу математичну вагу.",
    sortAzBtn: "За алфавітом",
    invertOrderBtn: "Інвертувати",
    indicatorsCount: "{count} Показників",
    causalMappingTitle: "Відповідність показників",
    scientificRationaleTitle: "Наукове обґрунтування",
    benefitType: "Більше значення краще",
    costType: "Менше значення краще",
    algorithmTitle: "2. Модель рішень",
    algorithmSub: "Оберіть математичний метод для зведення оцінок та компромісів між категоріями.",
    insightsTitle: "Логіка моделі:",
    weightsBreakdownTitle: "Розподіл ваги",
    searchPlaceholder: "Пошук країни...",
    tableRankCol: "Ранг",
    tableCountryCol: "Країна",
    tableCodeCol: "Код",
    tableScoreCol: "Бал",
    tableProfileCol: "Показники",
    podiumTitle: "Кращі країни за вашими уподобаннями",
    podiumSub: "Країни з найкращими загальними оцінками відповідно до обраних пріоритетів та моделі.",
    aggregatedScoreLabel: "Загальний бал",
    weightedAchievementsLabel: "Зважені оцінки",
    allRankingsTitle: "Топ-20 країн",
    allRankingsSub: "Рейтинг 20 найкращих країн відповідно до обраних пріоритетів та моделі.",
    syncTitle: "Синхронізація",
    syncSub: "Підключитися до актуальних даних Світового банку через API для оновлення показників.",
    syncBtn: "Завантажити дані (30 показників)",
    syncLogsTitle: "Консоль логів підключення",
    syncProgress: "Синхронізація",
    syncSuccess: "🎉 Синхронізацію завершено! Базу активних показників оновлено.",
    confirmReset: "Скинути поточні зміни та повернутися до надійних базових оцінок Світового банку?",
    noDataDescription: "Переставте категорії відповідно до ваших уподобань, виберіть модель та перегляньте рейтинги.",
    categoryNames: {
      "Income and wealth": "Дохід та багатство",
      "Work and job quality": "Робота та якість праці",
      "Social connections": "Соціальні зв'язки",
      "Knowledge and skills": "Знання та навички",
      "Environmental quality": "Якість довкілля",
      "Civic Engagement": "Громадянська активність",
      "Health": "Здоров'я",
      "Subjective well-being": "Суб'єктивне благополуччя",
      "Safety": "Безпека",
      "Work-life balance": "Баланс між роботою та особистим життям"
    },
    methodNames: {
      "Weighted sum model (WSM)": "Зважена сума (WSM)",
      "TOPSIS (Ideal Solution Similarity)": "Метод TOPSIS (Близькість до ідеалу)",
      "PROMETHEE II (Net Outranking Flows)": "PROMETHEE II (Перевага за переважанням)",
      "ELECTRE (Simplified Outranking)": "ELECTRE (Спрощене переважання)",
      "Analytic hierarchy process (AHP)": "Аналітична ієрархія (AHP)",
      "Concensus/Combination Tracker": "Агрегатор консенсусу"
    },
    activeMethodInsights: {
      "Weighted sum model (WSM)": "Проста і надійна: Для кожної країни нормований бал обчислюється як пряма лінійна сума зважених рівнів показників: Бал = Сума [ Вага * Нормовано ].",
      "TOPSIS (Ideal Solution Similarity)": "Порівняння з ідеалом: Визначає гіпотетичні 'Ідеальну країну' та 'Найгіршу країну'. TOPSIS обчислює євклідову відстань до обох екстремумів і ранжує за близькістю до ідеалу.",
      "PROMETHEE II (Net Outranking Flows)": "Перевага за переважанням: Порівнює кожну пару країн для кожної категорії. Обчислює вихідні та вхідні потоки переваги. Ранг визначається чистим потоком (Phi).",
      "Analytic hierarchy process (AHP)": "Аналітична ієрархія: Створює парну матрицю Сааті на основі інтервалів ранжованого списку. Фінальна вага виводиться через метод головного власного вектора.",
      "ELECTRE (Simplified Outranking)": "Спрощене переважання: Рівні конкордації обчислюються шляхом оцінки бінарних відносин за пороговими фільтрами. Вимірює силу альтернативи щодо інших.",
      "Concensus/Combination Tracker": "Агрегатор консенсусу: Обчислює всі 5 алгоритмів незалежно, визначає ранг країни у кожній моделі та виводить список за середньою позицією рангу."
    }
  },
  [Language.ES]: {
    title: "Clasificador de Bienestar del Banco Mundial",
    subtitle: "Construya clasificaciones personalizadas de macrobienestar para países. Ordene categorías arrastrando elementos, seleccione su algoritmo de decisión y genere los mejores resultados.",
    sandboxTag: "Banco de Datos de la UNESCO y el Banco Mundial",
    datasetSyncBtn: "Sincronización de Datos y Estado de la API",
    resetStatsBtn: "Restablecer Estadísticas",
    langLabel: "Idioma",
    themeToggleDark: "Oscuro",
    themeToggleLight: "Claro",
    prioritiesTitle: "1. Establecer Prioridades de Categorías",
    prioritiesRankHelp: "Rango 1 = Peso Máximo",
    prioritiesSub: "Nuestras 10 dimensiones de bienestar se clasifican a continuación. Arrastre y suelte las tarjetas o use las flechas para priorizarlas. Los elementos superiores tienen un peso matemático significativamente mayor.",
    sortAzBtn: "Ordenar A-Z Alfabéticamente",
    invertOrderBtn: "Invertir Orden",
    indicatorsCount: "Influenciado por {count} indicadores del WDI",
    causalMappingTitle: "Mapeo de Clasificación Causal de Categoría:",
    scientificRationaleTitle: "Justificación Científica:",
    benefitType: "Mayor Es Mejor",
    costType: "Menor Es Mejor",
    algorithmTitle: "2. Algoritmo de Decisión MCDA",
    algorithmSub: "Configure cómo los países compensan entre diferentes categorías de bienestar (por ejemplo, bajas tasas de homicidios en Japón frente a un PIB alto en Singapur).",
    insightsTitle: "Cómo calcula los resultados el algoritmo seleccionado:",
    weightsBreakdownTitle: "Desglose Porcentual del Peso del Indicador Resultante",
    searchPlaceholder: "Filtrar países por nombre/código...",
    tableRankCol: "Rango",
    tableCountryCol: "País",
    tableCodeCol: "Código de País",
    tableScoreCol: "Puntuación General",
    tableProfileCol: "Perfil de Indicadores Clave",
    podiumTitle: "Principales Naciones Soberanas Según sus Preferencias",
    podiumSub: "Estas naciones tienen el mejor desempeño en sus dimensiones priorizadas utilizando la lógica de decisión designada. Las puntuaciones se normalizan y se escalan en un rango porcentual.",
    aggregatedScoreLabel: "Puntuación Agregada",
    weightedAchievementsLabel: "Logros Ponderados:",
    allRankingsTitle: "Clasificación Top 20",
    allRankingsSub: "Los 20 países con mejor desempeño según las prioridades seleccionadas.",
    syncTitle: "Sincronización del Repositorio WDI",
    syncSub: "La base de datos local opera con estimaciones reales y de alta calidad del Banco Mundial. Si activa una sincronización, el servidor se conectará a api.worldbank.org.",
    syncBtn: "Obtener Datos en Vivo (30 Indicadores)",
    syncLogsTitle: "Consola de Registro de Conexión",
    syncProgress: "Sincronizando",
    syncSuccess: "🎉 ¡Sincronización completa lograda! La base de datos de indicadores activos está actualizada.",
    confirmReset: "¿Restablecer cambios actuales de vuelta a las estimaciones de referencia de alta fidelidad?",
    noDataDescription: "Reorganice categorías para representar sus preferencias, refine la ponderación y vea las clasificaciones.",
    categoryNames: {
      "Income and wealth": "Ingresos y Riqueza",
      "Work and job quality": "Trabajo y Calidad del Empleo",
      "Social connections": "Conexiones Sociales",
      "Knowledge and skills": "Conocimientos y Habilidades",
      "Environmental quality": "Calidad Ambiental",
      "Civic Engagement": "Participación Cívica",
      "Health": "Salud",
      "Subjective well-being": "Bienestar Subjetivo",
      "Safety": "Seguridad",
      "Work-life balance": "Conciliación Laboral/Personal"
    },
    methodNames: {
      "Weighted sum model (WSM)": "Modelo de Suma Ponderada (WSM)",
      "TOPSIS (Ideal Solution Similarity)": "TOPSIS (Similitud del Estado Ideal)",
      "PROMETHEE II (Net Outranking Flows)": "PROMETHEE II (Flujos de Superación)",
      "ELECTRE (Simplified Outranking)": "ELECTRE (Superación Simplificada)",
      "Analytic hierarchy process (AHP)": "Proceso de Jerarquía Analítica (AHP)",
      "Concensus/Combination Tracker": "Agregador de Consenso de Métodos"
    },
    activeMethodInsights: {
      "Weighted sum model (WSM)": "Simple y robusto: Para cada país, la puntuación normalizada se calcula como una suma lineal directa de los niveles de indicadores ponderados: Puntuación = Suma [ Peso * Normalizado ].",
      "TOPSIS (Ideal Solution Similarity)": "Puntuación de referencia ideal: Determina el 'País perfecto' y 'Peor país' hipotéticos. TOPSIS calcula la distancia euclidiana geométrica de cada nación a ambos extremos.",
      "PROMETHEE II (Net Outranking Flows)": "Preferencia de superación: Compara cada par de países en cada categoría. Calcula los flujos netos de preferencia (Phi).",
      "Analytic hierarchy process (AHP)": "Proceso de jerarquía analítica: Genera una matriz Saaty basada en intervalos de rango de la lista, calculando el eigenvector principal.",
      "ELECTRE (Simplified Outranking)": "Superación de dominancia simplificada: Los niveles de concordancia se calculan evaluando relaciones binarias basadas en umbrales de filtración.",
      "Concensus/Combination Tracker": "Agregador de consenso: Calcula los 5 algoritmos de forma independiente, promedia el rango de cada país y los ordena según su rango medio integrado."
    }
  },
  [Language.FR]: {
    title: "Classement de Bien-être de la Banque Mondiale",
    subtitle: "Construisez des classements de bien-être personnalisés pour les pays. Ordonnez les catégories en faisant glisser les éléments, sélectionnez votre algorithme de décision et affichez les meilleurs résultats.",
    sandboxTag: "Bac à sable des données UNESCO & Banque Mondiale",
    datasetSyncBtn: "Synchronisation des données & Statut de l'API",
    resetStatsBtn: "Réinitialiser",
    langLabel: "Langue",
    themeToggleDark: "Sombre",
    themeToggleLight: "Clair",
    prioritiesTitle: "1. Définir les priorités des catégories",
    prioritiesRankHelp: "Rang 1 = Poids le plus élevé",
    prioritiesSub: "Nos 10 dimensions de bien-être sont classées ci-dessous. Glissez-déposez les cartes ou utilisez les flèches pour les prioriser. Les éléments supérieurs ont un poids mathématique nettement plus élevé.",
    sortAzBtn: "Trier de A à Z par ordre alphabétique",
    invertOrderBtn: "Inverser l'ordre",
    indicatorsCount: "Influencé par {count} indicateurs du WDI",
    causalMappingTitle: "Cartographie de la classification causale des catégories :",
    scientificRationaleTitle: "Justification scientifique :",
    benefitType: "Plus Élevé Est Meilleur",
    costType: "Plus Bas Est Meilleur",
    algorithmTitle: "2. Algorithme de décision MCDA",
    algorithmSub: "Configurez la manière dont les pays s'équilibrent entre différentes catégories de bien-être (par exemple, de faibles taux d'homicide au Japon par rapport à un PIB élevé à Singapour).",
    insightsTitle: "Comment l'algorithme sélectionné calcule les résultats :",
    weightsBreakdownTitle: "Répartition en pourcentage du poids de l'indicateur résultant",
    searchPlaceholder: "Filtrer les pays par nom/code...",
    tableRankCol: "Rang",
    tableCountryCol: "Pays",
    tableCodeCol: "Code de Pays",
    tableScoreCol: "Score global",
    tableProfileCol: "Profil des indicateurs clés",
    podiumTitle: "Meilleures nations souveraines selon vos préférences",
    podiumSub: "Ces États obtiennent les meilleurs résultats sur l'ensemble de vos dimensions priorisées avec la logique désignée. Les scores sont normalisés et mis à l'échelle sur une plage de pourcentage.",
    aggregatedScoreLabel: "Score agrégé",
    weightedAchievementsLabel: "Réalisations pondérées :",
    allRankingsTitle: "Classement Top 20",
    allRankingsSub: "Les 20 pays les plus performants selon les priorités bien-être sélectionnées.",
    syncTitle: "Synchronisation du référentiel WDI",
    syncSub: "La base de données locale fonctionne avec des estimations réelles et de haute qualité de la Banque mondiale. Si vous lancez une synchronisation, le serveur se connectera à api.worldbank.org.",
    syncBtn: "Extraire les données en direct (30 indicateurs)",
    syncLogsTitle: "Console de connexion",
    syncProgress: "Synchronisation",
    syncSuccess: "🎉 Synchronisation complète réussie ! La base de données des indicateurs est mise à jour avec succès.",
    confirmReset: "Réinitialiser les modifications vers les estimations de référence de haute fidélité ?",
    noDataDescription: "Réorganisez les catégories pour représenter vos préférences, ajustez la pondération et affichez les classements.",
    categoryNames: {
      "Income and wealth": "Revenus et Richesse",
      "Work and job quality": "Travail et Qualité de l'Emploi",
      "Social connections": "Relations Sociales",
      "Knowledge and skills": "Savoirs et Compétences",
      "Environmental quality": "Qualité de l'Environnement",
      "Civic Engagement": "Engagement Citoyen",
      "Health": "Santé",
      "Subjective well-being": "Bien-être Subjectif",
      "Safety": "Sécurité",
      "Work-life balance": "Équilibre Vie Pro-Vie Perso"
    },
    methodNames: {
      "Weighted sum model (WSM)": "Somme Pondérée (WSM)",
      "TOPSIS (Ideal Solution Similarity)": "TOPSIS (Proximité Solutions Idéales)",
      "PROMETHEE II (Net Outranking Flows)": "PROMETHEE II (Surpassement)",
      "ELECTRE (Simplified Outranking)": "ELECTRE (Surpassement Simplifié)",
      "Analytic hierarchy process (AHP)": "Hiérarchie Analytique (AHP)",
      "Concensus/Combination Tracker": "Agrégateur Consensus Multi-modèles"
    },
    activeMethodInsights: {
      "Weighted sum model (WSM)": "Simple et robuste : Pour chaque pays, le score normalisé est calculé comme une somme linéaire directe des niveaux pondérés : Score = Somme [ Poids * Normalisé ].",
      "TOPSIS (Ideal Solution Similarity)": "Score de référence idéal : Détermine le 'Pays parfait' et le 'Pire pays' hypothétiques. TOPSIS calcule la distance euclidienne géométrique de chaque nation aux deux extrêmes.",
      "PROMETHEE II (Net Outranking Flows)": "Surpassement de préférence : Compare chaque paire de pays pour chaque catégorie. Calcule les flux nets de surpassement (Phi).",
      "Analytic hierarchy process (AHP)": "Processus de hiérarchie analytique : Génère une matrice Saaty basée sur les intervalles de la liste classée, obtenant le vecteur propre principal.",
      "ELECTRE (Simplified Outranking)": "Surpassement de dominance simplifié : Les niveaux de concordance sont calculés en évaluant les relations binaires pour filtrer la dominance.",
      "Concensus/Combination Tracker": "Agrégateur de consensus : Calcule les 5 algorithmes de manière indépendante, calcule le rang moyen de chaque pays et le trie selon sa moyenne intégrée."
    }
  },
  [Language.DE]: {
    title: "Weltbank Wohlfahrtsindex-Klassifizierer",
    subtitle: "Erstellen Sie maßgeschneiderte Makro-Wohlbefindens-Rankings für Länder. Ordnen Sie Kategorien durch Ziehen von Elementen an, wählen Sie den Algorithmus und zeigen Sie die besten Ergebnisse an.",
    sandboxTag: "Unesco & Weltbank Daten-Sandbox",
    datasetSyncBtn: "Daten-Synchronisation & API-Status",
    resetStatsBtn: "Statistiken zurücksetzen",
    langLabel: "Sprache",
    themeToggleDark: "Dunkel",
    themeToggleLight: "Hell",
    prioritiesTitle: "1. Kategorie-Prioritäten festlegen",
    prioritiesRankHelp: "Rang 1 = Höchste Gewichtung",
    prioritiesSub: "Unsere 10 Wohlbefindensdimensionen sind unten aufgeführt. Ziehen Sie die Karten mit der Maus oder verwenden Sie die Tasten, um sie zu priorisieren. Obere Elemente haben ein deutlich höheres Gewicht.",
    sortAzBtn: "Alphabetisch sortieren A-Z",
    invertOrderBtn: "Reihenfolge spiegeln / invertieren",
    indicatorsCount: "Beeinflusst durch {count} WDI-Indikatoren",
    causalMappingTitle: "Kausale Klassifizierung der Kategorie:",
    scientificRationaleTitle: "Wissenschaftliche Begründung:",
    benefitType: "Höher ist besser",
    costType: "Niedriger ist besser",
    algorithmTitle: "2. MCDA-Entscheidungsalgorithmus",
    algorithmSub: "Konfigurieren Sie, wie Länder zwischen verschiedenen Wohlbefindenskategorien abwägen (z. B. niedrige Tötungsraten in Japan gegenüber hohem BIP in Singapur).",
    insightsTitle: "Wie der ausgewählte Algorithmus Ergebnisse berechnet:",
    weightsBreakdownTitle: "Resultierende prozentuale Aufteilung der Indikatorgewichtung",
    searchPlaceholder: "Länder filtern nach Name/Code...",
    tableRankCol: "Rang",
    tableCountryCol: "Land",
    tableCodeCol: "Ländercode",
    tableScoreCol: "Gesamtpunktzahl",
    tableProfileCol: "Profil wichtiger Indikatoren",
    podiumTitle: "Top-Nationen nach Ihren Präferenzen",
    podiumSub: "Diese Nationalstaaten erzielen basierend auf Ihren Prioritäten und Algorithmen das beste Ergebnis. Die Punktzahlen sind auf 0-100% skaliert.",
    aggregatedScoreLabel: "Aggregierte Punktzahl",
    weightedAchievementsLabel: "Gewichtete Erfolge:",
    allRankingsTitle: "Top 20 Rangliste",
    allRankingsSub: "Die 20 am besten bewerteten Länder basierend auf Ihren Wohlbefinden-Prioritäten.",
    syncTitle: "WDI-Schnittstellenabgleich",
    syncSub: "Die lokale Datenbank arbeitet mit echten, qualitativ hochwertigen Schätzungen der Weltbank. Bei der Synchronisierung verbindet sich der Server mit api.worldbank.org.",
    syncBtn: "Echtzeitdaten laden (30 Indikatoren)",
    syncLogsTitle: "Verbindungsprotokolle",
    syncProgress: "Synchronisierung",
    syncSuccess: "🎉 Vollständige Synchronisierung erreicht! Die aktive Indikator-Datenbank ist live aktualisiert.",
    confirmReset: "Aktuelle Änderungen auf die vertrauenswürdigsten Standardwerte der Weltbank zurücksetzen?",
    noDataDescription: "Ordnen Sie die Kategorien nach Ihren Wünschen an, wählen Sie Ihre Methodik aus und sehen Sie sich die Ergebnisse an.",
    categoryNames: {
      "Income and wealth": "Einkommen und Wohlstand",
      "Work and job quality": "Arbeit und Arbeitsplatzqualität",
      "Social connections": "Soziale Beziehungen",
      "Knowledge and skills": "Wissen und Fähigkeiten",
      "Environmental quality": "Umweltqualität",
      "Civic Engagement": "Zivilgesellschaftliches Engagement",
      "Health": "Gesundheit",
      "Subjective well-being": "Subjektives Wohlbefinden",
      "Safety": "Sicherheit",
      "Work-life balance": "Work-Life-Balance"
    },
    methodNames: {
      "Weighted sum model (WSM)": "Gewichtete Summe (WSM)",
      "TOPSIS (Ideal Solution Similarity)": "TOPSIS (Ähnlichkeit zur Ideallösung)",
      "PROMETHEE II (Net Outranking Flows)": "PROMETHEE II (Netto-Überlegenheitsfluss)",
      "ELECTRE (Simplified Outranking)": "ELECTRE (Vereinfachte Dominanz)",
      "Analytic hierarchy process (AHP)": "Analytischer Hierarchieprozess (AHP)",
      "Concensus/Combination Tracker": "Konsens-Aggregator"
    },
    activeMethodInsights: {
      "Weighted sum model (WSM)": "Einfach und robust: Für jedes Land wird die normalisierte Punktzahl als direkte lineare Summe gewichteter Indikatoren berechnet: Score = Summe [ Gewicht * Normalisiert ].",
      "TOPSIS (Ideal Solution Similarity)": "Ideales Referenzscoring: Bestimmt das hypothetische 'perfekte Land' und 'schlechteste Land'. TOPSIS berechnet die euklidische Distanz zu beiden Extremen.",
      "PROMETHEE II (Net Outranking Flows)": "Präferenz-Überlegenheit: Vergleicht jedes Länderpaar paarweise für jede Kategorie und berechnet den Nettofluss (Phi).",
      "Analytic hierarchy process (AHP)": "Analytischer Hierarchieprozess: Erzeugt eine Saaty-Matrix basierend auf Prioritäten, um den Haupt-Eigenvektor zu bestimmen.",
      "ELECTRE (Simplified Outranking)": "Vereinfachte Dominanz-Überlegenheit: Konkordanzniveaus werden durch Auswertung binärer Beziehungen berechnet.",
      "Concensus/Combination Tracker": "Konsens-Aggregator: Berechnet alle 5 Algorithmen unabhängig voneinander und aggregiert die Ränge."
    }
  },
  [Language.ZH]: {
    title: "世界银行福祉指数排行系统",
    subtitle: "构建个性化的国家宏观福祉指数。拖动项目进行优先级排序，选择多准则决策(MCDA)结算算法，展现最佳国家指标。",
    sandboxTag: "联合国教科文组织与世界银行数据库",
    datasetSyncBtn: "数据同步与API终端状态",
    resetStatsBtn: "重置数据",
    langLabel: "界面语言",
    themeToggleDark: "深色",
    themeToggleLight: "浅色",
    prioritiesTitle: "1. 设定各版块优先级",
    prioritiesRankHelp: "排名 1 = 最高权重",
    prioritiesSub: "福祉评估体系由10个核心领域组成。使用鼠标拖拽卡片，或者使用上下箭头进行主观优先级排序。排在最上方的项目会客观占据极高的数学计算权重比例。",
    sortAzBtn: "拼音首字母排序",
    invertOrderBtn: "镜像反转排序",
    indicatorsCount: "受 {count} 个世界银行核心指标综合影响",
    causalMappingTitle: "指标对应关系与因果性质分类：",
    scientificRationaleTitle: "学术与评估背景：",
    benefitType: "数额越高越优 (正向效益)",
    costType: "数额越低越优 (反向消耗)",
    algorithmTitle: "2. MCDA 决策数学矩阵引擎",
    algorithmSub: "设定如何处理国家间的跨维度博弈（例如：日本的低犯罪率与新加坡的极高人均产出值如何进行权衡折算）。",
    insightsTitle: "当前结算矩阵对输出的转换解算机制：",
    weightsBreakdownTitle: "根据当前优先度所得出的最终指标权重分配详情",
    searchPlaceholder: "输入关键字以过滤国家...",
    tableRankCol: "名次",
    tableCountryCol: "主权国家名称",
    tableCodeCol: "国家代号",
    tableScoreCol: "福祉综合评分",
    tableProfileCol: "核心属性面貌",
    podiumTitle: "精准匹配您主观优先倾向的名次巅峰",
    podiumSub: "基于您设定的10项权重次序与MCDA矩阵算法，计算出的最理想宜居前三名主权国家，百分比得分基于加权无纲量化处理。",
    aggregatedScoreLabel: "综合加权百分得分",
    weightedAchievementsLabel: "加权优势成分细分:",
    allRankingsTitle: "主权福祉综合名次前二十强 (Top 20)",
    allRankingsSub: "根据您选择的福利优先级指标排名的前20个国家。",
    syncTitle: "世界银行WDI数据库在线同步",
    syncSub: "本系统基于世界银行历史高精度估测数据。如启动在线实时同步，服务端将调用api.worldbank.org获取2021-2024的最新数值。",
    syncBtn: "请求实时数据进行校正 (30 个指标)",
    syncLogsTitle: "在线通信与同步事件控制台",
    syncProgress: "正进行远程数据通信",
    syncSuccess: "🎉 远程指标同步完成！实时数据库已完成最新核定并激活就绪。",
    confirmReset: "是否立即清除内存中用户做的修改，一键回到世界银行基准历史估算值？",
    noDataDescription: "拖拽排序左侧各维度、在右侧选择算法并进行自动福祉解算排序。",
    categoryNames: {
      "Income and wealth": "收入与财富",
      "Work and job quality": "工作与就业质量",
      "Social connections": "社会关联性",
      "Knowledge and skills": "知识与技能",
      "Environmental quality": "环境生态质量",
      "Civic Engagement": "公民参与",
      "Health": "全民健康",
      "Subjective well-being": "主观幸福感",
      "Safety": "公共安全",
      "Work-life balance": "工作与生活平衡"
    },
    methodNames: {
      "Weighted sum model (WSM)": "加权和模型 (WSM)",
      "TOPSIS (Ideal Solution Similarity)": "优劣逼近贴合度 (TOPSIS)",
      "PROMETHEE II (Net Outranking Flows)": "偏好排序超越流 (PROMETHEE II)",
      "ELECTRE (Simplified Outranking)": "消去与选择超越 (ELECTRE)",
      "Analytic hierarchy process (AHP)": "层次分析本征向量 (AHP)",
      "Concensus/Combination Tracker": "主权共识合并模型 (Consensus)"
    },
    activeMethodInsights: {
      "Weighted sum model (WSM)": "加权和模型 (WSM)：最经典且高鲁棒性的方法。对每个国家的正规化得分进行直接线性加权累加：得分 = ∑ (权重 * 各指标归一化分值)。",
      "TOPSIS (Ideal Solution Similarity)": "优劣逼近法 (TOPSIS)：通过构建虚拟的“黄金标杆国家”与“最劣警戒国家”，通过几何欧氏空间距离寻找与最优解相对贴合度最高的国家。",
      "PROMETHEE II (Net Outranking Flows)": "偏好排队法 (PROMETHEE II)：通过对全部备选国家两两在各领域进行级差对比，得出向外超越流与向内被超越流，差值 (Phi) 越大排名越前。",
      "Analytic hierarchy process (AHP)": "层次分析法 (AHP)：根据项目差值构建Saaty两两成对比照矩阵，利用矩阵最大特征根对应的特征向量解出综合绝对权重并求解。",
      "ELECTRE (Simplified Outranking)": "消去与选择转化法 (ELECTRE)：利用协调性指标与非协调性指标进行二元超越关系过滤淘汰，得出高确定性的社会偏好契合序列值。",
      "Concensus/Combination Tracker": "多模型融合共识评估：在服务器并行运算以上五种数学模型，计算各模型所得的国家相对排位，并以平均排位进行二次聚合以消弭算法偏差。"
    }
  }
};
