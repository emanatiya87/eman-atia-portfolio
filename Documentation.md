# Documentation

Technical reference for how this portfolio is built — architecture, design
decisions, and the logic behind each feature. `README.md` covers setup;
this covers _why_ and _how_ things work, for whoever maintains this next
(including future you).

---

## 1. Architecture

**Stack:** Next.js 15 (App Router) · TypeScript · Tailwind CSS · Framer Motion

**Data flow:** Every dynamic section (Timeline, Projects, Skills) reads from
a single typed data file in `data/`. There is no CMS and no database read
on the frontend — content changes mean editing a `.ts` file, not clicking
through an admin panel. The only write path is the Contact form, which
posts to `/api/contact` and lands in Supabase.

```
data/*.ts  →  components (client, filter/paginate/render)  →  page.tsx assembles sections
```

This keeps the site fully static-generatable (see §6) while still letting
content be structured, typed, and easy to search/replace.

---

## 2. Design system

| Token        | Value     | Used for                                    |
| ------------ | --------- | ------------------------------------------- |
| `ink`        | `#0A0F1E` | Page background                             |
| `panel`      | `#111830` | Cards, form fields                          |
| `accent`     | `#4CD9E8` | Links, borders, glow effects, active states |
| `foreground` | `#EDEFF5` | Primary text                                |
| `muted`      | `#9AA3B8` | Secondary text                              |

Defined in `tailwind.config.ts` as theme extensions, so every component
uses `bg-ink`, `text-accent`, etc. instead of hardcoded hex values —
changing the palette later means editing one file.

**Type:** `JetBrains Mono` for eyebrows/labels/badges (reads as
"engineering"), `Inter` for everything else. Both loaded via
`next/font/google` in `app/layout.tsx` and exposed as CSS variables
(`--font-mono`, `--font-sans`).

**Signature motif:** circuit-board line art (see §3) — ties the visual
language back to the "Electrical Engineer → Front-End Developer" narrative
without spelling it out as a literal badge or icon.

---

## 3. Hero (`components/Hero.tsx`)

### Circuit backdrop

A hand-authored inline SVG, not an image:

```jsx
<path d="M0 120 H180 V60 H400 M400 60 V300 H620 V500 H800" stroke="#4CD9E8" />
```

`H`/`V` path commands draw strictly horizontal/vertical segments meeting at
right angles — mimicking PCB trace routing rather than organic curves.
Circles mark trace junctions. Opacity is kept at `0.07` so it reads as
texture, not decoration competing with the foreground content.

Inline SVG (vs. an `<img>`) means zero extra network request, infinite
scalability, and the color can be changed from code without touching an
image editor.

### Spotlight cursor effect

`components/SpotlightLayer.tsx` + the `onMouseMove` handler in `Hero.tsx`.

The mouse-tracking logic deliberately does **not** use `useState`. Setting
React state on every `mousemove` event would trigger a re-render dozens of
times per second. Instead:

```tsx
const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
  const rect = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--spot-x", `${e.clientX - rect.left}px`);
  e.currentTarget.style.setProperty("--spot-y", `${e.clientY - rect.top}px`);
};
```

CSS custom properties are written directly to the DOM node, bypassing
React's render cycle entirely. `SpotlightLayer` is a static, presentational
`pointer-events-none` div whose `radial-gradient` background reads those
same variables — it never re-renders, it just repaints, which is far
cheaper.

### Typewriter bio (`components/TypewriterText.tsx`)

A `setInterval` increments a character count in state every `speedMs`
(default 18ms), and the component slices the source string to that length.
A blinking `<span>` cursor is appended while `count < text.length`. Simple
by design — no external animation library needed for this effect.

### Resume download

`public/resume.pdf` is a real generated PDF (via a Python/ReportLab script,
not checked into the repo — regenerate it if the CV content changes). The
button is a plain `<a href="/resume.pdf" download>` — no JS required for a
file download.

---

## 4. Scroll progress bar (`components/ScrollProgressBar.tsx`)

```tsx
const { scrollYProgress } = useScroll(); // 0 → 1 across page height
const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 25 });
```

`scrollYProgress` from Framer Motion tracks page scroll as a 0–1 value.
`useSpring` wraps it so the bar eases rather than jumping in lockstep with
scroll (spring physics: `stiffness` controls how fast it catches up,
`damping` controls oscillation). The bar itself is a `fixed` div with
`transform: scaleX(...)` and `transform-origin: left`, so it visually
fills left-to-right as the value grows — no width recalculation needed,
which keeps it GPU-accelerated and jank-free.

---

## 5. Timeline (`components/Timeline/`)

### Layout

Two layouts exist for the same data, switched via Tailwind's `lg:` prefix
(no separate mobile/desktop components, no JS media-query listener):

- **Mobile** (`lg:hidden`): single left-aligned line, entries stacked.
- **Desktop** (`hidden lg:block`): `grid-cols-[1fr_auto_1fr]` — a left
  column, a center column for the line/dot, and a right column. Entries
  alternate sides based on index parity (`i % 2 === 0`), with the unused
  side column rendered as an empty `<div />` to preserve grid alignment.

### State

```tsx
const [filter, setFilter] = useState<FilterValue>("all");
const [visibleCount, setVisibleCount] = useState(PAGE_SIZE); // 7

useEffect(() => setVisibleCount(PAGE_SIZE), [filter]); // reset pagination on filter change
```

Filtering and sorting run inside a `useMemo` keyed on `filter`, so the
array isn't recomputed on every render — only when the filter actually
changes. Pagination is a simple `.slice(0, visibleCount)` on the filtered
result; "Next" just increments `visibleCount` by `PAGE_SIZE`.

