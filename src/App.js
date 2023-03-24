import React, { useState, useEffect } from "react";
import "./App.css";
import Game from "./Components/Game";
import GameOver from "./Components/GameOver"
import Hint from "./Components/Hint";
import InfoBoard from "./Components/InfoBoard";

export default function App(props) {
  const [gamePhase, setGamePhase] = useState("play");
  const [level, setLevel] = useState(1);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  useEffect(() => {
    console.log(gamePhase)
  }, [gamePhase])

  switch (gamePhase) {
    case "play": return(
    <React.Fragment>
      <InfoBoard level={level} score={score} bestScore={bestScore}/>
      <Game setGamePhase={setGamePhase} level={level} setLevel={setLevel} score={score} setScore={setScore} bestScore={bestScore} setBestScore={setBestScore}/>
      <Hint/>
    </React.Fragment>
    )
    case "game over": return <GameOver setGamePhase={setGamePhase} score={score}/>
  }
}