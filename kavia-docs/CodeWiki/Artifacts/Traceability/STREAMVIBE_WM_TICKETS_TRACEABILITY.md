# StreamVibe WM-8291..WM-8300 Requirements Traceability

## Overview

This document provides requirement traceability for the StreamVibe laptop UI implementation against
Jira epics **WM-8291..WM-8300** and user stories **US-001..US-027** (mapped to the WM epic scope).

The implementation is in `react-hello-world-app-336940-336954/hello_world_frontend/src/`.

All file paths below are relative to `hello_world_frontend/src/` unless stated otherwise.
Line numbers are 1-indexed and reference the state of the files at the time of this document.

---

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

---

## User Story Index (US-001..US-027)

The 27 user stories are derived from the WM-8291..WM-8300 epic scope. Each user story is mapped
to one or more WM epics and to concrete file/line evidence in the codebase.

| US ID   | User Story Summary                                                         | Parent Epic(s)          |
|---------|----------------------------------------------------------------------------|-------------------------|
| US-001  | View top navigation bar with active-state highlighting                     | WM-8291                 |
| US-002  | Click any nav item without encountering a dead (no-op) click               | WM-8291                 |
| US-003  | Navigate back to Home page from logo click                                 | WM-8291                 |
| US-004  | Click Search / Notifications icons without errors                          | WM-8291                 |
| US-005  | View Home hero section with headline and descriptive paragraph             | WM-8292                 |
| US-006  | Click "Start Watching Now" CTA to navigate to Movies & Shows               | WM-8292                 |
| US-007  | Browse genre cards (Action/Adventure/Comedy/Drama/Horror)                  | WM-8293                 |
| US-008  | Use prev/next arrows to cycle genre card pages                             | WM-8293                 |
| US-009  | View six device compatibility cards                                        | WM-8294                 |
| US-010  | View device card name, icon, and description                               | WM-8294                 |
| US-011  | View FAQ section with numbered items 01-08                                 | WM-8295                 |
| US-012  | Toggle FAQ item open/close with plus/minus icon                            | WM-8295                 |
| US-013  | Click "Ask a Question" CTA without a dead click                            | WM-8295                 |
| US-014  | View three subscription plan cards (Basic/Standard/Premium)               | WM-8296                 |
| US-015  | Switch billing cycle between Monthly and Yearly tabs                       | WM-8296                 |
| US-016  | Click "Start Free Trial" button without dead click                         | WM-8296                 |
| US-017  | Click "Choose Plan" button without dead click                              | WM-8296                 |
| US-018  | View Movies & Shows hero banner for first featured movie                   | WM-8297                 |
| US-019  | Cycle hero banner using prev/next arrows and dot indicators                | WM-8297                 |
| US-020  | Click "Play Now" on hero banner to open show detail                        | WM-8297                 |
| US-021  | View Movies section with card grid and section label "Movies"              | WM-8298                 |
| US-022  | View Shows section with card grid and section label "Shows"                | WM-8298                 |
| US-023  | Filter movies and shows by genre tab                                       | WM-8298                 |
| US-024  | View show detail page for Stranger Things with synopsis                    | WM-8299                 |
| US-025  | View metadata sidebar showing Released Year 2022, Director, Music          | WM-8299                 |
| US-026  | Navigate seasons/episodes list within show detail page                     | WM-8299                 |
| US-027  | View CTA banner ("Start a Free Trail") and footer with "Gernes" column     | WM-8300                 |

---

## Requirement Trace Matrix (WM Epics)

