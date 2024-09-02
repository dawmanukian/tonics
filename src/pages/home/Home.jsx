import React, { useState } from "react";
import Clicker from "../../components/clicker/Clicker";
import Level from "../../components/level/Level";
import "./home.css";
import UserData from "../../components/user-data/UserData";
import lgg from "../../img/lgg.png";

const Home = () => {
  const [showAlert, setShowAlert] = useState(false);

  return (
    <div className="home-page">
      {showAlert && (
        <div className="blured">
          <div className="bll" onClick={() => setShowAlert(false)}></div>
          <div className="bl_data">
            <img src={lgg} />
            <p>
              <span style={{ color: "rgba(66, 189, 255, 1)" }}>Tonics</span>{" "}
              Listing
            </p>
            <span>
              Our token will launch{" "}
              <span style={{ color: "rgba(66, 189, 255, 1)" }}>
                on Binance on September 30th.
              </span>{" "}
              Stay tuned and tap more{" "}
              <span style={{ color: "rgba(66, 189, 255, 1)" }}>$Tonics!</span>
            </span>
            <button onClick={() => setShowAlert(false)}>Back To App</button>
          </div>
        </div>
      )}
      <UserData onShowAlert={() => setShowAlert(true)}/>
      <Clicker />
      <Level />
    </div>
  );
};

export default Home;
