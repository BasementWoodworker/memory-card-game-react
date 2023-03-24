import React from "react";

export default function GameOver(props) {
  const conclusion = props.win ? "Congratulations! You won the game" : "Game Over";
  
  function reset() {
    props.setGamePhase("play")
    props.setWin(false);
  }

  return(
    <div className="game-over">
      <h1>{conclusion}</h1>
      <div>Your score is {props.score}</div>
      <button onClick={reset}>Restart</button>
    </div>
  )
}