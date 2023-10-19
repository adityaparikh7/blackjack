import React from "react";
import Deck from "./components/Deck";
import Player from "./components/Player";

const Game = () => {
  return (
    <div className="game">
      <h1>Blackjack Game</h1>
      <Deck />
      <div className="players">
        <Player name="Player 1" />
        <Player name="Dealer" />
      </div>
    </div>
  );
};

export default Game;
