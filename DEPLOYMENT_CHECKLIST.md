# Deployment Checklist — Chelsey Artwork Digital Temple

## Pre-Deployment (Local)

- [ ] `npm run dev` works without errors
- [ ] All 5 nav items appear: HOME / SELECTED WORKS / IN THE STUDIO / TEXTS / PRESS / PRIVATE VIEW
- [ ] HOME displays hero image + \"Chelsey C.\" + upcoming line
- [ ] SELECTED WORKS shows artworks grouped by series
- [ ] Click artwork → modal opens with zoom/pan controls
- [ ] IN THE STUDIO shows process photo grid
- [ ] TEXTS / PRESS displays curatorial statement + publications
- [ ] PRIVATE VIEW gate shows password form
- [ ] Enter correct password → see private collection
- [ ] Logout button clears auth
- [ ] `npm run build` completes without errors

## Environment Setup

### Local
- [ ] `.env.local` exists with `PRIVATE_VIEW_PASSWORD=chelsey` (or your password)
- [ ] `.env.local` is in `.gitignore` (not committed)

### Production (Vercel)
- [ ] Set environment variable `PRIVATE_VIEW_PASSWORD` in Vercel dashboard
  - Project Settings → Environment Variables
  - Add: `PRIVATE_VIEW_PASSWORD = your_password`

### Production (Self-Hosted)
- [ ] Set env var before running:
  ```bash
  export PRIVATE_VIEW_PASSWORD=your_password
  npm start
  ```

## Content Verification

- [ ] `/content/artworks.ts` has all works with correct image paths
- [ ] `/content/studio.ts` has all process photos
- [ ] `/content/texts.ts` has curatorial statement
- [ ] All image paths exist:
  - `/public/images/hero/hero.jpg`
  - `/public/images/artworks/<series>/*.jpg`
  - `/public/images/studio/*.jpg`
  - `/public/images/private/*.jpg` (if using private collection)

## Security Checklist

- [ ] Private images are in `/public/` (accessible to anyone who has the URL)
  - **Note**: This is acceptable if password-protected at app level
  - Images only exposed after authentication
  - URLs not disclosed publicly
  - For true security, consider server-side image serving

- [ ] Password stored in env var (not in code)
- [ ] `.env.local` not committed to git
- [ ] API route `/api/private/auth` validates password
- [ ] Middleware redirects unauthenticated users to `/private/gate`

## Browser Testing

### Desktop
- [ ] Chrome/Chromium
- [ ] Safari
- [ ] Firefox

### Mobile
- [ ] iOS Safari
- [ ] Android Chrome
- [ ] Responsive layout works (tap works instead of hover)

## Performance

- [ ] Images are optimized (JPG, not oversized)
- [ ] Hero image loads in <2s
- [ ] Page navigation is instant (no loader)
- [ ] Zoom/pan in modal is smooth

## Accessibility

- [ ] All images have alt text
- [ ] Navigation links are keyboard accessible
- [ ] Modal can be closed with ESC
- [ ] Text has sufficient contrast (black on white)

## Deployment Steps

### Vercel

1. **Connect Repository**
   ```bash
   git init
   git add .
   git commit -m \"Initial commit: Chelsey Artwork digital temple\"
   git branch -M main
   git remote add origin https://github.com/yourusername/chelseyartwork.git
   git push -u origin main
   ```

2. **Import in Vercel**
   - Go to https://vercel.com/new
   - Import your GitHub repository
   - Vercel auto-detects Next.js
   - Click \"Deploy\"

3. **Set Environment Variables**
   - In Vercel dashboard: Project → Settings → Environment Variables
   - Add: `PRIVATE_VIEW_PASSWORD` = `your_password`
   - Re-deploy for changes to take effect

4. **Test Deployment**
   - Visit your domain (e.g., `chelseyartwork.vercel.app`)
   - Test all routes
   - Test private view

### Self-Hosted (Node.js)

1. **Build**
   ```bash
   npm run build
   ```

2. **Set Environment**
   ```bash
   export NODE_ENV=production
   export PRIVATE_VIEW_PASSWORD=your_password
   ```

3. **Start Server**
   ```bash
   npm start
   # Server runs on localhost:3000 by default
   # Set PORT env var to change
   ```

### Self-Hosted (Docker)

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
ENV NODE_ENV=production
ENV PRIVATE_VIEW_PASSWORD=your_password
CMD [\"npm\", \"start\"]
```

Build: `docker build -t chelseyartwork .`
Run: `docker run -p 3000:3000 -e PRIVATE_VIEW_PASSWORD=your_password chelseyartwork`

## Post-Deployment

- [ ] Test all routes on production domain
- [ ] Verify password gate works
- [ ] Check console for errors (F12)
- [ ] Test on mobile
- [ ] Monitor Vercel analytics (if using Vercel)
- [ ] Set up monitoring/logging for self-hosted

## Maintenance

### Add New Artwork
1. Save image to `/public/images/artworks/<series>/`
2. Edit `/content/artworks.ts` → add to array
3. Commit & push (git) or manually upload files (self-hosted)
4. Deploy/redeploy

### Change Password
1. Update env var `PRIVATE_VIEW_PASSWORD`
2. Redeploy
3. Old sessions with old cookies will still have access until cookie expires (7 days)

### Update Content
1. Edit `/content/*.ts`
2. Commit & push
3. Vercel auto-redeploys on push
4. Self-hosted: manual redeploy

## Rollback

### Vercel
- Go to Deployments tab
- Click \"Promote\" on a previous deployment
- Instant rollback

### Git
```bash
git revert <commit-hash>
git push
```

### Manual
Keep backup of previous build:
```bash
cp -r .next .next.backup
npm run build  # new build
# If issue: replace .next with .next.backup
```

## Success Criteria

✅ All pages load without errors
✅ Navigation works smoothly
✅ Deep zoom modal functional
✅ Private view gate works
✅ Images load correctly
✅ Responsive on mobile
✅ Performance good (Lighthouse >90)
✅ Security: private images only accessible after auth
"