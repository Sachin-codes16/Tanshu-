import React, { useState } from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import heroImg from "../../images/ourStory/Shubham_kaushik.jpeg";
import heroImg2 from "../../images/ourStory/Naresh_Kumar_kaushik.jpeg";

const PrivacyPage = () => {
  const [ourCompanyOpen, setOurCompanyOpen] = useState(false);

  return (
    <div style={{ fontFamily: "'Times New Roman', serif", background: "White", minHeight: "100vh" }}>
      <Header />

      {/* TOP NAV */}
      <div style={{ display: "flex", justifyContent: "center", padding: "20px 0", borderBottom: "1px solid white" }}>
        <div
          style={{ display: "flex", alignItems: "center", gap: "8px", cursor: "pointer", fontSize: "20px", letterSpacing: "2px", color: "#333" }}
          onClick={() => setOurCompanyOpen(!ourCompanyOpen)}
        >
          OUR COMPANY
          <span style={{ fontSize: "40px" }}></span>
        </div>
      </div>

      {/* PAGE CONTENT */}
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "60px 24px" }}>

        {/* TITLE */}
        <h1 style={{ textAlign: "center", fontSize: "36px", fontWeight: "200", letterSpacing: "6px", color: "#3a3a3a", marginBottom: "20px" }}>
          TANSHU
        </h1>

        <hr style={{ borderColor: "black", marginBottom: "30px" }} />

        {/* ── SHUBHAM KAUSHIK ── */}
        <div style={{ display: "flex", gap: "32px", alignItems: "flex-start", marginBottom: "8px" }}>

          {/* LEFT IMAGE */}
          <div style={{ flex: "0 0 420px" }}>
            <img
              src={heroImg}
              alt="Shubham Kaushik"
              style={{ width: "120%", height: "420px", objectFit: "cover", borderRadius: "10px", boxShadow: "0 15px 35px rgba(0,0,0,0.12)" }}
            />
          </div>

          {/* RIGHT TEXT */}
          <div style={{ flex: "1", paddingTop: "12px" }}>
            <h2 style={{ fontSize: "32px", fontWeight: "600", marginBottom: "8px", marginTop: 0 }}>
              Shubham Kaushik
            </h2>
            <div style={{ width: "60px", height: "3px", background: "#c89b3c", marginBottom: "12px" }}></div>
            <p style={{ fontSize: "20px", color: "#555", lineHeight: "1.8", margin: 0, textAlign: "justify", textJustify: "inter-word" }}>
              Shubham Kaushik is a young businessman and one of the driving forces behind the Tanshu Group, where he serves as Director overseeing both executive strategy and day-to-day operations. As the second generation stepping into the business, Shubham brings a fresh perspective to a company built on strong foundations. Taking the reins of a family-owned enterprise, Shubham is focused on scaling the group's diverse portfolios. Shubham's vision is not just to continue the legacy but to evolve it—positioning Tanshu Group for long-term, sustainable growth in a rapidly changing global landscape.
            </p>
          </div>
        </div>

        {/* ── NARESH KUMAR KAUSHIK ── */}
        <div style={{ display: "flex", gap: "32px", alignItems: "flex-start", marginTop: "80px", marginBottom: "10px" }}>

          {/* LEFT IMAGE */}
          <div style={{ flex: "0 0 420px" }}>
            <img
              src={heroImg2}
              alt="Naresh Kumar Kaushik"
              style={{ width: "100%", height: "400px", objectFit: "cover", borderRadius: "18px", boxShadow: "0 15px 35px rgba(0,0,0,0.12)" }}
            />
          </div>

          {/* RIGHT TEXT */}
          <div style={{ flex: "1", paddingTop: "8px" }}>
            <h2 style={{ fontSize: "32px", fontWeight: "600", marginBottom: "8px", marginTop: 0 }}>
              Naresh Kumar Kaushik
            </h2>
            <div style={{ width: "60px", height: "3px", background: "#c89b3c", marginBottom: "12px" }}></div>
            <p style={{ fontSize: "20px", color: "#555",fontWeight: "450", lineHeight: "1.8", margin: 0, textAlign: "justify", textJustify: "inter-word" }}>
              Naresh Kumar Kaushik is an entrepreneur who has successfully launched multiple leading businesses in Australia and overseas. As an influential leader and grounded businessman, Naresh Kumar Kaushik is driven by his passion for engineering and innovation. After establishing Tanshu Australia Pty Ltd in 2010 and maintaining the position of Founder and Managing Director of Tanshu Group. With over 25 years of experience and his robust engineering background, he leads the company with a commitment to "Engineering Excellence," ensuring unparalleled service for all Tanshu customers.
            </p>
          </div>
        </div>

      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPage;