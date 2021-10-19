import React from "react";

const Benefit = () => {
  return (
    <div className="w-10/12 mx-auto grid grid-cols-4 -my-8 text-center mb-20 shadow-2xl">
      <div className="bg-red-400 text-white px-4 py-6">
        <h3 className="font-semibold text-2xl mb-3">24 Hour Support</h3>
        <p className="text-sm">
          We provide 24 hour support to out patient. We have special team
          working shift wise to support our clients.
        </p>
      </div>
      <div className="bg-red-500 text-white px-4 py-6">
        <h3 className="font-semibold text-2xl mb-3">Affordable Prices</h3>
        <p className="text-sm">
          Our charges are bare minimum to maintain the hospital. You will feel
          no pressure regarding the cost.
        </p>
      </div>
      <div className="bg-red-600 text-white px-4 py-6">
        <h3 className="font-semibold text-2xl mb-3">Online Consultations</h3>
        <p className="text-sm">
          If you are worried about physical consultancy in this covid time, we
          have online doctors to support you.
        </p>
      </div>
      <div className="bg-red-700 text-white px-4 py-6">
        <h3 className="font-semibold text-2xl mb-3">Professional Doctors</h3>
        <p className="text-sm">
          Our doctors are well trained from the various renowed country. We
          don't compromise choosing doctors.
        </p>
      </div>
    </div>
  );
};

export default Benefit;
