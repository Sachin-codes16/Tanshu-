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
          Our Story
        </h1>

        <p
          style={{
            fontSize: isMobile ? "15px" : "20px",
            lineHeight: "1.9",
            color: "#222121",
            textAlign: "justify",
          }}
        >
          Every journey begins with a vision.
          Ours began when{" "}
          <strong>Naresh Kumar founded Tanshu Group in Sydney</strong>—built on
          precision, discipline, and a commitment to engineering excellence.
          What started with a single laser cutter and CNC press brake soon
          evolved into something far greater—a foundation for a global
          enterprise.
          <br />
          With growth came clarity of purpose. Tanshu expanded into specialised
          verticals—
          <strong>
            Metal Products, Machinery Solutions, and Robotics & Automation
          </strong>
          —each defined by expertise, innovation, and performance.
          Over the years, the Group established a strong global footprint,
          exporting machinery across continents and delivering solutions shaped
          by international standards.
          <br />
          <strong>As the vision expanded, so did its horizons.</strong>
          <br />
          The establishment of <strong>
            Tanshu Vaidik India Pvt. Ltd.
          </strong>{" "}
          marked a new chapter—bringing the Group’s engineering mindset into the
          world of textiles and home furnishings.
          <br />
          Rooted in <strong>Panipat, India’s textile capital</strong>, Tanshu
          Vaidik was created to merge traditional craftsmanship with modern
          precision.
          <br />
          Today, with a corporate office and multiple manufacturing facilities,
          Tanshu Vaidik delivers thoughtfully crafted products to markets across{" "}
          <strong>Europe, the United States, Australia, and beyond</strong>.
          <br />

          Each piece reflects a balance of{" "}
          <strong>design, durability, and detail</strong>—shaped for
          contemporary living.

          <br />
          <strong>The journey did not stop there.</strong>
          From expanding into renewable energy to building advanced
          manufacturing capabilities in Northern India, and strengthening global
          logistics through its freight forwarding network, the Tanshu Group
          continues to evolve—quietly, confidently, and with purpose.
          <br />
          Yet, at its core, the philosophy remains unchanged:
          <br />
          <strong>
            To create with intention. <br />
            To deliver with precision. <br />
            To grow with integrity.
          </strong>
          <br />
          We stand today as a reflection of this journey—where{" "}
          <strong>heritage, engineering, and global vision</strong> come
          together to shape the future of modern living.
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