| Req ID  | Requirement | Source | Implementation Mapping | Inline Code Trace | Verification | Status |
|---------|-------------|--------|------------------------|-------------------|--------------|--------|
| WM-8291 | Global top nav bar with active item styling; no dead clicks on any interactive element | Jira WM-8291 | `components/Navbar.js`: `handleNavClick()` (L56–80), `Navbar` component (L49); `components/MovieHeroBanner.js`: `handleIconAction()` (L33–36); `components/PlanCard.js`: `handleStartTrial()` (L24–30), `handleChoosePlan()` (L37–40); `components/Footer.js`: `handleLinkClick()` (L63–71); `components/FAQSection.js`: id="faq-section" (L138); `pages/HomePage.js`: id="subscriptions-section" (L100) | `// REQ: WM-8291` in Navbar.js (L8–9, L82, L88, L94, L100, L106), MovieHeroBanner.js (L11–12, L28–29), PlanCard.js (L9, L11), Footer.js (L52) | Manual: click all nav items, all icon buttons, all plan buttons | Implemented |
| WM-8292 | Home hero section with exact copy and Start Watching Now CTA (no dead click) | Jira WM-8292 | `components/HeroSection.js`: `HeroSection` component (L14), CTA button `onClick={() => navigate('movies')}` (L64); `pages/HomePage.js`: `<HeroSection navigate={navigate} />` (L49) | `// REQ: WM-8292` in HomePage.js (L18), HeroSection.js (inline in JSX) | Manual: Home page hero renders; CTA navigates to movies | Implemented |
| WM-8293 | Category cards: Action, Adventure, Comedy, Drama, Horror; nav arrows; cards clickable | Jira WM-8293 | `pages/HomePage.js`: genres section (L52–67); `components/GenreCard.js`: `GenreCard` component (L4); `data/streamData.js`: `genres` array (L212–254); `components/NavArrows.js` | `// REQ: WM-8293` in HomePage.js (L19, L52) | Manual: genre cards render; nav arrows cycle pages | Implemented |
| WM-8294 | Device cards: Smartphones, Tablet, Smart TV, Laptops, Gaming Consoles, VR Headsets | Jira WM-8294 | `pages/HomePage.js`: devices section (L70–85); `components/DeviceCard.js`: `DeviceCard` component (L51); `data/streamData.js`: `devices` array (L257–304) | `// REQ: WM-8294` in HomePage.js (L20, L71) | Manual: 6 device cards render | Implemented |
| WM-8295 | FAQ accordion: heading, 8 items numbered 01-08, plus/minus icons, Ask a Question CTA | Jira WM-8295 | `components/FAQSection.js`: `faqData` array (L9–63), `renderFAQItem()` (L97–136), `handleAskQuestion()` (L83–86), `FAQSection` component (L67) | `// REQ: WM-8295` in FAQSection.js (L8, L62, L66–70, L100, L105) | Manual: 8 FAQ items, numbered, plus/minus icon toggles | Implemented |
| WM-8296 | Pricing: Monthly/Yearly tabs (Monthly default); Basic/Standard/Premium plans; Start Free Trial + Choose Plan buttons | Jira WM-8296 | `pages/HomePage.js`: subscriptions section (L95–131), `billingCycle` state `useState('monthly')` (L35); `components/PlanCard.js`: `displayPrice` logic (L47–50), action buttons (L72–83); `data/streamData.js`: `subscriptionPlans` array (L307–344) | `// REQ: WM-8296` in PlanCard.js (L7–8, L43, L62, L66), HomePage.js (L22, L35, L104) | Manual: monthly active by default, 3 plan cards, both buttons clickable | Implemented |
| WM-8297 | Movies & Shows hero for Avengers: Endgame; hero controls interactive | Jira WM-8297 | `components/MovieHeroBanner.js`: `MovieHeroBanner` component (L23), Play Now button (L60–68), nav prev/next (L120–155); `pages/MoviesShowsPage.js`: `heroMovies = movies.slice(0, 5)` (L41), `handleHeroPrev` (L44), `handleHeroNext` (L46) | `// REQ: WM-8297` in MovieHeroBanner.js (L9–10, L53), MoviesShowsPage.js (implicit in hero section) | Manual: hero shows first movie; prev/next arrows cycle; Play Now navigates | Implemented |
| WM-8298 | Movies and Shows labeled sections with card-like content areas | Jira WM-8298 | `pages/MoviesShowsPage.js`: Movies section (L133–163) with `id="movies-heading"` (L140), Shows section (L166–195) with `id="shows-heading"` (L173); `components/MovieCard.js`: `MovieCard` component (L4) | `// REQ: WM-8298` not explicit; evidenced by section aria-labels in MoviesShowsPage.js (L133, L166) | Manual: Movies/Shows sections render with cards | Implemented |
| WM-8299 | Show details: Stranger Things hero, Play Now button, seasons/episodes, description, metadata sidebar (Released Year 2022, Director, Music) | Jira WM-8299 | `pages/ShowDetailPage.js`: `defaultShow.year = '2022'` (L22), hero with title (L127), Play Now button (L137), seasons panel (L180), description card (L215), metadata sidebar (L224–332) | `// REQ: WM-8299` in ShowDetailPage.js (L10–12, L21, L62–66, L123, L136, L179, L214, L223, L264, L295, L316) | Manual: show detail renders; sidebar shows 2022; all sidebar labels present | Implemented |
| WM-8300 | CTA banner with "Start a Free Trail" typo; footer with "Gernes" column; copyright "@2023 streamvib" | Jira WM-8300 | `components/CTABanner.js`: CTA button text "Start a Free Trail" (L47); `components/Footer.js`: `footerColumns` with `heading: 'Gernes'` (L27), copyright "@2023 streamvib, All Rights Reserved" (L158) | `// REQ: WM-8300` in Footer.js (L7–8, L26, L52, L157), CTABanner.js (L47 inline) | Manual: CTA button reads "Start a Free Trail"; footer has "Gernes" column; copyright exact | Implemented |

