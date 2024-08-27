import React from "react";
import "./friend.css";
import { ReactComponent as Coin2 } from "../../img/coin2.svg";

const Friend = ({username, balance}) => {
  return (
    <div className="task_">
      <div>
        <p className="task_he">{username}</p>
        <p>
          <Coin2 />
          <p style={{ color: "#EFF9FF", opacity: "80%" }}>{balance}</p>
        </p>
      </div>
    </div>
  );
};

export default Friend;
