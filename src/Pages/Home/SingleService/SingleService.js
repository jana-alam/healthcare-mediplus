import React from "react";
import { Link } from "react-router-dom";

const SingleService = ({ service }) => {
  const { id, title, shortDescription, imageUrl } = service;

  return (
    <div>
      <img src={imageUrl} alt="Service" className="rounded-lg" />
      <div className="rounded-lg px-4 pb-4">
        <h3 className="text-2xl  my-4 font-semibold border-b-2 text-pink-800">
          {title}
        </h3>
        <p className="mt-4 text-justify text-gray-600 h-32">
          {shortDescription}
        </p>
        <div className="text-right">
          <Link
            to={`/services/${id}`}
            className="px-4 py-2 rounded-full text-pink-600 text-base font-bold ml hover:text-pink-500 hover:bg-pink-200"
          >
            Learn More...
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleService;
