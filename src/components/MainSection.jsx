import React, { useState, useEffect } from "react";
import PlayerCard from "./PlayerCard";
import SelectedPlayers from "./SelectedPlayers";
import { toast } from "react-toastify";
import "./MainSection.css";

const MainSection = ({ money, updateMoney }) => {
  const [players, setPlayers] = useState([]);
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const [showSelected, setShowSelected] = useState(false);

  // Fetch player data from the public folder
  useEffect(() => {
    fetch("/players.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch player data");
        }
        return response.json();
      })
      .then((data) => setPlayers(data))
      .catch((error) => console.error("Error loading player data:", error));
  }, []);

  const addPlayer = (player) => {
    if (money < player.biddingPrice) {
      toast.error("Not enough Money To Buy This Player! Claim Some Credit.");
      return;
      // if (money > player.biddingPrice) {
      // toast.error("Congrats!!");
      // return;
    }
    if (selectedPlayers.length >= 6) {
      toast.error("Maximum 6 players can be selected.");
      return;
    }
    if (selectedPlayers.find((p) => p.playerId === player.playerId)) {
      toast.error("Player already selected.");
      return;
    }

    setSelectedPlayers([...selectedPlayers, player]);
    updateMoney(-player.biddingPrice);
  };

  const removePlayer = (player) => {
    setSelectedPlayers(
      selectedPlayers.filter((p) => p.playerId !== player.playerId)
    );
    updateMoney(player.biddingPrice);
  };

  return (
    <div className="main-section">
      <div className="toggle-buttons">
        <button onClick={() => setShowSelected(false)}>Available</button>
        <button onClick={() => setShowSelected(true)}>
          Selected ({selectedPlayers.length})
        </button>
      </div>

      {!showSelected ? (
        <div className="available-players">
          {players.map((player) => (
            <PlayerCard
              key={player.playerId}
              player={player}
              onChoose={addPlayer}
            />
          ))}
        </div>
      ) : (
        <SelectedPlayers players={selectedPlayers} onRemove={removePlayer} />
      )}
    </div>
  );
};

export default MainSection;
