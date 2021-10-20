import React from "react";
import { NavLink } from "react-router-dom";

import image from "../../../images/banner-bg-removebg.png";

const Banner = () => {
  return (
    // Banner Sections
    <div className="pt-24 py-10 grid grid-cols-1  gap-3 bg-customColor md:grid-cols-2">
      <div className=" py-4 text-center md:text-left md:px-4 md:py-8">
        <h1 className="text-2xl text-gray-300 font-bold md:text-4xl ">
          <span className="text-4xl  text-pink-600 md:text-7xl">MediPlus</span>{" "}
          <br />
          Power To Heal
        </h1>
        <p className="w-8/12 mx-auto text-white leading-tight mt-3 sm:w-8/12 md:w-full md:text-lg   md:mt-5 md:text-justify">
          MediPlus aims to provide the highest possible level of care by the
          qualified consultants from India, Singapore, USA, UK & even the nurses
          are also proficiently trained from Bangladesh, Australia, UK, India
          and The Philippines.
        </p>
        <NavLink
          className="mt-6 px-5 py-3 bg-pink-600 rounded-lg text-white inline-block"
          to="/appointment"
        >
          Book An Appointment
        </NavLink>
      </div>
      {/* Banner Image */}
      <img
        src={image}
        alt="Banner"
        className="place-self-center border-t-4 md:border-0"
      />
    </div>
  );
};

export default Banner;
