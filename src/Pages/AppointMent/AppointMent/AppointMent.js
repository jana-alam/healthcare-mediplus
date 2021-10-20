import React from "react";

const AppointMent = () => {
  return (
    <div className="pt-16">
      <h2 className="text-4xl font-bold text-pink-600 mt-4 text-center">
        Book An Appointment
      </h2>
      {/* appoinement form */}
      <div className="w-10/12 px-2 sm:w-3/4 mx-auto my-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {/* patient name */}
          <input
            className="col-span-2 rounded-lg bg-green-50  px-2 py-2 focus:outline-none focus:ring-2 ring-green-600"
            type="text"
            placeholder="Patient's Name"
          />
          {/* email */}
          <input
            className="col-span-2 rounded-lg bg-green-50  px-2 py-2 focus:outline-none focus:ring-2 ring-green-600"
            type="email"
            placeholder="Email"
          />
          {/* phone number */}
          <input
            className="col-span-2 rounded-lg bg-green-50  px-2 py-2 focus:outline-none focus:ring-2 ring-green-500"
            type="text"
            placeholder="Phone Number"
          />
          {/* gender */}
          <div className="bg-green-50 w-full flex items-center space-x-1 justify-center md:justify-start">
            <input className="" type="radio" name="male" />
            <label>Male</label>
            <input type="radio" name="male" />
            <label>Female</label>
          </div>
          {/* Age */}
          <input
            className="rounded-lg bg-green-50  px-2 py-2 focus:outline-none focus:ring-2 ring-green-600"
            type="text"
            placeholder="Age"
          />
          <div className="col-span-2 md:col-span-4 ">
            Appointment Date & Time
          </div>
          {/* appoinment date */}
          <input
            className="rounded-lg bg-green-50  px-2 py-2 focus:outline-none focus:ring-2 ring-green-600"
            type="date"
          />
          {/* appointment time */}
          <input
            className="rounded-lg bg-green-50  px-2 py-2 focus:outline-none focus:ring-2 ring-green-600"
            type="time"
            placeholder="Time"
          />
          {/* specialist */}
          <select className="col-span-2 rounded-lg bg-green-50  px-2 py-2 focus:outline-none focus:ring-2 ring-green-600">
            <option value="1">Select Specialist</option>
            <option>Heart</option>
            <option>Medicine</option>
            <option>General</option>
          </select>
          {/* Dercribe problems */}
          <textarea
            placeholder="Describe your problems and symptoms"
            className="col-span-2 md:col-span-4 rounded-lg bg-green-50  px-2 py-2 focus:outline-none focus:ring-2 ring-green-600"
          />
          {/* submit */}
          <input
            className="rounded-lg  text-pink-600 cursor-pointer  px-2 py-2 ring-2 ring-pink-600 focus:outline-none hover:bg-pink-600 hover:text-white"
            type="submit"
            value="Book Now"
          />
        </div>
      </div>
    </div>
  );
};

export default AppointMent;
