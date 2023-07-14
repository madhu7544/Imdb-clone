// const movieData = [
//   {
//     title: "Spider Man",
//     poster:
//       "https://res.cloudinary.com/dsiyffj0o/image/upload/v1688536275/spiderbroad_vjihdj.jpg",
//     genres: ["Action", "Adventure", "Thriller"],
//     releaseYear: 2016,
//     duration: "2h 12m",
//     director: "Sam Raimi",
//     actors: ["Tobey Maguire", "Kirsten Dunst"],
//     summary:
//       "Average teenager Peter Parker is transformed into an extraordinary super hero after he is accidentally bitten by a radioactive spider. When his beloved uncle is savagely murdered during a robbery, young Peter vows to use his powers to avenge his death.",
//   },
// ];

// const movie = movieData[0];
// const movieFile = document.getElementById("movieData");
// const movieD = document.createElement("div");
// movieD.classList.add("movie-data");
// movieD.innerHTML = `
//   <div class="movie-data">
//     <h1 class="movie-title">${movie.title}</h1>
//     <img
//       src="${movie.poster}"
//       alt="movie-image"
//       class="movie-image"
//     />
//     <div class="details-container">
//       <div class="genre">
//         <h4 class="details-head">Genre:</h4>
//         ${movie.genres
//           .map((genre) => `<p class="description">${genre}</p>`)
//           .join("")}
//       </div>
//       <div class="duration-year">
//         <h4 class="details-head">Release Year:</h4>
//         <p class="description">${movie.releaseYear}</p>
//         <h4 class="details-head">Duration:</h4>
//         <p class="description">${movie.duration}</p>
//       </div>
//     </div>
//     <div class="director-actors">
//       <h4 class="details-head">
//         Director: <span class="description">${movie.director}</span>
//       </h4>
//       <h4 class="details-head">
//         Actors:
//         <span class="description">${movie.actors.join(", ")}</span>
//       </h4>
//     </div>
//     <div class="summary">
//       <h4 class="details-head">Summary:</h4>
//       <p class="summary-desc">${movie.summary}</p>
//     </div>
//   </div>
// `;
// movieFile.appendChild(movieD);

const loginLogout = document.getElementById("login-a");

const dataFromCookie = document.cookie;
const passwordEmail = (cookieValue) => {
  const cookies = dataFromCookie.split("; ");
  const cookie = cookies.find((each) => each.startsWith(`${cookieValue}=`));
  if (cookie) {
    const [name, value] = cookie.split("=");
    return value;
  }
};

const token = passwordEmail("token");

if (token === "false") {
  loginLogout.innerText = "Login";
} else {
  loginLogout.innerText = "Logout";
}
loginLogout.addEventListener("click", () => {
  if (token === "false") {
    loginLogout.innerText = "Login";
    window.location.href = "/login";
  } else {
    loginLogout.innerText = "Logout";
    window.location.href = "/movies";
    document.cookie = "token=false; expires=Thu, 1 Jan 2024 00:00:00 UTC";
  }
});
