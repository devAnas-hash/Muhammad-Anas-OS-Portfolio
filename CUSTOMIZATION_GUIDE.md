# Portfolio Customization Guide

This guide shows you exactly where and how to update your portfolio with your own information.

## 📍 Quick Reference - File Locations

| Section | File | Location |
|---------|------|----------|
| Name & Bio | `index.html` | Lines 64-85 (About window) |
| Skills | `index.html` | Lines 85-110 (Skills window) |
| Projects | `index.html` | Lines 116-152 (Projects window) |
| Resume | `index.html` | Lines 141-197 (Resume window) |
| Contact Info | `index.html` | Lines 159-210 (Contact window) |
| AI Assistant | `js/ai.js` | Lines 4-50 |
| Terminal Commands | `js/terminal.js` | Lines 8-22 |
| Colors & Themes | `css/style.css` | Lines 4-35 |

---

## 1️⃣ Update Your About Section

**File**: `index.html`  
**Lines**: 64-85

### Current Content:
```html
<h2>Hello, I'm Muhammad Anas</h2>
<p class="subtitle">Software Engineering Student | Frontend Developer | Tech Enthusiast</p>
```

### What to Change:
- Replace "Muhammad Anas" with your name
- Update the subtitle with your title
- Update location ("Karachi, Sindh, Pakistan")
- Update internship experience with YOUR experience
- Modify professional background bullet points

### Example:
```html
<h2>Hello, I'm Your Name</h2>
<p class="subtitle">Your Title | Your Role</p>
<p><strong>Location:</strong> Your City, Your Country</p>
<p>Your professional summary...</p>
```

---

## 2️⃣ Update Your Skills

**File**: `index.html`  
**Lines**: 85-110

### Current Structure:
```html
<div class="skill-category">
    <h4>Frontend Technologies</h4>
    <div class="skill-item">
        <span>HTML5 / CSS3</span>
        <div class="meter"><span style="width: 90%"></span></div>
    </div>
</div>
```

### How to Modify:

#### Add New Skill:
```html
<div class="skill-item">
    <span>Your Skill Name</span>
    <div class="meter"><span style="width: 75%"></span></div>
</div>
```

#### Change Percentage:
- 0-20% = Beginner
- 20-50% = Intermediate
- 50-80% = Advanced
- 80-100% = Expert

#### Add New Category:
```html
<div class="skill-category">
    <h4>Your Category</h4>
    <!-- Add skill items here -->
</div>
```

### Common Skill Categories:
- Frontend Technologies
- Backend & Core
- Professional Tools
- Databases
- Mobile Development
- Cloud & DevOps
- Soft Skills

---

## 3️⃣ Update Your Projects

**File**: `index.html`  
**Lines**: 116-152

### Current Template:
```html
<div class="project-card">
    <div class="proj-img-placeholder"><i class="fa-solid fa-laptop"></i></div>
    <h5>Project Name</h5>
    <p>Description...</p>
    <small>Stack: Technologies</small>
    <small class="tech-tags"><strong>Features:</strong> Feature list</small>
    <div class="proj-actions">
        <a href="link" target="_blank" class="btn-link">
            <i class="fa-brands fa-github"></i> GitHub
        </a>
    </div>
</div>
```

### Customization Steps:

