import React, { useEffect, useState } from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";

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
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200,
  );


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
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
          padding: isMobile ? "20px 16px" : "35px 20px",
          textAlign: "center", // ✅ IMPORTANT
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
          Every journey begins with a vision. Ours began when{" "}
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
  background-color: #e8a020;
  border-radius: 2px;
}
      `}</style>
    </div>
  );
};

export default PrivacyPage;
