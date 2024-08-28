import React from "react";
import "./task.css";
import { ReactComponent as Coin2 } from "../../img/coin2.svg";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

const Task = () => {
  const tg = window.Telegram.WebApp;
  const [telegramId, setTelegramId] = useState(
    String(tg.initDataUnsafe.user.id)
  );
  const dispatch = useDispatch();
  const balance = useSelector((state) => state.currentUser.balance);
  const task1 = useSelector((state) => state.currentUser.channel1);
  const task2 = useSelector((state) => state.currentUser.channel2);
  const task3 = useSelector((state) => state.currentUser.channel3);
  const task4 = useSelector((state) => state.currentUser.channel4);
  const task5 = useSelector((state) => state.currentUser.channel5);
  const task6 = useSelector((state) => state.currentUser.channel6);

  const tasks = [
    {
      id: 1,
      task: "Subscribe to our Telegram Channel",
      price: 200,
      link: "https://t.me/tonicsproject",
      status: task1,
    },
    {
      id: 2,
      task: "Subscribe to the CRYPTO ENTHUSIAST channel:",
      price: 200,
      link: "https://t.me/cryptoenthusiasm4",
      status: task2,
    },
    {
      id: 3,
      task: "Claim your TON coins!",
      price: 200,
      link: "https://t.me/toncoinspin_bot",
      status: task3,
    },
    {
      id: 4,
      task: "Make a dog swap:",
      price: 200,
      link: "https://t.me/dogsexchange_bot",
      status: task4,
    },
    {
      id: 5,
      task: "Don't miss out on the NOTCOIN bonus!",
      price: 200,
      link: "https://t.me/notdropair24_bot",
      status: task5,
    },
    {
      id: 6,
      task: "Subscribe to the NOTCOIN channel",
      price: 200,
      link: "https://t.me/notcoin",
      status: task6,
    },
  ];

  return (
    <>
      {tasks.map((el, index) => {
        return (
          <a
            onClick={async () => {
              if (!el.status) {
                dispatch({
                  type: "channel" + el.id,
                  payload: {
                    data: true,
                    balance: balance + el.price,
                  },
                });
                const res = await fetch(
                  "https://toniksp.xyz/api/user/complete-task",
                  {
                    method: "PUT",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                      telegramId,
                      task: "channel" + el.id,
                      price: el.price,
                    }),
                  }
                );
              }
            }}
            href={el.link}
            className="task_"
            key={index}
            target="_blank"
          >
            <div>
              <p className="task_he">{el.task}</p>
              <p>
                <Coin2 />
                <p style={{ color: "#EFF9FF", opacity: "80%" }}>+{el.price}</p>
              </p>
            </div>
            <button disabled={el.status}>{el.status ? "Open" : "Get"}</button>
          </a>
        );
      })}
    </>
  );
};

export default Task;
