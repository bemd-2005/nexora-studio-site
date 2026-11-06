// Tout le contenu du site est ici : services, méthode, réalisations.
// Modifier un texte ou ajouter une réalisation ne demande pas de toucher aux pages.

export const NAV = [
  { to: "/", label: "Accueil" },
  { to: "/services", label: "Services" },
  { to: "/methode", label: "Méthode" },
  { to: "/realisations", label: "Réalisations" },
  { to: "/a-propos", label: "À propos" },
  { to: "/contact", label: "Contact" },
];

export const MISSION = [
  "Transformer les idées en solutions numériques performantes, modernes, fiables et évolutives.",
  "Accompagner les entreprises, entrepreneurs et organisations dans leur transformation digitale, de la conception au déploiement.",
  "Transformer les tâches complexes en processus simples, rapides et maîtrisables, avec des outils qui travaillent pour l’entreprise au lieu de la ralentir.",
];

export const SERVICES = [
  {
    id: "logiciels",
    title: "Logiciels métier sur mesure",
    short: "Des outils pensés pour la réalité de chaque activité",
    problem: "Votre activité a ses propres règles et aucun logiciel du marché ne les suit vraiment.",
    solution: "Nous concevons l’outil à partir de votre façon de travailler, pas l’inverse.",
    outputs: ["Analyse du métier", "Application dédiée", "Formation des équipes"],
  },
  {
    id: "erp-crm",
    title: "ERP et CRM",
    short: "Gestion, clients et opérations au même endroit",
    problem: "Clients, stocks, factures et opérations vivent dans des outils séparés qui ne se parlent pas.",
    solution: "Un socle unique qui structure la gestion, le suivi des clients et les opérations.",
    outputs: ["Gestion centralisée", "Suivi clients", "Droits par rôle"],
  },
  {
    id: "web-mobile",
    title: "Applications web et mobile",
    short: "Web, Android et iOS",
    problem: "Vos clients et vos équipes sont sur téléphone, vos outils non.",
    solution: "Des applications web, Android et iOS cohérentes, rapides et simples à prendre en main.",
    outputs: ["Web", "Android", "iOS"],
  },
  {
    id: "dashboards",
    title: "Tableaux de bord et administration",
    short: "Piloter l’activité en un coup d’œil",
    problem: "Les chiffres sont rassemblés à la main, souvent trop tard pour décider.",
    solution: "Des tableaux de bord et des espaces administrateurs qui montrent l’activité telle qu’elle est.",
    outputs: ["Indicateurs clés", "Espace admin", "Exports"],
  },
  {
    id: "sites",
    title: "Sites web et plateformes professionnelles",
    short: "Vitrines et e-commerce",
    problem: "Votre présence en ligne ne reflète pas le sérieux de votre entreprise.",
    solution: "Des sites vitrines et des boutiques en ligne rapides, soignés et faciles à faire évoluer.",
    outputs: ["Site vitrine", "E-commerce", "Plateforme"],
  },
  {
    id: "automatisation",
    title: "Automatisation des processus",
    short: "Fini les tâches répétitives",
    problem: "Les mêmes saisies, relances et copier-coller reviennent chaque jour, avec leur lot d’erreurs.",
    solution: "Nous automatisons ce qui peut l’être pour que vos équipes se concentrent sur le reste.",
    outputs: ["Flux automatisés", "Moins d’erreurs", "Temps gagné"],
  },
  {
    id: "ia",
    title: "Intégration de l’IA",
    short: "De l’intelligence dans vos outils",
    problem: "Vos outils enregistrent des données mais n’analysent ni n’anticipent rien.",
    solution: "Nous ajoutons de l’intelligence à l’existant : détection, analyse, assistance à la décision.",
    outputs: ["Détection", "Analyse", "Assistance"],
  },
  {
    id: "donnees",
    title: "Numérisation et gestion des données",
    short: "Sortir des fichiers éparpillés",
    problem: "Des fichiers Excel partout, des documents perdus dans WhatsApp, des informations introuvables.",
    solution: "Une base centralisée où chaque donnée est retrouvable, partagée et protégée.",
    outputs: ["Reprise des fichiers", "Base unique", "Sauvegardes"],
  },
  {
    id: "maintenance",
    title: "Maintenance, évolution et support",
    short: "Faire vivre la solution dans le temps",
    problem: "Un logiciel livré puis laissé seul vieillit mal et finit par bloquer.",
    solution: "Nous restons après la livraison : corrections, nouvelles fonctions et support technique.",
    outputs: ["Corrections", "Évolutions", "Support"],
  },
  {
    id: "marketing",
    title: "Marketing digital et accompagnement",
    short: "Visibilité et adoption",
    problem: "Un bon outil que personne ne connaît, ou que personne n’adopte, ne sert à rien.",
    solution: "Nous aidons à faire connaître l’outil et à le faire adopter par ceux qui doivent s’en servir.",
    outputs: ["Visibilité", "Adoption", "Accompagnement"],
  },
];

