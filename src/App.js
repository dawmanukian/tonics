import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loading from "./pages/loading/Loading";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/*" element={<Home />} />
        </Routes>
        <Navbar />
      </Router>
    </div>
  );
}

export default App;
