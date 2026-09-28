# Siddharth Ragi: Portfolio

Personal portfolio for Siddharth Ragi, a product leader across fintech, mental-health tech and edtech. It's built to win Senior PM, Head of Product and CPO roles in the UK and India, with every shipped product shown as a case study.

**Stack:** Next.js 15 (App Router) · TypeScript · Tailwind CSS 3 · Framer Motion · next-themes · self-hosted fonts via `next/font`.

All content (text, metrics, links, image paths) is in **one file: `data/portfolio.ts`**. You shouldn't need to touch a component to update the site.

---

## Run it locally

Requires Node.js 18.18 or newer (20+ recommended).

```bash
npm install
npm run dev          # http://localhost:3000
```

Other scripts:

```bash
npm run build        # production build (also type-checks and lints)
npm run start        # serve the production build
npm run lint         # ESLint
npm run typecheck    # TypeScript only
```

## Deploy to Vercel (zero config)

1. Push this folder to a GitHub repository.
2. In Vercel, **Add New → Project** and import the repo. Vercel detects Next.js automatically, so keep all defaults.
3. Add one environment variable: `NEXT_PUBLIC_SITE_URL` = your final URL (e.g. `https://siddharthragi.com`). It's used for canonical links, Open Graph images and the sitemap.
4. Deploy. Later pushes to `main` redeploy automatically.

To deploy from the command line instead, run `npx vercel` then `npx vercel --prod`.

**Custom domain:** in Vercel go to Project → Settings → Domains, add the domain, then update `NEXT_PUBLIC_SITE_URL`.

**Static hosting (optional):** `STATIC_EXPORT=1 npm run build` writes a fully static site to `/out` for Netlify, S3, GitHub Pages and similar hosts. Images are then served unoptimised.

---

## Project structure

```
app/
  layout.tsx               Fonts, metadata, theme provider, navbar, footer, skip link
  page.tsx                 Home page (sections in order) + Person JSON-LD
  work/[slug]/page.tsx     Case-study page (statically generated for every product)
  work/[slug]/opengraph-image.tsx   Per-case-study social card (generated at build)
  opengraph-image.tsx      Home social card (generated at build)
  icon.svg, apple-icon.tsx Favicon + home-screen icon placeholders (SR monogram)
  sitemap.ts, robots.ts    SEO files
  not-found.tsx            404 page
  globals.css              Colour tokens (CSS variables), base styles, utilities
  fonts/                   Space Grotesk (headings) + Inter (body), variable woff2
components/
  sections/                One file per home-page section
  DeviceFrames.tsx         CSS phone + browser mockups (no mockup images)
  ProductMedia.tsx         Card artwork + gradient placeholder for missing images
  ProductCard.tsx, StatRows.tsx, Gallery.tsx, LogoTile.tsx, Counter.tsx, …
data/
  portfolio.ts             ← ALL CONTENT LIVES HERE
lib/utils.ts               Small helpers
public/
  Siddharth-Ragi-CV.pdf    Linked from every "Download CV" button
  images/products/<slug>/  Product screenshots and photos (WebP)
  images/logos/            Company and partner logos (PNG)
docs/
  IMAGE-MAP.md             Which uploaded file became which image, and where it's used
  QA-CHECKLIST.md          What was tested before handover
```

---

## Editing content

Open `data/portfolio.ts`. It's organised top to bottom in the same order as the site:

| Export | Controls |
|---|---|
| `profile` | Name, headline, sub-line, hero stat pills, contact details, CV path |
| `site` | Site URL, SEO title/description, optional Formspree endpoint |
| `bigNumbers` | The dark "By the numbers" band |
| `employerLogos` | "Where I've built" logo strip |
| `products` | Work grid cards and full case-study pages |
| `experience` | Experience timeline |
| `writing` | Case studies & writing links |
| `sideProjects`, `research` | AI & side projects |
| `awards`, `press`, `partnerLogos` | Recognition & press |
| `about` | About narrative, education, certifications, skills, languages, work rights |

Search the file for `TODO` to find everything still waiting on you.

**Metrics:** each metric is `{ value: "60%+", label: "retention" }`. A value containing exactly one number (like `200%`, `$1M` or `1,000+`) counts up when it scrolls into view. Values with two numbers (like `88% → 96%`) are shown as-is. The first three metrics of a product appear on its card.

### Add or replace a product