---

## User Story Trace Matrix with File/Line Evidence

This section provides the granular per-user-story traceability with specific file paths and line
number anchors. Each US is mapped to the smallest stable implementation boundary that owns the
story's core behavior.

### US-001 — View top navigation bar with active-state highlighting

**As a** visitor, **I want** to see the navigation bar highlight the currently active page,
**so that** I always know which section I'm viewing.

| Field | Evidence |
|-------|----------|
| **File** | `components/Navbar.js` |
| **Primary Lines** | L49–104 — `Navbar` component; L92–102 — active/inactive class logic; `item.id === activePage` conditional |
| **Supporting** | `pages/HomePage.js` L47 — `<Navbar activePage="home" ...>`; `pages/MoviesShowsPage.js` L85 — `<Navbar activePage="movies" ...>`; `pages/ShowDetailPage.js` L109 — `<Navbar activePage="movies" ...>` |
| **Data** | `components/Navbar.js` L23–27 — `NAV_ITEMS` array; L31–34 — `PAGE_ROUTES` map |
| **CSS** | `components/Navbar.css` — `.navbar__menu-item--active` class |
| **Status** | Implemented |

### US-002 — Click any nav item without encountering a dead (no-op) click

**As a** visitor, **I want** every navigation item to respond to a click,
**so that** I never encounter a broken or frozen interaction.

| Field | Evidence |
|-------|----------|
| **File** | `components/Navbar.js` |
| **Primary Lines** | L56–80 — `handleNavClick()`: routes `home`/`movies` to `PAGE_ROUTES`; falls back to `SCROLL_TARGETS` for `support`/`subscriptions` |
| **Supporting** | `components/Navbar.js` L31–34 — `PAGE_ROUTES`; L40–43 — `SCROLL_TARGETS`; L63–69 — `navigate(pageRoute)`; L72–79 — `scrollIntoView` fallback |
| **Status** | Implemented |

### US-003 — Navigate back to Home page from logo click

**As a** visitor, **I want** to click the StreamVibe logo and return to the Home page,
**so that** I can always get back to the start.

| Field | Evidence |
|-------|----------|
| **File** | `components/Navbar.js` |
| **Primary Lines** | L84 — `<div className="navbar__logo" onClick={() => navigate && navigate('home')}>` |
| **Supporting** | `App.js` L12–16 — `navigate()` function sets `currentPage` state; L20 — `{currentPage === 'home' && <HomePage ...>}` |
| **Status** | Implemented |

### US-004 — Click Search / Notifications icons without errors

**As a** visitor, **I want** the search and notification icon buttons to respond to clicks,
**so that** I don't encounter broken icon buttons in the header.

| Field | Evidence |
|-------|----------|
| **File** | `components/Navbar.js` |
| **Primary Lines** | L107–120 — Search button with `onClick` handler (graceful no-op with inline comment); L122–135 — Notifications button with `onClick` handler (graceful no-op) |
| **Note** | Per WM-8291: search and notification routing are out of scope; clicks are acknowledged without fabricated destinations |
| **Status** | Implemented (graceful no-op handlers) |

### US-005 — View Home hero section with headline and descriptive paragraph

**As a** visitor, **I want** the home page to display a prominent headline and a paragraph describing StreamVibe,
**so that** I understand what the service offers immediately.

| Field | Evidence |
|-------|----------|
| **File** | `components/HeroSection.js` |
| **Primary Lines** | L55 — `<h1 className="hero__heading">The Best Streaming Experience</h1>`; L56–62 — `<p className="hero__paragraph">` with full description text |
| **Supporting** | `pages/HomePage.js` L49 — `<HeroSection navigate={navigate} />` rendered inside `home-page__hero-wrapper` |
| **Status** | Implemented |

