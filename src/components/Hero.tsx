"use client";

import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-navy-950 pt-20">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800" />

      {/* Geometric accent lines */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent rotate-12" />
        <div className="absolute top-1/3 -right-20 w-[500px] h-px bg-gradient-to-r from-transparent via-gold-500/15 to-transparent -rotate-6" />
        <div className="absolute bottom-1/3 -left-10 w-80 h-px bg-gradient-to-r from-transparent via-gold-500/10 to-transparent rotate-3" />
        <div className="absolute top-20 right-1/4 w-2 h-2 rounded-full bg-gold-500/20" />
        <div className="absolute bottom-40 left-1/3 w-1.5 h-1.5 rounded-full bg-gold-500/15" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-gold-500/20 bg-gold-500/5 px-5 py-2 mb-8">
          <div className="h-1.5 w-1.5 rounded-full bg-gold-500 animate-pulse" />
          <span className="text-xs font-medium tracking-widest text-gold-500 uppercase">
            Dubai & Europe
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight">
          Where Strategy
          <br />
          Meets{" "}
          <span className="bg-gradient-to-r from-gold-500 to-gold-300 bg-clip-text text-transparent">
            Execution
          </span>
        </h1>

        <p className="mt-8 max-w-2xl mx-auto text-lg sm:text-xl text-white/60 leading-relaxed">
          We bridge the gap between ambition and achievement. Strategic marketing
          management and consultancy services that drive measurable growth across
          the Middle East and Europe.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="w-full sm:w-auto rounded-full bg-gold-500 px-10 py-4 text-base font-semibold text-navy-950 hover:bg-gold-400 transition-all duration-200 hover:shadow-lg hover:shadow-gold-500/20"
          >
            Schedule a Consultation
          </a>
          <a
            href="#services"
            className="w-full sm:w-auto rounded-full border border-white/15 px-10 py-4 text-base font-medium text-white/80 hover:border-gold-500/40 hover:text-gold-500 transition-all duration-200"
          >
            Explore Services
          </a>
        </div>

        <div className="mt-20 grid grid-cols-3 gap-8 max-w-lg mx-auto">
          {[
            { value: "50+", label: "Clients Served" },
            { value: "2", label: "Continents" },
            { value: "100%", label: "Commitment" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-gold-500">
                {stat.value}
              </div>
              <div className="mt-1 text-xs text-white/40 tracking-wider uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30 hover:text-gold-500 transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown size={24} />
      </a>
    </section>
  );
}
