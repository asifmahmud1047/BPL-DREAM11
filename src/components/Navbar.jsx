import React from "react";
import "./Navbar.css";

const Navbar = ({ money }) => (
  <nav className="navbar sticky">
    <div className="logo">
      <img src="https://i.ibb.co.com/cb9qHNt/logo.png" alt="" />
    </div>
    <div className="links flex sm:grid-flow-col">
      <a href="#">Home</a>
      <a href="#">Fixture</a>
      <a href="#">Teams</a>
      <a href="#">Schedules</a>
    </div>
    <div className="money">
      <img src="https://i.ibb.co.com/4MHyPRT/coin.png" alt="" />
      Coins: {money}
    </div>
  </nav>
);

export default Navbar;
