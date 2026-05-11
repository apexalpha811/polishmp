import { useEffect, useState } from "react";
import heroImg from "@/assets/hero-nails.jpg";
import { Phone, Sparkles, ArrowRight } from "lucide-react";

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="top"
      className="relative pt-32 lg:pt-40 pb-20 lg:pb-28 overflow-hidden"
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 -z-10 opacity-40">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary/30 to-accent/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-accent/20 to-primary/10 rounded-full blur-3xl animate-float-delayed" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* LEFT: Content with staggered animations */}
        <div className="lg:col-span-7 space-y-6">
          {/* Badge */}
          <div className="animate-slide-in-left">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 hover-glow">
              <Sparkles size={16} className="text-primary animate-pulse-scale" />
              <span className="text-[12px] uppercase tracking-[0.3em] font-medium text-foreground">
                Fountain Valley Luxury
              </span>
            </div>
          </div>

          {/* Main heading with gradient text */}
          <div
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible
                ? "translateY(0)"
                : "translateY(20px)",
              transition: "all 0.9s cubic-bezier(0.2, 0.7, 0.2, 1)",
            }}
          >
            <h1 className="font-serif text-6xl sm:text-7xl lg:text-8xl leading-[0.95] tracking-tight">
              <span className="block text-foreground">Where craft</span>
              <span className="block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient-shift">
                becomes art
              </span>
            </h1>
          </div>

          {/* Subtitle with fade-in */}
          <p
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible
                ? "translateY(0)"
                : "translateY(20px)",
              transition:
                "all 0.9s cubic-bezier(0.2, 0.7, 0.2, 1) 0.15s",
            }}
            className="max-w-2xl text-lg lg:text-xl text-foreground/75 leading-relaxed font-light"
          >
            Precision meets indulgence. Each appointment is an experience —
            where our licensed artisans transform your nails into a personal statement.
          </p>

          {/* CTA Section */}
          <div
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible
                ? "translateY(0)"
                : "translateY(20px)",
              transition:
                "all 0.9s cubic-bezier(0.2, 0.7, 0.2, 1) 0.3s",
            }}
            className="pt-6 flex flex-wrap items-center gap-4"
          >
            {/* Primary CTA */}
            <a
              href="tel:+17145943032"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-foreground text-background px-8 py-4 text-base font-semibold btn-glow hover:shadow-lg transition-all"
            >
              <span>Book Appointment</span>
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>

            {/* Phone CTA */}
            <a
              href="tel:+17145943032"
              className="inline-flex items-center gap-2.5 px-6 py-4 rounded-full border border-foreground/20 text-foreground hover:border-primary hover:bg-primary/5 transition-all duration-300 group interactive-element"
            >
              <Phone
                size={18}
                className="text-primary group-hover:scale-110 transition-transform"
              />
              <span className="font-medium">Call now</span>
            </a>
          </div>

          {/* Stats/Trust indicators */}
          <div
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible
                ? "translateY(0)"
                : "translateY(20px)",
              transition:
                "all 0.9s cubic-bezier(0.2, 0.7, 0.2, 1) 0.45s",
            }}
            className="pt-6 flex gap-8 text-sm"
          >
            <div className="group hover-scale">
              <div className="text-2xl font-bold text-primary">500+</div>
              <div className="text-foreground/60">Happy clients</div>
            </div>
            <div className="group hover-scale">
              <div className="text-2xl font-bold text-primary">12+</div>
              <div className="text-foreground/60">Years experience</div>
            </div>
            <div className="group hover-scale">
              <div className="text-2xl font-bold text-primary">★★★★★</div>
              <div className="text-foreground/60">Certified luxury</div>
            </div>
          </div>
        </div>

        {/* RIGHT: Image with parallax and interactive effects */}
        <div className="lg:col-span-5 relative">
          {/* Floating accent elements */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-primary to-transparent rounded-full opacity-20 blur-3xl animate-float" />
          <div className="absolute -bottom-20 -left-10 w-52 h-52 bg-gradient-to-tr from-accent to-transparent rounded-full opacity-15 blur-3xl animate-float-delayed" />

          {/* Main image container */}
          <div
            className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden hover-lift"
            style={{
              transform: `perspective(1200px) rotateX(${mousePosition.y * 0.5}deg) rotateY(${mousePosition.x * -0.5}deg)`,
              transition: "transform 0.1s ease-out",
            }}
          >
            {/* Image */}
            <img
              src={heroImg}
              alt="Elegantly manicured hand with soft blush polish at Polish Me Pretty Nail Bar"
              className="absolute inset-0 h-full w-full object-cover"
              loading="eager"
            />

            {/* Gradient overlay with animation */}
            <div className="absolute inset-0 bg-gradient-to-tr from-foreground/30 via-transparent to-accent/20 opacity-40" />

            {/* Shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer pointer-events-none" />

            {/* Border glow */}
            <div className="absolute inset-0 rounded-[2.5rem] border-2 border-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>

          {/* Info card with glass effect */}
          <div className="hidden lg:block absolute -bottom-4 -left-8 glass rounded-3xl px-6 py-5 shadow-lg border border-primary/20 hover-scale animate-bounce-in"
            style={{
              animationDelay: "0.5s",
            }}>
            <div className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground font-semibold">
              ✨ Open Today
            </div>
            <div className="mt-2 font-serif text-2xl font-semibold text-primary">
              9 AM – 7 PM
            </div>
            <div className="mt-1 text-xs text-foreground/60">
              Walk-ins welcome
            </div>
          </div>

          {/* Floating badge */}
          <div
            className="absolute top-8 right-8 glass rounded-full px-5 py-3 text-xs font-semibold text-primary animate-float"
            style={{
              animationDelay: "0.3s",
            }}
          >
            Licensed Artisans ✓
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 animate-float">
        <span className="text-xs uppercase tracking-widest text-foreground/50">
          Scroll to explore
        </span>
        <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center p-2 animate-pulse">
          <div className="w-1 h-2 bg-foreground/50 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
