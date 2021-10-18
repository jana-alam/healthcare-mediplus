import React from "react";
import { NavLink } from "react-router-dom";
import "./Banner.css";

const Banner = () => {
  return (
    <div className=" pt-40 px-8  banner-section min-h-screen">
      <h1 className="text-5xl text-gray-300 font-bold">
        <span className="text-8xl text-pink-600">MediPlus</span> <br />
        Power To Heal
      </h1>
      <p className="w-4/12 text-white text-lg leading-tight mt-4 text-justify">
        MediPlus aims to provide the highest possible level of care by the
        qualified consultants from India, Singapore, USA, UK & even the nurses
        are also proficiently trained from Bangladesh, Australia, UK, India and
        The Philippines.
      </p>
      <NavLink
        className="mt-6 px-5 py-3 bg-pink-600 rounded-lg text-white inline-block"
        to="/appointment"
      >
        Book An Appointment
      </NavLink>
    </div>
  );
};

export default Banner;
