export interface TeamMember {
  role: string;
  lead: string;
  bio: string;
  image: string;
}

export interface AgencyMilestone {
  year: string;
  title: string;
  description: string;
}

export const teamMembers: TeamMember[] = [
  {
    role: "Brand Strategy & Positioning",
    lead: "Arthur Pendelton",
    bio: "Ex-Wieden+Kennedy creative strategist specializing in category creation.",
    image: "/Figure.png",
  },
  {
    role: "Digital Experience & UI/UX",
    lead: "Maya Lin-Torres",
    bio: "Award-winning interface architect with 10+ design systems shipped.",
    image: "/Figure-1.png",
  },
  {
    role: "Full-Stack Web Engineering",
    lead: "Daniel Kovacs",
    bio: "Next.js core contributor and headless architecture specialist.",
    image: "/Figure-2.png",
  },
  {
    role: "Motion & Short-Form Content",
    lead: "Chloe Moreau",
    bio: "3D animator and viral director behind 50M+ organic TikTok views.",
    image: "/Figure-3.png",
  },
];

export const timelineMilestones: AgencyMilestone[] = [
  {
    year: "2021",
    title: "The Friction Point",
    description:
      "Fusion Folio began with three senior practitioners frustrated by legacy agency bureaucracy and disjointed freelance hand-offs.",
  },
  {
    year: "2023",
    title: "The 360° Studio Model",
    description:
      "Expanded beyond web design into full-funnel motion reels, performance Meta ads, and unified brand design systems.",
  },
  {
    year: "2024",
    title: "Global Scale & Recognition",
    description:
      "Partnered with top-tier Y Combinator and Series B startups across Silicon Valley, London, Singapore, and Berlin.",
  },
  {
    year: "2026",
    title: "Your Dedicated Partner",
    description:
      "Now operating as a seamless subscription-style creative squad for modern businesses ready to make lasting waves.",
  },
];

/* Accessor functions */
export function getAllTeamMembers(): TeamMember[] {
  return teamMembers;
}

export function getAgencyMilestones(): AgencyMilestone[] {
  return timelineMilestones;
}
