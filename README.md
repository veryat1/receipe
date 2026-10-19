# Recipe Secrets Restaurant — Website

A 5-page static marketing site for a restaurant. Plain HTML5, CSS3, and vanilla
JavaScript — no frameworks, no build step, no backend.

## Structure

```
recipe_website/
├── index.html         Home
├── about.html          About
├── specials.html       Specials
├── reservation.html    Reservation form
├── contact.html        Contact form + map
├── css/styles.css      Shared stylesheet (CSS custom properties for theme)
├── js/main.js          Shared behavior (nav, scroll-reveal, form validation)
├── assets/favicon.svg  Favicon
└── README.md
```

## Preview locally

No build step is required — any static file server works.

```powershell
cd recipe_website
python -m http.server 8080
# then open http://localhost:8080
```

Or with Node:

```powershell
npx serve .
```

Opening `index.html` directly by double-clicking also works, but a local
server more accurately reflects how it will behave once deployed.

## Deploy

### GitHub Pages

1. Push this folder to a GitHub repository (the contents of `recipe_website/`
   should be at the repo root, or adjust the Pages source folder accordingly).
2. In the repo, go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to "Deploy from a branch".
4. Choose the branch (e.g. `main`) and folder (`/` root), then **Save**.
5. GitHub will publish the site at `https://<username>.github.io/<repo>/`
   within a minute or two.

### Netlify

1. Create a free account at netlify.com.
2. Click **Add new site → Deploy manually**, then drag the `recipe_website`
   folder onto the upload area — or connect the GitHub repo for automatic
   deploys on every push (**Add new site → Import an existing project**).
3. Leave the build command empty and the publish directory as `/` (this is a
   static site with no build step).
4. Netlify gives you a live URL immediately; add a custom domain under
   **Domain settings** if desired.

## Setting up Formspree (for the Reservation and Contact forms)

Both forms post to Formspree so they work without a backend on static hosting.

