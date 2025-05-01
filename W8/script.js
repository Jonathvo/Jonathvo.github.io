// List of video objects with an ID and a source
const videoList = [
  { id: 1, src: "stardust.mp4" },
  { id: 2, src: "hi.mp4" },
  {
    id: 3,
    src: "https://thelongesthumstore.sgp1.cdn.digitaloceanspaces.com/IM-2250/miac.mp4",
  },
];

// Get the main video element by its ID

const myVideo = document.querySelector("#my-video");
console.log(myVideo);

// Get the progress bar element to visually show playback progress
const progressBar = document.querySelector("#progress-bar");

myVideo.addEventListener;

// Update progress bar width as the video plays
myVideo.addEventListener("timeupdate", updateProgress);

function updateProgress() {
  const duration = (myVideo.currentTime / myVideo.duration) * 100;
  progressBar.style.width = duration + "%";
}

// Select the play/pause button and its image icon
const playPauseButton = document.querySelector("#play-pause-button");
console.log(playPauseButton);

playPauseButton.addEventListener("click", togglePlayback);

const playPauseImg = document.querySelector("#play-pause-img");
console.log(playPauseImg);

// Toggle play/pause and update the icon accordingly
function togglePlayback() {
  if (myVideo.paused || myVideo.ended) {
    myVideo.play();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/pause--v2.png";
  } else {
    myVideo.pause();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/play--v2.png";
  }
}

// Mute/unmute functionality and icon toggle
const muteUnmuteButton = document.querySelector("#mute-unmute-button");
console.log(muteUnmuteButton);

muteUnmuteButton.addEventListener("click", toggleAudio);

const muteUnmuteImg = document.querySelector("#mute-unmute-img");
console.log(muteUnmuteImg);

function toggleAudio() {
  if (myVideo.muted) {
    myVideo.muted = false;
    muteUnmuteImg.src =
      "https://img.icons8.com/ios-glyphs/30/high-volume--v2.png";
  } else {
    myVideo.muted = true;
    muteUnmuteImg.src = "https://img.icons8.com/ios-glyphs/30/no-audio--v1.png";
  }
}

// Buttons to load and play specific videos by index

const stardustButton = document.querySelector("#stardust-vid-button");
console.log(stardustButton);

stardustButton.addEventListener("click", function chooseVideo() {
  playVideo(0);
});

///
const stmtpVideoButton = document.querySelector("#STMTP-vid-button");
console.log(stmtpVideoButton);

stmtpVideoButton.addEventListener("click", function chooseVideo() {
  playVideo(1);
});
///
const musicVideoButton = document.querySelector("#musicvideo-vid-button");
console.log(musicVideoButton);

musicVideoButton.addEventListener("click", function chooseVideo() {
  playVideo(2);
});

// Change the video source, load it, and start playing
function playVideo(no) {
  myVideo.src = videoList[no].src;
  console.log(myVideo.src);
  myVideo.load();
  myVideo.play();
}

// Fullscreen toggle button functionality
const fullscreenButton = document.querySelector("#fullscreen-button");
console.log(fullscreenButton);

fullscreenButton.addEventListener("click", toggleFullscreen);

function toggleFullscreen() {
  if (!document.fullscreenElement) {
    myVideo.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
}
