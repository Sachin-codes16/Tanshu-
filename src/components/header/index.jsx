// // import React, { useState } from "react";
// // import { Link } from "react-router-dom";
// // import MobileMenu from "../MobileMenu";
// // import { totalPrice } from "../../utils";
// // import { useDispatch, useSelector } from "react-redux";
// // import { removeFromCart } from "../../store/slices/cartSlice";

// // const Header = (props) => {
// //   const dispatch = useDispatch();

// //   const carts = useSelector((state) => state.cart.cart);

// //   const [menuActive, setMenuState] = useState(false);
// //   const [cartActive, setcartState] = useState(false);

// //   const SubmitHandler = (e) => {
// //     e.preventDefault();
// //   };

// //   const ClickHandler = () => {
// //     window.scrollTo(10, 0);
// //   };

// //   return (
// //     <header id="header">
// //       <div className={`wpo-site-header ${props.hclass}`}>
// //         <nav className="navigation navbar navbar-expand-lg navbar-light">
// //           <div className="container-fluid">
// //             <div className="row align-items-center">
// //               <div className="col-lg-3 col-md-3 col-3 d-lg-none dl-block">
// //                 <div className="mobail-menu">
// //                   <MobileMenu />
// //                 </div>
// //               </div>

// //               <div className="col-lg-3 col-md-6 col-6">
// //                 <div className="navbar-header">
// //                   <Link
// //                     onClick={ClickHandler}
// //                     className="navbar-brand"
// //                     to="/home"
// //                   >
// //                     <img src={props.Logo} alt="" />
// //                   </Link>
// //                 </div>
// //               </div>

// //               <div className="col-lg-6 col-md-1 col-1">
// //                 <div id="navbar" className="collapse navbar-collapse navigation-holder">
// //                   <button className="menu-close">
// //                     <i className="ti-close"></i>
// //                   </button>

// //                   <ul className="nav navbar-nav mb-2 mb-lg-0">
// //                     <li className="menu-item-has-children">
// //                       <Link onClick={ClickHandler} to="/">
// //                         Leving
// //                       </Link>
// //                       <ul className="sub-menu">
// //                         <li><Link onClick={ClickHandler} to="/home">Home Style 1</Link></li>
// //                         <li><Link onClick={ClickHandler} to="/home2">Home Style 2</Link></li>
// //                         <li><Link onClick={ClickHandler} to="/home3">Home Style 3</Link></li>
// //                         <li><Link onClick={ClickHandler} to="/home4">Home Style 4</Link></li>
// //                         <li><Link onClick={ClickHandler} to="/home5">Home Style 5</Link></li>
// //                       </ul>
// //                     </li>

// //                     <li><Link onClick={ClickHandler} to="/about">About</Link></li>

// //                     <li className="menu-item-has-children">
// //                       <Link to="/service">Service</Link>
// //                       <ul className="sub-menu">
// //                         <li><Link onClick={ClickHandler} to="/service">Service</Link></li>
// //                         <li><Link onClick={ClickHandler} to="/service-s2">Service S2</Link></li>
// //                         <li><Link onClick={ClickHandler} to="/service-single/1">Service Single</Link></li>
// //                       </ul>
// //                     </li>

// //                     <li className="menu-item-has-children">
// //                       <Link onClick={ClickHandler} to="/project">Project</Link>
// //                       <ul className="sub-menu">
// //                         <li><Link onClick={ClickHandler} to="/project">Project</Link></li>
// //                         <li><Link onClick={ClickHandler} to="/project-s2">Project S2</Link></li>
// //                         <li><Link onClick={ClickHandler} to="/project-single/1">Project Single</Link></li>
// //                       </ul>
// //                     </li>

// //                     <li className="menu-item-has-children">
// //                       <Link onClick={ClickHandler} to="/blog">Blog</Link>
// //                       <ul className="sub-menu">
// //                         <li><Link onClick={ClickHandler} to="/blog">Blog right sidebar</Link></li>
// //                         <li><Link onClick={ClickHandler} to="/blog-left-sidebar">Blog left sidebar</Link></li>
// //                         <li><Link onClick={ClickHandler} to="/blog-fullwidth">Blog fullwidth</Link></li>
// //                         <li className="menu-item-has-children">
// //                           <Link onClick={ClickHandler} to="/">Blog details</Link>
// //                           <ul className="sub-menu">
// //                             <li><Link onClick={ClickHandler} to="/blog-single/1">Blog details right sidebar</Link></li>
// //                             <li><Link onClick={ClickHandler} to="/blog-single-left-sidebar/1">Blog details left sidebar</Link></li>
// //                             <li><Link onClick={ClickHandler} to="/blog-single-fullwidth/1">Blog details fullwidth</Link></li>
// //                           </ul>
// //                         </li>
// //                       </ul>
// //                     </li>

// //                     <li className="menu-item-has-children">
// //                       <Link onClick={ClickHandler} to="/">Pages</Link>
// //                       <ul className="sub-menu">
// //                         <li><Link onClick={ClickHandler} to="/shop">Shop</Link></li>
// //                         <li><Link onClick={ClickHandler} to="/product-single/1">Shop Single</Link></li>
// //                         <li><Link onClick={ClickHandler} to="/cart">Cart</Link></li>
// //                         <li><Link onClick={ClickHandler} to="/checkout">Checkout</Link></li>
// //                         <li><Link onClick={ClickHandler} to="/pricing">Pricing</Link></li>
// //                         <li><Link onClick={ClickHandler} to="/team-single/1">Team Single</Link></li>
// //                         <li><Link onClick={ClickHandler} to="/testimonial">Testimonial</Link></li>
// //                         <li><Link onClick={ClickHandler} to="/404">404 Error</Link></li>
// //                         <li><Link onClick={ClickHandler} to="/login">Login</Link></li>
// //                         <li><Link onClick={ClickHandler} to="/register">Register</Link></li>
// //                       </ul>
// //                     </li>

// //                     <li><Link onClick={ClickHandler} to="/contact">Contact</Link></li>
// //                   </ul>
// //                 </div>
// //               </div>

