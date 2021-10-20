import React from "react";

const AppointMent = () => {
  return (
    <div className="pt-16">
      <h2 className="text-4xl font-bold text-pink-600 mt-4 text-center">
        Book An Appointment
      </h2>
      {/* appoinement form */}
      <div className="w-1/2 grid grid-cols-1 mx-auto my-8">
        <div className="grid grid-cols-4 gap-3 mb-2">
          <input
            className=" col-span-2 rounded-lg bg-green-50  px-2 py-2 focus:outline-none focus:ring-2 ring-green-600"
            type="text"
            placeholder="Patient's Name"
          />
          <input
            className="  col-span-2 rounded-lg bg-green-50  px-2 py-2 focus:outline-none focus:ring-2 ring-green-600"
            type="email"
            placeholder="Email"
          />
          <input
            className=" col-span-2 rounded-lg bg-green-50  px-2 py-2 focus:outline-none focus:ring-2 ring-green-500"
            type="text"
            placeholder="Phone Number"
          />
          <div className="bg-green-50 w-full flex items-center space-x-1 justify-center">
            <input className="" type="radio" name="male" />
            <label>Male</label>
            <input type="radio" name="male" />
            <label>Female</label>
          </div>
          <input
            className="rounded-lg bg-green-50  px-2 py-2 focus:outline-none focus:ring-2 ring-green-600"
            type="text"
            placeholder="Age"
          />
          <div className="col-span-4">Appointment Date & Time</div>
          <input
            className="rounded-lg bg-green-50  px-2 py-2 focus:outline-none focus:ring-2 ring-green-600"
            type="date"
          />
          <input
            className="rounded-lg bg-green-50  px-2 py-2 focus:outline-none focus:ring-2 ring-green-600"
            type="time"
            placeholder="Time"
          />
          <select className="col-span-2 rounded-lg bg-green-50  px-2 py-2 focus:outline-none focus:ring-2 ring-green-600">
            <option value="1">Select Specialist</option>
            <option></option>
            <option></option>
            <option></option>
          </select>
          <textarea
            placeholder="Describe your problems and symptoms"
            className="col-span-4 rounded-lg bg-green-50  px-2 py-2 focus:outline-none focus:ring-2 ring-green-600"
          />
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
