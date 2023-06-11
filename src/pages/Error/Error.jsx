import React from "react";
import { Link } from "react-router-dom";
import err from "../../assets/404/404.jpg"

const Error = () => {
  return (
    <div className="">
      <img
        className="w-[60%] h-[500px] m-auto my-4 rounded-md animate-pulse"
        src={err}
        alt=""
      />

      <div className="flex justify-center my-8">
        <Link className="text-center" to="/">
          <button className="btn border bg-white text-blue-500">Home</button>
        </Link>
      </div>
    </div>
  );
};

export default Error;