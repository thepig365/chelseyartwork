# Chelsey L. Artwork — Gallery V2 (Production Ready)

**Status**: ✅ Deployed on Vercel
**Last Updated**: January 2025

---

## What's Done

### 1) Content Architecture
✅ **Single Source of Truth**: All data in `/content/` directory
- `/content/artworks.ts` — artwork definitions (19 paintings)
- Artist info displayed via page components

Pages import and render content—they don't contain it.

### 2) Routes & Navigation
✅ **Navigation Labels**:
```
HOME / BIO / PORTFOLIO / EXHIBITIONS / CONTACT
```

✅ **Routes**:
- `/` — HOME (hero image + artist name)
- `/bio` — BIO (artist statement + academic recognition)
- `/selected-works` — PORTFOLIO (artwork grid with modal)
- `/exhibitions` — EXHIBITIONS (past + upcoming shows)
- `/contact` — CONTACT (studio enquiries)

### 3) Image Structure
✅ **Organized Assets**: `/public/images/` with subfolders
```
/public/images/
├── artworks/       (all artwork images)
├── hero/           (homepage hero)
└── studio/         (process photos)
```

### 4) Home Page
✅ **Minimal Design**:
- Fullscreen hero image (edge-to-edge)
- Artist name: "CHELSEY L."
- Clean, archival aesthetic
- **Nothing else** — no footer, no social links

### 5) Portfolio (Selected Works)
✅ **Deep Zoom Modal**:
- Click artwork → modal opens
- Scroll to zoom (up to 4x magnification)
- Drag to pan when zoomed
- ESC or click outside to close
- **Inquire button** → redirects to Contact page

✅ **Metadata Display**: Title / Year / Medium / Size

### 6) Exhibitions Page
✅ **Real Exhibition Entries**:
- Echo and Resonance (Town Hall Gallery, Boroondara)
- VAS Spring Select Exhibition 2025
- VAS Winter Select Exhibition 2025

### 7) Style (Architectural Theme)
✅ **Typography**:
- Courier New monospace font
- Warm background (#F4F3F0)
- Dark sidebar navigation (#1a1a1a)

✅ **Layout**:
- Fixed 220px left sidebar (desktop)
- Hamburger menu (mobile)
- Responsive design with clamp() padding

✅ **Mobile Responsive**:
- Hamburger navigation menu
- Stacked layouts for small screens
- Touch-friendly interactions

---

## How to Use

### Local Development
```bash
npm run dev      # http://localhost:3000 (hot reload)
npm run build    # Production build (verify no errors)
npm run start    # Run production locally
```

### Add Artwork
1. Save image to `/public/images/artworks/`
2. Edit `/content/artworks.ts` → add to array
3. Refresh http://localhost:3000/selected-works

### Update Bio
1. Edit `/app/bio/page.tsx`
2. Modify text content as needed

### Add Exhibition
1. Edit `/app/exhibitions/page.tsx`
2. Add entry to exhibitions array

---

## Verification Checklist

- [x] All artwork data in `/content/artworks.ts`
- [x] Routes: /, /bio, /selected-works, /exhibitions, /contact
- [x] Nav labels: HOME / BIO / PORTFOLIO / EXHIBITIONS / CONTACT
- [x] Images in `/public/images/artworks/`
- [x] HOME minimal: hero + artist name only
- [x] PORTFOLIO: deep zoom modal with Inquire → Contact
- [x] Mobile responsive (hamburger menu)
- [x] Architectural theme (Courier New, warm bg)
- [x] No social links, no prices anywhere
- [x] Build passes: `npm run build` ✓
- [x] Deployed to Vercel ✓

---

## File Structure

```
chelseyartwork/
├── app/
│   ├── page.tsx                    ← HOME (minimal hero)
│   ├── bio/page.tsx                ← BIO (artist statement)
│   ├── selected-works/page.tsx     ← PORTFOLIO (artwork grid)
│   ├── exhibitions/page.tsx        ← EXHIBITIONS
│   ├── contact/page.tsx            ← CONTACT
│   ├── layout.tsx
│   └── globals.css                 ← Architectural theme CSS
├── components/
│   ├── Navigation.tsx              ← Responsive nav (sidebar + hamburger)
│   └── ArtworkModal.tsx            ← Deep zoom viewer with Inquire
├── content/
│   └── artworks.ts                 ← Single source: all artworks
├── public/images/
│   └── artworks/                   ← All artwork images
├── .gitignore                      ← Excludes node_modules, .next
└── package.json
```

---

## Deployment

### GitHub Repository
- https://github.com/thepig365/chelseyartwork

### Vercel
- Connect GitHub repo to Vercel
- Auto-deploys on push to `main` branch

---

## Key Features

✨ **Architectural Theme**
- Warm background (#F4F3F0)
- Courier New monospace typography
- Fixed left sidebar navigation
- Professional gallery aesthetic

📱 **Fully Responsive**
- Desktop: 220px fixed sidebar
- Mobile: Hamburger menu with slide-down overlay
- Touch-friendly interactions

🎨 **Deep Zoom Gallery**
- Modal viewer with full zoom/pan controls
- Up to 4x magnification
- Inquire button links to Contact

📐 **Clean Architecture**
- All artwork data in `/content/artworks.ts`
- Pages are render-only
- Easy to maintain and update

⚡ **Production Ready**
- Builds without errors
- Optimized for Vercel deployment
- Git repository cleaned (.gitignore configured)

---

## Contact

Studio Enquiries: studio@chelseyartwork.com
"