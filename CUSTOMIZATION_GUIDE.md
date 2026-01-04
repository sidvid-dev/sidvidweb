# 🎨 Website Customization Guide

This guide will help you customize your new website with your own content, images, and branding.

## 📁 Project Structure

```
staticwebbhai/
├── app/
│   ├── page.tsx          # Main page (combines all sections)
│   ├── layout.tsx        # Site layout and metadata
│   └── globals.css       # Global styles
├── components/
│   ├── Hero.tsx          # Hero section (top banner)
│   ├── Welcome.tsx       # Welcome/About section
│   ├── Services.tsx      # Services section
│   ├── Portfolio.tsx     # Portfolio gallery
│   ├── Testimonials.tsx  # Client testimonials
│   ├── CTA.tsx          # Call-to-action section
│   └── Footer.tsx        # Footer with links
└── public/              # Place your images here
```

## 🚀 Getting Started

### Running the Website Locally

1. Open terminal in the project folder
2. Run: `npm run dev`
3. Open browser to: `http://localhost:3000`
4. The site will auto-reload when you make changes!

### Building for Production

```bash
npm run build
npm start
```

## ✏️ How to Customize

### 1. **Change Brand Name & Metadata**

**File:** `app/layout.tsx` (Lines 24-26)

```typescript
export const metadata: Metadata = {
  title: "Your Brand - Professional Photography & Videography",
  description: "Creating timeless memories...",
};
```

### 2. **Update Hero Section**

**File:** `components/Hero.tsx`

- **Line 11:** Change background image URL
- **Line 26:** Update main heading text "YOUR BRAND"
- **Line 33:** Update tagline text

**To use your own image:**
1. Place image in `public/` folder (e.g., `public/hero-bg.jpg`)
2. Change line 11 to: `backgroundImage: 'url(/hero-bg.jpg)'`

### 3. **Edit Welcome Section**

**File:** `components/Welcome.tsx`

- **Line 17:** Change section heading
- **Lines 25-29:** Update welcome text
- **Line 39:** Change button text

### 4. **Customize Services**

**File:** `components/Services.tsx` (Lines 6-24)

```typescript
const services = [
  {
    icon: Camera,  // Available icons: Camera, Video, Plane, Heart, Star, etc.
    title: 'Your Service',
    description: 'Your service description here.',
  },
  // Add more services...
];
```

**Available Icons:** Camera, Video, Plane, Heart, Star, Award, Users, Mail, Phone, MapPin, Clock, Calendar

### 5. **Update Portfolio Images**

**File:** `components/Portfolio.tsx` (Lines 6-29)

Replace placeholder images with your own:

```typescript
const portfolioItems = [
  {
    id: 1,
    title: 'Your Project Title',
    category: 'CATEGORY',
    image: '/your-image.jpg',  // Place in public/ folder
  },
];
```

### 6. **Edit Testimonials**

**File:** `components/Testimonials.tsx` (Lines 8-30)

```typescript
const testimonials = [
  {
    id: 1,
    name: 'Client Name',
    location: 'City, State',
    text: 'Client testimonial text here...',
    image: '/client-photo.jpg',
  },
];
```

### 7. **Modify Call-to-Action**

**File:** `components/CTA.tsx`

- **Line 11:** Change background image
- **Line 27:** Update heading
- **Line 36:** Update subheading
- **Line 47:** Change button text

### 8. **Update Footer**

**File:** `components/Footer.tsx`

- **Line 14:** Brand name
- **Lines 15-17:** Brand description
- **Lines 26-41:** Quick links
- **Lines 48-55:** Services list
- **Lines 62-69:** Contact information
- **Lines 77-106:** Social media links

## 🖼️ Working with Images

### Using Your Own Images

**Option 1: Local Images (Recommended)**
1. Place images in `public/` folder
2. Reference as: `image: '/my-image.jpg'`

**Option 2: External URLs**
1. Use full URL: `image: 'https://yoursite.com/image.jpg'`

### Image Optimization Tips

- Use JPG for photos (smaller file size)
- Use PNG for logos/graphics with transparency
- Recommended sizes:
  - Hero background: 1920x1080px
  - Portfolio images: 800x600px
  - Testimonial photos: 400x400px

## 🎨 Changing Colors

**File:** `components/[ComponentName].tsx`

Find and replace these Tailwind classes:

- `bg-neutral-800` → Dark backgrounds
- `bg-neutral-100` → Light backgrounds
- `text-neutral-800` → Dark text
- `text-white` → White text
- `border-neutral-800` → Border colors

**Example color schemes:**
- Blue theme: `bg-blue-800`, `text-blue-600`
- Green theme: `bg-green-800`, `text-green-600`
- Purple theme: `bg-purple-800`, `text-purple-600`

## 📱 Mobile Responsiveness

The site is already mobile-responsive! Test by:
1. Opening browser DevTools (F12)
2. Click device toolbar icon
3. Select different devices

All sections automatically adapt to mobile screens.

## 🔧 Common Customizations

### Add a New Section

1. Create new file: `components/NewSection.tsx`
2. Copy structure from existing component
3. Import in `app/page.tsx`
4. Add `<NewSection />` where you want it

### Remove a Section

In `app/page.tsx`, simply delete or comment out the component:

```typescript
// <Services />  ← This section won't show
```

### Change Fonts

**File:** `app/layout.tsx` (Lines 2-21)

Current fonts: Playfair Display, Montserrat, Raleway

To change, visit [Google Fonts](https://fonts.google.com/) and replace imports.

## 📞 Need Help?

- Check Next.js docs: https://nextjs.org/docs
- Tailwind CSS docs: https://tailwindcss.com/docs
- Framer Motion docs: https://www.framer.com/motion/

## 🚢 Deployment

Deploy to Vercel (Free):
1. Push code to GitHub
2. Visit https://vercel.com
3. Import your repository
4. Click Deploy!

---

**Happy Customizing! 🎉**

