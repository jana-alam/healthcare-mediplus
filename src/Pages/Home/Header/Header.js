import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../../images/Logo.png";

const Header = () => {
  return (
    <header className="shadow-md">
      <nav className="flex justify-between items-center md:container mx-auto py-3">
        {/* Header Left side */}
        <div className="flex items-center">
          <img src={Logo} alt="Logo" />
          <div className="ml-5">
            <NavLink
              activeStyle={{
                borderBottom: "2px solid #db2777",
              }}
              className="text-lg mx-2 text-gray-800 font-bold"
              to="/home"
            >
              Home
            </NavLink>
            <NavLink
              activeStyle={{
                borderBottom: "2px solid #db2777",
              }}
              className="text-lg mx-2 text-gray-800 font-bold"
              to="/about-us"
            >
              About Us
            </NavLink>
            <NavLink
              activeStyle={{
                borderBottom: "2px solid #db2777",
              }}
              className="text-lg mx-2 text-gray-800 font-bold"
              to="/appointment"
            >
              Appointment
            </NavLink>
          </div>
        </div>
        {/* Header right side */}
        <div className="space-x-6">
          <NavLink to="/login">Login</NavLink>
          <NavLink
            className="px-4 py-2 bg-pink-600 text-white rounded-md"
            to="/register"
          >
            Register
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Header;
