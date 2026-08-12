export type ProjectCategory = "internship" | "freelance" | "personal";

export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  category: ProjectCategory;
  image?: string; // path in /public/projects, e.g. "/projects/chatapp.png". Falls back to a gradient placeholder if missing.
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  // Case-study page content (app/projects/[id]/page.tsx). All optional —
  // pages render gracefully with "TODO" placeholders if you haven't filled these in yet.
  problem?: string;
  approach?: string;
  result?: string;
}

export const projectCategoryLabels: Record<ProjectCategory | "all", string> = {
  all: "All",
  internship: "Internship",
  freelance: "Freelance",
  personal: "Personal",
};

export const projects: Project[] = [
  // --- Fill these two in with real details, tech, and links ---
  {
    id: "chatapp",
    title: "ChatApp",
    image: "/projects/chatapp.png",
    description:
      "Built during the ITI track. TODO: add description, tech stack, and links.",
    tech: [],
    category: "internship",
    featured: true,
  },
  {
    id: "property-pulse",
    title: "PropertyPulse",
    image: "/projects/property-pulse.png",
    description:
      "Freelance real estate web app. TODO: add description, tech stack, and links.",
    tech: [],
    category: "freelance",
    featured: true,
  },
  // --- From CV ---
  {
    id: "fedis-recipe-app",
    title: "Recipe App",
    image: "/projects/fedis-recipe-app.png",
    description:
      "Recipe web app with filtering, search, and favorites, built during the FEDIS internship.",
    tech: ["Next.js", "TypeScript"],
    category: "internship",
    featured: true,
  },
  {
    id: "clothing-ecommerce",
    title: "Clothing E-Commerce",
    image: "/projects/clothing-ecommerce.png",
    description:
      "Freelance startup project. Configured as a PWA with Google Analytics for user behavior tracking. Live with product showcase; payments and domain setup planned.",
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Flowbite React",
      "Sanity CMS",
    ],
    category: "freelance",
    featured: true,
  },
  {
    id: "joumrik-cafe",
    title: "Digital Menu — JOUMRIK Cafe",
    image: "/projects/joumrik-cafe.png",
    description:
      "Digital menu with real-time content management for menu items, categories, and prices via Sanity CMS. Customized and extended an AI-assisted base into a production-ready app.",
    tech: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Flowbite React",
      "Sanity CMS",
    ],
    category: "freelance",
    featured: true,
  },
  {
    id: "fedis-ecommerce",
    title: "E-Commerce App",
    image: "/projects/fedis-ecommerce.png",
    description: "Built during the FEDIS internship.",
    tech: ["React", "TypeScript", "Zustand", "Axios", "Tailwind CSS"],
    category: "internship",
  },
  {
    id: "fedis-todolist",
    title: "To-Do List App",
    image: "/projects/fedis-todolist.png",
    description: "Built during the FEDIS internship.",
    tech: ["React", "TypeScript", "Zustand", "Axios", "Tailwind CSS"],
    category: "internship",
  },
  {
    id: "quotes-app",
    title: "Quotes Mobile App",
    image: "/projects/quotes-app.png",
    description:
      "Displays inspirational quotes with a clean UI, integrated with an API.",
    tech: ["Flutter"],
    category: "personal",
  },
  {
    id: "todolist-zustand",
    title: "To-Do List — Zustand + MUI",
    image: "/projects/todolist-zustand.png",
    description:
      "To-do list app with state management and Material UI components.",
    tech: ["React", "Zustand", "Material UI"],
    category: "personal",
  },
  {
    id: "social-media",
    title: "Social Media App",
    image: "/projects/social-media.png",
    description:
      "Registration, login, add/edit/delete and comment on posts, and profile pages.",
    tech: ["JavaScript", "Axios"],
    category: "personal",
  },
  {
    id: "todolist-filter",
    title: "To-Do List with Filtering",
    image: "/projects/todolist-filter.png",
    description: "Vanilla JS to-do list with task filtering.",
    tech: ["JavaScript"],
    category: "personal",
  },
  {
    id: "landing-pages",
    title: "Responsive Landing Pages",
    image: "/projects/landing-pages.png",
    description:
      "A set of responsive landing pages: interior design (Bootstrap), restaurant and travel company (pure CSS).",
    tech: ["Bootstrap", "CSS"],
    category: "personal",
  },
  {
    id: "roll-dice",
    title: "Roll Dice Game",
    image: "/projects/roll-dice.png",
    description: "A simple dice-rolling game.",
    tech: ["JavaScript"],
    category: "personal",
  },
  {
    id: "azkar",
    title: "Azkar Website",
    image: "/projects/azkar.png",
    description: "Prayer times via API, with a dhikr counter.",
    tech: ["JavaScript", "API"],
    category: "personal",
  },
];
