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
  {
    id: "property-pulse",
    title: "PropertyPulse — AI-Powered Real Estate Investment Advisor",
    image: "/projects/property-pulse.png",
    description:
      "ITI graduation project (Team 3). Aggregates property listings, rental market data, economic indicators, neighborhood insights, and local regulations into one AI-powered dashboard, generating investment reports — ROI projections, rental yield, market trends, and risk assessment — in minutes.",
    tech: [
      "React",
      "Vite",
      "TypeScript",
      "Supabase",
      "Gemini 2.5 Pro",
      "zustand",
      "tailwindcss",
    ],
    category: "internship",
    featured: true,
    problem:
      "Evaluating a property as an investment means pulling together listings, rental yields, neighborhood data, economic indicators, and local regulations from scattered sources — slow, fragmented, and easy to get wrong.",
    approach:
      "Built as a team of 5 engineers during the ITI Front-End & Cross-Platform Mobile track, in a monorepo with a React + Vite web client , following an MVVM architecture (Model = data access, ViewModel = framework-agnostic state/logic as hooks, View = pure presentation). The AI layer is a trinity: an LLM (Gemini 2.5 Pro) for investment reasoning, report generation, and Q&A; RAG (embeddings + pgvector on Supabase) to retrieve listings, rental stats, and regulatory data; and orchestrated agents that gather data, run financial calculations, generate reports, and monitor saved properties. Claude AI was used throughout implementation to help scaffold the architecture and accelerate building the AI integration layer. The app also ships with a full mock mode so the entire UI runs on seeded data without any live API keys.",
    result:
      "A working bilingual (English/Arabic, full RTL) dashboard covering property search, AI-driven investment analysis, an admin role, and dark/light mode — demoable end-to-end without exposing any credentials, thanks to the mock-mode design.",
  },
  {
    id: "chatapp",
    title: "ChatApp",
    image: "/projects/chat-app.png",
    description:
      "Built during the ITI track. Real-time chat app built with React & Firebase. Features Google auth, live messaging, online/offline status, and a responsive mobile-first UI.",
    tech: ["react", "vite", "Firebase Auth", "Firestore", "Responsive CSS"],
    category: "internship",
    featured: true,
    liveUrl: "https://chat-app-iota-lake-57.vercel.app/",
    githubUrl: "https://github.com/emanatiya87/chat-app/tree/main",
    problem:
      "Building a real-time messaging app typically requires managing WebSocket servers, handling live presence tracking, and synchronizing state across clients—often resulting in high latency, infrastructure costs, and complex deployment pipelines.",

    approach:
      "Architected a serverless chat app using React + Vite and Firebase. Implemented secure Google Authentication, leveraged Firestore's `onSnapshot` for instant bi-directional message sync, and designed deterministic conversation IDs (`[uidA, uidB].sort().join('_')`) to prevent duplicate threads. Solved real-time presence without native disconnect support using a 30s heartbeat + `visibilitychange` API. Ensured chronological accuracy with `serverTimestamp()`, optimized responsive UI with CSS media queries, and configured production-grade Firestore security rules & composite indexes.",

    result:
      "Delivered a fully responsive, production-ready chat application with sub-second message delivery, live online/offline status, and automatic cross-device synchronization. Successfully deployed to Vercel with secure environment-driven configuration, zero polling overhead, and scalable architecture ready for concurrent users.",
  },
  {
    id: "fitcheck",
    title: "Fit Check e-commerce",
    image: "/projects/fitcheck.png",
    description:
      "Fit Check is a specialized E-commerce Progressive Web App (PWA) built for a modern fashion brand. Designed with a mobile-first mindset, it transforms the social media shopping experience into an intuitive, high-speed web application. Featuring SSR/ISR capabilities powered by Next.js, headless content management via Sanity.io, and flow-optimized Tailwind CSS components, the platform enables users to explore seasonal collections—from casual and homewear to classic lines—and complete purchases in 'Just a Click'.",
    tech: [
      "Next",
      "TypeScript",
      "Sanity.io",
      "Tailwind CSS",
      "PWA",
      "Google Analytics",
    ],
    category: "freelance",
    featured: true,
    liveUrl: "https://fit-check-just-click.vercel.app/",
    githubUrl: "https://github.com/emanatiya87/fit-check",
    problem:
      "Local boutique fashion brands relying solely on social media channels faced friction in managing orders, showcasing complete product catalogs, and establishing buyer trust. The client needed a centralized, fast, and transparent web solution to display high-fidelity product details (real-life colors, accurate sizing, and fabric specs) while offering a seamless checkout flow to increase conversion rates.",
    approach:
      "Engineered and deployed a mobile-first, high-performance Progressive Web App (PWA) using Next.js (App Router) and Tailwind CSS, decoupled with Sanity.io as a Headless CMS. Key decisions included: PWA Integration: Configured service workers and caching to deliver a native app-like experience for 90%+ mobile traffic with instant load times on 3G/4G networks. Headless Architecture: Integrated Sanity.io so the client can manage inventory, categories, and real-time pricing without requiring code redeployments. Visual & UX Transparency: Optimized image handling using Next/Image for automatic WebP conversion and zero cumulative layout shifts (CLS), presenting raw, filter-free fabric visuals. Custom Features: Built dynamic category filtering, pagination, and Google Analytics conversion tracking.",
    result:
      "Successfully launched a scalable e-commerce platform that bridged social traffic to direct web conversions. The PWA achieved 90+ Lighthouse performance scores, significantly streamlined order management for the client, and established immediate trust through clear pricing, exact sizing guides, and 24/7 customer support accessibility.",
  },
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
    liveUrl: "https://joumrik-menu.vercel.app/",
    githubUrl: "https://github.com/emanatiya87/joumrik-menu/tree/main",
    problem:
      "Every price change or new menu item meant reprinting physical menus, creating recurring costs and making menu updates inconvenient for the café owner.",
    approach:
      "Developed a QR-based digital menu powered by a CMS, giving the owner full control over products, prices, categories, and content without requiring code changes or reprinting.",
    result:
      "Created a more flexible and cost-effective menu solution that reduces long-term printing expenses and ensures customers always see the latest menu.",
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
