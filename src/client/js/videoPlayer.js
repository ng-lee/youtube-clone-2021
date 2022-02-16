const video = document.querySelector("video");
const playBtn = document.getElementById("play");
const muteBtn = document.getElementById("mute");
const volumeRange = document.getElementById("volume");
const currentTime = document.getElementById("currentTime");
const totalTime = document.getElementById("totalTime");
const timeline = document.getElementById("timeline");
const fullScreenBtn = document.getElementById("fullScreen");
const videoContainer = document.getElementById("videoContainer");
const videoControls = document.getElementById("videoControls");

let controlsTimeout = null;
let volumeValue = 0.5;
video.volume = volumeValue;

playBtn.addEventListener("click", (event) => {
  playBtn.innerText = video.paused ? "Pause" : "Play";
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
});

muteBtn.addEventListener("click", () => {
  video.muted = !video.muted;
  muteBtn.innerText = video.muted ? "Unmute" : "Mute";
  volumeRange.value = video.muted ? 0 : volumeValue;
});

volumeRange.addEventListener("input", (event) => {
  const {
    target: { value },
  } = event;
  if (video.muted) {
    video.muted = false;
    muteBtn.innerText = "Mute";
  }
  volumeValue = value;
  video.volume = value;
});

const formatTime = (seconds) =>
  new Date(seconds * 1000).toISOString().substring(14, 19);

video.addEventListener("loadedmetadata", () => {
  totalTime.innerText = formatTime(Math.floor(video.duration));
  timeline.max = Math.floor(video.duration);
});

video.addEventListener("timeupdate", () => {
  currentTime.innerText = formatTime(Math.floor(video.currentTime));
  timeline.value = Math.floor(video.currentTime);
});

timeline.addEventListener("input", (event) => {
  const {
    target: { value },
  } = event;
  video.currentTime = value;
});

fullScreenBtn.addEventListener("click", () => {
  const fullscreen = document.fullscreenElement;
  if (fullscreen) {
    document.exitFullscreen();
    fullScreenBtn.innerText = "Enter Fullscreen";
  } else {
    videoContainer.requestFullscreen();
    fullScreenBtn.innerText = "Exit Fullscreen";
  }
});

videoControls.addEventListener("mousemove", () => {
  if (controlsTimeout) {
    clearTimeout(controlsTimeout);
    controlsTimeout = null;
  }
  videoControls.classList.add("showing");
});

videoControls.addEventListener("mouseleave", () => {
  controlsTimeout = setTimeout(() => {
    videoControls.classList.remove("showing");
  }, 3000);
});
