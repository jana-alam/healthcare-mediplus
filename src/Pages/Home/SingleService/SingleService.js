import React from "react";
import { NavLink, useHistory } from "react-router-dom";

const SingleService = ({ service }) => {
  const { id, title, shortDescription, imageUrl } = service;
  const history = useHistory();
  const serviceDetails = () => {
    history.push(`/services/${id}`);
  };
  return (
    <div>
      <img src={imageUrl} alt="Service" className="rounded-lg" />
      <div className="shadow-sm rounded-lg">
        <h3 className="text-2xl  my-4 px-4 font-semibold border-b-2 text-pink-800">
          {title}
        </h3>
        <p className="mt-4 px-4 text-justify text-gray-600 h-32">
          {shortDescription}
        </p>

        <button
          onClick={serviceDetails}
          className="px-3 py-2 ml-4 bg-gradient-to-r from-pink-600 to-pink-700 font-semibold  cursor-pointer my-4 rounded-lg text-white hover:from-pink-800 hover:to-pink-700"
        >
          Book An Appointment
        </button>
      </div>
    </div>
  );
};

export default SingleService;
