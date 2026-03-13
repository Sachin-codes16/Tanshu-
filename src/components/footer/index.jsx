// import React from 'react'
// import {Link}  from 'react-router-dom'
// import Logo from '../../images/logo-2.svg'
// import Projects from '../../api/project'



// const Footer = (props) =>{

//     const ClickHandler = () =>{
//         window.scrollTo(10, 0);
//      }

//   return(
//     <footer className={`wpo-site-footer ${props.ftClass}`}>
//         <div className="wpo-upper-footer">
//             <div className="container">
//                 <div className="row">
//                     <div className="col col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12">
//                         <div className="widget about-widget">
//                             <div className="logo widget-title">
//                                 <Link onClick={ClickHandler} className="logo" to="/"><img src={Logo} alt=""/></Link>
//                             </div>
//                             <p></p>
//                             <ul>
//                                 <li>
//                                     <Link onClick={ClickHandler} to="/">
//                                         <i className=""></i>
//                                     </Link>
//                                 </li>
//                                 <li>
//                                     <Link onClick={ClickHandler} to="/">
//                                         <i className=""></i>
//                                     </Link>
//                                 </li>
//                                 <li>
//                                     <Link onClick={ClickHandler} to="/">
//                                         <i className=""></i>
//                                     </Link>
//                                 </li>
//                                 <li>
//                                     <Link onClick={ClickHandler} to="/">
//                                         <i className=""></i>
//                                     </Link>
//                                 </li>
//                             </ul>
//                         </div>
//                     </div>
//                     <div className="col col-xl-3  col-lg-4 col-md-6 col-sm-12 col-12">
//                         <div className="widget link-widget">
//                             <div className="widget-title">
//                                 <h3></h3>
//                             </div>
//                             <ul>
//                                 <li><Link onClick={ClickHandler} to="/service-single"></Link></li>
//                                 <li><Link onClick={ClickHandler} to="/service-single"></Link></li>
//                                 <li><Link onClick={ClickHandler} to="/service-single"></Link></li>
//                                 <li><Link onClick={ClickHandler} to="/service-single"></Link></li>
//                                 <li><Link onClick={ClickHandler} to="/service-single"></Link></li>
//                             </ul>
//                         </div>
//                     </div>
//                     <div className="col col-xl-3  col-lg-4 col-md-6 col-sm-12 col-12">
//                         <div className="widget wpo-service-link-widget">
//                             <div className="widget-title">
//                                 <h3>Contact </h3>
//                             </div>
//                             <div className="contact-ft">
//                                 <ul>
//                                     <li><i className="fi flaticon-location"></i> <br/> 
//                                        </li>
//                                     <li><i className="fi flaticon-telephone"></i>  <br/>
//                                        </li>
//                                     <li><i className="fi flaticon-email"></i></li>
//                                 </ul>
//                             </div>
//                         </div>
//                     </div>

//                     <div className="col col-xl-3  col-lg-4 col-md-6 col-sm-12 col-12">
//                         <div className="widget instagram">
//                             <div className="widget-title">
//                                 <h3></h3>
//                             </div>
//                             <ul className="d-flex">
//                                 {Projects.slice(0, 6).map((project, pot) => (
//                                     <li key={pot}><Link onClick={ClickHandler} to={`/project-single/${project.Id}`}><img src={project.pImg} alt="" /></Link></li>
//                                 ))}
//                             </ul>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//         <div className="wpo-lower-footer">
//             <div className="container">
//                 <div className="row">
//                     <div className="col col-xs-12">
//                         <ul>
//                             <li>&copy; <Link onClick={ClickHandler} to="/"></Link>
//                                </li>
//                             <li><Link onClick={ClickHandler} to="/"> |</Link> <Link onClick={ClickHandler} to="/"></Link></li>
//                         </ul>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </footer>
//   )
// } 

// export default Footer;

