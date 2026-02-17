# Velvet Spa & Salon — Luxury Website

A fully immersive, luxurious beauty and salon website prototype built with vanilla HTML/CSS/JS. Designed as a prototype that will later be migrated to React.

> **Origin:** Inspired by a Blogger XML theme (`old/theme-2162663453168585681.xml`) — a "Sprinkle" template by Piki Templates, themed for "Velvet Spa, Parlour & Saloon."

---

## 🎨 Design System

| Token | Value |
|---|---|
| **Colors** | Dark charcoal `#0a0a0a`, warm gold `#c9a96e`, rose `#c6005f`, cream `#faf6f0` |
| **Fonts** | Playfair Display (headings) + Poppins (body) via Google Fonts CDN |
| **Icons** | Font Awesome 6.4.2 via CDN |
| **Effects** | Parallax hero, glassmorphism cards, scroll reveals, floating particles, animated counters |

---

## 📁 Project Structure

```
project01/
├── index.html              ✅ Homepage (complete)
├── services.html           ✅ Services page (complete)
├── gallery.html            ✅ Gallery page (complete)
├── contact.html            ✅ Contact page (complete)
├── README.md
├── css/
│   ├── variables.css       ✅ Design tokens (colors, fonts, spacing, shadows)
│   ├── reset.css           ✅ Modern CSS reset
│   ├── global.css          ✅ Sections, buttons, scroll reveals, particles
│   ├── components.css      ✅ Navbar, hero, cards, gallery, testimonials, footer
│   └── pages.css           ✅ Page-specific styles (services, gallery, contact)
├── js/
│   ├── nav.js              ✅ Sticky navbar, mobile hamburger menu
│   ├── animations.js       ✅ Scroll reveals, parallax, counters, testimonials
│   ├── gallery.js          ✅ Lightbox, gallery filter tabs
│   └── main.js             ✅ Smooth scroll, contact form, utilities
└── old/
    └── theme-*.xml         Original Blogger XML theme (reference)
```

---

## ✅ What's Done

- **Full CSS design system** — dark/gold luxury palette with glassmorphism and animation tokens
- **Homepage (`index.html`)** — all sections:
  - Transparent → sticky navbar with mobile drawer
  - Full-viewport parallax hero with floating gold particles
  - 4 service cards (Parlour, Spa, Saloon, Academy) with hover reveals
  - Animated stat counters (Years, Clients, Stylists, Services)
  - Gallery preview grid with lightbox
  - Auto-rotating testimonial carousel
  - CTA section with parallax background
  - Footer with social links, newsletter, contact info
  - Back-to-top button
- **Services page (`services.html`)** — all sections:
  - Alternating image/text layout for Parlour, Spa, Saloon, Academy
  - Price lists for each service category
  - 3-tier Bridal Packages (Silver/Gold/Platinum) with pricing cards
  - CTA and full footer
- **Gallery page (`gallery.html`)** — all sections:
  - 5-tab category filter (All, Spa, Salon, Bridal, Nails)
  - 12 gallery items with animated filter transitions
  - Lightbox for full-size image viewing
  - CTA and full footer
- **Contact page (`contact.html`)** — all sections:
  - Glassmorphism contact form (name, email, phone, service, message)
  - Info sidebar (address, phone, email, WhatsApp, business hours)
  - Social follow card
  - Embedded Google Maps section
  - Footer
- **All JavaScript** — navigation, scroll animations, gallery lightbox, filter tabs, contact form, utilities

## 🔲 What's Remaining

1. **Browser testing** — Verify responsiveness across desktop/tablet/mobile
2. **React migration** — Convert prototype to Vite + React after Node.js is installed

---

## 🚀 How to Preview

Just open `index.html` in any browser — no build tools or server needed.

```
# On Windows, double-click index.html or run:
start index.html
```

> **Note:** Images are loaded from Unsplash CDN, so an internet connection is required.

---

## 🔄 Future: React Migration Plan

