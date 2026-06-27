# UMEE Coffee — Landing Page

> *"A poetic escape where You and Me get lost in the craft of Vietnamese coffee."*

---

## 🎨 Design Philosophy

**Style**: Modern Minimalism & Poetic Chic

UMEE's landing page is designed to feel **"tĩnh nhưng động"** — still yet alive. Every element reflects the brand's identity: the warmth of terracotta, the rawness of stone, and the patience of the Vietnamese phin filter.

---

## 🖋 Typography

| Role     | Font                 | Source       | Weights       |
|----------|----------------------|--------------|---------------|
| Heading  | **Playfair Display** | Google Fonts | 300, 400, 600, 700 (+ Italic) |
| Body     | **Space Grotesk**    | Google Fonts | 300, 400, 500, 600 |

> **Note:** The original design spec calls for *Squid Boy* font for headings. Since Squid Boy is a commercial/custom font not available on Google Fonts, **Playfair Display** has been chosen as a premium editorial substitute — capturing the same expressive, poetic character. To switch to Squid Boy, add the font files to `/public/fonts/` and update the `@font-face` declarations in `globals.css`.

---

## 🎨 Color Palette

| Token      | Hex       | Usage                                    |
|------------|-----------|------------------------------------------|
| `--surface`  | `#F8F2E2` | Background — warm as morning sunlight   |
| `--primary`  | `#550100` | Deep Red/Terracotta — brand color       |
| `--secondary`| `#B5833E` | Warm Ochre — accents, gold highlights   |
| `--dark`     | `#130800` | Near-black dark sections                |
| `--light`    | `#efe8d5` | Slightly darker beige for alternate sections |
| `--mid`      | `#7a4a20` | Body text on light backgrounds          |

---

## 🏗 Project Structure

```
coffelandinpagenew/
├── app/
│   ├── layout.js          # Root layout: fonts + metadata
│   ├── page.js            # Main page (assembles all sections)
│   ├── globals.css        # Design tokens + global styles
│   └── page.module.css    # Page-level fade-in animation
│
├── components/
│   ├── Intro.jsx          # Intro animation: letter convergence + zoom
│   ├── Intro.module.css
│   ├── Navbar.jsx         # Fixed nav with scroll-aware glass effect
│   ├── Navbar.module.css
│   ├── Hero.jsx           # Full-viewport hero: parallax + mouse tilt
│   ├── Hero.module.css
│   ├── Gallery.jsx        # Asymmetric grid gallery
│   ├── Gallery.module.css
│   ├── Scent.jsx          # "The Scent of UMEE" animated section
│   ├── Scent.module.css
│   ├── Brewing.jsx        # Phin brewing story + SVG illustration
│   ├── Brewing.module.css
│   ├── Connection.jsx     # Instagram-style community grid
│   ├── Connection.module.css
│   ├── Footer.jsx         # Full footer with links
│   └── Footer.module.css
│
├── public/
│   └── assets/
│       ├── hero.png        # Cafe interior hero image
│       ├── coffee.png      # Phin coffee close-up
│       └── terracotta.png  # Stone & terracotta architecture
│
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm 9+

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

---

## ✨ Key Features & Sections

### 1. 🎬 Intro Animation — *"The Breath of Umee"*
- Letters **U, M, E, E** float in from scattered positions with elastic easing
- Converge into the UMEE logo at center
- **Zoom-through effect**: logo rapidly scales to fill screen, transitioning to hero
- Skip button for returning visitors

### 2. 🎥 Hero Section — *"The Cinematic Heart"*
- Full-viewport background image with **parallax scroll**
- **Mouse tilt effect**: background subtly shifts with cursor movement
- Left-aligned headline in Playfair Display italic
- Minimal fixed navbar (transparent → glass on scroll)

### 3. 🖼 Gallery — *"Materiality & Light"*
- **Asymmetric CSS Grid**: 1.6fr + 1fr columns, 78vh height
- High-contrast images: stone wall vs. terracotta tiles
- Hover reveals caption with italic label + image zoom
- Scroll-triggered stagger reveal animation

### 4. ☕ Scent Section — *"The Scent of Umee"*
- Animated coffee cup SVG with **steam wisps**
- Pulsing concentric rings (cinemagraph simulation)
- Scent notes reveal on scroll with stagger delay
- Notes: Dark Chocolate • Roasted Hazelnut • Rich Earth • Warm Caramel • Aged Wood Smoke

### 5. 🫗 Brewing Story — *"The Art of the Phin"*
- Custom hand-crafted **SVG phin filter illustration**
- Animated drip drop and steam lines
- 4-step brewing ritual with scroll-triggered reveal
- Minimalist editorial layout

### 6. 📸 Daily Connection
- 3×2 Instagram-style grid using cafe photography
- Hover overlay reveals `@umee.coffee` handle
- Follow CTA button

### 7. 🔗 Footer
- Logo + tagline left-aligned
- 3-column links: Visit Us • Connect • Explore
- Minimal dark background

---

## 🛠 Tech Stack

| Layer      | Technology              |
|------------|-------------------------|
| Framework  | **Next.js 15** (App Router) |
| Language   | **JavaScript** (JSX)    |
| Styling    | **CSS Modules** (Vanilla CSS) |
| Fonts      | **next/font/google**    |
| Images     | **next/image** (optimized) |
| Animations | CSS Keyframes + IntersectionObserver API |

---

## ✅ QA Checklist

- [x] `Playfair Display` italic used for all hero/section headings
- [x] Background `#F8F2E2` consistent across surface sections
- [x] Zoom-through intro animation smooth (CSS transform + opacity)
- [x] Gallery shows contrast between stone (cool) and terracotta (warm)
- [x] Navbar transitions from transparent to glass on scroll
- [x] Parallax and mouse-tilt on hero section
- [x] Steam + drip animations on phin SVG illustration
- [x] Scroll-triggered reveal on all sections
- [x] Responsive layout for mobile (< 768px)
- [x] SEO metadata in `layout.js`

---

## 🔧 Customization Guide

### Swap Fonts
Edit `app/layout.js` — change the Google Fonts imports:
```js
import { YourFont } from 'next/font/google';
```

### Update Colors
Edit `app/globals.css` — modify CSS custom properties:
```css
:root {
  --primary: #550100;    /* Change brand color here */
  --secondary: #B5833E;  /* Change accent color here */
}
```

### Replace Images
Drop new images into `public/assets/` and update the `src` props in each component.

---

## 📝 Brand Voice

> UMEE = **You** + **Me** = *We*

The brand lives in the space between two people — shared over a slow cup of phin coffee, in a room that smells of stone and earth and roasted beans.

---

*Built with patience, like the phin.* ☕
