
 

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

      <style>{`
        .product-detail-section {
          background: white;
          padding: 100px 0;
        }

        .product-detail-layout {
          display: flex;
          gap: 80px;
          padding: 0 80px;
          align-items: flex-start;
        }

        .product-detail-media {
          flex: 1.2;
          order: 1;
        }

        .product-detail-info {
          flex: 1;
          order: 2;
        }

        .product-main-image {
          width: 100%;
          height: 400px;
          object-fit: contain;
          margin-bottom: 16px;
        }

        .product-thumb-row {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          margin-top: 12px;
        }

        .product-thumb-image {
          width: 70px;
          height: 70px;
          object-fit: cover;
          cursor: pointer;
        }

        .related-products-section {
          padding: 60px 80px;
          background: white;
        }

        .related-products-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 40px;
        }

        @media (max-width: 991px) {
          .product-detail-layout {
            gap: 40px;
            padding: 0 32px;
          }

          .related-products-section {
            padding: 50px 32px;
          }

          .related-products-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 28px;
          }
        }

        @media (max-width: 576px) {
          .product-detail-section {
            padding: 40px 0 60px;
          }

          .product-detail-layout {
            flex-direction: column;
            gap: 24px;
            padding: 0 16px;
          }

          .product-detail-media,
          .product-detail-info {
            width: 100%;
            flex: 0 0 auto;
          }

          .product-main-image {
            height: 320px;
            margin-bottom: 12px;
          }

          .product-thumb-row {
            flex-wrap: nowrap;
            overflow-x: auto;
            padding-bottom: 6px;
          }

          .product-thumb-image {
            width: 72px;
            height: 72px;
            flex: 0 0 auto;
          }

          .related-products-section {
            padding: 40px 16px 60px;
          }

          .related-products-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }
        }
      `}</style>

      <section className="product-detail-section">
        <div className="product-detail-layout">
          {/* LEFT SIDE IMAGE */}
          <div className="product-detail-media">
            <img
              src={selectedImage || product.featureimg || product.featuredImage}
              alt={product.productName}
              className="product-main-image"
            />
            {product.gallery?.length > 0 && (
              <div className="product-thumb-row">
                <img
                  className="product-thumb-image"
                  src={product.featuredImage}
                  alt="main"
                  onClick={() => setSelectedImage(product.featuredImage)}
                  style={{
                    border:
                      selectedImage === product.featuredImage
                        ? "2px solid black"
                        : "1px solid #ccc",
                  }}
                />
                {product.gallery.map((img, i) => (
                  <img
                    key={i}
                    className="product-thumb-image"
                    src={img.imagePath}
                    alt={`gallery-${i}`}
                    onClick={() => setSelectedImage(img.imagePath)}
                    style={{
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
          <div className="product-detail-info">
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
      {relatedProducts.length > 0 ? (
        <section className="related-products-section">
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

          <div className="related-products-grid">
            {relatedProducts.map((rp) => (
              <Link
                key={rp.productID}
                to={`/product-detail/${rp.slug}`}
                style={{ textDecoration: "none", color: "inherit" }}
                onClick={() => window.scrollTo(0, 0)}
              >
                <div
                  style={{
                    padding: "10px",
                    borderRadius: "6px",
                    boxShadow: "1px 4px 8px 1px rgba(0,0,0,0.09)",
                    background: "#fff",
                  }}
                >
                  <div style={{ overflow: "hidden", marginBottom: "14px" }}>
                    <img
                      src={rp.featureimg}
                      alt={rp.productName}
                      style={{
                        padding: "10px",
                        borderRadius: "6px",
                        boxShadow: "rgba(0, 0, 0, 0.09) 1px 4px 8px 1px",
                        background: "#fff",
                        width: "100%",
                        height: "300px",
                      }}
                    />
                  </div>

                  <p style={{ fontSize: "14px", textAlign: "center" }}>
                    {rp.productName}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      ) : null}

      <Footer />
      <Scrollbar />
    </Fragment>
  );
  
};

export default ProductDetailPage;
