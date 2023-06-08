import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const PopularClasses = () => {
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
        <SwiperSlide>
          <img
            className="md:h-[350px]"
            src="https://i.ibb.co/9WjPcn8/football.jpg"
            alt=""
          />
          <p className=" md:text-3xl font-bold text-[12px] -mt-20 mb-4 text-center text-black">
            Football Training
          </p>
          <p className=" md:text-2xl text-[12px] -mt-5 mb-4 text-center text-black">
            Students : 20{" "}
          </p>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            className="md:h-[350px]"
            src="https://i.ibb.co/mDXZpqp/cricket.webp"
            alt=""
          />
          <p className=" md:text-3xl font-bold text-[12px] -mt-20 mb-4 text-center shadow">
            Cricket Training
          </p>
          <p className=" md:text-2xl text-[12px] -mt-5 mb-4 text-center text-black">
            Students : 30{" "}
          </p>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            className="md:h-[350px]"
            src="https://i.ibb.co/GCJdhLg/tennis.jpg"
            alt=""
          />
          <p className=" md:text-3xl font-bold text-[12px] -mt-20 mb-4 text-center shadow">
            Tennis Lessons
          </p>
          <p className=" md:text-2xl text-[12px] -mt-5 mb-4 text-center text-black">
            Students : 15{" "}
          </p>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            className="md:h-[350px]"
            src="https://i.ibb.co/mSLQv1J/basketball.png"
            alt=""
          />
          <p className=" md:text-3xl font-bold text-[12px] -mt-20 mb-4 text-center shadow">
            Basketball Skills
          </p>
          <p className=" md:text-2xl text-[12px] -mt-5 mb-4 text-center text-black">
            Students : 12{" "}
          </p>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            className="md:h-[350px]"
            src="https://i.ibb.co/86bLTbB/swimming.jpg"
            alt=""
          />
          <p className=" md:text-3xl font-bold text-[12px] -mt-20 mb-4 text-center shadow">
            Swimming Lessons
          </p>
          <p className=" md:text-2xl text-[12px] -mt-5 mb-4 text-center text-black">
            Students : 18{" "}
          </p>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            className="md:h-[350px]"
            src="https://i.ibb.co/6n1LMj9/volleyball.jpg"
            alt=""
          />
          <p className=" md:text-3xl font-bold text-[12px] -mt-20 mb-4 text-center shadow">
            Volleyball Workshop
          </p>
          <p className=" md:text-2xl text-[12px] -mt-5 mb-4 text-center text-black">
            Students : 25{" "}
          </p>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default PopularClasses;
