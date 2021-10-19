import React from "react";
import Banner from "../Banner/Banner";
import Benefit from "../Benefits/Benefit";
import Header from "../Header/Header";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <Benefit></Benefit>
      <Services></Services>
    </div>
  );
};

export default Home;
