import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import useServices from "../../../hooks/useServices";

const ServiceDetails = () => {
  const { services } = useServices();
  const { id } = useParams();
  const [serviceDetail, setServiceDetail] = useState(null);

  useEffect(() => {
    const singleService = services?.find(
      (service) => service.id === parseInt(id)
    );
    setServiceDetail(singleService);
  }, [services, id]);

  return (
    <div className="grid grid-cols-2 gap-8 place-items-center pt-12">
      <img src={serviceDetail?.imageUrl} alt={serviceDetail.title} />
      <div>
        <h2 className="text-5xl font-semibold mb-4 text-pink-600">
          {serviceDetail.title}
        </h2>
        <p className="text-gray-600">{serviceDetail.description}</p>
        <button
          onClick=""
          className="px-3 py-2 bg-gradient-to-r from-pink-600 to-pink-700 font-semibold  cursor-pointer my-4 rounded-lg text-white hover:from-pink-800 hover:to-pink-700"
        >
          Book An Appointment
        </button>
      </div>
    </div>
  );
};

export default ServiceDetails;
