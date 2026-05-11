# 🎨 Polish Me Pretty - Design Tweaks Guide

This guide shows you all the customizable values you can tweak to experiment with the design. Edit these values to match your vision!

---

## 📄 **CSS Variables** (in `src/styles.css`)

### 🎨 **Color Palette** (Lines 45-52)

```css
:root {
  /* Tweak these RGB/OKLCH values */
  --background: oklch(0.972 0.014 85);          /* warm cream - try: oklch(0.98 0 0) for pure white */
  --foreground: oklch(0.22 0.025 50);           /* deep espresso - try: oklch(0.15 0.01 30) for darker */
  --gold: oklch(0.72 0.11 78);                  /* muted gold - try: oklch(0.75 0.16 85) for brighter */
  --rose: oklch(0.65 0.15 30);                  /* deeper rose - try: oklch(0.72 0.18 15) for deeper red */
  --neon-gold: oklch(0.75 0.16 85);             /* brighter gold - try: oklch(0.8 0.2 90) for pop */
  --accent: oklch(0.68 0.12 25);                /* rose accent - try: oklch(0.75 0.2 35) for more vibrant */
}
```

**Try these quick color combos:**
- **Luxury Modern**: Change `--gold` to `oklch(0.6 0.15 280)` (deep purple)
- **Warm Rose**: Change `--accent` to `oklch(0.72 0.2 5)` (deep rose)
- **Neon Cyberp unk**: Increase saturations: `oklch(0.8 0.25 78)` for gold, `oklch(0.75 0.25 15)` for accent

---

### ⚡ **Gradients** (Lines 66-72)

```css
--gradient-luxe: linear-gradient(135deg, oklch(0.78 0.09 78), oklch(0.65 0.13 60));
--gradient-rose: linear-gradient(135deg, oklch(0.72 0.11 78) 0%, oklch(0.68 0.12 25) 100%);
--gradient-glow: linear-gradient(135deg, rgba(184, 134, 11, 0.4), rgba(205, 92, 92, 0.2));
```

**Customize:**
- Change `135deg` to `45deg`, `90deg`, `180deg` for different directions
- Add more colors: `linear-gradient(90deg, color1 0%, color2 50%, color3 100%)`
- Try: `linear-gradient(-45deg, var(--primary), var(--accent))` for dynamic gradient

---

### 💫 **Shadows** (Lines 73-76)

```css
--shadow-elegant: 0 30px 80px -30px color-mix(...);      /* Large dramatic shadow */
--shadow-soft: 0 10px 40px -20px color-mix(...);         /* Subtle shadow */
--shadow-glow: 0 0 40px -10px color-mix(...);            /* Glow effect */
--shadow-neon: 0 0 20px 0px rgba(184, 134, 11, 0.3);     /* Neon glow */
```

**Make it pop:**
- Increase shadow size: `0 40px 120px -20px` (bigger, softer)
- Add color: `0 20px 60px -15px rgba(255, 105, 180, 0.4)` (pink glow)
- Make intense: `0 0 50px 10px rgba(184, 134, 11, 0.6)` (stronger neon)

---

### ⏱️ **Animation Speeds** (Lines 78-80)

```css
--anim-fast: 0.3s;      /* Quick interactions - try: 0.2s for snappier */
--anim-normal: 0.6s;    /* Standard animations - try: 0.4s or 0.8s */
--anim-slow: 1s;        /* Slow reveals - try: 1.5s for dramatic */
```

**Experiment:**
- Fast & snappy: `0.15s, 0.4s, 0.8s`
- Slow & luxe: `0.5s, 1s, 2s`
- Cinematic: `0.3s, 0.8s, 1.5s`

---

### 🎬 **Keyframe Animations** (Lines 85-150)

Tweak these animation parameters:

```css
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-12px); }  /* Change -12px to -20px for higher float */
}

@keyframes glow-pulse {
  0%, 100% { box-shadow: var(--shadow-neon); }
  50% { box-shadow: 0 0 30px 5px rgba(184, 134, 11, 0.5); }  /* Increase to 0.8 for more glow */
}
```

**Common tweaks:**
- `translateY(-12px)` → `translateY(-20px)` = float higher
- `rgba(..., 0.5)` → `rgba(..., 0.8)` = more intense glow
- `0.9s ease-out` → `0.6s cubic-bezier(0.34, 1.56, 0.64, 1)` = more bouncy

