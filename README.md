# Personal Portfolio Website

A modern, minimal, developer-focused personal portfolio website built with React, Tailwind CSS, and Framer Motion.

## Features

- 🎨 **Dark Theme** - Professional developer aesthetic with custom color palette
- 📱 **Fully Responsive** - Optimized for mobile, tablet, and desktop
- 🎭 **Smooth Animations** - Fade-in and slide-up animations using Framer Motion
- 🧭 **Fixed Sidebar Navigation** - Desktop sidebar with mobile drawer
- ⚡ **Fast & Modern** - Built with Vite for optimal performance
- ♿ **Accessible** - ARIA labels and keyboard navigation support

## Tech Stack

- **React.js** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Icons** - Icon library

## Design System

- **Background**: `#0a192f` (Navy)
- **Primary Text**: `#ccd6f6` (Light Slate)
- **Secondary Text**: `#8892b0` (Slate)
- **Accent Color**: `#64ffda` (Accent/Teal)
- **Fonts**: Inter, Poppins

## Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── Layout.jsx       # Main layout with sidebar
│   │   ├── Sidebar.jsx      # Navigation sidebar
│   │   ├── Hero.jsx         # Hero section
│   │   ├── About.jsx        # About section
│   │   ├── Experience.jsx   # Experience timeline
│   │   ├── Projects.jsx     # Featured projects
│   │   ├── Skills.jsx       # Skills showcase
│   │   ├── Contact.jsx     # Contact section
│   │   └── Footer.jsx       # Footer with social links
│   ├── App.jsx              # Main app component
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles
├── tailwind.config.js       # Tailwind configuration
├── postcss.config.js        # PostCSS configuration
└── package.json             # Dependencies
```

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Customization

### Update Personal Information

1. **Hero Section** (`src/components/Hero.jsx`):
   - Update name, title, and intro text

2. **About Section** (`src/components/About.jsx`):
   - Modify bio and personal description

3. **Experience** (`src/components/Experience.jsx`):
   - Update the `experiences` array with your work history

4. **Projects** (`src/components/Projects.jsx`):
   - Update the `projects` array with your projects
   - Add GitHub and live demo links

5. **Skills** (`src/components/Skills.jsx`):
   - Update the `skillCategories` array with your skills

6. **Social Links** (`src/components/Sidebar.jsx` and `Footer.jsx`):
   - Update social media links and email

7. **Contact** (`src/components/Contact.jsx`):
   - Update email address

## Sections

1. **Hero** - Introduction with name, title, and CTA
2. **About** - Professional bio and background
3. **Experience** - Work history in timeline format
4. **Projects** - Featured projects with descriptions and links
5. **Skills** - Categorized technical skills
6. **Contact** - Call-to-action for getting in touch
7. **Footer** - Social links and copyright

## Responsive Breakpoints

- **Mobile**: < 768px (drawer navigation)
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px (fixed sidebar)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT
