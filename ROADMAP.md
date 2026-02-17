# Apollos Bible — App Store Landing Page

## Overview

Professional landing page for App Store requirements. Clean, modern, app-focused — designed to convert visitors into app downloads.

**URL:** www.apollosbible.com  
**Purpose:** App Store compliance + user acquisition  
**Tone:** Professional product page (not personal/ministry)

---

## Research Findings

### App Store Requirements
- ✅ Privacy Policy page (required by Apple & Google)
- ✅ Support/Contact page (required)
- ✅ App description and features
- ✅ Download links to App Store / Google Play

### Landing Page Best Practices
- Hero with clear value proposition
- Feature highlights with icons/illustrations
- App screenshots in device mockups
- Social proof (testimonials, ratings)
- Clear CTA buttons
- Mobile-first responsive design
- Fast loading (<3s)

### Competitor Analysis
- **YouVersion Bible App** — Clean, feature-focused
- **Hallow** — Premium feel, elegant animations
- **Dwell** — Beautiful imagery, audio focus

---

## Tech Stack

| Layer | Choice | Reason |
|-------|--------|--------|
| Framework | Next.js 14 | Fast, SEO-friendly, easy deploy |
| Styling | Tailwind CSS | Rapid development, consistent |
| Animations | Framer Motion | Smooth, professional |
| Icons | Lucide React | Clean, consistent |
| Hosting | Vercel | Easy deploy, custom domain |
| Images | Nano Banana generated | Custom, on-brand |

---

## Branding

| Element | Value |
|---------|-------|
| Primary Color | Gold #D4AF37 |
| Secondary Color | Navy #1E3A5F |
| Background | Cream #FFFEF7, White #FFFFFF |
| Text | Navy #1E3A5F, Gray #687076 |
| Fonts | Playfair Display (headings), Inter (body) |
| Logo | Gold dove (existing asset) |

---

## Page Structure

### `/` — Main Landing Page

```
┌─────────────────────────────────────┐
│            NAVIGATION               │
│   Logo    Features  Pricing  Download│
├─────────────────────────────────────┤
│              HERO                    │
│   "Study Scripture Like Never Before"│
│   [App Store] [Google Play]          │
│   [Phone mockup with app screenshot] │
├─────────────────────────────────────┤
│           FEATURES                   │
│   📖 Bible Reader                    │
│   💬 AI Study Assistant              │
│   🔍 Concordance & Dictionary        │
│   🎙️ Sermon Notes                   │
│   📝 Journal & Bookmarks            │
│   🧠 Scripture Memory               │
├─────────────────────────────────────┤
│         HOW IT WORKS                │
│   1. Ask a question                 │
│   2. Get instant insights           │
│   3. Go deeper                      │
├─────────────────────────────────────┤
│          APP PREVIEW                │
│   [Screenshot carousel/gallery]     │
├─────────────────────────────────────┤
│           PRICING                   │
│   Free: Basic Bible reading         │
│   Premium: $12/mo - Full AI access  │
│   "Proceeds support new churches"   │
├─────────────────────────────────────┤
│             FAQ                     │
│   Common questions                  │
├─────────────────────────────────────┤
│            FOOTER                   │
│   Download | Privacy | Support      │
│   © 2026 Apollos Bible              │
└─────────────────────────────────────┘
```

### `/privacy` — Privacy Policy

- Data collection practices
- How data is used
- Third-party services
- User rights
- Contact information
- Last updated date

### `/support` — Support Page

- FAQ section
- Contact form or email
- Response time expectations

---

## Assets Needed (Nano Banana)

| Asset | Description | Size |
|-------|-------------|------|
| hero-bg.jpg | Abstract gradient/pattern in gold/navy | 1920x1080 |
| feature-bible.jpg | Bible/reading illustration | 400x400 |
| feature-ai.jpg | AI/chat illustration | 400x400 |
| feature-concordance.jpg | Dictionary/search illustration | 400x400 |
| feature-sermon.jpg | Microphone/recording illustration | 400x400 |
| feature-journal.jpg | Writing/journal illustration | 400x400 |
| feature-memory.jpg | Brain/flashcard illustration | 400x400 |

**Style:** Modern, minimalist illustrations with gold/navy color scheme. Abstract or iconographic — NOT photorealistic people.

---

## Milestones

### M1: Project Setup ✅
- [x] Initialize Next.js 14 project
- [x] Configure Tailwind CSS
- [x] Set up folder structure
- [x] Add fonts (Playfair Display, Inter)
- [x] Copy logo asset from existing project

### M2: Generate Assets ⬜
- [ ] Generate hero background with Nano Banana
- [ ] Generate 6 feature illustrations
- [ ] Optimize all images

### M3: Main Landing Page ✅
- [x] Navigation component
- [x] Hero section with app mockup
- [x] Features grid
- [x] How it works section
- [x] App preview/screenshots (integrated in Hero mockup)
- [x] Pricing section
- [x] FAQ section
- [x] Footer

### M4: Privacy Policy Page ⬜
- [ ] Create /privacy route
- [ ] Write comprehensive privacy policy
- [ ] Professional layout

### M5: Support Page ⬜
- [ ] Create /support route
- [ ] FAQ section
- [ ] Contact information

### M6: Polish & Optimize 🟡 (Partial)
- [x] Mobile responsive testing (built mobile-first)
- [x] Animations (Framer Motion)
- [x] SEO meta tags
- [x] Open Graph tags
- [ ] Lighthouse audit (target >90)

### M7: Deploy ⬜
- [ ] Deploy to Vercel
- [ ] Test all pages
- [ ] Ready for custom domain

---

## Success Criteria

- [ ] Lighthouse Performance >90
- [ ] Lighthouse Accessibility >95
- [ ] Mobile responsive (320px - 1920px)
- [ ] All required pages present
- [ ] Fast loading (<3s)
- [ ] Professional appearance
- [ ] Clear CTAs

---

## File Structure

```
website/
├── ROADMAP.md
├── README.md
├── package.json
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
│
├── public/
│   ├── favicon.ico
│   ├── apollos-logo.png
│   ├── og-image.jpg
│   └── images/
│       ├── hero-bg.jpg
│       ├── features/
│       └── screenshots/
│
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx          # Main landing
│   │   ├── privacy/
│   │   │   └── page.tsx
│   │   ├── support/
│   │   │   └── page.tsx
│   │   └── globals.css
│   │
│   └── components/
│       ├── Navbar.tsx
│       ├── Hero.tsx
│       ├── Features.tsx
│       ├── HowItWorks.tsx
│       ├── AppPreview.tsx
│       ├── Pricing.tsx
│       ├── FAQ.tsx
│       └── Footer.tsx
```

---

## Security Checklist

- [ ] No secrets in code
- [ ] External links use rel="noopener noreferrer"
- [ ] Form inputs sanitized (if any)
- [ ] HTTPS enforced (Vercel default)

---

## Launch Checklist

- [ ] All pages render correctly
- [ ] Mobile responsive
- [ ] Favicon present
- [ ] Meta tags complete
- [ ] Open Graph tags
- [ ] Privacy policy comprehensive
- [ ] Support contact available
- [ ] Download buttons ready (placeholder OK for now)
- [ ] Lighthouse >90
- [ ] Cross-browser tested

---

*Created: 2026-02-17*