---

## 🎯 **Component-Specific Tweaks**

### 🦸 **Hero Section** (`src/components/site/Hero.tsx`)

**Line 24-25: Floating background elements**
```jsx
<div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary/30 to-accent/20 rounded-full blur-3xl animate-float" />
```

Tweak:
- `w-96 h-96` → `w-[500px] h-[500px]` = bigger blobs
- `from-primary/30` → `from-primary/60` = more opaque
- `blur-3xl` → `blur-2xl` or `blur-none` = sharper/blurrier
- `animate-float` → `animate-rotate-slow` = rotate instead of float
- `top-0 right-0` → `top-10 right-10` = reposition

**Line 49-51: Main heading gradient**
```jsx
<span className="block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient-shift">
  becomes art
</span>
```

Tweak:
- `animate-gradient-shift` → `animate-pulse` or `animate-bounce` = different effect
- `from-primary via-accent to-primary` → `from-accent via-primary to-accent` = reverse colors
- Add `animate-glow-pulse` alongside for compound effect

**Line 70-74: Badge styling**
```jsx
<div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 hover-glow">
```

Tweak:
- `bg-primary/10` → `bg-primary/20` = darker background
- `rounded-full` → `rounded-lg` = square badge
- `hover-glow` → `hover-lift` or `hover-shift` = different hover effect
- `gap-3` → `gap-5` = more space between icon & text

**Line 111-116: CTA button styling**
```jsx
<a href="tel:..." className="group inline-flex items-center justify-center gap-2 rounded-full bg-foreground text-background px-8 py-4 text-base font-semibold btn-glow ...">
```

Tweak:
- `px-8 py-4` → `px-12 py-5` = bigger button
- `text-base` → `text-lg` = larger text
- `btn-glow` → `hover-scale` or `hover-lift` = different hover
- `gap-2` → `gap-3` = more space around arrow
- Add `animate-pulse-scale` for pulsing effect

**Line 145-160: Image parallax effect**
```jsx
style={{
  transform: `perspective(1200px) rotateX(${mousePosition.y * 0.5}deg) rotateY(${mousePosition.x * -0.5}deg)`,
}}
```

Tweak:
- `0.5` → `0.8` = more intense parallax
- `0.5` → `0.2` = subtle parallax
- Remove for no effect: `transform: 'none'`

---

### 🎪 **Services Section** (`src/components/site/Services.tsx`)

**Line 28-30: Background blur elements**
```jsx
<div className="absolute top-1/2 -left-96 w-96 h-96 bg-gradient-to-r from-primary/40 to-transparent rounded-full blur-3xl animate-float" />
```

Same tweaks as Hero section!

**Line 73-78: Service card styling**
```jsx
<div className="relative rounded-3xl border border-border/50 bg-gradient-to-br from-card to-card/50 p-8 overflow-hidden hover-lift h-full transition-all duration-300">
```

Tweak:
- `p-8` → `p-12` = more padding inside cards
- `rounded-3xl` → `rounded-2xl` or `rounded-lg` = less rounded
- `border-border/50` → `border-primary/20` = colored border
- `hover-lift` → `hover-glow` or `hover-scale` = different hover
- Add `stagger-item` class for staggered load animation

**Line 102-108: Icon background**
```jsx
<div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-accent/10 text-foreground group-hover:shadow-lg group-hover:shadow-primary/30 transition-all duration-300 group-hover:scale-110">
```

Tweak:
- `h-14 w-14` → `h-20 w-20` = bigger icon area
- `rounded-2xl` → `rounded-full` = circular icon
- `group-hover:scale-110` → `group-hover:scale-125` = bigger on hover
- Add `group-hover:rotate-12` = rotation on hover

---

### 💰 **Pricing Section** (`src/components/site/Pricing.tsx`)

**Line 73-85: Pricing card backgrounds**
```jsx
<div className={`relative rounded-3xl p-8 lg:p-10 flex flex-col h-full overflow-hidden transition-all duration-300 ${
  t.highlight
    ? "bg-gradient-to-br from-foreground to-foreground/95 text-background border border-foreground/20 hover-lift"
    : "bg-gradient-to-br from-card to-card/50 border border-border/50 hover-lift hover:border-primary/30"
}`}>
```

