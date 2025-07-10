let comments = [];

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('commentForm');
  const commentInput = document.getElementById('commentInput');
  const commentsBox = document.getElementById('commentsBox');
  const toggleButton = document.getElementById('toggleButton');

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const commentText = commentInput.value.trim();

    if (commentText !== "") {
      comments.unshift(commentText); 
      commentInput.value = "";
      renderComments();
    }
  });

  toggleButton.addEventListener('click', () => {
    commentsBox.classList.toggle('collapsed');
    toggleButton.textContent = commentsBox.classList.contains('collapsed')
      ? "▼ Show All"
      : "▲ Show Less";
  });

  function renderComments() {
    commentsBox.innerHTML = "";

    comments.forEach((text) => {
      const commentDiv = document.createElement('div');
      commentDiv.classList.add('comment');
      commentDiv.textContent = text;
      commentsBox.appendChild(commentDiv);
    });

    toggleButton.style.display = comments.length > 4 ? "block" : "none";
  }
});

function addToWishlist(movieName) {
  let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
  if (!wishlist.includes(movieName)) {
    wishlist.push(movieName);
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    alert(`${movieName} added to wishlist`);
  }
}

