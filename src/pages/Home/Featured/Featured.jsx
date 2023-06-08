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
          <p>March 20, 2023</p>
          <h3>WHERE CAN I GET SOME?</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            voluptate facere, deserunt dolores maiores quod nobis quas quasi.
            Eaque repellat recusandae ad laudantium tempore consequatur
            consequuntur omnis ullam maxime tenetur.
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
