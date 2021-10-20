import React from "react";
import Banner from "../Banner/Banner";
import Benefit from "../Benefits/Benefit";
import Services from "../Services/Services";
import Subscribe from "../../Shared/Subscribe/Subscribe";
import OurDoctors from "../OurDoctors/OurDoctors";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Benefit></Benefit>
      <Services></Services>
      <OurDoctors></OurDoctors>
      <Subscribe></Subscribe>
    </div>
  );
};

export default Home;
