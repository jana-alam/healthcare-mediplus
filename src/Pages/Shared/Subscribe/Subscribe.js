import React from "react";

import subscribe from "../../../images/subscribe.jpg";

const Subscribe = () => {
  return (
    <div className="bg-gray-200">
      <div className="md:container mx-auto py-12">
        <div className="text-left">
          <h4 className="text-2xl mb-10">Our Promotional Offer</h4>
          <h2 className="text-6xl">Subscribe To</h2>
          <h2 className="text-6xl font-bold text-pink-600 mt-4">
            Get Latest Offer?
          </h2>
        </div>
        <div className="grid grid-cols-2 mt-8">
          <div className="text-center bg-indigo-400 bg-opacity-40 flex flex-col space-y-3 justify-center items-center">
            <input
              className="placeholder-gray-600 text-gray-600 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 ring-pink-500 w-3/4"
              type="email"
              placeholder="Your Email Id to Reach"
            />
            <button className="text-white bg-green-700 py-2 rounded-lg w-3/4">
              Subscribe
            </button>
          </div>
          <img src={subscribe} alt="subscribre" className="max-w-full" />
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