import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Footer = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    const [email, setEmail] = useState('')

    return (
        <footer className={`wpo-site-footer ${props.ftClass}`} style={styles.footer}>

            {/* Newsletter Section */}
            <div style={styles.newsletterSection}>
                <h2 style={styles.newsletterTitle}>INSPIRATION, DELIVERED.</h2>
                <p style={styles.newsletterSubtitle}>Discover our products, places, services and spaces.</p>
                <div style={styles.emailRow}>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        style={styles.emailInput}
                    />
                    <button style={styles.signupBtn}>SIGN UP</button>
                </div>
            </div>

            {/* Links Section */}
            <div style={styles.linksSection}>
                <div style={styles.container}>
                    <div style={styles.grid}>

                        {/* Column 1 - Resources */}
                        <div style={styles.col}>
                            <h4 style={styles.colHeading}>RESOURCES</h4>
                            <ul style={styles.linkList}>
                                <li style={styles.linkItem}><Link onClick={ClickHandler} to="/" style={styles.link}>LOCATE A GALLERY</Link></li>
                                <li style={styles.linkItem}><Link onClick={ClickHandler} to="/" style={styles.link}>VIEW SOURCEBOOKS</Link></li>
                                <li style={styles.linkItem}><Link onClick={ClickHandler} to="/" style={styles.link}>REQUEST A SOURCEBOOK</Link></li>
                                <li style={styles.linkItem}><Link onClick={ClickHandler} to="/" style={styles.link}>RH MEMBERS PROGRAM</Link></li>
                                <li style={styles.linkItem}><Link onClick={ClickHandler} to="/" style={styles.link}>RH TRADE</Link></li>
                                <li style={styles.linkItem}><Link onClick={ClickHandler} to="/" style={styles.link}>RH CONTRACT</Link></li>
                                <li style={styles.linkItem}><Link onClick={ClickHandler} to="/" style={styles.link}>RH CREDIT CARD</Link></li>
                                <li style={styles.linkItem}><Link onClick={ClickHandler} to="/" style={styles.link}>SITE MAP</Link></li>
                            </ul>
                        </div>

                        {/* Column 2 - Customer Experience */}
                        <div style={styles.col}>
                            <h4 style={styles.colHeading}>CUSTOMER EXPERIENCE</h4>
                            <ul style={styles.linkList}>
                                <li style={styles.linkItem}><Link onClick={ClickHandler} to="/contact" style={styles.link}>CONTACT US</Link></li>
                                <li style={styles.linkItem}><Link onClick={ClickHandler} to="/" style={styles.link}>PLACING AN ORDER</Link></li>
                                <li style={styles.linkItem}><Link onClick={ClickHandler} to="/" style={styles.link}>SHIPPING &amp; DELIVERY</Link></li>
                                <li style={styles.linkItem}><Link onClick={ClickHandler} to="/" style={styles.link}>RETURNS &amp; EXCHANGES</Link></li>
                                <li style={styles.linkItem}><Link onClick={ClickHandler} to="/" style={styles.link}>LIFETIME GUARANTEE</Link></li>
                                <li style={styles.linkItem}><Link onClick={ClickHandler} to="/" style={styles.link}>RH GIFT CARD</Link></li>
                                <li style={styles.linkItem}><Link onClick={ClickHandler} to="/" style={styles.link}>GIFT REGISTRY</Link></li>
                                <li style={styles.linkItem}><Link onClick={ClickHandler} to="/" style={styles.link}>ACCESSIBILITY STATEMENT</Link></li>
                                <li style={styles.linkItem}><Link onClick={ClickHandler} to="/" style={styles.link}>FAQS</Link></li>
                            </ul>
                        </div>

                        {/* Column 3 - Our Company */}
                        <div style={styles.col}>
                            <h4 style={styles.colHeading}>OUR COMPANY</h4>
                            <ul style={styles.linkList}>
                                <li style={styles.linkItem}><Link onClick={ClickHandler} to="/" style={styles.link}>LETTERS FROM THE CEO ↗</Link></li>
                                <li style={styles.linkItem}><Link onClick={ClickHandler} to="/" style={styles.link}>LEADERSHIP TEAM ↗</Link></li>
                                <li style={styles.linkItem}><Link onClick={ClickHandler} to="/" style={styles.link}>INVESTOR RELATIONS ↗</Link></li>
                                <li style={styles.linkItem}><Link onClick={ClickHandler} to="/" style={styles.link}>PRESS ↗</Link></li>
                                <li style={styles.linkItem}><Link onClick={ClickHandler} to="/" style={styles.link}>CAREERS ↗</Link></li>
                            </ul>
                        </div>

                        {/* Column 4 - Legal */}
                        <div style={styles.col}>
                            <h4 style={styles.colHeading}>LEGAL</h4>
                            <ul style={styles.linkList}>
                                <li style={styles.linkItem}><Link onClick={ClickHandler} to="/" style={styles.link}>PRIVACY</Link></li>
                                <li style={styles.linkItem}><Link onClick={ClickHandler} to="/" style={styles.link}>TERMS OF USE</Link></li>
                                <li style={styles.linkItem}><Link onClick={ClickHandler} to="/" style={styles.link}>TEXT MESSAGING TERMS</Link></li>
                                <li style={styles.linkItem}><Link onClick={ClickHandler} to="/" style={styles.link}>RH IN CANADA</Link></li>
                                <li style={styles.linkItem}><Link onClick={ClickHandler} to="/" style={styles.link}>CPRA OPT-OUT ↗</Link></li>
                                <li style={styles.linkItem}><Link onClick={ClickHandler} to="/" style={styles.link}>SAFETY RECALLS</Link></li>
                                <li style={styles.linkItem}><Link onClick={ClickHandler} to="/" style={styles.link}>PRODUCT REGISTRATION</Link></li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>

            {/* Lower Footer */}
            <div style={styles.lowerFooter}>
                <div style={styles.container}>
                    <p style={styles.copyright}>
                        &copy; {new Date().getFullYear()} Your Company. All Rights Reserved.
                    </p>
                </div>
            </div>

        </footer>
    )
}

