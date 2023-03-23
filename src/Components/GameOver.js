import React from "react";

export default function GameOver(props) {
  return(
    <div className="game-over">
      <h1>Game Over</h1>
      <div>Your score is {props.score}</div>
    </div>
  )
}