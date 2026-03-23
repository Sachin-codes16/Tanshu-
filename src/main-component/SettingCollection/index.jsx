// import React, { Fragment, useState } from "react";
// import { Link } from "react-router-dom";
// import Header from "../../components/header";
// import Footer from "../../components/footer";
// import WhiteSofa from "../../images/products/WhiteSofa.jpg";
// import BeigeSofa from "../../images/products/BeigeSofa.jpg";
// import GrayeSofa from "../../images/products/GrayeSofa.jpg";
// import BrownSofa from "../../images/products/BrownSofa.jpg";
// import BlackSofa from "../../images/products/BlackSofa.jpg";

// import img6 from '../../images/products/set3_image_1.jpg'
// import img7 from '../../images/products/set3_image_2.jpg'


// const SeatingCollection = () => {
//   const [gridView, setGridView] = useState('two');

//   const products = [
//     { id: 1, image: WhiteSofa, title: "CLOUD MODULAR 3-PIECE SOFA", subtitle: "Available in multiple depths & fabrics", colors: ["#e8e4dc", "#d4c9b8", "#c4b49a", "#b8a882", "#a89060", "#8c7448", "#6b5a38", "#4a3c28", "#2a2018", "#1a1208", "#3a3028", "#5a4a38"], memberSalePrice: "$5,685", salePrice: "$6,900", regularPrice: "$8,130", saveText: "SAVE 40% ON SELECT ITEMS", onSale: true },
//     { id: 2, image: WhiteSofa, title: "CLOUD MODULAR 3-PIECE SOFA", subtitle: "Available in multiple depths & fabrics", colors: ["#e8e4dc", "#d4c9b8", "#c4b49a", "#b8a882", "#a89060", "#8c7448", "#6b5a38", "#4a3c28", "#2a2018", "#1a1208", "#3a3028", "#5a4a38"], memberSalePrice: "$5,685", salePrice: "$6,900", regularPrice: "$8,130", saveText: "SAVE 40% ON SELECT ITEMS", onSale: true },
//     { id: 3, image: WhiteSofa, title: "CLOUD MODULAR 3-PIECE SOFA", subtitle: "Available in multiple depths & fabrics", colors: ["#e8e4dc", "#d4c9b8", "#c4b49a", "#b8a882", "#a89060", "#8c7448", "#6b5a38", "#4a3c28", "#2a2018", "#1a1208", "#3a3028", "#5a4a38"], memberSalePrice: "$5,685", salePrice: "$6,900", regularPrice: "$8,130", saveText: "SAVE 40% ON SELECT ITEMS", onSale: true },
//     { id: 4, image: BeigeSofa, title: "CLOUD MODULAR 4-PIECE CHAISE SECTIONAL", subtitle: "Available in multiple fabrics", colors: ["#e8e4dc", "#d4c9b8", "#c4b49a", "#b8a882", "#a89060", "#8c7448", "#6b5a38", "#4a3c28", "#2a2018", "#1a1208", "#3a3028", "#5a4a38"], memberSalePrice: "$7,090", salePrice: "$8,605", regularPrice: "$10,140", saveText: "SAVE 35% - 40% ON SELECT ITEMS", onSale: true },
//     { id: 5, image: BeigeSofa, title: "CLOUD MODULAR 4-PIECE CHAISE SECTIONAL", subtitle: "Available in multiple fabrics", colors: ["#e8e4dc", "#d4c9b8", "#c4b49a", "#b8a882", "#a89060", "#8c7448", "#6b5a38", "#4a3c28", "#2a2018", "#1a1208", "#3a3028", "#5a4a38"], memberSalePrice: "$7,090", salePrice: "$8,605", regularPrice: "$10,140", saveText: "SAVE 35% - 40% ON SELECT ITEMS", onSale: true },
//     { id: 6, image: BeigeSofa, title: "CLOUD MODULAR 4-PIECE CHAISE SECTIONAL", subtitle: "Available in multiple fabrics", colors: ["#e8e4dc", "#d4c9b8", "#c4b49a", "#b8a882", "#a89060", "#8c7448", "#6b5a38", "#4a3c28", "#2a2018", "#1a1208", "#3a3028", "#5a4a38"], memberSalePrice: "$7,090", salePrice: "$8,605", regularPrice: "$10,140", saveText: "SAVE 35% - 40% ON SELECT ITEMS", onSale: true },
//     { id: 7, image: BrownSofa, title: "CLOUD MODULAR 4-PIECE SOFA", subtitle: "Available in multiple fabrics", colors: ["#e8e4dc", "#d4c9b8", "#c4b49a", "#b8a882", "#a89060", "#8c7448", "#6b5a38", "#4a3c28", "#2a2018", "#1a1208", "#3a3028", "#5a4a38"], memberSalePrice: "$7,300", salePrice: "$8,860", regularPrice: "$10,440", saveText: "SAVE 40% ON SELECT ITEMS", onSale: true },
//     { id: 8, image: BrownSofa, title: "CLOUD MODULAR 4-PIECE SOFA", subtitle: "Available in multiple fabrics", colors: ["#e8e4dc", "#d4c9b8", "#c4b49a", "#b8a882", "#a89060", "#8c7448", "#6b5a38", "#4a3c28", "#2a2018", "#1a1208", "#3a3028", "#5a4a38"], memberSalePrice: "$7,300", salePrice: "$8,860", regularPrice: "$10,440", saveText: "SAVE 40% ON SELECT ITEMS", onSale: true },
//     { id: 9, image: BrownSofa, title: "CLOUD MODULAR 4-PIECE SOFA", subtitle: "Available in multiple fabrics", colors: ["#e8e4dc", "#d4c9b8", "#c4b49a", "#b8a882", "#a89060", "#8c7448", "#6b5a38", "#4a3c28", "#2a2018", "#1a1208", "#3a3028", "#5a4a38"], memberSalePrice: "$7,300", salePrice: "$8,860", regularPrice: "$10,440", saveText: "SAVE 40% ON SELECT ITEMS", onSale: true },

