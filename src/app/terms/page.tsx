import type { Metadata } from "next";
import LegalLayout, { LegalSection, LegalList } from "@/components/LegalLayout";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Terms of Service | GMC Capital",
  description: "Terms of Service governing the use of GMC Capital L.L.C-FZ website and services.",
};

export default function TermsPage() {
  return (
    <LegalLayout
      title="Terms of Service"
      subtitle="Please read these terms carefully before using our website and services."
      lastUpdated="1 March 2025"
    >
      <LegalSection title="1. About These Terms">
        <p>
          These Terms of Service (&quot;Terms&quot;) govern your access to and use of the
          website and services provided by <strong>{siteConfig.companyName}</strong>,
          a Limited Liability Company registered in {siteConfig.freeZone}, Dubai,
          United Arab Emirates, under License Number {siteConfig.licenseNumber}.
        </p>
        <p>
          Our registered address is {siteConfig.address.line1}, {siteConfig.address.line2},{" "}
          {siteConfig.address.city}, {siteConfig.address.country}.
        </p>
        <p>
          By accessing or using our website, you agree to be bound by these Terms. If you
          do not agree with any part of these Terms, you must not use our website or services.
        </p>
      </LegalSection>

      <LegalSection title="2. Our Services">
        <p>
          {siteConfig.shortName} provides marketing management and management consultancy
          services. The information presented on this website is for general informational
          purposes and does not constitute a formal offer or contractual commitment.
        </p>
        <p>
          Specific service engagements are governed by separate written agreements between
          {siteConfig.shortName} and its clients.
        </p>
      </LegalSection>

      <LegalSection title="3. Eligibility">
        <p>
          You must be at least 18 years of age or the legal age of majority in your
          jurisdiction to use our website and services. By using this website, you
          represent and warrant that you meet these requirements.
        </p>
      </LegalSection>

      <LegalSection title="4. Intellectual Property">
        <p>
          All content on this website — including text, graphics, logos, images, and
          software — is the property of {siteConfig.companyName} or its licensors and
          is protected by the copyright laws of the United Arab Emirates (Federal Law
          No. 38 of 2021 on Copyrights and Neighbouring Rights) and applicable
          international copyright treaties.
        </p>
        <p>
          You may not reproduce, distribute, modify, create derivative works of, publicly
          display, or otherwise exploit any content from this website without our prior
          written consent.
        </p>
      </LegalSection>

      <LegalSection title="5. Acceptable Use">
        <p>When using our website, you agree not to:</p>
        <LegalList
          items={[
            "Use the website for any unlawful purpose or in violation of UAE laws, including Federal Decree-Law No. 34 of 2021 on Combating Rumours and Cybercrimes",
            "Upload, transmit, or distribute any content that is defamatory, offensive, or violates public morals and the values of the United Arab Emirates",
            "Attempt to gain unauthorised access to any part of the website or its related systems and networks",
            "Introduce viruses, malware, or other harmful code to the website",
            "Use any automated system to access the website beyond reasonable human usage",
          ]}
        />
      </LegalSection>

      <LegalSection title="6. Third-Party Links">
        <p>
          Our website may contain links to third-party websites. These links are provided
          for convenience only and do not imply endorsement or responsibility for the
          content, products, or services offered by third parties.
        </p>
      </LegalSection>

      <LegalSection title="7. Disclaimer of Warranties">
        <p>
          This website and its content are provided on an &quot;as is&quot; and &quot;as
          available&quot; basis. To the fullest extent permitted by applicable law,
          {siteConfig.shortName} disclaims all warranties, express or implied, including
          warranties of merchantability, fitness for a particular purpose, and non-infringement.
        </p>
      </LegalSection>

      <LegalSection title="8. Limitation of Liability">
        <p>
          To the maximum extent permitted under UAE law (including the UAE Civil Code,
          Federal Law No. 5 of 1985), {siteConfig.shortName}, its directors, employees,
          and agents shall not be liable for any indirect, incidental, special,
          consequential, or punitive damages arising from your use of this website or
          our services.
        </p>
      </LegalSection>

      <LegalSection title="9. Indemnification">
        <p>
          You agree to indemnify, defend, and hold harmless {siteConfig.companyName},
          its officers, directors, employees, and agents from and against any claims,
          liabilities, damages, losses, or expenses arising from your use of the website
          or violation of these Terms.
        </p>
      </LegalSection>

      <LegalSection title="10. Electronic Communications">
        <p>
          In accordance with UAE Federal Decree-Law No. 46 of 2021 on Electronic
          Transactions and Trust Services, you consent to receive communications from us
          electronically. Electronic communications satisfy any legal requirement that
          such communications be in writing.
        </p>
      </LegalSection>

      <LegalSection title="11. Changes to These Terms">
        <p>
          We reserve the right to modify these Terms at any time. Changes will be effective
          immediately upon posting on this website. Your continued use of the website
          constitutes acceptance of the revised Terms.
        </p>
      </LegalSection>

      <LegalSection title="12. Governing Law">
        <p>
          These Terms are governed by the laws of the United Arab Emirates and the rules
          and regulations of {siteConfig.freeZone}. Any dispute shall be subject to the
          exclusive jurisdiction of the courts of Dubai, United Arab Emirates.
        </p>
      </LegalSection>

      <LegalSection title="13. Contact">
        <p>For any questions regarding these Terms, please contact us at:</p>
        <p>
          <strong>{siteConfig.companyName}</strong>
          <br />
          {siteConfig.address.line1}, {siteConfig.address.line2}, {siteConfig.address.city},{" "}
          {siteConfig.address.country}
          <br />
          Email: {siteConfig.email}
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
