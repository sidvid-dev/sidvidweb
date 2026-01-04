# GitHub Pages Deployment Guide

This guide will help you deploy your static Next.js website to GitHub Pages with a custom domain.

## Prerequisites

- A GitHub account
- Git installed on your computer
- A custom domain (optional, but recommended)

## Step 1: Push Your Code to GitHub

1. **Create a new repository on GitHub:**
   - Go to https://github.com/new
   - Name your repository (e.g., `my-portfolio`)
   - Make it **Public** (required for free GitHub Pages)
   - Don't initialize with README (you already have code)
   - Click "Create repository"

2. **Push your local code to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```

## Step 2: Configure GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (top menu)
3. Click **Pages** (left sidebar)
4. Under "Build and deployment":
   - **Source**: Select "GitHub Actions"
   - (The workflow file `.github/workflows/deploy.yml` will handle the rest)

## Step 3: Deploy Your Site

The deployment happens automatically! Once you push to the `main` branch:

1. Go to the **Actions** tab in your repository
2. You'll see the "Deploy to GitHub Pages" workflow running
3. Wait for it to complete (usually 2-3 minutes)
4. Your site will be live at: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

## Step 4: Set Up Custom Domain (Optional)

### A. Update the CNAME File

1. Edit `public/CNAME` file and replace `yourdomain.com` with your actual domain:
   ```
   www.yourdomain.com
   ```
   OR (if you prefer without www):
   ```
   yourdomain.com
   ```

2. Commit and push the change:
   ```bash
   git add public/CNAME
   git commit -m "Add custom domain"
   git push
   ```

### B. Configure DNS Settings

Go to your domain registrar (GoDaddy, Namecheap, Cloudflare, etc.) and add these DNS records:

**Option 1: Using www subdomain (Recommended)**

| Type  | Name | Value                          | TTL  |
|-------|------|--------------------------------|------|
| CNAME | www  | YOUR_USERNAME.github.io        | 3600 |
| A     | @    | 185.199.108.153                | 3600 |
| A     | @    | 185.199.109.153                | 3600 |
| A     | @    | 185.199.110.153                | 3600 |
| A     | @    | 185.199.111.153                | 3600 |

**Option 2: Using apex domain (without www)**

| Type  | Name | Value                          | TTL  |
|-------|------|--------------------------------|------|
| A     | @    | 185.199.108.153                | 3600 |
| A     | @    | 185.199.109.153                | 3600 |
| A     | @    | 185.199.110.153                | 3600 |
| A     | @    | 185.199.111.153                | 3600 |

### C. Enable Custom Domain in GitHub

1. Go to your repository **Settings** → **Pages**
2. Under "Custom domain", enter your domain (e.g., `www.yourdomain.com`)
3. Click **Save**
4. Wait for DNS check to complete (can take up to 24 hours, usually 10-30 minutes)
5. Once verified, check **Enforce HTTPS** (recommended)

## Step 5: Verify Deployment

1. Wait a few minutes for DNS propagation
2. Visit your custom domain (or GitHub Pages URL)
3. Your website should be live! 🎉

## Troubleshooting

### Site not loading after deployment
- Check the Actions tab for any build errors
- Ensure the workflow completed successfully
- Clear your browser cache

### Custom domain not working
- Verify DNS records are correct (use https://dnschecker.org)
- Wait up to 24 hours for DNS propagation
- Check that CNAME file contains only your domain (no http://, no trailing slash)
- Ensure your repository is public

### Images not loading
- The config is already set with `unoptimized: true` for static export
- Check that images are in the `public` folder

### 404 errors on page refresh
- This is normal for static sites with client-side routing
- GitHub Pages serves the 404.html for unknown routes
- Next.js handles routing on the client side

## Making Updates

After initial deployment, any changes you push to the `main` branch will automatically trigger a new deployment:

```bash
# Make your changes
git add .
git commit -m "Update content"
git push
```

The site will rebuild and redeploy automatically in 2-3 minutes.

## Manual Deployment

You can also trigger deployment manually:
1. Go to **Actions** tab
2. Click "Deploy to GitHub Pages"
3. Click "Run workflow"
4. Select branch and click "Run workflow"

## Cost

GitHub Pages is **completely free** for public repositories with:
- 1 GB storage
- 100 GB bandwidth per month
- Custom domain support
- Free SSL certificate

---

## Quick Reference

- **Repository Settings**: `https://github.com/YOUR_USERNAME/YOUR_REPO_NAME/settings`
- **GitHub Pages Settings**: `https://github.com/YOUR_USERNAME/YOUR_REPO_NAME/settings/pages`
- **Actions Tab**: `https://github.com/YOUR_USERNAME/YOUR_REPO_NAME/actions`
- **Default URL**: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

## Need Help?

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Custom Domain Setup](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)
- [Next.js Static Export](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)

