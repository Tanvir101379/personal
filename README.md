# Md Tanvir Islam - Portfolio Website

A modern, professional portfolio website for showcasing QA engineering expertise, built with vanilla HTML, CSS, and JavaScript.

## ✨ Features

- **Modern Design**: Clean, minimalist aesthetic with professional color palette
- **Dark Mode**: Built-in dark/light theme toggle with localStorage persistence
- **Fully Responsive**: Mobile-first design that works on all devices
- **Smooth Animations**: Scroll animations, hover effects, and micro-interactions
- **Performance Optimized**: Lightweight and fast-loading (no heavy frameworks)
- **Accessibility**: Semantic HTML, ARIA labels, keyboard navigation
- **SEO Ready**: Meta tags, semantic structure, and Open Graph support
- **Keyboard Shortcuts**: Alt+1 through Alt+6 for quick navigation
- **Production Ready**: Deployment-ready code structure

## 📁 File Structure

```
portfolio/
├── index.html           # Main HTML file with semantic structure
├── style.css            # Comprehensive stylesheet with CSS variables
├── script.js            # Interactive features and animations
├── avatar.jpg           # Your profile picture (add your image)
├── CV.pdf               # Your CV file (optional, for download)
├── README.md            # This file
├── .gitignore           # Git ignore file
└── netlify.toml         # Netlify configuration (optional)
```

## 🚀 Quick Start

### 1. Local Development

Simply open `index.html` in your browser to view the website locally. No build process required!

### 2. Customize Content

#### Update Personal Information
Open `index.html` and update:
- Name in the hero section
- Contact information (email, phone, LinkedIn)
- About me section
- Experience details
- Project descriptions

#### Add Your Profile Picture
1. Replace `avatar.jpg` with your own image (recommended: 400x400px)
2. Ensure the image is in the root folder
3. Update the `src` attribute in the hero section if using a different filename

#### Add Your CV
1. Place your CV PDF file in the root folder
2. Update the `href` in the download button from `Md_Tanvir_Islam_CV.pdf` to your filename

### 3. Customize Colors

Edit CSS variables in `style.css` (lines 1-60):

```css
:root {
    /* Change primary color from blue to another color */
    --accent-color: #0066cc;        /* Change this */
    --accent-hover: #0052a3;        /* And this */
    
    /* Change text and background colors */
    --text-primary: #1a1a1a;
    --bg-primary: #ffffff;
    --bg-secondary: #f8f8f8;
}
```

### 4. Customize Typography

Modify font families in CSS variables:

```css
--font-display: 'Syne', sans-serif;  /* Titles and headings */
--font-body: 'Inter', sans-serif;     /* Body text */
```

