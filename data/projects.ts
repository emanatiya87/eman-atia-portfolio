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
    id: "home-real-estate",
    title: "Home New Cairo — Real Estate Platform",
    description:
      "A bilingual (English/Arabic) real estate platform with public property browsing, search and filtering, seller submission workflow with admin approval, and a full admin dashboard for managing properties, users, submissions, and customer inquiries. Built as a team project — I led the frontend while a backend developer built the FastAPI service, based on a shared Figma design.",
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "next-intl",
      "React Hook Form",
      "Zod",
      "Zustand",
      "FastAPI",
    ],
    category: "freelance",
    image: "/projects/home.png",
    featured: true,
    githubUrl: "https://github.com/Lucifer3224/Home",
    problem:
      "Real estate agencies need a way to list properties, let sellers submit listings for review, and let potential buyers browse, search, and reach out — all in both English and Arabic, with a proper admin workflow instead of manual spreadsheet management.",
    approach:
      "Worked as part of a two-person team: I owned the frontend, while a backend developer built and iterated on the FastAPI service in parallel — the API surface evolved throughout the build (e.g. seller relationship model changed mid-project), which meant keeping the frontend's types and forms in sync as the backend's schema changed. UI was implemented from a shared Figma design (https://www.figma.com/design/EhWCf1JRDViDsHxOZ2pxZM/Home-New-Cairo?node-id=139-1539). On the frontend: Next.js App Router with Server Actions handling all writes (auth-gated via httpOnly JWT cookies), a service layer wrapping every backend endpoint, and a single shared fetch client with timeout + retry. Forms use React Hook Form + Zod validated against the backend's actual schema constraints. Full URL-based i18n (English/Arabic with RTL) via next-intl. The admin dashboard supports full CRUD on properties, an approve/reject workflow for seller-submitted listings, image uploads, and dedicated views for customer and seller leads.",
    result:
      "TODO — project is still in progress; not yet deployed. Update once live: deployment link, and outcomes if measurable.",
  },
  {
    id: "silviano-accessories",
    title: "Silviano — Wedding & Party Accessories Store",
    image: "/projects/silviano-accessories.png",
    description:
      "Freelance e-commerce storefront for Silviano, a wedding and party accessories brand (crowns, headpieces, earrings, custom name-personalized tiaras). Arabic-first, mobile-optimized, and deployed on Hostinger.",
    tech: ["Hostinger AI Website Builder", "No-Code", "Arabic Localization"],
    category: "freelance",
    liveUrl: "https://silvianoacc.com/",
    problem:
      "The client needed a professional, mobile-first storefront to showcase wedding and party accessories and handle custom-order requests — like name-personalized tiaras — without the cost and maintenance overhead of a custom-coded stack.",
    approach:
      "Built and launched the site on Hostinger's AI website builder, structuring product categories (crowns, headpieces, sets, soft jewelry, earrings), an Arabic-first layout, and a direct WhatsApp deep-link for custom-order inquiries instead of a full cart/checkout flow. Integrated social channels (Instagram, TikTok, Snapchat, Facebook) and standard policy pages (returns, privacy, jewelry care).",
    result:
      "A live storefront at silvianoacc.com giving the client full self-serve control over products and content through the builder's dashboard, with a low-friction WhatsApp path from browsing straight to custom orders — no backend or ongoing dev maintenance required.",
  },
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
    githubUrl: "https://github.com/Amr-Khaled233/PropertyPulse-Web",
    liveUrl: "https://property-pulse-web-server.vercel.app/",
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
    id: "lms",
    title: "LMS — Learning Management System",
    image: "/projects/lms.png",
    tech: [
      "React 18 • Redux Toolkit • React Router v6",
      "Tailwind CSS • Material-UI (MUI)",
      "Firebase Auth • Firestore • Cloud Storage",
      "Stripe Checkout • Webhooks Ready",
      "Role-Based Access Control (RBAC)",
      "Responsive Mobile-First Design",
    ],
    category: "internship",
    featured: true,
    githubUrl: "https://github.com/emanatiya87/Lms",
    description:
      "A full-featured Learning Management System with Google Auth, Stripe payments, and dynamic role-based interfaces for tutors and students.",

    problem:
      "Educational platforms often lack flexible role management, secure payment integration, and a unified experience for both content creators (tutors) and learners (students). Existing solutions are either too complex, expensive, or not customizable for independent educators.",

    approach:
      "Built a responsive React application with Tailwind CSS and Material-UI for a polished UI. Implemented Firebase for authentication (Google Sign-In), Firestore for real-time data, and Cloud Storage for course assets. Integrated Stripe Checkout for secure course purchases. Designed a role-based architecture where user role ('tutor' | 'student') stored in Firestore dynamically controls dashboard views, navigation, and available actions. Used Redux Toolkit for predictable state management across course CRUD, enrollment, and payment flows.",

    result:
      "Delivered a scalable LMS where tutors can create, manage, and monetize courses while students seamlessly discover, purchase, and track learning progress. Achieved 100% client-side security with protected routes, reduced boilerplate by 40% using Redux Toolkit slices, and ensured responsive UX across devices. The modular architecture allows easy extension for features like certificates, quizzes, or live sessions.",
  },
  {
    id: "recipes-app",
    title: "Recipe App",
    image: "/projects/recipe-app.jpg",
    description:
      "A modern React Native recipe app with search, favorites, persistent storage (AsyncStorage), and clean navigation. Built with DummyJSON API.",
    tech: ["React Native", "TypeScript", "AsyncStorage", "React Navigation"],
    category: "internship",
    featured: true,
    problem:
      "Users struggle to discover, organize, and reliably save recipes across fragmented platforms. Technically, developers face challenges building mobile apps that seamlessly handle API data, persistent local storage, real-time search, and smooth navigation without compromising performance or user experience.",
    approach:
      "Built a React Native application using React Context API for centralized state management and @react-native-async-storage/async-storage for persistent favorites. Integrated the DummyJSON API to fetch 100+ recipes, implemented FlatList with optimized rendering, and added debounced real-time search filtering across name, cuisine, and ingredients. Architected modular navigation with React Native Stack, handled loading/error/empty states, and ensured cross-device compatibility using react-native-safe-area-context.",
    result:
      "Delivered a fully functional, production-ready mobile app with instant search, zero-loss persistent favorites (survives app restarts), and a responsive modern UI. The codebase follows scalable architecture patterns, handles network failures gracefully, and demonstrates strong proficiency in React Native, state management, API integration, and mobile UX best practices.",
  },
  {
    id: "Egypt-travel",
    title: "EgyptTravel — Travel Guide App",
    image: "/projects/egyptTravel.png",
    githubUrl: "https://github.com/emanatiya87/egyptTravel",
    description:
      "A modern, responsive web application for discovering and managing travel destinations across Egypt. Built with a focus on performance, developer experience, and scalability, the app features a dynamic landing page, interactive destination cards, and full CRUD functionality powered by a lightweight mock backend.",
    tech: ["Next.js", "Tailwind CSS", "Json Server"],
    category: "internship",
    featured: true,
    problem:
      "Travel and tourism platforms often require heavy backend infrastructure to manage dynamic content, which leads to: - Slow initial page loads and poor SEO due to pure client-side rendering - Complex CRUD workflows that slow down prototyping and testing - Local development friction (port conflicts, CORS issues, hardcoded URLs) - Difficulty balancing fast static performance with real-time data updates",
    approach:
      "Hybrid Component Architecture:** Split server-side data fetching from client-side interactivity using Next.js App Router. Server components handle ISR caching, while client components manage user interactions (edit/delete). - **Incremental Static Regeneration (ISR):** Implemented `revalidate: 60` to cache destination data for 60 seconds, delivering near-instant initial loads while automatically refreshing content in the background. - **Lightweight Mock Backend:** Integrated JSON Server as a zero-config REST API to enable rapid CRUD development without database setup overhead. - **Environment & Port Standardization:** Centralized API configuration using `.env.local` and explicitly separated frontend (`:3000`) and backend (`:3002`) ports to eliminate `EADDRINUSE` conflicts and CORS issues. - **Modular Component Design:** Built reusable, self-contained components (`PlaceCard`, `DestinationsClient`) with isolated state, proper prop drilling, and error boundaries for maintainability. - **Developer Experience Optimization:** Streamlined local setup with `concurrently` for parallel server execution and added robust network error handling with retry fallbacks. ",
    result:
      "🚀 High Performance: Achieved sub-second initial page loads through ISR and server-side prefetching. - 🔄 Seamless CRUD Operations: Full create, read, update, and delete workflows with optimistic UI updates and graceful error handling. - 🌐 SEO & DX Optimized: Static pre-rendering improves search visibility, while environment-driven configuration ensures zero hardcoding and effortless backend migration. - 📱 Production-Ready Architecture: Clean component structure, responsive Tailwind UI, and isolated client/server logic make the app highly scalable and deployment-ready. - 💼 Portfolio-Ready: Demonstrates modern Next.js patterns, effective state/data management, local environment debugging, and performance optimization techniques. ",
  },
  {
    id: "recipes",
    title: "Recipe Website",
    image: "/projects/recipe-website.png",
    description:
      "Recipe web app with filtering, search, and favorites, built during the FEDIS internship.",
    tech: ["Next.js", "TypeScript"],
    category: "internship",
    featured: true,
    liveUrl: "https://recipes-two-jade.vercel.app/",
    githubUrl: "https://github.com/emanatiya87/recipes",
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
    id: "movie-app",
    title: "Movie App",
    image: "/projects/movie-app.png",
    description:
      "A full-stack-feeling movie browsing application built with React, Redux Toolkit, and Material UI. Users can browse a movie catalog, search by title, add/edit/delete entries, save favourites, and create an account to log in — all deployed as a fully static frontend with no traditional backend server.",
    tech: [
      "React",
      "vite",
      "javascript",
      "bootstrap",
      "MUI",
      "Supabase",
      "React router dom",
    ],
    category: "personal",
    featured: true,
    liveUrl: "https://movie-app-sigma-roan-91.vercel.app/",
    githubUrl: "https://github.com/emanatiya87/movie-app",
    problem:
      "The project started with json-server as a local mock REST API during development. That approach broke the moment it came time to deploy: static hosting platforms like Vercel and Netlify can't run a persistent Node process, so the backend simply disappeared in production. On top of that, the app needed real user authentication — but storing plaintext passwords in a mock JSON file was never a viable option, even for a demo.",
    approach:
      "Replaced json-server with JSONBin.io, a hosted JSON store, and re-architected all data writes around its constraints — since JSONBin has no per-item routes, every add/edit/delete operation fetches the current dataset, modifies it in memory, and pushes the full dataset back. Consolidated state management into a single Redux Toolkit store (movies + auth), removing a redundant Context provider that risked falling out of sync with Redux. Integrated Supabase Auth for real password hashing and session handling, syncing Supabase's token-based session with Redux state so the UI (navbar avatar, protected actions) reacts instantly to login/logout.",
    result:
      "A fully deployable, static-hosted movie app with working search, full CRUD, persistent favourites, and real authentication — no backend server required. The project doubles as a practical case study in working around the limitations of backend-less architectures, and in keeping client state (Redux) correctly synchronized with an external source of truth (Supabase's session token).",
  },
  {
    id: "fedis-ecommerce",
    title: "E-Commerce App",
    image: "/projects/fedis-ecommerce.png",
    description:
      "this is a modern e-commerce application built with React, TypeScript, Zustand, Axios, Tailwind CSS, flowbite React, and React Router DOM. It features product listings, shopping cart functionality, and a seamless user experience.",
    tech: [
      "React",
      "TypeScript",
      "Zustand",
      "Axios",
      "Tailwind CSS",
      "flowbite React",
      "React router dom",
    ],
    featured: true,
    githubUrl: "https://github.com/emanatiya87/products.git",
    liveUrl: "https://products-orpin-three.vercel.app/",
    category: "internship",
    problem:
      "The project was built during the FEDIS internship, where the goal was to create a modern e-commerce application that could handle product listings and shopping cart functionality. The challenge was to implement these features in a way that was both scalable and maintainable using state management, while also providing a seamless user experience.",
    approach:
      "Implemented a modern e-commerce application using React and TypeScript, with Zustand for state management to handle product listings and shopping cart functionality. Used Axios for API requests to fetch product data and Tailwind CSS for responsive styling. Integrated flowbite React components for UI elements and React Router DOM for navigation between pages. Focused on creating a scalable architecture that allows for easy addition of new features in the future.",
    result:
      "Delivered a fully functional e-commerce application with a clean and responsive UI, allowing users to browse products, add items to their shopping cart, and manage their selections seamlessly. The use of Zustand for state management ensured efficient updates to the UI without unnecessary re-renders, resulting in a smooth user experience. The project serves as a solid foundation for further enhancements and feature additions.",
  },
  {
    id: "todolist",
    title: "To-Do List App",
    image: "/projects/todolist.png",
    description:
      "A modern To-Do List app built with React, TypeScript, Zustand, and TailwindCSS — fast, scalable, and deployed on Vercel.",
    tech: [
      "React",
      "TypeScript",
      "Zustand",
      "Axios",
      "Tailwind CSS",
      "React router dom",
    ],
    category: "internship",
    featured: true,
    liveUrl: "https://todo-list-ts-sandy.vercel.app/",
    githubUrl: "https://github.com/emanatiya87/todoList-ts",
    problem:
      "Most to-do list tutorials stop at basic CRUD with useState, which doesn't hold up once state needs to be shared across components or scale into a real app. The goal was to build a task manager that felt production-grade: type-safe from the ground up, fast to develop against, and using a state management pattern that avoids prop-drilling or unnecessary re-renders — while keeping the UI clean and responsive.",
    approach:
      "Zustand for state — chose Zustand over Context API or Redux for global task state (add/delete/update), since it avoids boilerplate while still giving predictable, centralized state outside the component tree. TypeScript throughout — strict typing on task models and store actions to catch bugs at compile time and make the store's shape self-documenting. Vite — used for the dev server and build pipeline, taking advantage of HMR for a fast iteration loop while wiring up the store and UI. TailwindCSS — utility-first styling for a responsive layout without custom CSS overhead. Deployment — shipped to Vercel for a live, shareable demo.",
    result:
      "A lightweight, fully typed to-do app with instant UI updates on task changes, a decoupled state layer that's easy to extend (e.g. filters, persistence, categories), and a live deployed demo at todo-list-ts-sandy.vercel.app. The project became a hands-on foundation for understanding lightweight state management (Zustand) as an alternative to Redux/Context.",
  },
  {
    id: "social-media",
    title: "Social Media App",
    image: "/projects/socialmedia.png",
    description:
      "A Facebook-style social media platform built with pure JavaScript, using Axios to consume a REST API. Supports full post and comment CRUD, individual user profiles, paginated feeds, and a complete authentication flow with login, registration, and logout.",
    problem:
      "Static or single-page demo projects rarely test the parts of front-end development that matter most in real apps: managing auth state without a framework, keeping UI in sync with server data after edits, and handling large, growing datasets like a post feed efficiently. The goal was to build a genuinely interactive social platform — not just a UI mockup — using only vanilla JavaScript and direct API calls, to prove out these fundamentals before relying on framework abstractions.",
    approach:
      "Structured the app around Axios for all API communication (fetching, creating, updating, and deleting posts and comments), with the DOM updated manually after each request to reflect the latest state. Built dedicated profile pages per user, driven by dynamic routing/query params, and implemented pagination on the post feed to avoid loading the entire dataset at once. Authentication (login, registration, logout) was handled with token-based session persistence, gating access to protected actions like posting and commenting. Kept logic modular across separate JS files per feature (auth, posts, comments, profile) despite no framework, to keep the codebase maintainable as features grew.",
    result:
      "A fully functional social media app with live CRUD on posts and comments, per-user profiles, paginated browsing, and a working auth flow — all without a front-end framework. The project reinforced core JavaScript and API-integration skills (async/await, Axios interceptors, DOM state management) that carried directly into later framework-based projects using React and Zustand.",
    tech: ["Pure JavaScript", "Axios"],
    category: "personal",
    featured: true,
    githubUrl: "https://github.com/emanatiya87/social-media-js",
    liveUrl: "https://social-media-js-sigma.vercel.app/",
  },
  {
    id: "landing-pages",
    title: "Responsive Landing Pages",
    image: "/projects/jadoo.png",
    description:
      "A set of responsive landing pages: interior design (Bootstrap), restaurant and travel company (pure CSS).",
    tech: ["Bootstrap", "CSS"],
    category: "personal",
    liveUrl: "https://emanatiya87.github.io/jadoo-P1Webmaster-/",
    githubUrl: "https://github.com/emanatiya87/jadoo-P1Webmaster-",
    problem:
      "These learning projects were built to move beyond static layouts and understand how real responsive websites are structured. The challenge was creating polished landing pages from scratch while practicing layout, responsive behavior, and interactive browser experiences without relying on a front-end framework.",
    approach:
      "Designed and implemented multiple landing pages using semantic HTML, custom CSS, Bootstrap, and vanilla JavaScript. Built the layouts from the ground up, using responsive grids, flexbox, reusable styling patterns, and media queries to support different screen sizes. Added JavaScript-driven interactions and refined the pages through hands-on iteration while learning how structure, styling, and behavior work together.",
    result:
      "Delivered a collection of responsive landing pages for interior design, restaurant, and travel concepts. These projects strengthened my fundamentals in HTML, CSS, Bootstrap, JavaScript, responsive design, and DOM-based interaction, creating a practical foundation for my later React and Next.js work.",
  },
  {
    id: "roll-dice",
    title: "Roll Dice Game",
    image: "/projects/roll-dice.png",
    featured: true,
    description:
      "The Roll Dice Game is a fun and interactive web-based game built using HTML, CSS, and JavaScript. It simulates the rolling of a six-sided dice. When the user clicks the Roll button, the dice image changes to reflect a randomly generated number between 1 and 6, providing a realistic dice-rolling experience.",
    githubUrl: "https://github.com/emanatiya87/Roll-Dice-JS-Game",
    liveUrl: "https://emanatiya87.github.io/Roll-Dice-JS-Game/",
    problem:
      "Many people enjoy simple, interactive games for entertainment, but often lack accessible, browser-based options that don't require downloads or installations.",
    approach:
      "Developed a lightweight, browser-based dice game using vanilla JavaScript, HTML, and CSS. Implemented event listeners for user interactions, random number generation for dice rolls, and dynamic DOM manipulation to update the game state and display results in real-time.",
    result:
      "A fully functional, interactive dice-rolling game that runs directly in the browser. Users can roll the dice with a click, see immediate results, and enjoy a simple gaming experience without any additional software requirements.",
    tech: ["JavaScript", "HTML", "CSS", "bootstrap"],
    category: "personal",
  },
  {
    id: "azkar",
    title: "Azkar Website",
    image: "/projects/azkar.png",
    description:
      "A real-life application of JavaScript that displays daily Islamic Azkar. This project demonstrates how I used core JS skills—like DOM manipulation and event handling—to build a useful and interactive tool for everyday use.and Prayer times via API",
    tech: ["JavaScript", "API", "bootstrap"],
    category: "personal",
    githubUrl: "https://github.com/emanatiya87/Azkar",
    liveUrl: "https://emanatiya87.github.io/Azkar/",
    problem:
      "Many Muslims struggle to consistently remember and recite daily Azkar, and often lack a centralized, user-friendly platform that provides both Azkar and accurate prayer times based on their location.",
    approach:
      "Developed a responsive web application using vanilla JavaScript, HTML, and CSS (Bootstrap) to create an interactive interface for displaying daily Azkar. Implemented an API integration to fetch real-time prayer times based on the user's selected city. Designed a built-in counter feature to help users track their recitations, and incorporated light/dark mode toggling for user comfort. Ensured the application is mobile-friendly and accessible across various devices.",
    result:
      "A user-friendly and fully responsive Islamic Azkar website that offers a rich collection of various Azkar, complete with a built-in counter for easy tracking. The platform also integrates YouTube videos and playlists to enhance the spiritual experience, and it supports both light and dark modes for user comfort. Additionally, the website dynamically displays daily prayer times based on the user's selected city using an API, and it automatically updates the Hijri (Islamic) date, ensuring accurate and up-to-date information every day.",
  },
];
