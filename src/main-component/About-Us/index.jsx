import React, { useEffect, useState } from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";

const PrivacyPage = () => {
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200,
  );

  useEffect(() => {
    if (typeof window === "undefined") {
      return undefined;
    }

    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowWidth <= 767;

  return (
    <div
      style={{
        fontFamily: "'Times New Roman', serif",
        background: "white",
        minHeight: "100vh",
      }}
    >
      <Header />

      <div
        className="hero-container"
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
          padding: isMobile ? "30px 16px" : "60px 20px",
          textAlign: "center",
        }}
      >
        <h1
          className="team-heading"
          style={{
            fontSize: isMobile ? "30px" : "42px",
            fontWeight: "550",
            marginBottom: "40px",
            color: "#022f4e",
          }}
        >
          About Us
        </h1>

        <p
          style={{
            fontSize: isMobile ? "15px" : "20px",
            lineHeight: "1.9",
            color: "#222121",
            textAlign: "justify",
          }}
        >
          <strong>Tanshu Vaidik India Pvt. Ltd.</strong> is where heritage meets
          precision. Born in{" "}
          <strong>Panipat—the heart of India’s textile legacy</strong>
          —and shaped by the global vision of the Tanshu Group, we create
          refined home furnishing solutions defined by{" "}
          <strong>quiet luxury and enduring quality</strong>.
          <br />
          Our philosophy of <strong>Engineering Excellence</strong> is not a
          statement—it is a discipline. Every texture, every weave, every detail
          is considered, engineered, and perfected to meet the expectations of a
          global audience.
          <br />
          We work at the intersection of{" "}
          <strong>craftsmanship and innovation</strong>. Natural materials,
          thoughtful design, and modern processes come together to create
          products that feel effortless, yet are deeply intentional.
          <br />
          From concept to completion, our fully integrated approach ensures{" "}
          <strong>precision, consistency, and seamless delivery</strong>
          —supported by our international presence, including Tanshu Australia.
          <br />
          We believe true luxury is not loud. It is found in{" "}
          <strong>
            quality that lasts, design that feels natural, and trust that is
            earned over time
          </strong>
          .
          <br />
          <strong>
            Tanshu Vaidik <br />
            Defined by detail. Driven by excellence.
          </strong>
        </p>
      </div>

      <Footer />
      <style>{`
      .team-heading {
  position: relative;
  display: inline-block;
}

.team-heading::after {
  content: "";
  position: absolute;
  left: -10px;
  right: -10px;
  bottom: -6px;
  height: 3px;
  background-color: #f4b400;
  border-radius: 2px;
}
      `}</style>
    </div>
  );
};

export default PrivacyPage;
