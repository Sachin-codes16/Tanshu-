import React, { useState } from "react";
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
    bio: "Shubham Kaushik is a young businessman and one of the driving forces behind the Tanshu Group, where he serves as Director overseeing both executive strategy and day-to-day operations. As the second generation stepping into the business, Shubham brings a fresh perspective to a company built on strong foundations. Taking the reins of a family-owned enterprise, Shubham is focused on scaling the group's diverse portfolios. Shubham's vision is not just to continue the legacy but to evolve it—positioning Tanshu Group for long-term, sustainable growth in a rapidly changing global landscape.",
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
  const [ourCompanyOpen, setOurCompanyOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);

  return (
    <div
      style={{
        fontFamily: "'Times New Roman', serif",
        background: "white",
        minHeight: "100vh",
      }}
    >
      <Header />

      {/* TOP NAV */}
      {/* <div style={{ display: "flex", justifyContent: "center", padding: "20px 0", borderBottom: "1px solid #eee" }}>
        <div
          style={{ display: "flex", alignItems: "center", gap: "8px", cursor: "pointer", fontSize: "20px", letterSpacing: "2px", color: "#333" }}
          onClick={() => setOurCompanyOpen(!ourCompanyOpen)}
        >
          Our Company Team
          <span style={{ fontSize: "16px" }}>{ourCompanyOpen ? "▲" : "▼"}</span>
        </div>
      </div> */}

      {/* PAGE CONTENT */}
      <div
        style={{ maxWidth: "1400px", margin: "0 auto", padding: "60px 40px" }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "32px",
          }}
        >
          {team.map((member, i) => (
            <div
              key={i}
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
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow =
                  "0 16px 40px rgba(0,0,0,0.16)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 18px rgba(0,0,0,0.09)";
              }}
            >
             <div style={{ width: "100%", height: "380px", overflow: "hidden" }}>
  <img
    src={member.img}
    alt={member.name}
    style={{
      width: "100%",
      height: "100%",
      objectFit: "cover",
      objectPosition: "center"
    }}
  />
</div>

              {/* NAME BAR */}
              <div
                style={{
                  background: "#e8a020",
                  padding: "18px 20px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "10px",
                }}
              >
                <div>
                  <div
                    style={{
                      color: "#fff",
                      fontWeight: "700",
                      fontSize: "17px",
                      marginBottom: "5px",
                    }}
                  >
                    {member.name}
                  </div>
                  <div
                    style={{
                      color: "#fff",
                      fontSize: "13px",
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
                  →
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── MODAL POPUP - Full size jaise screenshot ── */}
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
            padding: "30px",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "#fff",
              borderRadius: "20px",
              maxWidth: "1400px", // ← bahut bada
              width: "100%",
              padding: "60px 60px", // ← zyada padding
              position: "relative",
              display: "flex",
              gap: "60px", // ← bada gap
              alignItems: "flex-start",
              maxHeight: "88vh",
              overflowY: "auto",
              boxShadow: "0 40px 100px rgba(0,0,0,0.25)",
            }}
          >
            {/* CLOSE ✕ - orange circle jaise screenshot */}
            <button
              onClick={() => setSelectedMember(null)}
              style={{
                position: "absolute",
                top: "20px",
                right: "20px",
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
              ✕
            </button>

            {/* LEFT - PHOTO bada */}
            <div style={{ flex: "0 0 340px" }}>
              <img
                src={selectedMember.img}
                alt={selectedMember.name}
                style={{
                  width: "100%",
                  height: "400px",
                  objectFit: "cover",
                  objectPosition: "top",
                  borderRadius: "16px",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.14)",
                }}
              />
            </div>

            {/* RIGHT - DETAILS */}
            <div style={{ flex: 1, paddingTop: "8px" }}>
              <h2
                style={{
                  fontSize: "45px",
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
                  fontSize: "20px",
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
              ></div>
              <p
                style={{
                  fontSize: "18px",
                  color: "#333",
                  lineHeight: "2",
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
