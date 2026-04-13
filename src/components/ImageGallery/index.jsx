import React from "react";
import diningImg from "../../images/blog/Sachin1.png";
import bathroomImg from "../../images/blog/Sachin4.png";
import bedroomImg from "../../images/blog/Sachin3.png";

const hoverStyles = `
  .tanshu-gallery-card {
    position: relative;
    overflow: hidden;
  }

  .tanshu-gallery-image {
    width: 100%;
    object-fit: cover;
    object-position: center;
    display: block;
  }

  .tanshu-gallery-overlay {
    position: absolute;
    inset: 0;
    pointer-events: none;
  }

  .tanshu-gallery-panel {
    position: absolute;
    background: rgba(183, 144, 35, 0.4);
    color: #ffffff;
    padding: 18px 34px 18px;
    box-sizing: border-box;
    opacity: 0;
    transform: translateY(18px);
    transition: opacity 0.3s ease, transform 0.3s ease;
  }

  .tanshu-gallery-card:hover .tanshu-gallery-panel {
    opacity: 1;
    transform: translateY(0);
  }

  .tanshu-gallery-title {
    margin: 0 0 8px;
    font-size: clamp(24px, 2.6vw, 40px);
    line-height: 1.06;
    font-weight: 700;
    letter-spacing: 0.01em;
    color: #ffffff;
  }

  .tanshu-gallery-text {
    margin: 0;
    font-size: clamp(18px, 1.85vw, 31px);
    line-height: 1.24;
    font-weight: 400;
    color: #ffffff;
  }

  @media (max-width: 767px) {
    .tanshu-gallery-panel {
      left: 0 !important;
      right: 0 !important;
      top: auto !important;
      bottom: 0 !important;
      width: 100% !important;
      padding: 18px 16px;
      opacity: 1;
      transform: none;
    }

    .tanshu-gallery-title {
      font-size: 22px;
    }

    .tanshu-gallery-text {
      font-size: 16px;
    }
  }
`;

const galleryItems = [
  {
    image: diningImg,
    alt: "Dining textile collection",
    title: "DINING:",
    description:
      "Every thread, every weave, and every detail is thoughtfully developed to create a dining experience that feels effortless, cohesive, and distinctly refined.",
    panelStyle: {
      left: 0,
      bottom: 0,
      width: "60%",
      maxWidth: "910px",
    },
  },
  {
    image: bathroomImg,
    alt: "Bathroom textile collection",
    title: "BATHROOM:",
    description:
      "Softness you can feel from the first touch, crafted with precision and care to deliver a sense of everyday luxury trusted across global markets.",
    panelStyle: {
      left: 0,
      bottom: 0,
      width: "60%",
      maxWidth: "900px",
    },
  },
  {
    image: bedroomImg,
    alt: "Bedroom textile collection",
    title: "BEDROOM:",
    description:
      "Rooted in craftsmanship and guided by simplicity, our textiles create spaces that feel calm, balanced, and naturally connected to the way we live today.",
    panelStyle: {
      left: 0,
      bottom: 0,
      width: "55%",
      maxWidth: "835px",
    },
  },
];

const ImageGallery = () => {
  return (
    <>
      <style>{hoverStyles}</style>

      <section style={{ width: "100%", margin: 0, padding: 0 }}>
        {galleryItems.map((item) => (
          <div key={item.title} className="tanshu-gallery-card">
            <img src={item.image} alt={item.alt} className="tanshu-gallery-image" />

            <div className="tanshu-gallery-overlay">
              <div className="tanshu-gallery-panel" style={item.panelStyle}>
                <h2 className="tanshu-gallery-title">{item.title}</h2>
                <p className="tanshu-gallery-text">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default ImageGallery;
