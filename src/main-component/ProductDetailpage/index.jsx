<<<<<<< HEAD
=======
// import React, { useState, Fragment } from "react";
// import Navbar from "../../components/Navbar";
// import Footer from "../../components/footer";
// import Scrollbar from "../../components/scrollbar";
// import Logo from "../../images/logo.svg";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import { useEffect } from "react";

// // IMPORT IMAGES
// import WhiteSofa from "../../images/products/WhiteSofa.jpg";
//  import BeigeSofa from "../../images/products/beigeSofa.jpg";
//  import GrayeSofa from "../../images/products/GrayeSofa.jpg";
//  import BrownSofa from "../../images/products/BrownSofa.jpg";
//  import BlackSofa from "../../images/products/BlackSofa.jpg";

// const ProductDetails = () => {
//   const [selectedColor, setSelectedColor] = useState("white");

//   const sofaImages = {
//     white: WhiteSofa,
//      beige: BeigeSofa,
//      graye: GrayeSofa,
//      brown: BrownSofa,
//       black: BlackSofa
//   }
//   const [openSection, setOpenSection] = useState(null);
// const { id } = useParams();
// const [product, setProduct] = useState(null);
//   const toggleSection = (section) => {
//     setOpenSection(openSection === section ? null : section);
//   }
//   useEffect(() => {

//   axios
//     .get(`https://tanshu.checkour.work/api/product/product-detail/${id}`)
//     .then((res) => {

//       console.log(res.data);

//       setProduct(res.data.data);

//     })
//     .catch((err)=>{
//       console.log(err);
//     });

// }, [id]);
// if (!product) {
//   return (
//     <div style={{textAlign:"center",marginTop:"200px"}}>
//       <h2>Loading Product...</h2>
//     </div>
//   );
// }

//   return (
//     <Fragment>
//       <Navbar Logo={Logo} />

//       <section style={{ background: "White", padding: "100px 0" }}>
//         <div
//           style={{
//             display: "flex",
//             gap: "80px",
//             padding: "0 80px",
//             alignItems: "flex-start"
//           }}
//         >
//           {/* LEFT SIDE IMAGE */}
//           <div style={{ flex: 1.2 }}>
//             <img
//              src={product?.featureimg ? product.featureimg : sofaImages[selectedColor]}
//               alt="Sofa"
//               style={{
//                 width: "100%",
//                 height: "auto",
//                 objectFit: "cover"
//               }}
//             />
//           </div>

//           {/* RIGHT SIDE DETAILS */}
//           <div style={{ flex: 1 }}>
//             <h1
//               style={{
//                 fontSize: "38px",
//                 fontWeight: "300",
//                 letterSpacing: "2px",
//                 fontFamily: "Times New Roman",
//                 marginBottom: "10px",
//                 color: "black"
//               }}
//             >
//               {product?.productName || "CLOUD 2-CUSHION SOFA"}
//             </h1>

//             <p style={{ fontSize: "16px", marginBottom: "20px" }}>
//               Starting at <strong>$4,695 Member / $6,710 Regular</strong>
//             </p>

//             <p
//               style={{
//                 lineHeight: "26px",
//                 fontSize: "15px",
//                 color: "#444",
//                 marginBottom: "30px"
//               }}
//             >
//               The world's most comfortable sofa. Designed by Timothy Oulton and built for laidback lounging, The Cloud® features the sink-in comfort of soft feather and down construction around a premium foam core for support. It's a modern marriage of versatility, perfect proportions and unmatched comfort. Guaranteed for life.
//             </p>
//              <p
//               style={{
//                 lineHeight: "26px",
//                 fontSize: "18px",
//                 color: "#444",
//                 marginBottom: "30px"
//               }}
//             >
//               ALSO AVAILABLE IN LEATHER
//             </p>
//              <p
//               style={{
//                 lineHeight: "26px",
//                 fontSize: "20px",
//                 color: "#444",
//                 marginBottom: "30px"
//               }}
//             >
//              EXPLORE THE CLOUD® COLLECTION
//             </p>

//             {/* COLOR SECTION */}
//             <div style={{ marginBottom: "25px",}}>
//               <p style={{ marginBottom: "10px", letterSpacing: "1px" }}>
//                 SELECT FROM 5 STOCKED AND 176 Special Order FabricS
//               </p>

//               <div style={{ display: "flex", gap: "12px" }}>
//                 <div
//                   onClick={() => setSelectedColor("white")}
//                   style={{
//                     width: "40px",
//                     height: "40px",
//                     background: "#f2f2f2",
//                     border: selectedColor === "white" ? "2px solid black" : "1px solid #ccc",
//                     cursor: "pointer"
//                   }}
//                 ></div>

//                 <div
//                   onClick={() => setSelectedColor("brown")}
//                   style={{
//                     width: "40px",
//                     height: "40px",
//                     background: "#d8c7b6",
//                     border: selectedColor === "beige" ? "2px solid black" : "1px solid #ccc",
//                     cursor: "pointer"
//                   }}

//                 ></div>
//                  <div
//                   onClick={() => setSelectedColor("black")}
//                   style={{
//                     width: "40px",
//                     height: "40px",
//                     background: "#d8c7b6",
//                     border: selectedColor === "beige" ? "2px solid black" : "1px solid #ccc",
//                     cursor: "pointer"
//                   }}

