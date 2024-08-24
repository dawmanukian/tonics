import React from "react";
import "./user-data.css";
import glows from "../../img/glows.png";
import glow from "../../img/glow2.png";
import { ReactComponent as Coin } from "../../img/coin.svg";
import { ReactComponent as Coin2 } from "../../img/coin2.svg";

const UserData = () => {
  return (
    <div className="user-datas">
      <div className="balance">
        <p className="leader">
          Leaderboard <span style={{ color: "#42BDFF" }}>#39920</span>
        </p>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <Coin />
          <span className="balance_number">15.970</span>
          <img className="glow_1" src={glow} />
        </div>
      </div>
      <div className="datas">
        <div className="balance">
          <div className="b_tx">
            <p>Rank</p>
            <div>
                
              <span>Vo.1</span>
            </div>
          </div>
          <img src={glows} alt="" />
        </div>
        <div className="balance">
          <div className="b_tx">
            <p>Per tap</p>
            <div style={{display: 'flex', alignItems: 'center', gap: '4px'}}>
              <Coin2 />
              <span>+1</span>
            </div>
          </div>
          <img src={glows} alt="" />
        </div>
      </div>
    </div>
  );
};

export default UserData;
