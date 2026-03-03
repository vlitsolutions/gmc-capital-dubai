import { Shield, Zap, MapPin, Handshake } from "lucide-react";

const reasons = [
  {
    icon: MapPin,
    title: "Dual-Market Expertise",
    description:
      "Deep operational knowledge of both the Gulf and European business landscapes. We don't just understand the markets — we live and work in them.",
    stat: "2",
    statLabel: "Continents",
  },
  {
    icon: Zap,
    title: "Results-First Approach",
    description:
      "We measure success by your growth, not our activity. Every strategy is tied to clear KPIs, transparent reporting, and demonstrable ROI.",
    stat: "100%",
    statLabel: "Accountability",
  },
  {
    icon: Shield,
    title: "Regulatory Confidence",
    description:
      "Navigate free zone regulations, UAE commercial law, and European compliance frameworks with a partner who understands both sides.",
    stat: "Full",
    statLabel: "Compliance",
  },
  {
    icon: Handshake,
    title: "Partnership Model",
    description:
      "We embed ourselves in your business. No cookie-cutter strategies — every engagement is built around your unique objectives and market position.",
    stat: "1:1",
    statLabel: "Dedicated Teams",
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="relative py-28 lg:py-36 bg-warm-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="text-xs font-semibold tracking-[0.3em] text-gold-500 uppercase">
            Why GMC Capital
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-950 leading-tight">
            Built Different,{" "}
            <span className="text-gold-500">By Design</span>
          </h2>
          <p className="mt-6 text-lg text-navy-700/60 leading-relaxed">
            In a region crowded with agencies and consultancies, we stand apart
            through deep specialisation, radical transparency, and an unrelenting
            focus on outcomes.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="group rounded-2xl bg-white p-6 sm:p-8 border border-navy-950/5 hover:shadow-lg hover:border-gold-500/15 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-navy-950 text-gold-500 group-hover:bg-gold-500 group-hover:text-navy-950 transition-colors duration-300">
                  <reason.icon size={22} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-navy-950">
                    {reason.title}
                  </h3>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="text-sm font-bold text-gold-500">
                      {reason.stat}
                    </span>
                    <span className="text-[10px] text-navy-700/40 tracking-wider uppercase">
                      {reason.statLabel}
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-sm text-navy-700/60 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
