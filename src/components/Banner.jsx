import React, { useEffect, useState } from "react";
import axios from "axios";

const Banner = () => {

  const [banners, setBanners] = useState([]);

  // useEffect(() => {
  //   axios.get("https://tanshu.checkour.work/api/banner/list")
  //     .then((res) => {
  //       console.log(res.data);
  //       setBanners(res.data.data.data);   // FIX
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);

  return (
    <div>
      {banners.map((item, index) => (
        <div key={index}>
          <img src={item.img} alt="banner" width="100%" />
        </div>
      ))}
    </div>
  );
};

export default Banner;