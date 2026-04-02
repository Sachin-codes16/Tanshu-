import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar'
import Hero from '../../components/hero';
import About from '../../components/about';
import Footer from '../../components/footer';
import Scrollbar from '../../components/scrollbar'
import Logo from '../../images/logo.svg'
import abimg from '../../images/about.jpg'
import ImageGallery from '../../components/ImageGallery'

const HomePage = () => {
    return (
        <Fragment>
            <Navbar Logo={Logo} hclass={'header-style-1'} />
            <Hero />
            <About abimg={abimg} />
            <ImageGallery />
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default HomePage;