//                 ></div>

//                 <div
//                   onClick={() => setSelectedColor("beige")}
//                   style={{
//                     width: "40px",
//                     height: "40px",
//                     background: "#b5b5b5",
//                     border: selectedColor === "grey" ? "2px solid black" : "1px solid #ccc",
//                     cursor: "pointer"
//                   }}
//                 ></div>

//                 <div
//                   onClick={() => setSelectedColor("graye")}
//                   style={{
//                     width: "40px",
//                     height: "40px",
//                     background: "#7a5c4d",
//                     border: selectedColor === "brown" ? "2px solid black" : "1px solid #ccc",
//                     cursor: "pointer"
//                   }}
//                 ></div>
//               </div>
//             </div>

//             <hr />

//             {/* DETAILS SECTION */}
//             <div style={{ marginTop: "40px" }}>

//       {/* VIEW IN STOCK ITEMS */}
//       <div className="info-row">
//         <div className="info-title">
//           VIEW IN STOCK ITEMS
//         </div>
//         <div className="arrow">›</div>
//       </div>

//       {/* DETAILS */}
//       <div className="info-row" onClick={() => toggleSection("details")}>
//         <div className="info-title">DETAILS</div>
//         <div className="plus">{openSection === "details" ? "−" : "+"}</div>
//       </div>

//       {openSection === "details" && (
//         <div className="info-content">
//          <ul>
//       <li>
//         <u>Guaranteed For Life</u>
//       </li>
//       <li>
//         Preconfigured sofa consists of 2 corner chairs and 1 armless chair
//       </li>
//       <li>
//         Ultra-comfortable seat cushions feature a soft feather and down wrap
//         around a high-resiliency foam core for softness, support and stability;
//         coordinating back cushions are a blend of feathers, down and polyfiber;
//         arms feature a thick, high-resiliency foam core topped with polyfiber
//       </li>
//       <li>
//         Proprietary pocket spring suspension; each spring moves independently
//         based on where weight is placed, and adjacent springs are barely affected,
//         resulting in an ultra-soft and comfortable sit
//       </li>
//       <li>
//         Frame handcrafted of engineered wood and kiln-dried hardwood for
//         superior durability with reinforced, corner-blocked joinery
//       </li>
//       <li>
//         Cushion configuration may vary by component. Refer to the detailed
//         dimensions.
//       </li>
//       <li>
//         Included sectional connectors ensure that components are secured tightly
//         together; lift upward to release
//       </li>
//       <li>
//         Fabric and leather dye lots vary; pieces purchased at different times
//         may not match exactly
//       </li>
//       <li>
//         Feather-wrapped seating requires occasional "fluffing" to restore the
//         down's natural loft. Vacuum with an upholstery attachment to remove dust.
//         Rotate, fluff and smooth cushions for even wear. To minimize fading,
//         avoid placing in direct sunlight.
//       </li>
//     </ul>
//         </div>
//       )}

//       {/* DIMENSIONS */}
//       <div className="info-row" onClick={() => toggleSection("dimensions")}>
//         <div className="info-title">DIMENSIONS</div>
//         <div className="plus">{openSection === "dimensions" ? "−" : "+"}</div>
//       </div>

//       {openSection === "dimensions" && (
//         <div className="info-content">
//           <p>Widths: 6', 7', 8', 9', 10'</p>
//     <p>Depths: Petite 36", Classic 40", Luxe 45"</p>
//     <p>Height: 32"</p>
//     <p>Frame Height: 24"</p>
//     <p>Seat Height: 19"</p>
//     <p>Arm Height: 24"</p>

//     <p className="link-style">Detailed Dimensions</p>
//     <p className="link-style">Furniture Measuring & Delivery Guide</p>
//         </div>
//       )}

//       {/* SHIPPING & RETURNS */}
//       <div className="info-row" onClick={() => toggleSection("shipping")}>
//         <div className="info-title">SHIPPING & RETURNS</div>
//         <div className="plus">{openSection === "shipping" ? "−" : "+"}</div>
//       </div>

//       {openSection === "shipping" && (
//         <div className="info-content">
//          {/* LEFT COLUMN */}

//     <div>
//       <h4>Returns</h4>
//       <p>
//         Our return policy is 30 days for non-defective rugs, 7 days for
//         defective rugs, and 4 days for claims on shortages or missing rugs.
//         There is a 20% restocking fee on all returns of non-defective products.
//       </p>
//       <p>
//         We do not accept returns for pillows, throws, poufs, wall art or 18" x
//         18" rug samples.
//       </p>
//       <p>
//         See full <span className="link-style">return policy</span>.
//       </p>
//       <p>
//         To initiate a return, please visit your
//         <span className="link-style"> Order History</span> to locate your
//         order details and select items for return.
//       </p>
//     </div>

//     {/* RIGHT COLUMN */}
//     <div>
//       <h4>Tracking</h4>
//       <p>
//         While signed in, visit your Order History to track shipments for each
//         of your orders.
//       </p>

