import { siteConfig } from "@/lib/config";

export default function CTA() {
  return (
    <section className="relative py-24 bg-gold-500">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-white/5" />
        <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-navy-950/5" />
      </div>

      <div className="relative mx-auto max-w-4xl px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-950 leading-tight">
          Ready to Accelerate Your Growth?
        </h2>
        <p className="mt-6 text-lg text-navy-950/60 max-w-2xl mx-auto leading-relaxed">
          Join the businesses that trust {siteConfig.shortName} to deliver strategic
          clarity and measurable results across the Middle East and Europe.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="w-full sm:w-auto rounded-full bg-navy-950 px-10 py-4 text-base font-semibold text-white hover:bg-navy-800 transition-colors duration-200"
          >
            Schedule a Consultation
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            className="w-full sm:w-auto rounded-full border-2 border-navy-950/20 px-10 py-4 text-base font-semibold text-navy-950 hover:border-navy-950 transition-colors duration-200"
          >
            {siteConfig.email}
          </a>
        </div>
      </div>
    </section>
  );
}