### US-006 — Click "Start Watching Now" CTA to navigate to Movies & Shows

**As a** visitor, **I want** the "Start Watching Now" button in the hero section to take me to the Movies & Shows page,
**so that** I can start browsing content immediately.

| Field | Evidence |
|-------|----------|
| **File** | `components/HeroSection.js` |
| **Primary Lines** | L64–67 — `<button className="hero__cta-btn" onClick={() => navigate('movies')}>` containing SVG play icon and `<span>Start Watching Now</span>` |
| **Supporting** | `App.js` L21 — `{currentPage === 'movies' && <MoviesShowsPage ...>}` — destination rendered when `navigate('movies')` is called |
| **Status** | Implemented |

### US-007 — Browse genre cards (Action/Adventure/Comedy/Drama/Horror)

**As a** visitor, **I want** to see genre cards for Action, Adventure, Comedy, Drama, and Horror on the Home page,
**so that** I can explore content by category.

| Field | Evidence |
|-------|----------|
| **File** | `data/streamData.js` |
| **Primary Lines** | L212–254 — `genres` array export with 5 items: Action (L213), Adventure (L222), Comedy (L231), Drama (L240), Horror (L249) |
| **Supporting** | `pages/HomePage.js` L36–41 — pagination logic over `genres`; L63–67 — `GenreCard` render loop |
| **Supporting** | `components/GenreCard.js` L4–43 — `GenreCard` component rendering `genre.name` (L33) and 2×2 image grid |
| **Status** | Implemented |

### US-008 — Use prev/next arrows to cycle genre card pages

**As a** visitor, **I want** to navigate through genre cards using previous/next arrows,
**so that** I can see all available genres.

| Field | Evidence |
|-------|----------|
| **File** | `pages/HomePage.js` |
| **Primary Lines** | L33 — `const [genrePage, setGenrePage] = useState(0)`; L36 — `const totalGenrePages = Math.ceil(genres.length / genresPerPage)`; L57–62 — `<NavArrows onPrev onNext total current>` wired to `setGenrePage` |
| **Supporting** | `components/NavArrows.js` — `NavArrows` component rendering prev/next buttons |
| **Status** | Implemented |

### US-009 — View six device compatibility cards

**As a** visitor, **I want** to see a section showing six device types StreamVibe supports,
**so that** I know I can watch on my preferred device.

| Field | Evidence |
|-------|----------|
| **File** | `data/streamData.js` |
| **Primary Lines** | L257–304 — `devices` array export with 6 entries: Smartphones (L258), Tablet (L265), Smart TV (L272), Laptops (L279), Gaming Consoles (L286), VR Headsets (L293) |
| **Supporting** | `pages/HomePage.js` L76–85 — renders two rows of `DeviceCard`, 3 per row: `.slice(0, 3)` and `.slice(3, 6)` |
| **Status** | Implemented |

### US-010 — View device card name, icon, and description

**As a** visitor, **I want** each device card to display an icon, name, and short description,
**so that** I understand what each supported device type is.

| Field | Evidence |
|-------|----------|
| **File** | `components/DeviceCard.js` |
| **Primary Lines** | L4–49 — `DeviceIcons` map keyed by `iconType` (smartphone, tablet, tv, laptop, gamepad, vr); L51–62 — `DeviceCard` component renders icon at L57, name at L58 (`device.name`), description at L59 (`device.description`) |
| **Supporting** | `data/streamData.js` L257–304 — each device object has `name`, `iconType`, `description` fields |
| **Status** | Implemented |

### US-011 — View FAQ section with numbered items 01-08

**As a** visitor, **I want** to see a FAQ section with eight numbered questions,
**so that** I can find answers to common questions.

| Field | Evidence |
|-------|----------|
| **File** | `components/FAQSection.js` |
| **Primary Lines** | L9–63 — `faqData` array with 8 items; each item has `num` field: `'01'` (L11), `'02'` (L18), `'03'` (L25), `'04'` (L32), `'05'` (L39), `'06'` (L46), `'07'` (L53), `'08'` (L60); L99 — `<span className="faq-item__number">{item.num}</span>` renders the numbered label |
| **Supporting** | `components/FAQSection.js` L88–89 — split into `leftItems` (items 1-4) and `rightItems` (items 5-8); L143–149 — two-column grid render |
| **Status** | Implemented |

### US-012 — Toggle FAQ item open/close with plus/minus icon

**As a** visitor, **I want** to expand and collapse FAQ answers by clicking on items,
**so that** I can read the answers I'm interested in.

| Field | Evidence |
|-------|----------|
| **File** | `components/FAQSection.js` |
| **Primary Lines** | L69 — `const [openId, setOpenId] = useState(1)` (first item open by default); L77–79 — `toggleFAQ()` function; L97 — `renderFAQItem()` with `onClick={() => toggleFAQ(item.id)}`; L103–116 — plus/minus SVG icons conditional on `openId === item.id`; L118–120 — answer `<p>` rendered only when `openId === item.id` |
| **Status** | Implemented |

### US-013 — Click "Ask a Question" CTA without a dead click

**As a** visitor, **I want** the "Ask a Question" button in the FAQ section to respond to a click,
**so that** the button is never broken or frozen.

| Field | Evidence |
|-------|----------|
| **File** | `components/FAQSection.js` |
| **Primary Lines** | L83–86 — `handleAskQuestion()` function (graceful no-op with inline comment explaining destination is not evidenced); L139 — `<button className="faq-section__ask-btn" onClick={handleAskQuestion}>Ask a Question</button>` |
| **Status** | Implemented (graceful no-op per WM-8295) |

### US-014 — View three subscription plan cards (Basic/Standard/Premium)

**As a** visitor, **I want** to see three plan cards showing pricing and features,
**so that** I can compare subscription options.

| Field | Evidence |
|-------|----------|
| **File** | `data/streamData.js` |
| **Primary Lines** | L307–344 — `subscriptionPlans` array with 3 objects: Basic Plan at `$9.99` (L308), Standard Plan at `$12.99` (L317, `isPopular: true` at L323), Premium Plan at `$14.99` (L326) |
| **Supporting** | `pages/HomePage.js` L126–131 — renders `PlanCard` for each plan; `components/PlanCard.js` L53–85 — `PlanCard` layout with name (L55), description (L56), price (L62–64), action buttons (L67–83) |
| **Status** | Implemented |

### US-015 — Switch billing cycle between Monthly and Yearly tabs

**As a** visitor, **I want** to toggle between monthly and yearly billing to see updated prices,
**so that** I can evaluate the cost of each plan period.

| Field | Evidence |
|-------|----------|
| **File** | `pages/HomePage.js` |
| **Primary Lines** | L35 — `const [billingCycle, setBillingCycle] = useState('monthly')` (Monthly is the default); L105–120 — Monthly tab button with active class when `billingCycle === 'monthly'`; L112–119 — Yearly tab button; L126–131 — `billingCycle` prop passed to each `PlanCard` |
| **Supporting** | `components/PlanCard.js` L47–50 — `displayPrice` computes yearly price (`plan.price * 10`); L52 — `periodLabel` switches between `/year` and `/month` |
| **Status** | Implemented |

### US-016 — Click "Start Free Trial" button without dead click

**As a** visitor, **I want** the "Start Free Trial" plan button to respond to a click,
**so that** the button is never frozen or broken.

| Field | Evidence |
|-------|----------|
| **File** | `components/PlanCard.js` |
| **Primary Lines** | L24–30 — `handleStartTrial()`: scrolls to `#subscriptions-section` element via `scrollIntoView`; L70–74 — `<button ... onClick={handleStartTrial}>Start Free Trial</button>` |
| **Status** | Implemented |

### US-017 — Click "Choose Plan" button without dead click

**As a** visitor, **I want** the "Choose Plan" button to respond to clicks,
**so that** the button is never broken or frozen.

| Field | Evidence |
|-------|----------|
| **File** | `components/PlanCard.js` |
| **Primary Lines** | L37–40 — `handleChoosePlan()` function (acknowledged no-op: checkout destination not evidenced); L75–81 — `<button ... onClick={handleChoosePlan}>Choose Plan</button>` |
| **Status** | Implemented (graceful no-op per WM-8296) |

### US-018 — View Movies & Shows hero banner for first featured movie

**As a** visitor, **I want** to see a full-width hero banner featuring the first movie (Avengers: Endgame) on the Movies & Shows page,
**so that** the page opens with engaging featured content.

