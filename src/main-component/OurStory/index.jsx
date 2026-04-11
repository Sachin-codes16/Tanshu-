import React, { useEffect, useState } from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";

import heroImg from "../../images/ourStory/Shubham_kaushik.jpeg";
import heroImg2 from "../../images/ourStory/Naresh_Kumar_kaushik.jpeg";
import heroImg3 from "../../images/ourStory/Aditya.png";
import heroImg4 from "../../images/ourStory/sachin2.jpeg";
import heroImg5 from "../../images/ourStory/555.jpeg";

const team = [
  {
    name: "Naresh Kumar Kaushik",
    role: "Founder & Managing Director",
    img: heroImg2,
    bio: 'Naresh Kumar Kaushik is an entrepreneur who has successfully launched multiple leading businesses in Australia and overseas. As an influential leader and grounded businessman, Naresh Kumar Kaushik is driven by his passion for engineering and innovation. After establishing Tanshu Australia Pty Ltd in 2010 and maintaining the position of Founder and Managing Director of Tanshu Group. With over 25 years of experience and his robust engineering background, he leads the company with a commitment to "Engineering Excellence," ensuring unparalleled service for all Tanshu customers.',
  },
  {
    name: "Shubham Kaushik",
    role: "Director - Global Operations",
    img: heroImg,
    bio: "Shubham Kaushik is a young businessman and one of the driving forces behind the Tanshu Group, where he serves as Director overseeing both executive strategy and day-to-day operations. As the second generation stepping into the business, Shubham brings a fresh perspective to a company built on strong foundations. Taking the reins of a family-owned enterprise, Shubham is focused on scaling the group's diverse portfolios. Shubham's vision is not just to continue the legacy but to evolve it, positioning Tanshu Group for long-term, sustainable growth in a rapidly changing global landscape.",
  },
  {
    name: "Aditya Kaushik",
    role: "Director, Tanshu Vaidik India",
    img: heroImg3,
    bio: "As the Director of Tanshu Vaidik India Pvt. Ltd., I lead a dynamic team dedicated to manufacturing and exporting high-quality home textiles and pet utilities. With a commitment to excellence, innovation, and sustainability, our company has established itself as a trusted name in the industry.",
  },
  {
    name: "Shruthi",
    role: "Graphic Designer and Branding Lead",
    img: heroImg5,
    bio: "With hands-on experience in graphic design, I create designs for branding, presentations, social media, and other digital content. I take care of logos, layouts, posters, brochures, and all the visual materials needed for the company. I enjoy learning new techniques, finding creative ideas, and helping maintain a consistent and professional look for Tanshu.",
  },
  {
    name: "Pranav Pathak",
    role: "Marketing Manager",
    img: heroImg4,
    bio: "We believe that every corner of your home should reflect your unique journey and personality, including the spaces you share with your beloved pets. As your Career Counselor, I'm here to guide you in navigating the world of home decor and pet utilities.",
  },
];

