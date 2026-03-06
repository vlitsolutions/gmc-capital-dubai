import { Globe, Target, Lightbulb } from "lucide-react";

const pillars = [
  {
    icon: Globe,
    title: "Global Reach",
    description:
      "Operating from the heart of Dubai with a strategic footprint across Europe, we connect markets and unlock cross-border opportunities.",
  },
  {
    icon: Target,
    title: "Precision Strategy",
    description:
      "Every initiative is backed by rigorous data analysis and deep market intelligence, ensuring your investments deliver measurable returns.",
  },
  {
    icon: Lightbulb,
    title: "Creative Excellence",
    description:
      "We blend bold creative vision with commercial acumen to craft campaigns and strategies that stand apart in competitive markets.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-28 lg:py-36 bg-warm-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-xs font-semibold tracking-[0.3em] text-gold-500 uppercase">
              Who We Are
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-950 leading-tight">
              Your Strategic Partner for{" "}
              <span className="text-gold-500">Growth</span>
            </h2>
            <div className="mt-8 space-y-5 text-base text-navy-700/80 leading-relaxed">
              <p>
                GMC Capital L.L.C-FZ is a management consultancy and marketing
                management firm licensed in Meydan Free Zone, Dubai. We
                specialise in helping businesses navigate the complexities of
                scaling across the Middle East and Europe.
              </p>
              <p>
                Founded on the principle that exceptional strategy requires both
                local expertise and global perspective, we serve as the bridge
                between two of the world&apos;s most dynamic business
                environments. Our team brings decades of combined experience in
                brand building, market entry strategy, and operational
                consulting.
              </p>
              <p>
                Whether you&apos;re a European enterprise looking to establish a
                presence in the Gulf region, or a Middle Eastern company seeking
                to expand into European markets, GMC Capital provides the
                strategic framework and hands-on execution to make it happen.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="group rounded-2xl bg-white p-8 shadow-sm border border-navy-950/5 hover:shadow-md hover:border-gold-500/20 transition-all duration-300"
              >
                <div className="flex items-start gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-navy-950 text-gold-500 group-hover:bg-gold-500 group-hover:text-navy-950 transition-colors duration-300">
                    <pillar.icon size={22} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-navy-950">
                      {pillar.title}
                    </h3>
                    <p className="mt-2 text-sm text-navy-700/70 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
