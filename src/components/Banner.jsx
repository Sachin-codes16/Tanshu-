import React, { useEffect, useState } from "react";
import axios from "axios";

const Banner = () => {
  const [banners, setBanners] = useState([]);
  const [hiddenIndexes, setHiddenIndexes] = useState([]);

  useEffect(() => {
    axios.get("https://tanshu.checkour.work/api/banner/list")
      .then((res) => {
        const apiBanners = Array.isArray(res?.data?.data?.data)
          ? res.data.data.data
          : [];

        const validBanners = apiBanners.filter(
          (item) => typeof item?.img === "string" && item.img.trim() !== ""
        );

        setBanners(validBanners);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const visibleBanners = banners.filter((_, index) => !hiddenIndexes.includes(index));

  if (visibleBanners.length === 0) {
    return null;
  }

  return (
    <div style={{ marginTop: "-10px" }}>
      {visibleBanners.map((item, index) => (
        <div key={index}>
          <img
            src={item.img}
            alt="banner"
            width="100%"
            style={{ display: "block" }}
            onError={() => {
              setHiddenIndexes((prev) => (
                prev.includes(index) ? prev : [...prev, index]
              ));
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default Banner;