const PrivacyPage = () => {
  const [selectedMember, setSelectedMember] = useState(null);
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
  const isTablet = windowWidth <= 1024;
  const pagePadding = isMobile
    ? "32px 16px"
    : isTablet
      ? "48px 24px"
      : "70px 40px";
  const gridGap = isMobile ? "20px" : "32px";
  const cardImageHeight = isMobile ? "280px" : "380px";
  const modalPadding = isMobile ? "24px 18px" : isTablet ? "36px 28px" : "60px";
  const modalGap = isMobile ? "24px" : isTablet ? "32px" : "60px";
  const gridTemplateColumns = isMobile
    ? "repeat(auto-fit, minmax(min(100%, 220px), 1fr))"
    : isTablet
      ? "repeat(2, minmax(0, 1fr))"
      : "repeat(4, minmax(0, 1fr))";

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
        }}
      >
        <h1
          style={{
            fontSize: isMobile ? "32px" : "44px",
            fontWeight: "700",
            textAlign: "center",
            marginBottom: "10px",
            color: "#0c4c77",
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
          precision.
          Born in <strong>Panipat—the heart of India’s textile legacy</strong>
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

      <div
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
          padding: isMobile ? "20px 16px" : "40px 20px",
        }}
      >
        <h1
          style={{
            fontSize: isMobile ? "30px" : "42px",
            fontWeight: "700",
            textAlign: "center",
            marginBottom: "15px",
            color: "#0c4c77",
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
          <br />
          Over the years, the Group established a strong global footprint,
          exporting machinery across continents and delivering solutions shaped
          by international standards.
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
          <br />
          From expanding into renewable energy to building advanced
          manufacturing capabilities in Northern India, and strengthening global
          logistics through its freight forwarding network, the Tanshu Group
          continues to evolve—quietly, confidently, and with purpose.
          <br />
          Yet, at its core, the philosophy remains unchanged:
          <br/>
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

      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: pagePadding,
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns,
            gap: gridGap,
          }}
        >
          {team.map((member, index) => (
            <div
              key={index}
              onClick={() => setSelectedMember(member)}
              style={{
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                height: "100%",
                borderRadius: "16px",
                border: "2.5px solid #e8a020",
                overflow: "hidden",
                background: "#fff",
                boxShadow: "0 4px 18px rgba(0,0,0,0.09)",
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
              onMouseEnter={(event) => {
                event.currentTarget.style.transform = "translateY(-6px)";
                event.currentTarget.style.boxShadow =
                  "0 16px 40px rgba(0,0,0,0.16)";
              }}
              onMouseLeave={(event) => {
                event.currentTarget.style.transform = "translateY(0)";
                event.currentTarget.style.boxShadow =
                  "0 4px 18px rgba(0,0,0,0.09)";
              }}
            >
              <div style={{ width: "100%", overflow: "hidden" }}>
                <img
                  src={member.img}
                  alt={member.name}
                  style={{
                    width: "100%",
                    height: cardImageHeight,
                    objectFit: "cover",
                    objectPosition: "center",
                    display: "block",
                  }}
                />
              </div>

              <div
                style={{
                  background: "#e8a020",
                  padding: "40px 20px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "12px",
                  flexWrap: isMobile ? "wrap" : "nowrap",
                  flex: 1,
                }}
              >
                <div style={{ minWidth: 0, flex: 1 }}>
                  <div
                    style={{
                      color: "#fff",
                      fontWeight: "700",
                      fontSize: isMobile ? "15px" : "17px",
                      marginBottom: "5px",
                    }}
                  >
                    {member.name}
                  </div>
                  <div
                    style={{
                      color: "#fff",
                      fontSize: isMobile ? "12px" : "13px",
                      opacity: 0.93,
                      lineHeight: "1.4",
                    }}
                  >
                    {member.role}
                  </div>
                </div>
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.25)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "20px",
                    color: "#fff",
                    fontWeight: "bold",
                    lineHeight: 1,
                    flexShrink: 0,
                  }}
                >
                  {">"}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedMember && (
        <div
          onClick={() => setSelectedMember(null)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.6)",
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: isMobile ? "16px" : "30px",
          }}
        >
          <div
            onClick={(event) => event.stopPropagation()}
            style={{
              background: "#fff",
              borderRadius: "20px",
              maxWidth: "1400px",
              width: "100%",
              padding: modalPadding,
              position: "relative",
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              gap: modalGap,
              alignItems: "flex-start",
              maxHeight: "88vh",
              overflowY: "auto",
              boxShadow: "0 40px 100px rgba(0,0,0,0.25)",
            }}
          >
            <button
              onClick={() => setSelectedMember(null)}
              style={{
                position: "absolute",
                top: isMobile ? "14px" : "20px",
                right: isMobile ? "14px" : "20px",
                width: "44px",
                height: "44px",
                borderRadius: "50%",
                background: "#e8a020",
                border: "none",
                cursor: "pointer",
                color: "#fff",
                fontSize: "20px",
                fontWeight: "bold",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 4px 12px rgba(232,160,32,0.4)",
              }}
            >
              X
            </button>

            <div
              style={{
                flex: isMobile ? "1 1 auto" : "0 0 340px",
                width: isMobile ? "100%" : "auto",
              }}
            >
              <img
                src={selectedMember.img}
                alt={selectedMember.name}
                style={{
                  width: "100%",
                  height: isMobile ? "280px" : "400px",
                  objectFit: "cover",
                  objectPosition: "top",
                  borderRadius: "16px",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.14)",
                }}
              />
            </div>

            <div style={{ flex: 1, paddingTop: isMobile ? "0" : "8px" }}>
              <h2
                style={{
                  fontSize: isMobile ? "30px" : isTablet ? "38px" : "45px",
                  fontWeight: "700",
                  marginBottom: "8px",
                  color: "#1a1a1a",
                  marginTop: 0,
                }}
              >
                {selectedMember.name}
              </h2>
              <p
                style={{
                  color: "#e8a020",
                  fontWeight: "700",
                  fontSize: isMobile ? "16px" : "20px",
                  marginBottom: "10px",
                  marginTop: 0,
                }}
              >
                {selectedMember.role}
              </p>
              <div
                style={{
                  width: "70px",
                  height: "3px",
                  background: "#e8a020",
                  marginBottom: "28px",
                }}
              />
              <p
                style={{
                  fontSize: isMobile ? "15px" : "18px",
                  color: "#333",
                  lineHeight: isMobile ? "1.8" : "2",
                  margin: 0,
                  textAlign: "justify",
                }}
              >
                {selectedMember.bio}
              </p>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default PrivacyPage;
