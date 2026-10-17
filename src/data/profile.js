/** Profile & CV-derived content for Thomas Zawadi */

export const CONTACT = {
  email: "thomaszawadi@gmail.com",
  phone: "+243 991 850 610",
  location: "Goma, RDC",
  github: "https://github.com/wabthomas",
  linkedin: "https://linkedin.com/in/wabthomas",
  twitter: "https://x.com/thomaszawadi1",
  facebook: "https://facebook.com/thomaszawadi1",
  blog: "https://wab-infos.com",
};

export { TECH_STACK } from "./tech";

export const HERO_CHIPS = [
  { icon: "react", title: "React · Node", subKey: "hero.chip1" },
  { icon: "mobile", title: "Capacitor · Expo", subKey: "hero.chip2" },
  { icon: "cloud", title: "Next.js · Prisma", subKey: "hero.chip3" },
];

export const STATS = [
  { value: 10, suffix: "+", key: "stats.years" },
  { value: 8, suffix: "+", key: "stats.products" },
  { value: 15, suffix: "", key: "stats.team" },
  { value: 4, suffix: "", key: "stats.langs" },
];

export const SKILL_GROUPS = [
  {
    icon: "code",
    titleKey: "skills.g1t",
    descKey: "skills.g1d",
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS", "App Router"],
  },
  {
    icon: "server",
    titleKey: "skills.g2t",
    descKey: "skills.g2d",
    tags: ["Node.js", "NestJS", "REST APIs", "Prisma", "PostgreSQL"],
  },
  {
    icon: "mobile",
    titleKey: "skills.g3t",
    descKey: "skills.g3d",
    tags: ["Capacitor", "React Native", "Expo", "Firebase"],
  },
  {
    icon: "cloud",
    titleKey: "skills.g4t",
    descKey: "skills.g4d",
    tags: ["Docker", "CI/CD", "GitHub Actions", "GCP", "Nginx"],
  },
  {
    icon: "pen",
    titleKey: "skills.g5t",
    descKey: "skills.g5d",
    tags: ["SEO", "Storytelling", "Wab-infos TV", "Éditorial"],
  },
  {
    icon: "users",
    titleKey: "skills.g6t",
    descKey: "skills.g6d",
    tags: ["Architecture", "Code review", "Product", "Remote"],
  },
];

export const EXPERIENCE = [
  {
    roleKey: "exp.e1.role",
    org: "WAB — World Access to Business",
    periodKey: "exp.e1.period",
    placeKey: "exp.e1.place",
    bulletsKey: ["exp.e1.b1", "exp.e1.b2", "exp.e1.b3", "exp.e1.b4"],
    tags: ["React", "Node.js", "Next.js", "Capacitor", "PostgreSQL"],
  },
  {
    roleKey: "exp.e2.role",
    org: "Wab-infos / Wab-infos TV",
    periodKey: "exp.e2.period",
    placeKey: "exp.e2.place",
    bulletsKey: ["exp.e2.b1", "exp.e2.b2", "exp.e2.b3"],
    tags: ["Next.js", "CMS", "Contenu", "YouTube"],
  },
  {
    roleKey: "exp.e3.role",
    org: "Naledi Services",
    periodKey: "exp.e3.period",
    placeKey: "exp.e3.place",
    bulletsKey: ["exp.e3.b1", "exp.e3.b2", "exp.e3.b3"],
    tags: ["WordPress", "PHP", "REST", "SEO"],
  },
  {
    roleKey: "exp.e4.role",
    org: "Kivu Business",
    periodKey: "exp.e4.period",
    placeKey: "exp.e4.place",
    bulletsKey: ["exp.e4.b1", "exp.e4.b2"],
    tags: ["APIs", "PostgreSQL", "Consulting"],
  },
];

export const PROJECTS = [
  {
    emoji: "📰",
    cover: 1,
    title: "Wab Infos",
    status: "live",
    descKey: "projects.p1d",
    tags: ["Next.js", "React", "TypeScript", "CMS"],
    links: [
      { href: "https://wab-infos.com", labelKey: "projects.visit" },
      { href: "https://github.com/wabthomas", labelKey: "projects.code", muted: true },
    ],
  },
  {
    emoji: "🛒",
    cover: 2,
    title: "Wab Market",
    status: "live",
    descKey: "projects.pMarket",
    tags: ["React", "Node.js", "Capacitor", "Firebase"],
    links: [
      { href: "https://wabmarket.app", labelKey: "projects.visit" },
    ],
  },
  {
    emoji: "📦",
    cover: 3,
    title: "KivuColis",
    status: "live",
    descKey: "projects.pColis",
    tags: ["React", "Node.js", "PostgreSQL", "Logistique"],
    links: [
      { href: "https://colis.wabmarket.com", labelKey: "projects.visit" },
    ],
  },
  {
    emoji: "🚕",
    cover: 1,
    title: "Zua Taxi",
    status: "wip",
    descKey: "projects.pTaxi",
    tags: ["React Native", "Expo", "Node.js", "GCP"],
    links: [],
  },
  {
    emoji: "🏢",
    cover: 2,
    title: "Kiwanda / KRHISNA",
    status: "live",
    descKey: "projects.pKiwanda",
    tags: ["Next.js", "NestJS", "Prisma", "GCP"],
    links: [],
  },
  {
    emoji: "👥",
    cover: 3,
    title: "ERP GRH",
    status: "live",
    descKey: "projects.pGrh",
    tags: ["Next.js", "Prisma", "PostgreSQL", "RBAC"],
    links: [],
  },
  {
    emoji: "♿",
    cover: 1,
    title: "adiong",
    status: "wip",
    descKey: "projects.p2d",
    tags: ["Impact", "Web"],
    links: [
      { href: "https://github.com/wabthomas/adiong", labelKey: "projects.code" },
    ],
  },
];

export const EDUCATION = [
  {
    titleKey: "edu.e1t",
    school: "ISIG Goma",
    period: "2019 — 2021",
  },
  {
    titleKey: "edu.e2t",
    school: "Institut du Lac",
    period: "2014",
  },
];
