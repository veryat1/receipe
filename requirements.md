Build a complete, production-ready marketing website for "Recipe Secrets Restaurant."

## Tech stack
- Plain vanilla HTML5, CSS3, and minimal JavaScript. No frameworks, no build step, no backend.
- It must deploy as static files to a free host (GitHub Pages, Netlify, or Vercel) with zero configuration.
- One shared stylesheet (css/styles.css) and one shared script (js/main.js).
- Use CSS custom properties for colors, fonts, and spacing so the theme is easy to change.

## Pages (exactly 5)
1. index.html (Home)
   - Full-screen hero with a large, appetizing food image, dark overlay, restaurant name, short tagline, and two buttons: "Reserve a Table" and "View Specials".
   - "Our Story" teaser with an image and a link to About.
   - 3–4 featured dishes as cards (image, name, short description, price).
   - Customer testimonials section (3 placeholder quotes).
   - Opening hours and location strip, then a final call-to-action banner.
2. about.html (About)
   - Restaurant story and philosophy, chef profile with a photo, values or "what makes us different" (3 icon blocks), and an interior/ambience photo gallery (6 images in a grid).
3. specials.html (Specials)
   - Weekly or seasonal specials in a menu-card layout grouped by category (Starters, Mains, Desserts, Drinks), each with image, name, description, price, and tags like "Chef's Pick", "Spicy", "Vegetarian".
   - A highlighted "Special of the Week" feature at the top.
4. reservation.html (Reservation)
   - Booking form: name, email, phone, date, time, number of guests (1–12), occasion (dropdown), special requests.
   - Client-side validation (required fields, valid email, no past dates).
   - Submit via Formspree (use a placeholder action URL "https://formspree.io/f/YOUR_FORM_ID") so it works on static hosting. Show a friendly success message.
   - Side panel with opening hours, reservation policy, and phone number for large groups.
5. contact.html (Contact)
   - Contact form (name, email, subject, message) using the same Formspree approach.
   - Address, phone, email, opening hours, and social media links.
   - Embedded Google Maps iframe (placeholder location).

## Shared elements
- Sticky header with logo text, nav links to all 5 pages, active-page highlighting, and a "Book Now" button. Collapses to a hamburger menu on mobile.
- Footer with hours, contact details, social icons, quick links, and copyright.

## Visual design
- Warm, premium, inviting feel: deep charcoal or espresso background accents, warm gold/terracotta highlight color, cream backgrounds.
- Elegant serif for headings (e.g. Playfair Display) and a clean sans-serif for body (e.g. Inter), via Google Fonts.
- Image-heavy: every page should have a large hero banner plus multiple food or interior photos. Images are the main selling point.
- Subtle polish: hover effects on cards and buttons, smooth scrolling, fade-in-on-scroll animations (IntersectionObserver), rounded corners and soft shadows. Respect prefers-reduced-motion.

## Images
- Use high-quality free images from Unsplash via direct URLs (images.unsplash.com with width/quality params, e.g. ?w=1600&q=80), choosing ones that match each dish or section.
- Every image must have descriptive alt text, use loading="lazy" (except the hero), and use object-fit: cover so nothing stretches.
- Keep all image URLs in obvious places so they can be swapped for real restaurant photos later.

## Quality requirements
- Fully responsive: test layouts at 375px, 768px, and 1280px widths. No horizontal scrolling.
- Semantic HTML, accessible color contrast, keyboard-navigable menu and forms, visible focus states.
- Per-page <title>, meta description, Open Graph tags, and a favicon.
- No console errors; all internal links work.

## Content
- Write realistic, appetizing placeholder copy (not lorem ipsum).
- Use clearly marked placeholders for real details: [ADDRESS], [PHONE], [EMAIL], [HOURS], [SOCIAL LINKS], [FORMSPREE ID].

## Deliverables
- Folder structure: index.html, about.html, specials.html, reservation.html, contact.html, css/, js/, assets/.
- A README.md with: how to preview locally, how to deploy to GitHub Pages and Netlify step by step, how to set up Formspree, and a list of every placeholder to replace.

When done, open each page and check it at mobile and desktop widths, fix any layout issues, then summarize what you built.