import React from "react";
import Clicker from "../../components/clicker/Clicker";
import Level from "../../components/level/Level";
import "./home.css";
import UserData from "../../components/user-data/UserData";

const Home = () => {
  return (
    <div className="home-page">
      <UserData />
      <Clicker />
      <Level />
    </div>
  );
};

export default Home;
