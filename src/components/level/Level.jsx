import React from "react";
import "./level.css";
import glow from "../../img/glow2.png";

const Level = () => {
  return (
    <div className="level">
      <div className="header_div">
        <p className="header_p1" style={{ color: "#EFF9FF", opacity: "60%" }}>Vo. 2</p>
        <div>
          <p className="level_1" style={{color: "#EFF9FF", opacity: '60%'}}><span style={{opacity: '100%'}}>0</span>/5000</p>
        </div>
        <p className="header_p2">Vo. 3</p>
      </div>
      <div className="line">
        <div className="bl"></div>
      </div>
      <img className="glow_1" src={glow}/>
    </div>
  );
};

export default Level;
