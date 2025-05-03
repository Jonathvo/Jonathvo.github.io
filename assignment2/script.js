const video = document.querySelector("#custom-video-player");
const playPauseBtn = document.querySelector("#play-pause-btn");
const playPauseImg = document.querySelector("#play-pause-img");
const progressBar = document.querySelector("#progress-bar-fill");
const muteUnmuteButton = document.querySelector("#mute-unmute-button");
const muteUnmuteImg = document.querySelector("#mute-unmute-img");
const fullscreenButton = document.querySelector("#fullscreen-button");
const videoPlayer = document.getElementById("custom-video-player");
const titleElement = document.querySelector("main h1");
const nextButton = document.getElementById("next");
const backButton = document.getElementById("back");

video.removeAttribute("controls");

// Play/pause functionality
playPauseBtn.addEventListener("click", togglePlayPause);
video.addEventListener("timeupdate", updateProgressBar);

function togglePlayPause() {
  if (video.paused || video.ended) {
    video.play();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/pause--v1.png";
  } else {
    video.pause();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/play--v1.png";
  }
}

function updateProgressBar() {
  const value = (video.currentTime / video.duration) * 100;
  progressBar.style.width = value + "%";
}

// Mute/unmute functionality
muteUnmuteButton.addEventListener("click", toggleAudio);

function toggleAudio() {
  video.muted = !video.muted;
  muteUnmuteImg.src = video.muted
    ? "https://img.icons8.com/ios-glyphs/30/no-audio--v1.png"
    : "https://img.icons8.com/ios-glyphs/30/high-volume--v2.png";
}

// Fullscreen toggle
fullscreenButton.addEventListener("click", toggleFullscreen);

function toggleFullscreen() {
  if (!document.fullscreenElement) {
    video.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
}

// Playlist functionality
const videos = [
  {
    src: "https://thelongesthumstore.sgp1.cdn.digitaloceanspaces.com/IM-2250/miac.mp4",
    title: "RUN NOW (ONIONN REMIX) | SON TUNG M-TP | Official Music Video",
  },
  {
    src: "stardust.mp4",
    title: "MUON ROI MA SAO CON | SON TUNG M-TP | Official Music Video",
  },
  {
    src: "ex1.mov",
    title: "HAY TRAO CHO ANH ft. Snoop Dogg | SON TUNG M-TP | Official MV",
  },
  {
    src: "https://thelongesthumstore.sgp1.cdn.digitaloceanspaces.com/IM-2250/miac.mp4",
    title: "NOI NAY CO ANH | SON TUNG M-TP | Official MV",
  },
  {
    src: "ex2.mp4",
    title: "CO CHAY YEU LA DAY | SON TUNG M-TP | Official MV",
  },
  {
    src: "ex3.mp4",
    title: "CHUNG TA CUA TUONG LAI | SON TUNG M-TP | Official MV",
  },
];

let currentIndex = 0;

function loadVideo(index) {
  videoPlayer.src = videos[index].src;
  titleElement.textContent = videos[index].title;
  videoPlayer.play();
}
// next/back functionality
nextButton.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % videos.length;
  loadVideo(currentIndex);
});

backButton.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + videos.length) % videos.length;
  loadVideo(currentIndex);
});

// Left/right functionality
const carousel = document.querySelector(".video-carousel");
document.querySelector(".scroll-right").onclick = () => {
  carousel.scrollBy({ left: 300, behavior: "smooth" });
};
document.querySelector(".scroll-left").onclick = () => {
  carousel.scrollBy({ left: -300, behavior: "smooth" });
};

// acknowledgement part
// Get the modal, the button that opens it, and the <span> element that closes it
const modal = document.getElementById("acknowledgement-modal");
const btn = document.getElementById("acknowledgement-btn");
const span = document.getElementsByClassName("close-button")[0];

// When the user clicks the button, open the modal
btn.onclick = function () {
  modal.style.display = "flex"; // Use flex to maintain centering
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