| Field | Evidence |
|-------|----------|
| **File** | `pages/MoviesShowsPage.js` |
| **Primary Lines** | L41 — `const heroMovies = movies.slice(0, 5)` (first movie is Avengers: Endgame); L42 — `const heroMovie = heroMovies[heroMovieIndex]` (index 0 by default) |
| **Supporting** | `data/streamData.js` L2–14 — first movie object `id: 1, title: 'Avengers: Endgame'`; `components/MovieHeroBanner.js` L23 — `MovieHeroBanner` component; L54 — `<h1>{movie.title}</h1>`; L55 — `<p>{movie.description}</p>` |
| **Status** | Implemented |

### US-019 — Cycle hero banner using prev/next arrows and dot indicators

**As a** visitor, **I want** to navigate through the hero movies using previous/next arrows and dot indicators,
**so that** I can see all featured content.

| Field | Evidence |
|-------|----------|
| **File** | `pages/MoviesShowsPage.js` |
| **Primary Lines** | L44–45 — `handleHeroPrev`: wraps index back to last item; L46–47 — `handleHeroNext`: wraps to first item; L91–97 — `MovieHeroBanner` receives `onPrev`, `onNext`, `total`, `current` props |
| **Supporting** | `components/MovieHeroBanner.js` L120–157 — nav row with Prev button (L122–133), dot indicators loop `Array.from({ length: total })` (L136–147), Next button (L149–161) |
| **Status** | Implemented |

### US-020 — Click "Play Now" on hero banner to open show detail

**As a** visitor, **I want** to click "Play Now" in the hero banner and be taken to the show detail page,
**so that** I can view the full details of the featured content.

| Field | Evidence |
|-------|----------|
| **File** | `components/MovieHeroBanner.js` |
| **Primary Lines** | L60–68 — Play Now `<button onClick={() => navigate && navigate('show-detail', movie)}>` with SVG icon and `<span>Play Now</span>` text |
| **Supporting** | `App.js` L22 — `{currentPage === 'show-detail' && <ShowDetailPage ... show={selectedShow} />}`; `App.js` L12–16 — `navigate()` stores `data` as `selectedShow` |
| **Status** | Implemented |

### US-021 — View Movies section with card grid and section label "Movies"

**As a** visitor, **I want** to see a labeled "Movies" section with a grid of movie cards,
**so that** I can browse available movies.

| Field | Evidence |
|-------|----------|
| **File** | `pages/MoviesShowsPage.js` |
| **Primary Lines** | L133 — `<section ... aria-labelledby="movies-heading">`; L140 — `<div id="movies-heading">Movies</div>` section label; L152–163 — movie card grid: `visibleMovies.map((movie) => <MovieCard ... />)` |
| **Supporting** | `components/MovieCard.js` L4–59 — `MovieCard` renders poster, title, year, rating, genres |
| **Status** | Implemented |

### US-022 — View Shows section with card grid and section label "Shows"

**As a** visitor, **I want** to see a labeled "Shows" section with a grid of show cards,
**so that** I can browse available TV shows.

| Field | Evidence |
|-------|----------|
| **File** | `pages/MoviesShowsPage.js` |
| **Primary Lines** | L166 — `<section ... aria-labelledby="shows-heading">`; L173 — `<div id="shows-heading">Shows</div>` section label; L185–195 — shows card grid: `visibleShows.map((show) => <MovieCard ... />)` |
| **Supporting** | `data/streamData.js` L114–208 — `shows` array with 8 show objects |
| **Status** | Implemented |

### US-023 — Filter movies and shows by genre tab

**As a** visitor, **I want** to select a genre tab to filter the movies and shows grid,
**so that** I can narrow down content to genres I like.

| Field | Evidence |
|-------|----------|
| **File** | `pages/MoviesShowsPage.js` |
| **Primary Lines** | L11–15 — `allGenres` array (All, Action, Adventure, Comedy, Drama, Horror, Sci-Fi, Thriller, Crime, Fantasy, History); L31 — `const [selectedGenre, setSelectedGenre] = useState('All')`; L50–56 — `filteredMovies` logic; L58–63 — `filteredShows` logic; L85–87 — `handleGenreChange()` resets pagination; L118–130 — genre tab pill buttons with `aria-pressed` and active class |
| **Status** | Implemented |

### US-024 — View show detail page for Stranger Things with synopsis

**As a** visitor, **I want** to see the Stranger Things show detail page with its title and synopsis,
**so that** I can read about the show before watching.

