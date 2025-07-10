function filterMovies() {
  const input = document.getElementById('searchBox');
  const filter = input.value.toLowerCase();
  const cards = document.querySelectorAll('.movie-card');

  cards.forEach(card => {
    const title = card.getAttribute('data-title').toLowerCase();
    if (title.includes(filter)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}