1. **Change Icon**: Replace `fa-laptop` with any [FontAwesome Icon](https://fontawesome.com/icons):
   - `fa-code` for coding projects
   - `fa-globe` for web projects
   - `fa-database` for data projects
   - `fa-mobile` for mobile projects

2. **Update Project Name**: Change "Project Name"

3. **Add Description**: Write 1-2 sentences about the project

4. **List Technologies**: Comma-separated tech stack

5. **Add Links**:
   ```html
   <!-- GitHub Link -->
   <a href="https://github.com/yourname/project" target="_blank" class="btn-link">
       <i class="fa-brands fa-github"></i> GitHub
   </a>

   <!-- Live Demo -->
   <a href="https://your-project-link.com" target="_blank" class="btn-link">
       <i class="fa-solid fa-globe"></i> Live Demo
   </a>
   ```

### Example:
```html
<div class="project-card">
    <div class="proj-img-placeholder"><i class="fa-solid fa-code"></i></div>
    <h5>E-Commerce Platform</h5>
    <p>A full-stack e-commerce solution with product catalog, shopping cart, and payment integration.</p>
    <small>Stack: React, Node.js, MongoDB, Stripe</small>
    <small class="tech-tags"><strong>Features:</strong> User auth, Product search, Payment gateway</small>
    <div class="proj-actions">
        <a href="https://github.com/yourname/ecommerce" target="_blank" class="btn-link">
            <i class="fa-brands fa-github"></i> GitHub
        </a>
        <a href="https://ecommerce-demo.com" target="_blank" class="btn-link">
            <i class="fa-solid fa-globe"></i> Live Demo
        </a>
    </div>
</div>
```

---

## 4️⃣ Update Your Resume

**File**: `index.html`  
**Lines**: 141-197

### Sections to Update:

#### Education:
```html
<div class="resume-item">
    <h4>Your Degree Name</h4>
    <p><strong>Your University</strong> - City | Start - End</p>
</div>
```

#### Experience:
```html
<div class="resume-item">
    <h4>Your Job Title</h4>
    <p><strong>Company Name</strong> - City | Start - End</p>
    <p>Description of what you did...</p>
</div>
```

#### Skills:
```html
<p><strong>Category:</strong> Skill1, Skill2, Skill3</p>
```

### Important:
- Add your actual `resume.pdf` file to the root directory
- The download button will link to this file
- Keep PDF up to date with any changes

---

## 5️⃣ Update Contact Information

**File**: `index.html`  
**Lines**: 159-210

### Email:
```html
<a href="mailto:YOUR_EMAIL@gmail.com">YOUR_EMAIL@gmail.com</a>
```

### Phone:
```html
<a href="tel:+91YOUR_PHONE_NUMBER">+91 YOUR PHONE</a>
```

### GitHub:
```html
<a href="https://github.com/YOUR_USERNAME" target="_blank">
    github.com/YOUR_USERNAME
</a>
```

### LinkedIn:
```html
<a href="https://linkedin.com/in/YOUR_PROFILE" target="_blank">
    linkedin.com/in/YOUR_PROFILE
</a>
```

### Contact Form:
The form currently shows a success message. To actually send emails:

**Option 1: Using Formspree (Recommended)**
1. Go to [formspree.io](https://formspree.io)
2. Create new form and get Form ID
3. Update form action in HTML:
```html
<form class="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
    <input type="text" name="name" placeholder="Your Name" required>
    <input type="email" name="email" placeholder="Your Email" required>
    <textarea name="message" placeholder="Your Message" required></textarea>
    <button type="submit">Send Message</button>
</form>
```

**Option 2: Using EmailJS**
1. Sign up at [emailjs.com](https://emailjs.com)
2. Add their script before your form
3. Update form handler with their code

---

## 6️⃣ Update AI Assistant

**File**: `js/ai.js`

### Current Format:
```javascript
{ 
    keys: ['keyword1', 'keyword2'], 
    response: "Your response here"
}
```

### Add New Response:
```javascript
const portfolioAIDatabase = [
    // ... existing entries ...
    { 
        keys: ['python', 'django', 'flask'], 
        response: "I have experience with Python development, including Django and Flask frameworks."
    }
];
```

### How It Works:
1. User types a question
2. AI checks if any keywords match
3. If match found → show response
4. If no match → show "ambiguous response" message

### Best Practices:
- Use lowercase keywords
- Include common variations
- Keep responses concise (1-2 sentences)
- Make responses first-person ("I have...", "I specialize...")

---

## 7️⃣ Update Terminal Commands

**File**: `js/terminal.js`

### Current Commands:
```javascript
const commandRegistry = {
    help: () => `Available commands...`,
    about: () => { openWindow('about-win'); return "Opening..."; },
    // etc
};
```

### Add New Command:
```javascript
const commandRegistry = {
    // ... existing ...
    'mycommand': () => {
        return "This is what happens when I type 'mycommand'";
    },
    'open-browser': () => {
        window.open('https://github.com/yourname');
        return "Opening your GitHub profile...";
    }
};
```

### Examples:

**Simple Text Response:**
```javascript
'tech': () => {
    return "I work with React, Node.js, and Python primarily.";
}
```

**Open a Window:**
```javascript
'github': () => {
    window.open('https://github.com/yourname');
    return "Opening GitHub profile...";
}
```

**Multiple Options:**
```javascript
'portfolio': () => {
    return `<br>My Portfolio:<br>
    • Project 1<br>
    • Project 2<br>
    • Project 3`;
}
```

---

## 8️⃣ Change Colors & Theme

**File**: `css/style.css`

### Dark Theme (Default) - Lines 4-15:
```css
:root {
    --bg-gradient: radial-gradient(circle, #1a1c23 0%, #0d0e12 100%);
    --window-bg: rgba(25, 28, 36, 0.75);
    --border-color: rgba(255, 255, 255, 0.12);
    --text-primary: #e2e8f0;
    --text-accent: #38bdf8;  /* Main accent color */
}
```

### Hacker Theme - Lines 17-25:
```css
[data-theme="hacker"] {
    --bg-gradient: linear-gradient(180deg, #000000 0%, #050a05 100%);
    --window-bg: rgba(0, 10, 0, 0.9);
    --border-color: #00ff41;  /* Bright green */
    --text-primary: #00ff41;
    --text-accent: #39ff14;
}
```

### Professional Theme - Lines 27-35:
```css
[data-theme="professional"] {
    --bg-gradient: linear-gradient(135deg, #f1f5f9 0%, #cbd5e1 100%);
    --window-bg: rgba(255, 255, 255, 0.85);
    --border-color: #94a3b8;
    --text-primary: #1e293b;
    --text-accent: #2563eb;  /* Blue accent */
}
```

### Color Resources:
- [Coolors.co](https://coolors.co) - Color palette generator
- [Color Hunt](https://colorhunt.co) - Color scheme library
- [Gradient Generator](https://www.gradientgenerator.com/)

---

## 🎨 Create Custom Theme

### Step 1: Add CSS Variables
```css
[data-theme="mytheme"] {
    --bg-gradient: linear-gradient(135deg, #YOUR_COLOR1 0%, #YOUR_COLOR2 100%);
    --window-bg: rgba(YOUR_R, YOUR_G, YOUR_B, 0.8);
    --border-color: #YOUR_BORDER_COLOR;
    --text-primary: #YOUR_TEXT_COLOR;
    --text-accent: #YOUR_ACCENT_COLOR;
    --taskbar-bg: rgba(YOUR_R, YOUR_G, YOUR_B, 0.9);
}
```

### Step 2: Add HTML Option
```html
<select id="theme-switcher" onchange="switchSystemTheme(this.value)">
    <option value="dark">Dark OS</option>
    <option value="hacker">Hacker Terminal</option>
    <option value="professional">Pro Corporate</option>
    <option value="mytheme">My Custom Theme</option>
</select>
```

### Example - Purple Theme:
```css
[data-theme="purple"] {
    --bg-gradient: linear-gradient(135deg, #1a0033 0%, #2d0052 100%);
    --window-bg: rgba(20, 5, 40, 0.8);
    --border-color: #9d4edd;
    --text-primary: #e0aaff;
    --text-accent: #c77dff;
    --taskbar-bg: rgba(10, 0, 25, 0.95);
}
```

---

## 📋 Checklist Before Launch

- [ ] Updated your name and title
- [ ] Updated About section bio
- [ ] Added all your skills
- [ ] Added your projects (at least 2-3)
- [ ] Updated education and experience
- [ ] Added your email address
- [ ] Added your phone number
- [ ] Added GitHub link
- [ ] Added LinkedIn link
- [ ] Added `resume.pdf` file
- [ ] Updated AI assistant responses
- [ ] Tested all terminal commands
- [ ] Tested responsive design on mobile
- [ ] Verified all links work
- [ ] Tested all themes
- [ ] Checked spelling and grammar

---

## 🚀 Next Steps

1. **Customize Everything**: Follow this guide to personalize your portfolio
2. **Test Thoroughly**: Check on different devices and browsers
3. **Get Feedback**: Ask friends to review and test
4. **Deploy**: Push to GitHub Pages, Netlify, or your hosting
5. **Share**: Link in your LinkedIn, resume, and emails
6. **Keep Updated**: Update projects and skills regularly

---

## ❓ Common Questions

**Q: How do I change the window background color?**  
A: Update `--window-bg` in the theme CSS variables.

**Q: Can I add more desktop icons?**  
A: Yes! Add more `<div class="desktop-icon">` elements following the existing pattern.

**Q: How do I make the boot screen shorter?**  
A: Change the interval timing in `js/main.js` (line 32).

**Q: Can I add sound effects?**  
A: Yes! Add audio files and play them using JavaScript's `new Audio()`.

**Q: How do I integrate a real email service?**  
A: Use Formspree (recommended), EmailJS, or Netlify Forms. See section 5 for details.

---

Good luck with your portfolio! 🚀
