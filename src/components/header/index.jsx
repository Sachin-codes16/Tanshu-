import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import logo from "../../images/blog/tanshu-vaidik-logo.png";

const Header = (props) => {
  const carts = useSelector((state) => state.cart.cart);
  const [searchOpen, setSearchOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [activeSub, setActiveSub] = useState(null);

  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState({});
  const [lowerCategories, setLowerCategories] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedCat, setSelectedCat] = useState(null);
  const [selectedSub, setSelectedSub] = useState(null);
  const menuRef = useRef(null);

  const handleSearch = async (Search) => {
    setSearchTerm(Search);

    if (!Search) {
      setSearchResults([]);
      return;
    }

    try {
      const res = await axios.get(
        `https://tanshu.checkour.work/api/search-product/${Search}`,
      );

      console.log(res.data);

      const results = res.data?.data?.data;

      if (Array.isArray(results)) {
        setSearchResults(results);
      } else {
        setSearchResults([]); // ✅ handle null case
      }
    } catch (error) {
      console.log("SEARCH ERROR:", error);
      setSearchResults([]);
    }
  };

  // 1) FETCH CATEGORIES
  useEffect(() => {
    axios
      .get("https://tanshu.checkour.work/api/menu/product-category")
      .then((res) => {
        setCategories(res.data.data.data);
      })
      .catch((err) => console.log(err));

    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        // 👉 STEP 1: If submenus are open → close only them
        if (selectedCat || selectedSub) {
          setSelectedCat(null);
          setSelectedSub(null);
        }
        // 👉 STEP 2: If already closed → close full menu
        else {
          setMobileMenuOpen(false);
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [selectedCat, selectedSub]);
  // 2) FETCH SUBCATEGORIES - slug se
  const handleCatHover = (cat) => {
    setActiveMenu(cat.id);
    setActiveSub(null);
    if (!subCategories[cat.slug]) {
      axios
        .get(
          `https://tanshu.checkour.work/api/menu/product-sub-category/${cat.slug}`,
        )
        .then((res) => {
          setSubCategories((prev) => ({
            ...prev,
            [cat.slug]: res.data.data.data,
          }));
        })
        .catch((err) => console.log(err));
    }
  };

  // 3) FETCH LOWER CATEGORIES - slug se
  const handleSubHover = (sub) => {
    setActiveSub(sub.id);
    if (!lowerCategories[sub.slug]) {
      axios
        .get(
          `https://tanshu.checkour.work/api/menu/produt-lower-category/${sub.slug}`,
        )
        .then((res) => {
          setLowerCategories((prev) => ({
            ...prev,
            [sub.slug]: res.data.data.data,
          }));
        })
        .catch((err) => console.log(err));
    }
  };

  const getActiveSubSlug = (catSlug) => {
    return subCategories[catSlug]?.find((s) => s.id === activeSub)?.slug;
  };

  return (
    <>
      <header style={{ position: "sticky", top: 0, zIndex: 1000 }}>
        <nav className="rh-navbar">
          {/* TOP BAR */}
          <div className="rh-topbar">
            <div className="rh-left">
              <div
                className="mobile-menu-icon"
                onClick={() => setMobileMenuOpen((prev) => !prev)}
              >
                ☰
              </div>
              <i className=""></i>
              <div className="search-wrap">
                <i
                  className="ti-search rh-icon"
                  onClick={() => setSearchOpen(!searchOpen)}
                ></i>
                <input
                  className={`rh-search-input ${searchOpen ? "open" : ""}`}
                  type="text"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={(e) => handleSearch(e.target.value)}
                />
                {searchTerm && (
                  <div className="search-results">
                    {searchResults.length === 0 ? (
                      <div className="search-item">No products found.....</div>
                    ) : (
                      searchResults.map((item, index) => (
                        <Link to={`/product-detail/${item.slug}`}>
                          <div className="search-item">
                            <img
                              src={item.featureimg}
                              alt={item.productName}
                              style={{
                                width: "40px",
                                height: "40px",
                                marginRight: "8px",
                              }}
                            />
                            {item.productName || "Unnamed"}
                          </div>
                        </Link>
                      ))
                    )}
                  </div>
                )}
              </div>
            </div>

            <div className="rh-logo">
              <Link
                to="/home"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <div className="rh-text-logo">
                  <img
                    src={logo}
                    alt="Tanshu Vaidik Logo"
                    style={{
                      height: "80px",
                      width: "auto",
                      objectFit: "contain",
                    }}
                  />
                </div>
              </Link>
            </div>

            <div className="rh-right">
              <div className="social-icons">
                <a
                  href="https://www.facebook.com/people/Tanshu-Vaidik/pfbid02PgCKUtYxAfuJJE2Qww4SbJoURQVKnZsfibNtnwcagkQq9YeZwnQRe9cUSvtKf1jJl/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="#2a2a2a"
                  >
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/tanshuvaidik/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#2a2a2a"
                    strokeWidth="2"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle
                      cx="17.5"
                      cy="6.5"
                      r="1"
                      fill="#2a2a2a"
                      stroke="none"
                    />
                  </svg>
                </a>
                <a href="https://youtube.com" target="_blank" rel="noreferrer">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="#2a2a2a"
                  >
                    <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58a2.78 2.78 0 001.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58z" />
                    <polygon
                      points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"
                      fill="white"
                    />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/company/tanshu-vaidik-india-pvt-ltd/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="#2a2a2a"
                  >
                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* CATEGORY MENU */}
          <div className="rh-menu">
            <ul>
              {categories.map((cat) => (
                <li
                  key={cat.id}
                  onMouseEnter={() => handleCatHover(cat)}
                  onMouseLeave={() => {
                    setActiveMenu(null);
                    setActiveSub(null);
                  }}
                >
                  <span className="menu-text">
                    {cat.categoryName.toUpperCase()}
                  </span>

                  {/* DROPDOWN */}
                  {activeMenu === cat.id &&
                    subCategories[cat.slug]?.length > 0 && (
                      <div className="rh-dropdown">
                        {/* LEFT - SUBCATEGORIES */}
                        <div className="rh-dropdown-left">
                          {subCategories[cat.slug].map((sub) => (
                            <div
                              key={sub.id}
                              className={`rh-sub-item ${activeSub === sub.id ? "active" : ""}`}
                              onMouseEnter={() => handleSubHover(sub)}
                            >
                              <span className="sub-menu-text">{sub.title}</span>
                            </div>
                          ))}
                        </div>

                        {/* RIGHT - LOWER CATEGORIES */}
                        {activeSub &&
                          lowerCategories[getActiveSubSlug(cat.slug)]?.length >
                            0 && (
                            <div className="rh-dropdown-right">
                              {lowerCategories[getActiveSubSlug(cat.slug)].map(
                                (lower) => (
                                  <div key={lower.id} className="rh-sub2-item">
                                    {/* <Link to={`/setting-collection?cat=${cat.slug}&sub=${getActiveSubSlug(cat.slug)}&lower=${lower.slug}`}>
                                {lower.title}
                              </Link> */}
                                    {/* <Link to={'/setting-collection/${getActiveSubSlug(cat.slug)}'}>
                                {lower.title}
                              </Link> */}
                                    <Link
                                      to={`/setting-collection/${getActiveSubSlug(cat.slug)}/${lower.slug}`}
                                    >
                                      {lower.title}
                                    </Link>
                                  </div>
                                ),
                              )}
                            </div>
                          )}
                      </div>
                    )}
                </li>
              ))}
              <li>
                <Link to="/">SWATCHES</Link>
              </li>{" "}
              <li>
                <Link to="/our-story">OUR STORY</Link>
              </li>
              <li>
                <Link to="/contact-usPage">CONTACT US</Link>
              </li>
              <li>
                <Link to="/BloglistPage">BLOG'S</Link>
              </li>
            </ul>
          </div>
        </nav>

        {/* MOBILE MENU DRAWER */}
        <div className={`mobile-menu ${mobileMenuOpen ? "open" : ""}`}>
          <div className="mobile-menu-header">
            <span
              style={{ fontSize: "19px" }}
              onClick={() => setMobileMenuOpen(false)}
            >
              ✕
            </span>
          </div>

          <div className="mobile-columns" ref={menuRef}>
            {" "}
            {/* COLUMN 1 - Categories */}
            <div className="mobile-col1">
              {categories.map((cat) => (
                <div
                  key={cat.id}
                  onClick={() => {
                    setSelectedCat(cat);
                    setSelectedSub(null);
                    handleCatHover(cat);
                  }}
                  className="mobile-item"
                  style={{
                    fontSize: "15px",
                    paddingLeft: "16px",
                    fontWeight: 470,
                    color: "#292929",
                    borderBottom: "1px solid #eee",
                  }}
                >
                  {cat.categoryName.toUpperCase()}
                </div>
              ))}

              <div
                className="hi"
                style={{
                  fontSize: "16px",
                  fontWeight: 470,
                  color: "#1d1c1c",
                  borderBottom: "1px solid #eee",
                  padding: "12px 17px 12px 17px",
                }}
              >
                <Link to="/">SWATCHES</Link>
              </div>
              <div
                className="hi"
                style={{
                  fontSize: "16px",
                  fontWeight: 470,
                  color: "#1d1c1c",
                  borderBottom: "1px solid #eee",
                  padding: "12px 17px 12px 17px ",
                }}
              >
                <Link to="/our-story">OUR STORY</Link>
              </div>
              <div
                className="hi"
                style={{
                  fontSize: "16px",
                  fontWeight: 470,
                  color: "#1d1c1c",
                  borderBottom: "1px solid #eee",
                  padding: "12px 17px 12px 17px",
                }}
              >
                <Link to="/contact-usPage">CONTACT US</Link>
              </div>
              <div
                className="hi"
                style={{
                  fontSize: "16px",
                  fontWeight: 470,
                  color: "#1d1c1c",
                  padding: "12px 17px 12px 17px",
                }}
              >
                <Link to="/BloglistPage">BLOG'S</Link>
              </div>
            </div>
            {/* COLUMN 2 - Subcategories */}
            {selectedCat && (
              <div className="mobile-col">
                {subCategories[selectedCat.slug]?.map((sub) => (
                  <div key={sub.id}>
                    {/* SUBCATEGORY */}
                    <div
                      onClick={() => {
                        if (selectedSub?.id === sub.id) {
                          setSelectedSub(null); // toggle close
                        } else {
                          setSelectedSub(sub);
                          handleSubHover(sub);
                        }
                      }}
                      className={`mobile-item ${
                        selectedSub?.id === sub.id ? "active" : ""
                      }`}
                    >
                      {sub.title}
                    </div>

                    {/* ✅ PRODUCTS BELOW */}
                    {selectedSub?.id === sub.id && (
                      <div
                        className={`mobile-subitems ${selectedSub?.id === sub.id ? "open" : ""}`}
                      >
                        {lowerCategories[sub.slug]?.map((lower) => (
                          <div key={lower.id} className="mobile-subitem">
                            <Link
                              to={`/setting-collection/${sub.slug}/${lower.slug}`}
                            >
                              {lower.title}
                            </Link>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </header>

      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }

        .mobile-menu {
           display: none;  /* ✅ hide on desktop */
        }


        .rh-navbar {
          background: #ffffff;
          width: 100%;
          padding: 18px 50px 0;
          font-family: 'Times New Roman', Times, serif;
          border-bottom: 1px solid #d9d3cc;
        }

        .rh-topbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 14px;
        }

        .rh-left {
          display: flex;
          align-items: center;
          gap: 22px;
          flex: 1;
        }

        .rh-icon {
          font-size: 22px;
          cursor: pointer;
          color: #2a2a2a;
        }

        .search-wrap {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .menu-text:hover {
          font-weight: 400;   /* makes it bold */
          color: #000;        /* optional: darker color */
        }

        .sub-menu-text:hover {
          font-weight: 400;   /* makes it bold */
          color: #000;        /* optional: darker color */
        }

        .rh-search-input {
          width: 0;
          opacity: 0;
          border: none;
          border-bottom: 1px solid #2a2a2a;
          background: transparent;
          outline: none;
          font-size: 15px;
          padding: 3px 4px;
          transition: width 0.35s ease, opacity 0.35s ease;
          font-family: 'Times New Roman', serif;
          color: #333;
        }

        .rh-search-input.open { width: 200px; opacity: 1; }

        .rh-logo {
          flex: 1;
          display: flex;
          justify-content: center;
        }

        .rh-text-logo {
          display: flex;
          flex-direction: column;
          align-items: center;
          line-height: 1;
          color: #1a1a1a;
        }

        .logo-the {
          font-size: 11px;
          font-style: italic;
          letter-spacing: 1px;
          font-family: 'Times New Roman', serif;
        }

        .logo-world {
          font-size: 11px;
          letter-spacing: 5px;
          font-family: 'Times New Roman', serif;
          text-transform: uppercase;
        }

        .logo-world em { font-style: italic; letter-spacing: 1px; }

        .logo-rh {
          font-size: 70px;
          font-weight: 200;
          letter-spacing: -3px;
          font-family: 'Times New Roman', serif;
          color: #1a1a1a;
          line-height: 0.82;
        }

        .rh-right {
          display: flex;
          align-items: center;
          gap: 22px;
          flex: 1;
          justify-content: flex-end;
        }

        .social-icons {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .social-icons a {
          display: flex;
          align-items: center;
          opacity: 0.75;
          transition: opacity 0.2s;
        }

        .social-icons a:hover { opacity: 1; }

        .cart-icon { position: relative; cursor: pointer; }

        .cart-count {
          position: absolute;
          top: -8px;
          right: -10px;
          background: #1a1a1a;
          color: white;
          font-size: 10px;
          padding: 2px 5px;
          border-radius: 50%;
        }

        .rh-menu {
          width: 100%;
          padding: 12px 0 0;
        }

        .rh-menu > ul {
          list-style: none;
          display: flex;
          justify-content: space-between;
          flex-wrap: nowrap;
          width: 100%;
        }

        .rh-menu > ul > li {
          position: relative;
          padding: 0 8px 14px;
          white-space: nowrap;
        }

        .rh-menu > ul > li > a {
          text-decoration: none;
          color: #4a4440;
          font-size: 14px;
          letter-spacing: 2px;
          font-family: 'Times New Roman', serif;
          font-weight: 400;
        }

        .rh-menu > ul > li > a:hover {
          color: #000;
          border-bottom: 1px solid #000;
          padding-bottom: 2px;
        }

        .sale-item > a { color: #b5282a !important; }

        .rh-dropdown {
          position: absolute;
          top: 100%;
          left: 0;
          background: #ffffff;
          display: flex;
          min-width: 480px;
          padding: 24px;
          box-shadow: 0 6px 24px rgba(0,0,0,0.08);
          z-index: 9999;
          border-top: 2px solid #1a1a1a;
        }

        .rh-dropdown-left {
          min-width: 200px;
          border-right: 1px solid #e8e4e0;
          padding-right: 24px;
        }

        .rh-sub-item {
          padding: 8px 0;
          cursor: pointer;
        }

        .rh-sub-item a {
          text-decoration: none;
          color: #777;
          font-size: 15px;
          font-family: 'Times New Roman', serif;
          transition: color 0.2s;
        }

        .rh-sub-item:hover a,
        .rh-sub-item.active a {
          color: #000;
          font-weight: 600;
          text-decoration: underline;
        }

        .rh-dropdown-right {
          padding-left: 28px;
          min-width: 200px;
        }

        .rh-sub2-item { padding: 8px 0; }

        .rh-sub2-item a {
          text-decoration: none;
          color: #2a2a2a;
          font-size: 15px;
          font-family: 'Times New Roman', serif;
          transition: color 0.2s;
        }

        .rh-sub2-item a:hover {
          color: #000;
          text-decoration: underline;
        }
        /* HIDE hamburger on desktop */
.mobile-menu-icon {
  display: none;
  font-size: 26px;
  cursor: pointer;
}

/* MOBILE STYLES */
@media (max-width: 991px) {

  .mobile-menu-icon {
    display: block;
  }


  /* SIDE DRAWER */
  .mobile-menu {
  display: block; /* ✅ only show on mobile */
  position: fixed;
  top: 0;
  left: -100%;
  width: 167px;
  height: 100%;
  background: white;
  z-index: 99999;
  transition: left 0.3s ease;
  padding: 16px;
  box-shadow: -4px 0 12px rgba(0,0,0,0.1);
}

  .mobile-menu.open {
    left: 0;
  }

  .mobile-menu-header {
    display: flex;
    justify-content: flex-end;
    font-size: 22px;
    margin-bottom: 20px;
    cursor: pointer;
  }

  .mobile-menu ul {
    list-style: none;
    padding: 0;
  }

  .mobile-menu li {
    padding: 12px 0;
    border-bottom: 1px solid #eee;
  }

  .mobile-menu a {
    text-decoration: none;
    color: #2a2a2a;
    font-size: 15px;
  }
}

        @media (max-width: 1200px) {
          .rh-menu > ul > li { padding: 0 6px 14px; }
          .rh-menu > ul > li > a { font-size: 11px; letter-spacing: 1px; }
        }

        @media (max-width: 991px) {
          .rh-menu { display: none; }
          .rh-navbar { padding: 12px 20px; }
          .logo-rh { font-size: 48px; }
        }
          // yha sa 
          .search-wrap {
  position: relative;
}

.search-results {
  position: absolute;
  top: calc(100% + 4px);  /* 👈 always just below input */
  left: 0;
  width: 220px;
  background: white;
  border: 1px solid #ddd;
  border-radius: 4px;
  
  z-index: 9999;
}

.search-item {
  padding: 10px;
  cursor: pointer;
  color: black;
}

.search-item:hover {
  background: #f5f5f5;
}

.mobile-columns {
  display: flex;
  align-items: flex-start;
  gap: 0;
  position: relative;
}

/* COLUMN 1 FIXED WIDTH (NO SHRINK) */
.mobile-col1 {
  flex: 0 0 150px;
  width: 150px;
  min-width: 150px;
  background: #fff;
  border-right: 1px solid #eee;
}

/* COLUMN 2 */
.mobile-col {
  flex: 0 0 150px;
  width: 150px;
  background: #fff;
  border-left: 1px solid #eee;
  animation: fadeSlide 0.25s ease forwards;
}

/* ITEMS */
.mobile-item {
  padding: 10px 14px;
  cursor: pointer;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 14px;
}

/* PRODUCT LIST */
.mobile-subitems {
  overflow: hidden;
  max-height: 0;
  opacity: 0;
  transition: all 0.3s ease;
}

/* OPEN STATE */
.mobile-subitems.open {
  max-height: 280px;
  opacity: 1;
}

/* PRODUCT ITEM */
.mobile-subitem {
  padding: 7px 14px 7px 32px;  
  font-size: 8px;             
  color: #a09e9e;                 /* 👉 lighter */
  cursor: pointer;
}

.mobile-subitem:hover {
  background: #f5f5f5;
}

/* ANIMATION */
@keyframes fadeSlide {
  from {
    opacity: 0;
    transform: translateX(10px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
      `}</style>
    </>
  );
};

export default Header;
