import Link from "next/link";
import { siteConfig } from "@/lib/config";

const footerLinks = {
  Services: [
    { label: "Brand Strategy", href: "#services" },
    { label: "Digital Marketing Strategy & Performance", href: "#services" },
    { label: "Market Entry", href: "#services" },
    { label: "Business Advisory", href: "#services" },
    { label: "Marketing Management", href: "#services" },
    { label: "Management Consultancy", href: "#services" },
  ],
  Company: [
    { label: "About Us", href: "#about" },
    { label: "Our Approach", href: "#approach" },
    { label: "Why Choose Us", href: "#why-us" },
    { label: "Contact", href: "#contact" },
  ],
  Legal: [
    { label: "Terms of Service", href: "/terms" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Cookie Policy", href: "/cookies" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-navy-950 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-wider text-white">
                GMC<span className="text-gold-500"> CAPITAL</span>
              </span>
              <span className="text-[10px] tracking-[0.25em] text-gold-500/70 uppercase">
                Dubai & Europe
              </span>
            </div>
            <p className="mt-6 text-sm text-white/40 leading-relaxed max-w-sm">
              Strategic marketing management and management consultancy bridging
              the Middle East and Europe. Registered in {siteConfig.freeZone}, Dubai.
            </p>
            <div className="mt-6 space-y-2 text-xs text-white/30">
              <p>{siteConfig.address.line1}</p>
              <p>{siteConfig.address.line2}</p>
              <p>{siteConfig.address.city}, {siteConfig.address.country}</p>
              <p className="mt-3">
                <a href={`mailto:${siteConfig.email}`} className="hover:text-gold-500 transition-colors">
                  {siteConfig.email}
                </a>
              </p>
              <p>
                <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="hover:text-gold-500 transition-colors">
                  {siteConfig.phone}
                </a>
              </p>
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-semibold text-white tracking-wider uppercase">
                {title}
              </h4>
              <ul className="mt-6 space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/40 hover:text-gold-500 transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-white/25 space-y-1">
            <p>
              &copy; {new Date().getFullYear()} {siteConfig.companyName}. All rights reserved.
            </p>
            <p>License No. {siteConfig.licenseNumber} &mdash; Registered in {siteConfig.freeZone}, Dubai</p>
            <p>Management Consultancy (7020.00) &middot; Marketing Management (7320.96)</p>
          </div>
          <div className="flex items-center gap-6">
            <Link href="/terms" className="text-xs text-white/25 hover:text-white/50 transition-colors">Terms</Link>
            <Link href="/privacy" className="text-xs text-white/25 hover:text-white/50 transition-colors">Privacy</Link>
            <Link href="/cookies" className="text-xs text-white/25 hover:text-white/50 transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
