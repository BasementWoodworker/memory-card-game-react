import React, { useEffect, useState } from "react";
import Cards from "./Cards";

export default function Game(props) {
  const [cardAmount, setCardAmount] = useState(3);
  const [currentCards, setCurretCards] = useState(Cards.getRandomCards(cardAmount));

  useEffect(() => {
    setCurretCards(Cards.getRandomCards(cardAmount));
  }, [cardAmount]);

  function goToNewLevel() {
    setCardAmount(cardAmount + 1);
  }

  function checkWin() {
    return currentCards.reduce((result, card) => !card.beenChosen ? false : result, true);
  }

  function cardsToJSX(cards) {
    const results = cards.map(card => {
      return(
        <div className="card" onClick={clickCard}>
          <div className="image-placeholder"></div>
          <div className="name">{card.name}</div>
        </div>
      )
    })
    return(
      <div className="card-container">{results}</div>
    )
  }

  function clickCard(event) {
    const currentCardName = event.target.querySelector(".name").textContent;
    const card = currentCards.find(card => card.name === currentCardName)
    if (card.beenChosen) {
      props.setGamePhase("game over");
      return;
    }
    props.setScore(props.score + 1);
    card.choose();
    if (checkWin()) {
      console.log("GOING TO THE NEW LEVEL")
      goToNewLevel();
      return;
    }
    setCurretCards(currentCards.shuffle());
  }

  return(
    <div>{cardsToJSX(currentCards)}</div>
  )
}