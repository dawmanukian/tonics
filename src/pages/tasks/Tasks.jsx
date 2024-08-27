import React from "react";
import "./tasks.css";
import vector from "../../img/Vector.png";
import { ReactComponent as B1 } from "../../img/11.svg";
import { ReactComponent as B2 } from "../../img/8.svg";
import { ReactComponent as B3 } from "../../img/9.svg";
import { ReactComponent as Re } from "../../img/re.svg";
import { ReactComponent as Ton } from "../../img/TON icon.svg";
import Task from "../../components/task/Task";

const Tasks = () => {
  return (
    <div className="tasks-page">
      <img src={vector} alt="" className="vector" />
      <B3 className="b3" />
      <B2 className="b2" />
      <B1 className="b1" />
      <div className="t_texts">
        <p>
          Complete tasks and{" "}
          <span style={{ color: "#42BDFF" }}>earn money</span>
        </p>
        <span>
          You can exchange your
          <br /> tokens for TON here
        </span>
      </div>
      <div className="tasks_section">
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", gap: "7px" }}>
            <p className="tasks_header">Tasks</p>
            <div className="tasks_num">6</div>
          </div>
          <Re />
        </div>
        <div className="all_tasks">
          <Task />
        </div>
      </div>
    </div>
  );
};

export default Tasks;
