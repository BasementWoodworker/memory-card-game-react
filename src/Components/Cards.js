class Card {
  constructor(name) {
    this.name = name;
    this.beenChosen = false;
  }
  choose() {
    this.beenChosen = true;
  }
}

Object.defineProperty(Array.prototype, "shuffle", {
  value: function() {
    const copy = [...this];
    copy.sort(() => Math.random() - 0.5);
    return copy;
  }
})

let cards = [
  {name: "Regular rock"},
  {name: "Long rock"},
  {name: "Big Rock"},
  {name: "Red rock"},
  {name: "Premium rock"},
  {name: "Legendary rock"},
  {name: "Sculpted rock"}
]

function getRandomCards(amount) {
  cards = cards.shuffle();
  const result = [];
  for (let i = 0; i < amount; i++) {
    result.push(new Card(cards[i].name))
  }
  return result
}

export default {
  getRandomCards
}