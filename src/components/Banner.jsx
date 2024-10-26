import React from "react";
import "./Banner.css";

const Banner = ({ increaseMoney }) => (
  <div className="banner">
    <img src="../public/assets/banner-main.png" alt="" />
    <h1>Assemble Your Ultimate BPL Dream 11 Cricket Team</h1>
    <p>Beyond Boundaries Beyond Limits</p>
    <button onClick={increaseMoney}>Claim Free Credit</button>
  </div>
);

export default Banner;