To use different fonts:
1. Visit [Google Fonts](https://fonts.google.com)
2. Select fonts and copy the import URL
3. Update the `<link>` tag in `index.html`
4. Update CSS variables in `style.css`

## 🎨 Design System

### Color Palette
- **Primary**: `#1a1a1a` (Dark text)
- **Accent**: `#0066cc` (Blue highlights)
- **Success**: `#10b981` (Green)
- **Warning**: `#f59e0b` (Amber)
- **Error**: `#ef4444` (Red)

### Typography Scale
- Display: Syne (700 weight for impact)
- Body: Inter (400-600 weight for readability)
- Sizes: 12px to 48px (customizable)

### Spacing System
Uses 8px base unit (quarter, half, 1x, 1.5x, 2x, 3x, 4x, 5x, 6x)

## 🌙 Dark Mode

Dark mode is automatically available via the toggle button in the navbar. User preference is saved in localStorage.

To disable dark mode:
1. Remove the theme toggle button from `index.html`
2. Delete the `ThemeManager` class from `script.js`
3. Remove dark mode CSS in `style.css`

## ♿ Accessibility

The website includes:
- Semantic HTML structure
- ARIA labels on interactive elements
- Keyboard navigation (Tab, Enter, Alt+number)
- Sufficient color contrast ratios
- Alt text for images
- Skip-to-content links (can be added)

## ⌨️ Keyboard Shortcuts

- **Alt+1**: Jump to Hero/Home
- **Alt+2**: Jump to About
- **Alt+3**: Jump to Skills
- **Alt+4**: Jump to Experience
- **Alt+5**: Jump to Projects
- **Alt+6**: Jump to Contact
- **Esc**: Close mobile menu

## 📱 Responsive Breakpoints

- **Desktop**: 1200px+ (full layout)
- **Tablet**: 768px - 1199px (adjusted grid)
- **Mobile**: Below 768px (single column, adjusted fonts)
- **Small Mobile**: Below 480px (compact spacing)

## 🚀 Deployment

### Netlify (Recommended)

1. **Connect Repository**
   - Push your code to GitHub/GitLab
   - Sign up at [netlify.com](https://netlify.com)
   - Connect your repository
   - Deploy!

2. **Environment Setup** (if using `netlify.toml`)
   ```toml
   [build]
   publish = "."
   
   [[redirects]]
   from = "/*"
   to = "/index.html"
   status = 200
   ```

3. **Custom Domain**
   - Go to Site settings → Domain management
   - Add your custom domain
   - Update DNS records (instructions provided)

### Vercel

1. Visit [vercel.com](https://vercel.com)
2. Import your GitHub repository
3. Click Deploy
4. Configure domain in project settings

### GitHub Pages

1. Push code to GitHub repository
2. Go to Settings → Pages
3. Select branch and folder
4. Enable GitHub Pages
5. Visit `https://yourusername.github.io/repo-name`

### Traditional Hosting (cPanel, etc.)

1. Compress the portfolio folder
2. Upload via FTP or File Manager
3. Extract on the server
4. Visit your domain

## 🔧 Customization Guide

### Adding Sections
1. Create new `<section>` in HTML
2. Add unique ID for navigation
3. Style with new CSS class
4. Add navigation link in navbar

### Changing Colors
All colors use CSS variables. Update in `:root`:

```css
:root {
    --accent-color: #your-color;
    --text-primary: #your-color;
    --bg-primary: #your-color;
}
```

### Modifying Animations
Animation speeds controlled by transition variables:

```css
--transition-fast: 150ms;
--transition-base: 200ms;
--transition-slow: 300ms;
```

### Adding Social Links
Update in hero and contact sections:

```html
<a href="https://your-social-link.com" target="_blank" class="social-link">
    <!-- SVG icon here -->
</a>
```

## ⚡ Performance Tips

1. **Image Optimization**
   - Compress avatar image (tools: TinyPNG, Squoosh)
   - Use WebP format for modern browsers
   - Recommended size: 400x400px

2. **Font Loading**
   - Google Fonts are optimized for web
   - Consider system fonts for faster loading
   - Use `font-display: swap` for better performance

3. **Minification**
   - Use minification tools for production
   - Consider CSS/JS bundlers if adding complexity

4. **Caching**
   - Enable browser caching on your server
   - Set appropriate cache headers

## 🐛 Browser Support

- **Chrome/Edge**: ✅ Full support
- **Firefox**: ✅ Full support
- **Safari**: ✅ Full support (11+)
- **Mobile Browsers**: ✅ Full support
- **IE 11**: ⚠️ Partial support (no CSS variables, etc.)

## 📊 SEO Optimization

The website includes:
- Descriptive page title
- Meta description
- Open Graph tags
- Semantic HTML structure
- Mobile-friendly viewport
- Structured data (schema markup can be added)

### Google Search Console
1. Add site to Google Search Console
2. Submit sitemap (if needed)
3. Monitor search performance
4. Fix any issues

## 🔐 Security

- No sensitive data in client-side code
- Links use `rel="noopener noreferrer"`
- Form submissions can be handled with services like Formspree, Netlify Forms
- No inline scripts

## 📝 License

This portfolio template is free to use and modify for personal use.

## 🤝 Support & Troubleshooting

### Issue: Dark mode not working
- Check browser console for JavaScript errors
- Ensure localStorage is enabled
- Clear browser cache and reload

### Issue: Images not loading
- Check file paths are relative (e.g., `avatar.jpg` not `/avatar.jpg`)
- Verify image files exist in the correct location
- Check image file names match exactly (case-sensitive on servers)

### Issue: Links not working on server
- Ensure all paths are relative
- Test with a local server (Python: `python -m http.server`)
- Check Netlify `netlify.toml` redirects configuration

### Issue: Fonts not loading
- Check Google Fonts link in HTML `<head>`
- Verify font names in CSS match Google Fonts
- Check network tab in browser DevTools

## 📈 Analytics (Optional)

To add Google Analytics:

1. Get your Tracking ID from Google Analytics
2. Add before closing `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR-ID"></script>
<script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'YOUR-ID');
</script>
```

## 🎓 Learning Resources

- [MDN Web Docs](https://developer.mozilla.org/)
- [CSS-Tricks](https://css-tricks.com/)
- [Smashing Magazine](https://www.smashingmagazine.com/)
- [Web.dev](https://web.dev/)

## ✅ Pre-Launch Checklist

- [ ] Update all personal information
- [ ] Replace avatar image
- [ ] Update CV file
- [ ] Update color scheme if desired
- [ ] Test on mobile devices
- [ ] Test dark mode
- [ ] Test all links
- [ ] Check spelling and grammar
- [ ] Optimize images
- [ ] Set up hosting
- [ ] Test form submissions (if applicable)
- [ ] Add Google Analytics
- [ ] Submit to Google Search Console
- [ ] Update social media profiles with portfolio link

## 📧 Contact

For questions or issues, contact: tanvir.islam1379@gmail.com

---

**Happy Portfolio Building! 🚀**

Built with ❤️ using vanilla HTML, CSS, and JavaScript.
#   p e r s o n a l  
 #   p e r s o n a l  
 