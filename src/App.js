import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loading from "./pages/loading/Loading";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import { useState } from "react";

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
          </Routes>
          <Navbar />
        </Router>
      )}
    </div>
  );
}

export default App;
