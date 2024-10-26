// PlayerCard.jsx
import React from "react";
import { toast } from "react-toastify";

const PlayerCard = ({ player, onChoose }) => (
  <div className="player-card">
    <img src={player.image} alt={player.name} />
    <div className="flex gap-2 text-center mt-3">
      <i class="fa-solid fa-user"></i>
      <h2 className="bold">{player.name}</h2>
    </div>
    <div className="flex gap-2 text-center">
      <i class="fa-solid fa-flag"></i>
      <p>{player.country}</p>
    </div>
    <hr />
    <div className="flex gap-2 text-center">
      <i class="fa-solid fa-baseball-bat-ball"></i>
      <p>Role: {player.role}</p>
    </div>

    <p>Price: {player.biddingPrice} Coins</p>

    <button onClick={() => onChoose(player)}>Choose Player</button>
  </div>
);

export default PlayerCard;
