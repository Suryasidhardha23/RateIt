function addToWishlist(movieName) {
  let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

  if (!wishlist.includes(movieName)) {
    wishlist.push(movieName);
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    alert(`${movieName} added to wishlist!`);
  } else {
    alert(`${movieName} is already in wishlist.`);
  }
}

function viewWishlist() {
  const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
  alert("Your Wishlist:\n" + wishlist.join("\n"));
}

let scrollIndex = 0;
const scrollAmount = 5;

function scrollCast(direction) {
  const container = document.getElementById("castCarousel");
  const itemWidth = container.children[0].offsetWidth + 20;
  container.scrollLeft += direction * itemWidth * scrollAmount;
}

const movies = [
  { name: "Minnal Murali", url: "minnalmurali.html" },
  { name: "2018", url: "2018.html" },
  { name: "12th Fail", url: "12thFail.html" },
  { name: "Animal", url: "animal.html" },
  { name: "Avengers End Game", url: "avengers.html" },
  { name: "avtar", url: "avtar.html" },
  { name: "Bahubali 2", url: "bahubali2.html" },
  { name: "Bramhastra", url: "bramhastra.html" },
  { name: "Dhruva", url: "dhruva.html" },
  { name: "Drishyam", url: "drishyam.html" },
  { name: "Final Destination", url: "finalDestination.html" },
  { name: "Hridayam", url: "hridayam.html" },
  { name: "Interstellar", url: "interstellar.html" },
  { name: "KGF CHAPTER 2", url: "kgf.html" },
  { name: "Lucky Bhaskar", url: "LuckyBhaskar.html" },
  { name: "Maharshi", url: "maharshi.html" },
  { name: "Maheshinte", url: "maheshinte.html" },
  { name: "Manjumel Boys", url: "manjumelBoys.html" },
  { name: "Marco", url: "marco.html" },
  { name: "Minnal Murali", url: "minnalmurali.html" },
  { name: "Mission Impossible", url: "mis.html" },
  { name: "MS Dhoni - The untold story", url: "msDhoni.html" },
  { name: "Mushkil", url: "mushkil.html" },
  { name: "Premalu", url: "premalu.html" },
  { name: "Pushpa 2", url: "pushpa.html" },
  { name: "RRR", url: "rrr.html" },
  { name: "Salaar", url: "salaar.html" },
  { name: "Spiderman Home Coming", url: "spiderman.html" },
  { name: "The Dark Knight", url: "TheDarkKnight.html" },
  { name: "The Goat Life", url: "TheGoatLife.html" },
  { name: "Uncharted", url: "uncharted.html" },

];

function searchMovies() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const resultBox = document.getElementById("searchResults");
  resultBox.innerHTML = "";

  const filtered = movies.filter(movie => movie.name.toLowerCase().includes(input));

  filtered.forEach(movie => {
    const div = document.createElement("div");
    div.innerHTML = `<a href="${movie.url}">${movie.name}</a>`;
    resultBox.appendChild(div);
  });

  if (filtered.length === 0) {
    resultBox.innerHTML = "<p>No matches found.</p>";
  }
}
V
