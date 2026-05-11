# 🎨 Design Tweaks - Cheatsheet

Copy & paste these quick modifications to experiment!

---

## 🌈 **Color Changes** (`src/styles.css`, line 45-52)

### Cyberpunk Purple
```css
--gold: oklch(0.6 0.15 280);        /* Purple instead of gold */
--accent: oklch(0.7 0.25 180);      /* Cyan accent */
--neon-gold: oklch(0.8 0.25 270);   /* Bright purple */
```

### Warm Rose
```css
--gold: oklch(0.72 0.15 15);        /* Rose-gold */
--accent: oklch(0.78 0.18 5);       /* Deep rose */
--rose: oklch(0.72 0.2 10);         /* Warm rose */
```

### Ocean Blue
```css
--gold: oklch(0.65 0.15 260);       /* Ocean blue */
--accent: oklch(0.7 0.18 200);      /* Teal */
--primary: oklch(0.65 0.15 260);    /* Deep ocean */
```

### Luxury Black & Gold
```css
--background: oklch(0.1 0 0);       /* Almost black */
--foreground: oklch(0.98 0 0);      /* Cream text */
--gold: oklch(0.8 0.2 80);          /* Bright gold */
--accent: oklch(0.75 0.15 10);      /* Burgundy */
```

---

## ⚡ **Speed Changes** (`src/styles.css`, line 78-80)

### Fast & Snappy
```css
--anim-fast: 0.2s;
--anim-normal: 0.4s;
--anim-slow: 0.8s;
```

### Slow & Luxe
```css
--anim-fast: 0.5s;
--anim-normal: 1s;
--anim-slow: 1.5s;
```

### Cinematic
```css
--anim-fast: 0.3s;
--anim-normal: 0.8s;
--anim-slow: 1.5s;
```

---

## 💫 **Animation Tweaks**

### Make floating higher
In `src/styles.css`, line 96:
```css
/* Change from: */
@keyframes float {
  50% { transform: translateY(-12px); }
}

/* To: */
@keyframes float {
  50% { transform: translateY(-25px); }  /* Bigger float */
}
```

### Make glow more intense
Line 104:
```css
@keyframes glow-pulse {
  50% { box-shadow: 0 0 50px 10px rgba(184, 134, 11, 0.8); }  /* More intense */
}
```

### Make bounce bouncier
Line 114:
```css
@keyframes bounce-in {
  0% { opacity: 0; transform: scale(0.5) translateY(40px); }  /* Start smaller */
  100% { opacity: 1; transform: scale(1) translateY(0); }
}
```

---

## 🎯 **Component-Level Changes**

### Hero - Make image glow more (`src/components/site/Hero.tsx`, line 154)
```jsx
/* Change from: */
<div className="absolute inset-0 bg-gradient-to-tr from-foreground/30 via-transparent to-accent/20 opacity-40" />

/* To: */
<div className="absolute inset-0 bg-gradient-to-tr from-primary/50 via-accent/30 to-accent/40 opacity-60" />
```

### Hero - Make parallax stronger (line 151)
```jsx
/* Change from: */
transform: `perspective(1200px) rotateX(${mousePosition.y * 0.5}deg) rotateY(${mousePosition.x * -0.5}deg)`

/* To: */
transform: `perspective(1200px) rotateX(${mousePosition.y * 1}deg) rotateY(${mousePosition.x * -1}deg)`
```

### Services - Make cards bigger (line 73)
```jsx
/* Change from: */
<div className="... p-8 overflow-hidden ...">

/* To: */
<div className="... p-12 overflow-hidden ...">  /* More padding */
```

### Services - Make icons bigger (line 102)
```jsx
/* Change from: */
<div className="inline-flex h-14 w-14 items-center justify-center ...">

/* To: */
<div className="inline-flex h-20 w-20 items-center justify-center ...">  /* Bigger */
```

### Pricing - Make button bigger (`src/components/site/Pricing.tsx`, line 184)
```jsx
/* Change from: */
<a className="... px-6 py-3.5 ...">

/* To: */
<a className="... px-8 py-4 ...">  /* Bigger button */
```

---

## 🎪 **Background Element Changes**

### Make blobs bigger (Hero, line 24)
```jsx
/* Change from: */
<div className="... w-96 h-96 ... animate-float" />

/* To: */
<div className="... w-[500px] h-[500px] ... animate-float" />  /* 600x600px blob */
```