export const METHOD = [
  {
    id: "ecouter",
    title: "Écouter",
    text: "Nous partons de votre activité réelle : qui fait quoi, avec quels fichiers, et où le temps se perd.",
    outputs: ["Entretiens", "Cartographie des processus", "Priorités"],
  },
  {
    id: "concevoir",
    title: "Concevoir",
    text: "Nous dessinons l’outil avant de l’écrire : parcours, écrans, données et règles métier.",
    outputs: ["Maquettes", "Architecture", "Cahier des charges"],
  },
  {
    id: "developper",
    title: "Développer",
    text: "Le développement avance par étapes courtes, avec des démonstrations régulières pour que vous validiez ce que vous voyez.",
    outputs: ["Versions de démonstration", "Tests", "Ajustements"],
  },
  {
    id: "deployer",
    title: "Déployer",
    text: "Mise en ligne, formation des équipes et reprise de vos données existantes.",
    outputs: ["Mise en production", "Formation", "Migration des données"],
  },
  {
    id: "evoluer",
    title: "Faire évoluer",
    text: "Un outil vit avec l’entreprise : corrections, nouvelles fonctions et support technique dans la durée.",
    outputs: ["Maintenance", "Évolutions", "Support"],
  },
];

export const PRINCIPLES = [
  {
    title: "Des solutions adaptées à vos besoins réels",
    text: "Nous ne vous vendons pas un outil standard : nous construisons celui qui correspond à votre activité.",
  },
  {
    title: "Une équipe à l’écoute",
    text: "Vous êtes impliqué à chaque étape, de la première discussion à la mise en ligne.",
  },
  {
    title: "Des technologies modernes",
    text: "Des bases techniques actuelles, pour des outils rapides, fiables et capables d’évoluer.",
  },
  {
    title: "La qualité, l’innovation, les résultats",
    text: "Un outil réussi se mesure à ce qu’il change dans le travail de tous les jours.",
  },
];

export const AUDIENCES = [
  {
    title: "Entreprises",
    text: "Pour structurer la gestion, supprimer les doubles saisies et piloter l’activité avec des chiffres fiables.",
  },
  {
    title: "Entrepreneurs",
    text: "Pour lancer un produit ou un service numérique solide, de l’idée à la mise en ligne.",
  },
  {
    title: "Organisations",
    text: "Pour réunir une communauté, des membres ou des équipes dans un même outil simple à utiliser.",
  },
];

