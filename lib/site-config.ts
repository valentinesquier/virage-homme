export const siteConfig = {
  name: "Virage Homme",
  domain: "virage-homme.com",
  tagline: "Andropause & Vitalité masculine 40-55 ans",
  description:
    "Comprendre l'andropause et retrouver sa vitalité après 40 ans. Témoignages, protocoles et ressources pour les hommes, par Antoine.",
  author: "Antoine",
  authorBio: "Antoine, 45 ans, architecte indépendant. A traversé l'andropause depuis 3 ans. Partage ce qu'il a appris, sans compléments miracles, sans gourous.",
  locale: "fr",
  social: {
    youtube: null,
  },
  stripe: {
    flagshipPriceId: process.env.NEXT_PUBLIC_STRIPE_PRICE_ID_FLAGSHIP,
  },
  brevo: {
    listId: process.env.BREVO_LIST_ID,
  },
  nav: [
    { label: "Accueil", href: "/" },
    { label: "Guide andropause", href: "/guide" },
    { label: "Blog", href: "/blog" },
    { label: "Protocole 12 Semaines", href: "/protocole-12-semaines" },
    { label: "À propos", href: "/a-propos" },
  ],
  legal: [
    { label: "Mentions légales", href: "/legal/mentions-legales" },
    { label: "Confidentialité", href: "/legal/confidentialite" },
    { label: "CGV", href: "/legal/cgv" },
  ],
};
