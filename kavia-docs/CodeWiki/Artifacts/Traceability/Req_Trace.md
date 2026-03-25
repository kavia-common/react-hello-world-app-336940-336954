# Req_Trace — StreamVibe Requirements Traceability Matrix

## Document Purpose and Scope

This document is the authoritative requirements traceability record for the StreamVibe laptop UI
implementation. It is scoped exclusively to Jira epics **WM-8291..WM-8300** and user stories
**US-001..US-027** (Jira keys WM-8301..WM-8327) as defined in the authoritative ticket list provided
by project stakeholders.

The core purpose of this document is to **compare current implementation vs each ticket requirement**
and provide file/line evidence for every mapping. Each requirement row states what the ticket requires
and then confirms (or identifies gaps in) what the current codebase actually contains.

All file paths are relative to `hello_world_frontend/src/` unless stated otherwise.
Line numbers are 1-indexed and reflect the codebase as read during this document's creation.

> **Scope Notice:** This document covers only WM-8291..WM-8300 / US-001..US-027.
> Any prior traceability content has been superseded by this document.

---

## Inline Requirement ID Convention

All inline `// REQ:` markers in the codebase follow the format:

```js
// REQ: WM-XXXX - <short description of what is enforced here>
```

or as JSDoc block comment entries:

```js
/**
 * REQ: WM-XXXX - <short description>
 */
```

Markers are placed at the primary component definition, data constant declaration, or enforcement
point (e.g., where a typo value is set, where an `onClick` handler is defined, or where a specific
field value is hardcoded per the design spec). This convention ensures traceability survives refactors
because function/symbol names are stable, whereas line numbers shift.

---

## Known Intentional Design Spec Values

The following values appear incorrect but are **intentional** per the Figma design spec.
Any "correction" of these values in the implementation is a defect relative to the design spec.

| Value | File | Line | Ticket | Notes |
|---|---|---|---|---|
| `"Start a Free Trail"` (not "Trial") | `components/CTABanner.js` | L47 | WM-8300 | Intentional typo per Figma |
| `"Gernes"` (not "Genres") | `components/Footer.js` | L27 | WM-8300 | Intentional typo per Figma |
| `"@2023 streamvib, All Rights Reserved"` | `components/Footer.js` | L158 | WM-8300 | Lowercase, `@` not `©`, intentional per Figma |
| `year: '2022'` | `pages/ShowDetailPage.js` | L22 | WM-8299 | Released Year in sidebar = 2022 per spec |

---

## Scope: Epic and User Story Index

### Epics (WM-8291..WM-8300)

| Epic Key | Epic Summary |
|---|---|
| WM-8291 | StreamVibe Laptop — Global Navigation Shell |
| WM-8292 | StreamVibe Laptop — Home Hero Value Proposition |
| WM-8293 | StreamVibe Laptop — Home Category Exploration |
| WM-8294 | StreamVibe Laptop — Home Device Compatibility Section |
| WM-8295 | StreamVibe Laptop — Home FAQ Accordion |
| WM-8296 | StreamVibe Laptop — Pricing Plans + Billing Tabs |
| WM-8297 | StreamVibe Laptop — Movies & Shows Page Featured Hero + Slider |
| WM-8298 | StreamVibe Laptop — Movies & Shows Content Sections |
| WM-8299 | StreamVibe Laptop — Show Details Open State (Stranger Things) |
| WM-8300 | StreamVibe Laptop — Reusable Free Trial CTA + Footer |

### User Stories (US-001..US-027)

| US ID | Jira Key | Epic Key | User Story Summary |
|---|---|---|---|
| US-001 | WM-8301 | WM-8291 | Render StreamVibe navbar with logo and menu labels |
| US-002 | WM-8302 | WM-8291 | Active nav item matches current screen state |
| US-003 | WM-8303 | WM-8291 | Render navbar icon button group as interactive controls |
| US-004 | WM-8304 | WM-8292 | Render home hero heading/paragraph and Start Watching Now CTA |
| US-005 | WM-8305 | WM-8292 | Start Watching Now CTA is clickable and handled (no dead click) |
| US-006 | WM-8306 | WM-8293 | Render category cards with labels and icons |
| US-007 | WM-8307 | WM-8293 | Category cards are interactive (clickable) |
| US-008 | WM-8308 | WM-8294 | Render device compatibility cards with titles and copy |
| US-009 | WM-8309 | WM-8295 | Render FAQ list with 8 numbered questions (01-08) |
| US-010 | WM-8310 | WM-8295 | FAQ item 01 supports open state with answer and minus icon |
| US-011 | WM-8311 | WM-8295 | FAQ items toggle open/closed and plus/minus icon updates |
| US-012 | WM-8312 | WM-8295 | Render Ask a Question CTA and handle click deterministically |
| US-013 | WM-8313 | WM-8296 | Render pricing section with monthly plans/prices and tabs |
| US-014 | WM-8314 | WM-8296 | Plan card CTAs (Start Free Trial / Choose Plan) are clickable |
| US-015 | WM-8315 | WM-8296 | Billing period tabs switch active styling (Monthly/Yearly) |
| US-016 | WM-8316 | WM-8297 | Movies & Shows hero renders Avengers: Endgame title and paragraph |
| US-017 | WM-8317 | WM-8297 | Movies & Shows hero controls render as interactive (label/outcome unknown) |
| US-018 | WM-8318 | WM-8297 | Movies & Shows featured hero slider controls are rendered and interactive |
| US-019 | WM-8319 | WM-8298 | Render Movies section label and card-like content area |
| US-020 | WM-8320 | WM-8298 | Render Shows section label and card-like content area |
| US-021 | WM-8321 | WM-8299 | Shows Open hero renders Stranger Things title and synopsis |
| US-022 | WM-8322 | WM-8299 | Play Now button exists and click is handled (no dead click) |
| US-023 | WM-8323 | WM-8299 | Render Seasons and Episodes panel container |
| US-024 | WM-8324 | WM-8299 | Render Description panel with exact synopsis text |
| US-025 | WM-8325 | WM-8299 | Render metadata sidebar labels/containers (Released Year 2022, Director, Music, etc.) |
| US-026 | WM-8326 | WM-8300 | Render free-trial CTA section on all screens (preserve typo) |
| US-027 | WM-8327 | WM-8300 | Render footer headings/links and policy items exactly as in Figma |

---

## Epic-Level Requirement Trace Matrix (WM-8291..WM-8300)

This table maps each WM epic to its implementation. The **Ticket Requirement** column states what the
ticket requires; the **Implementation Evidence** column states what is actually in the codebase; and
the **Status** column reflects the comparison result.

