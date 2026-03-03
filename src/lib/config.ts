export const siteConfig = {
  companyName: "GMC Capital L.L.C-FZ",
  shortName: "GMC Capital",
  licenseNumber: "2417080.01",
  formationNumber: "2417080",
  freeZone: "Meydan Free Zone",
  address: {
    line1: "Meydan Grandstand, 6th Floor",
    line2: "Meydan Road, Nad Al Sheba",
    city: "Dubai",
    country: "United Arab Emirates",
  },
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "info@gmccapital.ae",
  phone: process.env.NEXT_PUBLIC_CONTACT_PHONE || "+971 00 000 0000",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://gmccapital.ae",
} as const;
