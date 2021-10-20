import React from "react";
import { useHistory } from "react-router";

const Doctor = (props) => {
  const { imageUrl, name, specialist } = props.doctor;
  const history = useHistory();
  const handleDoctor = () => {
    history.push("/about-us");
  };
  return (
    <div onClick={handleDoctor} className="cursor-pointer relative">
      <img src={imageUrl} alt="Doctor" />
      <div className="absolute font-bold bottom-0 bg-green-300 bg-opacity-80 text-green-700 w-full px-3">
        <h3 className="">{name}</h3>
        <p className="">{specialist}</p>
      </div>
    </div>
  );
};

export default Doctor;