// //               <div className="col-lg-3 col-md-2 col-2">
// //                 <div className="header-right">
// //                   {/* SEARCH */}
// //                   <div className="header-search-form-wrapper">
// //                     <div className="cart-search-contact">
// //                       <button
// //                         onClick={() => setMenuState(!menuActive)}
// //                         className="search-toggle-btn"
// //                       >
// //                         <i
// //                           className={`fi ti-search ${
// //                             menuActive ? "ti-close" : "fi "
// //                           }`}
// //                         ></i>
// //                       </button>

// //                       <div
// //                         className={`header-search-form ${
// //                           menuActive ? "header-search-content-toggle" : ""
// //                         }`}
// //                       >
// //                         <form onSubmit={SubmitHandler}>
// //                           <div>
// //                             <input
// //                               type="text"
// //                               className="form-control"
// //                               placeholder="Search here..."
// //                             />
// //                             <button type="submit">
// //                               <i className="fi ti-search"></i>
// //                             </button>
// //                           </div>
// //                         </form>
// //                       </div>
// //                     </div>
// //                   </div>

// //                   {/* CART */}
// //                   <div className="mini-cart">
// //                     <button
// //                       className="cart-toggle-btn"
// //                       onClick={() => setcartState(!cartActive)}
// //                     >
// //                       <i className="fi ti-shopping-cart"></i>
// //                       <span className="cart-count">{carts.length}</span>
// //                     </button>

// //                     <div
// //                       className={`mini-cart-content ${
// //                         cartActive ? "mini-cart-content-toggle" : ""
// //                       }`}
// //                     >
// //                       <button
// //                         className="mini-cart-close"
// //                         onClick={() => setcartState(!cartActive)}
// //                       >
// //                         <i className="ti-close"></i>
// //                       </button>

// //                       <div className="mini-cart-items">
// //                         {carts &&
// //                           carts.length > 0 &&
// //                           carts.map((catItem, crt) => (
// //                             <div className="mini-cart-item clearfix" key={crt}>
// //                               <div className="mini-cart-item-image">
// //                                 <span>
// //                                   <img src={catItem.proImg} alt="icon" />
// //                                 </span>
// //                               </div>

// //                               <div className="mini-cart-item-des">
// //                                 <p>{catItem.title} </p>
// //                                 <span className="mini-cart-item-price">
// //                                   ${catItem.price} x {catItem.qty}
// //                                 </span>

// //                                 <span className="mini-cart-item-quantity">
// //                                   <button
// //                                     onClick={() =>
// //                                       dispatch(removeFromCart(catItem.id))
// //                                     }
// //                                     className="btn btn-sm btn-danger"
// //                                   >
// //                                     <i className="ti-close"></i>
// //                                   </button>
// //                                 </span>
// //                               </div>
// //                             </div>
// //                           ))}
// //                       </div>

// //                       <div className="mini-cart-action clearfix">
// //                         <span className="mini-checkout-price">
// //                           Subtotal: <span> ${totalPrice(carts)}</span>
// //                         </span>

// //                         <div className="mini-btn">
// //                           <Link to="/checkout" className="view-cart-btn s1">
// //                             Checkout
// //                           </Link>
// //                           <Link to="/cart" className="view-cart-btn">
// //                             View Cart
// //                           </Link>
// //                         </div>
// //                       </div>
// //                     </div>
// //                   </div>
// //                   {/* END CART */}
// //                 </div>
// //               </div>

// //             </div>
// //           </div>
// //         </nav>
// //       </div>
// //     </header>
// //   );
// // };

// // export default Header;
// // import React, { useState } from "react";
// // import { Link } from "react-router-dom";
// // import { useSelector } from "react-redux";

// // const Header = (props) => {
// //   const carts = useSelector((state) => state.cart.cart);
// //   const [searchOpen, setSearchOpen] = useState(false);
// //   const [activeMenu, setActiveMenu] = useState(null);

// //   const menuData = {
// //     LIVING: ["Fabric Seating", "Leather Seating", "The Cloud® Collection", "Shelving & Cabinets", "Sideboards", "Media", "Tables", "Consoles", "Office", "Shop By Room", "Sale"],
// //     DINING: ["Dining Tables", "Dining Chairs", "Bar & Counter Stools", "Buffets & Sideboards", "China Cabinets", "Bar Cabinets", "Sale"],
// //     BED: ["Beds", "Headboards", "Nightstands", "Dressers & Armoires", "Mirrors", "Benches", "Sale"],
// //     BATH: ["Vanities", "Medicine Cabinets", "Bath Accessories", "Towels", "Sale"],
// //     OUTDOOR: ["Outdoor Seating", "Outdoor Tables", "Outdoor Dining", "Umbrellas & Shade", "Sale"],
// //     LIGHTING: ["Chandeliers", "Pendants", "Floor Lamps", "Table Lamps", "Wall Lighting", "Sale"],
// //     TEXTILES: ["Bedding", "Throws & Blankets", "Pillows", "Sale"],
// //     RUGS: ["All Rugs", "Indoor Rugs", "Outdoor Rugs", "Sale"],
// //     "DÉCOR": ["Art", "Mirrors", "Candles & Scent", "Vases & Vessels", "Sale"],
// //     "BABY & CHILD": ["Nursery", "Kids Beds", "Kids Storage", "Sale"],
// //     TEEN: ["Teen Beds", "Teen Desks", "Teen Seating", "Sale"],
// //     SALE: [],
// //     "INTERIOR DESIGN": ["Book a Consultation", "Our Services", "Find a Designer"],
// //   };

// //   return (
// //     <>
// //       <header style={{ position: "sticky", top: 0, zIndex: 1000 }}>
// //         <nav className="rh-navbar">

// //           {/* TOP BAR */}
// //           <div className="rh-topbar">

// //             {/* LEFT */}
// //             <div className="rh-left">
// //               <i className="ti-menu rh-icon"></i>
// //               <div className="search-wrap">
// //                 <i className="ti-search rh-icon" onClick={() => setSearchOpen(!searchOpen)}></i>
// //                 <input
// //                   className={`rh-search-input ${searchOpen ? "open" : ""}`}
// //                   type="text"
// //                   placeholder="Search..."
// //                 />
// //               </div>
// //             </div>

// //             {/* CENTER LOGO */}
// //             <div className="rh-logo">
// //               <Link to="/home" style={{ textDecoration: "none", color: "inherit" }}>
// //                 <div className="rh-text-logo">
// //                   <span className="logo-the">The</span>
// //                   <span className="logo-world">WORLD <em>of</em></span>
// //                   <span className="logo-rh">TANSHU</span>
// //                 </div>
// //               </Link>
// //             </div>