Tweak:
- `p-8` → `p-12` or `p-6` = change padding
- `hover-lift` → `hover-scale` = different hover
- `border-foreground/20` → `border-primary/50` = colored borders
- `from-card to-card/50` → `from-primary/5 to-accent/5` = gradient bg

**Line 58-62: "Most loved" badge**
```jsx
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary to-accent text-background text-[11px] uppercase tracking-[0.2em] font-bold animate-pulse-scale">
```

Tweak:
- `animate-pulse-scale` → `animate-float` or `animate-bounce` = different animation
- `from-primary to-accent` → reverse for opposite direction
- `text-[11px]` → `text-xs` = smaller text
- Add `shadow-lg shadow-primary/50` = add shadow

---

## 🔧 **Global Tweaks You Can Do Right Now**

### Make everything **faster:**
Find `--anim-normal: 0.6s` and change all to `0.3s`

### Make everything **more colorful:**
In Hero/Services/Pricing, change `opacity-30` → `opacity-50` on background blobs

### Make buttons **bigger:**
Search `px-8 py-4` and change to `px-10 py-5`

### Make hover effects **stronger:**
Change all `group-hover:scale-110` to `group-hover:scale-125`

### Add **more glow:**
Change `shadow-neon` animations to use `rgba(..., 0.8)` instead of `0.3`

### Make text **bolder:**
Change `font-medium` → `font-bold`, `font-semibold` → `font-bold`

---

## 🎬 **Dark Mode Tweaks**

In `.dark` selector (line 121-127), adjust:

```css
.dark {
  --background: oklch(0.18 0.02 50);           /* Darker bg - try: oklch(0.12 0.02 50) */
  --foreground: oklch(0.96 0.012 85);          /* Lighter text - try: oklch(1 0 0) for pure white */
  --primary: oklch(0.78 0.11 78);              /* Brighter primary - try: oklch(0.85 0.15 85) */
}
```

---

## 📊 **Before/After Quick Experiments**

### Experiment 1: "Cyberpunk Neon"
- Change `--gold` to `oklch(0.8 0.25 270)` (purple)
- Change `--accent` to `oklch(0.7 0.25 80)` (cyan)
- Increase `blur-3xl` to `blur-none` on background blobs
- Change `--anim-normal` to `0.3s`

### Experiment 2: "Minimalist Zen"
- Change `blur-3xl` to `blur-none` (remove blur on blobs)
- Reduce opacity on shadows from 0.5 to 0.2
- Change `rounded-3xl` to `rounded-xl` on cards
- Reduce `animate-float` from `-12px` to `-4px`

### Experiment 3: "Maximalist Drama"
- Double shadow sizes: `40px 120px` instead of `30px 80px`
- Increase blur: `blur-3xl` to `blur-4xl`
- Make colors more saturated: increase OKLCH saturation by 0.1
- Add `animate-glow-pulse` to headers

### Experiment 4: "Soft & Feminine"
- Change `--rose` to `oklch(0.75 0.1 10)` (soft pink)
- Increase blur: `blur-4xl` on all background elements
- Reduce animation speed: `--anim-normal: 1s`
- Add more padding: `p-12` on all cards

---

## 🚀 **Performance Tweaks**

If animations feel **sluggish:**
- Reduce `blur-3xl` → `blur-2xl`
- Reduce floating blob sizes from `w-96 h-96` → `w-64 h-64`
- Remove `animate-gradient-shift` (most expensive animation)

If you want **more motion:**
- Add `animate-float` to all section headers
- Add `animate-pulse-scale` to all icons
- Increase rotation on `animate-rotate-slow`: `20s` → `15s`

---

## 💡 **Pro Tips**

1. **Use browser dev tools** to live-edit CSS and see changes instantly
2. **Test on mobile** - some animations may feel different on touch devices
3. **Reduce animations for accessibility** - respect `prefers-reduced-motion`
4. **Screenshot before/after** - you'll love comparing your experiments!
5. **Try one change at a time** - makes it easier to see what works

---

## 🎯 **Questions to Explore**

- What if the gold was _more_ saturated? Try: `oklch(0.72 0.2 78)`
- What if we used a completely different accent color? Try rose, purple, or teal
- What if animations were slower for a more luxe feel?
- What if the floating blobs were positioned differently?
- What if cards had glowing borders instead of subtle ones?

---

**Have fun experimenting! This is YOUR design now.** 🎨✨
