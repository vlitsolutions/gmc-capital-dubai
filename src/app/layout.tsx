import type { Metadata } from "next";
import { Geist } from "next/font/google";
import RecaptchaProvider from "@/components/RecaptchaProvider";
import { siteConfig } from "@/lib/config";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GMC Capital | Dubai Marketing Management & Consultancy",
  description:
    "GMC Capital L.L.C-FZ is a Dubai-based marketing management and consultancy firm specialising in brand strategy, performance marketing, and cross-market growth between Dubai and Europe.",
  keywords: [
    "GMC Capital",
    "GMC Capital Dubai",
    "Dubai marketing",
    "Dubai marketing agency",
    "Dubai marketing management",
    "Dubai marketing consultancy",
    "marketing management Dubai",
    "management consultancy Dubai",
    "brand strategy Dubai",
    "performance marketing Dubai",
    "digital marketing Dubai",
    "market entry Dubai",
    "marketing consultancy Europe",
    "cross-market consultancy",
    "Meydan Free Zone",
    "business advisory Dubai",
  ],
  authors: [{ name: "GMC Capital L.L.C-FZ" }],
  creator: "GMC Capital",
  publisher: "GMC Capital L.L.C-FZ",
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "GMC Capital | Dubai Marketing Management & Consultancy",
    description:
      "Strategic marketing management and consultancy bridging Dubai and Europe. Brand strategy, performance marketing, and cross-market growth.",
    url: siteConfig.url,
    siteName: "GMC Capital",
    type: "website",
    locale: "en_AE",
  },
  twitter: {
    card: "summary_large_image",
    title: "GMC Capital | Dubai Marketing Management & Consultancy",
    description:
      "Strategic marketing management and consultancy bridging Dubai and Europe.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.companyName,
    alternateName: siteConfig.shortName,
    url: siteConfig.url,
    logo: `${siteConfig.url}/icon.svg`,
    description:
      "Dubai-based marketing management and consultancy firm specialising in brand strategy, performance marketing, and cross-market growth between Dubai and Europe.",
    address: {
      "@type": "PostalAddress",
      streetAddress: `${siteConfig.address.line1}, ${siteConfig.address.line2}`,
      addressLocality: siteConfig.address.city,
      addressCountry: "AE",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteConfig.phone,
      email: siteConfig.email,
      contactType: "customer service",
      availableLanguage: ["English", "Arabic"],
    },
    sameAs: [],
    areaServed: [
      { "@type": "Country", name: "United Arab Emirates" },
      { "@type": "Continent", name: "Europe" },
    ],
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.companyName,
    alternateName: siteConfig.shortName,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${siteConfig.address.line1}, ${siteConfig.address.line2}`,
      addressLocality: siteConfig.address.city,
      addressCountry: "AE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 25.1631,
      longitude: 55.3089,
    },
    priceRange: "$$$$",
    serviceArea: [
      { "@type": "City", name: "Dubai" },
      { "@type": "Country", name: "United Arab Emirates" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Marketing & Consultancy Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Brand Strategy & Positioning",
            description:
              "Distinctive brand identity and architecture for cross-cultural markets in Dubai and Europe.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Digital Marketing Strategy & Performance",
            description:
              "Data-driven digital campaigns across search, social, and programmatic channels.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Marketing Management",
            description:
              "End-to-end marketing management from planning and budgeting to execution and reporting.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Management Consultancy",
            description:
              "Strategic consultancy covering business planning, process optimisation, and market entry.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Growth & Market Entry Strategy",
            description:
              "Comprehensive market entry frameworks for companies expanding between the Gulf and Europe.",
          },
        },
      ],
    },
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "GMC Capital | Dubai Marketing Management & Consultancy",
    description:
      "GMC Capital L.L.C-FZ is a Dubai-based marketing management and consultancy firm.",
    url: siteConfig.url,
    publisher: {
      "@type": "Organization",
      name: siteConfig.companyName,
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: siteConfig.url,
        },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webPageSchema),
        }}
      />
    </>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <StructuredData />
      </head>
      <body className={`${geistSans.variable} font-sans antialiased`}>
        <RecaptchaProvider>{children}</RecaptchaProvider>
      </body>
    </html>
  );
}
