import { Check, Sparkles, ArrowRight } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";
import { useScrollAnimationElements } from "@/hooks/use-scroll-animation";
import { useState } from "react";

const tiers = [
  {
    name: "Essential",
    price: "35",
    tagline: "A clean, classic finish.",
    features: [
      "Shape, buff, and cuticle care",
      "Hand or foot massage",
      "Long-wear polish of choice",
      "Approx. 45 minutes",
    ],
    highlight: false,
    icon: "✨",
  },
  {
    name: "Signature",
    price: "65",
    tagline: "Our most-loved ritual.",
    features: [
      "Everything in Essential",
      "Gel polish, up to 3-week wear",
      "Exfoliation & paraffin treatment",
      "Extended 60-minute massage",
    ],
    highlight: true,
    icon: "💎",
  },
  {
    name: "The Polished Ritual",
    price: "110",
    tagline: "Manicure + pedicure, unhurried.",
    features: [
      "Full Signature manicure",
      "Luxury pedicure with hot stones",
      "Custom nail art accent",
      "Champagne or matcha on the house",
    ],
    highlight: false,
    icon: "👑",
  },
];

export function Pricing() {
  const ref = useReveal<HTMLDivElement>();
  const [selectedTier, setSelectedTier] = useState<number | null>(1);
  useScrollAnimationElements();

  return (
    <section id="pricing" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-accent/5" />
        <div className="absolute top-1/3 -right-96 w-96 h-96 bg-gradient-to-l from-primary/30 to-transparent rounded-full blur-3xl animate-float opacity-50" />
        <div className="absolute bottom-0 -left-96 w-96 h-96 bg-gradient-to-r from-accent/20 to-transparent rounded-full blur-3xl animate-float-delayed opacity-50" />
      </div>

      <div ref={ref} className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center reveal">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Sparkles size={16} className="text-primary" />
            <span className="text-[11px] uppercase tracking-[0.3em] font-medium">Transparent Pricing</span>
          </div>
          <h2 className="font-serif text-5xl sm:text-6xl tracking-tight">
            Investment in yourself
          </h2>
          <p className="mt-6 text-lg text-foreground/70 leading-relaxed">
            Every price point delivers exceptional value. No hidden fees, no surprises — just luxurious nail care.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="mt-16 grid lg:grid-cols-3 gap-6 lg:gap-8">
          {tiers.map((t, idx) => (
            <article
              key={t.name}
              className="stagger-item scroll-animate-in group relative"
              onMouseEnter={() => setSelectedTier(idx)}
              onMouseLeave={() => setSelectedTier(null)}
            >
              {/* Highlight indicator */}
              {t.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary to-accent text-background text-[11px] uppercase tracking-[0.2em] font-bold animate-pulse-scale">
                    <Sparkles size={14} />
                    Most loved
                  </div>
                </div>
              )}

              {/* Card */}
              <div
                className={`relative rounded-3xl p-6 sm:p-8 lg:p-10 flex flex-col h-full overflow-hidden transition-all duration-300 ${
                  t.highlight
                    ? "bg-gradient-to-br from-foreground to-foreground/95 text-background border border-foreground/20 hover-lift"
                    : "bg-gradient-to-br from-card to-card/50 border border-border/50 hover-lift hover:border-primary/30"
                }`}
              >
                {/* Glow effect */}
                <div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ${
                    t.highlight
                      ? "bg-gradient-to-br from-accent/30 to-primary/30"
                      : "bg-gradient-to-br from-primary/10 to-accent/10"
                  }`}
                />

                {/* Content */}
                <div className="relative z-10 flex flex-col h-full">
                  {/* Icon & Title */}
                  <div>
                    <div className="text-4xl mb-4">{t.icon}</div>
                    <h3
                      className={`font-serif text-3xl leading-tight transition-colors duration-300 ${
                        t.highlight
                          ? "text-background group-hover:text-primary"
                          : "text-foreground group-hover:text-primary"
                      }`}
                    >
                      {t.name}
                    </h3>
                    <p
                      className={`mt-2 text-sm transition-colors duration-300 ${
                        t.highlight
                          ? "text-background/70 group-hover:text-background/90"
                          : "text-foreground/70 group-hover:text-foreground/90"
                      }`}
                    >
                      {t.tagline}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="mt-8">
                    <div className="flex items-baseline gap-2">
                      <span
                        className={`font-serif text-6xl font-bold transition-colors duration-300 ${
                          t.highlight ? "text-primary" : "text-primary"
                        }`}
                      >
                        ${t.price}
                      </span>
                      <span
                        className={`text-sm ${
                          t.highlight
                            ? "text-background/60"
                            : "text-foreground/60"
                        }`}
                      >
                        starting
                      </span>
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="mt-8 space-y-3 flex-1">
                    {t.features.map((f) => (
                      <li
                        key={f}
                        className="flex gap-3 text-sm"
                      >
                        <Check
                          size={20}
                          className={`shrink-0 mt-0.5 transition-colors duration-300 ${
                            t.highlight
                              ? "text-primary"
                              : "text-primary"
                          }`}
                        />
                        <span
                          className={`leading-relaxed transition-colors duration-300 ${
                            t.highlight
                              ? "text-background/85 group-hover:text-background"
                              : "text-foreground/80 group-hover:text-foreground"
                          }`}
                        >
                          {f}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <a
                    href="tel:+17145943032"
                    className={`mt-8 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-all duration-300 group/btn ${
                      t.highlight
                        ? "bg-primary text-primary-foreground hover:shadow-lg hover:shadow-primary/40"
                        : "bg-foreground/10 text-foreground border border-foreground/20 hover:bg-foreground hover:text-background hover:border-foreground"
                    }`}
                  >
                    <span>Book now</span>
                    <ArrowRight
                      size={16}
                      className="group-hover/btn:translate-x-1 transition-transform"
                    />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Add-on info */}
        <div className="mt-16 text-center reveal">
          <p className="text-foreground/70 mb-6">
            Custom nail art, add-ons, and special treatments available — ask during your appointment!
          </p>
        </div>
      </div>
    </section>
  );
}
