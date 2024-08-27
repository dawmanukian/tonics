import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loading from "./pages/loading/Loading";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import { useState, useEffect } from "react";
import Friends from "./pages/friends/Friends";
import Tasks from "./pages/tasks/Tasks";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const [showLoading, setShowLoading] = useState(true);

  setTimeout(() => setShowLoading(false), "3000");

  const tg = window.Telegram.WebApp;
  const [telegramId, setTelegramId] = useState(
    String(tg.initDataUnsafe.user.id)
  );

  useEffect(() => {
    const createUser = async (telegramId) => {
      const queryParams = new URLSearchParams(window.location.search);
      const paramValue = queryParams.get("code");
      try {
        const response = await fetch(`https://toniksp.xyz/api/user/create`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ telegramId, referral: Number(paramValue) }),
        });
        const data = await response.json();
        console.log(data);
        dispatch({
          type: "add-data",
          payload: {
            balance: data.balance,
            level: data.level,
            channel1: data.channel1,
            channel2: data.channel2,
            channel3: data.channel3,
            channel4: data.channel4,
            channel5: data.channel5,
            channel6: data.channel6,
            refCode: data.refCode,
          },
        });
      } catch (error) {
        console.error(error);
      }
    };
    const getData = async () => {
      try {
        const response = await fetch("https://toniksp.xyz/api/user/get-one", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ telegramId }),
        });
        const data = await response.json();
        if (data.success) {
          dispatch({
            type: "add-data",
            payload: {
              balance: data.balance,
              level: data.level,
              channel1: data.channel1,
              channel2: data.channel2,
              channel3: data.channel3,
              channel4: data.channel4,
              channel5: data.channel5,
              channel6: data.channel6,
              refCode: data.refCode,
            },
          });
        } else {
          createUser(telegramId);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  return (
    <div
      className="App"
      style={showLoading ? { minHeight: "auto", overflowY: "hidden" } : null}
    >
      {showLoading ? (
        <Loading />
      ) : (
        <Router>
          <Routes>
            <Route path="/*" element={<Home />} />
            <Route path="/friends" element={<Friends />} />
            <Route path="/tasks" element={<Tasks />} />
          </Routes>
          <Navbar />
        </Router>
      )}
    </div>
  );
}

export default App;