//     { id: 10, image: GrayeSofa, title: "CLOUD MODULAR 2-PIECE LOVESEAT", subtitle: "Available in multiple depths & fabrics", colors: ["#e8e4dc", "#d4c9b8", "#c4b49a", "#b8a882", "#a89060", "#6b5a38", "#4a3c28", "#2a2018", "#1a1208"], memberSalePrice: "$3,890", salePrice: "$4,720", regularPrice: "$5,580", saveText: "SAVE 40% ON SELECT ITEMS", onSale: true },
//     { id: 11, image: GrayeSofa, title: "CLOUD MODULAR 2-PIECE LOVESEAT", subtitle: "Available in multiple depths & fabrics", colors: ["#e8e4dc", "#d4c9b8", "#c4b49a", "#b8a882", "#a89060", "#6b5a38", "#4a3c28", "#2a2018", "#1a1208"], memberSalePrice: "$3,890", salePrice: "$4,720", regularPrice: "$5,580", saveText: "SAVE 40% ON SELECT ITEMS", onSale: true },
//     { id: 12, image: GrayeSofa, title: "CLOUD MODULAR 2-PIECE LOVESEAT", subtitle: "Available in multiple depths & fabrics", colors: ["#e8e4dc", "#d4c9b8", "#c4b49a", "#b8a882", "#a89060", "#6b5a38", "#4a3c28", "#2a2018", "#1a1208"], memberSalePrice: "$3,890", salePrice: "$4,720", regularPrice: "$5,580", saveText: "SAVE 40% ON SELECT ITEMS", onSale: true },