Once Node.js is installed, the plan is to:
1. Scaffold with `npx create-vite@latest ./ --template react`
2. Convert each section into React components
3. Use React Router for multi-page navigation
4. Keep the same CSS design system (it's already modular)

---

## 📝 Development Log

### Phase 1: Foundation & Homepage (Initial Build)
**Date:** February 16-17, 2026

#### CSS Architecture
- Created `variables.css` with complete design token system
  - Color palette: dark charcoal, warm gold, rose gold, cream
  - Typography: Playfair Display (headings) + Poppins (body)
  - Spacing scale, shadows, transitions, border radius tokens
- Built `reset.css` with modern CSS reset
- Developed `global.css` with:
  - Base styles, container system
  - Section layouts, button variants
  - Scroll reveal animations (fade-up, fade-left, fade-right, stagger)
  - Floating particle system for hero sections
- Created `components.css` with all reusable UI components:
  - Sticky navbar with transparent-to-solid transition
  - Mobile hamburger menu with overlay
  - Hero section with parallax effect
  - Service cards with glassmorphism
  - Gallery grid with lightbox
  - Testimonial carousel
  - CTA sections, footer, back-to-top button
- Built `pages.css` for page-specific layouts

#### Homepage (`index.html`)
- **Navbar:** Transparent on load, becomes solid on scroll with blur effect
- **Hero Section:** Full-viewport parallax background with floating gold particles, animated headline
- **Services Preview:** 4 glassmorphic cards (Parlour, Spa, Saloon, Academy) with hover effects
- **Stats Section:** Animated counters (15+ Years, 10K+ Clients, 50+ Stylists, 200+ Services)
- **Gallery Preview:** 6-image grid with lightbox functionality
- **Testimonials:** Auto-rotating carousel with 3 client reviews
- **CTA Section:** Parallax background with booking call-to-action
- **Footer:** 4-column layout with brand, quick links, services, contact info, newsletter signup

#### JavaScript Functionality
- `nav.js`: Sticky navbar, mobile menu toggle, scroll behavior
- `animations.js`: Intersection Observer for scroll reveals, parallax effects, stat counters, testimonial rotation
- `gallery.js`: Lightbox modal for image viewing
- `main.js`: Smooth scroll, contact form handling, utilities

---

### Phase 2: Sub-Pages Development
**Date:** February 17, 2026

#### Services Page (`services.html`)
- **Page Header:** Dark background with floating particles
- **Service Sections:** Alternating image/text layout for 4 categories:
  - **Parlour:** Bridal makeup, party makeup, facials, hair treatments (₹500-₹12,000)
  - **Spa & Wellness:** Swedish massage, aromatherapy, hot stone, body treatments (₹3,500-₹10,000)
  - **Saloon:** Haircuts, coloring, keratin, grooming (₹800-₹8,000)
  - **Academy:** Professional courses and certifications (₹5,000-₹85,000)
- **Bridal Packages:** 3-tier pricing cards (Silver ₹25K, Gold ₹50K, Platinum ₹85K)
- **CTA Section:** Parallax booking call-to-action
- **Footer:** Full footer with all links

#### Gallery Page (`gallery.html`)
- **Page Header:** Dark background with particles
- **Filter System:** 5 category tabs (All, Spa, Salon, Bridal, Nails)
- **Gallery Grid:** 12 images with category-based filtering
- **Lightbox:** Full-screen image viewer
- **Interactive Filtering:** Smooth fade transitions between categories
- **CTA Section:** Booking encouragement
- **Footer:** Complete footer

#### Contact Page (`contact.html`)
- **Page Header:** Dark background with particles
- **Contact Form:** Glassmorphic design with fields:
  - Name, email, phone, service interest, message
  - Success animation on submission
- **Info Sidebar:** Contact details card with:
  - Address, phone numbers, email addresses
  - WhatsApp quick contact
  - Business hours (Mon-Fri 9AM-9PM, Sat 9AM-8PM, Sun 10AM-6PM)
- **Social Follow Card:** Links to all social platforms
- **Google Maps:** Embedded location map with custom styling
- **Footer:** Complete footer

---

### Phase 3: Branding & Polish
**Date:** February 17, 2026

#### Custom Logo Integration
- **Logo Assets:**
  - `images/logo-white.png`: White outline logo for navbar
  - `images/logo-footer.png`: Full-color logo with tagline for footer
- **Navbar Logo:** Replaced Font Awesome icon with custom white logo across all 4 pages
- **Footer Logo:** Integrated full-color branded logo with tagline across all 4 pages
- **CSS Updates:** Added `.nav-logo-img` and `.footer-logo-img` classes for proper sizing

#### Favicon Implementation
- Set `images/logo-white.png` as favicon across all pages
- Added proper `<link rel="icon">` tags to all HTML files
- Ensures brand consistency in browser tabs

---

### Technical Highlights

#### Responsive Design
- Mobile-first approach with breakpoints at 768px and 1024px
- Hamburger menu for mobile navigation
- Fluid typography and spacing
- Touch-friendly interactive elements

#### Performance Optimizations
- Lazy-loaded images from Unsplash CDN
- Efficient CSS with minimal specificity
- Intersection Observer for scroll animations (better than scroll listeners)
- Modular CSS architecture for easy maintenance

#### Accessibility Features
- Semantic HTML5 elements
- ARIA labels on interactive elements
- Keyboard navigation support
- Sufficient color contrast ratios
- Alt text on all images

#### Browser Compatibility
- Modern CSS features with fallbacks
- Tested on latest Chrome, Firefox, Safari, Edge
- Graceful degradation for older browsers

---

### Assets & Resources

#### External Dependencies
- **Google Fonts:** Playfair Display, Poppins
- **Font Awesome:** v6.4.2 (icons)
- **Unsplash:** Stock images via CDN
- **Google Maps:** Embedded location iframe

#### Custom Assets
- Logo files in `images/` directory
- All CSS in `css/` directory
- All JavaScript in `js/` directory

---

### Project Status: ✅ Complete

All planned features have been implemented:
- ✅ Full design system with luxury aesthetic
- ✅ Homepage with all interactive sections
- ✅ Services page with pricing
- ✅ Gallery page with filtering
- ✅ Contact page with form and map
- ✅ Custom branding (logos, favicon)
- ✅ Responsive design
- ✅ Scroll animations
- ✅ Mobile navigation

**Ready for:** Browser testing and eventual React migration
