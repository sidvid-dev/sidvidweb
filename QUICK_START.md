# ⚡ Quick Start Guide

## 🚀 Running the Website

### First Time Setup
```bash
# 1. Open terminal in project folder
# 2. Install dependencies (only needed once)
npm install

# 3. Start development server
npm run dev

# 4. Open browser to:
http://localhost:3000
```

### Every Time After
```bash
npm run dev
```

## 📝 5-Minute Customization

### 1. Change Your Brand Name (2 minutes)

**File: `components/Hero.tsx`** - Line 26
```typescript
YOUR BRAND  →  Change to your brand name
```

**File: `components/Footer.tsx`** - Line 14
```typescript
YOUR BRAND  →  Change to your brand name
```

**File: `app/layout.tsx`** - Line 24
```typescript
title: "Your Brand - ..."  →  Change to your brand
```

### 2. Update Contact Info (1 minute)

**File: `components/Footer.tsx`** - Lines 62-69
```typescript
info@yourbrand.com     →  Your email
+1 (555) 123-4567      →  Your phone
123 Main Street        →  Your address
City, State 12345      →  Your location
```

### 3. Add Your First Image (2 minutes)

1. Save your image in `public/` folder as `hero.jpg`
2. **File: `components/Hero.tsx`** - Line 11
```typescript
// Change from:
backgroundImage: 'url(https://images.unsplash.com/...)'

// To:
backgroundImage: 'url(/hero.jpg)'
```

## 🖼️ Replace All Images

### Hero Section
**File:** `components/Hero.tsx` - Line 11
- Save as: `public/hero-bg.jpg`
- Size: 1920x1080px

### Portfolio Images
**File:** `components/Portfolio.tsx` - Lines 6-29
- Save as: `public/portfolio-1.jpg`, `portfolio-2.jpg`, etc.
- Size: 800x600px each

### Testimonial Photos
**File:** `components/Testimonials.tsx` - Lines 8-30
- Save as: `public/client-1.jpg`, `client-2.jpg`, etc.
- Size: 400x400px each

### CTA Background
**File:** `components/CTA.tsx` - Line 11
- Save as: `public/cta-bg.jpg`
- Size: 1920x1080px

## ✏️ Update Text Content

### Welcome Section
**File:** `components/Welcome.tsx`
- Line 17: Heading
- Lines 25-29: Description text
- Line 39: Button text

### Services
**File:** `components/Services.tsx` - Lines 6-24
```typescript
{
  title: 'Your Service Name',
  description: 'Your service description',
}
```

### Testimonials
**File:** `components/Testimonials.tsx` - Lines 8-30
```typescript
{
  name: 'Client Name',
  location: 'City, State',
  text: 'Client testimonial...',
}
```

## 🎨 Change Colors

Find and replace these Tailwind classes in any component:

### Dark Backgrounds
`bg-neutral-800` → `bg-blue-800` (or any color)

### Light Backgrounds
`bg-neutral-100` → `bg-blue-50`

### Text Colors
`text-neutral-800` → `text-blue-800`

### Borders
`border-neutral-800` → `border-blue-800`

## 🔧 Common Tasks

### Add a New Service
**File:** `components/Services.tsx` - After line 24
```typescript
{
  icon: Heart,  // Choose from: Camera, Video, Plane, Heart, Star, Award
  title: 'NEW SERVICE',
  description: 'Description here.',
},
```

### Add a New Portfolio Item
**File:** `components/Portfolio.tsx` - After line 29
```typescript
{
  id: 5,
  title: 'New Project',
  category: 'CATEGORY',
  image: '/your-image.jpg',
},
```

### Add a New Testimonial
**File:** `components/Testimonials.tsx` - After line 30
```typescript
{
  id: 4,
  name: 'New Client',
  location: 'City, State',
  text: 'Testimonial text...',
  image: '/client-photo.jpg',
},
```

### Remove a Section
**File:** `app/page.tsx`
```typescript
// Comment out or delete the line:
// <Services />  ← This section won't show
```

## 🌐 Deploy to Internet

### Option 1: Vercel (Easiest - Free)
1. Push code to GitHub
2. Go to https://vercel.com
3. Click "Import Project"
4. Select your repository
5. Click "Deploy"
6. Done! You get a free URL

### Option 2: Netlify (Free)
1. Push code to GitHub
2. Go to https://netlify.com
3. Click "Add new site"
4. Select your repository
5. Build command: `npm run build`
6. Publish directory: `.next`
7. Click "Deploy"

## 🆘 Troubleshooting

### Site won't start?
```bash
# Delete node_modules and reinstall
rm -rf node_modules
npm install
npm run dev
```

### Changes not showing?
1. Save the file (Ctrl+S)
2. Wait 2-3 seconds
3. Refresh browser (Ctrl+R)

### Error messages?
1. Check the terminal for error details
2. Make sure all files are saved
3. Restart dev server: Stop (Ctrl+C) then `npm run dev`

## 📚 Need More Help?

- **Detailed Guide:** See `CUSTOMIZATION_GUIDE.md`
- **Technical Docs:** See `README.md`
- **Project Info:** See `PROJECT_SUMMARY.md`

## ⌨️ Keyboard Shortcuts

- **Save file:** `Ctrl + S` (Windows) or `Cmd + S` (Mac)
- **Stop server:** `Ctrl + C` in terminal
- **Refresh browser:** `Ctrl + R` or `F5`
- **Open DevTools:** `F12`

---

**Remember:** The site auto-reloads when you save changes! 🎉

