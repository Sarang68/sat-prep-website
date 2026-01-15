# Images Integration Guide

## ✅ What Was Updated

I've successfully integrated all your images into the website!

### Images Added:
1. **y2header.jpg** - Logo in the header (all pages)
2. **Y2PP_summer2026_jan Promo.png** - Main promotional banner (home page)
3. **SAT Spring Camp PP2026.jpg** - Spring camp banner (courses page)
4. **y2patent.jpg** - Patent certificate (about page)

### Files Modified:
- ✅ index.html - Added logo + summer promo banner
- ✅ courses.html - Added logo + spring camp banner
- ✅ about.html - Added logo + patent image
- ✅ contact.html - Added logo
- ✅ css/styles.css - Added image styling

## 📍 Where Images Appear

### Home Page (index.html)
- **Header**: Y2 Academy logo
- **Top Banner**: Summer 2026 promotional banner (below hero section)

### Courses Page (courses.html)
- **Header**: Y2 Academy logo
- **Top Banner**: SAT Spring Camp 2026 banner (below page title)

### About Page (about.html)
- **Header**: Y2 Academy logo
- **Y2 Online System Section**: USPTO Patent certificate image

### Contact Page (contact.html)
- **Header**: Y2 Academy logo

## 🖼️ Unused Images

These images are in your folder but not currently displayed:
- **Y2pp 2026 banner.jpg** - Available for future use
- **y2pp cover.jpg** - Available for future use

You can add these to any page by using:
```html
<img src="images/Y2pp 2026 banner.jpg" alt="Description" class="banner-img">
```

## 🚀 How to View Your Website

### Method 1: Direct Browser View
```bash
# Navigate to the folder
cd /Users/rasmitaswain/Documents/sat-prep-website

# Open in your default browser (Mac)
open index.html

# Or right-click index.html and select "Open with" → Your preferred browser
```

### Method 2: Local Server (Recommended)
```bash
# Navigate to the folder
cd /Users/rasmitaswain/Documents/sat-prep-website

# Start a simple web server
python3 -m http.server 8000

# Open in browser:
# http://localhost:8000
```

## 🌐 How to Deploy (Make It Live)

### Option 1: Netlify (Easiest - 2 Minutes)
1. Go to https://app.netlify.com/drop
2. Drag the entire `sat-prep-website` folder onto the page
3. Your site is instantly live with a URL like: `https://random-name-123.netlify.app`
4. You can customize the domain name in settings

### Option 2: GitHub Pages (Free Forever)
1. Create a GitHub account at https://github.com
2. Create a new repository called `y2academy-parsippany`
3. Upload all your files
4. Go to Settings → Pages
5. Select "main" branch and save
6. Your site will be at: `https://yourusername.github.io/y2academy-parsippany`

### Option 3: Vercel (Fast & Free)
1. Go to https://vercel.com
2. Sign up for free
3. Click "New Project"
4. Upload your files or connect to GitHub
5. Instant deployment!

## 🔄 How to Update Images

### To Replace an Image:
1. Save your new image in the `images/` folder
2. Use the same filename OR
3. Update the HTML file to reference the new filename

Example:
```html
<!-- In any HTML file -->
<img src="images/your-new-image.jpg" alt="Description" class="banner-img">
```

### To Add More Images:

**Add to Home Page:**
```html
<!-- Add anywhere in index.html -->
<section class="promo-banner">
    <div class="container">
        <img src="images/your-image.jpg" alt="Description" class="banner-img">
    </div>
</section>
```

**Add to Courses Page:**
```html
<!-- Add anywhere in courses.html -->
<div class="course-visual">
    <img src="images/your-image.jpg" alt="Description" class="banner-img">
</div>
```

## 📱 Image Specifications

All images are automatically:
- ✅ Responsive (adapt to screen size)
- ✅ Optimized for mobile
- ✅ Styled with shadows and rounded corners
- ✅ Properly sized for their location

### Recommended Image Sizes:
- **Logo**: 300-400px wide
- **Banners**: 1200px wide (max)
- **Patent/Feature Images**: 600-800px wide

## 🎨 Image Styling

### Available CSS Classes:
- `.logo-img` - For header logos
- `.banner-img` - For promotional banners
- `.patent-img` - For certificate/documentation images

### Custom Styling:
To adjust image sizes, edit `css/styles.css`:

```css
.banner-img {
    width: 100%;
    max-width: 1000px;  /* Change this to adjust max width */
    height: auto;
}
```

## ✨ Next Steps

1. **View Your Website**: Open `index.html` in a browser
2. **Check All Pages**: Navigate through Home, Courses, About, Contact
3. **Test on Mobile**: Resize browser or view on phone
4. **Deploy**: Choose a deployment method above
5. **Share**: Send the live URL to students and parents!

## 🆘 Troubleshooting

### Image Not Showing?
- Check that the image filename matches exactly (case-sensitive)
- Verify the image is in the `images/` folder
- Check browser console (F12) for errors

### Image Too Large/Small?
- Edit the CSS classes in `styles.css`
- Adjust `max-width` values

### Need Help?
- All image paths use relative URLs: `images/filename.jpg`
- Make sure the folder structure stays intact when deploying
- Test locally before deploying

## 📊 Current File Structure

```
sat-prep-website/
├── images/
│   ├── SAT Spring Camp PP2026.jpg ✅ (Used on courses page)
│   ├── y2header.jpg ✅ (Used on all pages - header logo)
│   ├── y2patent.jpg ✅ (Used on about page)
│   ├── Y2pp 2026 banner.jpg (Available)
│   ├── y2pp cover.jpg (Available)
│   └── Y2PP_summer2026_jan Promo.png ✅ (Used on home page)
├── css/
│   └── styles.css ✅ (Updated with image styles)
├── js/
│   └── script.js
├── index.html ✅ (Logo + summer promo)
├── courses.html ✅ (Logo + spring camp)
├── about.html ✅ (Logo + patent)
├── contact.html ✅ (Logo)
└── README.md

✅ = Updated/In Use
```

---

Your website is now complete with all images integrated! 🎉

Open `index.html` to see your professional SAT prep website with your branding!