// //             {/* RIGHT */}
// //             <div className="rh-right">
// //               <span className="country"> &#9662;</span>
// //               <i className="ti-user rh-icon"></i>
// //               <div className="cart-icon">
// //                 <i className="ti-shopping-cart rh-icon"></i>
// //                 {carts.length >  <span className="cart-count">{}</span>}
// //               </div>
// //             </div>

// //           </div>

// //           {/* CATEGORY MENU */}
// //           <div className="rh-menu">
// //             <ul>
// //               {Object.keys(menuData).map((item) => (
// //                 <li
// //                   key={item}
// //                   className={item === "SALE" ? "sale-item" : ""}
// //                   onMouseEnter={() => setActiveMenu(item)}
// //                   onMouseLeave={() => setActiveMenu(null)}
// //                 >
// //                   <Link to="/">{item}</Link>

// //                   {menuData[item].length > 0 && activeMenu === item && (
// //                     <div className="rh-dropdown">
// //                       <ul>
// //                         {menuData[item].map((sub, i) => (
// //                           <li key={i} className={sub === "Sale" ? "sub-sale" : ""}>
// //                             <Link to="/">{sub}</Link>
// //                           </li>
// //                         ))}
// //                       </ul>
// //                     </div>
// //                   )}
// //                 </li>
// //               ))}
// //             </ul>
// //           </div>

// //         </nav>
// //       </header>

// //       <style>{`

// //         * { box-sizing: border-box; margin: 0; padding: 0; }

// //         .rh-navbar {
// //           background: #ffffff;
// //           width: 100%;
// //           padding: 18px 50px 0;
// //           font-family: 'Times New Roman', Times, serif;
// //           border-bottom: 1px solid #d9d3cc;
// //         }

// //         /* ---- TOP BAR ---- */
// //         .rh-topbar {
// //           display: flex;
// //           align-items: center;
// //           justify-content: space-between;
// //           padding-bottom: 14px;
// //         }

// //         .rh-left {
// //           display: flex;
// //           align-items: center;
// //           gap: 22px;
// //           flex: 1;
// //         }

// //         .rh-icon {
// //           font-size: 28px;
// //           cursor: pointer;
// //           color: #2a2a2a;
// //         }

// //         .search-wrap {
// //           display: flex;
// //           align-items: center;
// //           gap: 8px;
// //         }

// //         .rh-search-input {
// //           width: 0;
// //           opacity: 0;
// //           border: none;
// //           border-bottom: 1px solid #2a2a2a;
// //           background: transparent;
// //           outline: none;
// //           font-size: 15px;
// //           padding: 3px 4px;
// //           transition: width 0.35s ease, opacity 0.35s ease;
// //           font-family: 'Times New Roman', serif;
// //           color: #333;
// //           letter-spacing: 0.5px;
// //         }

// //         .rh-search-input.open {
// //           width: 200px;
// //           opacity: 1;
// //         }

// //         /* ---- LOGO ---- */
// //         .rh-logo {
// //           flex: 1;
// //           display: flex;
// //           justify-content: center;
// //         }

// //         .rh-text-logo {
// //           display: flex;
// //           flex-direction: column;
// //           align-items: center;
// //           line-height: 1;
// //           color: #1a1a1a;
// //         }

// //         .logo-the {
// //           font-size: 11px;
// //           font-style: italic;
// //           letter-spacing: 1px;
// //           font-family: 'Times New Roman', serif;
// //           color: #1a1a1a;
// //         }

// //         .logo-world {
// //           font-size: 11px;
// //           letter-spacing: 5px;
// //           font-family: 'Times New Roman', serif;
// //           color: #1a1a1a;
// //           text-transform: uppercase;
// //         }

// //         .logo-world em {
// //           font-style: italic;
// //           letter-spacing: 1px;
// //         }

// //         .logo-rh {
// //           font-size: 70px;
// //           font-weight: 200;
// //           letter-spacing: -3px;
// //           font-family: 'Times New Roman', serif;
// //           color: #1a1a1a;
// //           line-height: 0.82;
// //         }

// //         /* ---- RIGHT ---- */
// //         .rh-right {
// //           display: flex;
// //           align-items: center;
// //           gap: 22px;
// //           flex: 1;
// //           justify-content: flex-end;
// //         }

// //         .country {
// //           font-size: 13px;
// //           letter-spacing: 1px;
// //           cursor: pointer;
// //           color: #2a2a2a;
// //           font-family: 'Times New Roman', serif;
// //         }

// //         .cart-icon {
// //           position: relative;
// //           cursor: pointer;
// //         }

// //         .cart-count {
// //           position: absolute;
// //           top: -8px;
// //           right: -10px;
// //           background: #1a1a1a;
// //           color: white;
// //           font-size: 10px;
// //           padding: 2px 5px;
// //           border-radius: 50%;
// //         }

// //         /* ---- MENU BAR ---- */
// //         .rh-menu {
// //           width: 100%;
// //           text-align: center;
// //           padding: 12px 0 0;
// //         }

// //         .rh-menu > ul {
// //           list-style: none;
// //           display: flex;
// //           justify-content: space-between;
// //           // align-items: center;
// //           flex-wrap: nowrap;
// //           gap: 2;
// //           width: 100%;
// //         }

// //         .rh-menu > ul > li {
// //           position: relative;
// //           padding: 0 16px 14px;
// //           white-space: nowrap;
// //         }

// //         .rh-menu > ul > li > a {
// //           text-decoration: none;
// //           color: #4a4440;
// //           font-size: 22px;
// //           letter-spacing: 2px;
// //           font-family: 'Times New Roman', serif;
// //           font-weight: 400;

// //         }

// //         .rh-menu > ul > li > a:hover {
// //           color: #000;
// //           border-bottom: 1px solid #000;
// //           padding-bottom: 2px;
// //         }

// //         .rh-menu > ul > li.sale-item > a {
// //           color: #b5282a;
// //         }

// //         /* ---- DROPDOWN ---- */
// //         .rh-dropdown {
// //           position: absolute;
// //           top: 100%;
// //           left: 0;
// //           background: #ffffff;
// //           min-width: 500px;
// //           padding: 24px 32px 24px 24px;
// //           box-shadow: 0 6px 24px rgba(0,0,0,0.07);
// //           z-index: 9999;
// //           text-align: left;
// //           border-top: border-top: 2px solid #1a1a1a;
// //         }

