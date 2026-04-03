
import React, { Fragment, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../../components/header";
import Footer from "../../components/footer";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
const SeatingCollection = () => {
  const [gridView, setGridView] = useState("three");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  // const params = new URLSearchParams(location.search);
  // const catSlug = params.get("cat");
  // const subSlug = params.get("sub");
  // const lowerSlug = params.get("lower");

  const params = new URLSearchParams(location.search);
  // const slug = params.get("slug"); // "living"

  const { slug } = useParams();

  useEffect(() => {
    setLoading(true);
    setProducts([]);
    let url = `https://tanshu.checkour.work/api/product/product-list/${slug}`;

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
          materialName: item.materialName,
          qualityName: item.qualityName,
        }));

        setProducts(apiProducts);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setProducts([]);
        setLoading(false);
      });
  }, [slug]);

  const cols = gridView === "three" ? 3 : gridView === "two" ? 2 : 1;

  return (
    <Fragment>
      <Header />
      <style>{`
        .product-grid {
          display: grid;
          grid-template-columns: repeat(${cols}, 1fr);
          gap: ${cols === 3 ? "50px 30px" : "60px 40px"};
        }

        @media (max-width: 992px) {
          .product-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }

        @media (max-width: 576px) {
          .product-grid {
            grid-template-columns: repeat(1, 1fr) !important;
          }
        }
      `}</style>
      <section
        style={{
          background: "white",
          minHeight: "100vh",
          paddingBottom: "80px",
        }}
      >
        <div style={{ padding: "40px 60px 0" }}>
          <div style={{ marginBottom: "20px" }}>
            <h1
              style={{
                fontSize: "30px",
                fontWeight: "300",
                letterSpacing: "4px",
                fontFamily: "Times New Roman",
                color: "black",
              }}
            >
              {slug ? slug.toUpperCase() : "ALL PRODUCTS"}
            </h1>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "14px 0",
              borderTop: "1px solid #eee",
              borderBottom: "1px solid #eee",
              marginBottom: "40px",
            }}
          >
            <span
              style={{
                fontSize: "15px",
                letterSpacing: "1px",
                fontFamily: "Times New Roman",
                color: "#888",
              }}
            >
              RESULTS ({products.length})
            </span>
            <div style={{ display: "flex", gap: "16px" }}>
              <button
                onClick={() => setGridView("three")}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  opacity: gridView === "three" ? 1 : 0.4,
                }}
              >
                <svg width="22" height="22" viewBox="0 0 22 22">
                  <rect x="0" y="0" width="6" height="6" fill="#1a1a1a" />
                  <rect x="8" y="0" width="6" height="6" fill="#1a1a1a" />
                  <rect x="16" y="0" width="6" height="6" fill="#1a1a1a" />
                  <rect x="0" y="8" width="6" height="6" fill="#1a1a1a" />
                  <rect x="8" y="8" width="6" height="6" fill="#1a1a1a" />
                  <rect x="16" y="8" width="6" height="6" fill="#1a1a1a" />
                  <rect x="0" y="16" width="6" height="6" fill="#1a1a1a" />
                  <rect x="8" y="16" width="6" height="6" fill="#1a1a1a" />
                  <rect x="16" y="16" width="6" height="6" fill="#1a1a1a" />
                </svg>
              </button>
              <button
                onClick={() => setGridView("two")}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  opacity: gridView === "two" ? 1 : 0.4,
                }}
              >
                <svg width="22" height="22" viewBox="0 0 22 22">
                  <rect x="0" y="0" width="10" height="10" fill="#1a1a1a" />
                  <rect x="12" y="0" width="10" height="10" fill="#1a1a1a" />
                  <rect x="0" y="12" width="10" height="10" fill="#1a1a1a" />
                  <rect x="12" y="12" width="10" height="10" fill="#1a1a1a" />
                </svg>
              </button>
            </div>
          </div>

          {loading ? (
            <div
              style={{
                textAlign: "center",
                marginTop: "100px",
                fontFamily: "Times New Roman",
                fontSize: "18px",
                color: "#888",
              }}
            >
              Loading...
            </div>
          ) : products.length === 0 ? (
            <div
              style={{
                textAlign: "center",
                marginTop: "100px",
                fontFamily: "Times New Roman",
                fontSize: "18px",
                color: "#888",
              }}
            >
              No products found.
            </div>
          ) : (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: `repeat(${cols}, 1fr)`,
                gap: cols === 3 ? "50px 30px" : "60px 40px",
              }}
            >
              {products.map((product) => (
                <Link
                  key={product.slug}
                  to={`/product-detail/${product.slug}`}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <div
                    style={{
                      padding: "10px",
                      borderRadius: "6px",
                      boxShadow: "1px 4px 8px 1px rgba(0,0,0,0.09)", // 👈 light shadow
                      background: "#fff",
                    }}
                  >
                    <div style={{ marginBottom: "18px" }}>
                      <img
                        src={product.image}
                        alt={product.title}
                        style={{
                          width: "100%",
                          height:
                            cols === 3
                              ? "320px"
                              : cols === 2
                                ? "460px"
                                : "600px",
                          objectFit: "contain",
                          display: "block",
                          transition: "transform 0.4s ease",
                        }}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.transform = "scale(1.05)")
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.transform = "scale(1)")
                        }
                      />
                    </div>
                    <h3
                      style={{
                        fontSize: cols === 3 ? "18px" : "20px",
                        fontWeight: "300",
                        letterSpacing: "2px",
                        fontFamily: "Times New Roman",
                        color: "#1a1a1a",
                        textAlign: "center",
                        marginBottom: "6px",
                      }}
                    >
                      {product.title}
                    </h3>
                    {/* <p style={{ fontSize: "15px", color: "#666", textAlign: "center", marginBottom: "10px", fontFamily: "Times New Roman" }}>
                      {product.subtitle}
                    </p> */}

                    {/* <p style={{ textAlign: "center", fontSize: "13px", color: "#333", fontFamily: "Times New Roman" }}>
                      Starting at <strong>{product.memberPrice} Member</strong> / {product.regularPrice} Regular
                    </p> */}
                    {/* <p
                      style={{
                        textAlign: "center",
                        fontSize: "13px",
                        color: "#C9A84C",
                        fontFamily: "Times New Roman",
                      }}
                    >
                      <strong>Style/Material : {product.materialName}</strong>
                    </p>
                    <p
                      style={{
                        textAlign: "center",
                        fontSize: "13px",
                        color: "#C9A84C",
                        fontFamily: "Times New Roman",
                      }}
                    >
                      <strong>Quality : {product.qualityName}</strong>
                    </p> */}
                    <p
                      style={{
                        textAlign: "center",
                        fontSize: "15px",
                        color: "#3e4a8b",
                        fontFamily: "Times New Roman",
                      }}
                    >
                      <strong>view more</strong>
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
