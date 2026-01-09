# Chelsey Artwork — Digital Temple (Refactor Complete)

**Status**: ✅ Production Ready

---

## What's Done

### 1) Content Architecture
✅ **Single Source of Truth**: All data in `/content/` directory
- `/content/artworks.ts` — artwork definitions (no hardcoded in pages)
- `/content/studio.ts` — studio/process photos
- `/content/texts.ts` — curatorial statement + publications

Pages import and render content—they don't contain it.

### 2) Routes & Navigation
✅ **Exact Navigation Labels**:
```
HOME / SELECTED WORKS / IN THE STUDIO / TEXTS / PRESS / PRIVATE VIEW
```

✅ **Routes**:
- `/` — HOME
- `/selected-works` — SELECTED WORKS
- `/studio` — IN THE STUDIO
- `/texts` — TEXTS / PRESS
- `/private` — PRIVATE VIEW (authenticated)
- `/private/gate` — Password gate (middleware redirect)

No other pages. No shop, about, contact.

### 3) Image Structure
✅ **Archival Hierarchy**: `/public/images/` with organized subfolders
```
/public/images/
├── hero/hero.jpg
├── artworks/asemic-writing/, bio-abstract/, specters/, archive/
├── studio/
└── private/
```

✅ **Naming Convention**: `YYYY_category_NN.jpg`
- Example: `2024_asemic-writing_01.jpg`
- Consistent, metadata-rich, not random

### 4) Home Page
✅ **Minimal Spec Only**:
- Fullscreen hero image (edge-to-edge)
- Small artist name: \"Chelsey C.\"
- Optional: Single-line upcoming note
- **Nothing else** — no footer, no social links, no extra text

### 5) Selected Works
✅ **Deep Zoom Modal**:
- Click artwork → modal opens
- Scroll to zoom (up to 4x magnification)
- Drag to pan when zoomed
- ESC or click outside to close

✅ **Metadata Only**: Title / Year / Medium / Size
- No descriptions
- No prices
- No \"Buy\" or \"Inquire\" buttons

### 6) Private View (Server-Side Auth)
✅ **Protected Route**:
- Middleware checks for `private_view_auth` cookie
- Unauthenticated users redirected to `/private/gate`
- API validates password against `PRIVATE_VIEW_PASSWORD` env var

✅ **Password Gate** (`/private/gate`):
- Clean form
- Submit validates via POST to `/api/private/auth`
- On success: sets httpOnly cookie + redirects to `/private`
- On fail: shows error, clears input

✅ **Private Collection** (`/private`):
- Only renders if cookie present
- Shows private works grid
- Logout button clears cookie + redirects to gate
- Private images never exposed to unauthenticated clients

### 7) Style (Cold, Minimal, Expensive)
✅ **Typography**:
- Small font sizes (xs, sm)
- Light font-weight
- Wide letter-spacing (tracking)

✅ **Whitespace**: Generous padding, minimal visual density

✅ **Interactions**: Opacity transitions only (no animations, no bounce)

✅ **No Clutter**:
- Zero social links
- Zero prices
- Zero shop buttons
- Zero newsletter signup

---

## How to Use

### Local Development
```bash
npm run dev      # http://localhost:3000 (hot reload)
npm run build    # Production build (verify no errors)
npm run start    # Run production locally
```

### Add Artwork
1. Save image: `/public/images/artworks/asemic-writing/2024_asemic-writing_03.jpg`
2. Edit `/content/artworks.ts` → add to array
3. Refresh http://localhost:3000/selected-works

### Add Studio Image
1. Save image: `/public/images/studio/2024_process_texture_02.jpg`
2. Edit `/content/studio.ts` → add to array
3. Refresh http://localhost:3000/studio

### Change Password
1. Edit `.env.local` → `PRIVATE_VIEW_PASSWORD=newpassword`
2. Restart dev server or next request picks it up
3. Test at http://localhost:3000/private/gate

### Update Curatorial Statement
1. Edit `/content/texts.ts` → `curatoralStatement` string
2. Refresh http://localhost:3000/texts

See **IMAGE_PLACEMENT_GUIDE.md** for detailed step-by-step instructions.

---

## Verification Checklist

