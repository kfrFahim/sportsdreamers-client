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
        <p className="absolute top-0 left-[35%] mt-28 md:mt-[40%] md:text-4xl bg-gray-50 opacity-50 rounded p-3 text-black">Youth Cricket Camp</p>
      </div>
      <div>
        <img src={img2} />
        <p className="absolute top-0 left-[35%] mt-28 md:mt-[40%] md:text-4xl bg-gray-50 opacity-50 rounded p-3 text-black">Football Skills Development Camp</p>
      </div>
      <div className="md:h-[500px]">
        <img src={img3} />
        <p className="absolute top-0 left-[35%] mt-28 md:mt-[40%] md:text-4xl bg-gray-50 opacity-50 rounded p-3 text-black">Join Our Basketball Development Camp</p>
      </div>
      <div className="md:h-[500px]">
        <img src={img4} />
        <p className="absolute top-0 left-[35%] mt-28 md:mt-[40%] md:text-4xl bg-gray-50 opacity-50 rounded p-3 text-black">Best Swimming instructor</p>
      </div>
    </Carousel>
</div>
  );
};

export default Banner;
