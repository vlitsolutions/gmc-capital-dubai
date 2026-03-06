import {
  BarChart3,
  Megaphone,
  Search,
  TrendingUp,
  Building2,
  Users,
  PenTool,
  Globe2,
  Settings,
  Briefcase,
} from "lucide-react";

const services = [
  {
    icon: Megaphone,
    title: "Brand Strategy & Positioning",
    description:
      "Craft a distinctive brand identity that resonates across cultures. From brand architecture to visual identity systems, we build brands that command attention.",
    tag: "Marketing",
  },
  {
    icon: BarChart3,
    title: "Performance Marketing",
    description:
      "Data-driven digital campaigns across search, social, and programmatic channels. Every dirham and euro invested is tracked, optimised, and accountable.",
    tag: "Marketing",
  },
  {
    icon: PenTool,
    title: "Content & Creative",
    description:
      "Multilingual content creation, from high-impact video production to editorial strategy, tailored for Arabic, English, and European audiences.",
    tag: "Marketing",
  },
  {
    icon: Search,
    title: "Market Research & Insights",
    description:
      "Deep consumer and competitive intelligence that reveals opportunities others miss. We decode market dynamics so you can act with confidence.",
    tag: "Marketing",
  },
  {
    icon: TrendingUp,
    title: "Growth & Market Entry Strategy",
    description:
      "Comprehensive market entry frameworks for companies expanding between the Gulf and Europe. From feasibility studies to go-to-market execution.",
    tag: "Consultancy",
  },
  {
    icon: Building2,
    title: "Business Advisory",
    description:
      "Strategic guidance on business structuring, operational efficiency, and financial planning. We help you build foundations for sustainable, scalable growth.",
    tag: "Consultancy",
  },
  {
    icon: Users,
    title: "Organisational Development",
    description:
      "Talent strategy, leadership advisory, and organisational design that aligns your people with your ambition. Build teams that deliver.",
    tag: "Consultancy",
  },
  {
    icon: Globe2,
    title: "Cross-Market Consulting",
    description:
      "Navigate regulatory, cultural, and commercial complexities of operating across the UAE and Europe with our dual-market expertise.",
    tag: "Consultancy",
  },
  {
    icon: Settings,
    title: "Marketing Management",
    description:
      "End-to-end marketing management, from planning and budgeting to execution and reporting. We run your marketing function so you can focus on growth.",
    tag: "Marketing",
  },
  {
    icon: Briefcase,
    title: "Management Consultancy",
    description:
      "Strategic management consultancy covering business planning, process optimisation, and performance improvement to drive sustainable results.",
    tag: "Consultancy",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-28 lg:py-36 bg-navy-950">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-500/5 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-semibold tracking-[0.3em] text-gold-500 uppercase">
            What We Do
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Comprehensive Solutions,{" "}
            <span className="text-gold-500">Measurable Impact</span>
          </h2>
          <p className="mt-6 text-lg text-white/50 leading-relaxed">
            From strategic brand positioning to operational consultancy, our
            integrated services drive growth at every stage of your business
            journey.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-2xl bg-navy-900/50 border border-white/5 p-6 hover:border-gold-500/20 hover:bg-navy-900 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-navy-800 text-gold-500 group-hover:bg-gold-500 group-hover:text-navy-950 transition-colors duration-300">
                  <service.icon size={18} />
                </div>
                <span className="text-[10px] font-semibold tracking-wider text-gold-500/70 uppercase">
                  {service.tag}
                </span>
              </div>
              <h3 className="text-base font-bold text-white">
                {service.title}
              </h3>
              <p className="mt-2 text-sm text-white/40 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
