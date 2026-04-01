import React from "react";
import himg from '../../images/blog/888.jpeg'
import himg2 from '../../images/blog/img-1.jpg'
import himg3 from '../../images/blog/img-2.jpg'

const Hero = () => {
    return (
        <section style={{
            width: '100%',
            height: '100vh',
            padding: 0,
            margin: 0,
            position: 'relative',
            overflow: 'hidden',
            display: 'block',
        }}>
            <img 
                src={himg} 
                               alt="hero"
                               style={{
                                   width: '100%',
                                   height: '100%',
                                   objectFit: 'cover',
                                   objectPosition: 'center',
                                   display: 'block',
                }}
            />
        </section>
    )
}

export default Hero;