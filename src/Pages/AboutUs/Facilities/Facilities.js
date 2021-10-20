import React from "react";

const Facilities = () => {
  return (
    // Our Facilities
    <div className="bg-gray-100 py-8 pb-16">
      <div className="pr-12 text-right">
        <h2 className=" text-4xl sm:text-6xl font-bold text-pink-600 mt-4">
          {" "}
          Our Facilities
        </h2>
      </div>
      {/* Facilities container */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 w-10/12 mx-auto mt-16">
        {/* Single Facility */}
        <div className="bg-gray-900 p-4 rounded-lg text-center text-pink-500">
          <h4 className="text-lg text-white font-bold">Beds</h4>
          <h2 className="text-3xl">250+</h2>
        </div>
        {/* Single Facility */}
        <div className="bg-gray-900 p-4 rounded-lg text-center text-pink-500">
          <h4 className="text-lg text-white font-bold">Nurse</h4>
          <h2 className="text-3xl">350+</h2>
        </div>
        {/* Single Facility */}
        <div className="bg-gray-900 p-4 rounded-lg text-center text-pink-500">
          <h4 className="text-lg text-white font-bold">Doctors</h4>
          <h2 className="text-3xl">60+</h2>
        </div>
        {/* Single Facility */}
        <div className="bg-gray-900 p-4 rounded-lg text-center text-pink-500">
          <h4 className="text-lg text-white font-bold">Ambulance</h4>
          <h2 className="text-3xl">25+</h2>
        </div>
        {/* Single Facility */}
        <div className="bg-gray-900 p-4 rounded-lg text-center text-pink-500">
          <h4 className="text-lg text-white font-bold">Laboratory</h4>
          <h2 className="text-3xl">10</h2>
        </div>
        {/* Single Facility */}
        <div className="bg-gray-900 p-4 rounded-lg text-center text-pink-500">
          <h4 className="text-lg text-white font-bold">Building</h4>
          <h2 className="text-3xl">3</h2>
        </div>
      </div>
    </div>
  );
};

export default Facilities;
