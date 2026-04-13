import React from "react";
import himg from "../../images/blog/Sachin5.png";

const hoverStyles = `
  .tanshu-hover-card {
    position: relative;
    overflow: hidden;
  }

  .tanshu-hover-image {
    width: 100%;
    object-fit: cover;
    object-position: center;
    display: block;
  }

  .tanshu-hover-overlay {
    position: absolute;
    inset: 0;
    pointer-events: none;
  }

  .tanshu-hover-panel {
    position: absolute;
    background: rgba(183, 144, 35, 0.4);
    color: #ffffff;
    padding: 18px 34px 18px;
    box-sizing: border-box;
    opacity: 0;
    transform: translateY(18px);
    transition: opacity 0.3s ease, transform 0.3s ease;
  }

  .tanshu-hover-card:hover .tanshu-hover-panel {
    opacity: 1;
    transform: translateY(0);
  }

  .tanshu-hover-title {
    margin: 0 0 8px;
    font-size: clamp(24px, 2.6vw, 40px);
    line-height: 1.06;
    font-weight: 700;
    letter-spacing: 0.01em;
    color: #ffffff;
  }

  .tanshu-hover-text {
    margin: 0;
    font-size: clamp(18px, 1.85vw, 31px);
    line-height: 1.24;
    font-weight: 400;
    color: #ffffff;
  }

  @media (max-width: 767px) {
    .tanshu-hover-panel {
      left: 0 !important;
      right: 0 !important;
      top: auto !important;
      bottom: 0 !important;
      width: 100% !important;
      padding: 18px 16px;
      opacity: 1;
      transform: none;
    }

    .tanshu-hover-title {
      font-size: 22px;
    }

    .tanshu-hover-text {
      font-size: 16px;
    }
  }
`;

const About = () => {
  return (
    <>
      <style>{hoverStyles}</style>

      <section
        style={{
          width: "100%",
          overflow: "hidden",
          margin: 0,
          padding: 0,
        }}
      >
        <div className="tanshu-hover-card">
          <img src={himg} alt="Outdoor textile collection" className="tanshu-hover-image" />

          <div className="tanshu-hover-overlay">
            <div
              className="tanshu-hover-panel"
              style={{
                top: 0,
                right: 0,
                width: "61.5%",
                maxWidth: "930px",
              }}
            >
              <h2 className="tanshu-hover-title">OUTDOOR / PET:</h2>
              <p className="tanshu-hover-text">
                Designed to extend comfort beyond interiors, our collections
                seamlessly blend durability, softness, and style for spaces that
                are lived in, shared, and enjoyed every day.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
