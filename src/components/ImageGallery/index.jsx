import React from "react";
import img1 from '../../images/blog/444.jpeg'
import img2 from '../../images/blog/111.jpeg'
import img3 from '../../images/blog/555.jpeg'
import img4 from '../../images/blog/666.jpeg'
import img5 from '../../images/blog/777.jpeg'


import img7 from '../../images/blog/999.jpeg'



const ImageGallery = () => {
    const images = [
        img1, img2, img3, img4, img5,
         img7, 
    ];

    return (
        <section style={{ width: '100%', margin: 0, padding: 0 }}>
            {images.map((img, index) => (
                <div
                    key={index}
                    style={{
                        width: '100%',
                        
                        overflow: 'hidden',
                    }}
                >
                    <img
                        src={img}
                        alt={`gallery-${index + 1}`}
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            objectPosition: 'center',
                            display: 'block',
                        }}
                    />
                </div>
            ))}
        </section>
    );
};

export default ImageGallery;