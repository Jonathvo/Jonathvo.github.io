// Load the first video on page load

const videos = [
  { src: "stardust.mp4", title: "Stardust" },
  { src: "Logo HUB.mp4", title: "Logo HUB" },
  { src: "hi.mp4", title: "Logo OOMMOMMOSMOOMSMXOMOXSMOXSOMXMOMOX" },
];

let currentVideoIndex = 0;
const videoPlayer = document.getElementById("videoPlayer");
const videoTitle = document.getElementById("videoTitle");
const backButton = document.getElementById("backButton");
const nextButton = document.getElementById("nextButton");

function loadVideo(index) {
  videoPlayer.src = videos[index].src;
  videoTitle.textContent = videos[index].title;
  videoPlayer.load();
  videoPlayer.play();
}

backButton.addEventListener("click", () => {
  if (currentVideoIndex > 0) {
    currentVideoIndex--;
    loadVideo(currentVideoIndex);
  }
});

nextButton.addEventListener("click", () => {
  if (currentVideoIndex < videos.length - 1) {
    currentVideoIndex++;
    loadVideo(currentVideoIndex);
  }
});

fullscreenButton.addEventListener("click", () => {
  if (videoPlayer.requestFullscreen) {
    videoPlayer.requestFullscreen();
  } else if (videoPlayer.webkitRequestFullscreen) {
    videoPlayer.webkitRequestFullscreen();
  } else if (videoPlayer.msRequestFullscreen) {
    videoPlayer.msRequestFullscreen();
  }
});
