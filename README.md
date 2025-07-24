# Personal Portfolio Website 🚀

A modern, responsive personal portfolio website built with React and Vite. This portfolio showcases my professional journey, projects, and skills in an interactive and engaging way.


## Features ✨

- 🏠 **Responsive Navigation Bar** - Smooth navigation across all sections
- 👋 **Hero Section** - Eye-catching introduction with personal branding
- 👨‍💻 **About Me Section** - Professional background and story
- 🛠️ **Skills Showcase** - Interactive display of technical abilities
- 🎯 **Project Portfolio** - Detailed project presentations with live demos
- 📬 **Contact Form** - Functional contact form for inquiries
- 📱 **Mobile-Friendly Design** - Optimized for all device sizes
- 📄 **Downloadable Resume** - Easy access to professional resume
- 🌙 **Dark/Light Mode** - Theme switching capability
- ✨ **Smooth Animations** - Enhanced user experience with subtle animations

## Tech Stack 💻

- ⚛️ **React.js** - Frontend framework
- 🚀 **Vite** - Build tool and development server
- 🎨 **CSS3** - Styling and animations
- 📱 **Responsive Design** - Mobile-first approach
- 🔄 **React Router** - Client-side routing
- 📧 **EmailJS** - Contact form functionality (optional)

## Demo 🌐

- **Live Demo**: [Your Portfolio URL](https://ayeshashaw.netlify.app)
- **Repository**: [GitHub Repository](https://github.com/ayeshashaw/MyPortfolio.git)

## Getting Started 🏁

### Prerequisites 📋

Before running this project, make sure you have the following installed:

- **npm** (v6 or higher) - Comes with Node.js
- **Git** - [Download here](https://git-scm.com/)

### Installation 🔧

1. **Clone the repository**
   ```bash
   git clone https://github.com/ayeshashaw/MyPortfolio.git
   ```

2. **Navigate to project directory**
   ```bash
   cd MyPortfolio/portfolio-frontend
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```
   The application will open at `http://localhost:5173`

5. **Build for production**
   ```bash
   npm run build
   ```

6. **Preview production build**
   ```bash
   npm run preview
   ```

## Project Structure 📁

```
portfolio-frontend/
├── public/                 # Static assets
│   ├── favicon.ico
│   └── index.html
├── src/
│   ├── components/         # Reusable React components
│   │   ├── Header/
│   │   ├── Hero/
│   │   ├── About/
│   │   ├── Skills/
│   │   ├── Projects/
│   │   ├── Contact/
│   │   └── Footer/
│   ├── pages/             # Page components
│   │   ├── NotFound.jsx
│   ├── styles/            # CSS stylesheets
│   │   └── components/
│   ├── assets/            # Images and static files
│   │   ├── images/
│   │   └── resume.pdf
│   ├── data/              # Application data
│   │   ├── projects.js
│   ├── utils/             # Utility functions
│   ├── hooks/             # Custom React hooks
│   ├── App.jsx            # Main App component
│   └── main.jsx           # Entry point
├── .gitignore
├── package.json
├── vite.config.js
└── README.md
```

## Customization 🎨

### Personal Information
- Update your details in `src/data/personal.js`
- Replace profile images in `src/assets/images/`
- Update your resume in `src/assets/resume.pdf`

### Projects
- Add your projects in `src/data/projects.js`
- Include project screenshots in `src/assets/images/projects/`

### Styling
- Modify color themes in `src/styles/variables.css`
- Update component styles in `src/styles/components/`
- Customize animations and transitions

### Contact Form
- Set up EmailJS for contact form functionality
- Update contact information in the Contact component

## Scripts 📜

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors

## Deployment 🚀

### Netlify
1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify

### Vercel
1. Connect your GitHub repository to Vercel
2. Vercel will automatically build and deploy

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add deploy script to package.json:
   ```json
   "scripts": {
     "deploy": "gh-pages -d dist"
   }
   ```
3. Run: `npm run build && npm run deploy`

## Performance Optimization 🏃‍♂️

- ✅ Lazy loading for images
- ✅ Code splitting with React.lazy()
- ✅ Optimized build with Vite
- ✅ Compressed assets
- ✅ Minified CSS and JavaScript

## Browser Support 🌐

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

## Contributing 🤝

Contributions are welcome! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add amazing feature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

## Issues 🐛

If you find any bugs or have suggestions for improvements:

1. Check existing issues first
2. Create a new issue with detailed description
3. Include steps to reproduce (for bugs)
4. Add screenshots if applicable



## Acknowledgments 🙏

- Thanks to all the open-source libraries that made this project possible
- Inspiration from various portfolio designs across the web
- Special thanks to the React and Vite communities

---

⭐ **If you found this project helpful, please give it a star!** ⭐

*Made with ❤️ and lots of ☕*
