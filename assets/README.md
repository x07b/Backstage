# Assets Directory

This directory contains all local assets used by the Backstage website.

## Structure

```
assets/
├── images/       # Placeholder for additional images
├── videos/       # Video files (MP4, WebM, etc.)
│   └── hero-video.mp4 (7.3MB) - Hero section background video
├── icons/        # Icon files (SVG, PNG)
├── fonts/        # Font files (WOFF, WOFF2, TTF)
├── logos/        # Logo files
│   └── backstage-logo.webp (20KB) - Main Backstage logo
└── README.md     # This file
```

## Asset Inventory

### Videos
- **hero-video.mp4** (7.3MB)
  - Location: `./assets/videos/hero-video.mp4`
  - Format: MP4
  - Usage: Hero section background video (100vh, autoplay, muted, looped)

### Logos
- **backstage-logo.webp** (20KB)
  - Location: `./assets/logos/backstage-logo.webp`
  - Format: WebP
  - Usage: Navbar and footer branding

## Notes

All SVG icons (search, social media) are inline in HTML for performance and to avoid additional requests.

All CSS gradients are used for image placeholders across story cards, event cards, and video thumbnails.

The project is now fully self-contained with no external asset dependencies (except fonts from system fonts or Google Fonts if added).
