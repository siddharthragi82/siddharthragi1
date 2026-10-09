# QA checklist

Run against the production build (`next build && next start`) in headless Chromium.

## Build & code

- [x] `next build` succeeds. All 27 routes are static (home, 9 case studies, 10 OG images, icons, sitemap, robots, 404).
- [x] `tsc --noEmit`: no type errors.
- [x] `eslint .` (next/core-web-vitals + next/typescript): no warnings.
- [x] No browser console errors or warnings on any page tested.

## Responsiveness

- [x] Checked at **375, 768, 1280 and 1920 px**: no horizontal scroll at any width (`scrollWidth − innerWidth = 0`).
- [x] Hero collage scales proportionally (percentage positioning inside an aspect-ratio box).
- [x] Long metric values (`88% → 96%`, `8h → 45m`) never wrap; the stat column widens instead.
- [x] Mobile menu opens and closes (button, Escape key, link click), with `aria-expanded` kept in sync.

## Accessibility

- [x] **axe-core (WCAG 2.1 A/AA + best practices): 0 violations**. Checked on home, 4 case studies and the 404 page, in **light and dark**, including colour contrast.
- [x] Lighthouse Accessibility **100** on every page tested.
- [x] Skip link, landmarks (`header`/`nav`/`main`/`footer`), one `h1` per page, logical heading order.
- [x] Visible focus ring (2px accent outline) on every interactive element. Card stretched links show the ring around the whole card.
- [x] Filter chips use `aria-pressed`, and a polite live region announces "Showing N products in X".
- [x] Every image has descriptive alt text. Decorative placeholders are `aria-hidden`.
- [x] Counters: screen readers get the final value, and the animated digits are `aria-hidden`.

## Links

- [x] All 54 internal links and anchors resolve (HTTP 200 / element exists), and no image fails to load.
- [x] Nav links land exactly on their section (88 px below the top, clearing the sticky header), with smooth scrolling on and off, from the home page and from a case-study page, at 1280 and 375 px.
- [x] External links open in a new tab with `rel="noopener noreferrer"` and an sr-only "(opens in a new tab)".
- [x] "Download CV" serves `/Siddharth-Ragi-CV.pdf`.
- [ ] Writing links are placeholders (`#`) and render as "Link coming soon" until you add URLs.

## Motion

- [x] With `prefers-reduced-motion: reduce`, hero counters show final values immediately, transforms are disabled and CSS transitions are neutralised.
- [x] Without JavaScript, content is still visible (a `noscript` rule overrides the fade-in start state) and all work cards show.

## Dark mode

- [x] Defaults to the OS setting; the toggle overrides it and persists. No flash of the wrong theme (next-themes pre-paint script).
- [x] Every colour comes from tokens. Checked visually and with axe contrast in dark mode.

## Lighthouse (local production build)

| Page | Device | Performance | Accessibility | Best practices | SEO |
|---|---|---|---|---|---|
| `/` | Mobile | 96–98 | 100 | 100 | 100 |
| `/` | Desktop | 100 | 100 | 100 | 100 |
| `/work/we-hear-you` | Mobile | 98 | 100 | 100 | 100 |
| `/work/cook-craft` | Mobile | 98 | 100 | 100 | 100 |
| `/work/easybucks` | Desktop | 100 | 100 | 100 | 100 |

CLS is 0 on every page. Mobile scores vary by a few points between runs. Vercel's CDN usually scores slightly higher than a local server.

## SEO

- [x] Title template, meta description, canonical URLs, Open Graph + Twitter cards (generated images for home and each case study).
- [x] `sitemap.xml` (home + 9 case studies) and `robots.txt`.
- [x] Person JSON-LD on the home page.
- [ ] Set `NEXT_PUBLIC_SITE_URL` on Vercel so canonical/OG/sitemap URLs use your real domain.
