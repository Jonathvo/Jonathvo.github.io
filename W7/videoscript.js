const video = document.querySelector("#video");
console.log(video);

//--------------Creat sound for play. Fetching the right play button

const playButton = document.querySelector("#play-button");
console.log(playButton);

//play video on click
playButton.addEventListener("click", playAudio);

// play logic
function playAudio() {
  video.play();
}

//--------------Creat sound for pause, Fetching the right play button

const playPauseButton = document.querySelector("#play-pause-button");
console.log(playPauseButton);

//pause video on click
playPauseButton.addEventListener("click", toggleVideo);

const playPauseImg = document.querySelector("#play-pause-img");
console.log(playPauseImg);

// pause logic
function toggleVideo() {
  if (video.paused || video.ended) {
    video.play();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/play--v2.png";
  } else {
    video.pause();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/pause--v2.png";
  }
}
