// PlayerCard.jsx
import React from "react";
import { toast } from "react-toastify";

const PlayerCard = ({ player, onChoose }) => (
  <div className="player-card">
    <img src={player.image} alt={player.name} />
    <h3>{player.name}</h3>
    <p>{player.country}</p>
    <p>Role: {player.role}</p>
    <p>Price: {player.biddingPrice} Coins</p>
    <button onClick={() => onChoose(player)}>Choose Player</button>
  </div>
);

export default PlayerCard;
