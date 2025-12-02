# VITVerse Website

A modern, Google Play Store-inspired React website for the VITVerse app - the ultimate companion for VIT Chennai students.

## Features

- 🎨 Google Play Store design with authentic color palette
- 🌓 Light/Dark theme support with auto-detection
- 📱 Fully responsive layout
- ⚡ Built with React + Vite
- 📥 Collapsible version history
- 🚀 Optimized performance

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Preview

```bash
npm run preview
```

## Project Structure

```
├── public/
│   └── logo.jpg              # VITVerse logo
├── src/
│   ├── components/
│   │   ├── Header.jsx        # Navigation with theme toggle
│   │   ├── Hero.jsx          # App showcase section
│   │   ├── Screenshots.jsx   # Screenshot gallery
│   │   ├── About.jsx         # App description
│   │   ├── Features.jsx      # Feature grid
│   │   ├── Downloads.jsx     # Collapsible version downloads
│   │   ├── Contact.jsx       # Contact links
│   │   └── Footer.jsx        # Footer section
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css             # Theme variables
├── index.html
├── package.json
└── vite.config.js
```

## Customization

- **Logo**: Replace `public/logo.jpg` with your logo
- **Downloads**: Update links in `src/components/Downloads.jsx`
- **Screenshots**: Add actual screenshots in `src/components/Screenshots.jsx`
- **Contact**: Modify links in `src/components/Contact.jsx`
- **Theme Colors**: Edit CSS variables in `src/index.css`

## Theme System

The website uses CSS custom properties for theming:
- Automatic theme detection based on system preferences
- Manual toggle via header button
- Theme preference saved in localStorage

## License

Built for VIT Chennai students by a VIT Chennai student.
# vitverse-website2