//     { id: 13, image: BlackSofa, title: "CLOUD TRACK ARM SOFA", subtitle: "Available in multiple fabrics", colors: ["#e8e4dc", "#d4c9b8", "#c4b49a", "#b8a882", "#8c7448", "#4a3c28", "#2a2018"], memberPrice: "$4,719", regularPrice: "$7,940", onSale: false },
//     { id: 14, image: img6, title: "CLOUD SQUARE ARM SOFA", subtitle: "Available in multiple fabrics", colors: ["#e8e4dc", "#d4c9b8", "#c4b49a", "#b8a882", "#a89060", "#6b5a38"], memberPrice: "$3,925", regularPrice: "$6,540", onSale: false },
//     { id: 15, image: img7, title: "MAXWELL DEEP SEAT SOFA", subtitle: "Available in multiple depths & fabrics", colors: ["#e8e4dc", "#d4c9b8", "#c4b49a", "#b8a882", "#6b5a38", "#4a3c28"], memberPrice: "$3,125", regularPrice: "$5,210", onSale: false },
//     // { id: 8, image: img8, title: "RESTORATION FABRIC SOFA", subtitle: "Available in multiple fabrics", colors: ["#e8e4dc","#d4c9b8","#c4b49a","#b8a882","#a89060"], memberPrice: "$2,895", regularPrice: "$4,825", onSale: false },
//     // { id: 9, image: img1, title: "CLOUD BENCH SEAT SOFA", subtitle: "Available in multiple fabrics", colors: ["#e8e4dc","#d4c9b8","#c4b49a","#b8a882","#a89060","#8c7448"], memberPrice: "$3,450", regularPrice: "$5,750", onSale: false },
//     // { id: 10, image: img2, title: "CLOUD CHAISE SECTIONAL", subtitle: "Available in multiple fabrics", colors: ["#e8e4dc","#d4c9b8","#c4b49a","#b8a882","#8c7448","#4a3c28"], memberSalePrice: "$6,200", salePrice: "$7,500", regularPrice: "$9,100", saveText: "SAVE 35% ON SELECT ITEMS", onSale: true },
//     // { id: 11, image: img3, title: "CLOUD MODULAR 5-PIECE SECTIONAL", subtitle: "Available in multiple fabrics", colors: ["#e8e4dc","#d4c9b8","#c4b49a","#b8a882"], memberSalePrice: "$8,900", salePrice: "$10,800", regularPrice: "$12,700", saveText: "SAVE 40% ON SELECT ITEMS", onSale: true },
//     // { id: 12, image: img4, title: "CLOUD LOVESEAT", subtitle: "Available in multiple depths & fabrics", colors: ["#e8e4dc","#d4c9b8","#c4b49a","#b8a882","#a89060","#8c7448","#6b5a38"], memberPrice: "$2,650", regularPrice: "$4,420", onSale: false },
//   ];

//   const cols = gridView === 'three' ? 3 : gridView === 'two' ? 2 : 1;

//   return (
//     <Fragment>
//       <Header />

//       <section style={{ background: "White", minHeight: "100vh", paddingBottom: "80px" }}>
//         <div style={{ padding: "40px 60px 0" }}>

//           {/* PAGE TITLE */}
//           <div style={{ marginBottom: "20px" }}>
//             <h1 style={{ fontSize: "30px", fontWeight: "300", letterSpacing: "4px", fontFamily: "Times New Roman", marginBottom: "6px", color: "black" }}>
//               THE ORIGINAL CLOUD
//             </h1>
//             <p style={{ color: "#b5282a", fontSize: "15px", letterSpacing: "1px", fontFamily: "Times New Roman" }}>
//               SAVE 35% - 40% ON SELECT ITEMS
//             </p>
//           </div>

//           {/* FILTER BAR */}
//           <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 0", borderTop: "1px solid white", borderBottom: "1px solid white", marginBottom: "40px" }}>

