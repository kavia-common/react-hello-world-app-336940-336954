# StreamVibe WM-8291..WM-8300 Requirements Traceability

## Overview

This document provides requirement traceability for the StreamVibe laptop UI implementation against
Jira epics **WM-8291..WM-8300** and user stories **US-001..US-027** (mapped to the WM epic scope).

The implementation is in `react-hello-world-app-336940-336954/hello_world_frontend/src/`.

## Requirement Inventory

| Req ID    | Type       | Summary                                              | Source               |
|-----------|------------|------------------------------------------------------|----------------------|
| WM-8291   | Functional | Global Navigation Shell (active state, no dead clicks) | Jira WM-8291       |
| WM-8292   | Functional | Home Hero Value Proposition (exact copy, CTA)        | Jira WM-8292         |
| WM-8293   | Functional | Home Category Exploration (genre cards, nav)         | Jira WM-8293         |
| WM-8294   | Functional | Home Device Compatibility Section                    | Jira WM-8294         |
| WM-8295   | Functional | Home FAQ Accordion (numbered 01-08, plus/minus icons)| Jira WM-8295         |
| WM-8296   | Functional | Pricing Plans + Billing Tabs (Monthly default)       | Jira WM-8296         |
| WM-8297   | Functional | Movies & Shows Featured Hero + Slider                | Jira WM-8297         |
| WM-8298   | Functional | Movies & Shows Content Sections (Movies/Shows grids) | Jira WM-8298         |
| WM-8299   | Functional | Show Details Open State (Released Year 2022, sidebar)| Jira WM-8299         |
| WM-8300   | Functional | CTA banner (typo: "Start a Free Trail") + Footer     | Jira WM-8300         |

### Known Intentional Typos (Preserved per Design Spec)

- CTA button: **"Start a Free Trail"** (not "Trial") — per WM-8300
- Footer column: **"Gernes"** (not "Genres") — per WM-8300
- Copyright: **"@2023 streamvib, All Rights Reserved"** (lowercase, @ not ©) — per WM-8300

## Requirement Trace Matrix

| Req ID  | Requirement | Source | Implementation Mapping | Inline Code Trace | Verification | Status |
|---------|-------------|--------|------------------------|-------------------|--------------|--------|
| WM-8291 | Global top nav bar with active item styling; no dead clicks on any interactive element | Jira WM-8291 | `src/components/Navbar.js`: `handleNavClick()`, `Navbar` component; `src/components/MovieHeroBanner.js`: `handleIconAction()`; `src/components/PlanCard.js`: `handleStartTrial()`, `handleChoosePlan()` | `// REQ: WM-8291` in Navbar.js, MovieHeroBanner.js, PlanCard.js | Manual: click all nav items, all icon buttons, all plan buttons | Implemented |
| WM-8292 | Home hero section with exact copy and Start Watching Now CTA (no dead click) | Jira WM-8292 | `src/components/HeroSection.js`: hero CTA navigates to 'movies' | `// REQ: WM-8292` comment in HomePage.js | Manual: Home page hero renders; CTA navigates to movies | Implemented |
| WM-8293 | Category cards: Action, Adventure, Comedy, Drama, Horror; nav arrows; cards clickable | Jira WM-8293 | `src/pages/HomePage.js` genres section; `src/components/GenreCard.js`; `src/data/streamData.js` | `// REQ: WM-8293` in HomePage.js | Manual: genre cards render; nav arrows cycle pages | Implemented |
| WM-8294 | Device cards: Smartphones, Tablet, Smart TV, Laptops, Gaming Consoles, VR Headsets | Jira WM-8294 | `src/pages/HomePage.js` devices section; `src/components/DeviceCard.js`; `src/data/streamData.js` | `// REQ: WM-8294` in HomePage.js | Manual: 6 device cards render | Implemented |
| WM-8295 | FAQ accordion: heading, 8 items numbered 01-08, plus/minus icons, Ask a Question CTA | Jira WM-8295 | `src/components/FAQSection.js`: `renderFAQItem()`, `handleAskQuestion()`; `src/components/FAQSection.css` | `// REQ: WM-8295` in FAQSection.js | Manual: 8 FAQ items, numbered, plus/minus icon toggles | Implemented |
| WM-8296 | Pricing: Monthly/Yearly tabs (Monthly default); Basic/Standard/Premium plans; Start Free Trial + Choose Plan buttons | Jira WM-8296 | `src/pages/HomePage.js` subscriptions section; `src/components/PlanCard.js` | `// REQ: WM-8296` in PlanCard.js, HomePage.js | Manual: monthly active by default, 3 plan cards, both buttons clickable | Implemented |
| WM-8297 | Movies & Shows hero for Avengers: Endgame; hero controls interactive | Jira WM-8297 | `src/components/MovieHeroBanner.js`; `src/pages/MoviesShowsPage.js` | `// REQ: WM-8297` in MovieHeroBanner.js | Manual: hero shows first movie; prev/next arrows cycle; Play Now navigates | Implemented |
| WM-8298 | Movies and Shows labeled sections with card-like content areas | Jira WM-8298 | `src/pages/MoviesShowsPage.js` movies section, shows section; `src/components/MovieCard.js` | `// REQ: WM-8298` comment in MoviesShowsPage.js | Manual: Movies/Shows sections render with cards | Implemented |
| WM-8299 | Show details: Stranger Things hero, Play Now button, seasons/episodes, description, metadata sidebar (Released Year 2022, Director, Music) | Jira WM-8299 | `src/pages/ShowDetailPage.js`: `defaultShow.year = '2022'`; `src/data/streamData.js` | `// REQ: WM-8299` in ShowDetailPage.js | Manual: show detail renders; sidebar shows 2022; all sidebar labels present | Implemented |
| WM-8300 | CTA banner with "Start a Free Trail" typo; footer with "Gernes" column; copyright "@2023 streamvib" | Jira WM-8300 | `src/components/CTABanner.js`: CTA button text; `src/components/Footer.js`: footerColumns with "Gernes", copyright text | `// REQ: WM-8300` in Footer.js, CTABanner.js | Manual: CTA button reads "Start a Free Trail"; footer has "Gernes" column; copyright exact | Implemented |

## Inline Requirement ID Convention

Inline markers follow the format: `// REQ: <WM-XXXX> - <short hint>`

Placed at:
- The primary component function definition, OR
- The specific data/text that implements the requirement (e.g., typo strings, year values, column labels)

## Update Rules

1. **When requirement changes**: Update the trace matrix Source column and review inline `// REQ:` comments.
2. **When code is refactored**: Move inline markers with the owning logic; update Implementation Mapping column.
3. **When tests are added**: Update Verification Mapping column and set Status to "Implemented".
4. **When typos need correction**: Do NOT correct the intentional typos in `CTABanner.js`, `Footer.js` — they match the design spec.

## Verification Artifacts Policy

All requirements in this document are verified manually by loading the running React application:

- Home page: `http://localhost:3000` → navigate through all sections
- Movies & Shows: click "Movies & Shows" in navbar
- Show Detail: click any movie/show card or hero Play Now button
- FAQ: expand items, check numbered labels and plus/minus icons
- Footer: verify "Gernes" column heading; verify copyright text
- CTA: verify button reads "Start a Free Trail"

Automated verification via React Testing Library is recommended but not currently implemented.
