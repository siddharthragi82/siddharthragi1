# Image map

What each uploaded file showed, which product it belongs to, what was done to it, and where it appears on the site.

## Assumptions made about the uploads

- **Pink/orange screens (`1.png`–`7.png`, `Version3.png`) are the redesigned We Hear You app (v2).** The green screens (`WHY AppVersion 1.pdf`, the two marketing creatives) are the original v1. The journal dates (Aug 2021 in v1, Mar 2023 in v2) support this.
- **`Version 2 .png`** (green "How it works / Book a session") is the We Hear You book-a-therapy flow from the June 2022 report, not a separate product.
- **The Fleedom screens** are the four web-app wireframes on page 11 of `2022 HTPL WHY.pdf`. No separate Fleedom upload existed.
- **Logos** were extracted from the CV PDF, which embeds almost every company and partner logo. The swoosh logo next to Rotaract is assumed to be **ISB** (it reads "ISB" at full size).
- **Screenshots that already had a phone bezel baked in** were cropped to the screen, so the site's CSS phone frame doesn't double up.

## Uploaded images

| Uploaded file | Shows | Product | Saved as (`/public/images/…`) | Used for |
|---|---|---|---|---|
| `1.png` | Welcome screen "Hi. We Hear You." | We Hear You (v2) | `products/we-hear-you/we-hear-you-welcome-screen.webp` | Case-study hero, gallery |
| `2.png` | Home + mood check-in | We Hear You (v2) | `…/we-hear-you-mood-check-in.webp` | **Card thumbnail**, **home hero collage**, case-study hero, gallery |
| `3.png` | My Journal | We Hear You (v2) | `…/we-hear-you-journal.webp` | Spare. Near-duplicate of `6.png`, kept as `WHY.journal` in the data file |
| `4.png` | Find a Listener topic chips | We Hear You (v2) | `…/we-hear-you-find-a-listener-topics.webp` | **Card thumbnail** (2nd phone), case-study hero, gallery |
| `5.png` | One-to-one listener chat | We Hear You (v2) | `…/we-hear-you-listener-chat.webp` | Gallery |
| `6.png` | Journal with "Continue chat" | We Hear You (v2) | `…/we-hear-you-journal-continue-chat.webp` | Gallery |
| `7.png` | Profile & listener preferences | We Hear You (v2) | `…/we-hear-you-profile-settings.webp` | Gallery |
| `Version3.png` | Three-phone composite of v2 | We Hear You | `…/we-hear-you-redesign-three-screens.webp` (whitespace trimmed) | Gallery |
| `Version 2 .png` | Three-phone book-a-session flow | We Hear You | `…/we-hear-you-book-a-session-flow.webp` | Gallery |
| `FIND A LISTENER YOU WISH YOU'D ALWAYS HAD.png` | Green acquisition banner | We Hear You (v1) | `…/we-hear-you-ad-find-a-listener.webp` | Gallery |
| `Chat with a trained listener.png` | Square social ad | We Hear You (v1) | `…/we-hear-you-ad-chat-with-a-trained-listener.webp` | Gallery |
| `Listeners training 1.PNG` | Zoom grid of a listener-training session | We Hear You | `…/we-hear-you-listener-training-session.webp` | Gallery ⚠️ shows interns' faces and names |
| `Listeners training 2.PNG` | Training call with a slide | We Hear You | `…/we-hear-you-listener-training-cohort.webp` | Gallery ⚠️ same as above |
| `Noma Financial -Getflexi 1.png` | Homepage "Loans that work for you" | GetFlexi | `products/getflexi/getflexi-homepage-hero.webp` | **Card thumbnail**, **home hero collage**, case-study hero, gallery (browser frame) |
| `Noma Financial -Getflexi 2.png` | AI insights + budget tracker | GetFlexi | `…/getflexi-ai-insights-budget-tracker.webp` | Gallery |
| `Noma Financial -Getflexi 3.png` | Spending calendar, budget, subscriptions | GetFlexi | `…/getflexi-spending-budget-subscriptions.webp` | Gallery |
| `incubez 1.png` | Home with PMF & Founders Playbook rails | Incubez | `products/incubez/incubez-home-product-market-fit.webp` | **Card thumbnail**, **home hero collage**, case-study hero, gallery |
| `incubez 3.png` | Startup Stories / Young & Women Entrepreneurs | Incubez | `…/incubez-startup-stories-rails.webp` | Gallery |
| `incubez 2 .png` | 100+ Crores Club / Trending | Incubez | `…/incubez-100-crores-club-trending.webp` | Gallery |

## Images extracted from the uploaded PDFs and docs

| Source | Extracted | Product | Used for |
|---|---|---|---|
| `WHY AppVersion 1.pdf` pp. 1, 2, 4, 5 | v1 home, topic picker, pre-chat mood, profile (cropped to screen) | We Hear You (v1) | Gallery "Launch version (v1)" |
| `2022 HTPL WHY.pdf` p. 3 | Returning-users chart (June 2022) | We Hear You | Gallery "Behind the numbers" |
| `2022 HTPL WHY.pdf` p. 5 | User-stickiness chart (DAU/WAU, WAU/MAU) | We Hear You | Gallery "Behind the numbers" |
| `2022 HTPL WHY.pdf` pp. 12–13 | Book-a-therapy wireframes, professional dashboard | We Hear You | Gallery |
| `2022 HTPL WHY.pdf` p. 11 | Fleedom login/dashboard/teacher screens; 5-stage rollout tracker | **Fleedom** | **Card thumbnail**, case-study hero, gallery |
| `2022 HTPL WHY.pdf` pp. 1–6 | Downloads, session length, cost per install | We Hear You | "From the June 2022 product report" box |
| `SnR Report Sept.pdf` p. 2 | Topic selection, timed question, score cards | Scores'n'Ranks | **Card thumbnail**, **home hero collage**, gallery |
| `SnR Report Sept.pdf` pp. 3–4 | User-activity chart, "Gamified Learning" ad | Scores'n'Ranks | Gallery |
| `Sri Aurobindo Industries.pdf` pp. 3–5 | Factory floor, finished stock, stove bodies, assembled stoves | Cook Craft | **Card thumbnail**, case-study hero, gallery |
| `canva pdf Siddharth Ragi CV - 2026.pdf` | 22 logos | All | Employer strip, partner strip, timeline, placeholders, "Clients" box |
| `canva pdf Siddharth Ragi CV - 2026.pdf` | The PDF itself | — | `/public/Siddharth-Ragi-CV.pdf` (Download CV) |
| `Fleedom 2023.docx` (project doc) | Pilot numbers + prototype link | Fleedom | Metrics, outcome, "Live prototype" link |

## Products with no product imagery (gradient placeholder + TODO)

| Product | What's shown instead | To fix |
|---|---|---|
| **EasyBucks** (Noma Financial) | Red gradient, "EB" initials + EasyBucks logo | Add screenshots to `public/images/products/easybucks/` |
| **Cloud Services Line** (Digitech Peripherals) | Navy gradient, "DP" + Digitech logo | Add images to `public/images/products/digitech-cloud-services/` |
| **Brand & GTM Programmes** (SuperGTM) | Blue gradient, "SG" + SuperGTM logo | Add campaign images to `public/images/products/supergtm-growth/` |

Also missing: a **Kidsens** logo (shown as a text wordmark) and **award badges** (awards are shown as icon cards).
