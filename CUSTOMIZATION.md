# Portfolio Customization Guide

A step-by-step guide to personalize your portfolio website.

## 📋 Table of Contents
1. [Initial Setup](#initial-setup)
2. [Content Customization](#content-customization)
3. [Visual Customization](#visual-customization)
4. [Adding New Sections](#adding-new-sections)
5. [Deployment](#deployment)
6. [Advanced Customization](#advanced-customization)

---

## Initial Setup

### Step 1: Prepare Your Files

1. Create a folder for your portfolio:
   ```bash
   mkdir my-portfolio
   cd my-portfolio
   ```

2. Copy these files into your folder:
   - `index.html`
   - `style.css`
   - `script.js`
   - `netlify.toml`
   - `README.md`
   - `.gitignore`

### Step 2: Add Your Profile Image

1. **Prepare your image**:
   - Size: 400x400 pixels (square format)
   - Format: JPG or PNG
   - File size: Under 500KB
   - Quality: High resolution (retina-ready)

2. **Optimize your image**:
   - Use [TinyPNG](https://tinypng.com) or [Squoosh](https://squoosh.app)
   - Reduces file size without quality loss

3. **Save the file**:
   - Name it: `avatar.jpg` (or your preferred name)
   - Place in the root folder with your HTML file

4. **Update HTML** (if using different filename):
   ```html
   <!-- Line ~103 in index.html -->
   <img src="your-image-name.jpg" alt="Md Tanvir Islam" class="avatar" />
   ```

### Step 3: Add Your CV

1. **Prepare your CV**:
   - Format: PDF file
   - Name: `Md_Tanvir_Islam_CV.pdf` (or your preferred name)
   - Size: Under 5MB

2. **Place the file**:
   - Put it in the root folder

3. **Update HTML** (if using different filename):
   ```html
   <!-- Line ~109 in index.html -->
   <a href="your-cv-filename.pdf" class="btn btn-secondary" download>Download CV</a>
   ```

---

## Content Customization

### Hero Section

**Location**: Lines 103-120 in `index.html`

```html
<h1 class="hero-title">Your Full Name</h1>
<p class="hero-subtitle">Your Title / Role</p>
<p class="hero-description">
    Your elevator pitch here. Keep it concise (2-3 sentences).
</p>
```

**Example**:
```html
<h1 class="hero-title">John Doe</h1>
<p class="hero-subtitle">Senior QA Engineer</p>
<p class="hero-description">
    Passionate about ensuring software quality through comprehensive testing 
    and cross-functional collaboration. 10+ years of experience in manual testing 
    and QA automation across various industries.
</p>
```

### Contact Information

**Location**: Lines 127-132 in `index.html`

Update the LinkedIn profile link:
```html
<a href="https://linkedin.com/in/YOUR-LINKEDIN-URL/" target="_blank">
```

Update phone and email:
```html
<!-- Line ~295: Phone -->
<a href="tel:+YOUR-PHONE-NUMBER" class="contact-card">

<!-- Line ~282: Email -->
<a href="mailto:your.email@example.com" class="contact-card">
```

### About Section

**Location**: Lines 182-205 in `index.html`

Replace the placeholder text with your own story:

```html
<p>
    I'm a detail-oriented [Your Title] with [X] years of experience in 
    [Your Specialty]. Currently, I work at [Company Name] as a 
    [Your Position]. My expertise spans...
</p>
```

**Tips**:
- Keep paragraphs short (2-3 sentences each)
- Highlight key achievements
- Explain your passion for your field
- Mention technologies/tools you specialize in

### Skills Section

**Location**: Lines 233-290 in `index.html`

Update skill categories and items:

```html
<div class="skill-category">
    <h3 class="skill-category-title">Your Category</h3>
    <div class="skill-items">
        <div class="skill-item">Skill 1</div>
        <div class="skill-item">Skill 2</div>
        <div class="skill-item">Skill 3</div>
    </div>
</div>
```

**Current categories in your template**:
- Testing Methodologies
- Tools & Platforms
- Technical Skills
- QA Practices & Methodologies
- Soft Skills
- Domain Expertise

You can:
1. Keep the same categories and update items
2. Add new categories
3. Remove categories you don't need

### Experience Section

**Location**: Lines 293-325 in `index.html`

Update your current job details:

```html
<h3 class="experience-title">Your Job Title</h3>
<p class="experience-company">Your Company Name</p>
<div class="experience-period">Date – Present</div>
<p class="experience-location">City, Country (Remote/On-site)</p>
<div class="experience-product">
    <strong>Product:</strong> Product description here
</div>
<ul class="experience-achievements">
    <li>Achievement 1</li>
    <li>Achievement 2</li>
    <li>Achievement 3</li>
</ul>
```

**To add multiple jobs**, duplicate the entire `<div class="timeline-item">` block:

```html
<div class="timeline-item">
    <!-- Duplicate and modify -->
</div>
<div class="timeline-item">
    <!-- Your next job -->
</div>
```

### Projects Section

**Location**: Lines 328-385 in `index.html`

Update project cards:

```html
<div class="project-card">
    <div class="project-header">
        <h3 class="project-title">Your Project Name</h3>
        <span class="project-badge">Category Badge</span>
    </div>
    <p class="project-description">
        Short description of what the project is about.
    </p>
    <ul class="project-points">
        <li>Key achievement or feature</li>
        <li>Another achievement</li>
        <li>Third achievement</li>
    </ul>
    <div class="project-skills">
        <span>Technology 1</span>
        <span>Technology 2</span>
        <span>Technology 3</span>
    </div>
</div>
```

---

## Visual Customization

### Change Color Scheme

**Location**: Lines 5-30 in `style.css`

Update these CSS variables:

```css
:root {
    /* Main accent color - change all these together */
    --accent-color: #0066cc;        /* Primary blue */
    --accent-hover: #0052a3;        /* Darker blue for hover */
    
    /* Text colors */
    --text-primary: #1a1a1a;        /* Main text color */
    --text-secondary: #666666;      /* Secondary text */
    --text-tertiary: #999999;       /* Muted text */
    
    /* Background colors */
    --bg-primary: #ffffff;          /* Main background */
    --bg-secondary: #f8f8f8;        /* Subtle background */
    --bg-tertiary: #f0f0f0;         /* Darker subtle background */
}
```

### Color Suggestions

**Professional Blue** (current):
```css
--accent-color: #0066cc;
--accent-hover: #0052a3;
```

**Vibrant Green**:
```css
--accent-color: #10b981;
--accent-hover: #059669;
```

**Modern Purple**:
```css
--accent-color: #7c3aed;
--accent-hover: #6d28d9;
```

**Tech Orange**:
```css
--accent-color: #f97316;
--accent-hover: #ea580c;
```

**Elegant Red**:
```css
--accent-color: #dc2626;
--accent-hover: #b91c1c;
```

### Change Fonts

**Location**: Lines 32-34 in `style.css`

1. Visit [Google Fonts](https://fonts.google.com)
2. Select your fonts
3. Copy the import link from "Select this style"
4. Replace in `index.html` `<head>` section:

```html
<!-- Original -->
<link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">

<!-- Your new fonts -->
<link href="https://fonts.googleapis.com/css2?family=YOUR-FONTS&display=swap" rel="stylesheet">
```

5. Update CSS variables:

```css
--font-display: 'Your Display Font', sans-serif;
--font-body: 'Your Body Font', sans-serif;
```

### Adjust Spacing

**Location**: Lines 36-47 in `style.css`

Modify spacing unit (default is 8px):

```css
--space-1: 0.25rem;    /* 4px */
--space-2: 0.5rem;     /* 8px */
--space-4: 1rem;       /* 16px */
--space-6: 1.5rem;     /* 24px */
--space-8: 2rem;       /* 32px */
/* ... etc ... */
```

To make everything more spacious, multiply all values:

```css
--space-1: 0.5rem;     /* 8px instead of 4px */
--space-2: 1rem;       /* 16px instead of 8px */
--space-4: 2rem;       /* 32px instead of 16px */
/* ... etc ... */
```

### Adjust Shadow Depth

**Location**: Lines 49-55 in `style.css`

```css
/* Subtle shadows (recommended for clean design) */
--shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);

/* Remove shadows */
--shadow-md: none;

/* Stronger shadows */
--shadow-lg: 0 20px 25px -5px rgba(0, 0, 0, 0.2);
```

---

## Adding New Sections

### Add a Blog Section

1. **Add HTML** (before footer):

```html
<section id="blog" class="blog">
    <div class="container">
        <h2 class="section-title">Latest Articles</h2>
        <div class="blog-grid">
            <article class="blog-card">
                <h3>Article Title</h3>
                <p class="blog-date">Published on Date</p>
                <p class="blog-excerpt">Article summary...</p>
                <a href="#" class="blog-link">Read More →</a>
            </article>
            <!-- More articles -->
        </div>
    </div>
</section>
```

2. **Add CSS** (in `style.css`):

```css
.blog {
    background: var(--bg-secondary);
}

.blog-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: var(--space-8);
}

.blog-card {
    padding: var(--space-6);
    background: var(--bg-primary);
    border-radius: var(--rounded-xl);
    border: 1px solid var(--border-color);
    transition: all var(--transition-base);
}

.blog-card:hover {
    border-color: var(--accent-color);
    box-shadow: var(--shadow-md);
    transform: translateY(-4px);
}

.blog-date {
    font-size: var(--font-size-sm);
    color: var(--text-tertiary);
}
```

3. **Add navigation link** (in navbar):

```html
<li><a href="#blog">Blog</a></li>
```

### Add a Testimonials Section

```html
<section id="testimonials" class="testimonials">
    <div class="container">
        <h2 class="section-title">What Others Say</h2>
        <div class="testimonials-grid">
            <div class="testimonial-card">
                <p class="testimonial-text">
                    "Great quote from someone about your work..."
                </p>
                <p class="testimonial-author">— Name, Title at Company</p>
            </div>
            <!-- More testimonials -->
        </div>
    </div>
</section>
```

---

## Deployment

### Deploy to Netlify (Easiest)

1. **Create a GitHub account** (if you don't have one): [github.com](https://github.com)

2. **Create a new repository**:
   - Click "New repository"
   - Name: `portfolio` or `my-portfolio`
   - Add description
   - Make it Public
   - Click "Create repository"

3. **Upload your files**:
   - Upload all files (HTML, CSS, JS, images, CV, etc.)
   - Commit changes with message: "Initial commit"

4. **Connect to Netlify**:
   - Go to [netlify.com](https://netlify.com)
   - Sign up with GitHub
   - Click "New site from Git"
   - Select your portfolio repository
   - Click "Deploy site"
   - Your site will be live in seconds!

5. **Custom domain** (optional):
   - Go to "Site settings" → "Domain management"
   - Click "Add custom domain"
   - Point your domain DNS to Netlify (instructions provided)

### Deploy to Vercel

Similar to Netlify:
1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub
3. Import repository
4. Click Deploy

### Deploy Manually

1. Get web hosting (GoDaddy, Bluehost, etc.)
2. Upload files via FTP
3. Visit your domain

---

## Advanced Customization

### Add Form Submissions

**Using Netlify Forms**:

```html
<form name="contact" method="POST" action="/?success=true">
    <input type="text" name="name" placeholder="Your Name" required>
    <input type="email" name="email" placeholder="Your Email" required>
    <textarea name="message" placeholder="Your Message" required></textarea>
    <button type="submit">Send Message</button>
</form>
```

### Add Google Analytics

Add before `</head>`:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Add Smooth Page Transitions

Update `script.js` transitions:

```javascript
// Increase transition duration for more dramatic effect
--transition-slow: 500ms cubic-bezier(0.4, 0, 0.2, 1);
```

### Add Custom Cursor

Add to `style.css`:

```css
* {
    cursor: url('your-cursor.png'), auto;
}

a, button {
    cursor: url('your-pointer.png'), pointer;
}
```

---

## Troubleshooting

### Issue: Images not showing after deployment

**Solution**: 
- Use relative paths: `avatar.jpg` (not `/avatar.jpg`)
- Check image file names match exactly (case-sensitive)
- Verify images are in the same folder as HTML

### Issue: Colors look different in dark mode

**Solution**:
- Check dark mode CSS variables
- Test in different browsers
- Clear browser cache

### Issue: Mobile layout looks broken

**Solution**:
- Check viewport meta tag is present
- Test in device emulation (DevTools → Device Toolbar)
- Adjust breakpoints in CSS media queries

---

## Performance Optimization Checklist

- [ ] Optimize images (under 500KB each)
- [ ] Minify CSS and JavaScript
- [ ] Enable gzip compression
- [ ] Set up browser caching
- [ ] Use CDN for assets
- [ ] Remove unused CSS
- [ ] Lazy load images
- [ ] Test with Lighthouse in DevTools

---

## Need More Help?

- Check `README.md` for general information
- View MDN Web Docs: [developer.mozilla.org](https://developer.mozilla.org)
- Ask on Stack Overflow: [stackoverflow.com](https://stackoverflow.com)
- Check Netlify Docs: [docs.netlify.com](https://docs.netlify.com)

Happy customizing! 🎉