// cat : app | logiciel | plateforme | site
// tone : live (en service) | build (en construction)
export const PROJECTS = [
  {
    slug: "shalom",
    name: "SHALOM",
    cat: "app",
    kind: "Application mobile",
    sector: "Communauté et foi",
    status: "Livrée",
    tone: "live",
    hue: "#ff00c8",
    pitch: "L’église dans la poche : plusieurs congrégations réunies dans une seule application, chacune avec sa propre communauté.",
    description:
      "SHALOM est une application multi-congrégation. Chaque église y dispose de son espace et de sa communauté, et les fidèles retrouvent au même endroit tout ce qui rythme la vie de leur église, sans dépendre d’un lieu ni d’une heure.",
    features: [
      "Plusieurs églises dans une seule application, chacune avec sa communauté à part",
      "Prédications et cultes en ligne",
      "Publications de l’église",
      "Demandes de prière",
      "Partage de versets bibliques",
      "Espace de discussion pour soutenir la communauté",
      "Dons pour soutenir son église",
      "Annonces et événements consultables à l’avance, avec notifications",
    ],
    tags: ["Flutter", "Firebase", "Multi-congrégation", "Notifications"],
  },
  {
    slug: "douane-plus",
    name: "Douane Plus",
    cat: "logiciel",
    kind: "Logiciel métier",
    sector: "Transit et douane",
    status: "En service",
    tone: "live",
    hue: "#00ffcc",
    pitch: "La cotation douanière en quelques minutes, avec les codes SH, les taxes et la rentabilité du dossier.",
    description:
      "Douane Plus aide les professionnels du dédouanement à produire une cotation rapidement et sans erreur. Les taxes et la TVA sont basées sur de vraies pratiques de dédouanement au Cameroun et en zone CEMAC. Les utilisateurs en sont très satisfaits.",
    features: [
      "Cotation douanière rapide, appuyée sur une base complète de codes SH",
      "Taxes et TVA fondées sur des cas réels de dédouanement au Cameroun et en zone CEMAC",
      "Bibliothèque de procédures : ce qu’il faut faire à chaque étape et combien cela coûte",
      "PDF professionnel avec QR code, logo et suivi",
      "Suivi des dossiers et calcul de la rentabilité de chacun",
      "Logiciel protégé par des clés de licence professionnelles",
    ],
    tags: ["Windows", "Licences", "Codes SH", "CEMAC"],
  },
  {
    slug: "atl-track",
    name: "ATL Track",
    cat: "plateforme",
    kind: "Plateforme logistique",
    sector: "Logistique",
    status: "En développement",
    tone: "build",
    hue: "#9b6bff",
    pitch: "Le poste de pilotage d’une entreprise de logistique : opérations, suivi et indicateurs au même endroit.",
    description:
      "ATL Track est une plateforme conçue pour gérer la logistique de toute une entreprise. Elle remplace les fichiers et les échanges dispersés par un seul outil de pilotage. Le projet est en cours de développement pour le client ATL.",
    features: [
      "Gestion logistique pensée pour l’ensemble de l’entreprise",
      "Tableau de bord de pilotage",
      "Un outil unique à la place des fichiers dispersés",
    ],
    tags: ["SaaS", "Tableau de bord", "Logistique"],
    client: "ATL",
  },
  {
    slug: "surveillance-ia",
    name: "Surveillance vidéo par IA",
    cat: "plateforme",
    kind: "Plateforme IA",
    sector: "Sécurité",
    status: "En cours",
    tone: "build",
    hue: "#ff3d00",
    pitch: "Des caméras réelles qui ne se contentent plus d’enregistrer : elles surveillent.",
    description:
      "Cette plateforme se connecte à de vraies caméras et analyse ce qu’elles voient. Elle repère les événements suspects et lit le contenu d’une pièce, par exemple un objet oublié. Le projet est en cours pour le client ATL.",
    features: [
      "Connexion à des caméras réelles",
      "Détection d’événements suspects",
      "Analyse des objets présents dans la pièce",
      "Repérage d’un objet oublié",
    ],
    tags: ["IA", "Vision par ordinateur", "Caméras"],
    client: "ATL",
  },
  {
    slug: "sites-web",
    name: "Sites web",
    cat: "site",
    kind: "Sites et plateformes",
    sector: "Entreprises et églises",
    status: "En ligne",
    tone: "live",
    hue: "#ff00c8",
    pitch: "Des sites vitrines et des boutiques en ligne livrés clés en main.",
    description:
      "Nous avons conçu et livré plusieurs sites pour des entreprises, des pages professionnelles et des églises.",
    features: [],
    items: [
      { name: "ATL", text: "Site vitrine de l’entreprise de logistique ATL." },
      { name: "ATL Shop", text: "Site de boutique en ligne, livré au client." },
      { name: "Le Déclarant", text: "Le site de la page Facebook Le Déclarant." },
      { name: "Mission Internationale du Christ", text: "Le site de l’église." },
    ],
    tags: ["Vitrine", "E-commerce", "Responsive"],
  },
];
