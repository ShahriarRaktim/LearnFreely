import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const activeStyle = {
    fontWeight: "bold",
    color: "red",
  };
  return (
    <div className="head">
      <div>
        <h1>YOGA</h1>
      </div>
      <nav>
        <NavLink className="navlink" style={activeStyle} to="/home">
          Home
        </NavLink>
        <NavLink className="navlink" style={activeStyle} to="/service">
          Service
        </NavLink>
        <NavLink className="navlink" style={activeStyle} to="/success">
          Success
        </NavLink>
        <NavLink className="navlink" style={activeStyle} to="/aboutus">
          About us
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;
