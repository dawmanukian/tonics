import React, { useEffect, useState } from "react";
import "./friends.css";
import vector from "../../img/Vector.png";
import { ReactComponent as B1 } from "../../img/11.svg";
import { ReactComponent as B2 } from "../../img/8.svg";
import { ReactComponent as B3 } from "../../img/9.svg";
import { ReactComponent as Re } from "../../img/re.svg";
import { ReactComponent as Fr } from "../../img/Group.svg";
import Task from "../../components/task/Task";
import Friend from "../../components/friend/Friend";

const Friends = () => {
  const [friends, setFriends] = useState([]);
  useEffect(() => {
    const tg = window.Telegram.WebApp;
    tg.ready(); // Initialize the Telegram Web App
  }, []);
  const tg = window.Telegram.WebApp;
  const [telegramId, setTelegramId] = useState(
    String(tg.initDataUnsafe.user.id)
  );

  const shareContent = () => {
    window.Telegram.WebApp.openTelegramLink(
      `https://t.me/share/url?url=https://t.me/bot_name?start=${telegramId}`
    );
  };

  useEffect(() => {
    const getFriends = async () => {
      try {
        const response = await fetch(
          `https://toniksp.xyz/api/user/get-referrals`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ referral: "45" }),
          }
        );
        const data = await response.json();
        setFriends(data);
      } catch (error) {
        console.log(error);
      }
    };
    getFriends();
  }, []);

  return (
    <div className="friends-page">
      <img src={vector} alt="" className="vector" />
      <B3 className="b3" />
      <B2 className="b2" />
      <B1 className="b1" />
      <div className="t_texts">
        <p>
          Invite your friends and{" "}
          <span style={{ color: "#42BDFF" }}>earn offline profit</span>
        </p>
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
            <p className="tasks_header">Your friends</p>
            <div className="tasks_num">{friends.length}</div>
          </div>
          <Re />
        </div>
        <div className="all_tasks">
          {friends.map((el) => {
            return <Friend username={el.telegramId} balance={el.balance} />;
          })}
        </div>
      </div>
      <button className="ex" onClick={shareContent}>
        <Fr />
        Invite friends
      </button>
    </div>
  );
};

export default Friends;