// //         .rh-dropdown > ul {
// //           list-style: none;
// //           display: flex;
// //           flex-direction: column;
// //         }

// //         .rh-dropdown > ul > li {
// //           padding: 9px 0;
// //         }

// //         .rh-dropdown > ul > li > a {
// //           text-decoration: none;
// //           color: #2a2a2a;
// //           font-size: 17px;
// //           letter-spacing: 0.3px;
// //           font-family: 'Times New Roman', serif;
// //           font-weight: 400;
// //           transition: color 0.2s;
// //         }

// //         .rh-dropdown > ul > li > a:hover {
// //           color: #000;
// //         }

// //         .rh-dropdown > ul > li.sub-sale > a {
// //           color: #b5282a;
// //         }

// //         /* ---- RESPONSIVE ---- */
// //         @media (max-width: 1200px) {
// //           .rh-menu > ul > li {
// //             padding: 0 10px 14px;
// //           }
// //           .rh-menu > ul > li > a {
// //             font-size: 11px;
// //             letter-spacing: 1px;
// //           }
// //         }

// //         @media (max-width: 991px) {
// //           .rh-menu {
// //             display: none;
// //           }
// //           .rh-navbar {
// //             padding: 12px 20px;
// //           }
// //           .logo-rh {
// //             font-size: 48px;
// //           }
// //         }
// //       `}</style>
// //     </>
// //   );
// // };

// // export default Header;
// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";
// import CollectionLink from "../Collectionlink";

// const Header = (props) => {
//  // Example category, you can make this dynamic based on user interaction
//   const carts = useSelector((state) => state.cart.cart);
//   const [searchOpen, setSearchOpen] = useState(false);
//   const [activeMenu, setActiveMenu] = useState(null);
//   const [activeSub, setActiveSub] = useState(null);

//   const menuData = {
//     LIVING: {
//       "Fabric Seating": ["Seating Collections" , "Sofas", "Sectionals", "Chairs", "Swivel Chairs", "Recliner Seating", "Sleeper Sofas", "Chaises & Daybeds", "Benches", "Ottomans & Stools", "Fabric By The Yard", "Fabric Care", "Upholstery Swatches", "Sale"],
//       "Leather Seating": ["Seating Collections", "Sofas", "Sectionals", "Chairs", "Swivel Chairs", "Recliner Seating", "Sleeper Sofas", "Chaises & Daybeds", "Benches", "Ottomans & Stools", "Leather Care", "Leather Swatches"],
//       "The Cloud® Collection": ["Explore The Cloud® Collection", "Cloud Fabric Collection", "Cloud Leather Collection", "Cloud Modular Tables", "Upholstery Swatches"],
//       "Shelving & Cabinets": ["Cabinet Collections", "Shelving Collections", "Cabinets", "Shelving", "Sideboard & Hutches", "Sideboards & Consoles", "Bar Cabinets & Carts"],
//       "Sideboards": ["Sideboard Collections", "All Sideboards", "Closed Sideboards", "Glass Sideboards", "Sideboard & Hutches"],
//       "Media": ["Media Collections", "All Media Consoles", "Closed Media", "Glass Media", "Media Armoires"],
//       "Tables": ["Coffee & Cocktail Table Collections", "Coffee & Cocktail Tables", "Console Tables", "Entry Tables", "Side Tables", "Drink Tables"],
//       "Consoles": ["Console Tables", "Sofa Console Tables"],
//       "Office": ["Office Collections", "Desks", "Office Seating", "Shelving", "Task Table Lighting", "Office Accessories"],
//       "Shop By Room": ["Living Rooms", "Office"],
//       "Sale": ["All Living Sale", "Seating Collections", "Sofas", "Sectionals", "Fabric Chairs", "Leather Chairs", "Ottomans & Stools", "Coffee Tables", "Side Tables", "Console Tables", "Sideboards", "Media Consoles", "Cabinets"],
//     },
//     DINING: {
//      "Tables": [
//     "Rectangular Table Collections",
//     "Round & Oval Table Collections",
//     "All Dining Tables",
//     "Rectangular Tables",
//     "Round & Oval Tables",
//     "Extension Tables",
//     "Stone Tables",
//     "Bistro Tables"
//   ],

//   "Chairs": [
//     "Dining Chair Collections",
//     "Fabric Chair Collections",
//     "Leather Chair Collections",
//     "Wood & Woven Chair Collections",
//     "All Dining Chairs",
//     "Fabric Chairs",
//     "Leather Chairs",
//     "Slipcovered Chairs",
//     "Wood & Woven Chairs",
//     "Bar & Counter Stools",
//     "Upholstery Swatches"
//   ],

//   "Bar & Counter": [
//     "Stool Collections",
//     "Fabric Stool Collections",
//     "Leather Stool Collections",
//     "Wood, Metal & Woven Stool Collections",
//     "Bar & Counter Stools",
//     "Bar Cabinets & Carts",
//     "Upholstery Swatches"
//   ],

//   "Shelving & Cabinets": [
//     "Cabinet Collections",
//     "Shelving Collections",
//     "Cabinets",
//     "Shelving",
//     "Sideboard & Hutches",
//     "Sideboards & Consoles",
//     "Bar Cabinets & Carts"
//   ],

//   "Sideboards": [
//     "Sideboard Collections",
//     "All Sideboards",
//     "Closed Sideboards",
//     "Glass Sideboards",
//     "Sideboard & Hutches"
//   ],

//   "Shop By Room": [
//     "Dining"
//   ],

//   "Sale": [
//     "All Dining Sale",
//     "All Dining Tables",
//     "All Dining Chairs",
//     "Bar & Counter Stools",
//     "Bar Cabinets & Carts",
//     "Dining Benches",
//     "Sideboards",
//     "Sideboard & Hutches",
//     "Cabinets",
//     "Shelving"
//   ]
//     },
//     BED: {
//       "Beds": [
//     "All Beds",
//     "Upholstered Beds",
//     "Wood Beds",
//     "Metal Beds",
//     "Canopy Beds"
//   ],

//   "Headboards": [
//     "All Headboards",
//     "Upholstered Headboards",
//     "Wood Headboards"
//   ],

