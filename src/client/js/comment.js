const videoContainer = document.getElementById("videoContainer");
const form = document.getElementById("commentForm");
const textarea = form.querySelector("textarea");
const btn = form.querySelector("button");

const addComment = (text) => {
  const videoComments = document.querySelector(".comment-section__col ul");
  const newComment = document.createElement("li");
  newComment.className = "comment-list__comment";
  const span = document.createElement("span");
  span.innerText = text;
  newComment.appendChild(span);
  videoComments.prepend(newComment);
};

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const text = textarea.value;
  const { id: videoId } = videoContainer.dataset;
  if (text === "") return;
  const { status } = await fetch(`/api/videos/${videoId}/comment`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text }),
  });
  if (status == 201) {
    addComment(text);
  }
  textarea.value = "";
});
