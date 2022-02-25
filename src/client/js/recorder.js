const startBtn = document.getElementById("startBtn");
const preview = document.getElementById("preview");

startBtn.addEventListener("click", async () => {
  const stream = await navigator.mediaDevices.getUserMedia({
    audio: true,
    video: true,
  });
  preview.srcObject = stream;
  preview.play();
});
