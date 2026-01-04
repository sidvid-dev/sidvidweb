# 🔧 Troubleshooting Guide

Common issues and how to fix them.

## 🚨 Common Errors

### 1. "Module not found: Can't resolve 'package-name'"

**Problem:** A required package is missing.

**Solution:**
```bash
npm install
```

If that doesn't work:
```bash
rm -rf node_modules package-lock.json
npm install
```

### 2. "Invalid src prop on next/image, hostname not configured"

**Problem:** External image domain not allowed in Next.js config.

**Solution:** Already fixed in `next.config.ts`. If you add images from other domains, update the config:

```typescript
images: {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'images.unsplash.com',
    },
    {
      protocol: 'https',
      hostname: 'your-other-domain.com',  // Add new domains here
    },
  ],
}
```

### 3. "Port 3000 is already in use"

**Problem:** Another process is using port 3000.

**Solution:**
```bash
# Stop the current process (Ctrl+C)
# Then run on a different port:
npm run dev -- -p 3001
```

Or kill the process using port 3000:
```bash
# Windows:
netstat -ano | findstr :3000
taskkill /PID <PID_NUMBER> /F

# Mac/Linux:
lsof -ti:3000 | xargs kill
```

### 4. Changes Not Showing in Browser

**Problem:** Browser cache or dev server not reloading.

**Solution:**
1. Hard refresh: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
2. Clear browser cache
3. Restart dev server:
   ```bash
   # Stop: Ctrl+C
   npm run dev
   ```

### 5. "Error: ENOSPC: System limit for number of file watchers reached"

**Problem:** (Linux only) Too many files being watched.

**Solution:**
```bash
echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf
sudo sysctl -p
```

### 6. TypeScript Errors

**Problem:** Type errors in code.

**Solution:**
1. Check the error message carefully
2. Make sure all imports are correct
3. Restart TypeScript server in VS Code: `Ctrl+Shift+P` → "TypeScript: Restart TS Server"

### 7. Tailwind Classes Not Working

**Problem:** Styles not applying.

**Solution:**
1. Make sure class names are correct (no typos)
2. Check `globals.css` has `@import "tailwindcss";`
3. Restart dev server
4. Clear `.next` folder:
   ```bash
   rm -rf .next
   npm run dev
   ```

### 8. Images Not Loading

**Problem:** Images showing broken icon.

**Solution:**
1. Check file path is correct
2. Make sure image is in `public/` folder
3. Use `/image.jpg` not `./image.jpg` or `public/image.jpg`
4. Check file extension matches (`.jpg` vs `.jpeg` vs `.png`)

### 9. "Hydration Error"

**Problem:** Server and client HTML don't match.

**Solution:**
1. Don't use browser-only APIs in server components
2. Add `'use client'` to components using hooks or browser APIs
3. Check for mismatched HTML tags

### 10. Build Fails

**Problem:** `npm run build` shows errors.

**Solution:**
1. Fix all TypeScript errors first
2. Fix all ESLint warnings
3. Make sure all imports are correct
4. Check console for specific error messages

## 🔄 Reset Everything

If nothing works, try a complete reset:

```bash
# 1. Stop dev server (Ctrl+C)

# 2. Delete generated files
rm -rf .next
rm -rf node_modules
rm package-lock.json

# 3. Reinstall
npm install

# 4. Start fresh
npm run dev
```

## 🌐 Browser Issues

### Site Looks Broken
1. Clear browser cache
2. Try incognito/private mode
3. Try different browser
4. Check browser console for errors (F12)

### Mobile View Not Working
1. Open DevTools (F12)
2. Click device toolbar icon
3. Select a mobile device
4. Refresh page

## 📱 Deployment Issues

### Vercel Deployment Fails

**Check:**
1. Build works locally: `npm run build`
2. All environment variables are set
3. Node version matches (18+)
4. Check Vercel logs for specific error

### Site Works Locally But Not in Production

**Common causes:**
1. Environment variables not set
2. Image paths incorrect
3. API endpoints not configured
4. Build errors ignored

## 🆘 Getting Help

### Before Asking for Help

1. ✅ Read the error message carefully
2. ✅ Check this troubleshooting guide
3. ✅ Try restarting dev server
4. ✅ Try clearing cache
5. ✅ Check browser console (F12)

### Where to Get Help

1. **Next.js Docs:** https://nextjs.org/docs
2. **Tailwind Docs:** https://tailwindcss.com/docs
3. **Stack Overflow:** Search for your error message
4. **Next.js Discord:** https://nextjs.org/discord
5. **GitHub Issues:** Check if it's a known issue

### What to Include When Asking

1. Full error message
2. What you were trying to do
3. What you've already tried
4. Your Node version: `node --version`
5. Your npm version: `npm --version`

## 🔍 Debugging Tips

### Check Console
```bash
# Browser console (F12)
# Look for red errors

# Terminal
# Look for error messages when running npm run dev
```

### Check File Paths
```bash
# List files in public folder
ls public/

# Check if file exists
ls public/your-image.jpg
```

### Test Components Individually
Comment out sections in `app/page.tsx` to isolate the problem:

```typescript
<Hero />
{/* <Welcome /> */}  // Temporarily disabled
{/* <Services /> */}  // Temporarily disabled
```

## 📊 Performance Issues

### Site Loading Slowly

1. Optimize images (compress before uploading)
2. Use WebP format for images
3. Lazy load images
4. Check network tab in DevTools (F12)

### Build Taking Too Long

1. Clear `.next` folder
2. Update dependencies: `npm update`
3. Check for large files in project

## ✅ Prevention Tips

1. **Save frequently** - Don't lose work
2. **Test after changes** - Catch errors early
3. **Use Git** - Track changes, easy rollback
4. **Keep backups** - Copy important files
5. **Update regularly** - Keep dependencies current

---

**Still stuck?** Check the other documentation files:
- `QUICK_START.md` - Basic usage
- `CUSTOMIZATION_GUIDE.md` - How to customize
- `README.md` - Technical details