| Req ID | Ticket Requirement | Implementation Evidence | Inline REQ Marker | Verification | Status | Notes |
|---|---|---|---|---|---|---|
| WM-8291 | Global top navigation shell: logo, 4 menu labels (Home, Movies & Shows, Support, Subscriptions), active item highlighting, no dead clicks on any navbar interactive element | `components/Navbar.js`: `NAV_ITEMS` array at L23–L27 defines all 4 labels; logo rendered at L84–L86 via `<StreamVibeLogo>`; active class applied via `item.id === activePage` at L91–L98; `handleNavClick()` at L56–L81 ensures no dead clicks; Search/Notifications icon buttons at L107–L136 have `onClick` handlers | `Navbar.js` L7–L9: `REQ: WM-8291 - Global Navigation Shell: active item styling + no dead clicks`; L84–L86, L88–L90, L107, L121: inline REQ comments | Manual: render navbar, confirm 4 items, click each; confirm active highlight; no dead clicks | **Implemented** | Search and Notification destinations are out of scope per spec |
| WM-8292 | Home hero section: headline "The Best Streaming Experience", descriptive paragraph about StreamVibe, "Start Watching Now" CTA button that navigates (no dead click) | `components/HeroSection.js` L55: `<h1>The Best Streaming Experience</h1>`; L56–L63: full `<p>` paragraph; L64–L68: `<button onClick={() => navigate('movies')}>Start Watching Now</button>`; `pages/HomePage.js` L47–L50: `<HeroSection navigate={navigate} />` | `pages/HomePage.js` L17: `REQ: WM-8292 - Home hero value proposition section` | Manual: hero heading visible; CTA navigates to movies page | **Implemented** | Fully matches ticket spec |
| WM-8293 | Home category exploration: genre cards for Action, Adventure, Comedy, Drama, Horror with labels and icons; navigation arrows to cycle; cards interactive | `data/streamData.js` L212–L254: 5 genre objects; `components/GenreCard.js` L4–L44: renders 2×2 image grid + label; `pages/HomePage.js` L57–L66: renders `GenreCard` loop; L33: `genrePage` state; L36–L42: pagination | `pages/HomePage.js` L18–L19: `REQ: WM-8293` | Manual: 5 genre cards visible; labels correct; arrows cycle | **Partial** | GenreCard has no `onClick` handler — US-007 is Partial |
| WM-8294 | Home device compatibility section: 6 device cards — Smartphones, Tablet, Smart TV, Laptops, Gaming Consoles, VR Headsets — each with title and descriptive copy | `data/streamData.js`: 6 device objects with `name` and `description`; `components/DeviceCard.js` L51–L62: renders icon + `device.name` + `device.description`; `pages/HomePage.js` L75–L84: two rows of 3 `DeviceCard` each | `pages/HomePage.js` L20: `REQ: WM-8294` | Manual: 6 device cards visible with correct names and descriptions | **Implemented** | Fully matches ticket spec |
| WM-8295 | FAQ accordion: heading, 8 items numbered 01–08; item 01 open by default with minus icon; all items toggle open/closed with plus/minus icons; Ask a Question CTA handled | `components/FAQSection.js` L9–L63: `faqData` array (8 items, `num` fields `'01'`–`'08'`); L69: `useState(1)` (item 1 open by default); L77–L79: `toggleFAQ()`; L83–L86: `handleAskQuestion()` no-op; L103–L116: plus/minus SVG icons | `FAQSection.js` L7–L8: `REQ: WM-8295`; L63–L70: inline REQ comments | Manual: 8 FAQ items numbered 01–08; item 1 open by default; toggle works; Ask a Question responds | **Implemented** | Ask a Question CTA is graceful no-op as destination not evidenced |
| WM-8296 | Pricing plans: Monthly tab active by default; Yearly tab switches pricing; 3 plan cards (Basic $9.99, Standard $12.99 Popular, Premium $14.99); Start Free Trial + Choose Plan buttons clickable | `pages/HomePage.js` L35: `useState('monthly')`; L105–L120: Monthly/Yearly tab buttons; L126–L130: `PlanCard` loop; `data/streamData.js`: 3 plan objects with correct prices; `components/PlanCard.js` L24–L30: `handleStartTrial()`; L37–L40: `handleChoosePlan()` | `PlanCard.js` L7–L8: `REQ: WM-8296`; `pages/HomePage.js` L22: `REQ: WM-8296` | Manual: monthly active; 3 plan cards with correct prices; buttons respond to click | **Implemented** | Choose Plan is graceful no-op (checkout not evidenced) |
| WM-8297 | Movies & Shows featured hero: first movie is Avengers: Endgame; title and paragraph rendered; Play Now, Add to Watchlist, Like, Volume icon buttons interactive; slider prev/next arrows and dot indicators interactive | `data/streamData.js` L2–L14: first movie `title: 'Avengers: Endgame'`; `components/MovieHeroBanner.js` L54: `<h1>{movie.title}</h1>`; L55: `<p>{movie.description}</p>`; L61–L68: Play Now `onClick`; L73–L115: icon buttons with handlers; L120–L160: nav row with prev/next + indicators | `MovieHeroBanner.js` L9–L10: `REQ: WM-8297`; L27–L29: `REQ: WM-8291` | Manual: Avengers: Endgame on first load; prev/next cycle hero; Play Now navigates; icons respond | **Implemented** | Fully matches ticket spec |
| WM-8298 | Movies & Shows content sections: "Movies" labeled section with card grid; "Shows" labeled section with card grid | `pages/MoviesShowsPage.js` L133–L164: `<section aria-labelledby="movies-heading">`; L140: `<div id="movies-heading">Movies</div>`; L151–L163: `visibleMovies.map` grid; L166–L195: `<section aria-labelledby="shows-heading">`; L173: `<div id="shows-heading">Shows</div>` | No explicit `// REQ: WM-8298` markers in code (evidence via section id and aria attributes) | Manual: Movies and Shows sections each render their label and grid | **Implemented** | No inline REQ markers; recommend adding at `id="movies-heading"` and `id="shows-heading"` |
| WM-8299 | Show details open state for Stranger Things: hero with title + synopsis; Play Now button; Seasons & Episodes panel; Description panel; metadata sidebar with Released Year 2022, Director (The Duffer Brothers), Music (Kyle Dixon & Michael Stein) | `pages/ShowDetailPage.js` L18–L33: `defaultShow` object (`title:'Stranger Things'`, `year:'2022'`, director, music); L127: `<h1>{currentShow.title}</h1>`; L128: description; L137: Play Now button with `onClick`; L180: Seasons and Episodes heading; L183–L212: season tabs + episodes; L215–L219: Description card; sidebar rows at L258–L336 (Released Year, Director, Music) | `ShowDetailPage.js` L9–L13: `REQ: WM-8299` ×3; L22: `REQ: WM-8299`; L63–L70: multiple REQ comments | Manual: Stranger Things title and synopsis visible; Play Now responds; sidebar shows 2022, Duffer Brothers; season/episode navigation works | **Implemented** | Intentional year value 2022 per design spec |
| WM-8300 | Reusable free-trial CTA section (button text "Start a Free Trail") and footer on all screens; footer has headings: Home, Movies, Gernes, Support, Subscription, Connect With Us; copyright "@2023 streamvib, All Rights Reserved" | `components/CTABanner.js` L47: `<button>Start a Free Trail</button>`; `components/Footer.js` L14–L47: `footerColumns` (Home, Movies, Gernes at L27, Support, Subscription); L100–L102: Connect With Us; L158: `@2023 streamvib, All Rights Reserved`; presence on all 3 pages confirmed | `Footer.js` L7–L8: `REQ: WM-8300`; L27: `REQ: WM-8300` (Gernes typo); L158: `REQ: WM-8300` (copyright) | Manual: CTA "Start a Free Trail" on all pages; footer "Gernes" column; copyright exact | **Implemented** | Intentional typos preserved per Figma spec |

---

## User Story Trace Matrix (US-001..US-027)

This section provides a complete per-story comparison of **ticket requirement vs current implementation**
with specific file/line evidence for every story.

