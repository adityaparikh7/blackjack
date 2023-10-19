import React, { useState } from "react";
import Hand from "./Hand";
import "./Player.css";

const Player = ({ name }) => {
  const [hand, setHand] = useState([]); // Player's hand
  const [balance, setBalance] = useState(1000); // Player's balance

  const handleHit = () => {
    // Implement hit logic
  };

  const handleStand = () => {
    // Implement stand logic
  };

  return (
    <div className="player">
      <h2>{name}</h2>
      <p>Balance: ${balance}</p>
      <Hand cards={hand} />
      <button onClick={handleHit}>Hit</button>
      <button onClick={handleStand}>Stand</button>
    </div>
  );
};

export default Player;
