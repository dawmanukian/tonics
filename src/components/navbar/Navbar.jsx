import React from "react";
import "./navbar.css";
import img from "../../img/glow.png";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  return (
    <div className="navbar">
      <div className="navbar_links">
        <Link to="/" style={location.pathname === '/' ? {opacity: '100%', borderBottom: '2px solid #42BDFF'} : null}>Home</Link>
        <Link to="/friends" style={location.pathname === '/friends' ? {opacity: '100%', borderBottom: '2px solid #42BDFF'} : null}>Friends</Link>
        <Link to="/tasks" style={location.pathname === '/tasks' ? {opacity: '100%', borderBottom: '2px solid #42BDFF'} : null}>Tasks</Link>
      </div>
      <img src={img} alt="" />
    </div>
  );
};

export default Navbar;