- [x] All data in `/content/` (not in page.tsx)
- [x] Routes exact: /, /selected-works, /studio, /texts, /private
- [x] Nav labels exact: HOME / SELECTED WORKS / IN THE STUDIO / TEXTS / PRESS / PRIVATE VIEW
- [x] Images in `/public/images/...` with archival naming
- [x] HOME minimal: hero + name + upcoming only
- [x] SELECTED WORKS: deep zoom modal + metadata only
- [x] PRIVATE VIEW: server-side auth (middleware + API)
- [x] Private images not visible until authenticated
- [x] No social links, no prices, no shop anywhere
- [x] Cold, minimal aesthetic (small type, whitespace, opacity transitions)
- [x] `.env.local` has `PRIVATE_VIEW_PASSWORD`
- [x] Build passes: `npm run build` ✓
- [x] Dev server runs: `npm run dev` ✓

---

## File Structure

```
chelseyartwork/
├── app/
│   ├── page.tsx                    ← HOME (minimal)
│   ├── selected-works/page.tsx     ← SELECTED WORKS (uses /content/artworks)
│   ├── studio/page.tsx             ← IN THE STUDIO (uses /content/studio)
│   ├── texts/page.tsx              ← TEXTS / PRESS (uses /content/texts)
│   ├── private/
│   │   ├── page.tsx                ← Private collection (authenticated)
│   │   └── gate/page.tsx           ← Password gate
│   ├── api/private/
│   │   ├── auth/route.ts           ← Validate password, set cookie
│   │   └── logout/route.ts         ← Clear cookie
│   ├── layout.tsx
│   └── globals.css
├── components/
│   ├── Navigation.tsx              ← Fixed nav (5 items)
│   └── ArtworkModal.tsx            ← Deep zoom viewer
├── content/
│   ├── artworks.ts                 ← Single source: all artworks
│   ├── studio.ts                   ← Single source: all studio images
│   └── texts.ts                    ← Single source: statements + publications
├── public/images/
│   ├── hero/hero.jpg
│   ├── artworks/asemic-writing/, bio-abstract/, specters/, archive/
│   ├── studio/
│   └── private/
├── middleware.ts                   ← Auth middleware for /private
├── .env.local                      ← Password (git-ignored)
├── .env.example                    ← Template
├── CONTENT_STRUCTURE.md            ← Complete setup guide
├── IMAGE_PLACEMENT_GUIDE.md        ← How to add images
└── package.json
```

---

## Environment Variables

### .env.local (Required)
```
PRIVATE_VIEW_PASSWORD=chelsey
```

Do NOT commit to git. This file is in `.gitignore`.

### On Deployment
**Vercel**: Set `PRIVATE_VIEW_PASSWORD` in Project Settings → Environment Variables

**Self-Hosted**: Export before starting:
```bash
export PRIVATE_VIEW_PASSWORD=your_password
npm start
```

---

## Key Features

✨ **Authority-First Design**
- Clean, minimal aesthetic
- Large whitespace
- Cold tone (expensive look)
- No commercial noise

🔐 **Secure Private View**
- Server-side authentication
- Password validated against env var
- Images not exposed to unauthenticated clients
- HttpOnly cookies (client JS cannot access)

📐 **Single Source of Truth**
- All content in `/content/`
- Pages are render-only (no hardcoded data)
- Easy to manage and update

🎨 **Deep Zoom Gallery**
- Modal viewer with full zoom/pan controls
- Supports up to 4x magnification
- Smooth interactions
- Metadata always visible

📱 **Responsive**
- Mobile, tablet, desktop
- Flexible grid layouts
- Touch-friendly on mobile

⚡ **Production Ready**
- Builds without errors
- No console warnings (except deprecated middleware warning)
- Hot reload in development
- Optimized assets

---

## Next Steps

1. **Add Your Images**:
   - Replace placeholder images in `/public/images/`
   - Use exact naming: `YYYY_category_NN.jpg`
   - See IMAGE_PLACEMENT_GUIDE.md

2. **Update Content**:
   - Edit `/content/artworks.ts` for your works
   - Edit `/content/studio.ts` for process photos
   - Edit `/content/texts.ts` for your statement

3. **Customize** (Optional):
   - Change hero image path in page.tsx
   - Adjust colors in `app/globals.css`
   - Modify spacing in Tailwind config
   - Change password in `.env.local`

4. **Deploy**:
   - Vercel: Connect git repo, set env vars
   - Self-hosted: `npm run build` + `npm start` + set env vars

---

## Support

See these files for detailed guidance:
- **CONTENT_STRUCTURE.md** — Complete architecture & setup
- **IMAGE_PLACEMENT_GUIDE.md** — Step-by-step image instructions
- **Code comments** — Throughout components and pages
"