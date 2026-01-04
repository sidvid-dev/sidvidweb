# 📝 JSON Data Configuration Guide

Your website is now **100% JSON-configurable**! You can update all content, images, and settings by editing simple JSON files in the `data/` folder. **No coding required!**

---

## ⚠️ IMPORTANT: Single Source of Truth

**Brand name, tagline, description, and contact info** are stored in **`site-config.json` ONLY**.

- ✅ **Edit `site-config.json`** to change brand name, tagline, description, contact info
- ❌ **DO NOT edit** `hero.json`, `navigation.json`, or `footer.json` for these values
- ✅ These values automatically sync across all components (Hero, Navbar, Footer, WhatsApp)

---

## 📁 File Structure

```
data/
├── site-config.json      # Global site settings (brand, contact, WhatsApp)
├── hero.json            # Hero section (main banner)
├── welcome.json         # Welcome/About section
├── services.json        # Services section
├── portfolio.json       # Portfolio gallery
├── testimonials.json    # Client testimonials
├── cta.json            # Call-to-action section
├── navigation.json      # Navigation menu
├── social.json          # Social media links
└── footer.json          # Footer content
```

---

## 🎯 Quick Start - 3 Essential Updates

### 1. **Update Your Brand Name** (2 minutes)

**File:** `data/site-config.json`

```json
{
  "brandName": "YOUR BRAND",  ← Change this to your business name
  "tagline": "CRAFTING BEAUTIFUL EXPERIENCES FOR GENUINE CONNECTIONS"
}
```

### 2. **Update Contact Information** (3 minutes)

**File:** `data/site-config.json`

```json
{
  "contact": {
    "email": "info@yourbrand.com",     ← Your email
    "phone": "+1 (555) 123-4567",      ← Your phone
    "address": {
      "street": "123 Main Street",     ← Your address
      "cityState": "City, State 12345" ← Your city/state
    }
  }
}
```

### 3. **Update WhatsApp Number** (1 minute)

**File:** `data/site-config.json`

```json
{
  "whatsapp": {
    "number": "1234567890",  ← Your WhatsApp number (country code + number, no spaces)
    "greeting": "How can we make your day better?",
    "replyTime": "Typical reply within a few hours"
  }
}
```

**Example:** For India +91 98765 43210 → use `"919876543210"`

---

## 📄 Detailed File Guide

### 1. `site-config.json` - Global Settings

**What it controls:** Brand name, contact info, WhatsApp, SEO

```json
{
  "brandName": "YOUR BRAND",
  "tagline": "CRAFTING BEAUTIFUL EXPERIENCES FOR GENUINE CONNECTIONS",
  "description": "Creating timeless memories...",
  "contact": {
    "email": "info@yourbrand.com",
    "phone": "+1 (555) 123-4567",
    "address": {
      "street": "123 Main Street",
      "cityState": "City, State 12345"
    }
  },
  "whatsapp": {
    "number": "1234567890",
    "greeting": "How can we make your day better?",
    "replyTime": "Typical reply within a few hours",
    "defaultMessage": "Hello! I would like to inquire about your photography services."
  },
  "seo": {
    "title": "Your Brand - Professional Photography & Videography",
    "description": "Creating timeless memories...",
    "keywords": ["photography", "videography", "wedding photography"]
  }
}
```

### 2. `hero.json` - Hero Section (Top Banner)

**What it controls:** Main banner image, heading, tagline

```json
{
  "backgroundImage": "https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=80",
  "heading": "YOUR BRAND",
  "subheading": "CRAFTING BEAUTIFUL EXPERIENCES FOR GENUINE CONNECTIONS",
  "brightness": 0.7,
  "showScrollIndicator": true
}
```

**To use your own image:**
1. Place image in `public/images/` folder (e.g., `hero-bg.jpg`)
2. Change `backgroundImage` to: `"/images/hero-bg.jpg"`

### 3. `welcome.json` - Welcome/About Section

**What it controls:** About section text and button

```json
{
  "heading": "WELCOME TO OUR STUDIO",
  "content": "We specialize in creating timeless memories through our lens...",
  "buttonText": "LEARN MORE",
  "buttonLink": "#portfolio"
}
```

### 4. `services.json` - Services Section

**What it controls:** Your service offerings

```json
{
  "heading": "OUR SERVICES",
  "items": [
    {
      "id": 1,
      "icon": "Camera",
      "title": "Photography",
      "description": "Professional photography services..."
    }
  ]
}
```

**Available Icons:**
- `Camera`, `Video`, `Plane`, `Heart`, `Star`, `Award`
- `Users`, `Mail`, `Phone`, `MapPin`, `Clock`, `Calendar`

**To add a new service:**
```json
{
  "id": 4,
  "icon": "Heart",
  "title": "Wedding Photography",
  "description": "Capturing your special day with love and care."
}
```

### 5. `portfolio.json` - Portfolio Gallery

**What it controls:** Portfolio images and categories

```json
{
  "heading": "PORTFOLIO",
  "items": [
    {
      "id": 1,
      "title": "Wedding Collection",
      "category": "WEDDINGS",
      "image": "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&q=80",
      "alt": "Beautiful wedding photography collection"
    }
  ]
}
```

**To use your own images:**
1. Place images in `public/images/portfolio/` folder
2. Update `image` path: `"/images/portfolio/wedding-1.jpg"`

### 6. `testimonials.json` - Client Testimonials

**What it controls:** Customer reviews and ratings

```json
{
  "heading": "WHAT OUR CLIENTS SAY",
  "items": [
    {
      "id": 1,
      "name": "Sarah Johnson",
      "location": "New York, NY",
      "text": "Working with this team was an absolute dream!...",
      "image": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
      "rating": 5
    }
  ]
}
```

