

import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Footer = (props) => {

    const ClickHandler = () => {
        
    }

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
    const linksSectionStyle = {
        ...styles.linksSection,
        padding: isMobile ? '36px 0' : styles.linksSection.padding,
    }
    const gridStyle = {
        ...styles.grid,
        gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : styles.grid.gridTemplateColumns,
        gap: isMobile ? '28px' : isTablet ? '36px' : styles.grid.gap,
        maxWidth: isMobile ? '100%' : '1280px',
        margin: '0 auto',
        alignItems: 'start',
    }
    const resourcesColStyle = {
        ...styles.col,
        justifySelf: 'stretch',
        textAlign: 'left',
    }
    const australianColStyle = {
        ...styles.col,
        justifySelf: 'stretch',
        textAlign: 'left',
    }
    const companiesColStyle = {
        ...styles.col,
        justifySelf: 'stretch',
        textAlign: 'left',
    }
    const legalColStyle = {
        ...styles.col,
        justifySelf: 'stretch',
        textAlign: 'left',
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
                <h2 style={newsletterTitleStyle}>Defined by detail. Driven by excellence.</h2>
            </div>

            {/* Links Section */}
            <div style={linksSectionStyle}>
                <div style={containerStyle}>
                    <div style={gridStyle}>

                        {/* Column 1 - Resources */}
                        <div style={resourcesColStyle}>
                            <h4 style={styles.colHeading}>INDIAN GALLERY</h4>
                            <ul style={styles.linkList}>
                                <li style={styles.linkItem}>
                                    <span style={styles.link}><b>Address:</b> Industrial Area Phase 2, Hari Nagar, Panipat</span>
                                </li>
                                <li style={styles.linkItem}>
                                    <span style={styles.link}>
                                        <b>Phone:</b> <span style={{ color: "#0b5ed7" }}>+91-8930009468</span>
                                    </span>
                                </li>
                                <li style={styles.linkItem}>
                                    <span style={styles.link}>
                                        <b>Email:</b> <span style={{ color: "#0b5ed7" }}>info@tanshuvaidik.com</span>
                                    </span>
                                </li>
                                {/* <li style={styles.linkItem}><Link onClick={ClickHandler} to="/" style={styles.link}>REQUEST A SOURCEBOOK</Link></li>
                                <li style={styles.linkItem}><Link onClick={ClickHandler} to="/" style={styles.link}>RH MEMBERS PROGRAM</Link></li>
                                <li style={styles.linkItem}><Link onClick={ClickHandler} to="/" style={styles.link}>RH TRADE</Link></li>
                                <li style={styles.linkItem}><Link onClick={ClickHandler} to="/" style={styles.link}>RH CONTRACT</Link></li>
                                <li style={styles.linkItem}><Link onClick={ClickHandler} to="/" style={styles.link}>RH CREDIT CARD</Link></li>
                                <li style={styles.linkItem}><Link onClick={ClickHandler} to="/" style={styles.link}>SITE MAP</Link></li> */}
                            </ul>
                        </div>

                        {/* Column 2 - Australian Gallery */}
                        <div style={australianColStyle}>
                            <h4 style={styles.colHeading}>AUSTRALIAN GALLERY</h4>
                            <ul style={styles.linkList}>
                                <li style={styles.linkItem}>
                                    <span style={styles.link}><b>Address:</b> 4&amp;5/62 Argyle Street, South Windsor 2756, New South Wales, Sydney</span>
                                </li>
                                <li style={styles.linkItem}>
                                    <span style={styles.link}>
                                        <b>Phone:</b> <span style={{ color: "#0b5ed7" }}>+61-423471255</span>
                                    </span>
                                </li>
                                <li style={styles.linkItem}>
                                    <span style={styles.link}>
                                        <b>Email:</b> <span style={{ color: "#0b5ed7" }}>info@tanshuvaidik.com</span>
                                    </span>
                                </li>
                            </ul>
                        </div>

                        {/* Column 3 - Our Companies */}
                        <div style={companiesColStyle}>
                            <h4 style={styles.colHeading}>OUR COMPANIES</h4>
                            <ul style={styles.linkList}>
                                <li style={styles.linkItem}>
                                    <a
                                        href="https://metal.tanshuaustralia.com.au/"
                                        target="_blank"
                                        rel="noreferrer"
                                        style={styles.link}
                                    >
                                        Tanshu Metal Products
                                    </a>
                                </li>
                                <li style={styles.linkItem}>
                                    <a
                                        href="https://machinery.tanshuaustralia.com.au/"
                                        target="_blank"
                                        rel="noreferrer"
                                        style={styles.link}
                                    >
                                        Tanshu Machinery Solutions
                                    </a>
                                </li>
                                <li style={styles.linkItem}>
                                    <a
                                        href="https://robotics.tanshuaustralia.com.au/"
                                        target="_blank"
                                        rel="noreferrer"
                                        style={styles.link}
                                    >
                                        Tanshu Robotics and Automation
                                    </a>
                                </li>
                                <li style={styles.linkItem}>
                                    <a
                                        href="https://www.tanshugreenenergy.com.au/"
                                        target="_blank"
                                        rel="noreferrer"
                                        style={styles.link}
                                    >
                                        Tanshu Green Energy
                                    </a>
                                </li>
                                <li style={styles.linkItem}>
                                    <a
                                        href="https://tanshuvaidik.com/"
                                        target="_blank"
                                        rel="noreferrer"
                                        style={styles.link}
                                    >
                                        Tanshu Vaidik India Pvt Ltd
                                    </a>
                                </li>
                                <li style={styles.linkItem}>
                                    <a
                                        href="https://www.navisyncfreight.com/"
                                        target="_blank"
                                        rel="noreferrer"
                                        style={styles.link}
                                    >
                                        NaviSync Freight
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Column 4 - Customer Experience */}
                        {/* <div style={styles.col}>
                            <h4 style={styles.colHeading}>CUSTOMER EXPERIENCE</h4>
                            <ul style={styles.linkList}>
                                <li style={styles.linkItem}><Link onClick={ClickHandler} to="/contact" style={styles.link}>Contact us {"\u2197"}</Link></li>
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

                        {/* Column 5 - Quick Links */}
                        <div style={legalColStyle}>
                            <h4 style={styles.colHeading}>QUICK LINKS</h4>
                            <ul style={styles.linkList}>
                                <li style={styles.linkItem}><Link onClick={ClickHandler} to="/our-story" style={styles.link}>Our Story</Link></li>
                                <li style={styles.linkItem}><Link onClick={ClickHandler} to="/contact-usPage" style={styles.link}>Contact us</Link></li>
                                <li style={styles.linkItem}><Link onClick={ClickHandler} to="/BloglistPage" style={styles.link}>Blogs</Link></li>
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
                                {/* <li style={styles.linkItem}><Link onClick={ClickHandler} to="/" style={styles.link}>CPRA OPT-OUT {"\u2197"}</Link></li> */}
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
                            TechQRT
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

        position: "relative",   // ÃƒÂ¢Ã…â€œÃ¢â‚¬Â¦ FIX
        zIndex: 9999,
    },

    newsletterTitle: {
        fontSize: '30px',
        letterSpacing: '5px',
        marginBottom: '6px',
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

        position: "relative",   // ÃƒÂ¢Ã…â€œÃ¢â‚¬Â¦ FIX
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
        padding: '54px 0 44px',

        position: "relative",   // ÃƒÂ¢Ã…â€œÃ¢â‚¬Â¦ FIX
        zIndex: 9999,
    },

    container: {
        maxWidth: '1320px',
        margin: '0 auto',
        padding: '0 40px',
    },

    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
        gap: '40px',
    },

    col: {
        minWidth: 0,
    },

    colHeading: {
        marginBottom: '22px',
        fontSize: '19px',
        letterSpacing: '0.5px',
        color: '#0b1b63',
    },

    linkList: {
        listStyle: 'none',
        padding: 0,
    },

    link: {
        color: '#6b6560',
        textDecoration: 'none',
        display: 'block',
        marginBottom: '12px',
        fontSize: '16px',
        lineHeight: '1.75',

        cursor: "pointer",   // ÃƒÂ¢Ã…â€œÃ¢â‚¬Â¦ FIX
    },

    signupError: {
        color: '#b42318',
        fontSize: '14px',
        marginTop: '12px',
        marginBottom: 0,
    },

    signupMessage: {
        color: '#25643b',
        fontSize: '14px',
        marginTop: '12px',
        marginBottom: 0,
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
        width: 'fit-content',
        margin: '0 auto',
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
