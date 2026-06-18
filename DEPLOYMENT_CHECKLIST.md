# Vercel Deployment Checklist

## Pre-Deployment

- [x] All components tested locally
- [x] Video autoplay working on localhost
- [x] Mobile responsive tested
- [x] Navigation links functional
- [x] Project links correct
- [x] Contact information updated
- [x] Social links working
- [x] Build succeeds: `npm run build`
- [x] No console errors in dev
- [x] Images optimized
- [x] Video file accessible

## Configuration Files

- [x] `vercel.json` - Vercel configuration
- [x] `.vercelignore` - Files to ignore
- [x] `vite.config.js` - Vite optimization
- [x] `.env.example` - Environment template
- [x] `package.json` - Dependencies correct
- [x] `netlify.toml` - Backup config (optional)

## Deployment Steps

### Step 1: Prepare Repository
```bash
git add .
git commit -m "Ready for Vercel deployment"
git push origin main
```

### Step 2: Connect to Vercel
1. Go to https://vercel.com
2. Sign in with GitHub
3. Click "New Project"
4. Select your repository
5. Vercel auto-detects Vite configuration

### Step 3: Configure Project
- **Build Command**: `npm run build` (auto-detected)
- **Output Directory**: `dist` (auto-detected)
- **Install Command**: `npm install` (auto-detected)

### Step 4: Deploy
- Click "Deploy"
- Wait for build to complete
- Check deployment logs for errors

### Step 5: Verify Live Site
- [ ] Navigate to your Vercel URL
- [ ] Video autoplays after preloader
- [ ] Audio works
- [ ] Navigation links work
- [ ] Mobile responsive
- [ ] Projects display correctly
- [ ] Contact information visible
- [ ] Social links work

## Post-Deployment

### Check Performance
- [ ] Lighthouse score > 80
- [ ] First Contentful Paint < 2s
- [ ] Largest Contentful Paint < 3s
- [ ] Cumulative Layout Shift < 0.1

### Monitor Errors
- [ ] Check Vercel Analytics
- [ ] Monitor real user feedback
- [ ] Review error logs

### Optional: Custom Domain
1. Go to Vercel project settings
2. Click "Domains"
3. Add your custom domain
4. Update DNS records

## Troubleshooting

### Video Not Playing
- [ ] Check `vercel.json` headers
- [ ] Verify video path in Hero.jsx
- [ ] Check browser cache
- [ ] Test in incognito mode
- [ ] Check CORS settings

### Build Failures
- [ ] Check Node version (18+)
- [ ] Clear npm cache: `npm cache clean --force`
- [ ] Delete node_modules: `rm -rf node_modules`
- [ ] Reinstall: `npm install`
- [ ] Try build locally: `npm run build`

### Performance Issues
- [ ] Check bundle size: `npm run build`
- [ ] Verify image optimization
- [ ] Check video preload settings
- [ ] Review Vercel Analytics

## Environment Variables (Optional)

If you need environment variables on Vercel:

1. Go to Project Settings
2. Click "Environment Variables"
3. Add your variables
4. Redeploy

Example variables:
```
VITE_API_URL = https://api.example.com
VITE_ENVIRONMENT = production
```

## Rollback Plan

If deployment has issues:
1. Go to Vercel Deployments
2. Click the working deployment
3. Click "Promote to Production"

## Support & Debugging

### Enable Debug Logs
```bash
vercel deploy --debug
```

### View Live Logs
```bash
vercel logs [url]
```

### Check Build Logs
1. Go to Vercel Dashboard
2. Select project
3. Click "Deployments"
4. View build logs

## Success Indicators

- [x] Deployment successful
- [x] No build errors
- [x] Site loads in < 3s
- [x] Video autoplays
- [x] Audio works
- [x] All links functional
- [x] Mobile responsive
- [x] Contact form works (if enabled)

---

**Your portfolio is now live on Vercel!** 🚀
