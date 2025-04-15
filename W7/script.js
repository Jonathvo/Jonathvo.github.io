const airportAudio = document.querySelector("#airport-audio");
console.log(airportAudio);

//--------------Creat sound for play. Fetching the right play button

const playButton = document.querySelector("#play-button");
console.log(playButton);

//play sound on click
playButton.addEventListener("click", playAudio);

// play logic
function playAudio() {
  airportAudio.play();
}

//--------------Creat sound

//--------------Creat sound for pause, Fetching the right play button

const pauseButton = document.querySelector("#pause-button");
console.log(pauseButton);

//play sound on click
pauseButton.addEventListener("click", pauseAudio);

// play logic
function pauseAudio() {
  airportAudio.pause();
}

//--------------Creat sound

//--------------Create sound for pop sound

const popSound = document.querySelector("#pop-sound");
console.log(popSound);

const popButton = document.querySelector("#pop-button");
console.log(popButton);

//play sound on click
popButton.addEventListener("click", popAudio);

// play logic
function popAudio() {
  // airportAudio.pause();
  popSound.play();
}

//--------------Creat sound