### 7. `cta.json` - Call-to-Action Section

**What it controls:** Contact section with background image

```json
{
  "backgroundImage": "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=1920&q=80",
  "heading": "READY TO GET STARTED?",
  "subheading": "LET'S CREATE SOMETHING BEAUTIFUL TOGETHER",
  "buttonText": "CONTACT US",
  "buttonIcon": "MessageCircle",
  "buttonLink": "whatsapp",
  "brightness": 0.6
}
```

**Button Link Options:**
- `"whatsapp"` - Opens WhatsApp chat (uses number from site-config.json)
- `"mailto:your@email.com"` - Opens email client
- `"#contact"` - Scrolls to contact section
- Any URL - Opens that URL

**Button Icon Options:**
- `"MessageCircle"` - WhatsApp/chat icon
- `"Mail"` - Email icon

### 8. `navigation.json` - Navigation Menu

**What it controls:** Top navigation bar links

```json
{
  "logo": "YOUR BRAND",
  "links": [
    { "name": "HOME", "href": "#home" },
    { "name": "ABOUT", "href": "#about" },
    { "name": "SERVICES", "href": "#services" },
    { "name": "PORTFOLIO", "href": "#portfolio" },
    { "name": "TESTIMONIALS", "href": "#testimonials" },
    { "name": "CONTACT", "href": "#contact" }
  ]
}
```

### 9. `social.json` - Social Media Links

**What it controls:** Social media icons and links

```json
{
  "instagram": {
    "url": "https://instagram.com/yourbrand",
    "enabled": true
  },
  "facebook": {
    "url": "https://facebook.com/yourbrand",
    "enabled": true
  },
  "twitter": {
    "url": "https://twitter.com/yourbrand",
    "enabled": false
  }
}
```

**To hide a social icon:** Set `"enabled": false`

### 10. `footer.json` - Footer Content

**What it controls:** Footer links and copyright

**Note:** Brand name and description come from `site-config.json`, not this file.

```json
{
  "quickLinks": [
    { "name": "Home", "href": "#home" },
    { "name": "About", "href": "#about" }
  ],
  "services": [
    "Photography",
    "Videography",
    "Drone Art"
  ],
  "copyright": "© {year} Your Brand. All rights reserved."
}
```

**Note:** `{year}` is automatically replaced with the current year.

---

## 🖼️ Working with Images

### Option 1: Use Your Own Images (Recommended)

1. **Create folders:**
   ```
   public/
   └── images/
       ├── hero-bg.jpg
       ├── cta-bg.jpg
       ├── portfolio/
       │   ├── wedding-1.jpg
       │   ├── wedding-2.jpg
       │   └── ...
       └── testimonials/
           ├── client-1.jpg
           └── ...
   ```

2. **Update JSON files:**
   ```json
   "image": "/images/portfolio/wedding-1.jpg"
   ```

### Option 2: Use External URLs

Keep using Unsplash or other image hosting:
```json
"image": "https://images.unsplash.com/photo-123456?w=800&q=80"
```

---

## ✅ Common Tasks

### Add a New Service

**File:** `data/services.json`

Add to the `items` array:
```json
{
  "id": 4,
  "icon": "Heart",
  "title": "Wedding Photography",
  "description": "Capturing your special day with love and care."
}
```

### Add a New Portfolio Item

**File:** `data/portfolio.json`

Add to the `items` array:
```json
{
  "id": 5,
  "title": "Corporate Events",
  "category": "CORPORATE",
  "image": "/images/portfolio/corporate-1.jpg",
  "alt": "Professional corporate event photography"
}
```

### Add a New Testimonial

**File:** `data/testimonials.json`

Add to the `items` array:
```json
{
  "id": 4,
  "name": "John Smith",
  "location": "Los Angeles, CA",
  "text": "Amazing work! Highly recommended!",
  "image": "/images/testimonials/john.jpg",
  "rating": 5
}
```

### Change Social Media Links

**File:** `data/social.json`

Update URLs and enable/disable:
```json
{
  "instagram": {
    "url": "https://instagram.com/yourhandle",
    "enabled": true
  },
  "linkedin": {
    "url": "https://linkedin.com/company/yourcompany",
    "enabled": true
  }
}
```

---

## 🚀 After Making Changes

1. **Save the JSON file**
2. **Refresh your browser** (Ctrl+Shift+R or Cmd+Shift+R)
3. **Check the changes** on your website

**Note:** In development mode (`npm run dev`), changes appear immediately. In production, you may need to rebuild:
```bash
npm run build
npm start
```

---

## ⚠️ Important Tips

1. **JSON Syntax:** Be careful with commas, quotes, and brackets
2. **Image Paths:** Use `/images/...` for local images (not `./images/...`)
3. **WhatsApp Number:** Include country code, no + or spaces
4. **Backup:** Keep a copy of your JSON files before making major changes
5. **Validation:** Use a JSON validator (jsonlint.com) if you get errors

---

## 🆘 Troubleshooting

### Website shows blank or errors?
- Check JSON syntax (missing comma, extra comma, unclosed bracket)
- Use jsonlint.com to validate your JSON

### Images not showing?
- Check file path is correct
- Make sure image is in `public/` folder
- Use `/images/...` not `./images/...`

### Changes not appearing?
- Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
- Clear browser cache
- Restart development server

---

## 📞 Need Help?

If you encounter any issues:
1. Check the JSON syntax
2. Verify file paths
3. Check browser console for errors (F12)
4. Restart the development server

---

**🎉 Congratulations! Your website is now fully customizable through JSON files. No coding knowledge required!**