//   "Nightstands": [
//     "All Nightstands",
//     "1-Drawer",
//     "2-Drawer",
//     "Open Nightstands"
//   ],

//   "Dressers & Armoires": [
//     "All Dressers",
//     "Armoires",
//     "Chests"
//   ],

//   "Mirrors": [
//     "All Mirrors",
//     "Floor Mirrors",
//     "Wall Mirrors"
//   ],

//   "Benches": [
//     "All Benches",
//     "Upholstered Benches",
//     "Wood Benches"
//   ],

//   "Sale": []
//     },
//     BATH: {
//       "Vanities": ["Single Vanities", "Double Vanities", "Freestanding Vanities"],
//       "Medicine Cabinets": ["All Medicine Cabinets", "Surface Mount", "Recessed"],
//       "Bath Accessories": ["Towel Bars", "Hooks", "Shelves", "Toilet Paper Holders"],
//       "Towels": ["Bath Towels", "Hand Towels", "Washcloths", "Bath Mats"],
//       "Sale": [],
//     },
//     OUTDOOR: {
//       "Outdoor Seating": ["All Outdoor Seating", "Sofas", "Chairs", "Daybeds", "Swings"],
//       "Outdoor Tables": ["Dining Tables", "Coffee Tables", "Side Tables"],
//       "Outdoor Dining": ["Dining Sets", "Dining Chairs", "Dining Tables"],
//       "Umbrellas & Shade": ["Umbrellas", "Shade Structures"],
//       "Sale": [],
//     },
//     LIGHTING: {
//       "Chandeliers": ["All Chandeliers", "Linear", "Round", "Drum"],
//       "Pendants": ["All Pendants", "Mini Pendants", "Multi-Light"],
//       "Floor Lamps": ["All Floor Lamps", "Arc Lamps", "Torchieres"],
//       "Table Lamps": ["All Table Lamps", "Buffet Lamps", "Desk Lamps"],
//       "Wall Lighting": ["All Wall Lighting", "Sconces", "Bath Lighting"],
//       "Sale": [],
//     },
//     TEXTILES: {
//       "Bedding": ["Duvet Covers", "Sheets", "Shams", "Comforters"],
//       "Throws & Blankets": ["Throws", "Blankets", "Quilts"],
//       "Pillows": ["Decorative Pillows", "Pillow Inserts", "Lumbar Pillows"],
//       "Sale": [],
//     },
//     RUGS: {
//       "All Rugs": ["Indoor Rugs", "Outdoor Rugs", "Cowhide Rugs"],
//       "Indoor Rugs": ["Wool Rugs", "Cotton Rugs", "Jute Rugs"],
//       "Outdoor Rugs": ["All Outdoor Rugs"],
//       "Sale": [],
//     },
//     "DÉCOR": {
//       "Art": ["All Art", "Paintings", "Photography", "Sculpture"],
//       "Mirrors": ["All Mirrors", "Floor Mirrors", "Wall Mirrors"],
//       "Candles & Scent": ["Candles", "Diffusers", "Room Sprays"],
//       "Vases & Vessels": ["Vases", "Bowls", "Trays"],
//       "Sale": [],
//     },
//     "BABY & CHILD": {
//       "Nursery": ["Cribs", "Dressers", "Gliders", "Change Tables"],
//       "Kids Beds": ["Twin Beds", "Full Beds", "Bunk Beds", "Loft Beds"],
//       "Kids Storage": ["Dressers", "Shelving", "Toy Storage"],
//       "Sale": [],
//     },
//     TEEN: {
//       "Teen Beds": ["Twin Beds", "Full Beds", "Loft Beds"],
//       "Teen Desks": ["All Desks", "Corner Desks"],
//       "Teen Seating": ["Chairs", "Sofas", "Bean Bags"],
//       "Sale": [],
//     },
//     SALE: {},
//     "INTERIOR DESIGN": {
//       "Book a Consultation": [],
//       "Our Services": [],
//       "Find a Designer": [],
//     },
//   };

//   return (
//     <>

//       <header style={{ position: "sticky", top: 0, zIndex: 1000 }}>

//         <nav className="rh-navbar">

//           {/* TOP BAR */}
//           <div className="rh-topbar">
//             <div className="rh-left">
//               <i className="ti-menu rh-icon"></i>
//               <div className="search-wrap">
//                 <i className="ti-search rh-icon" onClick={() => setSearchOpen(!searchOpen)}></i>
//                 <input
//                   className={`rh-search-input ${searchOpen ? "open" : ""}`}
//                   type="text"
//                   placeholder="Search..."
//                 />
//               </div>
//             </div>

//             <div className="rh-logo">
//               <Link to="/home" style={{ textDecoration: "none", color: "inherit" }}>
//                 <div className="rh-text-logo">
//                   <span className="logo-the">The</span>
//                   <span className="logo-world">WORLD <em>of</em></span>
//                   <span className="logo-rh">TANSHU</span>
//                 </div>
//               </Link>
//             </div>

//             <div className="rh-right">
//               <span className="country">USA &#9662;</span>
//               <i className="ti-user rh-icon"></i>
//               <div className="cart-icon">
//                 <i className="ti-shopping-cart rh-icon"></i>
//                 {carts.length > 0 && <span className="cart-count">{carts.length}</span>}
//               </div>
//             </div>
//           </div>

//           {/* CATEGORY MENU */}
//           <div className="rh-menu">
//   <ul>
//     {Object.keys(menuData).map((item) => (
//       <li
//         key={item}
//         className={item === "SALE" ? "sale-item" : ""}
//         onMouseEnter={() => { setActiveMenu(item); setActiveSub(null); }}
//         onMouseLeave={() => { setActiveMenu(null); setActiveSub(null); }}
//       >
//         <Link to="/">{item}</Link>

//         {Object.keys(menuData[item]).length > 0 && activeMenu === item && (
//           <div className="rh-dropdown">
//             {/* LEFT - Level 1 */}
//             <div className="rh-dropdown-left">
//               {Object.keys(menuData[item]).map((sub, i) => (
//                 <div
//                   key={i}
//                   className={`rh-sub-item ${activeSub === sub ? "active" : ""} ${sub === "Sale" ? "sub-sale" : ""}`}
//                   onMouseEnter={() => setActiveSub(sub)}
//                 >
//                   <Link to={
//                     item === "LIVING" && sub === "Fabric Seating"
//                       ? "/setting-collection"
//                       : "#"
//                   }>
//                     {sub}
//                   </Link>
//                 </div>
//               ))}
//             </div>

