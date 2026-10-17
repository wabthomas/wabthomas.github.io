/** Projects with detail pages */

export const PROJECTS = [
  {
    slug: "wab-infos",
    emoji: "📰",
    cover: 1,
    title: "Wab Infos",
    status: "live",
    tags: ["Next.js", "React", "TypeScript", "CMS"],
    links: [
      { href: "https://wab-infos.com", labelKey: "projects.visit" },
      { href: "https://github.com/wabthomas", labelKey: "projects.code", muted: true },
    ],
    fr: {
      summary:
        "Plateforme d’actualités en RDC : rédaction, audience et expérience web moderne pour s’informer en français.",
      body: "Wab-infos.com est un média digital que j’ai fondé et que je fais évoluer en continu : publication d’articles, administration éditoriale, performance, SEO et présence multi-canaux (site + Wab-infos TV). Stack front moderne pour une lecture fluide sur mobile.",
      highlights: [
        "CMS & workflow éditorial",
        "SEO et Core Web Vitals",
        "Audience multi-plateformes",
        "Chaîne YouTube Wab-infos TV",
      ],
    },
    en: {
      summary:
        "A news platform for the DRC: publishing, audience and a modern web experience in French.",
      body: "Wab-infos.com is a digital media I founded and keep evolving: article publishing, editorial admin, performance, SEO and multi-channel presence (site + Wab-infos TV). Modern front-end for a smooth mobile reading experience.",
      highlights: [
        "CMS & editorial workflow",
        "SEO and Core Web Vitals",
        "Multi-platform audience",
        "Wab-infos TV on YouTube",
      ],
    },
  },
  {
    slug: "wab-market",
    emoji: "🛒",
    cover: 2,
    title: "Wab Market",
    status: "live",
    tags: ["React", "Node.js", "Capacitor", "Firebase"],
    links: [{ href: "https://wabmarket.app", labelKey: "projects.visit" }],
    fr: {
      summary:
        "Marketplace multi-vendeurs avec parcours d’achat, admin et app mobile (Capacitor).",
      body: "Wab Market est une marketplace multi-vendeurs : catalogue, panier, administration marchands et application mobile via Capacitor. Backend Node et services Firebase pour l’auth et les notifications.",
      highlights: [
        "Marketplace multi-vendeurs",
        "App mobile Capacitor",
        "Admin & opérations",
        "Auth / push Firebase",
      ],
    },
    en: {
      summary:
        "Multi-vendor marketplace with checkout, admin and mobile app (Capacitor).",
      body: "Wab Market is a multi-vendor marketplace: catalog, cart, merchant admin and a Capacitor mobile app. Node backend with Firebase for auth and notifications.",
      highlights: [
        "Multi-vendor marketplace",
        "Capacitor mobile app",
        "Admin & operations",
        "Firebase auth / push",
      ],
    },
  },
  {
    slug: "kivucolis",
    emoji: "📦",
    cover: 3,
    title: "KivuColis",
    status: "live",
    tags: ["React", "Node.js", "PostgreSQL", "Logistique"],
    links: [{ href: "https://colis.wabmarket.com", labelKey: "projects.visit" }],
    fr: {
      summary:
        "Plateforme logistique pour envois et suivi de colis / transferts en Afrique de l’Est.",
      body: "KivuColis (colis.wabmarket.com) couvre la logistique et les transferts en Afrique de l’Est : création d’envois, suivi de colis, points relais et opérations terrain. Conçu pour des flux réels entre villes — Goma et la région — avec une interface web claire pour clients et opérateurs.",
      highlights: [
        "Création & suivi d’envois",
        "Points relais / opérateurs",
        "Transferts Afrique de l’Est",
        "Stack React + Node + PostgreSQL",
      ],
      urlNote: "https://colis.wabmarket.com",
    },
    en: {
      summary:
        "Logistics platform for parcel shipping and tracking across East Africa.",
      body: "KivuColis (colis.wabmarket.com) covers logistics and transfers in East Africa: shipment creation, parcel tracking, pickup points and field operations. Built for real city-to-city flows — Goma and the region — with a clear web UI for customers and operators.",
      highlights: [
        "Shipment creation & tracking",
        "Pickup points / operators",
        "East Africa transfers",
        "React + Node + PostgreSQL stack",
      ],
      urlNote: "https://colis.wabmarket.com",
    },
  },
  {
    slug: "zua-taxi",
    emoji: "🚕",
    cover: 1,
    title: "Zua Taxi",
    status: "wip",
    tags: ["React Native", "Expo", "Node.js", "GCP"],
    links: [],
    fr: {
      summary:
        "Produit de commande de taxis : parcours mobile, auth, APIs et déploiement cloud.",
      body: "Zua Taxi est un produit mobile de réservation : parcours de commande, authentification, services backend et intégrations API, déployé sur le cloud (GCP / Firebase).",
      highlights: [
        "App React Native / Expo",
        "Parcours de réservation",
        "APIs Node",
        "Déploiement cloud",
      ],
    },
    en: {
      summary:
        "Taxi ordering product: mobile flows, auth, APIs and cloud deployment.",
      body: "Zua Taxi is a mobile booking product: order flows, authentication, backend services and API integrations, deployed on the cloud (GCP / Firebase).",
      highlights: [
        "React Native / Expo app",
        "Booking flows",
        "Node APIs",
        "Cloud deployment",
      ],
    },
  },
  {
    slug: "kiwanda",
    emoji: "🏢",
    cover: 2,
    title: "Kiwanda / KRHISNA",
    status: "live",
    tags: ["Next.js", "NestJS", "Prisma", "GCP"],
    links: [],
    fr: {
      summary:
        "Pilotage technique d’une plateforme web avec une équipe de 15 personnes.",
      body: "Sur Kiwanda / KRHISNA j’ai assuré le lead technique : architecture, priorités, jalons, revues de solutions et contribution à l’implémentation jusqu’à la livraison dans les délais.",
      highlights: [
        "Lead technique · 15 personnes",
        "Next.js + NestJS + Prisma",
        "Architecture & risques",
        "Livraison cloud GCP",
      ],
    },
    en: {
      summary:
        "Technical lead on a web platform with a 15-person team.",
      body: "On Kiwanda / KRHISNA I owned technical leadership: architecture, priorities, milestones, solution reviews and implementation support through on-time delivery.",
      highlights: [
        "Technical lead · 15 people",
        "Next.js + NestJS + Prisma",
        "Architecture & risks",
        "GCP cloud delivery",
      ],
    },
  },
  {
    slug: "erp-grh",
    emoji: "👥",
    cover: 3,
    title: "ERP GRH",
    status: "live",
    tags: ["Next.js", "Prisma", "PostgreSQL", "RBAC"],
    links: [],
    fr: {
      summary:
        "Application RH : employés, rôles, permissions, workflows et reporting.",
      body: "ERP GRH est une application métier de gestion des ressources humaines : employés, rôles, permissions (RBAC), workflows administratifs, reporting et modèles relationnels maintenables avec Prisma / PostgreSQL.",
      highlights: [
        "RBAC & permissions",
        "Workflows administratifs",
        "Reporting",
        "Prisma + PostgreSQL",
      ],
    },
    en: {
      summary:
        "HR platform: employees, roles, permissions, workflows and reporting.",
      body: "ERP GRH is a human-resources business app: employees, roles, permissions (RBAC), administrative workflows, reporting and maintainable relational models with Prisma / PostgreSQL.",
      highlights: [
        "RBAC & permissions",
        "Admin workflows",
        "Reporting",
        "Prisma + PostgreSQL",
      ],
    },
  },
  {
    slug: "adiong",
    emoji: "♿",
    cover: 1,
    title: "adiong",
    status: "wip",
    tags: ["Impact", "Web"],
    links: [
      { href: "https://github.com/wabthomas/adiong", labelKey: "projects.code" },
    ],
    fr: {
      summary:
        "Initiative pour l’accessibilité et l’inclusion des personnes en situation de handicap.",
      body: "adiong vise à rendre le numérique plus ouvert : présence web et outils pour l’accessibilité et l’inclusion des personnes en situation de handicap.",
      highlights: [
        "Impact social",
        "Accessibilité numérique",
        "Présence web",
      ],
    },
    en: {
      summary:
        "An initiative for accessibility and inclusion of people with disabilities.",
      body: "adiong aims to make digital more open: web presence and tools for accessibility and inclusion of people with disabilities.",
      highlights: [
        "Social impact",
        "Digital accessibility",
        "Web presence",
      ],
    },
  },
];

export function getProject(slug) {
  return PROJECTS.find((p) => p.slug === slug);
}
