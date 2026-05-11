# 🎬 Animation Reference Guide

## What Each Animation Does (Visual Guide)

### 🎪 **Entrance Animations**

#### `reveal-up`
```
Before:  ░ (opacity: 0, translateY: 24px)
After:   ■ (opacity: 1, translateY: 0px)
Timing:  0.9s cubic-bezier(0.2, 0.7, 0.2, 1)
Effect:  Element fades in while sliding up
Where:   Auto-applied to .reveal elements
```

#### `fade-in`
```
Before:  ░░░░░ (opacity: 0)
After:   ■■■■■ (opacity: 1)
Timing:  0.8s ease-out
Effect:  Simple fade in
Where:   .animate-fade-in class
```

#### `bounce-in`
```
Before:  ░ small
After:   ■ normal → ■ grows → ■ normal
Timing:  0.6s cubic-bezier(0.34, 1.56, 0.64, 1)
Effect:  Bouncy scale entrance
Where:   .animate-bounce-in class
```

#### `slide-in-left`
```
Before:  ░ ← (left side off screen)
After:   ■ (slides to normal position)
Timing:  0.6s ease-out
Effect:  Slides in from left
Where:   .animate-slide-in-left class
```

---

### 🌊 **Continuous/Loop Animations**

#### `float`
```
Loop 3s:
  0%:    ■ (y: 0px)
  50%:   ▲ (y: -12px) ← HIGHEST
  100%   ■ (y: 0px)

Effect:  Gentle floating up and down
Where:   .animate-float class
```

#### `glow-pulse`
```
Loop 2s:
  0%:    ✨ (glow: small)
  50%:   ✨✨✨ (glow: LARGE)
  100%:  ✨ (glow: small)

Effect:  Shadow pulsing in and out
Where:   .animate-glow-pulse class
```

#### `gradient-shift`
```
Loop 4s:
  0%:    ▓░░░ (gradient at start)
  50%:   ░▓░░ (gradient shifts)
  100%:  ░░░▓ (back to start)

Effect:  Gradient colors shift smoothly
Where:   .animate-gradient-shift class
```

#### `rotate-slow`
```
Loop 20s:
  0°:    ↑ (rotation: 0deg)  
  360°:  ↑ (rotation: 360deg)

Effect:  Continuous 360° rotation, very slow
Where:   .animate-rotate-slow class
```

#### `pulse-scale`
```
Loop 2s:
  0%:    ■ (scale: 1)
  50%:   ▓ (scale: 1.05) ← SLIGHTLY BIGGER
  100%:  ■ (scale: 1)

Effect:  Gentle size pulsing
Where:   .animate-pulse-scale class
```

---

### 🖱️ **Hover Effects**

#### `.hover-glow`
```
Normal State:          Hover State:
■ (normal)      →      ■ ✨ (glowing)
  shadow: soft           shadow: glow
  transform: none        transform: up -4px
  
Timing:  0.3s ease
Effect:  Adds glow and slight lift
```

#### `.hover-lift`
```
Normal State:          Hover State:
■ (resting)     →      ▲ (lifted)
  shadow: soft           shadow: large
  transform: none        transform: up -6px
  
Timing:  0.3s ease
Effect:  Lifts element with bigger shadow
```

#### `.hover-scale`
```
Normal State:          Hover State:
■ (100%)        →      ▓ (102%)
  transform: scale(1)    transform: scale(1.02)
  
Timing:  0.3s ease
Effect:  Slight zoom in on hover
```

#### `.btn-glow` (Special button effect)
```
Normal:                 Hover:
[Button]        →       [Button] ✨
  glow: subtle           glow: intense
  shine: none            shine: slide effect
  
Effect:  Glowing button with ripple shine
```

---

### 🔗 **Stagger Effect** (For Lists/Grids)

#### `.stagger-item`
```
Each item gets delayed based on position:

Item 1: animation-delay: 0.1s  → Appears first
Item 2: animation-delay: 0.2s  → Then this
Item 3: animation-delay: 0.3s  → Then this
Item 4: animation-delay: 0.4s  → Then this
Item 5: animation-delay: 0.5s  → Then this
Item 6: animation-delay: 0.6s  → Last

Result: Items animate in sequence
Effect: Cascading entrance animation
```

---

### 🎨 **Special Effects**

#### `.glass` (Glass Morphism)
```
Visual:
  Background: rgba(255, 255, 255, 0.05)
  Blur: 10px (backdrop-filter)
  Border: 1px rgba(255, 255, 255, 0.1)
  
Effect:  Frosted glass appearance
```

#### `.glow-text`
```
Visual:
  Color: var(--foreground)
  text-shadow: 0 0 20px rgba(184, 134, 11, 0.3)
  
Effect:  Text with gold glow around it
```

#### `.neon-text`
```
Visual:
  Background: gradient(gold → rose)
  -webkit-background-clip: text
  -webkit-text-fill-color: transparent
  
Effect:  Text with gradient colors
```

---

## 🎯 **Animation Timing Values**

### Speed References
```
0.2s:   Very snappy (feels responsive)
0.3s:   Quick (default for most actions)
0.6s:   Normal (standard reveal)
1.0s:   Slow (luxe, cinematic feel)
1.5s:   Very slow (dramatic entrance)
2.0s:   Cinematic (very dramatic)
```

### Loops
```
2s:     Fast loop (heartbeat-like)
3s:     Medium loop (breathing)
4s:     Slow loop (meditation)
20s:    Very slow loop (subtle background)
```

---

## 📋 **Animation Usage Examples**

### **Add floating to a heading**
```jsx
<h1 className="animate-float text-4xl">
  Your heading here
</h1>
```

### **Add glow-pulse to a button**
```jsx
<button className="animate-glow-pulse btn-glow">
  Click me
</button>
```

### **Add stagger to a grid**
```jsx
{items.map((item) => (
  <div className="stagger-item">
    {item}
  </div>
))}
```

### **Add glow on hover**
```jsx
<div className="hover-glow rounded-lg bg-card p-6">
  Hover me
</div>
```

### **Combine multiple animations**
```jsx
<div className="animate-float hover-lift stagger-item">
  I float and lift on hover!
</div>
```

---

## ⚡ **Performance Notes**

### GPU-Accelerated (Fast) ✅
- `transform: translateY()` - Float animation
- `transform: scale()` - Scale hover effect
- `opacity` - Fade animations
- `box-shadow` - Glow effects

### Optimizations Applied ✅
- Will-change hints on floating elements
- Pointer-events: none on decorative elements
- CSS-based (no JavaScript animations)
- Respects prefers-reduced-motion

---

## 🎯 **Quick Tweaking Guide**

### Make animations **faster**
```css
Change: --anim-normal: 0.6s;
To:     --anim-normal: 0.3s;
```

### Make floating **higher**
```css
Change: translateY(-12px)
To:     translateY(-25px)
```

### Make glow **more intense**
```css
Change: rgba(..., 0.3)
To:     rgba(..., 0.7)
```

### Add more bounce
```css
Change: cubic-bezier(0.2, 0.7, 0.2, 1)
To:     cubic-bezier(0.34, 1.56, 0.64, 1)
```

---

**Happy animating!** 🎬✨
