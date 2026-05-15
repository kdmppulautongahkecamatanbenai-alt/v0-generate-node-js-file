# Tropicoco - React App

Premium Indonesian Desiccated Coconut Supplier Website

## Project Structure

```
react-app/
├── public/
│   └── images/          # All images
├── src/
│   ├── components/      # Reusable components
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── TypingText.jsx
│   │   ├── WhatsAppButton.jsx
│   │   ├── AnimatedSection.jsx
│   │   └── index.js
│   ├── pages/           # Page components
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Products.jsx
│   │   ├── Contact.jsx
│   │   ├── Blog.jsx
│   │   └── index.js
│   ├── hooks/           # Custom hooks
│   │   ├── useTypingAnimation.js
│   │   ├── useScrollAnimation.js
│   │   └── index.js
│   ├── App.jsx          # Main app component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn or pnpm

### Installation

```bash
# Navigate to react-app folder
cd react-app

# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`

### Build for Production

```bash
# Build static files
npm run build
```

This creates a `dist/` folder with static HTML, CSS, and JS files.

### Preview Production Build

```bash
npm run preview
```

## Deployment

### Option 1: Static Hosting (Netlify, Vercel, etc.)

1. Run `npm run build`
2. Upload the `dist/` folder to your hosting

### Option 2: Traditional Web Hosting (cPanel, etc.)

1. Run `npm run build`
2. Upload contents of `dist/` folder to `public_html`

### Option 3: Deploy to Vercel

```bash
npm install -g vercel
vercel
```

## Features

- Responsive design
- Smooth scroll animations
- Typing animation on hero section
- WhatsApp integration
- Multi-language support ready
- SEO optimized
- Fast loading with Vite

## Tech Stack

- React 18
- React Router DOM
- Vite (build tool)
- CSS (no frameworks, custom styles)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

All rights reserved - Tropicoco