| Field | Evidence |
|-------|----------|
| **File** | `pages/ShowDetailPage.js` |
| **Primary Lines** | L18–34 — `defaultShow` object with `title: 'Stranger Things'` (L20) and `description:` (L27); L127 — `<h1 className="show-detail-page__hero-title">{currentShow.title}</h1>`; L128 — `<p className="show-detail-page__hero-desc">{currentShow.description}</p>` |
| **Supporting** | `data/streamData.js` L114–125 — Stranger Things show entry (id: 101, title, year `'2022'`, description) |
| **Status** | Implemented |

### US-025 — View metadata sidebar showing Released Year 2022, Director, Music

**As a** visitor, **I want** to see the metadata sidebar on the show detail page showing Released Year 2022, Director, and Music fields,
**so that** I can see key production details about the show.

| Field | Evidence |
|-------|----------|
| **File** | `pages/ShowDetailPage.js` |
| **Primary Lines** | L22 — `year: '2022'` in `defaultShow` (intentional per WM-8299); L264 — `<span ... "Released Year"` label; L268 — `<span>{currentShow.year}</span>` renders `2022`; L295 — `Director` label; L305 — `{currentShow.director}` renders `'The Duffer Brothers'`; L316 — `Music` label; L326 — `{currentShow.music}` renders `'Kyle Dixon & Michael Stein'` |
| **Supporting** | `data/streamData.js` L121 — `year: '2022'`; L123 — `director: 'The Duffer Brothers'`; L124 — `music: 'Kyle Dixon & Michael Stein'` |
| **Status** | Implemented |

### US-026 — Navigate seasons/episodes list within show detail page

**As a** visitor, **I want** to switch between seasons and select episodes on the show detail page,
**so that** I can navigate through the show's content.

| Field | Evidence |
|-------|----------|
| **File** | `pages/ShowDetailPage.js` |
| **Primary Lines** | L79 — `const [selectedSeason, setSelectedSeason] = useState(1)`; L80 — `const [selectedEpisode, setSelectedEpisode] = useState(1)`; L81 — `const episodes = seasonEpisodes[selectedSeason] || []`; L180 — Seasons and Episodes panel heading; L183–190 — season tab buttons calling `setSelectedSeason(i + 1)` on click; L192–212 — episode list items calling `setSelectedEpisode(ep.num)` on click |
| **Supporting** | `pages/ShowDetailPage.js` L36–70 — `seasonEpisodes` map with 4 seasons (S1: 8 eps, S2: 4 eps, S3: 3 eps, S4: 3 eps) |
| **Status** | Implemented |

### US-027 — View CTA banner ("Start a Free Trail") and footer with "Gernes" column

**As a** visitor, **I want** to see the CTA banner and footer on every page,
**so that** I can access subscription prompts and navigation links from anywhere.

| Field | Evidence |
|-------|----------|
| **File** | `components/CTABanner.js` |
| **Primary Lines** | L47 — `<button className="cta-banner__btn">Start a Free Trail</button>` (intentional typo per WM-8300) |
| **File** | `components/Footer.js` |
| **Primary Lines** | L27 — `heading: 'Gernes'` in `footerColumns` (intentional typo per WM-8300); L158 — `@2023 streamvib, All Rights Reserved` copyright text |
| **Supporting** | `pages/HomePage.js` L135 — `<CTABanner />`; L138 — `<Footer ...>`; `pages/MoviesShowsPage.js` L198 — `<CTABanner />`; L201 — `<Footer ...>`; `pages/ShowDetailPage.js` L334 — `<CTABanner />`; L338 — `<Footer ...>` (all three pages include both components) |
| **Status** | Implemented |

---

## Inline Requirement ID Convention

Inline markers follow the format: `// REQ: <WM-XXXX> - <short hint>`

Placed at:

- The primary component function definition, OR
- The specific data/text that implements the requirement (e.g., typo strings, year values, column labels)

Examples already present in the codebase:

- `components/Navbar.js` L8–9: `REQ: WM-8291 - Global Navigation Shell: active item styling + no dead clicks.`
- `components/FAQSection.js` L8: `REQ: WM-8295 - 8 numbered items (01-08), open/close behavior with plus/minus icons.`
- `components/Footer.js` L26: `REQ: WM-8300 - Exact Figma label "Gernes" (intentional typo per design spec)`
- `pages/ShowDetailPage.js` L22: `REQ: WM-8299 - Released Year 2022 per design metadata sidebar`

---

## Update Rules

When the codebase changes, the trace matrix must be kept current. The following rules apply.

1. **When a requirement changes**: Update the requirement statement in both the Requirement Inventory table and the WM Epics Trace Matrix. Update the Source column. Review the inline `// REQ:` comments at the cited file/line locations and update the short hint if the ownership has moved.

2. **When code is refactored (moved/renamed/split/merged)**: Update all file paths and line numbers in the US Trace Matrix. Move inline requirement markers with the owning logic. Update the `Implementation Mapping` and `Inline Code Trace` columns in the WM Epics Trace Matrix. Do not leave stale paths.

3. **When user story evidence changes**: If a new component or file implements or supersedes the evidence for a US, update the corresponding US section's `File`, `Primary Lines`, and `Supporting` rows. Reset Status to `Partial` until the new mapping is verified.

4. **When tests are added**: Update the Verification column in the WM Epics Trace Matrix and set Status to `Implemented`. Cross-reference the US story where the test was added.

5. **When intentional typos need correction**: Do NOT correct `"Start a Free Trail"` in `CTABanner.js` L47, `"Gernes"` in `Footer.js` L27, or `"@2023 streamvib"` in `Footer.js` L158 — they match the design spec per WM-8300.

6. **Line number drift**: Because exact line numbers drift as code evolves, prefer using stable anchors (function names, JSX id attributes, data field names, const variable names) alongside line numbers when citing evidence. When line numbers change significantly, re-read the affected files and update all impacted rows.

---

## Verification Artifacts Policy

All requirements in this document are currently verified manually by loading the running React application.

**Home page** (`http://localhost:3000`):

- Navigate through all sections to verify US-001 through US-017.
- Confirm active nav highlighting (US-001), no dead clicks (US-002, US-003, US-004, US-013, US-016, US-017).
- Confirm hero text and CTA (US-005, US-006).
- Confirm 5 genre cards and arrow cycling (US-007, US-008).
- Confirm 6 device cards with name/icon/description (US-009, US-010).
- Confirm 8 FAQ items with numbered labels and plus/minus icons (US-011, US-012).
- Confirm 3 plan cards, monthly/yearly tab toggle (US-014, US-015).

**Movies & Shows page** (click "Movies & Shows" in navbar):

- Confirm hero banner shows Avengers: Endgame on first load (US-018).
- Confirm prev/next hero cycling and dot indicators (US-019).
- Confirm "Play Now" navigates to show detail (US-020).
- Confirm "Movies" and "Shows" labeled sections with grids (US-021, US-022).
- Confirm genre filter tab updates both grids (US-023).

**Show Detail page** (click any movie/show card):

- Confirm Stranger Things title, synopsis, and hero (US-024).
- Confirm metadata sidebar: Released Year = 2022, Director, Music fields (US-025).
- Confirm season tabs and episode list navigation (US-026).

**All pages**:

- Confirm CTA banner button reads "Start a Free Trail" (US-027 / WM-8300).
- Confirm Footer has "Gernes" column heading and "@2023 streamvib" copyright (US-027 / WM-8300).

Automated verification via React Testing Library is recommended but not currently implemented.
When tests are added, the Verification Mapping column in the WM Epics Trace Matrix and the
corresponding US sections should be updated accordingly.

---

## End-of-Work Checklist

The following checklist confirms that the traceability in this document meets the quality bar
required by the Requirement Traceability Enforcement skill.

- All 27 user stories (US-001..US-027) drawn from the WM-8291..WM-8300 epic scope have been inventoried and assigned a US ID.
- A full trace matrix exists for the 10 WM epics with Implementation Mapping, Inline Code Trace, Verification, and Status columns.
- A per-story evidence section exists for every US-001..US-027 with file path, primary line number ranges, and supporting evidence.
- All mapped file paths (`components/Navbar.js`, `components/HeroSection.js`, `pages/HomePage.js`, `components/GenreCard.js`, `components/DeviceCard.js`, `components/FAQSection.js`, `components/PlanCard.js`, `components/MovieHeroBanner.js`, `pages/MoviesShowsPage.js`, `pages/ShowDetailPage.js`, `components/CTABanner.js`, `components/Footer.js`, `data/streamData.js`, `App.js`, `components/MovieCard.js`) exist in the repository at the time of this writing.
- Intentional typos (`"Start a Free Trail"`, `"Gernes"`, `"@2023 streamvib"`) are documented and must not be corrected.
- No fabricated requirements, destinations, or file paths are present; all gaps are explicitly labeled.
