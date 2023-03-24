import React, { useState } from "react";

export default function Hint(props) {
  const [hidden, setHidden] = useState(true);
  
  return(
    <div className={`hint ${hidden ? "hidden" : ""}`}>
      <div className="top-bar">
        <h2>How to play</h2>
        <button onClick={() => setHidden(!hidden)}>{hidden ? "▽" : "△"}</button>
      </div>
      <p>This game is about memory</p>
      <p>Click on each card to go to next level</p>
      <p>Don't click on a card more than once</p>
    </div>
  )
}