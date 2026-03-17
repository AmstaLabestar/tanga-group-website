export const siteConfig = {
  name: "TANGA GROUP",
  description:
    "L'ingénierie de la prochaine génération technologique en Afrique. Nous concevons des systèmes embarqués, des solutions IoT et des plateformes numériques.",
  url: "https://tangagroup.com",
  ogImage: "/og-image.png",
  links: {
    twitter: "https://twitter.com/tangagroup",
    linkedin: "https://linkedin.com/company/tangagroup",
    github: "https://github.com/tangagroup",
  },
};

export const navLinks = [
  { label: "Accueil", href: "/" },
  { label: "Solutions", href: "/solutions" },
  { label: "Produits", href: "/products" },
  { label: "Technologie", href: "/technology" },
  { label: "Projets", href: "/projects" },
  { label: "Innovation", href: "/innovation" },
  { label: "Actualités", href: "/insights" },
  { label: "À propos", href: "/about" },
  { label: "Carrières", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export const expertise = [
  {
    title: "Systèmes embarqués",
    description:
      "Solutions matérielles et firmware sur mesure pour le monitoring industriel, l'automatisation et le contrôle de précision.",
    icon: "Cpu",
  },
  {
    title: "Internet des objets",
    description:
      "Des écosystèmes IoT de bout en bout reliant appareils, capteurs et cloud pour collecter et analyser les données en temps réel.",
    icon: "Wifi",
  },
  {
    title: "Plateformes numériques",
    description:
      "Des plateformes web et mobiles scalables avec tableaux de bord, analytics avancées et outils d'aide à la décision.",
    icon: "Monitor",
  },
  {
    title: "Développement sur mesure",
    description:
      "Des solutions technologiques adaptées pour relever des défis spécifiques dans l'énergie, l'agriculture et les villes intelligentes.",
    icon: "Code2",
  },
];

export const products = [
  {
    name: "TangaNode",
    tagline: "Passerelle IoT industrielle",
    description:
      "Un appareil edge renforcé pour les environnements exigeants. Il collecte les données capteurs, exécute des analyses locales et synchronise avec le cloud.",
    features: ["Support multi-protocoles", "Prêt pour l'IA en edge", "Indice IP67"],
  },
  {
    name: "TangaCloud",
    tagline: "Plateforme d'intelligence data",
    description:
      "Une plateforme cloud-native pour agréger, visualiser et exploiter des flux de données IoT issus de déploiements distribués.",
    features: ["Tableaux de bord temps réel", "Détection d'anomalies", "API-first"],
  },
  {
    name: "TangaConnect",
    tagline: "Gestion de la connectivité",
    description:
      "Une couche connectivité supportant LoRa, NB-IoT et satellite, pour une transmission fiable dans tous les environnements.",
    features: ["Bascule multi-réseaux", "Faible consommation", "Couverture globale"],
  },
];

export const deployments = [
  {
    title: "Suivi agricole intelligent",
    location: "Cameroon",
    metric: "2 400+ capteurs déployés",
    description: "Suivi en temps réel de l'humidité du sol et du climat sur des exploitations agricoles.",
  },
  {
    title: "Gestion urbaine de l'eau",
    location: "Senegal",
    metric: "98,5 % de disponibilité",
    description: "Monitoring de la distribution d'eau pour 5 villes, piloté par IoT.",
  },
  {
    title: "Analytique de ferme solaire",
    location: "Kenya",
    metric: "15 MW monitorés",
    description:
      "Optimisation des performances des installations solaires grâce à l'IA en edge.",
  },
  {
    title: "Système de suivi de flotte",
    location: "Nigeria",
    metric: "1 200 véhicules suivis",
    description: "GPS et télémétrie en temps réel pour des entreprises de logistique.",
  },
];

export const techPipeline = [
  {
    step: "Appareil",
    label: "Capteurs & embarqué",
    description: "Du matériel sur mesure collecte les données terrain",
    icon: "Cpu",
  },
  {
    step: "Connectivité",
    label: "Couche réseau",
    description: "LoRa, NB-IoT, Satellite, WiFi",
    icon: "Radio",
  },
  {
    step: "Cloud",
    label: "Traitement des données",
    description: "Ingestion, stockage, transformation, analyse",
    icon: "Cloud",
  },
  {
    step: "Tableau de bord",
    label: "Visualisation",
    description: "Insights et reporting en temps réel",
    icon: "BarChart3",
  },
  {
    step: "Décision",
    label: "Intelligence actionnable",
    description: "Alertes automatisées et décisions guidées par l'IA",
    icon: "Brain",
  },
];

export const blogPosts = [
  {
    title: "Pourquoi l'Afrique a besoin de solutions IoT locales",
    excerpt:
      "Les défis spécifiques des industries africaines nécessitent une technologie pensée avec le contexte local.",
    date: "2026-03-10",
    readTime: "5 min de lecture",
    category: "IoT",
  },
  {
    title: "Edge computing en environnements difficiles",
    excerpt:
      "Comment nous avons conçu TangaNode pour résister aux températures extrêmes, à la poussière et à l'humidité.",
    date: "2026-03-05",
    readTime: "7 min de lecture",
    category: "Ingénierie",
  },
  {
    title: "Construire des pipelines de données scalables pour l'IoT",
    excerpt:
      "Retours d'expérience sur le traitement de millions de mesures capteurs par jour sur nos déploiements.",
    date: "2026-02-28",
    readTime: "6 min de lecture",
    category: "Cloud",
  },
];

export const openPositions = [
  {
    title: "Ingénieur embarqué senior",
    location: "Douala, Cameroon",
    type: "Temps plein",
    department: "Matériel",
  },
  {
    title: "Développeur full-stack",
    location: "À distance",
    type: "Temps plein",
    department: "Plateforme",
  },
  {
    title: "Architecte solutions IoT",
    location: "Nairobi, Kenya",
    type: "Temps plein",
    department: "Solutions",
  },
];
