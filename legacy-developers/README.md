# Legacy Developers — Web-Based Organization Showcase

A web application developed for **Legacy Developers**, presenting an online corporate and portfolio presence for a development organization.

---

## 🌟 Overview & Features

The project is structured into 8 distinct sections matching the live organization portal:

1. **Home (`index.html`)**
   - High-definition video background with fallback poster and smooth overlay
   - Distinctive typography using Google Font **Sail** (cursive luxury script) and **Raleway** (architectural sans-serif)
   - Call-to-action buttons ("Our Services", "Featured Work", "Get In Touch")
   - Value propositions, featured project previews, and leadership preview
   - Universal "Get In Touch" contact footer with validation

2. **Our Team (`our-team.html`)**
   - Video header banner and company mission statement
   - 4 leadership & architecture cards with authentic photos:
     - **Don Francis** (Founder & CEO)
     - **Ashley Jones** (Lead Interior Designer)
     - **Tess Brown** (Manager)
     - **Lisa Rose** (Head Architect)
   - Direct email, phone, and social contact strip

3. **Services (`services.html`)**
   - Full service portfolio:
     - Custom Home Building
     - Renovation and Additions
     - Interior Design (with background video highlight)
     - Expert Flooring Installation
     - Bathroom Remodeling
   - **Our Approach** 3-stage process (Innovative Design, Quality Construction, Dedicated Support)

4. **Projects (`projects.html`)**
   - Video banner with quick-jump navigation pills
   - Detailed project case studies with photo galleries:
     - **The Smith Residence** (*The Nelson's Project*)
     - **Magnolia Estate** (*20131 Grove Street*)
     - **Lakeview Retreat** (*The Jefferson's Lake House*)
   - Fullscreen **Lightbox Image Viewer** when clicking any project photograph

5. **Landing Page (`landing-page.html`)**
   - Split-screen modern landing page
   - "Our Online Store Is Launching Soon" announcement
   - Interactive VIP newsletter email subscription with instant validation & feedback
   - Featured aesthetic lifestyle imagery and social links

6. **Plans & Pricing (`pricing-plans.html`)**
   - Video banner: "Choose your pricing plan"
   - Transparent pricing tiers:
     - **Foundation Plan** ($199) — Basic Consultation Plan
     - **Executive Plan** ($599) — Architectural & 3D Render Package (Featured)
     - **Heritage Plan** ($1,499) — Turnkey Development Advisory
   - Interactive **Buy Now / Checkout Modal** with booking date picker and confirmation

7. **Gallery / Portfolio (`portfolio.html`)**
   - Comprehensive portfolio gallery with category filters:
     - All Works, Architecture, Interiors, Luxury Estates, Landscapes
   - Responsive masonry grid with hover overlay titles and tags
   - Interactive fullscreen Lightbox viewer

8. **Contact Us (`contact.html`)**
   - Direct office address: `123 Legacy Avenue, San Francisco, CA 94158`
   - Direct email: `info@legacydevelopers.com` & phone `123-456-7890`
   - Embedded interactive location map
   - Working contact message form with submit status alerts

---

## 💎 Interactive Capabilities

- **Interactive Floating Live Chat Widget**: Pinned to the bottom-right corner. Allows visitors to chat with simulated instant AI responses.
- **Member Login / Sign Up Modal**: Accessible via the top header's "Log In" button.
- **Pinned Bottom-Left Social Bar**: Direct links to Facebook, Instagram, and Yelp.
- **Responsive Mobile Navigation**: Touch-friendly hamburger drawer navigation.
- **Lightbox Image Viewer**: View any architectural photo in high resolution with keyboard escape support.

---

## 🚀 How to Run the Project

### Option A: Direct Open (Zero Setup Needed)
Simply double-click `index.html` in your file explorer to open it in Google Chrome, Microsoft Edge, Firefox, or Safari.

### Option B: Local Python Server (Recommended for Live Demo)
Open a terminal in this directory and run:
```bash
python -m http.server 8000
```
Then visit:
```
http://localhost:8000
```

### Option C: Node.js / NPX Server
```bash
npx serve .
```

---

## 📁 Directory Structure
```
legacy-developers/
├── index.html            # Home page with video hero & highlights
├── our-team.html         # Leadership & staff showcase
├── services.html         # Comprehensive services & approach
├── projects.html         # Project case studies & photo galleries
├── landing-page.html     # Store launch landing page & newsletter
├── pricing-plans.html    # Pricing tiers & checkout reservation
├── portfolio.html        # Filterable masonry gallery
├── contact.html          # Contact details & embedded map
├── css/
│   └── style.css         # Complete design system & responsive styling
├── js/
│   └── main.js           # Navigation, chat widget, modals, lightbox
└── README.md             # Project documentation
```