//             {/* LEFT FILTERS */}
//             <div style={{ display: "flex", alignItems: "center", gap: "28px" }}>
//               <label style={{ display: "flex", alignItems: "center", gap: "7px", cursor: "pointer", fontSize: "15px", letterSpacing: "1px", fontFamily: "Times New Roman", color: "#b5282a" }}>
//                 <input type="checkbox" style={{ width: "13px", height: "13px" }} /> SALE
//               </label>
//               <label style={{ display: "flex", alignItems: "center", gap: "7px", cursor: "pointer", fontSize: "13px", letterSpacing: "1px", fontFamily: "Times New Roman", color: "#333" }}>
//                 <input type="checkbox" style={{ width: "13px", height: "13px" }} /> IN-STOCK
//               </label>
//               <span style={{ fontSize: "15px", letterSpacing: "1px", fontFamily: "Times New Roman", color: "#333", cursor: "pointer" }}>PRODUCT TYPE &#9662;</span>
//               <span style={{ fontSize: "15px", letterSpacing: "1px", fontFamily: "Times New Roman", color: "#333", cursor: "pointer" }}>SECTIONAL CONFIGURATION &#9662;</span>
//               <span style={{ fontSize: "15px", letterSpacing: "1px", fontFamily: "Times New Roman", color: "#888" }}>RESULTS ({products.length})</span>
//             </div>

//             {/* RIGHT - SORT + VIEW TOGGLE */}
//             <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
//               <span style={{ fontSize: "13px", letterSpacing: "1px", fontFamily: "Times New Roman", color: "#333", cursor: "pointer" }}>SORT: FEATURED &#9662;</span>

//               {/* 3-column toggle */}
//               <button onClick={() => setGridView('three')} style={{ background: "none", border: "none", cursor: "pointer", padding: "2px", opacity: gridView === 'three' ? 1 : 0.4 }}>
//                 <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
//                   <rect x="0" y="0" width="6" height="6" fill="#1a1a1a" />
//                   <rect x="8" y="0" width="6" height="6" fill="#1a1a1a" />
//                   <rect x="16" y="0" width="6" height="6" fill="#1a1a1a" />
//                   <rect x="0" y="8" width="6" height="6" fill="#1a1a1a" />
//                   <rect x="8" y="8" width="6" height="6" fill="#1a1a1a" />
//                   <rect x="16" y="8" width="6" height="6" fill="#1a1a1a" />
//                   <rect x="0" y="16" width="6" height="6" fill="#1a1a1a" />
//                   <rect x="8" y="16" width="6" height="6" fill="#1a1a1a" />
//                   <rect x="16" y="16" width="6" height="6" fill="#1a1a1a" />
//                 </svg>
//               </button>

//               {/* 2-column toggle */}
//               <button onClick={() => setGridView('two')} style={{ background: "none", border: "none", cursor: "pointer", padding: "2px", opacity: gridView === 'two' ? 1 : 0.4 }}>
//                 <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
//                   <rect x="0" y="0" width="10" height="10" fill="#1a1a1a" />
//                   <rect x="12" y="0" width="10" height="10" fill="#1a1a1a" />
//                   <rect x="0" y="12" width="10" height="10" fill="#1a1a1a" />
//                   <rect x="12" y="12" width="10" height="10" fill="#1a1a1a" />
//                 </svg>
//               </button>

//             </div>
//           </div>

//           {/* PRODUCT GRID */}
//           <div style={{
//             display: "grid",
//             gridTemplateColumns: `repeat(${cols}, 1fr)`,
//             gap: cols === 3 ? "50px 30px" : "60px 40px",
//           }}>
//             {products.map((product) => (
//               <Link to={`/product-detail/${product.id}`} key={product.id} style={{ textDecoration: "none", color: "inherit" }}>
//                 <div>
//                   {/* IMAGE */}
//                   <div style={{ position: "relative", overflow: "hidden", marginBottom: "18px", background: "white" }}>
//                     <img
//                       src={product.image}
//                       alt={product.title}
//                       style={{
//                         width: "100%",
//                         height: cols === 3 ? "320px" : cols === 2 ? "460px" : "600px",
//                         objectFit: "cover",
//                         display: "block",
//                         transition: "transform 0.4s ease"
//                       }}
//                       onMouseEnter={e => e.currentTarget.style.transform = "scale(1.03)"}
//                       onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
//                     />
//                     <div style={{ position: "absolute", right: "12px", top: "50%", transform: "translateY(-50%)", fontSize: "20px", color: "#555", background: "rgba(255,255,255,0.6)", width: "32px", height: "32px", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>›</div>
//                   </div>

