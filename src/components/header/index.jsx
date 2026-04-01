
import React, { useState, useEffect } from "react";
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

      setSearchResults(res.data.data || []);
    } catch (error) {
      console.log(error);
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
  }, []);

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
                {searchResults.length > 0 && (
                  <div className="search-results">
                    {searchResults.map((item, index) => (
                      <Link key={index} to={`/product/${item.slug}`}>
                        <div className="search-item">
                          {item.name || item.title}
                        </div>
                      </Link>
                    ))}
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
  style={{ height: '80px', width: 'auto', objectFit: 'contain' }}
/>
</div>
              </Link>
            </div>

            <div className="rh-right">
              <div className="social-icons">
                <a href="https://facebook.com" target="_blank" rel="noreferrer">
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
                  href="https://instagram.com"
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
                <a href="https://linkedin.com" target="_blank" rel="noreferrer">
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
                              <span className="sub-menu-text">
                              
                                {sub.title}
                              </span>
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
      </header>

      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }

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
  top: 35px;
  left: 0;
  width: 220px;
  background: white;
  border: 1px solid #ddd;
  z-index: 9999;
}

.search-item {
  padding: 10px;
  cursor: pointer;
}

.search-item:hover {
  background: #f5f5f5;
}
      `}</style>
    </>
  );
};

export default Header;
