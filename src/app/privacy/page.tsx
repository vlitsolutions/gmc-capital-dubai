import type { Metadata } from "next";
import LegalLayout, { LegalSection, LegalList } from "@/components/LegalLayout";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Privacy Policy | GMC Capital",
  description: "Privacy Policy — how GMC Capital L.L.C-FZ collects, uses, and protects your personal data.",
};

export default function PrivacyPage() {
  return (
    <LegalLayout
      title="Privacy Policy"
      subtitle="How we collect, use, and protect your personal data in compliance with UAE and EU regulations."
      lastUpdated="1 March 2025"
    >
      <LegalSection title="1. Introduction">
        <p>
          <strong>{siteConfig.companyName}</strong>, registered in {siteConfig.freeZone},
          Dubai, United Arab Emirates (License No. {siteConfig.licenseNumber}), is
          committed to protecting your personal data and respecting your privacy.
        </p>
        <p>
          This Privacy Policy explains how we collect, use, store, and protect your
          personal data in accordance with the UAE Federal Decree-Law No. 45 of 2021
          on the Protection of Personal Data (&quot;UAE PDPL&quot;) and, where applicable,
          the EU General Data Protection Regulation (&quot;GDPR&quot;).
        </p>
      </LegalSection>

      <LegalSection title="2. Data Controller">
        <p>The data controller responsible for your personal data is:</p>
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

      <LegalSection title="3. Data We Collect">
        <p>We may collect the following categories of personal data:</p>
        <LegalList
          items={[
            "Identity Data: first name, last name, job title, and company name",
            "Contact Data: email address, phone number, and business address",
            "Technical Data: IP address, browser type, device type, operating system, and time zone",
            "Usage Data: pages visited, time spent on pages, and navigation paths",
            "Communication Data: information you provide when contacting us through forms, email, or phone",
          ]}
        />
      </LegalSection>

      <LegalSection title="4. How We Collect Your Data">
        <p>We collect personal data through:</p>
        <LegalList
          items={[
            "Direct interactions: when you fill in forms, send us an email, or contact us by phone",
            "Automated technologies: cookies and similar technologies that collect technical and usage data as you browse our website",
          ]}
        />
      </LegalSection>

      <LegalSection title="5. Legal Basis for Processing">
        <p>
          Under the UAE PDPL (Article 5) and the GDPR (Article 6), we process your
          personal data on the following legal bases:
        </p>
        <LegalList
          items={[
            "Consent: where you have given clear consent for a specific purpose",
            "Contract performance: where processing is necessary to fulfil a contract with you or take pre-contractual steps",
            "Legal obligation: where processing is required to comply with applicable law",
            "Legitimate interests: where processing is necessary for our legitimate business interests, provided your rights do not override those interests",
          ]}
        />
      </LegalSection>

      <LegalSection title="6. How We Use Your Data">
        <p>We use your personal data to:</p>
        <LegalList
          items={[
            "Provide and manage our marketing management and consultancy services",
            "Respond to your enquiries and communications",
            "Improve and optimise our website and user experience",
            "Send marketing communications where you have consented",
            "Comply with legal and regulatory obligations under UAE law",
            "Protect our legitimate business interests and legal rights",
          ]}
        />
      </LegalSection>

      <LegalSection title="7. Data Sharing">
        <p>
          We do not sell your personal data. We may share your data with:
        </p>
        <LegalList
          items={[
            "Service providers: trusted third parties who assist in operating our website and delivering services, bound by contractual obligations to protect your data",
            "Legal authorities: where required by applicable UAE law, regulation, or legal process",
            "Professional advisors: including lawyers, auditors, and insurers where necessary",
          ]}
        />
      </LegalSection>

      <LegalSection title="8. International Data Transfers">
        <p>
          As we operate across Dubai and Europe, your personal data may be transferred
          to and processed in countries outside the UAE or the European Economic Area.
          Where such transfers occur, we ensure appropriate safeguards are in place:
        </p>
        <LegalList
          items={[
            "For transfers from the UAE: in accordance with UAE PDPL Article 22 and its Executive Regulations (Cabinet Decision No. 111 of 2023)",
            "For transfers from the EEA: using Standard Contractual Clauses approved by the European Commission, or other lawful transfer mechanisms under the GDPR",
          ]}
        />
      </LegalSection>

      <LegalSection title="9. Data Retention">
        <p>
          We retain your personal data only for as long as necessary to fulfil the
          purposes for which it was collected, including to satisfy legal, accounting,
          or reporting requirements. When no longer required, data is securely deleted
          or anonymised.
        </p>
      </LegalSection>

      <LegalSection title="10. Your Rights">
        <p>
          Under the UAE PDPL (Articles 13-18) and, where applicable, the GDPR, you
          have the right to:
        </p>
        <LegalList
          items={[
            "Access: request a copy of the personal data we hold about you",
            "Rectification: request correction of inaccurate or incomplete data",
            "Erasure: request deletion of your personal data in certain circumstances",
            "Restrict processing: request limitation of processing in certain circumstances",
            "Data portability: receive your data in a structured, commonly used, machine-readable format",
            "Object: object to processing of your data, including for direct marketing",
            "Withdraw consent: withdraw your consent at any time, without affecting the lawfulness of prior processing",
          ]}
        />
        <p>
          To exercise any of these rights, please contact us at {siteConfig.email}. We
          will respond within 30 days. You may also lodge a complaint with the UAE Data
          Office or the relevant European data protection authority.
        </p>
      </LegalSection>

      <LegalSection title="11. Data Security">
        <p>
          We implement appropriate technical and organisational measures to protect your
          personal data against unauthorised access, alteration, disclosure, or
          destruction, in compliance with UAE PDPL Article 10.
        </p>
      </LegalSection>

      <LegalSection title="12. Children&apos;s Data">
        <p>
          Our website and services are not directed at individuals under 18 years of age.
          We do not knowingly collect personal data from children. If we become aware
          that we have inadvertently collected such data, we will take steps to delete it.
        </p>
      </LegalSection>

      <LegalSection title="13. Changes to This Policy">
        <p>
          We may update this Privacy Policy from time to time. Any changes will be posted
          on this page with an updated revision date.
        </p>
      </LegalSection>

      <LegalSection title="14. Contact Us">
        <p>For any questions about this Privacy Policy, please contact:</p>
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