//                   {/* TITLE */}
//                   <h3 style={{ fontSize: cols === 3 ? "15px" : "18px", fontWeight: "300", letterSpacing: "2px", fontFamily: "Times New Roman", color: "#1a1a1a", textAlign: "center", marginBottom: "6px" }}>
//                     {product.title}
//                   </h3>

//                   {/* SUBTITLE */}
//                   <p style={{ fontSize: "15px", color: "#666", textAlign: "center", marginBottom: "10px", fontFamily: "Times New Roman" }}>
//                     {product.subtitle}
//                   </p>

//                   {/* COLOR SWATCHES */}
//                   <div style={{ display: "flex", justifyContent: "center", gap: "2px", marginBottom: "12px" }}>
//                     {product.colors.map((color, i) => (
//                       <div key={i} style={{ width: "16px", height: "16px", background: color, border: i === 0 ? "1.5px solid #555" : "1px solid transparent", cursor: "pointer" }}></div>
//                     ))}
//                   </div>

//                   {/* PRICE */}
//                   {product.onSale ? (
//                     <div style={{ textAlign: "center" }}>
//                       <p style={{ fontSize: "13px", color: "#b5282a", fontFamily: "Times New Roman", marginBottom: "4px" }}>
//                         Starting at <strong>{product.memberSalePrice} Member Sale</strong> / {product.salePrice} Sale / {product.regularPrice} Regular
//                       </p>
//                       <p style={{ fontSize: "12px", color: "#b5282a", textDecoration: "underline", cursor: "pointer", fontFamily: "Times New Roman" }}>
//                         {product.saveText}
//                       </p>
//                     </div>
//                   ) : (
//                     <p style={{ textAlign: "center", fontSize: "13px", color: "#333", fontFamily: "Times New Roman" }}>
//                       Starting at <strong>{product.memberPrice} Member</strong> / {product.regularPrice} Regular
//                     </p>
//                   )}
//                 </div>
//               </Link>
//             ))}
//           </div>

//         </div>
//       </section>

//       <Footer />
//     </Fragment>
//   );
// };

// export default SeatingCollection;
// 
// import React, { Fragment, useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import Header from "../../components/header";
// import Footer from "../../components/footer";
// import axios from "axios";

// const SeatingCollection = () => {
//   const [gridView, setGridView] = useState("two");
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     axios
//       .get("https://tanshu.checkour.work/api/product/product-list")
//       .then((res) => {
//         const apiProducts = res.data.data.data.map((item) => ({
//           id: item.productID,
//           image: item.featureimg,
//           title: item.productName,
//           subtitle: "Available in multiple fabrics",
//           colors: ["#e8e4dc", "#d4c9b8", "#c4b49a", "#b8a882", "#a89060"],
//           memberPrice: "$3,200",
//           regularPrice: "$5,000",
//           onSale: false
//         }));
//         setProducts(apiProducts);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, []);

//   const cols = gridView === "three" ? 3 : gridView === "two" ? 2 : 1;

//   return (
//     <Fragment>
//       <Header />

//       <section style={{ background: "white", minHeight: "100vh", paddingBottom: "80px" }}>
//         <div style={{ padding: "40px 60px 0" }}>

//           {/* PAGE TITLE */}
//           <div style={{ marginBottom: "20px" }}>
//             <h1 style={{
//               fontSize: "30px",
//               fontWeight: "300",
//               letterSpacing: "4px",
//               fontFamily: "Times New Roman",
//               marginBottom: "6px",
//               color: "black"
//             }}>
//               PRODUCTS
//             </h1>
//           </div>

