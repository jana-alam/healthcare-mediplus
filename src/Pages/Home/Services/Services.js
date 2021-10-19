import React, { useEffect, useState } from "react";
import useServices from "../../../hooks/useServices";
import SingleService from "../SingleService/SingleService";

const Services = () => {
  const services = useServices();
  return (
    <div className="md:container mx-auto ">
      <h4 className="text-2xl mb-10">Our Services</h4>
      <h2 className="text-6xl">What services</h2>
      <h2 className="text-6xl font-bold text-pink-600 mt-4">Mediplus Offer?</h2>
      <div className="grid grid-cols-3 gap-4 mt-8">
        {services.map((service) => (
          <SingleService key={service.id} service={service}></SingleService>
        ))}
      </div>
    </div>
  );
};

export default Services;