| US ID | Jira Key | Ticket Requirement | Implementation File(s) | Key Evidence (File: Lines / Symbols) | Inline REQ Marker | Status | Ticket vs Implementation |
|---|---|---|---|---|---|---|---|
| US-001 | WM-8301 | Render StreamVibe navbar with logo and menu labels (Home, Movies & Shows, Support, Subscriptions) | `components/Navbar.js` | L23–L27: `NAV_ITEMS` array; L84–L86: `<StreamVibeLogo>`; L88–L101: `NAV_ITEMS.map` renders all 4 labels | L7–L9: `REQ: WM-8291` | **Implemented** | ✅ Match — logo and all 4 menu labels present |
| US-002 | WM-8302 | Active nav item visually matches current screen (Home or Movies & Shows) | `components/Navbar.js`, `pages/HomePage.js`, `pages/MoviesShowsPage.js`, `pages/ShowDetailPage.js` | L91–L98: `item.id === activePage ? 'navbar__menu-item--active' : '...'`; `HomePage.js` passes `activePage="home"`; `MoviesShowsPage.js` / `ShowDetailPage.js` pass `activePage="movies"` | L88–L90: `REQ: WM-8291 - Active item styling per current page` | **Implemented** | ✅ Match — active class driven by `activePage` prop from each page |
| US-003 | WM-8303 | Render Search and Notifications icon buttons as interactive controls (no dead clicks) | `components/Navbar.js` | L107–L119: Search `<button>` with `onClick` handler; L121–L136: Notifications `<button>` with `onClick` handler; L103–L105: `<div className="navbar__icons">` wrapper | L103–L105: `REQ: WM-8291 - Icon buttons rendered and interactive (no dead clicks)` | **Implemented** | ✅ Match — both icon buttons render and respond to clicks; graceful no-ops per spec |
| US-004 | WM-8304 | Render home hero heading "The Best Streaming Experience", descriptive paragraph, "Start Watching Now" CTA button | `components/HeroSection.js` | L55: `<h1>The Best Streaming Experience</h1>`; L56–L63: `<p>` paragraph text; L64–L68: `<button>Start Watching Now</button>` | `pages/HomePage.js` L17: `REQ: WM-8292` | **Implemented** | ✅ Match — exact heading text, paragraph, and CTA button all present |
| US-005 | WM-8305 | "Start Watching Now" CTA is clickable and handled (no dead click); navigates to Movies & Shows | `components/HeroSection.js`, `src/App.js` | `HeroSection.js` L64: `onClick={() => navigate('movies')}`; `App.js` L21: `{currentPage === 'movies' && <MoviesShowsPage ...>}` confirms destination | (no separate marker; handler is a direct `navigate('movies')` call) | **Implemented** | ✅ Match — CTA click handled and navigates to movies page deterministically |
| US-006 | WM-8306 | Render category cards for Action, Adventure, Comedy, Drama, Horror with labels and imagery | `data/streamData.js`, `components/GenreCard.js`, `pages/HomePage.js` | `streamData.js`: 5 genre objects (Action, Adventure, Comedy, Drama, Horror); `GenreCard.js` L7–L30: 2×2 image grid; L33: `{genre.name}` label; `HomePage.js` L57–L66: render loop | `pages/HomePage.js` L18–L19: `REQ: WM-8293` | **Implemented** | ✅ Match — 5 genre cards with names and image grids rendered |
| US-007 | WM-8307 | Genre cards are interactive / clickable (no dead click when card is clicked) | `components/GenreCard.js` | No `onClick` handler on `GenreCard` root `<div>` or its footer. Arrow icon at L35–L39 is decorative only. No `role="button"` or interactive signal | (none — no handler exists) | **Partial** | ⚠️ Gap — Cards render visually but are NOT programmatically interactive. Add `onClick` to the `genre-card` wrapper div. |
| US-008 | WM-8308 | Render 6 device compatibility cards with device title and descriptive copy | `data/streamData.js`, `components/DeviceCard.js`, `pages/HomePage.js` | `streamData.js`: 6 device objects with `name` and `description` (Smartphones, Tablet, Smart TV, Laptops, Gaming Consoles, VR Headsets); `DeviceCard.js` L51–L62: renders icon, `device.name`, `device.description`; `HomePage.js` L75–L84: two rows of 3 | `pages/HomePage.js` L20: `REQ: WM-8294` | **Implemented** | ✅ Match — all 6 device cards with name and description |
| US-009 | WM-8309 | Render FAQ list with exactly 8 numbered questions labeled 01–08 | `components/FAQSection.js` | L9–L63: `faqData` array with 8 items; `num` fields: `'01'`–`'08'`; L99: `<span>{item.num}</span>`; L88–L89: split 4+4 into left/right columns | `FAQSection.js` L7–L8: `REQ: WM-8295` | **Implemented** | ✅ Match — exactly 8 items with labels 01–08 in two columns |
| US-010 | WM-8310 | FAQ item 01 defaults to open state showing answer text and minus icon | `components/FAQSection.js` | L69: `useState(1)` — item `id: 1` (= num `'01'`) open by default; L103–L110: minus SVG shown when `openId === item.id`; L118–L120: answer `<p>` shown only when open | `FAQSection.js` L63–L70: REQ markers include open/close behavior | **Implemented** | ✅ Match — item 01 open by default with answer and minus icon |
| US-011 | WM-8311 | All 8 FAQ items support toggle open/closed; plus/minus icon updates on toggle | `components/FAQSection.js` | L77–L79: `toggleFAQ = (id) => setOpenId(openId === id ? null : id)`; L97: `onClick={() => toggleFAQ(item.id)}`; L100: `onKeyDown` for keyboard support; L103–L116: plus/minus SVG conditional on `openId === item.id` | `FAQSection.js` L63: inline REQ | **Implemented** | ✅ Match — all 8 items toggle; exactly one open at a time; icons update |
| US-012 | WM-8312 | "Ask a Question" CTA button renders and responds to click deterministically | `components/FAQSection.js` | L83–L86: `handleAskQuestion()` graceful no-op; L139: `<button onClick={handleAskQuestion}>Ask a Question</button>` | `FAQSection.js` L63: `REQ: WM-8295 - Ask a Question CTA handled` | **Implemented** | ✅ Match — CTA renders and responds; graceful no-op per spec |
| US-013 | WM-8313 | Render pricing section: Monthly tab active by default; Yearly tab; 3 plan cards (Basic $9.99, Standard $12.99 Popular, Premium $14.99) | `pages/HomePage.js`, `data/streamData.js`, `components/PlanCard.js` | `HomePage.js` L35: `useState('monthly')`; L105–L120: Monthly/Yearly tab buttons; `streamData.js`: Basic `$9.99`, Standard `$12.99` `isPopular: true`, Premium `$14.99`; `PlanCard.js` L47–L50: `displayPrice` logic | `PlanCard.js` L7–L8: `REQ: WM-8296`; `HomePage.js` L22: `REQ: WM-8296` | **Implemented** | ✅ Match — monthly default, 3 plans with correct prices, Popular badge on Standard |
| US-014 | WM-8314 | "Start Free Trial" and "Choose Plan" buttons on plan cards respond to clicks (no dead clicks) | `components/PlanCard.js` | L24–L30: `handleStartTrial()` scrolls to `#subscriptions-section`; L67–L72: Start Free Trial `<button onClick={handleStartTrial}>`; L37–L40: `handleChoosePlan()` graceful no-op; L75–L81: Choose Plan `<button onClick={handleChoosePlan}>` | `PlanCard.js` L19–L22: `REQ: WM-8296 - Deterministic handling`; L62–L66: inline | **Implemented** | ✅ Match — both buttons respond; Start Free Trial scrolls; Choose Plan is graceful no-op |
| US-015 | WM-8315 | Billing period tabs switch active styling when clicked (Monthly/Yearly) | `pages/HomePage.js` | L35: `const [billingCycle, setBillingCycle] = useState('monthly')`; L105–L110: Monthly tab applies `--active` class when `billingCycle === 'monthly'`; L112–L119: Yearly tab applies `--active` class when `billingCycle === 'yearly'`; `PlanCard.js` L47–L50: `displayPrice` recalculates on `billingCycle` prop change | `pages/HomePage.js` L22: `REQ: WM-8296` | **Implemented** | ✅ Match — active class switches on tab click; prices recalculate |
| US-016 | WM-8316 | Movies & Shows hero renders "Avengers: Endgame" title and paragraph on first load | `data/streamData.js`, `components/MovieHeroBanner.js`, `pages/MoviesShowsPage.js` | `streamData.js` L2–L14: first movie `title: 'Avengers: Endgame'`; `MoviesShowsPage.js` L41: `movies.slice(0, 5)`; L42: `heroMovies[heroMovieIndex]` defaults to index 0; `MovieHeroBanner.js` L54: `<h1>{movie.title}</h1>`; L55: `<p>{movie.description}</p>` | `MovieHeroBanner.js` L9–L10: `REQ: WM-8297` | **Implemented** | ✅ Match — first movie is Avengers: Endgame; title and paragraph on initial load |
| US-017 | WM-8317 | Hero secondary icon buttons (Add to Watchlist, Like, Volume) render as interactive; outcome not specified | `components/MovieHeroBanner.js` | L32–L35: `handleIconAction(action)` graceful no-op; L73–L84: Add to Watchlist `<button onClick={() => handleIconAction('add-to-watchlist')}>`; L86–L99: Like button; L101–L115: Volume/Sound button | `MovieHeroBanner.js` L27–L29: `REQ: WM-8291 - No dead clicks` | **Implemented** | ✅ Match — all 3 icon buttons render and respond to clicks; graceful no-op per spec |
| US-018 | WM-8318 | Featured hero slider prev/next arrow buttons and dot indicators are rendered and interactive | `components/MovieHeroBanner.js`, `pages/MoviesShowsPage.js` | `MoviesShowsPage.js` L44–L45: `handleHeroPrev` wraps around; L46–L47: `handleHeroNext` wraps around; `MovieHeroBanner.js` L120–L133: Previous `<button aria-label="Previous movie" onClick={onPrev}>`; L149–L161: Next `<button aria-label="Next movie" onClick={onNext}>`; L136–L147: dot indicators with `role="tab"` | `MovieHeroBanner.js` L119 (nav comment): `REQ: WM-8297 - Slider arrows/indicators as interactive controls` | **Implemented** | ✅ Match — prev/next arrows functional with wrap-around; dot indicators reflect current index |
| US-019 | WM-8319 | Render "Movies" labeled section with card-like content grid | `pages/MoviesShowsPage.js` | L133: `<section aria-labelledby="movies-heading">`; L140: `<div id="movies-heading">Movies</div>`; L151–L163: `visibleMovies.map` → `<MovieCard>` grid | (no explicit `// REQ: WM-8298` marker — evidenced by section id and aria attributes) | **Implemented** | ✅ Match — "Movies" label and card grid both present |
| US-020 | WM-8320 | Render "Shows" labeled section with card-like content grid | `pages/MoviesShowsPage.js` | L166: `<section aria-labelledby="shows-heading">`; L173: `<div id="shows-heading">Shows</div>`; L184–L194: `visibleShows.map` → `<MovieCard>` grid | (no explicit `// REQ: WM-8298` marker — evidenced by section id and aria attributes) | **Implemented** | ✅ Match — "Shows" label and card grid both present |
| US-021 | WM-8321 | Show Detail page hero renders "Stranger Things" title and exact synopsis | `pages/ShowDetailPage.js` | L18–L33: `defaultShow` object: `title: 'Stranger Things'` (L20), `description: 'When a young boy vanishes...'` (L27); L127: `<h1>{currentShow.title}</h1>`; L128: `<p>{currentShow.description}</p>` | `ShowDetailPage.js` L9–L11: `REQ: WM-8299 - Show details: Stranger Things title/synopsis` | **Implemented** | ✅ Match — title "Stranger Things" and full synopsis rendered in hero |
| US-022 | WM-8322 | "Play Now" button exists and click is handled (no dead click) | `pages/ShowDetailPage.js` | L86–L89: `handlePlayNow()` graceful no-op; L137–L144: `<button onClick={handlePlayNow}>...<span>Play Now</span></button>` | `ShowDetailPage.js` L136: `/* REQ: WM-8299 - Play Now button */` | **Implemented** | ✅ Match — Play Now renders and handles click; graceful no-op per spec |
| US-023 | WM-8323 | Render Seasons and Episodes panel container with season tabs and episode list | `pages/ShowDetailPage.js` | L180: `<h2>Seasons and Episodes</h2>`; L79: `useState(1)` for `selectedSeason`; L183–L190: season tab buttons (4 seasons); L192–L212: episode list per season with thumb, title, duration | `ShowDetailPage.js` L178–L180: `/* REQ: WM-8299 - Seasons & episodes container */` | **Implemented** | ✅ Match — panel heading, 4 season tabs, and episode lists all present and interactive |
| US-024 | WM-8324 | Render Description panel with exact synopsis text | `pages/ShowDetailPage.js` | L215–L219: `<div class="show-detail-page__info-card">` containing `<h3>Description</h3>` and `<p>{currentShow.description}</p>` | `ShowDetailPage.js` L213–L215: `/* REQ: WM-8299 - Description panel with exact text */` | **Implemented** | ✅ Match — Description panel with heading and synopsis text rendered |
| US-025 | WM-8325 | Render metadata sidebar with Released Year 2022, Director, Music and other fields | `pages/ShowDetailPage.js` | L258: metadata sidebar section; L264: `<span>Released Year</span>`; L268: `<span>{currentShow.year}</span>` = `'2022'`; L272–L283: Available Languages; L285–L303: Ratings; L305–L316: Genres; Director label + value `'The Duffer Brothers'`; Music label + value `'Kyle Dixon & Michael Stein'` | `ShowDetailPage.js` L258: `/* REQ: WM-8299 - Metadata sidebar */`; L263–L264, L295, L305, L316: inline markers | **Implemented** | ✅ Match — all specified metadata fields present; Released Year correctly shows 2022 |
| US-026 | WM-8326 | Render "Start a Free Trail" (typo preserved) CTA banner on all 3 screens | `components/CTABanner.js`, `pages/HomePage.js`, `pages/MoviesShowsPage.js`, `pages/ShowDetailPage.js` | `CTABanner.js` L47: `<button>Start a Free Trail</button>`; `HomePage.js` L135: `<CTABanner />`; `MoviesShowsPage.js` L198: `<CTABanner />`; `ShowDetailPage.js` L334: `<CTABanner />` | No explicit `// REQ:` in CTABanner.js; usage on all 3 pages confirmed | **Implemented** | ✅ Match — CTA appears on all 3 pages; typo "Trail" preserved exactly |
| US-027 | WM-8327 | Render footer with exact Figma headings (Home, Movies, Gernes, Support, Subscription, Connect With Us), copyright "@2023 streamvib, All Rights Reserved", policy links | `components/Footer.js` | L14–L47: `footerColumns` — headings: `'Home'` (L15), `'Movies'` (L21), `'Gernes'` (L27, typo), `'Support'` (L37), `'Subscription'` (L42); L100–L102: Connect With Us; L158: `@2023 streamvib, All Rights Reserved`; L161–L169: Terms of Use, Privacy Policy, Cookie Policy | `Footer.js` L7–L8: `REQ: WM-8300`; L27: `REQ: WM-8300` (Gernes typo); L158: `REQ: WM-8300` (copyright) | **Implemented** | ✅ Match — all headings including "Gernes" typo; copyright exact; policy links present |