### Make blobs sharper (remove blur)
```jsx
/* Change from: */
<div className="... blur-3xl ...">

/* To: */
<div className="... blur-lg ...">  /* Less blur = sharper */
```

### Make blobs more visible
```jsx
/* Change from: */
<div className="... opacity-40 ...">

/* To: */
<div className="... opacity-70 ...">  /* More visible */
```

---

## 🎬 **Advanced Animations**

### Add pulsing to all headings
In Hero.tsx, line 49:
```jsx
<span className="block ... animate-pulse-scale">  /* Add this class */
  becomes art
</span>
```

### Add glow to buttons
In Hero.tsx, line 111:
```jsx
<a className="... btn-glow animate-glow-pulse">  /* Add animate-glow-pulse */
  Book Appointment
</a>
```

### Add float to section titles
In Services.tsx, line 35:
```jsx
<h2 className="... animate-float">  /* Add this class */
  Artistry in every detail
</h2>
```

### Make cards slide in from side
In Services.tsx, line 71:
```jsx
<article className="stagger-item animate-slide-in-left ...">  /* Add slide-in */
```

---

## 🎯 **Dark Mode** (`src/styles.css`, line 121+)

### Make dark mode brighter
```css
.dark {
  --background: oklch(0.15 0.02 50);     /* Lighter dark */
  --foreground: oklch(0.98 0 0);         /* Pure white text */
  --primary: oklch(0.85 0.2 85);         /* Brighter gold */
}
```

### Make dark mode cozier
```css
.dark {
  --background: oklch(0.08 0 0);         /* Deeper black */
  --foreground: oklch(0.92 0 0);         /* Slightly warmer */
  --accent: oklch(0.6 0.18 10);          /* Deep rose */
}
```

---

## 📋 **Copy/Paste Templates**

### New gradient text
```jsx
<span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient-shift">
  Your text here
</span>
```

### Glowing card
```jsx
<div className="rounded-3xl border border-border/50 bg-card hover-glow hover-lift">
  {/* Content */}
</div>
```

### Animated button
```jsx
<button className="rounded-full bg-foreground text-background px-8 py-4 font-semibold btn-glow hover:shadow-lg transition-all">
  Click me
</button>
```

### Floating badge
```jsx
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 animate-float">
  ✨ Badge
</div>
```

### Staggered grid
```jsx
{items.map((item, idx) => (
  <div key={idx} className="stagger-item group hover-lift">
    {/* Content auto-staggered with delay */}
  </div>
))}
```

---

## 🔄 **One-Liner Changes**

| What | Where | Change |
|------|-------|--------|
| Faster animations | styles.css:79 | `0.6s` → `0.3s` |
| Slower animations | styles.css:79 | `0.6s` → `1s` |
| Brighter text | styles.css:42 | `/0.96` → `/1.0` (remove decimal) |
| Darker background | styles.css:41 | `0.972` → `0.95` |
| More saturated colors | styles.css:45 | `0.11` → `0.18` (middle value) |
| Stronger shadows | styles.css:72 | `35%` → `60%` |
| Less rounded corners | any `rounded-3xl` | change to `rounded-2xl` |
| More padding | any `p-8` | change to `p-12` |
| Bigger buttons | any `px-8 py-4` | change to `px-10 py-5` |
| More hover effect | any `scale-110` | change to `scale-125` |

---

## 🧪 **Test These Right Now**

1. **Paste this in Hero.tsx line 49:**
   ```jsx
   animate-glow-pulse  // Add to the span
   ```
   → Button will pulse with glow

2. **Change this in styles.css line 47:**
   ```css
   --gold: oklch(0.8 0.25 270);
   ```
   → Everything turns purple!

3. **Add to Services cards:**
   ```jsx
   animate-float  // Add to article element
   ```
   → Cards float up and down

4. **Change in styles.css line 79:**
   ```css
   --anim-normal: 0.2s;
   ```
   → Everything animates super fast

---

## 🚀 **Pro Tips**

- **Use dev tools** (F12) to inspect and edit in real-time
- **Screenshot before/after** to compare
- **Test mobile** with DevTools responsive mode
- **Keep a notes file** of changes you like
- **Try wild combinations** - you can always undo!

---

Happy experimenting! 🎨✨
