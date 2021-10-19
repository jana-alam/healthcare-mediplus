import React from "react";
import { Link } from "react-router-dom";
import useServices from "../../../hooks/useServices";
const Footer = () => {
  const { services } = useServices();
  console.log(services);
  return (
    <footer>
      <div className="grid grid-cols-3 gap-4 bg-gray-900 px-12 py-6">
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl text-pink-600 font-semibold">MediPlus</h2>
          <address className="text-gray-200">
            <p>198, Medi House, Tejgaon</p>
            <p>Dhaka, Bangladesh , 1204</p>
            <p>24 Hour: +0099009987</p>
          </address>
        </div>

        <div className="text-white grid grid-cols-1 place-items-start">
          {services.map((service) => (
            <Link
              key={`footer-${service.id}`}
              className="hover:text-pink-600"
              to={`/services/${service.id}`}
            >
              {service.title}
            </Link>
          ))}
        </div>
        <div className="text-white flex flex-col justify-center items-start">
          <Link className="hover:text-pink-600" to="/home">
            Home
          </Link>
          <Link className="hover:text-pink-600" to="/about-us">
            About Us
          </Link>
          <Link className="hover:text-pink-600" to="/appointment">
            Appointment
          </Link>
        </div>
      </div>
      <div className="bg-black text-white text-center py-3">
        <p>All Rights Reserved | 2021-2022</p>
      </div>
    </footer>
  );
};

export default Footer;
