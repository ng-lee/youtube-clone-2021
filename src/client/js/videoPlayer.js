const video = document.querySelector("video");
const playBtn = document.getElementById("play");
const muteBtn = document.getElementById("mute");
const time = document.getElementById("time");
const volume = document.getElementById("volume");

playBtn.addEventListener("click", (event) => {
  if (video.paused) {
    playBtn.innerText = "Pause";
    video.play();
  } else {
    playBtn.innerText = "Play";
    video.pause();
  }
});
