import React from "react";
import About from "../components/about/about";
import Headerbtm from "../components/header/header-btm";
import Joinsec1 from "../components/join-sec1/join-sec1";
import Navbar from "../components/navbar/navbar";
const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Headerbtm />
      <About />
      <Joinsec1 />
    </div>
  );
};

export default Home;
