export type TimelineCategory = "education" | "work" | "teaching" | "activity";
export type TimelineStatus = "ongoing" | "active" | "completed";

export interface TimelineEntry {
  id: string;
  sortDate: string; // ISO "YYYY-MM", used for sorting only
  date: string; // display string
  title: string;
  org: string;
  logo?: string; // path in /public/logos, e.g. "/logos/ecs.png". Falls back to initials if missing.
  category: TimelineCategory;
  status?: TimelineStatus;
  description: string;
  tech?: string[];
  link?: { label: string; href: string }[];
}

// Newest first. Edit freely — this file is the single source of truth
// for the whole timeline section.
export const timeline: TimelineEntry[] = [
  {
    id: "ecs",
    sortDate: "2026-05",
    date: "May 2026 — Present",
    title: "Front-End Developer",
    org: "ECS",
    logo: "/logos/ecs.jpg",
    category: "work",
    status: "ongoing",
    description:
      "Building production React/Next.js features in a professional team environment.",
    tech: ["React", "Next.js", "TypeScript"],
  },
  {
    id: "ischool",
    sortDate: "2026-04",
    date: "Apr 2026 — May 2026",
    title: "Game Development Instructor",
    org: "iSchool",
    logo: "/logos/ischool.png",
    category: "teaching",
    status: "completed",
    description:
      "Simplified complex technical concepts for beginners and mentored students building real-world projects.",
    tech: [],
  },
  {
    id: "iti",
    sortDate: "2026-01",
    date: "Jan 2026 — Jun 2026",
    title: "Front-End & Cross-Platform Mobile Track",
    org: "ITI (Information Technology Institute)",
    logo: "/logos/iti.png",
    category: "work",
    status: "completed",
    description:
      "Intensive training in modern frontend architecture, React.js, Next.js, TypeScript and mobile-first design. Built full-featured projects using Agile/Scrum in a team setting, including a graduation project.",
    tech: ["React", "Next.js", "TypeScript", "React Native"],
  },
  {
    id: "fedis",
    sortDate: "2025-08",
    date: "Aug 2025",
    title: "Front-End Development Intern",
    org: "FEDIS",
    logo: "/logos/fedis.png",
    category: "work",
    status: "completed",
    description:
      "Collaborated with senior developers and received professional code reviews. Built a recipe app, e-commerce app, and to-do app.",
    tech: [
      "Next.js",
      "TypeScript",
      "React",
      "Zustand",
      "Axios",
      "Tailwind CSS",
    ],
  },
  {
    id: "trust-system",
    sortDate: "2025-05",
    date: "May 2025 — Aug 2025",
    title: "Front-End Scholarship — Trust System",
    org: "Trust System",
    logo: "/logos/trust-system.png",
    category: "education",
    status: "completed",
    description:
      "Learned the fundamentals of C++, OOP, Operating Systems, HTML, CSS, JavaScript and TypeScript.",
    tech: ["C++", "OOP", "HTML", "CSS", "JavaScript", "TypeScript"],
  },
  {
    id: "depi",
    sortDate: "2023-06", // TODO: confirm exact date range
    date: "TBD — confirm dates", // TODO: confirm display date
    title: "MERN Stack Track",
    org: "DEPI (Digital Egypt Pioneers Initiative, Ministry of Education)",
    logo: "/logos/depi.png",
    category: "education",
    status: "completed",
    description: "Government-run training track covering the MERN stack.", // TODO: add more detail on what was built
    tech: ["MongoDB", "Express", "React", "Node.js"],
  },
  {
    id: "apec",
    sortDate: "2024-09",
    date: "Sep 2024 — Aug 2025",
    title: "IT Head",
    org: "APEC Student Activity",
    logo: "/logos/apec.png",
    category: "activity",
    status: "completed",
    description:
      "Led a team of 9 members, managing development and maintenance of the activity's website, deployed on Hostinger.",
    tech: [],
  },
  {
    id: "link-development",
    sortDate: "2024-06",
    date: "Jun 2024 — Aug 2024",
    title: "Front-End Development Intern",
    org: "Link Development",
    logo: "/logos/link-development.png",
    category: "work",
    status: "completed",
    description:
      "Built responsive projects with HTML, CSS, JavaScript and Bootstrap under mentorship. Learned clean coding practices, DevOps (Azure) and SASS, and worked with React.js components to improve performance.",
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap", "SASS", "Azure", "React"],
  },
  {
    id: "aces",
    sortDate: "2024-02",
    date: "Feb 2024",
    title: "Content Creator & Instructor",
    org: "ACES Student Activity",
    logo: "/logos/aces.png",
    category: "teaching",
    status: "completed",
    description:
      "Conducted workshops on web development and content creation for 1st and 2nd year students.",
    tech: [],
  },
  {
    id: "asu-career-center",
    sortDate: "2024-02",
    date: "Feb 2024",
    title: "Employer Relations Volunteer",
    org: "ASU Career Center",
    logo: "/logos/asu-career-center.png",
    category: "activity",
    status: "completed",
    description: "Coordinated with HR professionals from Elsewedy Group.",
    tech: [],
  },
  {
    id: "meca",
    sortDate: "2023-06",
    date: "Jun 2023",
    title: "Participant",
    org: "MECA Academy (ExxonMobil)",
    logo: "/logos/meca.png",
    category: "activity",
    status: "completed",
    description:
      "Business case competition — developed a business plan for an electric car company in Egypt and presented it to ExxonMobil experts. Won 3rd place.",
    tech: [],
  },
  {
    id: "ain-shams",
    sortDate: "2020-09",
    date: "2020 — 2025",
    title: "B.Sc. Electrical Engineering",
    org: "Ain Shams University",
    logo: "/logos/ain-shams.png",
    category: "education",
    status: "completed",
    description: "Bachelor of Electrical Engineering.",
    tech: [],
  },
];

export const categoryLabels: Record<TimelineCategory | "all", string> = {
  all: "All",
  work: "Work",
  education: "Education",
  teaching: "Teaching",
  activity: "Activities",
};
