import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useClasses from "../../../hooks/useClasses";

const PopularClasses = () => {
  const [classes] = useClasses()
  return (
    <div>
      <SectionTitle heading={"Popular Classes"}></SectionTitle>

      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-24"
      >

        {
            classes.slice(0,6).map(item => <SwiperSlide key={item._id}>
              <img
                className="md:h-[350px]"
                src={item.image}
                alt=""
              />
              <p className=" md:text-3xl font-bold text-[12px] text-center text-black">
               {item.name}
               
              </p>
              <p className=" md:text-2xl text-[12px]  mb-4 text-center text-black">
              Available Seats :  {item.available_seats}
              </p>
            </SwiperSlide> )
        }

      </Swiper>
    </div>
  );
};

export default PopularClasses;