---

## Consolidated Implementation vs Ticket Summary

This table provides a single-row summary for all 27 user stories to enable rapid status review.

| US ID | Ticket Summary | Ticket vs Implementation | Status | Gap (if any) |
|---|---|---|---|---|
| US-001 | Render navbar with logo and 4 menu labels | ✅ Match | **Implemented** | — |
| US-002 | Active nav item matches current screen | ✅ Match | **Implemented** | — |
| US-003 | Navbar icon buttons are interactive | ✅ Match | **Implemented** | Graceful no-op handlers (destinations out of scope) |
| US-004 | Hero heading, paragraph, and Start Watching Now CTA | ✅ Match | **Implemented** | — |
| US-005 | Start Watching Now CTA navigates (no dead click) | ✅ Match | **Implemented** | — |
| US-006 | Genre category cards with labels and imagery | ✅ Match | **Implemented** | — |
| US-007 | Genre cards are interactive (clickable) | ⚠️ Gap | **Partial** | `GenreCard.js` has no `onClick` handler; card is not clickable |
| US-008 | Device compatibility cards with titles and copy | ✅ Match | **Implemented** | — |
| US-009 | FAQ list with 8 numbered questions (01-08) | ✅ Match | **Implemented** | — |
| US-010 | FAQ item 01 open by default with answer and minus icon | ✅ Match | **Implemented** | — |
| US-011 | FAQ items toggle open/closed with plus/minus icon | ✅ Match | **Implemented** | — |
| US-012 | Ask a Question CTA handled deterministically | ✅ Match | **Implemented** | Graceful no-op (destination not evidenced) |
| US-013 | Pricing section with monthly plans and billing tabs | ✅ Match | **Implemented** | — |
| US-014 | Plan card CTA buttons are clickable | ✅ Match | **Implemented** | Choose Plan is graceful no-op |
| US-015 | Billing tabs switch active styling | ✅ Match | **Implemented** | — |
| US-016 | Hero renders Avengers: Endgame title and paragraph | ✅ Match | **Implemented** | — |
| US-017 | Hero secondary icon buttons are interactive | ✅ Match | **Implemented** | Graceful no-op (outcomes not evidenced) |
| US-018 | Featured hero slider prev/next and dot indicators interactive | ✅ Match | **Implemented** | — |
| US-019 | Movies section label and card grid | ✅ Match | **Implemented** | — |
| US-020 | Shows section label and card grid | ✅ Match | **Implemented** | — |
| US-021 | Show Detail hero renders Stranger Things title and synopsis | ✅ Match | **Implemented** | — |
| US-022 | Play Now button exists and is handled (no dead click) | ✅ Match | **Implemented** | Graceful no-op (playback destination not evidenced) |
| US-023 | Seasons and Episodes panel container | ✅ Match | **Implemented** | — |
| US-024 | Description panel with exact synopsis text | ✅ Match | **Implemented** | — |
| US-025 | Metadata sidebar with Released Year 2022, Director, Music | ✅ Match | **Implemented** | Year 2022 intentional per design spec |
| US-026 | CTA "Start a Free Trail" on all screens (typo preserved) | ✅ Match | **Implemented** | Typo "Trail" preserved as per Figma spec |
| US-027 | Footer headings/links including "Gernes" typo and copyright exact | ✅ Match | **Implemented** | All typos preserved per Figma spec |

