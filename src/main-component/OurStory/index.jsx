import React, { useEffect, useState } from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";

import heroImg from "../../images/ourStory/Shubham_kaushik.jpeg";
import heroImg2 from "../../images/ourStory/Naresh_Kumar_kaushik.jpeg";
import heroImg3 from "../../images/ourStory/Aditya.png";
import heroImg4 from "../../images/ourStory/sachin2.jpeg";
import heroImg5 from "../../images/ourStory/Shruthi.png";

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
    typeof window !== "undefined" ? window.innerWidth : 1200
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
  const pagePadding = isMobile ? "32px 16px" : isTablet ? "48px 24px" : "60px 40px";
  const gridGap = isMobile ? "20px" : "32px";
  const cardImageHeight = isMobile ? "280px" : "380px";
  const modalPadding = isMobile ? "24px 18px" : isTablet ? "36px 28px" : "60px";
  const modalGap = isMobile ? "24px" : isTablet ? "32px" : "60px";

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
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: pagePadding,
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 220px), 1fr))",
            gap: gridGap,
          }}
        >
          {team.map((member, index) => (
            <div
              key={index}
              onClick={() => setSelectedMember(member)}
              style={{
                cursor: "pointer",
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
                event.currentTarget.style.boxShadow = "0 4px 18px rgba(0,0,0,0.09)";
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
                  padding: "18px 20px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "12px",
                  flexWrap: isMobile ? "wrap" : "nowrap",
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
                    flexShrink: 0,
                  }}
                >
                  ->
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
