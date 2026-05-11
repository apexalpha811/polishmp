## Polish Me Pretty Nail Bar — Landing Page

A single-page, editorial-luxury landing page for the Fountain Valley nail salon. Cream + deep espresso palette with muted gold accents, serif display headings (Playfair Display), clean sans body (Inter), generous whitespace, subtle scroll/hover animations.

### Sections (in order)

1. **Sticky nav** — Wordmark left, anchor links (Services, Pricing, Visit, Contact), "Book an appointment" button right.
2. **Hero** — Headline "Where Every Detail Is Polished To Perfection." Subline about luxury nail care in Fountain Valley. Primary CTA "Book an appointment", secondary "Call (714) 594-3032". Right side: elegant nail-care image (generated).
3. **Social proof** — "Loved by locals & featured in" with 5 muted publication-style wordmarks (Orange Coast, LA Weekly, Allure Local, Voyage LA, OC Register) rendered as styled text logos.
4. **Features (Services)** — 6 cards with Lucide icons: Signature Manicure, Luxury Pedicure, Gel & Builder Gel, Custom Nail Art, Dip Powder, Waxing & Add-ons. One-line benefit copy each.
5. **Pricing** — 3 tiers side-by-side: Essential ($35), Signature ($65, highlighted "Most loved"), The Polished Ritual ($110). Feature lists + "Book an appointment" buttons.
6. **Visit us** — Two-column band with hours list (Mon–Sat 9–7/6, Sun closed), address 9035 Garfield Ave, Fountain Valley, CA 92708, phone link, embedded Google Maps iframe.
7. **Contact form** — Name, email, message, submit. Client-side only with toast confirmation (sonner).
8. **Bottom CTA** — Full-width espresso band, serif headline "Treat yourself. You've earned it.", main CTA button.
9. **Footer** — Wordmark + tagline, three link columns (Salon, Visit, Connect), social icons (Instagram, Facebook, TikTok, Yelp), © 2026 Polish Me Pretty Nail Bar.

### Design system

- Tokens in `src/styles.css` (oklch): `--background` cream, `--foreground` deep espresso, `--primary` muted gold, `--accent` soft blush, plus `--gradient-luxe` and `--shadow-elegant`.
- Fonts via Google Fonts `<link>` in `__root.tsx` head: Playfair Display (headings) + Inter (body). Tailwind utility class `font-serif` mapped via inline style/utility.
- Animations: `animate-fade-in`, `hover-scale`, IntersectionObserver-based reveal hook for section entrances.
- Fully responsive (mobile nav collapses to a sheet/drawer, grids stack).

### Files to create / modify

- `src/styles.css` — replace token values with cream/espresso/gold luxe palette; add gradient + shadow tokens; add reveal keyframes.
- `src/routes/__root.tsx` — add Google Fonts links, update default meta to nail salon SEO.
- `src/routes/index.tsx` — replace placeholder; compose page from section components; add JSON-LD `LocalBusiness` schema.
- `src/components/site/Nav.tsx`
- `src/components/site/Hero.tsx`
- `src/components/site/SocialProof.tsx`
- `src/components/site/Services.tsx`
- `src/components/site/Pricing.tsx`
- `src/components/site/Visit.tsx`
- `src/components/site/ContactForm.tsx`
- `src/components/site/BottomCTA.tsx`
- `src/components/site/Footer.tsx`
- `src/hooks/use-reveal.ts` — IntersectionObserver hook for scroll-fade.
- `src/assets/hero-nails.jpg` — generated luxury hand/nail image.

### Technical notes

- All buttons labeled "Book an appointment" link to `tel:+17145943032` (no booking system specified).
- Contact form is presentational — submit shows a sonner toast; no backend wired.
- SEO: unique `<title>` "Polish Me Pretty Nail Bar — Luxury Nails in Fountain Valley, CA", meta description under 160 chars, single H1 in hero, semantic landmarks (`header`, `main`, `section`, `footer`), alt text on imagery, JSON-LD `LocalBusiness` with address, phone, hours.
- No new dependencies required (shadcn + lucide-react + sonner already present).
