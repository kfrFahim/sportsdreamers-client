import React from "react";

import featured from "../../../assets/banner/bg.jpg";
import "./Featured.css";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Featured = () => {
  return (
    <div className="featured-bg bg-fixed p-5">
      <SectionTitle className="text" heading={"About Our Camp"}></SectionTitle>
      <div className="md:flex justify-center items-center pb-20 pt-10 px-36 bg-slate-500 bg-opacity-30">
        <div className="w-full">
          <img src={featured} alt="" />
        </div>
        <div className="md:ml-10 text-white leading-loose">

          
          <p>
          Sports camps are organized programs that provide specialized training and coaching in various sports disciplines. They are typically designed for athletes of different ages and skill levels who want to improve their skills, learn new techniques, and enhance their overall performance in a particular sport.
          </p>
          <p>
          Sports camps offer a structured environment where participants can receive focused training from experienced coaches and instructors. These camps often take place during school breaks or summer vacations and can range from a few days to several weeks in duration.
          </p>
          <button className="btn btn-outline border-0 border-b-4 mt-5 text-white">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
