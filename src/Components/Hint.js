import React, { useState } from "react";

export default function Hint(props) {
  const [hidden, setHidden] = useState(false);
  
  return(
    <div className={`hint ${hidden ? "hidden" : ""}`}>
      <div className="top-bar">
        <h2>How to play</h2>
        <button onClick={() => setHidden(!hidden)}>{hidden ? "▽" : "△"}</button>
      </div>
      <p>This game is about memory</p>
      <p>Click on all cards but don't click on any more than once</p>
    </div>
  )
}