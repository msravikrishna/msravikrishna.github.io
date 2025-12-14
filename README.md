# Ravi Mangipudi - Portfolio Website

A professional, responsive portfolio website built with HTML, CSS, and JavaScript.

## 🚀 Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI**: Clean and professional design with smooth animations
- **Fast Loading**: Optimized for performance
- **SEO Friendly**: Proper semantic HTML structure
- **Accessibility**: WCAG compliant design
- **Dark/Light Theme Ready**: Easy to customize

## 📁 File Structure

```
/
├── index.html      # Main HTML file
├── styles.css      # Styling
├── script.js       # JavaScript interactivity
└── README.md       # This file
```

## 🎨 Sections

1. **Navigation Bar** - Sticky navigation with mobile menu
2. **Hero Section** - Eye-catching landing section
3. **About** - Professional bio and quick stats
4. **Projects** - Showcase of featured projects
5. **Skills** - Technical skills organized by category
6. **Contact** - Contact information and social links
7. **Footer** - Copyright and credits

## 🌐 Deploying to GitHub Pages

### Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in to your account
2. Click the `+` icon in the top right and select "New repository"
3. Name it `msravikrishna.github.io` (replace `msravikrishna` with your GitHub username)
4. Make sure it's set to **Public**
5. Click "Create repository"

### Step 2: Clone and Setup

```bash
# Clone the repository to your local machine
git clone https://github.com/YOUR_USERNAME/YOUR_USERNAME.github.io.git

# Navigate to the directory
cd YOUR_USERNAME.github.io

# Copy the portfolio files to this directory
# (index.html, styles.css, script.js)
```

### Step 3: Push to GitHub

```bash
# Add all files
git add .

# Commit the changes
git commit -m "Initial portfolio website"

# Push to GitHub
git push origin main
```

### Step 4: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings"
3. Scroll down to "GitHub Pages" section
4. Under "Source", select "main" branch
5. Click "Save"

### Step 5: Access Your Portfolio

Your portfolio will be live at: `https://YOUR_USERNAME.github.io`

⏱️ **Note**: It may take a few minutes for the changes to be reflected online.

## 🎯 Customization

### Updating Personal Information

Edit the relevant sections in `index.html`:

- **Name & Title**: Look for `<h1 class="hero-title">` in the Hero section
- **Bio**: Update the text in the About section
- **Email**: Update the `href="mailto:"` link
- **Social Links**: Update GitHub and LinkedIn URLs
- **Projects**: Modify project cards in the Projects section
- **Skills**: Update skill items in the Skills section

### Changing Colors

Edit the CSS variables in `styles.css`:

```css
:root {
    --primary-color: #2563eb;
    --primary-dark: #1e40af;
    --secondary-color: #0ea5e9;
    --text-dark: #1f2937;
    --text-light: #6b7280;
    --bg-light: #f9fafb;
    --bg-white: #ffffff;
}
```

### Modifying Fonts

Update the `font-family` in the `body` selector in `styles.css`.

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## ✨ Performance Optimizations

- Minified CSS and JavaScript ready (optional)
- No external dependencies
- Fast font loading with system fonts
- Optimized animations

## 📚 Resources Used

- Font Awesome Icons (CDN)
- System fonts for better performance
- Semantic HTML5

## 🔧 Troubleshooting

### Portfolio not showing up?

1. Wait 5-10 minutes for GitHub to deploy
2. Clear your browser cache (Ctrl+Shift+Delete)
3. Check that your repository is public
4. Verify the repository name is `USERNAME.github.io`

### Styles not loading?

1. Hard refresh your browser (Ctrl+Shift+R or Cmd+Shift+R)
2. Check browser console for errors (F12)
3. Verify `styles.css` and `script.js` are in the same directory

### Links not working?

1. Check that URLs in `href` attributes are correct
2. Verify external links have `target="_blank"`
3. Test links locally first

## 📝 License

This portfolio website is free to use and modify for your personal portfolio.

## 📧 Support

For questions or issues, feel free to open an issue on GitHub or contact directly via email.

---

**Last Updated**: December 2025

**Built with**: HTML, CSS, JavaScript
