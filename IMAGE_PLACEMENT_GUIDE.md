# Image Placement & Naming Guide

## Quick Start

All images go in `/public/images/` with archival naming: `YYYY_category_01.jpg`

## Directory Structure

Copy this exact structure (directories already exist):

```
/public/images/
├── hero/
│   └── hero.jpg                              ← HOME hero image
├── artworks/
│   ├── asemic-writing/
│   │   ├── 2024_asemic-writing_01.jpg
│   │   └── 2024_asemic-writing_02.jpg
│   ├── bio-abstract/
│   │   ├── 2023_bio-abstract_01.jpg
│   │   └── 2023_bio-abstract_02.jpg
│   ├── specters/
│   │   ├── 2022_specter_01.jpg
│   │   └── 2022_specter_02.jpg
│   └── archive/
│       └── 2021_archive_01.jpg
├── studio/
│   ├── 2024_studio_detail_01.jpg
│   ├── 2024_studio_detail_02.jpg
│   ├── 2024_process_texture_01.jpg
│   ├── 2024_process_materiality_01.jpg
│   ├── 2024_studio_view_01.jpg
│   └── 2024_labor_detail_01.jpg
└── private/
    ├── private_work_01.jpg
    ├── private_work_02.jpg
    ├── private_work_03.jpg
    └── private_work_04.jpg
```

## Naming Convention

**Format**: `YYYY_category_NN.jpg`

- `YYYY` = Year (e.g., `2024`)
- `category` = Series/section slug (lowercase, hyphens):
  - Artworks: `asemic-writing`, `bio-abstract`, `specter`, `archive`
  - Studio: `studio_detail`, `process_texture`, `process_materiality`, `studio_view`, `labor_detail`
  - Private: `private_work`
- `NN` = Sequence number (01, 02, 03...)

### Examples
✓ `2024_asemic-writing_01.jpg` — Good
✓ `2023_bio-abstract_02.jpg` — Good
✓ `2022_specter_01.jpg` — Good
✓ `2024_studio_detail_03.jpg` — Good
✗ `photo_123.jpg` — Bad (random camera name)
✗ `artwork.jpg` — Bad (no metadata)

## Step-by-Step: Add an Artwork

1. **Save your image** at:
   ```
   /public/images/artworks/asemic-writing/2024_asemic-writing_03.jpg
   ```
   (Keep the exact filename format)

2. **Update `/content/artworks.ts`**:
   ```typescript
   {
     id: 'asemic-3',                    // unique slug
     title: 'Your Artwork Title',       // display title
     year: 2024,
     medium: 'Ink on paper',            // technique
     size: '42 x 30 cm',                // dimensions
     image: '/images/artworks/asemic-writing/2024_asemic-writing_03.jpg',
     series: 'Series I: Asemic Writing',
   }
   ```

3. **Check http://localhost:3000/selected-works**
   - Your artwork appears in the series group
   - Click to open modal viewer with deep zoom

## Step-by-Step: Add a Studio Image

1. **Save your image** at:
   ```
   /public/images/studio/2024_process_texture_02.jpg
   ```

2. **Update `/content/studio.ts`**:
   ```typescript
   {
     id: 'studio-7',
     title: 'Process: Texture Detail',
     year: 2024,
     image: '/images/studio/2024_process_texture_02.jpg',
   }
   ```

3. **Check http://localhost:3000/studio**
   - Your image appears in the 2-column grid

## Step-by-Step: Add Private Work

1. **Save your image** at:
   ```
   /public/images/private/private_work_05.jpg
   ```

2. **Update `/app/private/page.tsx`** (inside `privateWorks` array):
   ```typescript
   {
     id: 'private-5',
     title: 'Private Study V',
     image: '/images/private/private_work_05.jpg',
   }
   ```

3. **Visit http://localhost:3000/private/gate**
   - Enter password (check `.env.local` for current password)
   - See your private collection

## Hero Image

1. **Replace/place at**:
   ```
   /public/images/hero/hero.jpg
   ```
   (Must be named exactly `hero.jpg`)

2. **Visit http://localhost:3000**
   - Your hero image fills the screen

## File Specs

- **Format**: JPG (optimized) or PNG
- **Size**: High resolution (2000x2000px+)
- **Aspect ratio**: Any (will scale to fit)
- **Color**: sRGB or Adobe RGB

## Troubleshooting

### Image not showing
- Check path matches exactly in `/content/` or page
- Verify file exists at `/public/images/...`
- File extension must match (case-sensitive on Linux/Mac)

### 404 error
- Double-check image path in code
- Reload dev server: `npm run dev`
- Check browser console for 404s

### Page not updating
- Dev server auto-reloads when you edit content files
- If not: manually refresh browser (Cmd+R / Ctrl+R)

## Password Management

### Change Private View Password

1. **Edit `.env.local`**:
   ```
   PRIVATE_VIEW_PASSWORD=your_new_password
   ```

2. **Restart dev server** (or it picks up next request):
   ```bash
   npm run dev
   ```

3. **Test**: http://localhost:3000/private/gate

## On Deployment

### Vercel
Set env var `PRIVATE_VIEW_PASSWORD` in Vercel dashboard (Project Settings → Environment Variables)

### Self-Hosted
Set env var before `npm start`:
```bash
export PRIVATE_VIEW_PASSWORD=your_password
npm start
```
