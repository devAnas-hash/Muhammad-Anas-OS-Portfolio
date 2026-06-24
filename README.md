# Muhammad Anas OS - Professional Developer Portfolio

A modern, interactive OS-themed developer portfolio built with vanilla HTML, CSS, and JavaScript. Features a unique glassmorphic design, interactive terminal, AI assistant, and fully responsive layout.

## 🎨 Features

- **OS-Inspired Interface**: Desktop-like environment with draggable windows
- **Three Themes**: Dark OS, Hacker Terminal, Professional Corporate
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Interactive Terminal**: Command-based navigation system
- **AI Assistant**: Smart portfolio helper that answers questions about you
- **Modern UI**: Glassmorphic design with smooth animations
- **Easy Customization**: Simple data structure for quick updates

## 📂 Project Structure

```
Muhammad-Anas-OS-Portfolio/
├── index.html          # Main HTML file
├── css/
│   └── style.css       # All styling and themes
├── js/
│   ├── main.js         # Core window management
│   ├── terminal.js     # Terminal functionality
│   ├── ai.js          # AI assistant logic
│   └── theme.js        # Theme switcher
└── resume.pdf         # Your resume file (to be added)
```

## 🚀 Getting Started

### Local Development

1. **Clone or extract the project**:
   ```bash
   unzip Muhammad-Anas-OS-Portfolio.zip
   cd Muhammad-Anas-OS-Portfolio
   ```

2. **Add your resume**:
   - Place your PDF resume as `resume.pdf` in the root directory
   - The download button in the Resume window will link to this file

3. **Open in browser**:
   - Simply open `index.html` in any modern web browser
   - No build process or server required!

### Quick Server Setup (Optional)

For better file serving:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js
npx http-server

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000`

## 🎯 Customization Guide

### 1. **Update Personal Information**

#### About Section
Edit `index.html`, find the About window and update:
```html
<h2>Hello, I'm Muhammad Anas</h2>
<p class="subtitle">Your Role Here</p>
<!-- Update bio, location, experience -->
```

#### Contact Information
Update the contact window with your real details:
- Email: `raoanas606@gmail.com`
- Phone: `+92 321 3921501`
- Social links (GitHub, LinkedIn)

#### Resume Section
Update the education, experience, and skills information, then add your `resume.pdf` file to the root directory.

### 2. **Update Skills**

Edit `index.html`, find the Skills window and modify:
```html
<div class="skill-category">
    <h4>Your Category</h4>
    <div class="skill-item">
        <span>Your Skill</span>
        <div class="meter"><span style="width: 85%"></span></div>
    </div>
</div>
```

The percentage (width) represents your proficiency level (0-100%).

### 3. **Update Projects**

Replace project information in the Projects window:
```html
<div class="project-card">
    <div class="proj-img-placeholder"><i class="fa-solid fa-icon-name"></i></div>
    <h5>Project Name</h5>
    <p>Project description...</p>
    <small>Stack: Technologies used</small>
    <div class="proj-actions">
        <a href="github-link" target="_blank" class="btn-link">
            <i class="fa-brands fa-github"></i> GitHub
        </a>
    </div>
</div>
```

### 4. **Update AI Assistant**

Edit `js/ai.js` to add/modify AI responses:
```javascript
const portfolioAIDatabase = [
    { 
        keys: ['keyword1', 'keyword2'], 
        response: "Your response here"
    },
    // Add more responses
];
```

The AI will respond when it detects any of the keywords in user input.

### 5. **Update Terminal Commands**

Edit `js/terminal.js` to add custom commands:
```javascript
const commandRegistry = {
    'newcommand': () => { 
        // Do something
        return "Command response";
    }
};
```

### 6. **Change Contact Form Behavior**

The contact form in `index.html` includes a handler:
```javascript
function handleContactForm(event) {
    // Currently shows a success message
    // To integrate with email service (Formspree, EmailJS, etc.):
    // 1. Sign up for a service
    // 2. Update this function with their API
}
```

**Option: Use Formspree (Recommended)**
```javascript
// Replace the form's onsubmit with:
onsubmit="handleFormspreeSubmit(event)"

