// SelectedPlayers.jsx
import React from "react";
import "./SelectedPlayers.css"; // Import a CSS file for styling
import { toast } from "react-toastify";

const SelectedPlayers = ({ players, onRemove, onAddMore }) => {
  return (
    <div className="selected-players">
      <h2 className="font:bold">Selected Players ({players.length}/6)</h2>
      {players.length === 0 ? (
        <p>No players selected yet.</p>
      ) : (
        players.map((player) => (
          <div key={player.playerId} className="selected-player-card">
            <img src={player.image} alt={player.name} />
            <div className="player-info">
              <h3>{player.name}</h3>
              <p>Role: {player.role}</p>
              <p>Price: {player.biddingPrice} Coins</p>
              <button onClick={() => handleRemove(player)}>Remove</button>
            </div>
          </div>
        ))
      )}

      {/* Add More Player Button */}
      <button className="add-more-btn" onClick={onAddMore}>
        Add More Player
      </button>
    </div>
  );

  function handleRemove(player) {
    onRemove(player);
    toast.info(`${player.name} has been removed from the team.`);
  }
};

export default SelectedPlayers;
