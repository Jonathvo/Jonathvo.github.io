const grid = document.querySelector(".grid-container");
const scoreDisplay = document.querySelector(".score");
let score = 0;

let cardData = [
  { name: "image", img: "assets/01-icon.png" },
  { name: "image", img: "assets/01-icon.png" },
];

let cards = [...cardData]; // duplicate for pair
let firstCard = null;
let secondCard = null;
let lockBoard = false;

function shuffle(array) {
  return array.sort(() => 0.5 - Math.random());
}

function generateCards() {
  grid.innerHTML = "";
  shuffle(cards).forEach((card, index) => {
    const cardElement = document.createElement("div");
    cardElement.classList.add("card");
    cardElement.innerHTML = `
      <div class="card-inner" data-name="${card.name}">
        <div class="card-front"></div>
        <div class="card-back"></div>
      </div>
    `;
    cardElement.addEventListener("click", flipCard);
    grid.appendChild(cardElement);
  });
}

function flipCard() {
  if (lockBoard) return;
  const cardInner = this.querySelector(".card-inner");
  if (cardInner.classList.contains("flipped")) return;

  cardInner.classList.add("flipped");

  if (!firstCard) {
    firstCard = cardInner;
    return;
  }

  secondCard = cardInner;
  lockBoard = true;

  const isMatch = firstCard.dataset.name === secondCard.dataset.name;
  if (isMatch) {
    score++;
    scoreDisplay.textContent = score;
    firstCard = null;
    secondCard = null;
    lockBoard = false;
  } else {
    setTimeout(() => {
      firstCard.classList.remove("flipped");
      secondCard.classList.remove("flipped");
      firstCard = null;
      secondCard = null;
      lockBoard = false;
    }, 1000);
  }
}

function restart() {
  score = 0;
  scoreDisplay.textContent = score;
  firstCard = null;
  secondCard = null;
  lockBoard = false;
  generateCards();
}

// Initial load
generateCards();