//             {/* RIGHT - Level 2 */}
//             {activeSub && menuData[item][activeSub] && menuData[item][activeSub].length > 0 && (
//               <div className="rh-dropdown-right">
//                 {menuData[item][activeSub].map((subItem, j) => (
//                   <div key={j} className="rh-sub2-item">
//                     <Link to={
//                       item === "LIVING" && activeSub === "Fabric Seating" && subItem === "Seating Collections"
//                         ? "/setting-collection"
//                         : "#"
//                     }>
//                       {subItem}
//                     </Link>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//         )}
//       </li>
//     ))}
//   </ul>
// </div>

//         </nav>
//       </header>

//       <style>{`
//         * { box-sizing: border-box; margin: 0; padding: 0; }

//         .rh-navbar {
//           background: #ffffff;
//           width: 100%;
//           padding: 18px 50px 0;
//           font-family: 'Times New Roman', Times, serif;
//           border-bottom: 1px solid #d9d3cc;
//         }

//         .rh-topbar {
//           display: flex;
//           align-items: center;
//           justify-content: space-between;
//           padding-bottom: 14px;
//         }

//         .rh-left {
//           display: flex;
//           align-items: center;
//           gap: 22px;
//           flex: 1;
//         }

//         .rh-icon {
//           font-size: 22px;
//           cursor: pointer;
//           color: #2a2a2a;
//         }

//         .search-wrap {
//           display: flex;
//           align-items: center;
//           gap: 8px;
//         }

//         .rh-search-input {
//           width: 0;
//           opacity: 0;
//           border: none;
//           border-bottom: 1px solid #2a2a2a;
//           background: transparent;
//           outline: none;
//           font-size: 15px;
//           padding: 3px 4px;
//           transition: width 0.35s ease, opacity 0.35s ease;
//           font-family: 'Times New Roman', serif;
//           color: #333;
//         }

//         .rh-search-input.open {
//           width: 200px;
//           opacity: 1;
//         }

//         .rh-logo {
//           flex: 1;
//           display: flex;
//           justify-content: center;
//         }

//         .rh-text-logo {
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           line-height: 1;
//           color: #1a1a1a;
//         }

//         .logo-the {
//           font-size: 11px;
//           font-style: italic;
//           letter-spacing: 1px;
//           font-family: 'Times New Roman', serif;
//         }

//         .logo-world {
//           font-size: 11px;
//           letter-spacing: 5px;
//           font-family: 'Times New Roman', serif;
//           text-transform: uppercase;
//         }

//         .logo-world em {
//           font-style: italic;
//           letter-spacing: 1px;
//         }

//         .logo-rh {
//           font-size: 70px;
//           font-weight: 200;
//           letter-spacing: -3px;
//           font-family: 'Times New Roman', serif;
//           color: #1a1a1a;
//           line-height: 0.82;
//         }

//         .rh-right {
//           display: flex;
//           align-items: center;
//           gap: 22px;
//           flex: 1;
//           justify-content: flex-end;
//         }

//         .country {
//           font-size: 13px;
//           letter-spacing: 1px;
//           cursor: pointer;
//           color: #2a2a2a;
//           font-family: 'Times New Roman', serif;
//         }

//         .cart-icon {
//           position: relative;
//           cursor: pointer;
//         }

//         .cart-count {
//           position: absolute;
//           top: -8px;
//           right: -10px;
//           background: #1a1a1a;
//           color: white;
//           font-size: 10px;
//           padding: 2px 5px;
//           border-radius: 50%;
//         }

//         .rh-menu {
//           width: 100%;
//           padding: 12px 0 0;
//         }

//         .rh-menu > ul {
//           list-style: none;
//           display: flex;
//           justify-content: space-between;
//           flex-wrap: nowrap;
//           width: 100%;
//         }

//         .rh-menu > ul > li {
//           position: relative;
//           padding: 0 8px 14px;
//           white-space: nowrap;
//         }

//         .rh-menu > ul > li > a {
//           text-decoration: none;
//           color: #4a4440;
//           font-size: 22px;
//           letter-spacing: 2px;
//           font-family: 'Times New Roman', serif;
//           font-weight: 400;
//         }

//         .rh-menu > ul > li > a:hover {
//           color: #000;
//           border-bottom: 1px solid #000;
//           padding-bottom: 2px;
//         }

//         .rh-menu > ul > li.sale-item > a {
//           color: #b5282a;
//         }

//         .rh-dropdown {
//           position: absolute;
//           top: 100%;
//           left: 0;
//           background: #ffffff;
//           display: flex;
//           min-width: 500px;
//           padding: 24px;
//           box-shadow: 0 6px 24px rgba(0,0,0,0.08);
//           z-index: 9999;
//           border-top: 2px solid #1a1a1a;
//         }

//         .rh-dropdown-left {
//           min-width: 220px;
//           border-right: 1px solid #e8e4e0;
//           padding-right: 24px;
//         }

//         .rh-sub-item {
//           padding: 8px 0;
//           cursor: pointer;
//         }

//         .rh-sub-item a {
//           text-decoration: none;
//           color: #777;
//           font-size: 18px;
//           font-family: 'Times New Roman', serif;
//           transition: color 0.2s;
//         }

//         .rh-sub-item:hover a,
//         .rh-sub-item.active a {
//           color: #000;
//           font-weight: 600;
//           text-decoration: underline;
//         }

//         .rh-sub-item.sub-sale a {
//           color: #b5282a;
//         }

//         .rh-dropdown-right {
//           padding-left: 32px;
//           min-width: 220px;
//         }

//         .rh-sub2-item {
//           padding: 8px 0;
//         }

//         .rh-sub2-item a {
//           text-decoration: none;
//           color: #2a2a2a;
//           font-size: 18px;
//           font-family: 'Times New Roman', serif;
//           transition: color 0.2s;
//         }

//         .rh-sub2-item a:hover {
//           color: #000;
//           text-decoration: underline;
//         }

//         @media (max-width: 1200px) {
//           .rh-menu > ul > li { padding: 0 6px 14px; }
//           .rh-menu > ul > li > a { font-size: 11px; letter-spacing: 1px; }
//         }

