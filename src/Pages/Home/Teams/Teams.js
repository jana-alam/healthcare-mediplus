import React, { useEffect, useState } from "react";
import Doctor from "../Docotor/Doctor";

const Teams = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetch("/doctors.json")
      .then((res) => res.json())
      .then((data) => setDoctors(data));
  }, []);

  return (
    <div className="bg-gray-100">
      <div className="md:container mx-auto py-12 text-center ">
        <div className="text-right">
          <h4 className="text-2xl mb-10">Our Doctors</h4>
          <h2 className="text-6xl">Who Will Be</h2>
          <h2 className="text-6xl font-bold text-pink-600 mt-4">
            Caring For You?
          </h2>
        </div>
        <div className="grid grid-cols-4 gap-x-6 gap-y-3 mt-8">
          {doctors.map((doctor) => (
            <Doctor key={`doctor-${doctor.id}`} doctor={doctor}></Doctor>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Teams;
