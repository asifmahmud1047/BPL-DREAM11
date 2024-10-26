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
      <img src="../public/assets/coin.png" alt="" />
      Coins: {money}
    </div>
  </nav>
);

export default Navbar;

// https://i.ibb.co.com/r5tNtHW/banner-main.png
// https://i.ibb.co.com/7g0kZPY/bg-shadow.png
// https://i.ibb.co.com/cb9qHNt/logo.png
// https://i.ibb.co.com/tzR6tR0/logo-footer.png
