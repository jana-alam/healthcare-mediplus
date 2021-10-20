import React from "react";
import Banner from "../Banner/Banner";
import Benefit from "../Benefits/Benefit";
import Services from "../Services/Services";
import Subscribe from "../Subscribe/Subscribe";
import Teams from "../Teams/Teams";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Benefit></Benefit>
      <Services></Services>
      <Teams></Teams>
      <Subscribe></Subscribe>
    </div>
  );
};

export default Home;
