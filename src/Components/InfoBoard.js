import React from "react";

export default function InfoBoard(props) {
  return(
    <div className="info-board">
      <h2>Level {props.level}</h2>
      <div>Score: {props.score}</div>
      <div>Best score: {props.bestScore}</div>
    </div>
  )
}