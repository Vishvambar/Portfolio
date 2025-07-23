# Deployment Guide

## Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm start
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

## Deployment Options

### 1. Netlify (Recommended)

**Option A: Drag & Drop**
1. Run `npm run build`
2. Go to [netlify.com](https://netlify.com)
3. Drag the `build` folder to the deployment area

**Option B: Git Integration**
1. Push your code to GitHub
2. Connect your repository to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `build`

### 2. Vercel

**Option A: Vercel CLI**
```bash
npm i -g vercel
vercel
```

**Option B: Git Integration**
1. Push your code to GitHub
2. Import project on [vercel.com](https://vercel.com)
3. Deploy automatically

### 3. GitHub Pages

1. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Add to package.json:
   ```json
   "homepage": "https://yourusername.github.io/portfolio",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```

3. Deploy:
   ```bash
   npm run deploy
   ```

## Environment Variables

Create a `.env` file in the root directory:

```
REACT_APP_SITE_URL=https://yourdomain.com
REACT_APP_EMAIL_SERVICE_ID=your_emailjs_service_id
REACT_APP_EMAIL_TEMPLATE_ID=your_emailjs_template_id
REACT_APP_EMAIL_PUBLIC_KEY=your_emailjs_public_key
```

## Performance Optimization

1. **Image Optimization:**
   - Use WebP format for images
   - Implement lazy loading
   - Add proper alt tags

2. **Code Splitting:**
   - Already implemented with React.lazy (if needed)

3. **SEO Optimization:**
   - Meta tags already configured
   - Update `public/index.html` with your information

## Custom Domain

### Netlify
1. Go to Site Settings > Domain Management
2. Add custom domain
3. Configure DNS records

### Vercel
1. Go to Project Settings > Domains
2. Add custom domain
3. Configure DNS records

## SSL Certificate

Both Netlify and Vercel provide free SSL certificates automatically.

## Analytics

Add Google Analytics or other tracking:

1. **Google Analytics:**
   ```bash
   npm install gtag
   ```

2. **Add to index.html:**
   ```html
   <!-- Global site tag (gtag.js) - Google Analytics -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'GA_MEASUREMENT_ID');
   </script>
   ```

## Troubleshooting

### Common Issues:

1. **Build fails:**
   - Check Node.js version (use v14+)
   - Clear npm cache: `npm cache clean --force`
   - Delete node_modules and reinstall

2. **Dark mode not working:**
   - Check browser localStorage support
   - Ensure CSS classes are properly configured

3. **Animations not smooth:**
   - Enable hardware acceleration in browser
   - Check Framer Motion version compatibility

### Support

For issues or questions:
- Create an issue on GitHub
- Email: vishvambar.dev@gmail.com
- LinkedIn: linkedin.com/in/vishvambar

---

🚀 **Ready to deploy!** Your portfolio is now ready for production.