1. Copy an existing object in the `products` array and change the fields.
2. `slug` becomes the URL (`/work/<slug>`), so use lowercase words joined by hyphens.
3. `categories` drives the filter chips and must use values from `CATEGORIES` (Fintech, Mental Health, EdTech, Media, Manufacturing, Consulting). To add a new category, add it to `CATEGORIES`; the filter chip and its CSS are generated automatically.
4. `brand` is a hex colour used to tint the card backdrop and the placeholder.
5. Fill `caseStudy` (problem → role → approach → outcome → learnings). `evidence` is optional.
6. Leave `cover: []` and `gallery: []` if there are no images yet. The site shows a gradient placeholder with the product's `initials`, plus its logo if `logo` is set.

The page, sitemap entry and social image are generated automatically.

### Add or replace an image

1. **Prepare the file.** Export at roughly 2× display size: phone screens around 720 px wide, web screenshots up to 1600 px wide. Convert to WebP, for example by dragging the file into [Squoosh](https://squoosh.app) and choosing WebP at quality ~80.
2. **For phone screenshots, crop to the screen only.** The site draws the phone bezel in CSS, so a screenshot that already includes a phone frame will look doubled.
3. **Save it** to `public/images/products/<product-slug>/` with a descriptive name, e.g. `we-hear-you-home-screen.webp`.
4. **Find the real pixel size** (Get Info on a Mac, Properties → Details on Windows, or Squoosh shows it).
5. **Reference it** in `data/portfolio.ts` using the `img()` helper:

   ```ts
   img("we-hear-you", "we-hear-you-home-screen.webp", 720, 1600, "phone",
     "Home screen with a mood check-in and a Find a Listener button.",   // alt text: what the image shows
     "Daily mood check-in")                                              // optional caption
   ```

   The frame is `"phone"` for a mobile screen, `"browser"` for a web screenshot, or `"figure"` for photos, charts and marketing artwork.
6. Put it in the product's `cover` (card thumbnail; one or two phone images, or one browser/figure image) and/or in a `gallery` group.

**Alt text:** describe what's actually in the image ("Journal screen listing check-ins with mood before and after"), not "screenshot".

### Logos

Logos live in `public/images/logos/` and are declared once in the `LOGOS` object. Transparent PNG or SVG work best. A logo without a `src` (currently **Kidsens**) renders as a clean text wordmark, so nothing ever shows as a broken image. Logo strips show logos in greyscale and switch to colour on hover.

### CV

Replace `public/Siddharth-Ragi-CV.pdf` with a new file of the same name. The one there now is the "CV – 2026" PDF from the project files.

### Contact form

The form works out of the box by opening the visitor's email app with the message pre-filled (a `mailto:` link). To receive submissions directly instead:

1. Create a free form at [formspree.io](https://formspree.io) and copy its endpoint (`https://formspree.io/f/xxxx`).
2. Paste it into `site.formspreeEndpoint` in `data/portfolio.ts`.

---

## Design system

- **Colours** are CSS variables in `app/globals.css` (`:root` for light, `.dark` for dark): a deep navy ink (`#0B1324`), a warm off-white surface (`#F7F6F2`) and one accent, electric teal (`#0D736A` in light mode for AA contrast, `#2DD4BF` in dark mode and in the numbers band). Change a value there and the whole site follows.
- **Type:** Space Grotesk (headings and big numbers) and Inter (body), self-hosted via `next/font/local`, so there's no third-party request and no layout shift.
- **Dark mode** follows the system by default. The toggle (navbar and footer) stores an explicit choice.
- **Motion** is subtle: fade/slide on scroll, counters, card hover lift. Everything respects `prefers-reduced-motion`: counters show final values immediately and transforms are switched off.

## Performance & accessibility notes

- Pages are statically generated. Images go through `next/image` (AVIF/WebP, responsive sizes, lazy-loaded below the fold, explicit width/height).
- The work filter is CSS-driven (cards are server-rendered, and a tiny client component only flips a `data-filter` attribute), which keeps hydration cheap. Without JavaScript every card is visible.
- Lower home-page sections use `content-visibility: auto` for a faster first load. `AnchorScrollFix` switches it off the first time someone follows an in-page link, so smooth scrolling lands exactly on the section.
- Semantic landmarks, a skip link, one `h1` per page, visible focus rings, `aria-pressed` filters, a live region for filter results, and alt text on every image.