**Overall: 26 of 27 user stories fully implemented. 1 partial (US-007: GenreCard not clickable).**

---

## Detailed US Evidence Sections

### US-001 — Render StreamVibe navbar with logo and menu labels

**Ticket (WM-8301, Epic WM-8291):** Render the StreamVibe navbar with the StreamVibe logo and
4 menu label buttons: Home, Movies & Shows, Support, Subscriptions.

The current implementation in `components/Navbar.js` defines `NAV_ITEMS` at lines 23–27 as a constant
array containing exactly the four required items: `Home`, `Movies & Shows`, `Support`, and `Subscriptions`.
The logo is rendered at lines 84–86 via a dedicated `<StreamVibeLogo>` component imported from
`components/StreamVibeLogo.js`. Lines 88–101 contain the render loop that outputs one `<button>` per
`NAV_ITEMS` entry, displaying `item.label` as the button text. The inline requirement marker at
lines 7–9 reads `REQ: WM-8291 - Global Navigation Shell: active item styling + no dead clicks`.

**Verdict:** ✅ **Implemented** — Logo and all 4 menu labels rendered exactly as specified.

---

### US-002 — Active nav item matches current screen state

**Ticket (WM-8302, Epic WM-8291):** The active nav item must visually match whichever screen
(Home or Movies & Shows) is currently displayed.

The current implementation applies conditional CSS classes at lines 91–98 of `components/Navbar.js`.
The expression `item.id === activePage ? 'navbar__menu-item--active' : 'navbar__menu-item--inactive'`
drives the visual state. The `aria-current` attribute at line 99 provides accessibility conformance.
The `activePage` prop is passed from each consuming page: `pages/HomePage.js` passes `activePage="home"`,
while both `pages/MoviesShowsPage.js` and `pages/ShowDetailPage.js` pass `activePage="movies"`. The
inline marker at lines 88–90 reads `REQ: WM-8291 - Active item styling per current page`.

**Verdict:** ✅ **Implemented** — Active state is driven correctly by each page's `activePage` prop.

---

### US-003 — Render navbar icon button group as interactive controls

**Ticket (WM-8303, Epic WM-8291):** Render Search and Notifications icon buttons in the navbar
header as interactive controls (no dead clicks); exact destinations are not specified.

Lines 107–119 of `components/Navbar.js` contain the Search `<button>` with `aria-label="Search"` and
an `onClick` handler that holds a comment acknowledging the click. Lines 121–136 contain the Notifications
`<button>` with `aria-label="Notifications"` and a matching `onClick` handler. Both are wrapped in the
`<div className="navbar__icons">` container at lines 103–105. The comment inside each handler states
`REQ: WM-8291 - Out of scope: ... click acknowledged` to make the graceful no-op intent explicit.

**Verdict:** ✅ **Implemented** — Both icon buttons render and respond to clicks; graceful no-op per spec.

---

### US-004 — Render home hero heading/paragraph and Start Watching Now CTA

**Ticket (WM-8304, Epic WM-8292):** The home page hero section must render the heading
"The Best Streaming Experience", a descriptive paragraph about StreamVibe, and a
"Start Watching Now" CTA button.

Line 55 of `components/HeroSection.js` contains `<h1 className="hero__heading">The Best Streaming Experience</h1>`,
exactly matching the required heading text. Lines 56–63 contain the full `<p className="hero__paragraph">` with
StreamVibe's descriptive text. Lines 64–68 contain the `<button className="hero__cta-btn" onClick={() => navigate('movies')}>` with an SVG icon and `<span>Start Watching Now</span>`. The
component is integrated in `pages/HomePage.js` at lines 47–50 via `<HeroSection navigate={navigate} />`.

**Verdict:** ✅ **Implemented** — Heading text, paragraph, and CTA button all present exactly as specified.

---

### US-005 — Start Watching Now CTA is clickable and handled (no dead click)

**Ticket (WM-8305, Epic WM-8292):** The "Start Watching Now" CTA button must have a real click
handler. Expected behavior is navigation to the Movies & Shows page.

Line 64 of `components/HeroSection.js` contains `onClick={() => navigate('movies')}`, which is a direct
call to the navigation handler — always executed deterministically. The destination `'movies'` maps to
`<MoviesShowsPage>` in `src/App.js` at line 21 where `{currentPage === 'movies' && <MoviesShowsPage ...>}`.
There is no conditional guard that could prevent the click from triggering navigation.

**Verdict:** ✅ **Implemented** — CTA click is handled and navigates to the Movies & Shows page.

---

### US-006 — Render category cards with labels and icons

**Ticket (WM-8306, Epic WM-8293):** The home page must render genre/category cards for each category
(Action, Adventure, Comedy, Drama, Horror) with a label and visual icon/imagery.

`data/streamData.js` defines the `genres` array with 5 objects: Action, Adventure, Comedy, Drama, and
Horror, each containing a `name` and an `images` array of 4 image paths. `components/GenreCard.js` renders
these at lines 4–44: a 2×2 image grid (lines 7–30) and the genre name label at line 33 via `{genre.name}`.
`pages/HomePage.js` renders `GenreCard` components at lines 57–66 by mapping `visibleGenres` (a
paginated slice of the full `genres` array).

**Verdict:** ✅ **Implemented** — 5 genre cards with names and 2×2 image grids rendered.

---

