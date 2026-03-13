import React, { useState, Fragment } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/footer";
import Scrollbar from "../../components/scrollbar";
import Logo from "../../images/logo.svg";
 

// ✅ Sahi
import BannerImg from "../../images/products/albero-furniture-bratislava-3RfIi22Y97Y-unsplash.jpg";

import WhiteSofa from "../../images/products/WhiteSofa.jpg";
import BeigeSofa from "../../images/products/beigeSofa.jpg";
import GrayeSofa from "../../images/products/GrayeSofa.jpg";
import BrownSofa from "../../images/products/BrownSofa.jpg";
import BlackSofa from "../../images/products/BlackSofa.jpg";

const blogdetailss = () => {
  const [selectedColor, setSelectedColor] = useState("white");
  const [openSection, setOpenSection] = useState(null);

  const sofaImages = {
    white: WhiteSofa,
    beige: BeigeSofa,
    graye: GrayeSofa,
    brown: BrownSofa,
    black: BlackSofa
  };

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <Fragment>
      <Navbar Logo={Logo} />

      {/* BANNER IMAGE WITH OVERLAY TEXT */}
      <div style={{ position: "relative", width: "100%", height: "800px", overflow: "hidden" }}>
        <img
          src={BannerImg}
          alt="banner"
          style={{ width: "100%", height: "120%", objectFit: "cover", display: "block" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.35)" }} />
        <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
          <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "20px", letterSpacing: "3px", fontFamily: "Times New Roman", marginBottom: "16px", textTransform: "uppercase" }}>
            Varanasi, India
          </p>
          <h1 style={{ color: "#ffffff", fontSize: "52px", fontWeight: "300", fontFamily: "Times New Roman", fontStyle: "italic", textAlign: "center", maxWidth: "700px", lineHeight: "1.3" }}>
            The Greater GoodWeave.
          </h1>
        </div>
      </div>

      {/* EDITORIAL SECTION */}
      {/* EDITORIAL SECTION */}
<div style={{ maxWidth: "1500px", margin: "100px auto 0", padding: "0 80px" }}>
  <div>
    
    {/* Top Line */}
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        paddingBottom: "18px",
        borderBottom: "1px solid #e5e5e5",
        marginBottom: "60px"
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
        <span style={{ fontSize: "25px", color: "#8a8a8a", fontFamily: "Times New Roman" }}>
          Editorial
        </span>
        <span style={{ color: "#d0d0d0" }}>|</span>
        <span style={{ fontSize: "25px", color: "#8a8a8a", fontFamily: "Times New Roman" }}>
        Title
        </span>
      </div>

      <span
        style={{
          fontSize: "25px",
          letterSpacing: "3px",
          color: "#8a8a8a",
          fontFamily: "Times New Roman"
        }}
      >
        Timestamp
      </span>
    </div>

    {/* Blog Paragraph Center Block */}
    <div style={{ maxWidth: "720px", margin: "0 auto" }}>
      <p
        style={{
          fontSize: "22px",
          color: "#555",
          fontFamily: "Times New Roman",
          lineHeight: "2.5",
          textAlign: "left"
        }}
      >
        “Where did this rug come from?” is more than a question about the
        country of origin. We’re becoming more conscious as consumers every
        day, but many assume their new rug was woven by a machine somewhere far
        away. And sometimes that’s the case. But where craftsmanship is
        involved, a point of pride for Loloi, hand-woven rugs have a face behind
        them.
      </p>
    </div>
  </div>
</div>

     

      <Footer />
      <Scrollbar />
    </Fragment>
  );
};

export default blogdetailss;