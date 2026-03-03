import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GMC Capital | Marketing Management & Consultancy | Dubai & Europe",
  description:
    "GMC Capital L.L.C-FZ — Strategic marketing management and management consultancy bridging Dubai and Europe. Elevate your brand with data-driven strategies and cross-market expertise.",
  keywords: [
    "marketing management dubai",
    "management consultancy dubai",
    "marketing consultancy europe",
    "dubai marketing agency",
    "meydan free zone",
    "brand strategy dubai",
    "digital marketing consultancy",
  ],
  openGraph: {
    title: "GMC Capital | Marketing Management & Consultancy",
    description:
      "Strategic marketing management and management consultancy bridging Dubai and Europe.",
    type: "website",
    locale: "en_AE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geistSans.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
