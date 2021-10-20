import React from "react";
import aboutUs from "../../../images/about-us.jpg";

const About = () => {
  return (
    // about us
    <div className="pt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className=" px-10 md:pl-12">
          <h2 className="text-4xl md:text-6xl font-bold text-pink-600 mt-4">
            About Us
          </h2>
          <p className="text-gray-700 mt-8">
            MediPlus Hospital is the Best Hospital in Bangladesh. We are a 250
            bedded multi-disciplinary tertiary-care Hospital, situated at
            Tejgaon, Dhaka. MediPlus Hospital offers all-inclusive
            state-of-the-art medical & healthcare services with up-to-date
            facilities which are exclusively managed by well-reputed medical
            professionals, skilled nurses and technicians from home and abroad.{" "}
          </p>
          <p className="mt-4 text-gray-700">
            It`s main focus is to provide affordable Healthcare Services of
            International Standard through continuous innovation and improvement
            of facilities and convenience.
          </p>
        </div>
        {/* about us image */}
        <img className="" src={aboutUs} alt="about us" />
      </div>
    </div>
  );
};

export default About;
