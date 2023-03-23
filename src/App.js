import React, { useState, useEffect } from "react";
import "./App.css";
import Game from "./Components/Game";
import GameOver from "./Components/GameOver"

export default function App(props) {
  const [gamePhase, setGamePhase] = useState("play");
  const [score, setScore] = useState(0);

  useEffect(() => {
    console.log(gamePhase)
  }, [gamePhase])

  switch (gamePhase) {
    case "play": return <Game setGamePhase={setGamePhase} score={score} setScore={setScore}/>
    case "game over": return <GameOver setGamePhase={setGamePhase} score={score}/>
  }
}