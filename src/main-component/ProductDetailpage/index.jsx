import React, { useState, Fragment } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/footer";
import Scrollbar from "../../components/scrollbar";
import Logo from "../../images/logo.svg";

// IMPORT IMAGES
import WhiteSofa from "../../images/products/WhiteSofa.jpg";
 import BeigeSofa from "../../images/products/beigeSofa.jpg";
 import GrayeSofa from "../../images/products/GrayeSofa.jpg";
 import BrownSofa from "../../images/products/BrownSofa.jpg";
 import BlackSofa from "../../images/products/BlackSofa.jpg";

const ProductDetails = () => {
  const [selectedColor, setSelectedColor] = useState("white");

  const sofaImages = {
    white: WhiteSofa,
     beige: BeigeSofa,
     graye: GrayeSofa,
     brown: BrownSofa,
      black: BlackSofa
  }
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  }
  

  return (
    <Fragment>
      <Navbar Logo={Logo} />

      <section style={{ background: "White", padding: "100px 0" }}>
        <div
          style={{
            display: "flex",
            gap: "80px",
            padding: "0 80px",
            alignItems: "flex-start"
          }}
        >
          {/* LEFT SIDE IMAGE */}
          <div style={{ flex: 1.2 }}>
            <img
              src={sofaImages[selectedColor]}
              alt="Sofa"
              style={{
                width: "100%",
                height: "auto",
                objectFit: "cover"
              }}
            />
          </div>

          {/* RIGHT SIDE DETAILS */}
          <div style={{ flex: 1 }}>
            <h1
              style={{
                fontSize: "38px",
                fontWeight: "300",
                letterSpacing: "2px",
                fontFamily: "Times New Roman",
                marginBottom: "10px",
                color: "black"
              }}
            >
              CLOUD 2-CUSHION SOFA
            </h1>

            <p style={{ fontSize: "16px", marginBottom: "20px" }}>
              Starting at <strong>$4,695 Member / $6,710 Regular</strong>
            </p>

            <p
              style={{
                lineHeight: "26px",
                fontSize: "15px",
                color: "#444",
                marginBottom: "30px"
              }}
            >
              The world's most comfortable sofa. Designed by Timothy Oulton and built for laidback lounging, The Cloud® features the sink-in comfort of soft feather and down construction around a premium foam core for support. It's a modern marriage of versatility, perfect proportions and unmatched comfort. Guaranteed for life.
            </p>
             <p
              style={{
                lineHeight: "26px",
                fontSize: "18px",
                color: "#444",
                marginBottom: "30px"
              }}
            >
              ALSO AVAILABLE IN LEATHER
            </p>
             <p
              style={{
                lineHeight: "26px",
                fontSize: "20px",
                color: "#444",
                marginBottom: "30px"
              }}
            >
             EXPLORE THE CLOUD® COLLECTION
            </p>

            {/* COLOR SECTION */}
            <div style={{ marginBottom: "25px",}}>
              <p style={{ marginBottom: "10px", letterSpacing: "1px" }}>
                SELECT FROM 5 STOCKED AND 176 Special Order FabricS
              </p>

              <div style={{ display: "flex", gap: "12px" }}>
                <div
                  onClick={() => setSelectedColor("white")}
                  style={{
                    width: "40px",
                    height: "40px",
                    background: "#f2f2f2",
                    border: selectedColor === "white" ? "2px solid black" : "1px solid #ccc",
                    cursor: "pointer"
                  }}
                ></div>

                <div
                  onClick={() => setSelectedColor("brown")}
                  style={{
                    width: "40px",
                    height: "40px",
                    background: "#d8c7b6",
                    border: selectedColor === "beige" ? "2px solid black" : "1px solid #ccc",
                    cursor: "pointer"
                  }}

                ></div>
                 <div
                  onClick={() => setSelectedColor("black")}
                  style={{
                    width: "40px",
                    height: "40px",
                    background: "#d8c7b6",
                    border: selectedColor === "beige" ? "2px solid black" : "1px solid #ccc",
                    cursor: "pointer"
                  }}

                ></div>

                <div
                  onClick={() => setSelectedColor("beige")}
                  style={{
                    width: "40px",
                    height: "40px",
                    background: "#b5b5b5",
                    border: selectedColor === "grey" ? "2px solid black" : "1px solid #ccc",
                    cursor: "pointer"
                  }}
                ></div>

                <div
                  onClick={() => setSelectedColor("graye")}
                  style={{
                    width: "40px",
                    height: "40px",
                    background: "#7a5c4d",
                    border: selectedColor === "brown" ? "2px solid black" : "1px solid #ccc",
                    cursor: "pointer"
                  }}
                ></div>
              </div>
            </div>

            <hr />

            {/* DETAILS SECTION */}
            <div style={{ marginTop: "40px" }}>

      {/* VIEW IN STOCK ITEMS */}
      <div className="info-row">
        <div className="info-title">
          VIEW IN STOCK ITEMS
        </div>
        <div className="arrow">›</div>
      </div>

      {/* DETAILS */}
      <div className="info-row" onClick={() => toggleSection("details")}>
        <div className="info-title">DETAILS</div>
        <div className="plus">{openSection === "details" ? "−" : "+"}</div>
      </div>

      {openSection === "details" && (
        <div className="info-content">
         <ul>
      <li>
        <u>Guaranteed For Life</u>
      </li>
      <li>
        Preconfigured sofa consists of 2 corner chairs and 1 armless chair
      </li>
      <li>
        Ultra-comfortable seat cushions feature a soft feather and down wrap
        around a high-resiliency foam core for softness, support and stability;
        coordinating back cushions are a blend of feathers, down and polyfiber;
        arms feature a thick, high-resiliency foam core topped with polyfiber
      </li>
      <li>
        Proprietary pocket spring suspension; each spring moves independently
        based on where weight is placed, and adjacent springs are barely affected,
        resulting in an ultra-soft and comfortable sit
      </li>
      <li>
        Frame handcrafted of engineered wood and kiln-dried hardwood for
        superior durability with reinforced, corner-blocked joinery
      </li>
      <li>
        Cushion configuration may vary by component. Refer to the detailed
        dimensions.
      </li>
      <li>
        Included sectional connectors ensure that components are secured tightly
        together; lift upward to release
      </li>
      <li>
        Fabric and leather dye lots vary; pieces purchased at different times
        may not match exactly
      </li>
      <li>
        Feather-wrapped seating requires occasional "fluffing" to restore the
        down's natural loft. Vacuum with an upholstery attachment to remove dust.
        Rotate, fluff and smooth cushions for even wear. To minimize fading,
        avoid placing in direct sunlight.
      </li>
    </ul>
        </div>
      )}

      {/* DIMENSIONS */}
      <div className="info-row" onClick={() => toggleSection("dimensions")}>
        <div className="info-title">DIMENSIONS</div>
        <div className="plus">{openSection === "dimensions" ? "−" : "+"}</div>
      </div>

      {openSection === "dimensions" && (
        <div className="info-content">
          <p>Widths: 6', 7', 8', 9', 10'</p>
    <p>Depths: Petite 36", Classic 40", Luxe 45"</p>
    <p>Height: 32"</p>
    <p>Frame Height: 24"</p>
    <p>Seat Height: 19"</p>
    <p>Arm Height: 24"</p>

    <p className="link-style">Detailed Dimensions</p>
    <p className="link-style">Furniture Measuring & Delivery Guide</p>
        </div>
      )}

      {/* SHIPPING & RETURNS */}
      <div className="info-row" onClick={() => toggleSection("shipping")}>
        <div className="info-title">SHIPPING & RETURNS</div>
        <div className="plus">{openSection === "shipping" ? "−" : "+"}</div>
      </div>

      {openSection === "shipping" && (
        <div className="info-content">
         {/* LEFT COLUMN */}
         
    <div>
      <h4>Returns</h4>
      <p>
        Our return policy is 30 days for non-defective rugs, 7 days for
        defective rugs, and 4 days for claims on shortages or missing rugs.
        There is a 20% restocking fee on all returns of non-defective products.
      </p>
      <p>
        We do not accept returns for pillows, throws, poufs, wall art or 18" x
        18" rug samples.
      </p>
      <p>
        See full <span className="link-style">return policy</span>.
      </p>
      <p>
        To initiate a return, please visit your
        <span className="link-style"> Order History</span> to locate your
        order details and select items for return.
      </p>
    </div>

    {/* RIGHT COLUMN */}
    <div>
      <h4>Tracking</h4>
      <p>
        While signed in, visit your Order History to track shipments for each
        of your orders.
      </p>

      <h4 className="mt">Shipping</h4>
      <p>
        All shipments are FOB Dallas or FOB Cartersville. We reserve the right
        to use our own discretion as to the carrier to be used on any shipment.
      </p>
      <p>
        All efforts will be made to use the most cost effective shipping method
        with Federal Express being our preferred carrier.
      </p>
      <p>
        Customer's preferred carrier will be used if customer submits an
        account number for said carrier.
      </p>
    </div>

        </div>
      )}

    </div>
    {/* CSS INSIDE SAME FILE */}
      <style>{`
        .info-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 22px 0;
          
          cursor: pointer;
          font-family: 'Times New Roman', serif;
          letter-spacing: 1px;
          background: white;
        }

        .info-row:hover {
          opacity: 0.8;
        }

        .info-title {
          font-size: 16px;
          font-weight: 400;
          color: #1a1a1a;
        }

        .plus {
          font-size: 22px;
          font-weight: 300;
          color: #1a1a1a;
        }

        .arrow {
          font-size: 22px;
          color: #1a1a1a;
        }

        .info-content {
          padding: 15px 0 30px 0;
          font-size: 20px;
          line-height: 24px;
          color: #333;
          font-family: 'Times New Roman', serif;
          background: white;
        }

        .info-content ul {
          padding-left: 20px;
        }

        .info-content li {
          margin-bottom: 8px;
        }
          .shipping-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  margin-top: 20px;
}

.shipping-grid h4 {
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 10px;
  font-family: 'Times New Roman', serif;
}

.shipping-grid p {
  font-size: 14px;
  line-height: 1.7;
  color: #333;
  margin-bottom: 12px;
  font-family: 'Times New Roman', serif;
}

.mt {
  margin-top: 25px;
}

.link-style {
  text-decoration: underline;
  cursor: pointer;
}
      `}</style>

            {/* <div style={{ marginTop: "20px" }}>
              <h3 style={{ fontWeight: "400", marginBottom: "10px" }}>
                DETAILS
              </h3>

              <ul style={{ lineHeight: "28px", fontSize: "14px" }}>
                <li>Guaranteed For Life</li>
                <li>Feather & down wrapped cushions</li>
                <li>High-resiliency foam core</li>
                <li>Engineered wood frame</li>
                <li>Includes 2 side pillows</li>
              </ul>
            </div> */}

            <hr />

            <div style={{ marginTop: "20px" }}>
  <h3 style={{ fontWeight: "400", marginBottom: "10px", color: "black" }}>
    <button
      onClick={() => window.open("https://your-pdf-url.com/catalogue.pdf", "_blank")}
      style={{
        cursor: "pointer",
        padding: "8px 16px",
        backgroundColor: "#007bff",
        color: "white",
        border: "none",
        borderRadius: "4px",
        fontSize: "16px",
      }}
    >
      Catalogue PDF
    </button>
  </h3>
</div>
          </div>
        </div>
      </section>

      <Footer />
      <Scrollbar />
    </Fragment>
  );
};

export default ProductDetails;