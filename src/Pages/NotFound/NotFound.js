import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className=" text-center ">
      <h2 className="text-pink-600 font-semibold text-5xl pt-20">
        Looks Like you lost!
      </h2>
      <img
        className="w-6/12 mx-auto"
        src="https://i.ibb.co/7NsLvsh/undraw-page-not-found-su7k.png"
        alt=""
      />
      <Link to="/home" className="px-6 py-3 text-white bg-pink-700 rounded-lg">
        Go Back
      </Link>
    </div>
  );
};

export default NotFound;
