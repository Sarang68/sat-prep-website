# Y2 Academy Parsippany - SAT Preparation Website

A professional, responsive website for Y2 Academy's Parsippany branch, showcasing SAT preparation courses and services.

## 📋 Overview

This website features:
- **Home Page**: Hero section, course highlights, benefits, testimonials, and CTAs
- **Courses Page**: Detailed information about SAT programs (Weekend, Intensive, Online Self-Study)
- **About Page**: Mission, values, methodology, score guarantee, and Y2 Online Study System
- **Contact Page**: Multiple contact methods, location map, service areas, contact form, and Calendly integration

## 🏢 Branch Information

**Y2 Academy Parsippany**
- **Address**: 108 US-46, Parsippany, NJ 07054
- **Phone**: +1 (973) 814-9227
- **WhatsApp**: +1 (908) 239-1932
- **Email**: parsippany@y2academy.com
- **Service Areas**: Short Hills, Livingston, Kinnelon, Flanders, Morristown, Parsippany, Montville, Denville, Wayne, Millburn

## 📁 File Structure

```
sat-prep-website/
├── index.html           # Home page
├── courses.html         # Courses page
├── about.html           # About page
├── contact.html         # Contact page
├── css/
│   └── styles.css       # Main stylesheet
├── js/
│   └── script.js        # Interactive features
├── images/              # Images directory (add logo and photos here)
└── README.md           # This file
```

## 🚀 Getting Started

### Viewing Locally

1. **Open in Browser**
   - Simply open `index.html` in any modern web browser
   - All pages are fully functional without a server

2. **Using a Local Server** (Optional, recommended for testing)
   ```bash
   # Using Python 3
   cd sat-prep-website
   python3 -m http.server 8000

   # Using Python 2
   python -m SimpleHTTPServer 8000

   # Using Node.js (install http-server first: npm install -g http-server)
   http-server
   ```
   Then visit `http://localhost:8000` in your browser

### Adding Images

1. Add your logo and photos to the `images/` directory
2. Update image references in HTML files as needed
3. Recommended images:
   - Logo (for header)
   - Course images
   - Instructor photos
   - Success story photos

## 🌐 Deployment Options

### Option 1: GitHub Pages (Free)

1. **Create a GitHub Account** (if you don't have one)
   - Go to https://github.com and sign up

2. **Create a New Repository**
   - Click "New Repository"
   - Name it `y2academy-parsippany`
   - Make it Public
   - Don't initialize with README

3. **Upload Your Files**
   - Click "uploading an existing file"
   - Drag and drop all files from `sat-prep-website/` folder
   - Commit changes

4. **Enable GitHub Pages**
   - Go to repository Settings
   - Scroll to "Pages" section
   - Source: Select "main" branch
   - Click Save
   - Your site will be live at: `https://yourusername.github.io/y2academy-parsippany`

### Option 2: Netlify (Free)

1. **Create a Netlify Account**
   - Go to https://netlify.com and sign up

2. **Deploy Your Site**
   - Drag and drop the `sat-prep-website` folder onto Netlify
   - Your site will be live instantly with a random URL

3. **Custom Domain** (Optional)
   - Go to Domain Settings
   - Add your custom domain
   - Follow DNS instructions

### Option 3: Vercel (Free)

1. **Create a Vercel Account**
   - Go to https://vercel.com and sign up

2. **Deploy**
   - Click "New Project"
   - Import your website files
   - Deploy with one click

3. **Custom Domain** (Optional)
   - Go to Project Settings
   - Add your domain

### Option 4: Traditional Web Hosting

Upload all files via FTP to any web hosting service like:
- GoDaddy
- Bluehost
- HostGator
- SiteGround

## ✨ Features

### Responsive Design
- Mobile-first approach
- Works on all devices (phones, tablets, desktops)
- Hamburger menu for mobile navigation

### Interactive Elements
- Smooth scrolling
- Mobile navigation toggle
- Back-to-top button
- Form validation
- Hover animations

### Integrations
- **Calendly**: Book consultation directly from website
- **WhatsApp**: Quick messaging option
- **Google Maps**: Embedded location map
- **Social Media**: Links to Instagram, TikTok, YouTube

### SEO Optimized
- Semantic HTML5
- Meta descriptions
- Proper heading hierarchy
- Alt texts for images (add when you upload images)

## 🎨 Customization

### Updating Colors

Edit `css/styles.css` and modify the CSS variables at the top:

```css
:root {
    --primary-color: #2563eb;     /* Main blue color */
    --secondary-color: #10b981;   /* Green accent */
    --accent-color: #f59e0b;      /* Orange/yellow accent */
}
```

### Updating Content

1. **Contact Information**: Search and replace phone numbers, email, address in all HTML files
2. **Course Details**: Edit the courses section in `courses.html`
3. **Testimonials**: Update quotes in `index.html`
4. **About Information**: Modify content in `about.html`

### Adding More Pages

1. Create a new HTML file (e.g., `blog.html`)
2. Copy the header and footer from an existing page
3. Add the page to navigation menu in all HTML files

## 📱 Contact Form

**Important**: The contact form is HTML-only and doesn't send emails automatically. To make it functional:

### Option 1: Use Formspree (Easiest)
1. Sign up at https://formspree.io
2. Get your form endpoint
3. Update form action in `contact.html`:
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

### Option 2: Use Netlify Forms
1. Add `netlify` attribute to form tag:
   ```html
   <form name="contact" netlify>
   ```
2. Deploy to Netlify (automatically handles form submissions)

### Option 3: Backend Integration
Integrate with your own backend or email service

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📊 Analytics (Optional)

To track visitors, add Google Analytics:

1. Create a Google Analytics account
2. Get your tracking ID
3. Add tracking code to all HTML files before `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR_TRACKING_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR_TRACKING_ID');
</script>
```

## 🛠️ Maintenance

### Regular Updates
- Keep course schedules current
- Update SAT test dates
- Refresh testimonials
- Add new success stories
- Update photos seasonally

### Performance Tips
- Compress images before uploading (use TinyPNG.com)
- Keep file sizes small
- Test on mobile devices regularly

## 📝 To-Do After Setup

- [ ] Add your logo to `images/` folder and update HTML
- [ ] Add actual photos of your location and instructors
- [ ] Update testimonials with real student quotes
- [ ] Set up contact form backend (Formspree/Netlify)
- [ ] Test all links and CTAs
- [ ] Test on multiple devices and browsers
- [ ] Set up Google Analytics (optional)
- [ ] Configure custom domain (optional)
- [ ] Submit to Google Search Console for SEO

## 🆘 Support

If you need help with customization or deployment:
- Check HTML/CSS documentation at MDN Web Docs
- Contact your web hosting provider for server issues
- Refer to deployment platform documentation (GitHub Pages, Netlify, Vercel)

## 📄 License

This website is created for Y2 Academy Parsippany. All content and branding belong to Y2 Academy.

---

**Built with**: HTML5, CSS3, JavaScript
**Last Updated**: January 2025

For questions about the website, contact: parsippany@y2academy.com
