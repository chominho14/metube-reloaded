const videoContainer = document.getElementById("videoContainer");
const form = document.getElementById("commentForm");
const textarea = form.querySelector("textarea");
const btn = form.querySelector("button");

const handleSubmit = event => {
  // 작업을 잠시 멈춰준다.
  event.preventDefault();
  const text = textarea.value;
  const video = videoContainer.dataset.id;
};

btn.addEventListener("submit", handleSubmit);
