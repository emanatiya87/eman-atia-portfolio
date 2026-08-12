# Eman Atia — Portfolio

Next.js 15 (App Router) + TypeScript + Tailwind CSS + Framer Motion.

## Setup

```bash
npm install
cp .env.local.example .env.local   # then fill in MONGODB_URI
npm run dev
```

Open http://localhost:3000

## Contact form → MongoDB (free tier)

1. Create a free cluster at https://www.mongodb.com/cloud/atlas/register (M0 tier, no cost)
2. In Atlas: Database Access → add a user; Network Access → allow your IP (or 0.0.0.0/0 for dev)
3. Get the connection string from "Connect" → "Drivers", paste it into `.env.local` as `MONGODB_URI`
4. Submissions land in the `contact_messages` collection of the `portfolio` database (both configurable via `.env.local`)

## Structure

- `data/timeline.ts` — timeline entries (single source of truth for the Journey section)
- `data/projects.ts` — projects, tagged by category (internship / freelance / personal)
- `data/skills.ts` — grouped skills for the detailed grid
- `data/techIcons.tsx` — tech logos used in the scrolling marquee
- `components/Navbar.tsx` — desktop nav + mobile slide-in sidebar
- `components/Hero.tsx` — hero with typewriter bio
- `components/Timeline/` — timeline (7-at-a-time pagination, category filters, org logos)
- `components/Projects/` — projects grid (image, GitHub/live links, category filters)
- `components/Skills/` — marquee + detailed skill groups
- `components/Contact/` — form (react-hook-form + zod) → `/api/contact` → MongoDB
- `components/LogoAvatar.tsx` — shared logo component, falls back to initials if the image is missing

## Assets you still need to add

- `public/avatar.jpg` — your photo (Hero)
- `public/logos/{id}.png` — one per timeline entry (check `id` field in `data/timeline.ts`), e.g. `ecs.png`, `iti.png`, `fedis.png`... Falls back to initials automatically if missing.
- `public/projects/{id}.png` — one per project (check `id` field in `data/projects.ts`), e.g. `chatpop.png`, `property-pulse.png`... Falls back to a placeholder if missing.

## Still TODO

- [ ] Confirm DEPI date range in `data/timeline.ts` (currently a placeholder)
- [ ] Fill in ChatPop and PropertyPulse details in `data/projects.ts` (description, tech, links)
- [ ] Add real LinkedIn / GitHub / Portfolio URLs in `components/Navbar.tsx` if you want them there too, and in `components/Hero.tsx`
- [ ] Add `liveUrl` / `githubUrl` to projects that have them
- [ ] Drop in real logos and project images (see above)