//         @media (max-width: 991px) {
//           .rh-menu { display: none; }
//           .rh-navbar { padding: 12px 20px; }
//           .logo-rh { font-size: 48px; }
//         }
//       `}</style>
//     </>
//   );
// };

// export default Header;
// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";
// import axios from "axios";

// const Header = (props) => {
//   const carts = useSelector((state) => state.cart.cart);
//   const [searchOpen, setSearchOpen] = useState(false);
//   const [activeMenu, setActiveMenu] = useState(null);
//   const [activeSub, setActiveSub] = useState(null);

//   // API STATE
//   const [categories, setCategories] = useState([]);
//   const [subCategories, setSubCategories] = useState({});      // { catID: [...subs] }
//   const [lowerCategories, setLowerCategories] = useState({});  // { subID: [...lowers] }

//   // 1) FETCH ALL CATEGORIES
//   useEffect(() => {
//     axios
//       .get("https://tanshu.checkour.work/api/product/category-list")
//       .then((res) => {
//         setCategories(res.data.data.data);
//       })
//       .catch((err) => console.log(err));
//   }, []);

//   // 2) FETCH SUBCATEGORIES when category hovered
//   const handleCatHover = (catID) => {
//     setActiveMenu(catID);
//     setActiveSub(null);
//     if (!subCategories[catID]) {
//       axios
//         .get(`https://tanshu.checkour.work/api/product/sub-category-list/${catID}`)
//         .then((res) => {
//           setSubCategories((prev) => ({
//             ...prev,
//             [catID]: res.data.data.data
//           }));
//         })
//         .catch((err) => console.log(err));
//     }
//   };

//   // 3) FETCH LOWER CATEGORIES when subcategory hovered
//   const handleSubHover = (subID) => {
//     setActiveSub(subID);
//     if (!lowerCategories[subID]) {
//       axios
//         .get(`https://tanshu.checkour.work/api/product/lowercategory-list/${subID}`)
//         .then((res) => {
//           setLowerCategories((prev) => ({
//             ...prev,
//             [subID]: res.data.data.data
//           }));
//         })
//         .catch((err) => console.log(err));
//     }
//   };

//   return (
//     <>
//       <header style={{ position: "sticky", top: 0, zIndex: 1000 }}>
//         <nav className="rh-navbar">

//           {/* TOP BAR */}
//           <div className="rh-topbar">
//             <div className="rh-left">
//               <i className="ti-menu rh-icon"></i>
//               <div className="search-wrap">
//                 <i className="ti-search rh-icon" onClick={() => setSearchOpen(!searchOpen)}></i>
//                 <input
//                   className={`rh-search-input ${searchOpen ? "open" : ""}`}
//                   type="text"
//                   placeholder="Search..."
//                 />
//               </div>
//             </div>

//             <div className="rh-logo">
//               <Link to="/home" style={{ textDecoration: "none", color: "inherit" }}>
//                 <div className="rh-text-logo">
//                   <span className="logo-the">The</span>
//                   <span className="logo-world">WORLD <em>of</em></span>
//                   <span className="logo-rh">TANSHU</span>
//                 </div>
//               </Link>
//             </div>

//            <div className="rh-right">
//   {/* SOCIAL MEDIA ICONS */}
//   <div className="social-icons">
//     <a href="https://facebook.com" target="_blank" rel="noreferrer">
//       <svg width="18" height="18" viewBox="0 0 24 24" fill="#2a2a2a">
//         <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
//       </svg>
//     </a>
//     <a href="https://instagram.com" target="_blank" rel="noreferrer">
//       <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2a2a2a" strokeWidth="2">
//         <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
//         <circle cx="12" cy="12" r="4"/>
//         <circle cx="17.5" cy="6.5" r="1" fill="#2a2a2a" stroke="none"/>
//       </svg>
//     </a>
//     <a href="https://youtube.com" target="_blank" rel="noreferrer">
//       <svg width="18" height="18" viewBox="0 0 24 24" fill="#2a2a2a">
//         <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58a2.78 2.78 0 001.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58z"/>
//         <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white"/>
//       </svg>
//     </a>
//     <a href="https://linkedin.com" target="_blank" rel="noreferrer">
//       <svg width="18" height="18" viewBox="0 0 24 24" fill="#2a2a2a">
//         <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/>
//         <rect x="2" y="9" width="4" height="12"/>
//         <circle cx="4" cy="4" r="2"/>
//       </svg>
//     </a>
//   </div>

// </div>
//           </div>

//           {/* CATEGORY MENU - API SE */}
//           <div className="rh-menu">
//             <ul>
//               {categories.map((cat) => (
//                 <li
//                   key={cat.id}
//                   onMouseEnter={() => handleCatHover(cat.id)}
//                   onMouseLeave={() => { setActiveMenu(null); setActiveSub(null); }}
//                 >
//                   <Link to={`/setting-collection?cat=${cat.id}`}>
//                     {cat.categoryName.toUpperCase()}
//                   </Link>

//                   {/* DROPDOWN */}
//                   {activeMenu === cat.id && subCategories[cat.id]?.length > 0 && (
//                     <div className="rh-dropdown">

//                       {/* LEFT - SUBCATEGORIES */}
//                       <div className="rh-dropdown-left">
//                         {subCategories[cat.id].map((sub) => (
//                           <div
//                             key={sub.id}
//                             className={`rh-sub-item ${activeSub === sub.id ? "active" : ""}`}
//                             onMouseEnter={() => handleSubHover(sub.id)}
//                           >
//                             <Link to={`/setting-collection?cat=${cat.id}&sub=${sub.id}`}>
//                               {sub.title}
//                             </Link>
//                           </div>
//                         ))}
//                       </div>

//                       {/* RIGHT - LOWER CATEGORIES */}
//                       {activeSub && lowerCategories[activeSub]?.length > 0 && (
//                         <div className="rh-dropdown-right">
//                           {lowerCategories[activeSub].map((lower) => (
//                             <div key={lower.id} className="rh-sub2-item">
//                               <Link to={`/setting-collection?cat=${cat.id}&sub=${activeSub}&lower=${lower.id}`}>
//                                 {lower.title}
//                               </Link>
//                             </div>
//                           ))}
//                         </div>
//                       )}

