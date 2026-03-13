import React, { Fragment, useState } from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";

// Images — apne folder se jo available hain
 import img1 from "../../images/blog/zac-gudakov-mw_mj-noYHM-unsplash.jpg";
import img2 from "../../images/blog/Screenshot 2026-03-01 174450 (2).png";
import img3 from "../../images/blog/Screenshot 2026-03-01 174507 (1).png";
import img4 from "../../images/blog/Screenshot 2026-03-01 174551.png";
import img5 from "../../images/blog/Screenshot 2026-03-01 174624 (1).png";
import img6 from "../../images/blog/Screenshot 2026-03-01 174637.png";
import img7 from "../../images/blog/Screenshot 2026-03-01 174652.png";
import img8 from "../../images/blog/image_3.jpg";

const F = "Times New Roman, serif";
const DARK = "#3a3630";

const AboutPage = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <Fragment>
      <Header />

      {/* 1. HERO BANNER */}
      <div style={{ position: "relative", width: "100%", height: "100vh", overflow: "hidden" }}>
        <img src={img1} alt="hero" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.45)" }} />
        <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "flex-end", justifyContent: "center", paddingBottom: "80px" }}>
          <h1 style={{ color: "#fff", fontSize: "clamp(36px, 6vw, 72px)", fontWeight: "300", fontFamily: F, textAlign: "center", lineHeight: 1.2, maxWidth: "900px", padding: "0 40px" }}>
            “We believe in the thoughtfully layered home.”
          </h1>
        </div>
      </div>

      {/* 2. BELIEF STATEMENT */}
      <div style={{ background: "#f5f4f1", padding: "100px 40px", textAlign: "center" }}>
        <p style={{ fontSize: "clamp(20px, 2.5vw, 28px)", fontFamily: F, color: DARK, lineHeight: 1.8, maxWidth: "800px", margin: "0 auto" }}>
          That the best spaces come together with intention.<br />
          That craftsmanship is something worth committing to.<br />
          That a good rug does more than tie the room together—<br />
          it sets the home apart.
        </p>
      </div>

      {/* 3. LOLOI'S BEGINNINGS */}
      <div style={{ background: "#fff", padding: "100px 40px", textAlign: "center" }}>
        <p style={{ fontSize: "15px", letterSpacing: "3px", color: "#999", fontFamily: F, marginBottom: "30px" }}>
          LOLOI'S BEGINNINGS
        </p>
        <p style={{ fontSize: "clamp(18px, 2.5vw, 28px)", fontFamily: F, color: DARK, lineHeight: 1.8, maxWidth: "750px", margin: "0 auto" }}>
          20 years ago, Amir Loloi made the leap to start Loloi. Today, he looks back on how the company began, and where it's headed.
        </p>
      </div>

      {/* 4. OUR PRODUCTS HEADING */}
      <div style={{ background: "#fff", padding: "80px 40px 40px", textAlign: "center", borderTop: "1px solid #eee" }}>
        <p style={{ fontSize: "18px", letterSpacing: "3px", color: "#999", fontFamily: F, marginBottom: "20px" }}>
          OUR PRODUCTS
        </p>
        <h2 style={{ fontSize: "clamp(28px, 4vw, 52px)", fontWeight: "300", fontFamily: F, color: DARK }}>
          Bringing new life to an old craft.
        </h2>
      </div>

      {/* 5. PRODUCTS — TEXT LEFT, IMAGE RIGHT */}
      <div style={{ background: "#fff", padding: "60px 80px", display: "flex", gap: "60px", alignItems: "center" }}>
        <div style={{ flex: 1 }}>
          <p style={{ fontSize: "25px", fontFamily: F, color: DARK, lineHeight: 1.9 }}>
            At Loloi, we're serving a community of designers, decorators, and homebodies; people who care deeply about objects acquired for their home—from the materials we source to the textures we develop.
          </p>
        </div>
        <div style={{ flex: 1 }}>
          <img src={img2} alt="rug" style={{ width: "100%", height: "500px", objectFit: "cover" }} />
        </div>
      </div>

      {/* 6. IMAGE LEFT, TEXT RIGHT */}
      <div style={{ background: "#fff", padding: "0 80px 80px", display: "flex", gap: "60px", alignItems: "center" }}>
        <div style={{ flex: 1 }}>
          <img src={img3} alt="room" style={{ width: "100%", height: "500px", objectFit: "cover" }} />
        </div>
        <div style={{ flex: 1 }}>
          <p style={{ fontSize: "25px", fontFamily: F, color: DARK, lineHeight: 1.9 }}>
            It's why our approach is simple, but considered: Design rugs and pillows for today's homes, and bring them to life with centuries-old craftsmanship.
          </p>
        </div>
      </div>

      {/* 7. OUR PROCESS */}
      <div style={{ background: "#f5f4f1", padding: "100px 40px 60px", textAlign: "center" }}>
        <p style={{ fontSize: "20px", letterSpacing: "3px", color: "#999", fontFamily: F, marginBottom: "20px" }}>
          OUR PROCESS
        </p>
        <h2 style={{ fontSize: "clamp(28px, 4vw, 52px)", fontWeight: "300", fontFamily: F, color: DARK, marginBottom: "60px" }}>
          Committed to the craft.
        </h2>

        {/* Image Left + Text Right */}
        <div style={{ display: "flex", gap: "60px", alignItems: "center", padding: "0 40px", textAlign: "left" }}>
          <div style={{ flex: 1 }}>
            <img src={img4} alt="process" style={{ width: "100%", height: "420px", objectFit: "cover" }} />
          </div>
          <div style={{ flex: 1 }}>
            <p style={{ fontSize: "25px", fontFamily: F, color: DARK, lineHeight: 1.9, marginBottom: "30px" }}>
              In India, our rugs are still crafted the old-world way. Every step of the process—whether it be the dipdyeing of wool or the intricate task of weaving—is done by hand, where proud artisans keep this time-honored tradition alive.
            </p>
            <span style={{ fontSize: "15px", letterSpacing: "2px", fontFamily: F, color: DARK, borderBottom: "1px solid " + DARK, paddingBottom: "3px", cursor: "pointer" }}>
              LEARN MORE
            </span>
          </div>
        </div>
      </div>

      {/* 8. GOODWEAVE + SLIDER */}
      <div style={{ background: "#f5f4f1", padding: "60px 80px 100px", display: "flex", gap: "60px", alignItems: "flex-start" }}>
        {/* LEFT — GoodWeave */}
        <div style={{ flex: 1 }}>
          <div style={{ marginBottom: "30px" }}>
            <div style={{ fontSize: "40px", fontFamily: F, fontWeight: "300", color: DARK, marginBottom: "6px" }}>
              good<strong>weave</strong> ®
            </div>
          </div>
          <p style={{ fontSize: "25px", fontFamily: F, color: DARK, lineHeight: 1.9 }}>
            Loloi is proud to partner with GoodWeave, a non-profit company that audits our factories in India. This ensures no child, forced, or bonded labor is used to make our rugs.
          </p>
        </div>

        {/* RIGHT — Slider */}
        <div style={{ flex: 1 }}>
          <div style={{ position: "relative", overflow: "hidden" }}>
            <img
              src={[img5, img6, img7, img8][activeSlide]}
              alt="slide"
              style={{ width: "100%", height: "420px", objectFit: "cover" }}
            />
            {/* Dots */}
            <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginTop: "16px" }}>
              {[0, 1, 2, 3].map(i => (
                <div
                  key={i}
                  onClick={() => setActiveSlide(i)}
                  style={{ width: "10px", height: "10px", borderRadius: "50%", cursor: "pointer", background: activeSlide === i ? DARK : "transparent", border: "1px solid " + DARK }}
                />
              ))}
            </div>
          </div>
          <p style={{ fontSize: "20px", fontFamily: F, color: "#888", marginTop: "12px", textAlign: "center" }}>
            Step one — Preparing the fiber. <span style={{ textDecoration: "underline", cursor: "pointer", color: DARK }}>Learn more</span>
          </p>
        </div>
      </div>

      {/* 9. THOUGHTFUL DESIGN */}
      <div style={{ background: "#fff", padding: "100px 40px 60px", textAlign: "center" }}>
        <p style={{ fontSize: "20px", letterSpacing: "3px", color: "#999", fontFamily: F, marginBottom: "20px" }}>
          THOUGHTFUL DESIGN
        </p>
        <h2 style={{ fontSize: "clamp(28px, 4vw, 52px)", fontWeight: "300", fontFamily: F, color: DARK, marginBottom: "60px" }}>
          We consider every detail.
        </h2>

        <div style={{ display: "flex", gap: "60px", alignItems: "center", padding: "0 40px", textAlign: "left" }}>
          <div style={{ flex: 1 }}>
            <img src={img6} alt="design" style={{ width: "100%", height: "500px", objectFit: "cover" }} />
          </div>
          <div style={{ flex: 1 }}>
            <p style={{ fontSize: "25px", fontFamily: F, color: DARK, lineHeight: 1.9 }}>
              Our products are designed for particular people, by particular people. It's why we obsess over colors. Create new, intricate textures that are made to last. And even often illustrate our own patterns. The result? Beautifully-designed rugs that will look great now—and decades from now.
            </p>
          </div>
        </div>
      </div>

      {/* 10. TWO MORE IMAGES */}
     <div style={{ background: "#fff", padding: "60px 80px", display: "flex", gap: "60px", alignItems: "center" }}>
        <div style={{ flex: 1 }}>
          <p style={{ fontSize: "25px", fontFamily: F, color: DARK, lineHeight: 1.9 }}>
          
          </p>
        </div>
        <div style={{ flex: 1 }}>
          <img src={img8} alt="rug" style={{ width: "100%", height: "500px", objectFit: "cover" }} />
        </div>
      </div>
      {/* 11. KIND WORDS / QUOTE */}
      <div style={{ background: "#f5f4f1", padding: "100px 40px", textAlign: "center" }}>
        <p style={{ fontSize: "20px", letterSpacing: "3px", color: "#999", fontFamily: F, marginBottom: "30px" }}>
          KIND WORDS
        </p>
        <h2 style={{ fontSize: "clamp(24px, 3.5vw, 44px)", fontWeight: "300", fontFamily: F, color: DARK, marginBottom: "40px" }}>
          What people are saying.
        </h2>
        <p style={{ fontSize: "clamp(18px, 2vw, 26px)", fontFamily: F, color: DARK, lineHeight: 1.8, maxWidth: "760px", margin: "0 auto 20px", fontStyle: "italic" }}>
          "We find ourselves constantly turning to their inventory when we're in need of a little design refresh."
        </p>
        <p style={{ fontSize: "20px", letterSpacing: "3px", color: "#999", fontFamily: F }}>
          RUE MAGAZINE
        </p>
      </div>

      {/* 12. OPEN TRADE ACCOUNT */}
      <div style={{ background: "#fff", padding: "100px 40px", textAlign: "center" }}>
        <h2 style={{ fontSize: "clamp(28px, 4vw, 50px)", fontWeight: "300", fontFamily: F, color: DARK, marginBottom: "20px" }}>
          Open a Loloi Trade Account.
        </h2>
        <p style={{ fontSize: "25px", fontFamily: F, color: "#666", marginBottom: "10px" }}>
          Sign up to place orders and see prices.
        </p>
        <p style={{ fontSize: "22px", fontFamily: F, color: "#666", marginBottom: "40px" }}>
          Not a trade professional? Learn <span style={{ textDecoration: "underline", cursor: "pointer" }}>how to buy</span>.
        </p>
        <button style={{ background: "#3a3630", color: "#fff", border: "none", padding: "16px 40px", fontSize: "13px", letterSpacing: "2px", fontFamily: F, cursor: "pointer" }}>
          OPEN TRADE ACCOUNT
        </button>
      </div>

      {/* 13. SHOWROOMS / CATALOGS / NEW ARRIVALS */}
      <div style={{ background: "#fff", padding: "0 60px 100px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "30px" }}>
          {[
            { img: img1, label: "SHOWROOMS" },
            { img: img2, label: "CATALOGS" },
            { img: img3, label: "NEW ARRIVALS" },
          ].map((item, i) => (
            <div key={i} style={{ textAlign: "center", cursor: "pointer" }}>
              <img src={item.img} alt={item.label} style={{ width: "100%", height: "340px", objectFit: "cover", display: "block", marginBottom: "20px" }} />
              <p style={{ fontSize: "20px", letterSpacing: "2px", fontFamily: F, color: DARK, borderBottom: "1px solid " + DARK, display: "inline-block", paddingBottom: "4px" }}>
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </Fragment>
  );
};

export default AboutPage;