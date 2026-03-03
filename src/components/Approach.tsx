import { Compass, Map, Rocket, LineChart } from "lucide-react";

const steps = [
  {
    icon: Compass,
    number: "01",
    title: "Discover",
    description:
      "Deep immersion into your business, market, and competitive landscape through stakeholder interviews, data analysis, and market research.",
  },
  {
    icon: Map,
    number: "02",
    title: "Strategise",
    description:
      "Translate insights into a clear, actionable roadmap grounded in data and aligned with your commercial objectives.",
  },
  {
    icon: Rocket,
    number: "03",
    title: "Execute",
    description:
      "Hands-on implementation alongside your team — managing campaigns, building processes, and driving results across every channel.",
  },
  {
    icon: LineChart,
    number: "04",
    title: "Optimise",
    description:
      "Relentless performance monitoring with real-time analytics, regular reporting, and iterative refinement for compounding returns.",
  },
];

export default function Approach() {
  return (
    <section id="approach" className="relative py-28 lg:py-36 bg-navy-950 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-semibold tracking-[0.3em] text-gold-500 uppercase">
            Our Process
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            A Proven Path to{" "}
            <span className="text-gold-500">Results</span>
          </h2>
          <p className="mt-6 text-lg text-white/50 leading-relaxed">
            Four deliberate phases designed to minimise risk and maximise impact.
          </p>
        </div>

        {/* Timeline layout */}
        <div className="relative">
          {/* Vertical line — mobile/tablet */}
          <div className="lg:hidden absolute top-0 bottom-0 left-6 w-px bg-gradient-to-b from-gold-500/30 via-gold-500/20 to-gold-500/30" />
          {/* Horizontal line — desktop */}
          <div className="hidden lg:block absolute top-[52px] left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-0 lg:gap-0">
            {steps.map((step, i) => (
              <div key={step.number} className="relative">
                {/* Mobile: horizontal layout with timeline on left */}
                <div className="lg:hidden flex gap-6 py-8 first:pt-0 last:pb-0">
                  {/* Timeline node */}
                  <div className="relative z-10 flex flex-col items-center shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-navy-950 border-2 border-gold-500/40 text-gold-500">
                      <step.icon size={20} />
                    </div>
                  </div>
                  {/* Content */}
                  <div className="pt-1 pb-2">
                    <div className="flex items-baseline gap-3 mb-2">
                      <span className="text-xs font-bold text-gold-500/40 tracking-wider">
                        STEP {step.number}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-white/40 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Desktop: vertical layout with timeline across */}
                <div className="hidden lg:flex flex-col items-center text-center px-6">
                  {/* Node on the line */}
                  <div className="relative z-10 mb-8">
                    <div className="flex h-[104px] w-[104px] items-center justify-center rounded-full bg-navy-950 border border-white/5">
                      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-gold-500/15 to-gold-500/5 border border-gold-500/20">
                        <step.icon size={28} className="text-gold-500" />
                      </div>
                    </div>
                    {/* Step number badge */}
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-gold-500 text-navy-950 text-[10px] font-bold tracking-wider px-3 py-0.5 rounded-full">
                      {step.number}
                    </div>
                  </div>
                  {/* Content below */}
                  <h3 className="text-xl font-bold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-white/40 leading-relaxed max-w-[240px]">
                    {step.description}
                  </p>
                  {/* Arrow to next — between columns */}
                  {i < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-[52px] -right-3 z-20 text-gold-500/30">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M5 2L10 7L5 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