//       <h4 className="mt">Shipping</h4>
//       <p>
//         All shipments are FOB Dallas or FOB Cartersville. We reserve the right
//         to use our own discretion as to the carrier to be used on any shipment.
//       </p>
//       <p>
//         All efforts will be made to use the most cost effective shipping method
//         with Federal Express being our preferred carrier.
//       </p>
//       <p>
//         Customer's preferred carrier will be used if customer submits an
//         account number for said carrier.
//       </p>
//     </div>

//         </div>
//       )}

//     </div>
//     {/* CSS INSIDE SAME FILE */}
//       <style>{`
//         .info-row {
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//           padding: 22px 0;

//           cursor: pointer;
//           font-family: 'Times New Roman', serif;
//           letter-spacing: 1px;
//           background: white;
//         }

//         .info-row:hover {
//           opacity: 0.8;
//         }

//         .info-title {
//           font-size: 16px;
//           font-weight: 400;
//           color: #1a1a1a;
//         }

//         .plus {
//           font-size: 22px;
//           font-weight: 300;
//           color: #1a1a1a;
//         }

//         .arrow {
//           font-size: 22px;
//           color: #1a1a1a;
//         }

//         .info-content {
//           padding: 15px 0 30px 0;
//           font-size: 20px;
//           line-height: 24px;
//           color: #333;
//           font-family: 'Times New Roman', serif;
//           background: white;
//         }

//         .info-content ul {
//           padding-left: 20px;
//         }

//         .info-content li {
//           margin-bottom: 8px;
//         }
//           .shipping-grid {
//   display: grid;
//   grid-template-columns: 1fr 1fr;
//   gap: 50px;
//   margin-top: 20px;
// }

// .shipping-grid h4 {
//   font-size: 15px;
//   font-weight: 600;
//   margin-bottom: 10px;
//   font-family: 'Times New Roman', serif;
// }

// .shipping-grid p {
//   font-size: 14px;
//   line-height: 1.7;
//   color: #333;
//   margin-bottom: 12px;
//   font-family: 'Times New Roman', serif;
// }

// .mt {
//   margin-top: 25px;
// }

// .link-style {
//   text-decoration: underline;
//   cursor: pointer;
// }
//       `}</style>

//             {/* <div style={{ marginTop: "20px" }}>
//               <h3 style={{ fontWeight: "400", marginBottom: "10px" }}>
//                 DETAILS
//               </h3>

//               <ul style={{ lineHeight: "28px", fontSize: "14px" }}>
//                 <li>Guaranteed For Life</li>
//                 <li>Feather & down wrapped cushions</li>
//                 <li>High-resiliency foam core</li>
//                 <li>Engineered wood frame</li>
//                 <li>Includes 2 side pillows</li>
//               </ul>
//             </div> */}

//             <hr />

//             <div style={{ marginTop: "20px" }}>
//   <h3 style={{ fontWeight: "400", marginBottom: "10px", color: "black" }}>
//     <button
//       onClick={() => window.open("https://your-pdf-url.com/catalogue.pdf", "_blank")}
//       style={{
//         cursor: "pointer",
//         padding: "8px 16px",
//         backgroundColor: "#007bff",
//         color: "white",
//         border: "none",
//         borderRadius: "4px",
//         fontSize: "16px",
//       }}
//     >
//       Catalogue PDF
//     </button>
//   </h3>
// </div>
//           </div>
//         </div>
//       </section>

//       <Footer />
//       <Scrollbar />
//     </Fragment>
//   );
// };
>>>>>>> 610515b429affa2d59303e656d3d392ade5f8ae1

