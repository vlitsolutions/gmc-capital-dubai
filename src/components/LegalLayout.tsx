import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { siteConfig } from "@/lib/config";

export function LegalSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="py-8 border-b border-navy-950/5 last:border-0">
      <h2 className="text-lg font-bold text-navy-950 mb-4">{title}</h2>
      <div className="space-y-3 text-sm text-navy-700/70 leading-relaxed">
        {children}
      </div>
    </div>
  );
}

export function LegalList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2 pl-5">
      {items.map((item, i) => (
        <li key={i} className="relative before:content-[''] before:absolute before:-left-4 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-gold-500/40">
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function LegalLayout({
  title,
  subtitle,
  lastUpdated,
  children,
}: {
  title: string;
  subtitle: string;
  lastUpdated: string;
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-warm-50">
      <div className="bg-navy-950 pt-28 pb-16">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-gold-500 transition-colors mb-10"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>
          <h1 className="text-3xl sm:text-4xl font-bold text-white">{title}</h1>
          <p className="mt-3 text-base text-white/50">{subtitle}</p>
          <p className="mt-4 text-xs text-white/25">
            Last updated: {lastUpdated}
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-6 lg:px-8 py-12">
        {children}
      </div>

      <footer className="bg-navy-950 border-t border-white/5">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/25">
            &copy; {new Date().getFullYear()} {siteConfig.companyName}. All
            rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/terms" className="text-xs text-white/25 hover:text-white/50 transition-colors">Terms</Link>
            <Link href="/privacy" className="text-xs text-white/25 hover:text-white/50 transition-colors">Privacy</Link>
            <Link href="/cookies" className="text-xs text-white/25 hover:text-white/50 transition-colors">Cookies</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
