import type { Metadata } from "next";
import LegalLayout, { LegalSection, LegalList } from "@/components/LegalLayout";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Cookie Policy | GMC Capital",
  description: "Cookie Policy — how GMC Capital L.L.C-FZ uses cookies and similar technologies.",
};

export default function CookiesPage() {
  return (
    <LegalLayout
      title="Cookie Policy"
      subtitle="How we use cookies and similar technologies to enhance your browsing experience."
      lastUpdated="1 March 2025"
    >
      <LegalSection title="1. Introduction">
        <p>
          This Cookie Policy explains how <strong>{siteConfig.companyName}</strong> uses
          cookies and similar tracking technologies on our website. This policy should be
          read alongside our <a href="/privacy" className="text-gold-500 hover:underline">Privacy Policy</a>.
        </p>
        <p>
          We use cookies in compliance with the UAE Federal Decree-Law No. 45 of 2021
          on the Protection of Personal Data and, where our website is accessed by users
          in the European Economic Area, the EU ePrivacy Directive (2002/58/EC) and the
          General Data Protection Regulation (GDPR).
        </p>
      </LegalSection>

      <LegalSection title="2. What Are Cookies?">
        <p>
          Cookies are small text files placed on your device (computer, tablet, or mobile
          phone) when you visit a website. They are widely used to make websites work
          more efficiently, provide a better user experience, and supply information to
          website owners. Similar technologies include pixels, web beacons, and local
          storage.
        </p>
      </LegalSection>

      <LegalSection title="3. Types of Cookies We Use">
        <p>
          <strong>Strictly Necessary Cookies</strong> — Essential for the operation of our
          website. They enable basic functions such as page navigation and access to secure
          areas. The website cannot function properly without them, and they do not require
          your consent.
        </p>
        <p>
          <strong>Functional Cookies</strong> — Allow our website to remember your choices
          (such as language preference or region) and provide enhanced, personalised
          features. Disabling these may affect certain functionality.
        </p>
        <p>
          <strong>Analytics and Performance Cookies</strong> — Help us understand how
          visitors interact with our website by collecting and reporting information. We
          use these insights to measure and improve the performance of our site.
        </p>
        <p>
          <strong>Marketing Cookies</strong> — May be set through our website by
          advertising partners. They can be used to build a profile of your interests and
          show you relevant advertisements on other sites.
        </p>
      </LegalSection>

      <LegalSection title="4. Cookie Consent">
        <p>
          When you first visit our website, you will be presented with a cookie consent
          banner that allows you to:
        </p>
        <LegalList
          items={[
            "Accept all cookies",
            "Reject all non-essential cookies",
            "Manage your preferences by cookie category",
          ]}
        />
        <p>
          You may change your cookie preferences at any time. Your consent is recorded
          and can be withdrawn as easily as it was given, in accordance with UAE PDPL
          consent requirements and GDPR Article 7.
        </p>
      </LegalSection>

      <LegalSection title="5. Third-Party Cookies">
        <p>Some cookies on our website are placed by third-party services, which may include:</p>
        <LegalList
          items={[
            "Google Analytics: for website traffic analysis and usage patterns",
            "Google reCAPTCHA: for spam prevention on our contact forms",
            "Social media platforms: if you interact with social media features on our site",
          ]}
        />
        <p>
          These third parties have their own privacy and cookie policies. We do not have
          control over the cookies set by third parties.
        </p>
      </LegalSection>

      <LegalSection title="6. Managing Cookies">
        <p>
          In addition to the controls we provide through our cookie consent mechanism,
          you can manage cookies through your browser settings. Most browsers allow you to:
        </p>
        <LegalList
          items={[
            "View what cookies are stored and delete them individually",
            "Block third-party cookies",
            "Block cookies from particular websites",
            "Block all cookies from being set",
            "Delete all cookies when you close your browser",
          ]}
        />
        <p>
          Please note that blocking or deleting cookies may affect the functionality of
          our website.
        </p>
      </LegalSection>

      <LegalSection title="7. Cookie Duration">
        <p>Cookies on our site may be either:</p>
        <LegalList
          items={[
            "Session cookies: temporary cookies that expire when you close your browser",
            "Persistent cookies: remain on your device for a set period or until you delete them (maximum 12 months on our site)",
          ]}
        />
      </LegalSection>

      <LegalSection title="8. Updates to This Policy">
        <p>
          We may update this Cookie Policy from time to time to reflect changes in the
          cookies we use or for operational, legal, or regulatory reasons. Please revisit
          this policy regularly.
        </p>
      </LegalSection>

      <LegalSection title="9. Contact Us">
        <p>If you have questions about our use of cookies, please contact:</p>
        <p>
          <strong>{siteConfig.companyName}</strong>
          <br />
          {siteConfig.address.line1}, {siteConfig.address.line2}
          <br />
          {siteConfig.address.city}, {siteConfig.address.country}
          <br />
          Email: {siteConfig.email}
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