import React, { useState, Fragment, useEffect } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/footer";
import Scrollbar from "../../components/scrollbar";
import Logo from "../../images/logo.svg";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const ProductDetailPage = () => {
  const { slug } = useParams();
  const [openSection, setOpenSection] = useState(null);
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const stripHtml = (html) => {
    if (!html) return "";
    return html.replace(/<[^>]*>/g, "").replace(/&nbsp;/g, " ");
  };

  useEffect(() => {
    if (!slug) return;

    axios
      .get(`https://tanshu.checkour.work/api/product/product-detail/${slug}`)
      .then((res) => {
        const data = res.data.data.data;
        setProduct(data);
        setSelectedImage(data.featureimg || data.featuredImage);
        if (data.colors?.length > 0) setSelectedColor(data.colors[0].colorID);
        if (data.sizes?.length > 0) setSelectedSize(data.sizes[0].sizeID);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [slug]);

  // ===== USE EFFECT 2 - Related Products =====
  useEffect(() => {
    if (!slug) return;

    axios
      .get(`https://tanshu.checkour.work/api/product/related-product/${slug}`)
      .then((res) => {
        const related = res.data?.data?.data || [];
        setRelatedProducts(related);
      })
      .catch((err) => console.log(err));
  }, [slug]);

  // ===== LOADING CHECK =====
  if (!product) {
    return (
      <div style={{ textAlign: "center", marginTop: "200px" }}>
        <h2>Loading Product...</h2>
      </div>
    );
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
            alignItems: "flex-start",
          }}
        >
          {/* LEFT SIDE IMAGE */}
          <div style={{ flex: 1.2 }}>
            <img
              src={selectedImage || product.featureimg || product.featuredImage}
              alt={product.productName}
              style={{
                width: "100%",
                height: "400px",
                objectFit: "contain",
                marginBottom: "16px",
              }}
            />
            {product.gallery?.length > 0 && (
              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  flexWrap: "wrap",
                  marginTop: "12px",
                }}
              >
                <img
                  src={product.featuredImage}
                  alt="main"
                  onClick={() => setSelectedImage(product.featuredImage)}
                  style={{
                    width: "70px",
                    height: "70px",
                    objectFit: "cover",
                    cursor: "pointer",
                    border:
                      selectedImage === product.featuredImage
                        ? "2px solid black"
                        : "1px solid #ccc",
                  }}
                />
                {product.gallery.map((img, i) => (
                  <img
                    key={i}
                    src={img.imagePath}
                    alt={`gallery-${i}`}
                    onClick={() => setSelectedImage(img.imagePath)}
                    style={{
                      width: "70px",
                      height: "70px",
                      objectFit: "cover",
                      cursor: "pointer",
                      border:
                        selectedImage === img.imagePath
                          ? "2px solid black"
                          : "1px solid #ccc",
                    }}
                  />
                ))}
              </div>
            )}
          </div>

          {/* RIGHT SIDE DETAILS */}
          <div style={{ flex: 1 }}>
            {/* BREADCRUMB */}
            {/* <p style={{ fontSize: "13px", letterSpacing: "2px", color: "#888", marginBottom: "8px", fontFamily: "Times New Roman" }}>
              {product.categoryName?.toUpperCase()}
              {product.subCategoryName ? ` / ${product.subCategoryName.toUpperCase()}` : ""}
              {product.lowerCategoryName ? ` / ${product.lowerCategoryName.toUpperCase()}` : ""}
            </p> */}

            {/* PRODUCT NAME */}
            <h1
              style={{
                fontSize: "38px",
                fontWeight: "300",
                letterSpacing: "2px",
                fontFamily: "Times New Roman",
                marginBottom: "10px",
                color: "black",
              }}
            >
              {product.productName}
            </h1>

            {/* SUBTITLE */}
            {product.subTitle && (
              <p
                style={{
                  fontSize: "16px",
                  color: "#666",
                  marginBottom: "15px",
                  fontFamily: "Times New Roman",
                }}
              >
                {stripHtml(product.subTitle)}
              </p>
            )}

            {/* DESCRIPTION */}
            {/* {product.shortDescription && (
              <div style={{ marginBottom: "20px", padding: "15px", background: "#fafafa", borderLeft: "3px solid #1a1a1a" }}>
                <p style={{ fontSize: "13px", fontWeight: "600", letterSpacing: "1px", fontFamily: "Times New Roman", marginBottom: "6px" }}>DESCRIPTION</p>
                <p style={{ lineHeight: "26px", fontSize: "14px", color: "#444" }}>
                  {stripHtml(product.shortDescription)}
                </p>
              </div>
            )} */}

            {/* STYLE, SIZE, QUALITY, MOQ */}
            <div
              style={{
                marginBottom: "20px",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              {product.materialName && (
                <div
                  style={{ display: "flex", gap: "10px", alignItems: "center" }}
                >
                  <span
                    style={{
                      fontSize: "13px",
                      fontWeight: "600",
                      letterSpacing: "1px",
                      fontFamily: "Times New Roman",
                      minWidth: "80px",
                    }}
                  >
                    STYLE :
                  </span>
                  <span
                    style={{
                      fontSize: "14px",
                      color: "#555",
                      fontFamily: "Times New Roman",
                    }}
                  >
                    {product.materialName}
                  </span>
                </div>
              )}
              {product.sizes?.length > 0 && (
                <div
                  style={{ display: "flex", gap: "10px", alignItems: "center" }}
                >
                  <span
                    style={{
                      fontSize: "13px",
                      fontWeight: "600",
                      letterSpacing: "1px",
                      fontFamily: "Times New Roman",
                      minWidth: "80px",
                    }}
                  >
                    SIZE :
                  </span>
                  <div
                    style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}
                  >
                    {product.sizes.map((size) => (
                      <div
                        key={size.sizeID}
                        onClick={() => setSelectedSize(size.sizeID)}
                        style={{
                          padding: "5px 14px",
                          cursor: "pointer",
                          fontFamily: "Times New Roman",
                          border:
                            selectedSize === size.sizeID
                              ? "2px solid black"
                              : "1px solid #ccc",
                          fontSize: "13px",
                          background:
                            selectedSize === size.sizeID ? "#1a1a1a" : "white",
                          color:
                            selectedSize === size.sizeID ? "white" : "#333",
                        }}
                      >
                        {size.sizeName}
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {product.qualityName && (
                <div
                  style={{ display: "flex", gap: "10px", alignItems: "center" }}
                >
                  <span
                    style={{
                      fontSize: "13px",
                      fontWeight: "600",
                      letterSpacing: "1px",
                      fontFamily: "Times New Roman",
                      minWidth: "80px",
                    }}
                  >
                    QUALITY :
                  </span>
                  <span
                    style={{
                      fontSize: "14px",
                      color: "#555",
                      fontFamily: "Times New Roman",
                    }}
                  >
                    {product.qualityName}
                  </span>
                </div>
              )}
              {/* DETAILS */}
              {/* <div style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                <span style={{ fontSize: "13px", fontWeight: "600", letterSpacing: "1px", fontFamily: "Times New Roman", minWidth: "80px" }}>DETAILS :</span>
                {/* <div style={{ fontSize: "14px", color: "#555", fontFamily: "Times New Roman" }}>
                  {product.categoryName && <p style={{ margin: "2px 0" }}>Ca {product.categoryName}</p>}
                  {product.subCategoryName && <p style={{ margin: "2px 0" }}>Sub Category: {product.subCategoryName}</p>}
                  {product.lowerCategoryName && <p style={{ margin: "2px 0" }}>Type: {product.lowerCategoryName}</p>}
                </div> */}
            </div>
            {/* MOQ */}
            {/* <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                <span style={{ fontSize: "13px", fontWeight: "600", letterSpacing: "1px", fontFamily: "Times New Roman", minWidth: "80px" }}>MOQ :</span>
                <span style={{ fontSize: "14px", color: "#555", fontFamily: "Times New Roman" }}>
                  {product.moq || "1 Piece"}
                </span>
              </div>
            </div> */}

            {/* COLORS */}
            {product.colors?.length > 0 && (
              <div style={{ marginBottom: "25px" }}>
                <p
                  style={{
                    fontSize: "13px",
                    fontWeight: "600",
                    letterSpacing: "1px",
                    fontFamily: "Times New Roman",
                    marginBottom: "10px",
                  }}
                >
                  COLOR :
                </p>
                <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                  {product.colors.map((color) => (
                    <div
                      key={color.colorID}
                      onClick={() => setSelectedColor(color.colorID)}
                      title={color.colorName}
                      style={{
                        width: "40px",
                        height: "40px",
                        cursor: "pointer",
                        overflow: "hidden",
                        border:
                          selectedColor === color.colorID
                            ? "2px solid black"
                            : "1px solid #ccc",
                      }}
                    >
                      {color.colorImage ? (
                        <img
                          src={color.colorImage}
                          alt={color.colorName}
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                        />
                      ) : (
                        <div
                          style={{
                            width: "100%",
                            height: "100%",
                            background: "#ddd",
                          }}
                        />
                      )}
                    </div>
                  ))}
                </div>
                <p
                  style={{ fontSize: "12px", color: "#888", marginTop: "6px" }}
                >
                  {
                    product.colors.find((c) => c.colorID === selectedColor)
                      ?.colorName
                  }
                </p>
              </div>
            )}

            <hr />

            {/* ACCORDION */}
            <div style={{ marginTop: "20px" }}>
              <div
                className="info-row"
                onClick={() => toggleSection("description")}
              >
                <div className="info-title">DESCRIPTION</div>
                <div className="plus">
                  {openSection === "description" ? "−" : "+"}
                </div>
              </div>

              {openSection === "description" && (
                <div
                  className="info-content"
                  dangerouslySetInnerHTML={{ __html: product.description }}
                />
              )}

              <div
                className="info-row"
                onClick={() => toggleSection("details")}
              >
                <div className="info-title">DETAILS</div>
                <div className="plus">
                  {openSection === "details" ? "−" : "+"}
                </div>
              </div>
              {openSection === "details" && (
                <div className="info-content">
                  <ul>
                    {product.materialName && (
                      <li>
                        <strong>Style/Material:</strong> {product.materialName}
                      </li>
                    )}
                    {product.qualityName && (
                      <li>
                        <strong>Quality:</strong> {product.qualityName}
                      </li>
                    )}
                    {product.categoryName && (
                      <li>
                        <strong>Category:</strong> {product.categoryName}
                      </li>
                    )}
                    {product.subCategoryName && (
                      <li>
                        <strong>Sub Category:</strong> {product.subCategoryName}
                      </li>
                    )}
                    {product.lowerCategoryName && (
                      <li>
                        <strong>Type:</strong> {product.lowerCategoryName}
                      </li>
                    )}
                    {/* <li><strong>MOQ:</strong> {product.moq || "1 Piece"}</li> */}
                  </ul>
                </div>
              )}

              <div
                className="info-row"
                onClick={() => toggleSection("shipping")}
              >
                <div className="info-title">SHIPPING & RETURNS</div>
                <div className="plus">
                  {openSection === "shipping" ? "−" : "+"}
                </div>
              </div>
              {openSection === "shipping" && (
                <div className="info-content">
                  <div>
                    <h4>Returns</h4>
                    <p>
                      Our return policy is 30 days for non-defective items.
                      There is a 20% restocking fee on all returns of
                      non-defective products.
                    </p>
                    <p>
                      We do not accept returns for pillows, throws, poufs, wall
                      art or rug samples.
                    </p>
                  </div>
                  <div style={{ marginTop: "16px" }}>
                    <h4>Tracking</h4>
                    <p>
                      While signed in, visit your Order History to track
                      shipments.
                    </p>
                    <h4 style={{ marginTop: "16px" }}>Shipping</h4>
                    <p>
                      All efforts will be made to use the most cost effective
                      shipping method.
                    </p>
                  </div>
                </div>
              )}
            </div>

            <style>{`
              .info-row { display: flex; justify-content: space-between; align-items: center; padding: 22px 0; cursor: pointer; font-family: 'Times New Roman', serif; letter-spacing: 1px; background: white; border-bottom: 1px solid #eee; }
              .info-row:hover { opacity: 0.8; }
              .info-title { font-size: 16px; font-weight: 400; color: #1a1a1a; }
              .plus { font-size: 22px; font-weight: 300; color: #1a1a1a; }
              .arrow { font-size: 22px; color: #1a1a1a; }
              .info-content { padding: 15px 0 30px 0; font-size: 15px; line-height: 1.8; color: #333; font-family: 'Times New Roman', serif; background: white; }
              .info-content ul { padding-left: 20px; }
              .info-content li { margin-bottom: 8px; }
              .info-content h4 { font-size: 14px; font-weight: 600; margin-bottom: 8px; }
              .link-style { text-decoration: underline; cursor: pointer; }
            `}</style>

            <hr />

            {product.cataloguePDF && (
              <div style={{ marginTop: "20px" }}>
                <button
                  onClick={() => window.open(product.cataloguePDF, "_blank")}
                  style={{
                    cursor: "pointer",
                    padding: "10px 24px",
                    backgroundColor: "#1a1a1a",
                    color: "white",
                    border: "none",
                    fontSize: "14px",
                    letterSpacing: "1px",
                    fontFamily: "Times New Roman",
                  }}
                >
                  VIEW CATALOGUE PDF
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ===== RELATED PRODUCTS ===== */}
      <section style={{ padding: "60px 80px", background: "white" }}>
        <h2
          style={{
            fontSize: "28px",
            fontWeight: "300",
            letterSpacing: "3px",
            fontFamily: "Times New Roman",
            marginBottom: "40px",
            color: "#1a1a1a",
          }}
        >
          RELATED PRODUCTS
        </h2>
<<<<<<< HEAD
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "40px" }}>
          {relatedProducts.length > 0 ? relatedProducts.map((rp) => (
            <Link key={rp.productID} to={`/product-detail/${rp.slug}`}
              style={{ textDecoration: "none", color: "inherit" }}
              onClick={() => window.scrollTo(0, 0)}
            >
              <div>
                <div style={{ overflow: "hidden", marginBottom: "14px" }}>
                  <img
                    src={rp.featureimg}
                    alt={rp.productName}
                    style={{  padding: "10px",
  borderRadius: "6px",
  boxShadow: "rgba(0, 0, 0, 0.09) 1px 4px 8px 1px",
  background: "rgb(255, 255, 255)" }}
                    onMouseEnter={e => e.currentTarget.style.transform = "scale(1.03)"}
                    onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
                  />
=======
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "40px",
          }}
        >
          {relatedProducts.length > 0
            ? relatedProducts.map((rp) => (
                <Link
                  key={rp.productID}
                  to={`/product-detail/${rp.slug}`}
                  style={{ textDecoration: "none", color: "inherit" }}
                  onClick={() => window.scrollTo(0, 0)}
                >
                  <div>
                    <div style={{ overflow: "hidden", marginBottom: "14px" }}>
                      <img
                        src={rp.featureimg}
                        alt={rp.productName}
                        style={{
                          width: "100%",
                          height: "280px",
                          objectFit: "cover",
                          transition: "transform 0.4s ease",
                        }}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.transform = "scale(1.03)")
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.transform = "scale(1)")
                        }
                      />
                    </div>
                    <h3
                      style={{
                        fontSize: "16px",
                        fontWeight: "300",
                        letterSpacing: "1px",
                        fontFamily: "Times New Roman",
                        color: "#1a1a1a",
                        textAlign: "center",
                      }}
                    >
                      {rp.productName}
                    </h3>
                  </div>
                </Link>
              ))
            : [1, 2, 3].map((i) => (
                <div
                  key={i}
                  style={{
                    background: "#eee",
                    height: "280px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#aaa",
                    fontFamily: "Times New Roman",
                  }}
                >
                  No Related Product
>>>>>>> 610515b429affa2d59303e656d3d392ade5f8ae1
                </div>
              ))}
        </div>
      </section>

      <Footer />
      <Scrollbar />
    </Fragment>
  );
  // return (
  //   <Fragment>
  //     <Navbar Logo={Logo} />

  //     <section style={{ background: "White", padding: "100px 0" }}>
  //       <div style={{ display: "flex", gap: "80px", padding: "0 80px", alignItems: "flex-start" }}>

  //         {/* LEFT SIDE IMAGE */}
  //         <div style={{ flex: 1.2 }}>

  //           {/* MAIN IMAGE */}
  //           <img
  //            src={selectedImage || product.featureimg || product.featuredImage}
  //             alt={product.productName}
  //             style={{ width: "100%", height: "auto", objectFit: "cover", marginBottom: "16px" }}
  //           />

  //           {/* GALLERY THUMBNAILS */}
  //           {product.gallery?.length > 0 && (
  //             <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginTop: "12px" }}>
  //               <img
  //                 src={product.featuredImage}
  //                 alt="main"
  //                 onClick={() => setSelectedImage(product.featuredImage)}
  //                 style={{
  //                   width: "70px", height: "70px", objectFit: "cover", cursor: "pointer",
  //                   border: selectedImage === product.featuredImage ? "2px solid black" : "1px solid #ccc"
  //                 }}
  //               />
  //               {product.gallery.map((img, i) => (
  //                 <img
  //                   key={i}
  //                   src={img.imagePath}
  //                   alt={`gallery-${i}`}
  //                   onClick={() => setSelectedImage(img.imagePath)}
  //                   style={{
  //                     width: "70px", height: "70px", objectFit: "cover", cursor: "pointer",
  //                     border: selectedImage === img.imagePath ? "2px solid black" : "1px solid #ccc"
  //                   }}
  //                 />
  //               ))}
  //             </div>
  //           )}
  //         </div>

  //         {/* RIGHT SIDE DETAILS */}
  //         <div style={{ flex: 1 }}>

  //           {/* CATEGORY BREADCRUMB */}
  //           <p style={{ fontSize: "13px", letterSpacing: "2px", color: "#888", marginBottom: "8px", fontFamily: "Times New Roman" }}>
  //             {product.categoryName?.toUpperCase()}
  //             {product.subCategoryName ? ` / ${product.subCategoryName.toUpperCase()}` : ""}
  //             {product.lowerCategoryName ? ` / ${product.lowerCategoryName.toUpperCase()}` : ""}
  //           </p>

  //           {/* PRODUCT NAME */}
  //           <h1 style={{ fontSize: "38px", fontWeight: "300", letterSpacing: "2px", fontFamily: "Times New Roman", marginBottom: "10px", color: "black" }}>
  //             {product.productName}
  //           </h1>

  //           {/* SUBTITLE */}
  //           {product.subTitle && (
  //             <p style={{ fontSize: "16px", color: "#666", marginBottom: "15px", fontFamily: "Times New Roman" }}>
  //               {stripHtml(product.subTitle)}
  //             </p>
  //           )}

  //           {/* SHORT DESCRIPTION */}
  //           {product.shortDescription && (
  //             <p style={{ lineHeight: "26px", fontSize: "15px", color: "#444", marginBottom: "20px" }}>
  //               {stripHtml(product.shortDescription)}
  //             </p>
  //           )}

  //           {/* MATERIAL & QUALITY */}
  //           {(product.materialName || product.qualityName) && (
  //             <div style={{ display: "flex", gap: "30px", marginBottom: "20px" }}>
  //               {product.materialName && (
  //                 <p style={{ fontSize: "14px", color: "#555" }}>
  //                   <strong>Material:</strong> {product.materialName}
  //                 </p>
  //               )}
  //               {product.qualityName && (
  //                 <p style={{ fontSize: "14px", color: "#555" }}>
  //                   <strong>Quality:</strong> {product.qualityName}
  //                 </p>
  //               )}
  //             </div>
  //           )}

  //           {/* COLORS */}
  //           {product.colors?.length > 0 && (
  //             <div style={{ marginBottom: "20px" }}>
  //               <p style={{ fontSize: "13px", letterSpacing: "1px", marginBottom: "10px", fontFamily: "Times New Roman" }}>
  //                 SELECT COLOR
  //               </p>
  //               <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
  //                 {product.colors.map((color) => (
  //                   <div
  //                     key={color.colorID}
  //                     onClick={() => setSelectedColor(color.colorID)}
  //                     title={color.colorName}
  //                     style={{
  //                       width: "40px", height: "40px", cursor: "pointer", overflow: "hidden",
  //                       border: selectedColor === color.colorID ? "2px solid black" : "1px solid #ccc"
  //                     }}
  //                   >
  //                     {color.colorImage ? (
  //                       <img src={color.colorImage} alt={color.colorName}
  //                         style={{ width: "100%", height: "100%", objectFit: "cover" }} />
  //                     ) : (
  //                       <div style={{ width: "100%", height: "100%", background: "#ddd" }} />
  //                     )}
  //                   </div>
  //                 ))}
  //               </div>
  //               <p style={{ fontSize: "12px", color: "#888", marginTop: "6px" }}>
  //                 {product.colors.find(c => c.colorID === selectedColor)?.colorName}
  //               </p>
  //             </div>
  //           )}

  //           {/* SIZES */}
  //           {product.sizes?.length > 0 && (
  //             <div style={{ marginBottom: "25px" }}>
  //               <p style={{ fontSize: "13px", letterSpacing: "1px", marginBottom: "10px", fontFamily: "Times New Roman" }}>
  //                 SELECT SIZE
  //               </p>
  //               <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
  //                 {product.sizes.map((size) => (
  //                   <div
  //                     key={size.sizeID}
  //                     onClick={() => setSelectedSize(size.sizeID)}
  //                     style={{
  //                       padding: "8px 18px", cursor: "pointer", fontFamily: "Times New Roman",
  //                       border: selectedSize === size.sizeID ? "2px solid black" : "1px solid #ccc",
  //                       fontSize: "14px"
  //                     }}
  //                   >
  //                     {size.sizeName}
  //                   </div>
  //                 ))}
  //               </div>
  //             </div>
  //           )}

  //           <hr />

  //           {/* ACCORDION SECTIONS */}
  //           <div style={{ marginTop: "40px" }}>

  //             {/* VIEW IN STOCK */}
  //             <div className="info-row">
  //               <div className="info-title">VIEW IN STOCK ITEMS</div>
  //               <div className="arrow">›</div>
  //             </div>

  //             {/* DESCRIPTION */}
  //             <div className="info-row" onClick={() => toggleSection("description")}>
  //               <div className="info-title">DESCRIPTION</div>
  //               <div className="plus">{openSection === "description" ? "−" : "+"}</div>
  //             </div>
  //             {openSection === "description" && (
  //               <div className="info-content">
  //                 <p>{stripHtml(product.description)}</p>
  //               </div>
  //             )}

  //             {/* DETAILS */}
  //             <div className="info-row" onClick={() => toggleSection("details")}>
  //               <div className="info-title">DETAILS</div>
  //               <div className="plus">{openSection === "details" ? "−" : "+"}</div>
  //             </div>
  //             {openSection === "details" && (
  //               <div className="info-content">
  //                 <ul>
  //                   {product.materialName && <li><strong>Material:</strong> {product.materialName}</li>}
  //                   {product.qualityName && <li><strong>Quality:</strong> {product.qualityName}</li>}
  //                   {product.categoryName && <li><strong>Category:</strong> {product.categoryName}</li>}
  //                   {product.subCategoryName && <li><strong>Sub Category:</strong> {product.subCategoryName}</li>}
  //                   {product.lowerCategoryName && <li><strong>Type:</strong> {product.lowerCategoryName}</li>}
  //                 </ul>
  //               </div>
  //             )}

  //             {/* DIMENSIONS */}
  //             {/* <div className="info-row" onClick={() => toggleSection("dimensions")}>
  //               <div className="info-title">DIMENSIONS</div>
  //               <div className="plus">{openSection === "dimensions" ? "−" : "+"}</div>
  //             </div>
  //             {openSection === "dimensions" && (
  //               <div className="info-content">
  //                 <p>Please contact us for detailed dimensions.</p>
  //               </div>
  //             )} */}

  //             {/* SHIPPING & RETURNS */}
  //             <div className="info-row" onClick={() => toggleSection("shipping")}>
  //               <div className="info-title">SHIPPING & RETURNS</div>
  //               <div className="plus">{openSection === "shipping" ? "−" : "+"}</div>
  //             </div>
  //             {openSection === "shipping" && (
  //               <div className="info-content">
  //                 <div>
  //                   <h4>Returns</h4>
  //                   <p>Our return policy is 30 days for non-defective items. There is a 20% restocking fee on all returns of non-defective products.</p>
  //                   <p>We do not accept returns for pillows, throws, poufs, wall art or rug samples.</p>
  //                 </div>
  //                 <div style={{ marginTop: "16px" }}>
  //                   <h4>Tracking</h4>
  //                   <p>While signed in, visit your Order History to track shipments.</p>
  //                   <h4 style={{ marginTop: "16px" }}>Shipping</h4>
  //                   <p>All efforts will be made to use the most cost effective shipping method.</p>
  //                 </div>
  //               </div>
  //             )}
  //           </div>

  //           <style>{`
  //             .info-row { display: flex; justify-content: space-between; align-items: center; padding: 22px 0; cursor: pointer; font-family: 'Times New Roman', serif; letter-spacing: 1px; background: white; border-bottom: 1px solid #eee; }
  //             .info-row:hover { opacity: 0.8; }
  //             .info-title { font-size: 16px; font-weight: 400; color: #1a1a1a; }
  //             .plus { font-size: 22px; font-weight: 300; color: #1a1a1a; }
  //             .arrow { font-size: 22px; color: #1a1a1a; }
  //             .info-content { padding: 15px 0 30px 0; font-size: 15px; line-height: 1.8; color: #333; font-family: 'Times New Roman', serif; background: white; }
  //             .info-content ul { padding-left: 20px; }
  //             .info-content li { margin-bottom: 8px; }
  //             .info-content h4 { font-size: 14px; font-weight: 600; margin-bottom: 8px; }
  //             .link-style { text-decoration: underline; cursor: pointer; }
  //             .mt { margin-top: 25px; }
  //           `}</style>

  //           <hr />

  //           {/* CATALOGUE PDF BUTTON */}
  //           {product.cataloguePDF && (
  //             <div style={{ marginTop: "20px" }}>
  //               <button
  //                 onClick={() => window.open(product.cataloguePDF, "_blank")}
  //                 style={{
  //                   cursor: "pointer", padding: "10px 24px",
  //                   backgroundColor: "#1a1a1a", color: "white",
  //                   border: "none", fontSize: "14px",
  //                   letterSpacing: "1px", fontFamily: "Times New Roman"
  //                 }}
  //               >
  //                 VIEW CATALOGUE PDF
  //               </button>
  //             </div>
  //           )}

  //         </div>
  //       </div>
  //     </section>

  //     <Footer />
  //     <Scrollbar />
  //   </Fragment>
  // );
};

export default ProductDetailPage;
