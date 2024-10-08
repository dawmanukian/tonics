import React from "react";
import "./user-data.css";
import glows from "../../img/glows.png";
import glow from "../../img/glow2.png";
import { ReactComponent as Coin } from "../../img/coin.svg";
import { ReactComponent as Coin2 } from "../../img/coin2.svg";
import { ReactComponent as Ques } from "../../img/ques.svg";
import { useSelector, useDispatch } from "react-redux";

const UserData = ({onShowAlert}) => {
  const balance = useSelector((state) => state.currentUser.balance);
  const lvl = useSelector((state) => state.currentUser.level);
  return (
    <div className="user-datas">
      <div onClick={onShowAlert} className="balance" style={{ height: "54px", marginBottom: "6px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
          <span className="cur">Current token price 10.000 Tonics = 5$</span>
          <Ques />
        </div>
      </div>
      <div className="balance">
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <Coin />
          <span className="balance_number">{balance}</span>
          <img className="glow_1" src={glow} />
        </div>
      </div>
      <div className="datas">
        <div className="balance">
          <div className="b_tx">
            <p>Rank</p>
            <div>
              <span>Vo.{lvl}</span>
            </div>
          </div>
          <img src={glows} alt="" />
        </div>
        <div className="balance">
          <div className="b_tx">
            <p>Per tap</p>
            <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
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
