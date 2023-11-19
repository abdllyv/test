import React from "react";
import MeetTeam from "./section/MeetTeam";
import World from "./section/World";
import Contact from "./section/Contact";
import Banner from "./section/Banner";
import Category from "./section/Category";

const Home = () => {
  return (
    <main>
      <Banner/>
      <Category/>
      <MeetTeam />
      <World/>
      <Contact/>  
    </main>
  );
};

export default Home;