//                     </div>
//                   )}
//                 </li>
//               ))}

//               {/* SALE - hardcoded */}
//               {/* <li className="sale-item">
//                 <Link to="/setting-collection">SALE</Link>
//               </li> */}

//               {/* INTERIOR DESIGN - hardcoded */}
//               <li>
//                 <Link to="/">INTERIOR DESIGN</Link>
//               </li>

//             </ul>
//           </div>

//         </nav>
//       </header>

//       <style>{`
//         * { box-sizing: border-box; margin: 0; padding: 0; }

//         .rh-navbar {
//           background: #ffffff;
//           width: 100%;
//           padding: 18px 50px 0;
//           font-family: 'Times New Roman', Times, serif;
//           border-bottom: 1px solid #d9d3cc;
//         }

//         .rh-topbar {
//           display: flex;
//           align-items: center;
//           justify-content: space-between;
//           padding-bottom: 14px;
//         }
// .social-icons {
//   display: flex;
//   align-items: center;
//   gap: 14px;
// }

// .social-icons a {
//   display: flex;
//   align-items: center;
//   opacity: 0.75;
//   transition: opacity 0.2s;
// }

// .social-icons a:hover {
//   opacity: 1;
// }
//         .rh-left {
//           display: flex;
//           align-items: center;
//           gap: 22px;
//           flex: 1;
//         }

//         .rh-icon {
//           font-size: 22px;
//           cursor: pointer;
//           color: #2a2a2a;
//         }

//         .search-wrap {
//           display: flex;
//           align-items: center;
//           gap: 8px;
//         }

//         .rh-search-input {
//           width: 0;
//           opacity: 0;
//           border: none;
//           border-bottom: 1px solid #2a2a2a;
//           background: transparent;
//           outline: none;
//           font-size: 15px;
//           padding: 3px 4px;
//           transition: width 0.35s ease, opacity 0.35s ease;
//           font-family: 'Times New Roman', serif;
//           color: #333;
//         }

//         .rh-search-input.open { width: 200px; opacity: 1; }

//         .rh-logo {
//           flex: 1;
//           display: flex;
//           justify-content: center;
//         }

//         .rh-text-logo {
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           line-height: 1;
//           color: #1a1a1a;
//         }

//         .logo-the {
//           font-size: 11px;
//           font-style: italic;
//           letter-spacing: 1px;
//           font-family: 'Times New Roman', serif;
//         }

//         .logo-world {
//           font-size: 11px;
//           letter-spacing: 5px;
//           font-family: 'Times New Roman', serif;
//           text-transform: uppercase;
//         }

//         .logo-world em { font-style: italic; letter-spacing: 1px; }

//         .logo-rh {
//           font-size: 70px;
//           font-weight: 200;
//           letter-spacing: -3px;
//           font-family: 'Times New Roman', serif;
//           color: #1a1a1a;
//           line-height: 0.82;
//         }

//         .rh-right {
//           display: flex;
//           align-items: center;
//           gap: 22px;
//           flex: 1;
//           justify-content: flex-end;
//         }

//         .country {
//           font-size: 13px;
//           letter-spacing: 1px;
//           cursor: pointer;
//           color: #2a2a2a;
//           font-family: 'Times New Roman', serif;
//         }

//         .cart-icon { position: relative; cursor: pointer; }

//         .cart-count {
//           position: absolute;
//           top: -8px;
//           right: -10px;
//           background: #1a1a1a;
//           color: white;
//           font-size: 10px;
//           padding: 2px 5px;
//           border-radius: 50%;
//         }

//         .rh-menu {
//           width: 100%;
//           padding: 12px 0 0;
//         }

//         .rh-menu > ul {
//           list-style: none;
//           display: flex;
//           justify-content: space-between;
//           flex-wrap: nowrap;
//           width: 100%;
//         }

//         .rh-menu > ul > li {
//           position: relative;
//           padding: 0 8px 14px;
//           white-space: nowrap;
//         }

//         .rh-menu > ul > li > a {
//           text-decoration: none;
//           color: #4a4440;
//           font-size: 14px;
//           letter-spacing: 2px;
//           font-family: 'Times New Roman', serif;
//           font-weight: 400;
//         }

//         .rh-menu > ul > li > a:hover {
//           color: #000;
//           border-bottom: 1px solid #000;
//           padding-bottom: 2px;
//         }

//         .sale-item > a { color: #b5282a !important; }

//         .rh-dropdown {
//           position: absolute;
//           top: 100%;
//           left: 0;
//           background: #ffffff;
//           display: flex;
//           min-width: 480px;
//           padding: 24px;
//           box-shadow: 0 6px 24px rgba(0,0,0,0.08);
//           z-index: 9999;
//           border-top: 2px solid #1a1a1a;
//         }

//         .rh-dropdown-left {
//           min-width: 200px;
//           border-right: 1px solid #e8e4e0;
//           padding-right: 24px;
//         }

//         .rh-sub-item {
//           padding: 8px 0;
//           cursor: pointer;
//         }

//         .rh-sub-item a {
//           text-decoration: none;
//           color: #777;
//           font-size: 15px;
//           font-family: 'Times New Roman', serif;
//           transition: color 0.2s;
//         }

//         .rh-sub-item:hover a,
//         .rh-sub-item.active a {
//           color: #000;
//           font-weight: 600;
//           text-decoration: underline;
//         }

//         .rh-dropdown-right {
//           padding-left: 28px;
//           min-width: 200px;
//         }

//         .rh-sub2-item { padding: 8px 0; }

//         .rh-sub2-item a {
//           text-decoration: none;
//           color: #2a2a2a;
//           font-size: 15px;
//           font-family: 'Times New Roman', serif;
//           transition: color 0.2s;
//         }

//         .rh-sub2-item a:hover {
//           color: #000;
//           text-decoration: underline;
//         }

//         @media (max-width: 1200px) {
//           .rh-menu > ul > li { padding: 0 6px 14px; }
//           .rh-menu > ul > li > a { font-size: 11px; letter-spacing: 1px; }
//         }

//         @media (max-width: 991px) {
//           .rh-menu { display: none; }
//           .rh-navbar { padding: 12px 20px; }
//           .logo-rh { font-size: 48px; }
//         }
//       `}</style>
//     </>
//   );
// };

// export default Header;
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
