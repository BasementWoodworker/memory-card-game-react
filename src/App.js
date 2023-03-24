import React, { useState, useEffect } from "react";
import "./App.css";
import Game from "./Components/Game";
import GameEnd from "./Components/GameEnd"
import Hint from "./Components/Hint";
import InfoBoard from "./Components/InfoBoard";

export default function App(props) {
  const [gamePhase, setGamePhase] = useState("play");
  const [level, setLevel] = useState(1);
  const [score, setScore] = useState(0);
  const savedBestScore = Number (localStorage.getItem("bestScore"));
  const [bestScore, setBestScore] = useState(savedBestScore ?? 0);
  const [win, setWin] = useState(false);

  useEffect(() => {
    console.log(gamePhase)
  }, [gamePhase])

  switch (gamePhase) {
    case "play": return(
    <React.Fragment>
      <InfoBoard level={level} score={score} bestScore={bestScore} win={win}/>
      <Game
       setGamePhase={setGamePhase} 
       level={level} setLevel={setLevel} 
       score={score} setScore={setScore} bestScore={bestScore} setBestScore={setBestScore}
       setWin={setWin}
      />
      <Hint/>
    </React.Fragment>
    )
    case "game end": return <GameEnd setGamePhase={setGamePhase} win={win} setWin={setWin} score={score}/>
  }
}