import React, { useEffect, useState } from "react";
import Cards from "./Cards";

export default function Game(props) {
  const [currentCards, setCurretCards] = useState(Cards.getRandomCards(props.level + 2));

  useEffect(function clearScore() {
    props.setScore(0);
  }, []);

  useEffect(() => {
    setCurretCards(Cards.getRandomCards(props.level + 2));
  }, [props.level]);

  function goToNewLevel() {
    props.setLevel(props.level + 1);
  }

  function checkWin() {
    return currentCards.reduce((result, card) => !card.beenChosen ? false : result, true);
  }

  function cardsToJSX(cards) {
    const results = cards.map(card => {
      return(
        <div className="card" onClick={clickCard} key={card.name}>
          <img src={card.imageSrc}></img>
          <div className="name">{card.name}</div>
        </div>
      )
    })
    return results;
  }

  function clickCard(event) {
    const currentCardName = event.target.querySelector(".name").textContent;
    const card = currentCards.find(card => card.name === currentCardName)
    if (card.beenChosen) {
      props.setGamePhase("game over");
      props.setLevel(1);
      return;
    }
    props.setScore(props.score + 1);
    if (props.score + 1 > props.bestScore) props.setBestScore(props.score + 1)
    card.choose();
    if (checkWin()) {
      console.log("GOING TO THE NEW LEVEL")
      goToNewLevel();
      return;
    }
    setCurretCards(currentCards.shuffle());
  }

  return(
    <div className="card-container">{cardsToJSX(currentCards)}</div>
  )
}