const videoContainer = document.getElementById("videoContainer");
const form = document.getElementById("commentForm");
const deleteBtn = document.querySelectorAll("#video__comment-delete");
const list = document.querySelector("#video__comments-list");

const addComment = (text, id) => {
  const videoComments = document.querySelector(".video__comments ul");
  const newComment = document.createElement("li");
  newComment.dataset.id = id;
  newComment.className = "video__comment";
  const icon = document.createElement("i");
  icon.className = "fas fa-comment";
  const span = document.createElement("span");
  span.innerText = ` ${text}`;
  const button = document.createElement("button");
  button.innerText = "❌";
  newComment.appendChild(icon);
  newComment.appendChild(span);
  newComment.appendChild(button);
  videoComments.prepend(newComment);
  button.addEventListener("click", handleDeleteBtn);
};

const handleSubmit = async event => {
  // 작업을 잠시 멈춰준다.
  event.preventDefault();
  const textarea = form.querySelector("textarea");
  const text = textarea.value;
  const videoId = videoContainer.dataset.id;
  if (text === "") {
    return;
  }
  const response = await fetch(`/api/videos/${videoId}/comment`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text }),
  });

  if (response.status === 201) {
    textarea.value = "";
    const { newCommentId } = await response.json();
    addComment(text, newCommentId);
  }
};

const handleDeleteBtn = async event => {
  const dataId = event.target.parentElement.dataset.id;
  if (confirm("삭제하시겠습니까?") === true) {
    list.removeChild(event.target.parentElement);
    await fetch("/api/commentDelete", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ dataId }),
    });
  }
};

form.addEventListener("submit", handleSubmit);
deleteBtn.forEach(array => {
  array.addEventListener("click", handleDeleteBtn);
});