//           {/* FILTER BAR */}
//           <div style={{
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "space-between",
//             padding: "14px 0",
//             borderTop: "1px solid #eee",
//             borderBottom: "1px solid #eee",
//             marginBottom: "40px"
//           }}>
//             <span style={{
//               fontSize: "15px",
//               letterSpacing: "1px",
//               fontFamily: "Times New Roman",
//               color: "#888"
//             }}>
//               RESULTS ({products.length})
//             </span>

//             <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
//               {/* 3-column toggle */}
//               <button
//                 onClick={() => setGridView("three")}
//                 style={{ background: "none", border: "none", cursor: "pointer", padding: "2px", opacity: gridView === "three" ? 1 : 0.4 }}
//               >
//                 <svg width="22" height="22" viewBox="0 0 22 22">
//                   <rect x="0" y="0" width="6" height="6" fill="#1a1a1a"/>
//                   <rect x="8" y="0" width="6" height="6" fill="#1a1a1a"/>
//                   <rect x="16" y="0" width="6" height="6" fill="#1a1a1a"/>
//                   <rect x="0" y="8" width="6" height="6" fill="#1a1a1a"/>
//                   <rect x="8" y="8" width="6" height="6" fill="#1a1a1a"/>
//                   <rect x="16" y="8" width="6" height="6" fill="#1a1a1a"/>
//                   <rect x="0" y="16" width="6" height="6" fill="#1a1a1a"/>
//                   <rect x="8" y="16" width="6" height="6" fill="#1a1a1a"/>
//                   <rect x="16" y="16" width="6" height="6" fill="#1a1a1a"/>
//                 </svg>
//               </button>

//               {/* 2-column toggle */}
//               <button
//                 onClick={() => setGridView("two")}
//                 style={{ background: "none", border: "none", cursor: "pointer", padding: "2px", opacity: gridView === "two" ? 1 : 0.4 }}
//               >
//                 <svg width="22" height="22" viewBox="0 0 22 22">
//                   <rect x="0" y="0" width="10" height="10" fill="#1a1a1a"/>
//                   <rect x="12" y="0" width="10" height="10" fill="#1a1a1a"/>
//                   <rect x="0" y="12" width="10" height="10" fill="#1a1a1a"/>
//                   <rect x="12" y="12" width="10" height="10" fill="#1a1a1a"/>
//                 </svg>
//               </button>
//             </div>
//           </div>

//           {/* PRODUCT GRID */}
//           <div style={{
//             display: "grid",
//             gridTemplateColumns: `repeat(${cols}, 1fr)`,
//             gap: cols === 3 ? "50px 30px" : "60px 40px"
//           }}>
//             {products.map((product) => (
//               <Link
//                 key={product.id}
//                 to={`/product-detail/${product.id}`}
//                 style={{ textDecoration: "none", color: "inherit" }}
//               >
//                 <div>
//                   {/* IMAGE */}
//                   <div style={{ position: "relative", overflow: "hidden", marginBottom: "18px", background: "white" }}>
//                     <img
//                       src={product.image}
//                       alt={product.title}
//                       style={{
//                         width: "100%",
//                         height: cols === 3 ? "320px" : cols === 2 ? "460px" : "600px",
//                         objectFit: "cover",
//                         display: "block",
//                         transition: "transform 0.4s ease"
//                       }}
//                       onMouseEnter={e => e.currentTarget.style.transform = "scale(1.03)"}
//                       onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
//                     />
//                   </div>

//                   {/* TITLE */}
//                   <h3 style={{
//                     fontSize: cols === 3 ? "15px" : "18px",
//                     fontWeight: "300",
//                     letterSpacing: "2px",
//                     fontFamily: "Times New Roman",
//                     color: "#1a1a1a",
//                     textAlign: "center",
//                     marginBottom: "6px"
//                   }}>
//                     {product.title}
//                   </h3>

