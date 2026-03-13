import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/header";
import Footer from "../../components/footer";
import WhiteSofa from "../../images/products/WhiteSofa.jpg";
import BeigeSofa from "../../images/products/beigeSofa.jpg";
import GrayeSofa from "../../images/products/GrayeSofa.jpg";
import BrownSofa from "../../images/products/BrownSofa.jpg";
import BlackSofa from "../../images/products/BlackSofa.jpg";
import img6 from '../../images/products/set3_image_1.jpg';
import img7 from '../../images/products/set3_image_2.jpg';

const bloglistPage = () => {
  const [gridView, setGridView] = useState('two');

  const products = [
    { id: 1, image: WhiteSofa, title: "CLOUD MODULAR 3-PIECE SOFA", subtitle: "Available in multiple depths & fabrics", category: "COLLABORATIONS", storyTitle: "A New Canvas.", storyDesc: "Visiting the home studio of Rifle Paper Co.'s co-founder and creative director, Anna Bond.", colors: ["#e8e4dc","#d4c9b8","#c4b49a","#b8a882","#a89060","#8c7448","#6b5a38","#4a3c28","#2a2018","#1a1208","#3a3028","#5a4a38"], memberSalePrice: "$5,685", salePrice: "$6,900", regularPrice: "$8,130", saveText: "SAVE 40% ON SELECT ITEMS", onSale: true },
    { id: 2, image: WhiteSofa, title: "CLOUD MODULAR 3-PIECE SOFA", subtitle: "Available in multiple depths & fabrics", category: "CRAFTSMANSHIP", storyTitle: "The Greater GoodWeave.", storyDesc: "Doing good for the people and communities behind our rugs.", colors: ["#e8e4dc","#d4c9b8","#c4b49a","#b8a882","#a89060","#8c7448","#6b5a38","#4a3c28","#2a2018","#1a1208","#3a3028","#5a4a38"], memberSalePrice: "$5,685", salePrice: "$6,900", regularPrice: "$8,130", saveText: "SAVE 40% ON SELECT ITEMS", onSale: true },
    { id: 3, image: WhiteSofa, title: "CLOUD MODULAR 3-PIECE SOFA", subtitle: "Available in multiple depths & fabrics", category: "HOMES  PRODUCTS", storyTitle: "Open Spaces.", storyDesc: "A young designer's imaginative intuition takes Hollywood.", colors: ["#e8e4dc","#d4c9b8","#c4b49a","#b8a882","#a89060","#8c7448","#6b5a38","#4a3c28","#2a2018","#1a1208","#3a3028","#5a4a38"], memberSalePrice: "$5,685", salePrice: "$6,900", regularPrice: "$8,130", saveText: "SAVE 40% ON SELECT ITEMS", onSale: true },
    { id: 4, image: BeigeSofa, title: "CLOUD MODULAR 4-PIECE CHAISE SECTIONAL", subtitle: "Available in multiple fabrics", category: "DESIGN", storyTitle: "Modern Living.", storyDesc: "Explore the art of comfortable and elegant living spaces.", colors: ["#e8e4dc","#d4c9b8","#c4b49a","#b8a882","#a89060","#8c7448","#6b5a38","#4a3c28","#2a2018","#1a1208","#3a3028","#5a4a38"], memberSalePrice: "$7,090", salePrice: "$8,605", regularPrice: "$10,140", saveText: "SAVE 35% - 40% ON SELECT ITEMS", onSale: true },
    { id: 5, image: BeigeSofa, title: "CLOUD MODULAR 4-PIECE CHAISE SECTIONAL", subtitle: "Available in multiple fabrics", category: "CRAFTSMANSHIP", storyTitle: "Built to Last.", storyDesc: "Discover the craftsmanship behind every piece we create.", colors: ["#e8e4dc","#d4c9b8","#c4b49a","#b8a882","#a89060","#8c7448","#6b5a38","#4a3c28","#2a2018","#1a1208","#3a3028","#5a4a38"], memberSalePrice: "$7,090", salePrice: "$8,605", regularPrice: "$10,140", saveText: "SAVE 35% - 40% ON SELECT ITEMS", onSale: true },
    { id: 6, image: BeigeSofa, title: "CLOUD MODULAR 4-PIECE CHAISE SECTIONAL", subtitle: "Available in multiple fabrics", category: "HOMES", storyTitle: "Timeless Design.", storyDesc: "How classic forms shape the modern home.", colors: ["#e8e4dc","#d4c9b8","#c4b49a","#b8a882","#a89060","#8c7448","#6b5a38","#4a3c28","#2a2018","#1a1208","#3a3028","#5a4a38"], memberSalePrice: "$7,090", salePrice: "$8,605", regularPrice: "$10,140", saveText: "SAVE 35% - 40% ON SELECT ITEMS", onSale: true },
    { id: 7, image: BrownSofa, title: "CLOUD MODULAR 4-PIECE SOFA", subtitle: "Available in multiple fabrics", category: "COLLABORATIONS", storyTitle: "The Art of Rest.", storyDesc: "Exploring what it means to truly relax in your own home.", colors: ["#e8e4dc","#d4c9b8","#c4b49a","#b8a882","#a89060","#8c7448","#6b5a38","#4a3c28","#2a2018","#1a1208","#3a3028","#5a4a38"], memberSalePrice: "$7,300", salePrice: "$8,860", regularPrice: "$10,440", saveText: "SAVE 40% ON SELECT ITEMS", onSale: true },
    { id: 8, image: BrownSofa, title: "CLOUD MODULAR 4-PIECE SOFA", subtitle: "Available in multiple fabrics", category: "PRODUCTS", storyTitle: "Warm Textures.", storyDesc: "Rich fabrics and warm tones for the ultimate cozy space.", colors: ["#e8e4dc","#d4c9b8","#c4b49a","#b8a882","#a89060","#8c7448","#6b5a38","#4a3c28","#2a2018","#1a1208","#3a3028","#5a4a38"], memberSalePrice: "$7,300", salePrice: "$8,860", regularPrice: "$10,440", saveText: "SAVE 40% ON SELECT ITEMS", onSale: true },
    { id: 9, image: BrownSofa, title: "CLOUD MODULAR 4-PIECE SOFA", subtitle: "Available in multiple fabrics", category: "DESIGN", storyTitle: "Earth Tones.", storyDesc: "Nature-inspired palettes that bring the outdoors in.", colors: ["#e8e4dc","#d4c9b8","#c4b49a","#b8a882","#a89060","#8c7448","#6b5a38","#4a3c28","#2a2018","#1a1208","#3a3028","#5a4a38"], memberSalePrice: "$7,300", salePrice: "$8,860", regularPrice: "$10,440", saveText: "SAVE 40% ON SELECT ITEMS", onSale: true },
    { id: 10, image: GrayeSofa, title: "CLOUD MODULAR 2-PIECE LOVESEAT", subtitle: "Available in multiple depths & fabrics", category: "HOMES", storyTitle: "Small Spaces.", storyDesc: "Making the most of compact living without compromise.", colors: ["#e8e4dc","#d4c9b8","#c4b49a","#b8a882","#a89060","#6b5a38","#4a3c28","#2a2018","#1a1208"], memberSalePrice: "$3,890", salePrice: "$4,720", regularPrice: "$5,580", saveText: "SAVE 40% ON SELECT ITEMS", onSale: true },
    { id: 11, image: GrayeSofa, title: "CLOUD MODULAR 2-PIECE LOVESEAT", subtitle: "Available in multiple depths & fabrics", category: "COLLABORATIONS", storyTitle: "Gray Days.", storyDesc: "The understated elegance of neutral tones in modern interiors.", colors: ["#e8e4dc","#d4c9b8","#c4b49a","#b8a882","#a89060","#6b5a38","#4a3c28","#2a2018","#1a1208"], memberSalePrice: "$3,890", salePrice: "$4,720", regularPrice: "$5,580", saveText: "SAVE 40% ON SELECT ITEMS", onSale: true },
    { id: 12, image: GrayeSofa, title: "CLOUD MODULAR 2-PIECE LOVESEAT", subtitle: "Available in multiple depths & fabrics", category: "CRAFTSMANSHIP", storyTitle: "Less is More.", storyDesc: "A minimalist approach to luxurious everyday living.", colors: ["#e8e4dc","#d4c9b8","#c4b49a","#b8a882","#a89060","#6b5a38","#4a3c28","#2a2018","#1a1208"], memberSalePrice: "$3,890", salePrice: "$4,720", regularPrice: "$5,580", saveText: "SAVE 40% ON SELECT ITEMS", onSale: true },
    { id: 13, image: BlackSofa, title: "CLOUD TRACK ARM SOFA", subtitle: "Available in multiple fabrics", category: "DESIGN", storyTitle: "Bold Contrasts.", storyDesc: "Dark hues that anchor a room with confidence and style.", colors: ["#e8e4dc","#d4c9b8","#c4b49a","#b8a882","#8c7448","#4a3c28","#2a2018"], memberPrice: "$4,719", regularPrice: "$7,940", onSale: false },
    { id: 14, image: img6, title: "CLOUD SQUARE ARM SOFA", subtitle: "Available in multiple fabrics", category: "HOMES", storyTitle: "Clean Lines.", storyDesc: "The beauty of geometric simplicity in furniture design.", colors: ["#e8e4dc","#d4c9b8","#c4b49a","#b8a882","#a89060","#6b5a38"], memberPrice: "$3,925", regularPrice: "$6,540", onSale: false },
    { id: 15, image: img7, title: "MAXWELL DEEP SEAT SOFA", subtitle: "Available in multiple depths & fabrics", category: "COLLABORATIONS", storyTitle: "Deep Comfort.", storyDesc: "Sink in and stay awhile — designed for ultimate relaxation.", colors: ["#e8e4dc","#d4c9b8","#c4b49a","#b8a882","#6b5a38","#4a3c28"], memberPrice: "$3,125", regularPrice: "$5,210", onSale: false },
  ];

  const cols = gridView === 'three' ? 3 : gridView === 'two' ? 2 : 1;

  return (
    <Fragment>
      <Header />

      <section style={{ background: "white", minHeight: "100vh", paddingBottom: "80px" }}>
        <div style={{ padding: "40px 60px 0" }}>

          {/* FILTER BAR */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", padding: "14px 0", borderTop: "1px solid #eee", borderBottom: "1px solid #eee", marginBottom: "40px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <span style={{ fontSize: "13px", letterSpacing: "1px", fontFamily: "Times New Roman", color: "#333", cursor: "pointer" }}>SORT: FEATURED &#9662;</span>

              {/* 3-column toggle */}
              <button onClick={() => setGridView('three')} style={{ background: "none", border: "none", cursor: "pointer", padding: "2px", opacity: gridView === 'three' ? 1 : 0.4 }}>
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
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

              {/* 2-column toggle */}
              <button onClick={() => setGridView('two')} style={{ background: "none", border: "none", cursor: "pointer", padding: "2px", opacity: gridView === 'two' ? 1 : 0.4 }}>
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <rect x="0" y="0" width="10" height="10" fill="#1a1a1a"/>
                  <rect x="12" y="0" width="10" height="10" fill="#1a1a1a"/>
                  <rect x="0" y="12" width="10" height="10" fill="#1a1a1a"/>
                  <rect x="12" y="12" width="10" height="10" fill="#1a1a1a"/>
                </svg>
              </button>
            </div>
          </div>

          {/* PRODUCT GRID */}
          <div style={{
            display: "grid",
            gridTemplateColumns: `repeat(${cols}, 1fr)`,
            gap: cols === 3 ? "50px 30px" : "60px 40px",
          }}>
            {products.map((product) => (
              <Link to={`/blog-detailsspage/${product.id}`} key={product.id} style={{ textDecoration: "none", color: "inherit" }}>
                <div>
                  {/* IMAGE */}
                  <div style={{ position: "relative", overflow: "hidden", marginBottom: "18px", background: "white" }}>
                    <img
                      src={product.image}
                      alt={product.title}
                      style={{
                        width: "100%",
                        height: cols === 3 ? "320px" : cols === 2 ? "460px" : "600px",
                        objectFit: "cover",
                        display: "block",
                        transition: "transform 0.4s ease"
                      }}
                      onMouseEnter={e => e.currentTarget.style.transform = "scale(1.03)"}
                      onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
                    />
                    <div style={{ position: "absolute", right: "12px", top: "50%", transform: "translateY(-50%)", fontSize: "20px", color: "#555", background: "rgba(255,255,255,0.6)", width: "32px", height: "32px", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>›</div>
                  </div>

                  {/* CATEGORY */}
                  <p style={{ fontSize: "15px", letterSpacing: "1.5px", color: "#888", fontFamily: "Times New Roman", marginBottom: "8px", textTransform: "uppercase" }}>
                    {product.category}
                  </p>

                  {/* STORY TITLE */}
                  <h3 style={{ fontSize: cols === 3 ? "20px" : "30px", fontWeight: "300", fontFamily: "Times New Roman", color: "#1a1a1a", marginBottom: "10px", fontStyle: "italic" }}>
                    {product.storyTitle}
                  </h3>

                  {/* STORY DESC */}
                  <p style={{ fontSize: "18px", color: "#666", fontFamily: "Times New Roman", lineHeight: "1.7", marginBottom: "16px" }}>
                    {product.storyDesc}
                  </p>

                  {/* SEE STORY */}
                  <span style={{ fontSize: "15px", letterSpacing: "1.5px", fontFamily: "Times New Roman", color: "#1a1a1a", borderBottom: "1px solid #1a1a1a", paddingBottom: "2px", cursor: "pointer", textTransform: "uppercase" }}>
                    SEE STORY
                  </span>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>

      <Footer />
    </Fragment>
  );
};

export default bloglistPage;