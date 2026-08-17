# Eman Atia — Portfolio

Next.js 15 (App Router) + TypeScript + Tailwind CSS + Framer Motion.

## Setup

```bash
npm install
cp .env.local.example .env.local   # then fill in SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY
npm run dev
```

Open http://localhost:3000

## Contact form → Supabase (free tier)

1. Create a free project at https://supabase.com/dashboard (no card required)
2. SQL Editor → New Query → run:

   ```sql
   create table contact_messages (
     id uuid primary key default gen_random_uuid(),
     name text not null,
     email text not null,
     mobile text not null,
     message text not null,
     created_at timestamptz not null default now()
   );

   alter table contact_messages enable row level security;
   ```

3. Project Settings → API → copy the **Project URL** (no trailing `/rest/v1/`) into `SUPABASE_URL`, and the **`service_role`** key (not `anon`/`public`) into `SUPABASE_SERVICE_ROLE_KEY`
4. Submissions land in Table Editor → `contact_messages`

**Free-tier pausing:** Supabase pauses free projects after 7 days with no database activity. The `app/api/keep-alive/route.ts` endpoint + `vercel.json` cron (runs every 3 days) prevents this automatically once deployed — no action needed after deploy.

## Deploying to Vercel

1. Push the project to GitHub (`.env.local` is gitignored, won't be pushed)
2. vercel.com → sign in with GitHub → Add New → Project → import the repo
3. Before deploying, add `SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` under Environment Variables
4. Deploy — you'll get a `https://your-project.vercel.app` URL
5. Update the `siteUrl` placeholder in `app/layout.tsx`, `app/robots.ts`, and `app/sitemap.ts` with your real URL, then commit + push (Vercel redeploys automatically)

## Structure

- `data/timeline.ts` — timeline entries (single source of truth for the Journey section)
- `data/projects.ts` — projects, tagged by category (internship / freelance / personal), plus optional `problem`/`approach`/`result` fields for case-study pages
- `data/skills.ts` — grouped skills for the detailed grid
- `data/techIcons.tsx` — tech logos used in the scrolling marquee
- `components/Navbar.tsx` — desktop nav + mobile slide-in sidebar
- `components/ScrollProgressBar.tsx` — thin glowing progress bar under the navbar
- `components/SpotlightLayer.tsx` — cursor-reactive glow in the Hero background
- `components/CopyableContact.tsx` — click-to-copy email/phone chip with toast
- `components/TypewriterText.tsx` — letter-by-letter text reveal
- `components/Hero.tsx` — hero with typewriter bio, resume download, spotlight
- `components/Timeline/` — timeline (7-at-a-time pagination, category filters, org logos)
- `components/Projects/` — projects grid (image, GitHub/live links, category filters, Project Story link)
- `components/Skills/` — marquee + detailed skill groups
- `components/Contact/` — form (react-hook-form + zod) → `/api/contact` → Supabase
- `components/LogoAvatar.tsx` — shared logo component, falls back to initials if the image is missing
- `app/projects/[id]/page.tsx` — statically generated case-study page per project (Problem / Approach / Result)
- `app/opengraph-image.tsx` — dynamically generated OG share image (circuit theme)
- `app/robots.ts`, `app/sitemap.ts` — SEO
- `app/api/contact/route.ts` — validates + saves contact form submissions
- `app/api/keep-alive/route.ts` — pings Supabase on a schedule so the free tier doesn't pause
- `lib/supabase.ts` — server-only Supabase client (service role key)
- `lib/schemas/contact.ts` — shared Zod schema for the contact form (client + server validation)
- `public/resume.pdf` — generated resume, downloadable from the Hero

## Assets you still need to add

- `public/avatar.jpg` — your photo (Hero)
- `public/logos/{id}.png` — one per timeline entry (check `id` field in `data/timeline.ts`), e.g. `ecs.png`, `iti.png`, `fedis.png`... Falls back to initials automatically if missing.
- `public/projects/{id}.png` — one per project (check `id` field in `data/projects.ts`), e.g. `chatpop.png`, `property-pulse.png`... Falls back to a placeholder if missing.

## Still TODO

- [ ] Confirm DEPI date range in `data/timeline.ts` (currently a placeholder)
- [ ] Fill in ChatPop and PropertyPulse details in `data/projects.ts` (description, tech, links)
- [ ] Add `problem` / `approach` / `result` text per project for the case-study pages
- [ ] Add real LinkedIn / GitHub URLs in `components/Hero.tsx` and `app/layout.tsx` (`sameAs`)
- [ ] Add `liveUrl` / `githubUrl` to projects that have them
- [ ] Drop in real logos, project images, and avatar (see above)
- [ ] Replace the `siteUrl` placeholder once deployed (see Deploying section)
