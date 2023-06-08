import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import img1 from "../../../assets/banner/img1.jpg";
import img2 from "../../../assets/banner/img2.jpg";
import img3 from "../../../assets/banner/img3.jpg";
import img4 from "../../../assets/banner/img4.jpg";

const Banner = () => {
  return (
<div>



<Carousel>
      <div>
        <img src={img1} />
      </div>
      <div>
        <img src={img2} />
      </div>
      <div className="md:h-[500px]">
        <img src={img3} />
      </div>
      <div className="md:h-[500px]">
        <img src={img4} />
      </div>
    </Carousel>
</div>
  );
};

export default Banner;