//                   {/* SUBTITLE */}
//                   <p style={{ fontSize: "15px", color: "#666", textAlign: "center", marginBottom: "10px", fontFamily: "Times New Roman" }}>
//                     {product.subtitle}
//                   </p>

//                   {/* COLOR SWATCHES */}
//                  <p style={{ textAlign: "center", fontSize: "13px", color: "black", fontFamily: "Times New Roman" }}>
//                      <strong> view more</strong>  
//                   </p>

//                   {/* PRICE */}
//                   <p style={{ textAlign: "center", fontSize: "13px", color: "#333", fontFamily: "Times New Roman" }}>
//                     Starting at <strong>{product.memberPrice} Member</strong> / {product.regularPrice} Regular
//                   </p>
//                 </div>
//               </Link>
//             ))}
//           </div>

//         </div>
//       </section>

//       <Footer />
//     </Fragment>
//   );
// };

// export default SeatingCollection;
import React, { Fragment, useState, useEffect } from "react";
import {  useLocation } from "react-router-dom";
import Header from "../../components/header";
import Footer from "../../components/footer";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
const SeatingCollection = () => {
  const [gridView, setGridView] = useState("two");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  // const params = new URLSearchParams(location.search);
  // const catSlug = params.get("cat");
  // const subSlug = params.get("sub");
  // const lowerSlug = params.get("lower");
  
const params = new URLSearchParams(location.search);
// const slug = params.get("slug"); // "living"

const {  slug } = useParams();

  useEffect(() => {
  setLoading(true);

  let url = `https://tanshu.checkour.work/api/product/product-list/${slug}`

  // if (lowerSlug && lowerSlug !== "lower-category") {
  //   url += `/${lowerSlug}`;
  // } 
  // else if (subSlug && subSlug !== "sub-category") {
  //   url += `/${subSlug}`;
  // }

  console.log("API URL:", url);

  axios
    .get(url)
    .then((res) => {
      const data = res.data?.data?.data || [];

      const apiProducts = data.map((item) => ({
        id: item.productID,
        image: item.featureimg,
        title: item.productName,
        subtitle: "Available in multiple fabrics",
        memberPrice: "$3,200",
        regularPrice: "$5,000",
        slug: item.slug,
      }));

      setProducts(apiProducts);
      setLoading(false);
    })
    .catch((error) => {
      console.log(error);
      setLoading(false);
    });

}, [slug]);

  const cols = gridView === "three" ? 3 : gridView === "two" ? 2 : 1;

  return (
    <Fragment>
      <Header />
      <section style={{ background: "white", minHeight: "100vh", paddingBottom: "80px" }}>
        <div style={{ padding: "40px 60px 0" }}>

          <div style={{ marginBottom: "20px" }}>
            <h1 style={{ fontSize: "30px", fontWeight: "300", letterSpacing: "4px", fontFamily: "Times New Roman", color: "black" }}>
              {slug ? slug.toUpperCase() : "ALL PRODUCTS"}
            </h1>
          </div>

          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 0", borderTop: "1px solid #eee", borderBottom: "1px solid #eee", marginBottom: "40px" }}>
            <span style={{ fontSize: "15px", letterSpacing: "1px", fontFamily: "Times New Roman", color: "#888" }}>
              RESULTS ({products.length})
            </span>
            <div style={{ display: "flex", gap: "16px" }}>
              <button onClick={() => setGridView("three")} style={{ background: "none", border: "none", cursor: "pointer", opacity: gridView === "three" ? 1 : 0.4 }}>
                <svg width="22" height="22" viewBox="0 0 22 22">
                  <rect x="0" y="0" width="6" height="6" fill="#1a1a1a"/>
                  <rect x="8" y="0" width="6" height="6" fill="#1a1a1a"/>
                  <rect x="16" y="0" width="6" height="6" fill="#1a1a1a"/>
                  <rect x="0" y="8" width="6" height="6" fill="#1a1a1a"/>
                  <rect x="8" y="8" width="6" height="6" fill="#1a1a1a"/>
                  <rect x="16" y="8" width="6" height="6" fill="#1a1a1a"/>
                  <rect x="0" y="16" width="6" height="6" fill="#1a1a1a"/>
                  <rect x="8" y="16" width="6" height="6" fill="#1a1a1a"/>
                  <rect x="16" y="16" width="6" height="6" fill="#1a1a1a"/>
                </svg>
              </button>
              <button onClick={() => setGridView("two")} style={{ background: "none", border: "none", cursor: "pointer", opacity: gridView === "two" ? 1 : 0.4 }}>
                <svg width="22" height="22" viewBox="0 0 22 22">
                  <rect x="0" y="0" width="10" height="10" fill="#1a1a1a"/>
                  <rect x="12" y="0" width="10" height="10" fill="#1a1a1a"/>
                  <rect x="0" y="12" width="10" height="10" fill="#1a1a1a"/>
                  <rect x="12" y="12" width="10" height="10" fill="#1a1a1a"/>
                </svg>
              </button>
            </div>
          </div>

          {loading ? (
            <div style={{ textAlign: "center", marginTop: "100px", fontFamily: "Times New Roman", fontSize: "18px", color: "#888" }}>
              Loading...
            </div>
          ) : products.length === 0 ? (
            <div style={{ textAlign: "center", marginTop: "100px", fontFamily: "Times New Roman", fontSize: "18px", color: "#888" }}>
              No products found.
            </div>
          ) : (
            <div style={{ display: "grid", gridTemplateColumns: `repeat(${cols}, 1fr)`, gap: cols === 3 ? "50px 30px" : "60px 40px" }}>
              {products.map((product) => (
                <Link key={product.slug} to={`/product-detail/${product.slug}`} style={{ textDecoration: "none", color: "inherit" }}>
                  <div>
                    <div style={{ overflow: "hidden", marginBottom: "18px" }}>
                      <img
                        src={product.image}
                        alt={product.title}
                        style={{ width: "100%", height: cols === 3 ? "320px" : cols === 2 ? "460px" : "600px", objectFit: "cover", display: "block", transition: "transform 0.4s ease" }}
                        onMouseEnter={e => e.currentTarget.style.transform = "scale(1.03)"}
                        onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
                      />
                    </div>
                    <h3 style={{ fontSize: cols === 3 ? "15px" : "18px", fontWeight: "300", letterSpacing: "2px", fontFamily: "Times New Roman", color: "#1a1a1a", textAlign: "center", marginBottom: "6px" }}>
                      {product.title}
                    </h3>
                    <p style={{ fontSize: "15px", color: "#666", textAlign: "center", marginBottom: "10px", fontFamily: "Times New Roman" }}>
                      {product.subtitle}
                    </p>
                    <p style={{ textAlign: "center", fontSize: "13px", color: "#C9A84C", fontFamily: "Times New Roman" }}>
                      <strong>view more</strong>
                    </p>
                    
                    <p style={{ textAlign: "center", fontSize: "13px", color: "#333", fontFamily: "Times New Roman" }}>
                      Starting at <strong>{product.memberPrice} Member</strong> / {product.regularPrice} Regular
                    </p>
                     <p style={{ textAlign: "center", fontSize: "13px", color: "#C9A84C", fontFamily: "Times New Roman" }}>
                      <strong>Style</strong>
                    </p>
                     <p style={{ textAlign: "center", fontSize: "13px", color: "#C9A84C", fontFamily: "Times New Roman" }}>
                      <strong>Quality</strong>
                    </p>
                     <p style={{ textAlign: "center", fontSize: "13px", color: "#C9A84C", fontFamily: "Times New Roman" }}>
                      <strong>Description</strong>
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
      <Footer />
    </Fragment>
  );
};

export default SeatingCollection;