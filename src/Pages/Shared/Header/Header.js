import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Header = () => {
  const { patient, logOut } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const handleMobileMenu = () => {
    setIsOpen(!isOpen);
  };
  const handleLogOut = () => {
    logOut();
  };

  return (
    <header className="shadow-md fixed w-full bg-white">
      <nav className="flex justify-between items-center sm:container mx-auto py-3 px-3 sm:px-0">
        {/* Header Left side */}
        <div className="flex items-center relative">
          {/* Mobile button */}
          <div>
            <button
              onClick={handleMobileMenu}
              type="button"
              className="block md:hidden mr-2 text-pink-500"
            >
              <svg
                className="h-6 w-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                {isOpen && (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                  />
                )}
                {!isOpen && (
                  <path
                    fillRule="evenodd"
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                  />
                )}
              </svg>
            </button>
          </div>
          {/* Mobile button end*/}
          <h2 className="text-4xl text-pink-600 font-semibold">MediPlus</h2>
          <div className="ml-5 hidden md:block">
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
        <div>
          {patient?.email ? (
            <div className="space-x-6">
              <span>Hi! {patient?.displayName}</span>
              <button
                onClick={handleLogOut}
                type="button"
                className="px-4 py-2 bg-pink-600 text-white rounded-md"
              >
                Log Out
              </button>
            </div>
          ) : (
            <div className="space-x-6">
              <NavLink
                activeStyle={{
                  borderBottom: "2px solid #db2777",
                }}
                to="/login"
              >
                Login
              </NavLink>
              <NavLink
                className="px-4 py-2 bg-pink-600 text-white rounded-md"
                to="/register"
              >
                Register
              </NavLink>
            </div>
          )}
        </div>
        {/* Mobile Menus */}
        <div className="absolute top-full left-0 w-full">
          <ul
            className={`md:hidden px-7 py-3 text-gray-200 w-full bg-pink-400 space-y-1.5 ${
              isOpen ? "flex flex-col" : "hidden"
            } `}
          >
            <Link className="border-b-2" to="/home">
              Home
            </Link>
            <Link className="border-b-2" to="/about-us">
              About Us
            </Link>
            <Link className="border-b-2" to="/appointment">
              Appointment
            </Link>
          </ul>
        </div>
        {/* Mobile Menus ends*/}
      </nav>
    </header>
  );
};

export default Header;
