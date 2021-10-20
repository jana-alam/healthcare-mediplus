import React from "react";
import { useHistory } from "react-router-dom";

const SingleService = ({ service }) => {
  const { id, title, shortDescription, imageUrl } = service;
  const history = useHistory();
  const handleService = () => {
    history.push(`/services/${id}`);
  };

  return (
    <div>
      {/* Service Image */}
      <img src={imageUrl} alt="Service" className="rounded-lg" />
      {/* Service INformation */}
      <div className="rounded-lg px-4 pb-4">
        <h3 className="text-2xl  my-4 font-semibold border-b-2 text-pink-800">
          {title}
        </h3>
        <p className="mt-4 text-justify text-gray-600 h-40 sm:h-32">
          {shortDescription}
        </p>
        <div className="text-right">
          <button
            onClick={handleService}
            className="px-4 py-2 rounded-full  text-base font-bold ml text-pink-500 bg-pink-200"
          >
            Learn More...
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleService;
