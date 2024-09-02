import React from "react";
import "./clicker.css";
import { useState } from "react";
import { ReactComponent as Click } from "../../img/click.svg";
import { useSelector, useDispatch } from "react-redux";

const Clicker = () => {
  const dispatch = useDispatch();
  const balance = useSelector((state) => state.currentUser.balance);
  const tg = window.Telegram.WebApp;
  const [telegramId, setTelegramId] = useState(
    "String(tg.initDataUnsafe.user.id)"
  );
  return (
    <div className="clicker">
      <Click
        onClick={async () => {
          dispatch({
            type: "edit-balance",
            payload: {
              balance: balance + 1,
            },
          });
          const response = await fetch(
            "https://toniksp.xyz/api/user/add-balance",
            {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                telegramId: telegramId,
                newBalance: balance + 1,
              }),
            }
          );
        }}
        className="button"
      />
    </div>
  );
};

export default Clicker;
