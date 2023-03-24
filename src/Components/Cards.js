class Card {
  constructor(name, imageSrc) {
    this.name = name;
    this.imageSrc = imageSrc;
    this.id = 0;
    this.beenChosen = false;
  }
  choose() {
    this.beenChosen = true;
  }
}

Object.defineProperty(Array.prototype, "shuffle", {
  value: function() {
    let currentIndex = this.length;
    let randomIndex;
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [this[currentIndex], this[randomIndex]] = [this[randomIndex], this[currentIndex]];
    }
    return this;
  }
})

let cards = [
  {
    name: "Ordinary stone",
    imageSrc: require("../assets/img/ordinary-stone.jpg")
  },
  {
    name: "Square stone",
    imageSrc: require("../assets/img/square-stone.jpg")
  },
  {
    name: "Big rock",
    imageSrc: require("../assets/img/big-rock.jpeg")
  },
  {
    name: "Red stone",
    imageSrc: require("../assets/img/red-stone.jpg")
  },
  {
    name: "Green stone",
    imageSrc: require("../assets/img/green-stone.jpg")
  },
  {
    name: "Premium stone",
    imageSrc: require("../assets/img/premium-stone.jpg")
  },
  {
    name: "Legendary stone",
    imageSrc: require("../assets/img/legendary-stone.jpeg")
  },
  {
    name: "Sculpted rock",
    imageSrc: require("../assets/img/sculpted-rock.jpg")
  },
  {
    name: "Abrasive stone",
    imageSrc: require("../assets/img/abrasive-stone.jpg")
  },
  {
    name: "Distant rock",
    imageSrc: require("../assets/img/distant-rock.jpg")
  },
  {
    name: "Magic stone",
    imageSrc: require("../assets/img/magic-stone.png")
  }
]

function getRandomCards(amount) {
  cards = cards.shuffle();
  const result = [];
  for (let i = 0; i < amount; i++) {
    result.push(new Card(cards[i].name, cards[i].imageSrc))
  }
  return result
}

export default getRandomCards