
import React from "react";
import { Link } from 'react-router-dom'
import himg from '../../images/blog/2.webp'

const Hero = () => {
    return (
        <section style={{
            width: '100%',
            // height: '50vh',
            overflow: 'hidden',
            position: 'relative',
            margin: 0,
            padding: 0,
        }}>
            <img 
                src={himg} 
                alt="hero"
                style={{
                    width: '100%',
                    
                    objectFit: 'cover',
                    objectPosition: 'center',
                    display: 'block',
                }}
            />
        </section>
    )
}

export default Hero;