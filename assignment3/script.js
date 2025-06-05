// ======= DOM Elements =======
const movesDisplay = document.getElementById("moves-count");
const timeDisplay = document.getElementById("time");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const gameContainer = document.querySelector(".game-container");
const resultDisplay = document.getElementById("result");
const controls = document.querySelector(".controls-container");
const soundToggle = document.getElementById("sound-toggle");
const bgSound = document.getElementById("bg-sound");

// ======= Game State =======
let cards;
let interval;
let firstCard = false;
let secondCard = false;
let seconds = 0;
let minutes = 0;
let movesCount = 0;
let winCount = 0;
let soundOn = false;

// ======= Assets (Cards) =======
const items = Array.from({ length: 12 }, (_, i) => ({
  name: `${i + 1}`,
  image: `${String(i + 1).padStart(2, "0")}.png`,
}));

// ======= Utility Functions =======
const updateTimer = () => {
  seconds++;
  if (seconds >= 60) {
    minutes++;
    seconds = 0;
  }
  const format = (val) => (val < 10 ? `0${val}` : val);
  timeDisplay.innerHTML = `<span>Time: </span>${format(minutes)}:${format(
    seconds
  )}`;
};

const updateMoves = () => {
  movesCount++;
  movesDisplay.innerHTML = `<span>Moves: </span>${movesCount}`;
};

const getRandomCards = (size = 4) => {
  const temp = [...items];
  const selected = [];
  for (let i = 0; i < (size * size) / 2; i++) {
    const index = Math.floor(Math.random() * temp.length);
    selected.push(temp.splice(index, 1)[0]);
  }
  return selected;
};

// ======= Game Logic =======
const generateMatrix = (cardValues, size = 4) => {
  gameContainer.innerHTML = "";
  const cardsToRender = [...cardValues, ...cardValues].sort(
    () => Math.random() - 0.5
  );

  cardsToRender.forEach(({ name, image }) => {
    gameContainer.innerHTML += `
      <div class="card-container" data-card-value="${name}">
        <div class="card-before"></div>
        <div class="card-after"><img src="${image}" class="image" /></div>
      </div>`;
  });

  gameContainer.style.gridTemplateColumns = `repeat(${size}, auto)`;

  cards = document.querySelectorAll(".card-container");
  cards.forEach((card) => {
    card.addEventListener("click", () => {
      if (
        card.classList.contains("matched") ||
        card.classList.contains("flipped")
      )
        return;

      card.classList.add("flipped");
      if (!firstCard) {
        firstCard = card;
      } else {
        secondCard = card;
        updateMoves();

        const firstValue = firstCard.getAttribute("data-card-value");
        const secondValue = secondCard.getAttribute("data-card-value");

        if (firstValue === secondValue) {
          firstCard.classList.add("matched");
          secondCard.classList.add("matched");
          winCount++;
          firstCard = false;
          secondCard = false;

          if (winCount === cardsToRender.length / 2) {
            resultDisplay.innerHTML = `<h2>You Won</h2><h4>Moves: ${movesCount}</h4>`;
            stopGame();
          }
        } else {
          setTimeout(() => {
            firstCard.classList.remove("flipped");
            secondCard.classList.remove("flipped");
            firstCard = false;
            secondCard = false;
          }, 900);
        }
      }
    });
  });
};

const startGame = () => {
  movesCount = 0;
  seconds = 0;
  minutes = 0;
  winCount = 0;
  resultDisplay.innerText = "";
  controls.classList.add("hide");
  startButton.classList.add("hide");
  stopButton.classList.remove("hide");
  interval = setInterval(updateTimer, 1000);
  movesDisplay.innerHTML = `<span>Moves: </span>0`;
  generateMatrix(getRandomCards());
};

const stopGame = () => {
  clearInterval(interval);
  controls.classList.remove("hide");
  stopButton.classList.add("hide");
  startButton.classList.remove("hide");
};

// ======= Event Listeners =======
startButton.addEventListener("click", startGame);
stopButton.addEventListener("click", stopGame);

soundToggle.addEventListener("click", () => {
  soundOn = !soundOn;
  soundToggle.textContent = soundOn ? "Sound: ON" : "Sound: OFF";
  soundOn ? bgSound.play() : bgSound.pause();
});
