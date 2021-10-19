import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import useServices from "../../../hooks/useServices";

const ServiceDetails = () => {
  const services = useServices();
  const { id } = useParams();

  const [serviceDetails, setServiceDetails] = useState([]);

  useEffect(() => {
    const serviceDetail = services.find((service) => service.id === id);
    setServiceDetails(serviceDetail);
  }, []);

  console.console.log((serviceDetails));

  return <div>{serviceDetails}</div>;
};

export default ServiceDetails;
