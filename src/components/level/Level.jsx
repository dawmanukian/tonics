import React, { useEffect, useState } from "react";
import "./level.css";
import glow from "../../img/glow2.png";
import { useSelector, useDispatch } from "react-redux";

const Level = () => {
  const dispatch = useDispatch();
  const balance = useSelector((state) => state.currentUser.balance);
  const lvl = useSelector((state) => state.currentUser.level);

  const [line, setLine] = useState((balance / (5000 * lvl)) * 100);
  const tg = window.Telegram.WebApp;
  const [telegramId, setTelegramId] = useState(
    String(tg.initDataUnsafe.user.id)
  );

  useEffect(() => {
    const new_line = (balance / (5000 * lvl)) * 100;
    setLine(() => new_line);
    if (lvl !== 10) {
      const chl = async () => {
        const response = await fetch(`https://toniksp.xyz/api/user/add-level`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ telegramId, newLevel: lvl + 1 }),
        });
      };
      if (balance >= 5000 * lvl) {
        dispatch({
          type: "edit-level",
          payload: {
            level: lvl + 1,
          },
        });
        chl();
      }
    }
  }, [balance]);

  return (
    <div className="level">
      <div className="header_div">
        <p className="header_p1" style={{ color: "#EFF9FF", opacity: "60%" }}>
          Vo. {lvl}
        </p>
        <div>
          <p className="level_1" style={{ color: "#EFF9FF", opacity: "60%" }}>
            <span style={{ opacity: "100%" }}>{balance}</span>/{5000 * lvl}
          </p>
        </div>
        <p className="header_p2">Vo. {lvl + 1}</p>
      </div>
      <div className="line">
        <div className="bl" style={{ width: `${line}%` }}></div>
      </div>
      <img className="glow_1" src={glow} />
    </div>
  );
};

export default Level;
