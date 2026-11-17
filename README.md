# Personal Portfolio Website

A modern, responsive static personal portfolio website designed to showcase developer skills, experience, projects, and contact information. Built with clean, semantic HTML5, modular SCSS/CSS, Bootstrap 5, and JavaScript (ES6 Modules).

## 🚀 Features

- **Responsive Web Design (RWD)**: Optimized layout and smooth viewing experience across mobile, tablet, and desktop screens.
- **Modular Component Rendering**: Uses JavaScript ES6 modules to dynamically inject the navigation bar (with active page detection), back-to-top button, tech stacks, and tools.
- **Data-Driven Architecture**: Decouples content from markup by managing skills, projects, tech stacks, and tools in dedicated data modules (`js/data/`).
- **Interactive Animations**: Features animated skill progress bars with hover expansion, a pulsing call-to-action button, and dynamic ambient floating bubbles (`bubble.js`).

## 🌐 Local Preview

Since this project uses ES6 JavaScript modules, you can preview it locally using either of the following methods:

1. **Live Server**: In VS Code, install the `Live Server` extension, right-click `index.html`, and select **Open with Live Server**.
2. **Local HTTP Server**: Run a lightweight local server from the project root:
   ```bash
   python3 -m http.server 8000
   ```
