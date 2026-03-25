# StreamVibe Logo – Design Notes

## Overview
The StreamVibe logo is a horizontally-arranged lockup consisting of:
1. **Icon** – A square icon container with two rightward-pointing chevrons (double-play symbol) in red
2. **Wordmark** – The text "StreamVibe" in Manrope Bold

---

## 1. Icon Container

| Property       | Value                         |
|----------------|-------------------------------|
| Width          | 50 px                         |
| Height         | 50 px                         |
| Background     | `#1A1A1A` (dark surface)      |
| Border-radius  | 12 px                         |
| Border         | 1 px solid `#262626`          |
| Shape type     | SVG `<rect>` with `rx="12"`   |

---

## 2. Icon Symbol (Double-Chevron / Play)

Two open right-pointing chevron strokes (like `>` and `>` side by side) drawn in **red**, centered vertically within the icon box.

| Element              | Value                                      |
|----------------------|--------------------------------------------|
| Color                | `#E50000` (StreamVibe accent red)          |
| Stroke width         | 4 px                                       |
| Stroke linecap       | `round`                                    |
| Stroke linejoin      | `round`                                    |
| Left chevron path    | `M14 17 L22 25 L14 33`                     |
| Right chevron path   | `M24 17 L32 25 L24 33`                     |
| Accent dot           | `cx=32 cy=25 r=2.5`, fill `#E50000`        |

---

## 3. Wordmark

| Property        | Value                                   |
|-----------------|-----------------------------------------|
| Text            | `StreamVibe`                            |
| Font family     | Manrope                                 |
| Font weight     | 700 (Bold)                              |
| Font size       | 18 px                                   |
| Color           | `#FFFFFF` (white)                       |
| Letter-spacing  | 0 (normal)                              |
| Line-height     | 1 (unitless)                            |
| Text transform  | None (mixed case as written)            |

---

## 4. Logo Lockup Layout

| Property           | Value                                  |
|--------------------|----------------------------------------|
| Direction          | Row (horizontal)                       |
| Alignment          | Center (vertically)                    |
| Gap between icon and text | 8 px                          |
| Total height       | 50 px (driven by icon)                 |
| Approximate total width | ~167 px (icon 50 + gap 8 + text ~109) |

---

## 5. Color Tokens Used

| Token Name        | Hex Value   | Usage                      |
|-------------------|-------------|----------------------------|
| `--color-accent`  | `#E50000`   | Chevron strokes & dot      |
| `--color-white`   | `#FFFFFF`   | Wordmark text              |
| `--color-bg-card` | `#1A1A1A`   | Icon container background  |
| `--color-border`  | `#262626`   | Icon container border      |

---

## 6. Typography Token

| Token           | Value                        |
|-----------------|------------------------------|
| `--font-family` | `'Manrope', sans-serif`      |

Font is loaded via Google Fonts:  
`@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700&display=swap');`

---

## 7. Usage in Components

The logo appears in:
- **Navbar** (`src/components/Navbar.js`) – left side of the navigation bar, clickable to navigate home
- Implemented via the reusable `StreamVibeLogo` component (`src/components/StreamVibeLogo.js`)

### Component API
```jsx
<StreamVibeLogo
  iconSize={50}      // number, default: 50 — controls the icon box dimensions
  showText={true}    // boolean, default: true — toggles the wordmark
  className=""       // string — optional extra CSS class on the root element
/>
```

---

## 8. Responsive Behavior

| Breakpoint     | Behavior                                          |
|----------------|---------------------------------------------------|
| ≥ 1024 px      | Full lockup: icon (50 px) + gap (8 px) + wordmark |
| 768 px – 1024 px | Full lockup maintained                           |
| < 768 px       | Navbar collapses; logo lockup may be icon-only    |

---

## 9. Do's and Don'ts

- ✅ Keep the icon aspect ratio 1:1 (square)
- ✅ Maintain the 8 px gap between icon and wordmark
- ✅ Use `#E50000` exclusively for the chevron symbol
- ❌ Do not change the background to white (icon uses dark background always)
- ❌ Do not use a different font weight than 700 for the wordmark
- ❌ Do not scale the icon below 32 px (legibility of chevrons)