1. Create a free account at [formspree.io](https://formspree.io).
2. Create a new form and copy its endpoint, which looks like
   `https://formspree.io/f/abcd1234`.
3. In `reservation.html` and `contact.html`, replace the form's `action`
   attribute:
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" ...>
   ```
   with your real endpoint (you can use the same form ID for both pages, or
   create two separate Formspree forms to keep submissions separated).
4. Formspree will send a confirmation email the first time each form is
   submitted — click the link to activate it.
5. The on-page "Request Reservation" / "Send Message" success messages shown
   in this repo are a demo fallback for when `YOUR_FORM_ID` hasn't been
   replaced yet. Once you add a real endpoint, submissions go to Formspree
   and redirect to Formspree's own thank-you page by default; to keep the
   in-page success message instead, enable Formspree's AJAX mode
   (see their docs on `fetch`/AJAX submissions) or set a custom `_next`
   redirect field.

## Placeholders to replace before launch

Search the project for these bracketed tokens and replace them with real
details:

| Placeholder | Where it appears | Replace with |
|---|---|---|
| `[ADDRESS]` | Home, Reservation, Contact, footers | Street address |
| `[PHONE]` | Home, Reservation, Contact, footers | Phone number |
| `[EMAIL]` | Contact, footers | Contact email address |
| `[HOURS]` | Home, Reservation, Contact, footers | Real opening hours per day |
| `[SOCIAL LINKS]` | Footers, Contact page | Instagram/Facebook/X profile URLs |
| `[FORMSPREE ID]` / `YOUR_FORM_ID` | `reservation.html`, `contact.html` form `action` | Your real Formspree endpoint |
| Google Maps `src` in `contact.html` | Contact page | A real embed URL for your location (Google Maps → Share → Embed a map) |

## Images

Placeholder photos come from two sources, loaded via direct URLs (no API key
needed): most are `images.unsplash.com` links with width/quality params (e.g.
`?w=1600&q=80`); eleven dish/scene photos that didn't have a good Unsplash
match are served from Wikimedia Commons (`thumb.wikimedia.org` /
`upload.wikimedia.org`) instead. Every `<img>`/background image has
descriptive alt text or an `aria-label`, uses `loading="lazy"` (except hero
banners), and is sized with `object-fit: cover`. Swap any of these URLs for
real restaurant photography when available — they're kept inline in each
HTML file so they're easy to find and replace.

### Wikimedia Commons image credits

The Unsplash images are free to use without attribution. The Wikimedia
Commons images are licensed CC BY / CC BY-SA (two are public domain) and
**require attribution if this site goes live** with them still in place —
either swap them for your own photography, or credit them as below (e.g. in
a page footer or an `/credits` note):

| Used for | File | Author | License |
|---|---|---|---|
| Home — chef plating (story section) | [20120608-OSEC-RBN-2453](https://commons.wikimedia.org/wiki/File:20120608-OSEC-RBN-2453_(7170162053).jpg) | USDAgov | Public domain |
| Home & Specials — Warm Chocolate Torte | [Chocolate Torte at Nino's Tuscany](https://commons.wikimedia.org/wiki/File:Chocolate_Torte_at_Nino%27s_Tuscany_in_NYC,_March_2010.jpg) | Ralph Daily | CC BY 2.0 |
| About — open kitchen pass (gallery) | [20120608-OSEC-RBN-2579](https://commons.wikimedia.org/wiki/File:20120608-OSEC-RBN-2579_(7170155123).jpg) | USDAgov | Public domain |
| About gallery & Contact hero — garden patio | [DSCF1067 garden patio](https://commons.wikimedia.org/wiki/File:DSCF1067_A_tranquil_garden_patio_framed_by_vibrant_pink_bougainvillea_cozy_metal_bistro_chairs_and_shaded_wooden_walkways_-_the_perfect_spot_to_relax_outdoors.jpg) | PattayaPatrol | CC BY-SA 4.0 |
| Specials — Special of the Week (duck breast) | [Pan-Roasted Duck Breast](https://commons.wikimedia.org/wiki/File:-2022-03-08_Pan-Roasted_Duck_Breast,_fondant_potato,_wilted_greens,_cherry_sauce,_Trimingham,_Norfolk.JPG) | Kolforn | CC BY-SA 4.0 |
| Specials — Heirloom Bruschetta | [The Food at Davids Kitchen 029](https://commons.wikimedia.org/wiki/File:The_Food_at_Davids_Kitchen_029.jpg) | David Reber | CC BY-SA 2.0 |
| Specials — Roasted Squash Soup | [Butternut squash soup at a sittning](https://commons.wikimedia.org/wiki/File:Butternut_squash_soup_at_a_sittning.jpg) | JIP | CC BY-SA 4.0 |
| Specials — Chili-Glazed Shrimp | [Grilled Shrimp Skewers](https://commons.wikimedia.org/wiki/File:Grilled_Shrimp_Skewers.jpg) | Eximiousincorp | CC BY-SA 4.0 |
| Specials — Classic Tiramisu | [Dessert Tiramisu](https://commons.wikimedia.org/wiki/File:Dessert_Tiramisu.jpg) | Javier Lastras | CC BY 2.0 |
| Specials — Smoked Old Fashioned | [Rye Old Fashioned](https://commons.wikimedia.org/wiki/File:Rye_Old_Fashioned_(57-366)_-_Flickr_-_timsackton.jpg) | Tim Sackton | CC BY-SA 2.0 |
| Specials — House Red Blend | [DFC 5084 glass of red wine](https://commons.wikimedia.org/wiki/File:DFC_5084_A_hand_with_bright_blue_nails_holding_a_glass_of_red_wine_beside_a_pink_orchid_on_a_table.jpg) | PattayaPatrol | CC BY-SA 4.0 |

## Notes

- Theme colors, fonts, and spacing are defined as CSS custom properties at
  the top of `css/styles.css` (`:root`) — change them there to retheme the
  whole site.
- The mobile nav collapses to a hamburger menu below 900px.
- Scroll-reveal animations respect `prefers-reduced-motion`.
- Client-side form validation checks required fields, email format, and
  rejects past dates — Formspree is still responsible for actually
  delivering submissions.