### US-007 — Category cards are interactive (clickable)

**Ticket (WM-8307, Epic WM-8293):** Genre cards must be interactive/clickable (no dead click when
a user clicks a card). The expected behavior after click is not explicitly specified.

Examining `components/GenreCard.js` in full (lines 4–44): the root `<div className="genre-card">` has
no `onClick`, no `role="button"`, and no `tabIndex`. The arrow `<svg>` icon at lines 35–39 is
decorative — it is inside a `<div>` with no event handler. There is no interactivity anywhere in the
component. Clicking the card in the browser produces no response.

**Verdict:** ⚠️ **Partial** — Visual rendering is complete but programmatic interactivity is absent.
Recommended fix: add `onClick` (and `role="button"` / `tabIndex={0}`) to the root `<div className="genre-card">` in `components/GenreCard.js`. When US-007 is resolved, add inline
`// REQ: WM-8293 - Genre card is interactive` to that element, update this table row to Implemented,
and add file/line evidence pointing to the new handler.

---

### US-008 — Render device compatibility cards with titles and copy

**Ticket (WM-8308, Epic WM-8294):** The home page must render 6 device compatibility cards, each
showing a device title and descriptive copy text.

`data/streamData.js` defines the `devices` array with 6 objects: Smartphones, Tablet, Smart TV,
Laptops, Gaming Consoles, and VR Headsets — each with a `name` and `description` field.
`components/DeviceCard.js` renders the icon at line 57, `device.name` at line 58, and
`device.description` at line 59 (lines 51–62). `pages/HomePage.js` renders two rows of three
`DeviceCard` components at lines 75–84 using `devices.slice(0, 3)` and `devices.slice(3, 6)`.

**Verdict:** ✅ **Implemented** — All 6 device cards render with name and description.

---

### US-009 — Render FAQ list with 8 numbered questions (01-08)

**Ticket (WM-8309, Epic WM-8295):** The FAQ section must render exactly 8 questions with number
labels 01 through 08.

`components/FAQSection.js` defines `faqData` at lines 9–63, an array of 8 objects each with a `num`
field: `'01'`, `'02'`, `'03'`, `'04'`, `'05'`, `'06'`, `'07'`, `'08'`. Line 99 renders each as
`<span className="faq-item__number">{item.num}</span>`. Lines 88–89 split the 8 items into two
groups of 4 (left and right columns) and lines 143–149 render them in a two-column grid.

**Verdict:** ✅ **Implemented** — Exactly 8 FAQ items with labels 01–08 in two columns.

---

### US-010 — FAQ item 01 supports open state with answer and minus icon

**Ticket (WM-8310, Epic WM-8295):** The first FAQ item (numbered 01) must default to the open state,
showing its answer text and displaying a minus icon instead of a plus icon.

`components/FAQSection.js` line 69 initializes state as `const [openId, setOpenId] = useState(1)`,
meaning the item with `id: 1` (corresponding to `num: '01'`) is open on first render. The conditional
at lines 103–116 renders the minus SVG when `openId === item.id` and the plus SVG otherwise. The
conditional at lines 118–120 renders `<p className="faq-item__answer">{item.answer}</p>` only when
`openId === item.id`.

**Verdict:** ✅ **Implemented** — Item 01 is open by default with answer text visible and minus icon shown.

---

### US-011 — FAQ items toggle open/closed and plus/minus icon updates

**Ticket (WM-8311, Epic WM-8295):** All 8 FAQ items must support toggle open/close behavior.

Lines 77–79 of `components/FAQSection.js` define `const toggleFAQ = (id) => { setOpenId(openId === id ? null : id); }` — an accordion pattern where clicking an already-open item closes it
(setting state to `null`) and clicking a closed item opens it. Line 97 attaches this as
`onClick={() => toggleFAQ(item.id)}` on the item wrapper. Line 100 adds `onKeyDown={(e) => e.key === 'Enter' && toggleFAQ(item.id)}` for keyboard accessibility. Lines 103–116 switch the SVG icon based on `openId === item.id`.

**Verdict:** ✅ **Implemented** — All 8 items toggle; exactly one open at a time; icons update correctly.

---

### US-012 — Render Ask a Question CTA and handle click deterministically

**Ticket (WM-8312, Epic WM-8295):** The FAQ section must include an "Ask a Question" CTA button
that responds to clicks without a dead click.

Lines 83–86 of `components/FAQSection.js` define `handleAskQuestion()` as a function with a comment
clarifying the intentional no-op: `// Intentional no-op: destination not evidenced in design spec.`
Line 139 renders `<button className="faq-section__ask-btn" onClick={handleAskQuestion}>Ask a Question</button>`.
The click is acknowledged without fabricating a destination.

**Verdict:** ✅ **Implemented** — CTA renders and responds to click; graceful no-op per spec.

---

### US-013 — Render pricing section with monthly plans/prices and tabs

**Ticket (WM-8313, Epic WM-8296):** The home page must render a subscription plans section with
Monthly/Yearly billing tabs (Monthly active by default) and three plan cards: Basic ($9.99/month),
Standard ($12.99/month, Popular), Premium ($14.99/month).

`pages/HomePage.js` line 35 initializes billing state as `useState('monthly')`, making Monthly the
default. Lines 105–110 render the Monthly tab button with the `--active` class when billing cycle
is monthly. `data/streamData.js` defines `subscriptionPlans` with Basic Plan at `$9.99`, Standard
Plan at `$12.99` with `isPopular: true`, and Premium Plan at `$14.99`. Lines 126–130 of
`pages/HomePage.js` map over the plans to render `<PlanCard>` components.

**Verdict:** ✅ **Implemented** — Monthly default, 3 plans with correct prices, Popular badge on Standard.

---

### US-014 — Plan card CTAs (Start Free Trial / Choose Plan) are clickable

**Ticket (WM-8314, Epic WM-8296):** Both "Start Free Trial" and "Choose Plan" buttons on each plan
card must respond to clicks (no dead clicks).

`components/PlanCard.js` lines 24–30 define `handleStartTrial()`, which scrolls to `#subscriptions-section`
using `document.getElementById`. Lines 37–40 define `handleChoosePlan()` as a graceful no-op with a comment.
Lines 67–72 render the Start Free Trial `<button onClick={handleStartTrial}>` and lines 75–81 render the
Choose Plan `<button onClick={handleChoosePlan}>`.

**Verdict:** ✅ **Implemented** — Both buttons respond; Start Free Trial scrolls to plans; Choose Plan is graceful no-op.

---

### US-015 — Billing period tabs switch active styling (Monthly/Yearly)

**Ticket (WM-8315, Epic WM-8296):** Clicking the Monthly/Yearly billing tabs must switch the active
visual style to indicate the selected billing period.

`pages/HomePage.js` line 35 holds `const [billingCycle, setBillingCycle] = useState('monthly')`.
Lines 105–110 render the Monthly tab with `onClick={() => setBillingCycle('monthly')}` and a conditional
`--active` class. Lines 112–119 render the Yearly tab with `onClick={() => setBillingCycle('yearly')}` and
matching conditional class. `PlanCard.js` lines 47–50 recalculate `displayPrice` whenever `billingCycle`
prop changes, so prices update on tab switch.

**Verdict:** ✅ **Implemented** — Active class switches on tab click; prices recalculate for yearly billing.

---

### US-016 — Movies & Shows hero renders Avengers: Endgame title and paragraph

**Ticket (WM-8316, Epic WM-8297):** The Movies & Shows page hero must render the title
"Avengers: Endgame" and its descriptive paragraph on first load.