// Add in the script section:
async function handleFormspreeSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        body: formData
    });
    // Handle response
}
```

## 🎨 Theme Customization

### Modify Colors

Edit `:root` variables in `css/style.css`:

```css
:root {
    --font-family: 'Courier New', Courier, monospace;
    --bg-gradient: radial-gradient(circle, #1a1c23 0%, #0d0e12 100%);
    --window-bg: rgba(25, 28, 36, 0.75);
    --border-color: rgba(255, 255, 255, 0.12);
    --text-primary: #e2e8f0;
    --text-accent: #38bdf8;
}
```

### Create New Theme

Add new theme colors in `css/style.css`:
```css
[data-theme="custom-theme"] {
    --bg-gradient: your-gradient;
    --window-bg: your-color;
    --border-color: your-color;
    --text-primary: your-color;
    --text-accent: your-color;
}
```

Add option in HTML:
```html
<option value="custom-theme">Custom Theme Name</option>
```

## 📱 Responsive Design

The portfolio is fully responsive:
- **Desktop**: Full layout with all features
- **Tablet (768px-1024px)**: Adjusted window sizes
- **Mobile (<480px)**: Optimized for touch with smaller icons

Test responsiveness:
1. Open DevTools (F12)
2. Toggle Device Toolbar (Ctrl+Shift+M)
3. Test on various screen sizes

## 🚀 Deployment

### GitHub Pages (Free)

1. Create a GitHub repository: `yourusername.github.io`
2. Push all files to the `main` branch
3. Enable GitHub Pages in repository settings
4. Visit `https://yourusername.github.io`

### Netlify (Recommended - Free)

1. Sign up at [Netlify](https://netlify.com)
2. Drag and drop your project folder
3. Custom domain available (optional)

### Vercel (Free)

1. Sign up at [Vercel](https://vercel.com)
2. Import your GitHub repository or upload folder
3. Auto-deploys on every push

### Traditional Hosting

1. Upload files via FTP to your hosting provider
2. No build process needed - all files are static
3. Keep folder structure intact

## ⌨️ Terminal Commands

Available commands in the System Terminal:

```
help      - Show all available commands
about     - Open About profile
skills    - Show technical skills
projects  - Display projects
contact   - Open contact window
resume    - View resume
clear     - Clear terminal history
```

## 🤖 AI Assistant Features

The AI assistant responds to questions about:
- Your background and experience
- Technical skills and expertise
- Projects and work history
- Contact information
- How to use the portfolio

Just type questions naturally - the AI matches keywords to provide relevant responses.

## 📋 Improvement Highlights from Original

### ✅ Completed Improvements

1. **Real Data Integration**: Replaced all placeholders with actual resume information
2. **Enhanced UX**: Better navigation clarity and first-time user experience
3. **Responsive Design**: Full mobile, tablet, and desktop support
4. **Contact Functionality**: Improved contact form with feedback
5. **Resume Viewer**: Professional resume display with download link
6. **Skills Organization**: Better categorized skills with accurate data
7. **Project Presentation**: Improved project cards with better styling
8. **AI Assistant**: Updated with real portfolio information
9. **Code Quality**: Better organized, commented code
10. **Performance**: Optimized animations and transitions

### 🎯 Features to Add Later

- Email integration for contact form (Formspree/EmailJS)
- GitHub API to fetch real projects
- Blog section for technical articles
- Case studies with detailed project information
- Downloadable assets (resume, certificates)
- Dark/light theme toggle with persistence
- Multi-language support

## 🐛 Troubleshooting

### Issue: Windows not dragging properly
- Ensure you're clicking on the window header
- Check if maximized (can't drag when maximized)

### Issue: Terminal commands not working
- Make sure you're typing exact command names
- Check `js/terminal.js` for available commands

### Issue: AI not responding
- Check your question keywords match `js/ai.js` database
- Try typing "help" for suggestions

### Issue: Responsive design not working
- Clear browser cache (Ctrl+Shift+Delete)
- Test in incognito/private mode
- Try different browser

### Issue: Resume PDF not downloading
- Ensure `resume.pdf` is in the root directory
- Check file permissions
- Try different PDF file

## 📞 Support & Updates

### Updating Your Portfolio

1. Make changes locally
2. Test in browser
3. Re-upload to hosting
4. Changes are live immediately

### Adding New Sections

To add a new window:
1. Add desktop icon in HTML
2. Create window div with content
3. Add opening function in JavaScript
4. Add styling in CSS

## 📄 License

This portfolio template is free to use and modify for personal use.

## 🎓 Learning Resources

- [HTML/CSS Basics](https://www.w3schools.com/)
- [JavaScript Guide](https://javascript.info/)
- [CSS Grid & Flexbox](https://css-tricks.com/)
- [Web Design Responsiveness](https://web.dev/)

---

**Created**: 2026  
**Author**: Muhammad Anas  
**Version**: 2.0 (Professional Edition)

Happy coding! 🚀