const styles = {
    footer: {
        backgroundColor: '#f2ede8',
        color: '#444',
        fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, sans-serif",
    },
    newsletterSection: {
        textAlign: 'center',
        padding: '80px 20px 50px',
    },
    newsletterTitle: {
        fontSize: '42px',
        fontWeight: '100',
        letterSpacing: '5px',
        color: 'black',
        marginBottom: '12px',
        fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, sans-serif",
        lineHeight: '1.2',
    },
    newsletterSubtitle: {
        fontSize: '20px',
        color: '#666',
        marginBottom: '32px',
        letterSpacing: '0.3px',
        fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, sans-serif",
        fontWeight: '100',
    },
    emailRow: {
        display: 'flex',
        justifyContent: 'center',
        maxWidth: '500px',
        margin: '0 auto',
        border: '1px solid #c5bfb8',
        backgroundColor: '#ffffff',
    },
    emailInput: {
        flex: 1,
        padding: '15px 20px',
        border: 'none',
        outline: 'none',
        fontSize: '13px',
        backgroundColor: 'transparent',
        color: '#888',
        letterSpacing: '0.3px',
        fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, sans-serif",
    },
    signupBtn: {
        padding: '15px 22px',
        backgroundColor: 'transparent',
        border: 'none',
        borderLeft: '1px solid #c5bfb8',
        cursor: 'pointer',
        fontSize: '11px',
        fontWeight: '200',
        letterSpacing: '2px',
        color: '#2a2a2a',
        fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, sans-serif",
    },
    linksSection: {
        padding: '55px 0 60px',
    },
    container: {
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '0 80px',
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '95px',
    },
    col: {},
    colHeading: {
        fontSize: '20px',
        fontWeight: '100',
        letterSpacing: '1px',
        color: '#2a2a2a',
        marginBottom: '25px',
        fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, sans-serif",
        textTransform: 'uppercase',
    },
    linkList: {
        listStyle: 'none',
        padding: 0,
        margin: 0,
    },
    linkItem: {
        marginBottom: '14px',
    },
    link: {
        color: '#6b6560',
        textDecoration: 'none',
        fontSize: '16px',
        letterSpacing: '0.8px',
        fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, sans-serif",
        fontWeight: '200',
    },
    lowerFooter: {
        padding: '24px 0',
        textAlign: 'center',
    },
    copyright: {
        fontSize: '12px',
        color: '#999',
        letterSpacing: '0.5px',
        margin: 0,
        fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, sans-serif",
    },
}

export default Footer;