`data/streamData.js` lines 2–14 define the first movie object with `id: 1`, `title: 'Avengers: Endgame'`,
and a full `description` string. `pages/MoviesShowsPage.js` line 41 computes `heroMovies = movies.slice(0, 5)`
and line 42 picks `heroMovies[heroMovieIndex]` where `heroMovieIndex` defaults to `0`. `components/MovieHeroBanner.js`
line 54 renders `<h1 className="movie-hero-banner__title">{movie.title}</h1>` and line 55 renders
`<p className="movie-hero-banner__desc">{movie.description}</p>`.

**Verdict:** ✅ **Implemented** — First movie is Avengers: Endgame; title and paragraph rendered on initial load.

---

### US-017 — Movies & Shows hero controls render as interactive (label/outcome unknown)

**Ticket (WM-8317, Epic WM-8297):** Add to Watchlist, Like, and Volume icon buttons in the hero must
render as interactive elements; specific outcomes are not specified.

`components/MovieHeroBanner.js` lines 32–35 define `handleIconAction(action)` as a graceful no-op with a comment. Lines 73–84 render the Add to Watchlist button with `onClick={() => handleIconAction('add-to-watchlist')}`. Lines 86–99 render the Like button and lines 101–115 render the Volume/Sound button, each with their respective `onClick` calls to `handleIconAction`. All three are wrapped in `<div className="movie-hero-banner__icon-btns">` at line 70.

**Verdict:** ✅ **Implemented** — All 3 icon buttons render and respond to clicks; graceful no-op per spec.

---

### US-018 — Movies & Shows featured hero slider controls are rendered and interactive

**Ticket (WM-8318, Epic WM-8297):** The featured hero slider must have working previous/next navigation
arrow buttons and dot indicator controls that cycle through the featured movies.

`pages/MoviesShowsPage.js` lines 44–45 define `handleHeroPrev` which wraps around from index 0 to
`heroMovies.length - 1`. Lines 46–47 define `handleHeroNext` which wraps from last to 0. These are
passed as `onPrev` and `onNext` props to `<MovieHeroBanner>`. In `components/MovieHeroBanner.js`,
lines 120–133 render the Previous arrow `<button aria-label="Previous movie" onClick={onPrev}>` and
lines 149–161 render the Next arrow `<button aria-label="Next movie" onClick={onNext}>`. Lines 136–147
render dot indicators via `Array.from({ length: total }).map(...)` where each dot gets `role="tab"` and
`aria-selected={i === current}`.

**Verdict:** ✅ **Implemented** — Prev/next arrows functional with wrap-around; dot indicators reflect current index.

---

### US-019 — Render Movies section label and card-like content area

**Ticket (WM-8319, Epic WM-8298):** The Movies & Shows page must render a clearly labeled "Movies"
section with a card-like content grid containing movie cards.

`pages/MoviesShowsPage.js` line 133 opens `<section className="movies-page__section" aria-labelledby="movies-heading">`. Line 140 contains `<div className="movies-page__section-label" id="movies-heading">Movies</div>`. Lines 151–163 contain the grid of `<MovieCard>` components rendered via `visibleMovies.map`. Lines 142–149 include `<NavArrows>` for pagination.

**Verdict:** ✅ **Implemented** — "Movies" label and card grid present.

---

### US-020 — Render Shows section label and card-like content area

**Ticket (WM-8320, Epic WM-8298):** The Movies & Shows page must render a clearly labeled "Shows"
section with a card-like content grid containing show cards.

`pages/MoviesShowsPage.js` line 166 opens `<section className="movies-page__section" aria-labelledby="shows-heading">`. Line 173 contains `<div className="movies-page__section-label" id="shows-heading">Shows</div>`. Lines 184–194 render `visibleShows.map(show => <MovieCard .../>)` in a grid. The shows data in `data/streamData.js` contains 8 show objects.

**Verdict:** ✅ **Implemented** — "Shows" label and card grid present.

---

### US-021 — Shows Open hero renders Stranger Things title and synopsis

**Ticket (WM-8321, Epic WM-8299):** The Show Detail page (open state) must render the Stranger Things
title and its exact synopsis in the hero section.

`pages/ShowDetailPage.js` lines 18–33 define `defaultShow` with `title: 'Stranger Things'` at line 20
and the full description at line 27. Lines 79–80 resolve `currentShow = show || defaultShow`. Line 127
renders `<h1 className="show-detail-page__hero-title">{currentShow.title}</h1>` and line 128 renders
`<p className="show-detail-page__hero-desc">{currentShow.description}</p>`. The same `description` value
is confirmed in `data/streamData.js` at the first shows object (`id: 101`).

**Verdict:** ✅ **Implemented** — Title "Stranger Things" and full synopsis rendered in the hero.

---

### US-022 — Play Now button exists and click is handled (no dead click)

**Ticket (WM-8322, Epic WM-8299):** The Show Detail page hero must include a "Play Now" button that
responds to click (no dead click).

Lines 86–89 of `pages/ShowDetailPage.js` define `handlePlayNow()` as a graceful no-op with a comment
explaining that the play destination is not evidenced. Lines 137–144 render `<button className="show-detail-page__play-btn" onClick={handlePlayNow}>` containing an SVG play icon and `<span>Play Now</span>`.

**Verdict:** ✅ **Implemented** — Play Now renders and handles click; graceful no-op per spec.

---

### US-023 — Render Seasons and Episodes panel container

**Ticket (WM-8323, Epic WM-8299):** The Show Detail page must render a Seasons and Episodes panel
with season tabs and an episode list.

`pages/ShowDetailPage.js` line 180 renders `<h2 className="show-detail-page__panel-title">Seasons and Episodes</h2>`.
State at line 79 (`useState(1)`) tracks the selected season; line 81 computes `episodes = seasonEpisodes[selectedSeason] || []`.
`seasonEpisodes` (defined lines 36–70) covers 4 seasons. Lines 183–190 render season tab `<button>` elements
with `onClick(() => { setSelectedSeason(i + 1); setSelectedEpisode(1); })`. Lines 192–212 map episodes to
rows with thumbnail, title, and duration.

**Verdict:** ✅ **Implemented** — Panel heading, 4 season tabs, and episode list are present and interactive.

---

### US-024 — Render Description panel with exact synopsis text

**Ticket (WM-8324, Epic WM-8299):** The Show Detail page must render a Description panel showing
the exact synopsis text for the current show.

Lines 215–219 of `pages/ShowDetailPage.js` render a `<div className="show-detail-page__info-card">` containing `<h3>Description</h3>` and `<p>{currentShow.description}</p>`. The `description` field for the default show is `'When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.'` (line 27).

**Verdict:** ✅ **Implemented** — Description panel with heading and exact synopsis text rendered.

---

### US-025 — Render metadata sidebar (Released Year 2022, Director, Music, etc.)

**Ticket (WM-8325, Epic WM-8299):** The Show Detail page must render a metadata sidebar with labeled
rows for Released Year (value: 2022), Director, Music, and additional fields. Released Year must display "2022".

The right column sidebar begins at line 258 of `pages/ShowDetailPage.js`. The "Released Year" label appears
at line 264 as `<span className="show-detail-page__info-row-label">Released Year</span>` and its value
at line 268 as `<span ...>{currentShow.year}</span>` which resolves to `'2022'` (from `defaultShow.year`
at line 22). The "Available Languages" row at lines 272–283 shows English, Spanish, French, German. The
"Ratings" row at lines 285–303 shows IMDb, Rotten Tomatoes, and Stream badges. The "Genres" row at lines
305–316 shows genre tags. The "Director" section renders `{currentShow.director}` = `'The Duffer Brothers'`
and "Music" renders `{currentShow.music}` = `'Kyle Dixon & Michael Stein'`.

**Verdict:** ✅ **Implemented** — All specified metadata fields present; Released Year correctly shows 2022.

---

### US-026 — Render free-trial CTA section on all screens (preserve typo)

**Ticket (WM-8326, Epic WM-8300):** The "Start a Free Trail" CTA banner (intentional typo: "Trail"
not "Trial") must be rendered on all screens (Home, Movies & Shows, Show Detail).

