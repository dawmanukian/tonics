import React from "react";
import "./task.css";
import { ReactComponent as Coin2 } from "../../img/coin2.svg";

const Task = () => {
  return (
    <div className="task_">
      <div>
        <p className="task_he">Connect your wallet</p>
        <p><Coin2 /><p style={{color: "#EFF9FF", opacity: "80%"}}>+200</p></p>
      </div>
      <button>Get</button>
    </div>
  );
};

export default Task;
