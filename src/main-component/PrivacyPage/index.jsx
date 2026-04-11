import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";

const sectionTitleStyle = {
  fontSize: "24px",
  fontWeight: "700",
  letterSpacing: "0.5px",
  color: "#1f1f1f",
  marginBottom: "16px",
};

const paragraphStyle = {
  fontSize: "18px",
  color: "#4f4f4f",
  lineHeight: "1.9",
  marginBottom: "16px",
};

const listStyle = {
  paddingLeft: "24px",
  color: "#4f4f4f",
  fontSize: "18px",
  lineHeight: "1.9",
  marginBottom: "12px",
};

const PrivacyPage = () => {
  return (
    <div
      style={{
        fontFamily: "'Times New Roman', serif",
        background: "#fff",
        minHeight: "100vh",
      }}
    >
      <Header />

      <div style={{ maxWidth: "980px", margin: "0 auto", padding: "70px 24px" }}>
        <h1
          style={{
            textAlign: "center",
            fontSize: "38px",
            fontWeight: "300",
            letterSpacing: "4px",
            color: "#202020",
            marginBottom: "18px",
          }}
        >
          PRIVACY POLICY
        </h1>

        <p
          style={{
            textAlign: "center",
            fontSize: "18px",
            color: "#666",
            marginBottom: "40px",
          }}
        >
          Effective Date: April 11, 2026
        </p>

        <hr style={{ borderColor: "#ddd", marginBottom: "42px" }} />

        <div style={{ marginBottom: "34px" }}>
          <h2 style={sectionTitleStyle}>1. Introduction</h2>
          <p style={paragraphStyle}>
            Welcome to TANSHU VAIDIK INDIA PVT. LTD. ("Company," "we," "our,"
            or "us"), located at Industrial Area Phase 2, Hari Nagar, Panipat,
            India.
          </p>
          <p style={paragraphStyle}>
            We are a home textile manufacturer engaged in the design,
            development, and export of textile products globally, including to
            the United States, Europe, Australia, and other international
            markets.
          </p>
          <p style={paragraphStyle}>
            This Privacy Policy explains how we collect, use, disclose, and
            protect your personal information when you visit our website:
            <span style={{ color: "#0b5ed7" }}> www.tanshuvaidik.com</span>.
          </p>
          <p style={paragraphStyle}>
            By accessing or using our website, you agree to the terms of this
            Privacy Policy.
          </p>
        </div>

        <div style={{ marginBottom: "34px" }}>
          <h2 style={sectionTitleStyle}>2. Scope of Policy</h2>
          <p style={paragraphStyle}>This Privacy Policy applies to:</p>
          <ul style={listStyle}>
            <li>Website visitors</li>
            <li>Business clients and buyers</li>
            <li>Individuals submitting inquiries or requesting samples</li>
            <li>Communication via forms, email, or WhatsApp</li>
          </ul>
        </div>

        <div style={{ marginBottom: "34px" }}>
          <h2 style={sectionTitleStyle}>3. Information We Collect</h2>

          <h3 style={{ ...sectionTitleStyle, fontSize: "20px" }}>
            3.1 Personal Information
          </h3>
          <p style={paragraphStyle}>We may collect the following details:</p>
          <ul style={listStyle}>
            <li>Full name</li>
            <li>
              Email address (
              <span style={{ color: "#0b5ed7" }}>info@tanshuvaidik.com</span> or
              submitted by user)
            </li>
            <li>Phone number</li>
            <li>Company/organization name</li>
            <li>Shipping and billing address</li>
            <li>Inquiry details, order requirements, and sampling requests</li>
          </ul>

          <h3 style={{ ...sectionTitleStyle, fontSize: "20px" }}>
            3.2 Business Information (B2B Context)
          </h3>
          <p style={paragraphStyle}>
            As a textile exporter, we may also collect:
          </p>
          <ul style={listStyle}>
            <li>Buyer requirements and specifications</li>
            <li>Product preferences</li>
            <li>Order history and communication records</li>
          </ul>

          <h3 style={{ ...sectionTitleStyle, fontSize: "20px" }}>
            3.3 Automatically Collected Data
          </h3>
          <p style={paragraphStyle}>
            When you visit our website, we may automatically collect:
          </p>
          <ul style={listStyle}>
            <li>IP address</li>
            <li>Browser type and version</li>
            <li>Device information</li>
            <li>Pages visited, time spent, and navigation behavior</li>
          </ul>

          <h3 style={{ ...sectionTitleStyle, fontSize: "20px" }}>
            3.4 Cookies & Tracking Technologies
          </h3>
          <p style={paragraphStyle}>
            We use cookies and similar technologies to:
          </p>
          <ul style={listStyle}>
            <li>Enhance user experience</li>
            <li>Analyze traffic using tools like Google Analytics</li>
            <li>Understand customer behavior</li>
          </ul>
          <p style={paragraphStyle}>
            You can control cookies through your browser settings.
          </p>
        </div>

        <div style={{ marginBottom: "34px" }}>
          <h2 style={sectionTitleStyle}>4. How We Use Your Information</h2>
          <p style={paragraphStyle}>We use your information for:</p>
          <ul style={listStyle}>
            <li>Responding to inquiries and providing quotations</li>
            <li>Managing sampling requests and business communications</li>
            <li>Processing export-related requirements</li>
            <li>Improving our website and product offerings</li>
            <li>Marketing communication (only with consent)</li>
            <li>Internal record keeping and compliance</li>
          </ul>
        </div>

        <div style={{ marginBottom: "34px" }}>
          <h2 style={sectionTitleStyle}>5. Communication Channels</h2>
          <p style={paragraphStyle}>We may communicate with you through:</p>
          <ul style={listStyle}>
            <li>
              Email (
              <span style={{ color: "#0b5ed7" }}>info@tanshuvaidik.com</span>)
            </li>
            <li>Phone calls</li>
            <li>WhatsApp or other messaging platforms</li>
          </ul>
          <p style={paragraphStyle}>
            By sharing your contact details, you consent to being contacted for
            business purposes.
          </p>
        </div>

        <div style={{ marginBottom: "34px" }}>
          <h2 style={sectionTitleStyle}>6. Sharing of Information</h2>
          <p style={paragraphStyle}>
            We do not sell or rent your personal data.
          </p>
          <p style={paragraphStyle}>We may share information with:</p>
          <ul style={listStyle}>
            <li>Logistics and shipping partners</li>
            <li>IT and website service providers</li>
            <li>Professional advisors (legal, accounting)</li>
            <li>Government or regulatory authorities (if required by law)</li>
          </ul>
          <p style={paragraphStyle}>
            All third parties are obligated to maintain confidentiality.
          </p>
        </div>

        <div style={{ marginBottom: "34px" }}>
          <h2 style={sectionTitleStyle}>7. International Data Transfers</h2>
          <p style={paragraphStyle}>
            As an export-oriented business, your information may be transferred
            to and processed in countries outside India, including but not
            limited to the USA, Europe, and Australia.
          </p>
          <p style={paragraphStyle}>
            We ensure reasonable safeguards are in place to protect your data.
          </p>
        </div>

        <div style={{ marginBottom: "34px" }}>
          <h2 style={sectionTitleStyle}>8. Data Retention</h2>
          <p style={paragraphStyle}>
            We retain your data only for as long as necessary to:
          </p>
          <ul style={listStyle}>
            <li>Fulfill business and contractual obligations</li>
            <li>Maintain records for export and compliance</li>
            <li>Resolve disputes</li>
          </ul>
        </div>

        <div style={{ marginBottom: "34px" }}>
          <h2 style={sectionTitleStyle}>9. Data Security</h2>
          <p style={paragraphStyle}>
            We implement appropriate security measures including:
          </p>
          <ul style={listStyle}>
            <li>Secure servers and restricted access</li>
            <li>Data protection protocols</li>
            <li>Confidential handling of business information</li>
          </ul>
          <p style={paragraphStyle}>
            However, no online system is completely secure, and we cannot
            guarantee absolute security.
          </p>
        </div>

        <div style={{ marginBottom: "34px" }}>
          <h2 style={sectionTitleStyle}>10. Your Rights</h2>
          <p style={paragraphStyle}>
            Subject to applicable laws (including GDPR where applicable), you
            have the right to:
          </p>
          <ul style={listStyle}>
            <li>Access your personal data</li>
            <li>Request correction or deletion</li>
            <li>Withdraw consent</li>
            <li>Object to processing</li>
            <li>Request data portability</li>
          </ul>
          <p style={paragraphStyle}>
            To exercise your rights, contact us at:{" "}
            <span style={{ color: "#0b5ed7" }}>info@tanshuvaidik.com</span>
          </p>
        </div>

        <div style={{ marginBottom: "34px" }}>
          <h2 style={sectionTitleStyle}>11. Third-Party Links</h2>
          <p style={paragraphStyle}>
            Our website may contain links to third-party websites. We are not
            responsible for their privacy practices or content.
          </p>
        </div>

        <div style={{ marginBottom: "34px" }}>
          <h2 style={sectionTitleStyle}>12. Children’s Privacy</h2>
          <p style={paragraphStyle}>
            Our website is intended for business use and is not directed toward
            individuals under 18 years of age.
          </p>
        </div>

        <div style={{ marginBottom: "34px" }}>
          <h2 style={sectionTitleStyle}>13. Compliance with Laws</h2>
          <p style={paragraphStyle}>
            We aim to comply with applicable data protection regulations,
            including:
          </p>
          <ul style={listStyle}>
            <li>Information Technology Act, 2000 (India)</li>
            <li>General Data Protection Regulation (GDPR) – European Union</li>
            <li>Applicable US privacy laws</li>
          </ul>
        </div>

        <div style={{ marginBottom: "34px" }}>
          <h2 style={sectionTitleStyle}>14. Changes to This Policy</h2>
          <p style={paragraphStyle}>
            We reserve the right to update this Privacy Policy at any time.
            Changes will be posted on this page with a revised effective date.
          </p>
        </div>

        <div style={{ marginBottom: "34px" }}>
          <h2 style={sectionTitleStyle}>15. Contact Information</h2>
          <p style={paragraphStyle}>
            For any questions, concerns, or requests regarding this Privacy
            Policy, please contact:
          </p>
          <p style={paragraphStyle}>
            TANSHU VAIDIK INDIA PVT. LTD.
            <br />
            Industrial Area Phase 2, Hari Nagar, Panipat, India
            <br />
            Email:{" "}
            <span style={{ color: "#0b5ed7" }}>info@tanshuvaidik.com</span>
            <br />
            Phone: <span style={{ color: "#0b5ed7" }}>+91-8930009468</span>
          </p>
        </div>

        <div style={{ marginBottom: "34px" }}>
          <h2 style={sectionTitleStyle}>16. Consent</h2>
          <p style={paragraphStyle}>
            By using our website, you consent to this Privacy Policy and agree
            to its terms.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PrivacyPage;
