import React from "react";
import img1 from "../../images/blog/4.webp";
import img2 from "../../images/blog/3.webp";
import img3 from "../../images/blog/5.webp";

const ImageGallery = () => {
  const images = [img1, img2, img3];

  return (
    <section style={{ width: "100%", margin: 0, padding: 0 }}>
      {images.map((img, index) => (
        <div
          key={index}
          style={{
            width: "100%",
            position: "relative",
            objectPosition: "center",
            overflow: "hidden",
          }}
        >
          <img
            src={img}
            alt={`gallery-${index + 1}`}
            style={{
              width: "100%",
              objectFit: "cover",
              objectPosition: "center",
              display: "block",
            }}
          />

          {/* Sachin3 - index 1 */}
          {index === 1 && (
            <>
              <div
              
              />
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "100%",
                  color: "#ffffff",
                  padding: "24px 20px",
                  boxSizing: "border-box",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <p
                 
                >
                </p>
              </div>
            </>
          )}

          {/* Sachin4 - index 2 - FULL WIDTH */}
          {index === 2 && (
            <>
              <div
               
              />
              <div
              
              >
               
              </div>
            </>
          )}

        </div>
      ))}
    </section>
  );
};

export default ImageGallery;