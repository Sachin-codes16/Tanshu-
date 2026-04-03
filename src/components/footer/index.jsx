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

import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Footer = (props) => {

    const ClickHandler = () => {
        
    }

    const [email, setEmail] = useState('')
    const [windowWidth, setWindowWidth] = useState(
        typeof window !== 'undefined' ? window.innerWidth : 1200
    )

    useEffect(() => {
        if (typeof window === 'undefined') {
            return undefined
        }

        const handleResize = () => setWindowWidth(window.innerWidth)

        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const isMobile = windowWidth <= 767
    const isTablet = windowWidth <= 1024
    const containerStyle = {
        ...styles.container,
        padding: isMobile ? '0 18px' : isTablet ? '0 24px' : styles.container.padding,
    }
    const newsletterSectionStyle = {
        ...styles.newsletterSection,
        padding: isMobile ? '24px 16px 36px' : styles.newsletterSection.padding,
    }
    const newsletterTitleStyle = {
        ...styles.newsletterTitle,
        fontSize: isMobile ? '24px' : styles.newsletterTitle.fontSize,
        letterSpacing: isMobile ? '2px' : styles.newsletterTitle.letterSpacing,
    }
    const newsletterSubtitleStyle = {
        ...styles.newsletterSubtitle,
        fontSize: isMobile ? '15px' : styles.newsletterSubtitle.fontSize,
        marginBottom: isMobile ? '20px' : styles.newsletterSubtitle.marginBottom,
    }
    const emailRowStyle = {
        ...styles.emailRow,
        flexDirection: isMobile ? 'column' : 'row',
        maxWidth: isMobile ? '100%' : styles.emailRow.maxWidth,
    }
    const emailInputStyle = {
        ...styles.emailInput,
        width: isMobile ? '100%' : 'auto',
        borderBottom: isMobile ? '1px solid #c5bfb8' : 'none',
    }
    const signupBtnStyle = {
        ...styles.signupBtn,
        width: isMobile ? '100%' : 'auto',
    }
    const linksSectionStyle = {
        ...styles.linksSection,
        padding: isMobile ? '36px 0' : styles.linksSection.padding,
    }
    const gridStyle = {
        ...styles.grid,
        gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : styles.grid.gridTemplateColumns,
        gap: isMobile ? '28px' : isTablet ? '36px' : styles.grid.gap,
    }
    const lowerFooterStyle = {
        ...styles.lowerFooter,
        padding: isMobile ? '18px 12px 28px' : styles.lowerFooter.padding,
    }
    const copyrightStyle = {
        ...styles.copyright,
        fontSize: isMobile ? '11px' : styles.copyright.fontSize,
    }

    return (
        <footer className={`wpo-site-footer ${props.ftClass}`} style={styles.footer}>

            {/* Newsletter Section */}
            <div style={newsletterSectionStyle}>
                <h2 style={newsletterTitleStyle}>INSPIRATION, DELIVERED.</h2>
                <p style={newsletterSubtitleStyle}>Discover our products, places, services and spaces.</p>
                <div style={emailRowStyle}>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        style={emailInputStyle}
                    />
                    <button style={signupBtnStyle}>SIGN UP</button>
                </div>
            </div>

            {/* Links Section */}
            <div style={linksSectionStyle}>
                <div style={containerStyle}>
                    <div style={gridStyle}>

                        {/* Column 1 - Resources */}
                        <div style={styles.col}>
                            <h4 style={styles.colHeading}>RESOURCES</h4>
                            <ul style={styles.linkList}>
                                <li style={styles.linkItem}><Link onClick={ClickHandler} to="/" style={styles.link}>Locate on Map</Link></li>
                                <li style={styles.linkItem}><Link onClick={ClickHandler} to="/" style={styles.link}>Site Map</Link></li>
                                {/* <li style={styles.linkItem}><Link onClick={ClickHandler} to="/" style={styles.link}>REQUEST A SOURCEBOOK</Link></li>
                                <li style={styles.linkItem}><Link onClick={ClickHandler} to="/" style={styles.link}>RH MEMBERS PROGRAM</Link></li>
                                <li style={styles.linkItem}><Link onClick={ClickHandler} to="/" style={styles.link}>RH TRADE</Link></li>
                                <li style={styles.linkItem}><Link onClick={ClickHandler} to="/" style={styles.link}>RH CONTRACT</Link></li>
                                <li style={styles.linkItem}><Link onClick={ClickHandler} to="/" style={styles.link}>RH CREDIT CARD</Link></li>
                                <li style={styles.linkItem}><Link onClick={ClickHandler} to="/" style={styles.link}>SITE MAP</Link></li> */}
                            </ul>
                        </div>

                        {/* Column 2 - Customer Experience */}
                        {/* <div style={styles.col}>
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
                        </div> */}

                        {/* Column 3 - Our Company */}
                        <div style={styles.col}>
                            <h4 style={styles.colHeading}>OUR COMPANY</h4>
                            <ul style={styles.linkList}>
                                <li style={styles.linkItem}><Link onClick={ClickHandler} to="/" style={styles.link}>About us  ↗</Link></li>
                                <li style={styles.linkItem}><Link onClick={ClickHandler} to="/" style={styles.link}>Contact us ↗</Link></li>
                                {/* <li style={styles.linkItem}><Link onClick={ClickHandler} to="/" style={styles.link}> ↗</Link></li>
                                <li style={styles.linkItem}><Link onClick={ClickHandler} to="/" style={styles.link}>PRESS ↗</Link></li> */}
                                <li style={styles.linkItem}><Link onClick={ClickHandler} to="/" style={styles.link}>Carrer ↗</Link></li>
                            </ul>
                        </div>

                        {/* Column 4 - Legal */}
                        <div style={styles.col}>
                            <h4 style={styles.colHeading}>LEGAL</h4>
                            <ul style={styles.linkList}>
                               <li style={styles.linkItem}>
  <Link 
    to="/privacy-policy" 
    style={styles.link}
    onClick={() => window.scrollTo(0,0)}
  >
    Privacy Policy
  </Link>
</li>
                                <li style={styles.linkItem}><Link onClick={ClickHandler} to="/our-story" style={styles.link}>Terms and use</Link></li>
                                {/* <li style={styles.linkItem}><Link onClick={ClickHandler} to="/" style={styles.link}>TEXT MESSAGING TERMS</Link></li> */}
                                {/* <li style={styles.linkItem}><Link onClick={ClickHandler} to="/" style={styles.link}>RH IN CANADA</Link></li> */}
                                {/* <li style={styles.linkItem}><Link onClick={ClickHandler} to="/" style={styles.link}>CPRA OPT-OUT ↗</Link></li> */}
                                {/* <li style={styles.linkItem}><Link onClick={ClickHandler} to="/" style={styles.link}>SAFETY RECALLS</Link></li> */}
                                {/* <li style={styles.linkItem}><Link onClick={ClickHandler} to="/" style={styles.link}>PRODUCT REGISTRATION</Link></li> */}
                            </ul>
                        </div>

                    </div>
                </div>
            </div>

            {/* Lower Footer */}
            <div style={lowerFooterStyle}>
                <div style={containerStyle}>
                    <p style={copyrightStyle}>
                        &copy; {new Date().getFullYear()}{" "}
                        <a
                            href="https://techqrt.com/"
                            target="_blank"
                            rel="noreferrer"
                            onClick={(e) => {
                                e.stopPropagation();
                                window.open('https://techqrt.com/', '_blank', 'noopener,noreferrer');
                            }}
                            style={styles.brandLink}
                        >
                            Techqrt
                        </a>
                        . All Rights Reserved.
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
        marginTop: 0,
        paddingTop: 0,

        position: "relative",   // 
        zIndex: 9999,           //
    },

    newsletterSection: {
        textAlign: 'center',
        padding: '60px 20px 50px',
        marginTop: 0,

        position: "relative",   // ✅ FIX
        zIndex: 9999,
    },

    newsletterTitle: {
        fontSize: '30px',
        letterSpacing: '5px',
        marginBottom: '12px',
    },

    newsletterSubtitle: {
        fontSize: '18px',
        marginBottom: '30px',
        color: 'black',
    },

    emailRow: {
        display: 'flex',
        justifyContent: 'center',
        maxWidth: '500px',
        margin: '0 auto',
        border: '1px solid #c5bfb8',
        backgroundColor: '#ffffff',

        position: "relative",   // ✅ FIX
        zIndex: 9999,
    },

    emailInput: {
        flex: 1,
        padding: '15px',
        border: 'none',
        outline: 'none',
    },

    signupBtn: {
        padding: '15px 20px',
        border: 'none',
        cursor: 'pointer',
    },

    linksSection: {
        padding: '50px 0',

        position: "relative",   // ✅ FIX
        zIndex: 9999,
    },

    container: {
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 40px',
    },

    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '50px',
    },

    colHeading: {
        marginBottom: '20px',
    },

    linkList: {
        listStyle: 'none',
        padding: 0,
    },

    link: {
        color: '#6b6560',
        textDecoration: 'none',
        display: 'block',
        marginBottom: '10px',

        cursor: "pointer",   // ✅ FIX
    },

    lowerFooter: {
        textAlign: 'center',
        padding: '20px',
        color: 'black',
        fontSize: '12px',
    },

    copyright: {
        fontSize: '12px',
        color: 'black',
    },

    brandLink: {
        color: '#ff9900',
        textDecoration: 'none',
        cursor: 'pointer',
        display: 'inline-block',
        pointerEvents: 'auto',
        position: 'relative',
        zIndex: 10000,
    },
}

export default Footer;
