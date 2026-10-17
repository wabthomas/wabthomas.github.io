/** Technology catalog with detail pages */

export const TECHNOLOGIES = {
  react: {
    slug: "react",
    name: "React",
    color: "#61DAFB",
    icon: "react",
    official: "https://react.dev",
    fr: {
      tagline: "Bibliothèque UI pour interfaces modernes et composables.",
      body: "J’utilise React au quotidien pour construire des interfaces modulaires, performantes et maintenables — du site vitrine aux tableaux de bord métier. Hooks, composition, et architecture orientée composants.",
      uses: ["Wab Infos", "Wab Market", "Kiwanda", "ERP GRH", "Portfolio"],
    },
    en: {
      tagline: "UI library for modern, composable interfaces.",
      body: "I use React daily to build modular, fast and maintainable UIs — from marketing sites to business dashboards. Hooks, composition, and component-driven architecture.",
      uses: ["Wab Infos", "Wab Market", "Kiwanda", "ERP GRH", "Portfolio"],
    },
  },
  nextjs: {
    slug: "nextjs",
    name: "Next.js",
    color: "#FFFFFF",
    icon: "nextjs",
    official: "https://nextjs.org",
    fr: {
      tagline: "Framework React full-stack : App Router, SSR et Server Actions.",
      body: "Next.js me sert pour les produits en production : App Router, Server Components, API routes et déploiement cloud. Idéal pour le SEO, la perf et la livraison bout-en-bout.",
      uses: ["Wab Infos", "Kiwanda", "ERP GRH", "BongisaOS"],
    },
    en: {
      tagline: "Full-stack React framework: App Router, SSR and Server Actions.",
      body: "I ship production products with Next.js — App Router, Server Components, API routes and cloud deploy. Great for SEO, performance and end-to-end delivery.",
      uses: ["Wab Infos", "Kiwanda", "ERP GRH", "BongisaOS"],
    },
  },
  nodejs: {
    slug: "nodejs",
    name: "Node.js",
    color: "#339933",
    icon: "nodejs",
    official: "https://nodejs.org",
    fr: {
      tagline: "Runtime JavaScript côté serveur pour APIs et services.",
      body: "Node.js alimente mes backends, scripts d’automatisation et APIs REST. Couplé à NestJS ou Express selon la complexité du produit.",
      uses: ["Wab Market", "Zua Taxi", "KivuColis", "APIs métier"],
    },
    en: {
      tagline: "Server-side JavaScript runtime for APIs and services.",
      body: "Node.js powers my backends, automation scripts and REST APIs — with NestJS or Express depending on product complexity.",
      uses: ["Wab Market", "Zua Taxi", "KivuColis", "Business APIs"],
    },
  },
  typescript: {
    slug: "typescript",
    name: "TypeScript",
    color: "#3178C6",
    icon: "typescript",
    official: "https://www.typescriptlang.org",
    fr: {
      tagline: "JavaScript typé pour des codebases plus sûres.",
      body: "TypeScript est mon standard sur front et back : moins de bugs en prod, meilleures revues de code, refactoring serein sur les gros projets.",
      uses: ["Presque tous les produits WAB"],
    },
    en: {
      tagline: "Typed JavaScript for safer codebases.",
      body: "TypeScript is my default on front and back: fewer production bugs, better reviews, confident refactors on large projects.",
      uses: ["Most WAB products"],
    },
  },
  capacitor: {
    slug: "capacitor",
    name: "Capacitor",
    color: "#119EFF",
    icon: "capacitor",
    official: "https://capacitorjs.com",
    fr: {
      tagline: "Bridge web → native pour apps Android & iOS.",
      body: "Avec Capacitor, je transforme des apps web (React) en applications mobiles natives : accès appareil, stores, et une seule base de code pour le web et le mobile.",
      uses: ["Wab Market", "Apps hybrides WAB"],
    },
    en: {
      tagline: "Web → native bridge for Android & iOS apps.",
      body: "With Capacitor I turn React web apps into native mobile apps: device access, store publishing, and one codebase for web and mobile.",
      uses: ["Wab Market", "WAB hybrid apps"],
    },
  },
  "react-native": {
    slug: "react-native",
    name: "React Native",
    color: "#61DAFB",
    icon: "react",
    official: "https://reactnative.dev",
    fr: {
      tagline: "Apps mobiles natives avec React et Expo.",
      body: "React Native / Expo pour les parcours mobile riches (auth, géoloc, notifications) quand le produit exige une expérience native poussée.",
      uses: ["Zua Taxi"],
    },
    en: {
      tagline: "Native mobile apps with React and Expo.",
      body: "React Native / Expo for rich mobile flows (auth, geolocation, notifications) when the product needs a deeper native experience.",
      uses: ["Zua Taxi"],
    },
  },
  nestjs: {
    slug: "nestjs",
    name: "NestJS",
    color: "#E0234E",
    icon: "nestjs",
    official: "https://nestjs.com",
    fr: {
      tagline: "Framework Node structuré pour APIs scalables.",
      body: "NestJS pour les backends modulaires : modules, guards, validation, OpenAPI et une architecture claire sur les plateformes plus complexes.",
      uses: ["Kiwanda", "ERP GRH"],
    },
    en: {
      tagline: "Structured Node framework for scalable APIs.",
      body: "NestJS for modular backends: modules, guards, validation, OpenAPI and clear architecture on larger platforms.",
      uses: ["Kiwanda", "ERP GRH"],
    },
  },
  postgresql: {
    slug: "postgresql",
    name: "PostgreSQL",
    color: "#4169E1",
    icon: "postgresql",
    official: "https://www.postgresql.org",
    fr: {
      tagline: "Base relationnelle robuste pour données métier.",
      body: "PostgreSQL est ma base de référence : relations, contraintes, requêtes complexes et fiabilité pour les plateformes RH, marketplace et logistique.",
      uses: ["ERP GRH", "Kiwanda", "KivuColis", "Wab Market"],
    },
    en: {
      tagline: "Robust relational database for business data.",
      body: "PostgreSQL is my default DB: relations, constraints, complex queries and reliability for HR, marketplace and logistics platforms.",
      uses: ["ERP GRH", "Kiwanda", "KivuColis", "Wab Market"],
    },
  },
  prisma: {
    slug: "prisma",
    name: "Prisma",
    color: "#2D3748",
    icon: "prisma",
    official: "https://www.prisma.io",
    fr: {
      tagline: "ORM TypeScript pour PostgreSQL et migrations.",
      body: "Prisma accélère la modélisation, les migrations et l’accès typé aux données — moins de SQL boilerplate, plus de focus produit.",
      uses: ["ERP GRH", "Kiwanda", "Produits Next.js"],
    },
    en: {
      tagline: "TypeScript ORM for PostgreSQL and migrations.",
      body: "Prisma speeds modeling, migrations and typed data access — less SQL boilerplate, more product focus.",
      uses: ["ERP GRH", "Kiwanda", "Next.js products"],
    },
  },
  docker: {
    slug: "docker",
    name: "Docker",
    color: "#2496ED",
    icon: "docker",
    official: "https://www.docker.com",
    fr: {
      tagline: "Conteneurisation pour déploiements reproductibles.",
      body: "Docker pour isoler les services, standardiser les environnements et déployer de façon prévisible (local → staging → prod).",
      uses: ["CI/CD WAB", "APIs cloud"],
    },
    en: {
      tagline: "Containerization for reproducible deploys.",
      body: "Docker to isolate services, standardize environments and deploy predictably (local → staging → prod).",
      uses: ["WAB CI/CD", "Cloud APIs"],
    },
  },
  "tailwind-css": {
    slug: "tailwind-css",
    name: "Tailwind CSS",
    color: "#06B6D4",
    icon: "tailwind",
    official: "https://tailwindcss.com",
    fr: {
      tagline: "Utility-first CSS pour UI rapides et cohérentes.",
      body: "Tailwind me permet de prototyper et peaufiner des interfaces rapidement tout en gardant un design system cohérent.",
      uses: ["Wab Infos", "Kiwanda", "Dashboards"],
    },
    en: {
      tagline: "Utility-first CSS for fast, consistent UIs.",
      body: "Tailwind lets me prototype and polish interfaces quickly while keeping a coherent design system.",
      uses: ["Wab Infos", "Kiwanda", "Dashboards"],
    },
  },
  firebase: {
    slug: "firebase",
    name: "Firebase",
    color: "#FFCA28",
    icon: "firebase",
    official: "https://firebase.google.com",
    fr: {
      tagline: "Auth, push et backend managé Google.",
      body: "Firebase pour l’auth mobile, les notifications push et certains backends temps réel — surtout sur les apps Capacitor / React Native.",
      uses: ["Wab Market", "Zua Taxi"],
    },
    en: {
      tagline: "Auth, push and managed Google backend.",
      body: "Firebase for mobile auth, push notifications and some realtime backends — especially on Capacitor / React Native apps.",
      uses: ["Wab Market", "Zua Taxi"],
    },
  },
};

export const TECH_STACK = Object.keys(TECHNOLOGIES).map((k) => TECHNOLOGIES[k].name);

export function techSlugFromName(name) {
  const entry = Object.values(TECHNOLOGIES).find(
    (t) => t.name.toLowerCase() === name.toLowerCase()
  );
  return entry?.slug ?? name.toLowerCase().replace(/\s+/g, "-").replace(/\./g, "");
}

export function getTech(slug) {
  return TECHNOLOGIES[slug] || Object.values(TECHNOLOGIES).find((t) => t.slug === slug);
}
