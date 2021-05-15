import React from "react";
import About from "../components/about/about";
import Course from "../components/courses/courses";
import Headerbtm from "../components/header/header-btm";
import Joinsec1 from "../components/join-sec1/join-sec1";
import Joinsec2 from "../components/join-sec2/join-sec2";
import Navbar from "../components/navbar/navbar";
const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Headerbtm />
      <About />
      <Joinsec1 />
      <Joinsec2 />
      <Course />
    </div>
  );
};

export default Home;
