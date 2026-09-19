export type HeroProject = {
  id: string;
  title: string;
  category?: string;
  image: string;
  href?: string;
};

/**
 * Default sample projects for the Hero Section bottom carousel.
 * Replace these items with your real project titles, categories, and screenshot paths.
 */
export const heroProjects: HeroProject[] = [
  {
    id: "solar-app",
    title: "Earn From Solar",
    category: "Clean Tech & SaaS",
    image: "/projects-strip.png",
    href: "#work",
  },
  {
    id: "landlord-app",
    title: "Smart App For Landlords",
    category: "Mobile App & UX",
    image: "/projects-strip.png",
    href: "#work",
  },
  {
    id: "arts-branding",
    title: "London College of Contemporary Arts",
    category: "Branding & Campaign",
    image: "/projects-strip.png",
    href: "#work",
  },
  {
    id: "the-pitch",
    title: "The Pitch",
    category: "Pitch Deck & Presentation",
    image: "/projects-strip.png",
    href: "#work",
  },
  {
    id: "lead-punks",
    title: "Lead Punks",
    category: "Brand & Web Design",
    image: "/projects-strip.png",
    href: "#work",
  },
  {
    id: "solar-energy",
    title: "Clean Energy App",
    category: "Product Design",
    image: "/projects-strip.png",
    href: "#work",
  },
];
