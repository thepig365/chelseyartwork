# Chelsey Artwork — High-End Gallery (Jade Fadojutimi Style)

## Architecture

This is a production-ready fine-art website built with:
- **Next.js 16** (TypeScript) + **Tailwind CSS**
- **Single source of truth**: `/content/` directory for all data
- **White Cube Aesthetic**: Pure white background, high-contrast black typography, serif headlines

---

## 1) Content Files (Single Source of Truth)

All data is in `/content/` — do NOT edit pages to add content.

### `/content/artworks.ts`
- Define all artwork in a single list
- Shape: `id`, `title`, `year`, `medium`, `size`, `image`
- Use placeholders (e.g., `[Artwork Title]`) for missing metadata.
- No pricing. No availability fields.

---

## 2) Image Placement (On Disk)

All images live under `/public/images/` with archival naming:

```
/public/images/
├── hero/
│   └── hero.png                    ← HOME slideshow source
├── artworks/
│   └── [loose images]              ← Main gallery assets
└── studio/                         ← Process photos (internal)
```

### Naming Convention
Use **YYYY_category_NN.jpg** format consistently for organized series.
Use original filenames for loose archival pieces in `/public/images/artworks/` root (to be organized later).

---

## 3) Styling Rules (High-End Gallery)

- **Colors**: Pure White (#FFFFFF) background, Deep Black (#000000) typography.
- **Typography**: 
  - **Headlines (H1, H2)**: Sharp Serif (Times New Roman / Playfair Display). Large, bold, centered.
  - **Nav Links**: Utilitarian Sans-Serif. Tiny (10px), wide letter-spacing (0.4em).
  - **Metadata**: Serif italics for artwork titles.
- **Layout**: 
  - **Single Gallery**: All artworks are listed in a unified grid on the Portfolio page.
  - **Breathing Room**: Full-bleed slideshow on Home. 
  - **Whitespace**: Gaps of 120px between artworks in the grid.
  - **Nav**: Hidden hamburger menu with Electric Blue sidebar.
- **No clutter**: No social links, no prices, no "Buy" buttons.

---

## 4) Adding Content (Step-by-Step)

### Add a New Artwork
1. Place image at `/public/images/artworks/<series>/<filename>.jpg`
2. Edit `/content/artworks.ts` → add to array:
   ```typescript
   {
     id: 'unique-slug',
     title: 'Artwork Title',
     year: 2024,
     medium: 'Your medium',
     size: '100 x 70 cm',
     image: '/images/artworks/archive/your_file.jpg',
     series: 'Archive',
   }
   ```
3. Page auto-updates (hot reload)

---

## File Structure

```
/
├── app/
│   ├── page.tsx                    ← HOME (uses hero.png)
│   ├── selected-works/page.tsx     ← PORTFOLIO
│   ├── layout.tsx
│   └── globals.css
├── components/
│   ├── Navigation.tsx              ← Fixed nav
│   └── ArtworkModal.tsx            ← Deep zoom viewer
├── content/
│   └── artworks.ts                 ← Single source of truth
├── public/images/                  ← All images here
└── CONTENT_STRUCTURE.md            ← This file
```