### Org logos

`components/LogoAvatar.tsx` — a client component that tries to render
`<img src={logo}>` and falls back to initials (derived from the org name)
via an `onError` handler if the image 404s. This means the timeline never
looks broken even before you've added every logo file.

---

## 6. Projects & case studies

### Card → Story link

Each `ProjectCard` links to `/projects/[id]`, a **statically generated**
route (`generateStaticParams` returns every project id at build time, so
Next.js pre-renders all of them — no runtime data fetching, no loading
state).

```tsx
export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;   // Next.js 15: params is a Promise, must be awaited
  ...
}
```

Each case-study page gets its own `<title>`/`<meta description>` via
`generateMetadata`, which matters for SEO — Google indexes each project as
its own page, not just anchors on the homepage.

`problem` / `approach` / `result` are optional fields on the `Project`
type; the page renders a "TODO" placeholder for any that are empty, so
partially-filled data never breaks the layout.

---

## 7. Skills marquee (`components/Skills/SkillsMarquee.tsx`)

The list of icons is duplicated (`[...techIcons, ...techIcons]`) and
animated with a CSS keyframe that translates `-50%`:

```css
@keyframes marquee {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}
```

Because the list is doubled, translating exactly half its total width
lands precisely back on the first copy — the loop point is invisible.
`animation-play-state: paused` on `:hover` (via Tailwind's
`group-hover:[animation-play-state:paused]`) lets people stop it to read a
label. Pure CSS — no JS animation loop, no re-renders.

Icons come from `react-icons/si` (Simple Icons) — these are icon-font
glyphs redistributed under an open license for exactly this purpose, not
scraped brand logos, so there's no copyright concern using them here.

---

## 8. Contact form (`components/Contact/`, `app/api/contact/`, `lib/`)

### Validation (shared, not duplicated)

`lib/schemas/contact.ts` exports one Zod schema used on **both** sides:

- Client: `useForm({ resolver: zodResolver(contactSchema) })` — instant
  inline errors, no round-trip needed for basic validation.
- Server: `contactSchema.safeParse(body)` in the API route — because
  client validation can always be bypassed (disabled JS, direct API calls),
  so the server re-validates independently before touching the database.

### Storage

`lib/supabase.ts` creates a server-only Supabase client using the
**service role key** (never imported into a `"use client"` file — it
bypasses Row Level Security and must never reach the browser). The API
route inserts a row into `contact_messages` and returns `{ ok: true }` or
a 400/500 with an error message, which the form reads to show a success or
error state (`components/Contact/ContactForm.tsx`, local `status` state
machine: `idle → submitting → success | error`).

### Copy-to-clipboard (`components/CopyableContact.tsx`)

`navigator.clipboard.writeText(value)`, with a `copied` boolean flipped
true for 1.8s to swap the icon and show the checkmark — wrapped in
`try/catch` since Clipboard API isn't universally available (older
browsers, non-HTTPS contexts).

### Keeping Supabase awake

Free-tier Supabase projects pause after 7 days of database inactivity.
`app/api/keep-alive/route.ts` runs a trivial `select` query;
`vercel.json`'s cron config hits it every 3 days once deployed — comfortably
under the pause threshold, with no manual intervention needed.

---

## 9. SEO

- **`app/layout.tsx`** — full `Metadata` object: title template (so every
  page gets `"Page Title — Eman Atia"` automatically via the `template`
  field), keyword-rich description, Open Graph + Twitter card data,
  `robots` directives, and a `Person` JSON-LD script for rich search
  results (Google can show a knowledge-panel-style entry, not just a blue
  link).
- **`app/opengraph-image.tsx`** — uses `next/og`'s `ImageResponse` to
  render the share-preview image _as JSX_, at request time, rather than a
  static file. Matches the same circuit-line motif as the Hero background
  for visual consistency when the link is shared on LinkedIn/Twitter/etc.
- **`app/icon.tsx` / `app/apple-icon.tsx`** — same `ImageResponse`
  approach for the favicon and Apple touch icon, so the browser tab and
  bookmarks match the brand without needing a separately-exported `.ico`
  file.
- **`app/robots.ts` / `app/sitemap.ts`** — Next.js's typed metadata route
  convention. The sitemap is generated from `data/projects.ts`, so every
  new project automatically gets a sitemap entry with no manual step.

**Why this matters for "appearing in Google":** none of this guarantees
ranking, but it removes every _technical_ reason Google wouldn't index the
site correctly — a crawlable sitemap, a non-blocking robots.txt, a
descriptive per-page `<title>`/`<meta>`, and structured data all reduce
ambiguity for the crawler. The rest (ranking position) depends on backlinks,
content depth, and time — no code change controls that directly.

---

## 10. Known trade-offs / things to revisit

- The Hero background SVG is hand-authored path data — if you want a more
  elaborate circuit pattern, it's easiest to design it in Figma/Illustrator
  and export the `<path>` d-attributes rather than hand-writing more.
- `dns.setServers(["8.8.8.8", "8.8.4.4"])` in `lib/mongodb.ts` was a fix
  for local MongoDB SRV lookup issues on a specific network — **irrelevant
  now that the project uses Supabase**, only mentioned here in case that
  file resurfaces from git history.
- The keep-alive cron is a workaround for Supabase's free-tier pause
  policy, not a permanent architectural piece — if you upgrade to a paid
  Supabase plan later, `vercel.json`'s cron entry can be removed.
