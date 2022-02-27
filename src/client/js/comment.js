const videoContainer = document.getElementById("videoContainer");
const form = document.getElementById("commentForm");
const textarea = form.querySelector("textarea");
const btn = form.querySelector("button");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const text = textarea.value;
  const { id: videoId } = videoContainer.dataset;
  fetch(`/api/videos/${videoId}/comment`, {
    method: "POST",
    body: {
      text,
    },
  });
});
