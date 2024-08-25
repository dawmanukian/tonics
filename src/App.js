import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loading from "./pages/loading/Loading";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import { useState } from "react";
import Friends from "./pages/friends/Friends";
import Tasks from "./pages/tasks/Tasks";

function App() {
  const [showLoading, setShowLoading] = useState(true);

  setTimeout(() => setShowLoading(false), "3000")

  return (
    <div className="App">
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
