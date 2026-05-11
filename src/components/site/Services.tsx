import { Sparkles, Flower2, Brush, Gem, Droplets, Leaf, ArrowRight } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";
import { useState } from "react";

const services = [
  { icon: Sparkles, title: "Signature Manicure", desc: "Shaped, buffed, and finished with a long-wear polish you'll keep glancing at.", duration: "45 min", price: "$35" },
  { icon: Flower2, title: "Luxury Pedicure", desc: "A 60-minute ritual with warm soaks, exfoliation, and a slow, restorative massage.", duration: "60 min", price: "$45" },
  { icon: Gem, title: "Gel & Builder Gel", desc: "High-shine, chip-resistant wear that lasts up to three weeks without lifting.", duration: "50 min", price: "$55" },
  { icon: Brush, title: "Custom Nail Art", desc: "Hand-painted detail, French variations, and chrome — designed with you in the chair.", duration: "45 min", price: "$40+" },
  { icon: Droplets, title: "Dip Powder", desc: "A featherlight, odor-free finish with serious staying power for everyday hands.", duration: "40 min", price: "$38" },
  { icon: Leaf, title: "Waxing & Add-ons", desc: "Brow shaping, paraffin treatments, and callus care to round out your visit.", duration: "30 min", price: "$25+" },
];

export function Services() {
  const ref = useReveal<HTMLDivElement>();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="services" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background gradient elements */}
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute top-1/2 -left-96 w-96 h-96 bg-gradient-to-r from-primary/40 to-transparent rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 -right-96 w-96 h-96 bg-gradient-to-l from-accent/30 to-transparent rounded-full blur-3xl animate-float-delayed" />
      </div>

      <div ref={ref} className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <div className="max-w-3xl reveal">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Sparkles size={16} className="text-primary" />
            <span className="text-[11px] uppercase tracking-[0.3em] font-medium">Our Expertise</span>
          </div>
          <h2 className="font-serif text-5xl sm:text-6xl tracking-tight leading-tight">
            Artistry in every detail
          </h2>
          <p className="mt-6 text-lg text-foreground/70 leading-relaxed max-w-2xl">
            From classic elegance to bold self-expression, our licensed technicians craft experiences
            as unique as you are. Premium products, meticulous technique, and your comfort always first.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc, duration, price }, idx) => (
            <article
              key={title}
              className="stagger-item group relative"
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Card background with hover effect */}
              <div className="relative rounded-3xl border border-border/50 bg-gradient-to-br from-card to-card/50 p-8 overflow-hidden hover-lift h-full transition-all duration-300">
                {/* Hover background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                {/* Glow effect on hover */}
                <div className={`absolute -inset-1 bg-gradient-to-r from-primary/20 via-accent/20 to-transparent rounded-3xl blur opacity-0 group-hover:opacity-100 -z-10 transition-opacity duration-500`} />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-accent/10 text-foreground group-hover:shadow-lg group-hover:shadow-primary/30 transition-all duration-300 group-hover:scale-110">
                    <Icon size={24} className="text-primary" />
                  </div>

                  {/* Title */}
                  <h3 className="mt-6 font-serif text-2xl leading-tight group-hover:text-primary transition-colors duration-300">
                    {title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-foreground/70 leading-relaxed text-sm group-hover:text-foreground/80 transition-colors">
                    {desc}
                  </p>

                  {/* Duration and Price */}
                  <div className="mt-6 flex items-center justify-between pt-6 border-t border-border/30 group-hover:border-primary/30 transition-colors">
                    <div className="space-y-1">
                      <div className="text-xs uppercase tracking-[0.15em] text-muted-foreground">Duration</div>
                      <div className="font-semibold text-foreground">{duration}</div>
                    </div>
                    <div className="space-y-1 text-right">
                      <div className="text-xs uppercase tracking-[0.15em] text-muted-foreground">From</div>
                      <div className="font-semibold text-primary text-lg">{price}</div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-full bg-foreground/10 text-foreground px-6 py-3 text-sm font-medium border border-foreground/20 group-hover:bg-foreground group-hover:text-background group-hover:border-foreground transition-all duration-300">
                    <span>Learn more</span>
                    <ArrowRight
                      size={16}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center reveal">
          <p className="text-foreground/70 mb-6">
            Not sure which service is right for you?
          </p>
          <a
            href="tel:+17145943032"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-foreground text-background font-semibold btn-glow hover:shadow-lg transition-all"
          >
            Call for consultation
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
