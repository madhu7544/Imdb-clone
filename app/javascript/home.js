let searchForm = document.getElementById("search-form");
let selectOption = document.getElementById("selectOption");

searchForm.addEventListener("input", function (event) {
  event.preventDefault();

  let search = "";
  const query = document.getElementById("query").value.trim();
  if (query.length > 3) {
    search = query;
  }

  let option = selectOption.value;
  let rating = "";
  let all = "";
  if (option == "rating") {
    rating = "rating";
  } else if (option == "all") {
    all = "all";
  }

  const selectGenre = document.getElementById("selectGenre").value;
  const selectYear = document.getElementById("selectYear").value;
  const moviesPage = document.getElementById("moviesPage");
  const formData = {
    title: search,
    genre: selectGenre,
    year: selectYear,
    rating: rating,
    all: all,
  };

  setTimeout(() => {
    let formData2 = new URLSearchParams(formData);
    fetchMoviesAfter(formData2);
  }, 500);

  const fetchMoviesAfter = (formData2) => {
    fetch(`/search?${formData2}`, {
      method: "GET",
      headers: {},
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        moviesPage.innerHTML = "";
        data.map((movie) => {
          moviesPage.innerHTML += `
            <li class="each-movie">
              <a  href="/movies/${movie.id}" class="movie-anchor">
                <img src="${movie.poster}" class="movie-image"/>
                <div class="content">
                  <h3 class="movie-title">${movie.title}</h3>
                  <p class="movie-rating">Ratings: ${Math.round(movie.average * 10) / 10}</p>
                </div>
              </a>
            </li>
          `;
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
});

selectOption.addEventListener("change", () => {
  const selectedOption = selectOption.value;
  const genreFilter = document.getElementById("genreFilter");
  const yearFilter = document.getElementById("yearFilter");
  if (selectedOption === "genre") {
    genreFilter.style.display = "block";
    yearFilter.style.display = "none";
  } else if (selectedOption === "release-year") {
    genreFilter.style.display = "none";
    yearFilter.style.display = "block";
    
  } else {
    genreFilter.style.display = "none";
    yearFilter.style.display = "none";
  }
});

const loginBtn = document.getElementById("login");

if (loginBtn) {
  loginBtn.addEventListener("click", () => {
    console.log("login");
    window.location.href = "/login";
  });
}
const logoutBtn = document.getElementById("logout");

if (logoutBtn) {
  const addMovie = document.getElementById("addMovie");

  addMovie.addEventListener("click", () => {
    window.location.href = "/addmovie";
  });

  logoutBtn.addEventListener("click", () => {
    console.log("logout");
    fetch("/home", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          window.location.href = "/home";
        } else {
          console.error("Error deleting the resource");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  });
}
