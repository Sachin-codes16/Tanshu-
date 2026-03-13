import React from "react";
import img1 from '../../images/blog/image_5.jpg'
import img2 from '../../images/blog/image_6.jpg'
import img3 from '../../images/blog/image_7.jpg'
import img4 from '../../images/blog/image_8.jpg'
import img5 from '../../images/blog/pipcke-g_5UyVBIX_k-unsplash.jpg'
import img6 from '../../images/blog/collov-home-design-HmHArS-HvNw-unsplash.jpg'

import img7 from '../../images/blog/image_1.jpg'
import img8 from '../../images/blog/image_2.jpg'
import img9 from '../../images/blog/image_3.jpg'
import img10 from '../../images/blog/image_4.jpg'
import img11 from '../../images/blog/set2_image_1.jpg'
import img12 from '../../images/blog/set2_image_2.jpg'
import img13 from '../../images/blog/set2_image_3.jpg'
import img14 from '../../images/blog/set2_image_4.jpg'
import img15 from '../../images/blog/set2_image_5.jpg'
import img16 from '../../images/blog/set3_image_1.jpg'
import img17 from '../../images/blog/set3_image_2.jpg'
import img18 from '../../images/blog/set3_image_3.jpg'
import img19 from '../../images/blog/set4_image_2 copy.jpg'
import img20 from '../../images/blog/brera_image.jpg'

const ImageGallery = () => {
    const images = [
        img1, img2, img3, img4, img5,
        img6, img7, img8, img9, img10,
        img11, img12, img13, img14, img15,
        img16, img17, img18, img19, img20,
    ];

    return (
        <section style={{ width: '100%', margin: 0, padding: 0 }}>
            {images.map((img, index) => (
                <div
                    key={index}
                    style={{
                        width: '100%',
                        height: '100vh',
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