Line 47 of `components/CTABanner.js` contains `<button className="cta-banner__btn">Start a Free Trail</button>` — the intentional typo "Trail" is preserved exactly. The component is included in:
- `pages/HomePage.js` at line 135 inside `<section className="home-page__cta-section">`
- `pages/MoviesShowsPage.js` at line 198 inside `<section className="movies-page__cta">`
- `pages/ShowDetailPage.js` at line 334 inside `<section className="show-detail-page__cta">`

**Verdict:** ✅ **Implemented** — CTA appears on all 3 pages; typo "Trail" preserved exactly as specified.

---

### US-027 — Render footer headings/links and policy items exactly as in Figma

**Ticket (WM-8327, Epic WM-8300):** The footer must render with exact Figma column headings: Home,
Movies, Gernes (intentional typo), Support, Subscription, Connect With Us. Copyright must read
"@2023 streamvib, All Rights Reserved". Policy links: Terms of Use, Privacy Policy, Cookie Policy.

`components/Footer.js` defines `footerColumns` at lines 14–47 with headings: `'Home'` (L15),
`'Movies'` (L21), `'Gernes'` (L27, intentional typo confirmed by inline REQ comment), `'Support'` (L37),
and `'Subscription'` (L42). Lines 100–102 render `<h4>Connect With Us</h4>` with social buttons below.
Line 158 renders `<span className="footer__copyright">@2023 streamvib, All Rights Reserved</span>` exactly.
Lines 161–169 render three policy buttons: Terms of Use, Privacy Policy, and Cookie Policy. The Footer
component is used on all 3 pages: `HomePage.js` line 138, `MoviesShowsPage.js` line 201, `ShowDetailPage.js` line 338.

**Verdict:** ✅ **Implemented** — All headings correct including "Gernes" typo; copyright exact; policy links present; footer on all 3 pages.

---

## Missing Inline REQ Markers (Recommended Additions)

The following code locations currently lack `// REQ:` markers but implement explicit requirements.
These are recommended additions to improve long-term traceability durability:

| File | Recommended Location | Recommended Marker |
|---|---|---|
| `components/GenreCard.js` | L4 (component def) | `// REQ: WM-8293 - Category card with label and imagery` |
| `components/DeviceCard.js` | L51 (card render) | `// REQ: WM-8294 - Device compatibility card with name and description` |
| `components/CTABanner.js` | L47 (button) | `// REQ: WM-8300 - Intentional typo "Start a Free Trail" per design spec` |
| `pages/MoviesShowsPage.js` | L140 (Movies label) | `// REQ: WM-8298 - "Movies" section label` |
| `pages/MoviesShowsPage.js` | L173 (Shows label) | `// REQ: WM-8298 - "Shows" section label` |

---

## Update Rules

The following rules govern how this document must be kept current as the codebase evolves.

When a **requirement or ticket changes**, update the relevant row(s) in both the Epic Trace Matrix and
the US Trace Matrix. Update the Source column. If the inline `// REQ:` comment's short hint becomes
inaccurate, update it in the source file as part of the same change. When **code is refactored** (moved,
renamed, split, or merged), update all file paths and line numbers in the affected detail sections and
the Epic Trace Matrix. Move inline requirement markers with the owning logic to the new location. Do not
leave stale paths. When a module split occurs, add a note explaining the split and new ownership.

When **tests are added**, update the Verification column in the Epic Trace Matrix to reference the new
test file and test name. If status was Partial due to missing verification, update it to Implemented.
When **new behavior is added** to an existing component, identify which US ID the new behavior satisfies.
If no US covers the new behavior, flag it as "Untraced implementation" in this document.

When **US-007 (GenreCard interactivity) is addressed**, update the US-007 row from Partial to Implemented
and add file/line evidence pointing to the new `onClick` handler. Add inline `// REQ: WM-8293` to that
element and update the summary table accordingly.

**Do NOT correct intentional typos:** `"Start a Free Trail"` in `CTABanner.js` L47, `"Gernes"` in
`Footer.js` L27, or `"@2023 streamvib"` in `Footer.js` L158. Any correction of these values is a defect
relative to the design spec (WM-8300). If these values are ever intentionally changed by a ticket update,
update the Known Intentional Design Spec Values table and all affected evidence rows.

Because line numbers shift as code evolves, always cite function names, JSX `id` attributes, `const`
variable names, and data field names alongside line numbers. When a section shifts by more than ~10 lines,
re-read the affected file and update all impacted rows.

---

## Verification Artifacts Policy

All requirements in this document are currently verified manually by loading the React application in a
browser. No automated test suite covers the UI components at the time of this document's creation.

Manual verification is organized by page:

**Home page** (`http://localhost:3000`): verify US-001 through US-015 and US-026/US-027. Confirm navbar
labels, active state, icon button responsiveness, hero heading and CTA, 5 genre cards with labels,
6 device cards with descriptions, 8 FAQ items numbered 01–08 with toggle behavior and Ask a Question
response, 3 pricing plans with correct prices and billing tab switching, CTA banner with "Start a Free Trail"
typo, and footer with "Gernes" typo and "@2023 streamvib" copyright.

**Movies & Shows page** (navigate from Home or Navbar): verify US-016 through US-020. Confirm hero shows
"Avengers: Endgame" on first load, prev/next arrows cycle the hero, dot indicators update, Add to Watchlist/
Like/Volume icon buttons respond, and both Movies and Shows sections render labeled grids.

**Show Detail page** (click any movie/show card): verify US-021 through US-025 and US-026/US-027. Confirm
Stranger Things title and synopsis in hero, Play Now responds, Seasons and Episodes panel has 4 season tabs
and episode lists, Description panel shows synopsis, metadata sidebar displays Released Year 2022, Director
"The Duffer Brothers", Music "Kyle Dixon & Michael Stein", CTA banner appears, and footer is present.

Automated verification via React Testing Library is recommended but not yet implemented. Highest-priority
tests to add are: a render test for `FAQSection` confirming 8 items with labels `'01'`–`'08'`; a render
test for `Footer` confirming the "Gernes" column heading and "@2023 streamvib" copyright; an interaction
test for `FAQSection` confirming toggle behavior; and a test for `PlanCard` confirming both buttons render
and their `onClick` handlers are defined.

---

## End-of-Work Checklist

The following confirms that this traceability document meets the quality bar for the Req_Trace revision:

- All 10 WM epics (WM-8291..WM-8300) are inventoried in the Epic Trace Matrix with Ticket Requirement, Implementation Evidence, Status, and Notes columns.
- All 27 user stories (US-001..US-027, Jira WM-8301..WM-8327) are inventoried with Jira key, epic mapping, and comparison result.
- Every US-001..US-027 has a dedicated detail section with: ticket description, current implementation evidence (file + lines + symbols), and an explicit "Ticket vs Implementation" verdict.
- The consolidated summary table covers all 27 US IDs with status and gap notes.
- Known intentional design spec values (typos, year) are listed in a dedicated table with ticket attribution.
- US-007 is correctly identified as Partial with an explicit remediation note.
- All file paths referenced exist in the repository: `components/Navbar.js`, `components/HeroSection.js`, `components/GenreCard.js`, `components/DeviceCard.js`, `components/FAQSection.js`, `components/PlanCard.js`, `components/MovieHeroBanner.js`, `components/CTABanner.js`, `components/Footer.js`, `pages/HomePage.js`, `pages/MoviesShowsPage.js`, `pages/ShowDetailPage.js`, `data/streamData.js`.
- No requirements, destinations, or file paths have been fabricated; all gaps are explicitly labeled.
- This document is strictly scoped to WM-8291..WM-8300 / US-001..US-027 and supersedes STREAMVIBE_WM_TICKETS_TRACEABILITY.md.
