# 🌟 Modern Static Website

A beautiful, mobile-first static website built with Next.js 14, TypeScript, and Tailwind CSS. Inspired by modern photography portfolio designs with a focus on elegance and user experience.

![Next.js](https://img.shields.io/badge/Next.js-16.0-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38bdf8)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.0-ff0055)

## ✨ Features

- 🎨 **Modern Design** - Clean, elegant, and professional aesthetic
- 📱 **Mobile-First** - Fully responsive on all devices
- ⚡ **Fast Performance** - Optimized with Next.js 14 and Turbopack
- 🎭 **Smooth Animations** - Beautiful transitions with Framer Motion
- 🖼️ **Image Optimization** - Automatic image optimization with Next.js Image
- 🎯 **SEO Ready** - Optimized metadata and semantic HTML
- 🔧 **Easy to Customize** - Well-organized components and clear structure
- 📝 **TypeScript** - Type-safe code for better development experience

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Clone or download this project**

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 📂 Project Structure

```
staticwebbhai/
├── app/
│   ├── page.tsx          # Main homepage
│   ├── layout.tsx        # Root layout with fonts & metadata
│   ├── globals.css       # Global styles
│   └── favicon.ico       # Site icon
├── components/
│   ├── Hero.tsx          # Hero section with full-screen image
│   ├── Welcome.tsx       # Welcome/About section
│   ├── Services.tsx      # Services showcase (3-column grid)
│   ├── Portfolio.tsx     # Portfolio gallery with hover effects
│   ├── Testimonials.tsx  # Client testimonials carousel
│   ├── CTA.tsx          # Call-to-action section
│   └── Footer.tsx        # Footer with social links
├── public/              # Static assets (images, icons)
├── CUSTOMIZATION_GUIDE.md  # Detailed customization instructions
└── package.json         # Project dependencies
```

## 🎨 Sections Overview

### 1. **Hero Section**
- Full-screen background image
- Animated heading and tagline
- Scroll indicator

### 2. **Welcome Section**
- Introduction text
- Call-to-action button
- Fade-in animations

### 3. **Services Section**
- 3-column responsive grid
- Icon-based service cards
- Hover effects

### 4. **Portfolio Gallery**
- 2-column responsive grid
- Image hover overlays
- Category labels

### 5. **Testimonials**
- Client reviews carousel
- Navigation controls
- Client photos

### 6. **Call-to-Action**
- Background image overlay
- Contact button
- Centered content

### 7. **Footer**
- Quick links
- Services list
- Contact information
- Social media icons

## 🛠️ Technology Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4.0
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Fonts:** Google Fonts (Playfair Display, Montserrat, Raleway)
- **Image Optimization:** Next.js Image component

## 📝 Customization

For detailed customization instructions, see [CUSTOMIZATION_GUIDE.md](./CUSTOMIZATION_GUIDE.md)

**Quick customizations:**

1. **Change brand name:** Edit `app/layout.tsx` and `components/Hero.tsx`
2. **Update images:** Replace URLs in component files or add to `public/` folder
3. **Modify colors:** Update Tailwind classes in components
4. **Edit content:** Update text in each component file
5. **Add/remove sections:** Edit `app/page.tsx`

## 🎯 Key Features Explained

### Mobile-First Design
All components are designed mobile-first and scale up beautifully to desktop screens using Tailwind's responsive utilities.

### Smooth Animations
Framer Motion provides:
- Fade-in effects on scroll
- Smooth transitions
- Interactive hover states

### Image Placeholders
All images use Unsplash placeholders. Simply replace with your own images in the `public/` folder or update URLs.

### Type Safety
TypeScript ensures code quality and catches errors during development.

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Click "Deploy"

### Deploy to Netlify

1. Push your code to GitHub
2. Visit [netlify.com](https://netlify.com)
3. Import your repository
4. Build command: `npm run build`
5. Publish directory: `.next`

### Deploy to Other Platforms

This is a standard Next.js app and can be deployed to any platform that supports Node.js.

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

This is a client project template. Feel free to customize it for your needs!

## 📄 License

This project is provided as-is for the client's use.

## 🆘 Support

For questions or issues:
1. Check the [CUSTOMIZATION_GUIDE.md](./CUSTOMIZATION_GUIDE.md)
2. Review [Next.js Documentation](https://nextjs.org/docs)
3. Check [Tailwind CSS Documentation](https://tailwindcss.com/docs)

---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS**
