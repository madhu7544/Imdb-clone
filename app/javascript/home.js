let data = [
  {
    id: 1,
    image:
      "https://res.cloudinary.com/dsiyffj0o/image/upload/v1688532310/spiderman_ygqmht.jpg",
    title: "Spider Man",
    ratings: 8.2,
    year: "2018",
    genre: ["Family", "Action"],
  },
  {
    id: 2,
    image:
      "https://res.cloudinary.com/dsiyffj0o/image/upload/v1688532646/avengers_ony9cd.jpg",
    title: "Avengers",
    ratings: 8.5,
    year: "2012",
    genre: ["Drama", "Thriller"],
  },
  {
    id: 3,
    image:
      "https://res.cloudinary.com/dsiyffj0o/image/upload/v1688532750/godfather_biyyrk.jpg",
    title: "The Godfather",
    ratings: 7,
    year: "1972",
    genre: ["Drama", "Crime"],
  },
  {
    id: 4,
    image:
      "https://res.cloudinary.com/dsiyffj0o/image/upload/v1688532809/avatar_cgfuct.avif",
    title: "Avatar",
    ratings: 9,
    year: "2018",
    genre: ["Sci-fi", "Action"],
  },
  {
    id: 5,
    image:
      "https://res.cloudinary.com/dsiyffj0o/image/upload/v1688532417/spider_2_er9ffi.jpg",
    title: "Spider Man-2",
    ratings: 7.7,
    year: "2016",
    genre: ["Sci-fi", "Action"],
  },
  {
    id: 6,
    image:
      "https://res.cloudinary.com/dsiyffj0o/image/upload/v1670756880/snow-removal-machine-working-high-ski-slope-snowstorm_454047-2149_1_xfrlul.png",
    title: "Ghost Rider",
    ratings: 8,
    year: "2013",
    genre: ["Thriller", "Action"],
  },
];
const moviesPage = document.getElementById("moviesPage");
const searchInput = document.getElementById("inputSearch");
const searchButton = document.getElementById("searchBtn");
const selectOption = document.getElementById("selectOption");

const moviesData = (each) => {
  const liElement = document.createElement("li");
  liElement.classList.add("each-movie");
  liElement.innerHTML = `
      <a class="movie-anchor" href="/movies">
        <img class="movie-image" src="${each.image}">
        <div class="content">
          <h3 class="movie-title">${each.title}</h3>
          <p class="movie-rating">Ratings: ${each.ratings}</p>
        </div>
      </a>
    `;
  moviesPage.appendChild(liElement);
};

data.map((each) => {
  moviesData(each);
});

const filterData = () => {
  moviesPage.innerHTML = "";
  const searchName = searchInput.value.toLowerCase().trim();
  const filteredData = data.filter((movie) =>
    movie.title.toLowerCase().includes(searchName)
  );
  filteredData.map((each) => {
    moviesData(each);
  });
};
searchButton.addEventListener("click", filterData);

const filterDataOption = (selectOption, selected) => {
  console.log(selectOption);
  console.log(selected);
  moviesPage.innerHTML = "";

  if (selectOption === "all") {
    data.map((each) => {
      moviesData(each);
    });
  } else if (selectOption === "genre") {
    const filteredData = data.filter((movie) => {
      if (movie.genre.includes(selected)) {
        return true;
      }
      return false;
    });
    filteredData.map((each) => {
      moviesData(each);
    });
  } else if (selectOption === "release-year") {
    const filteredData = data.filter((movie) => {
      if (movie.year == selected) {
        return true;
      }
      return false;
    });
    filteredData.map((each) => {
      moviesData(each);
    });
  } else if (selectOption === "rating") {
    const filteredData = data.sort((a, b) => {
      return b.ratings - a.ratings;
    });
    filteredData.map((each) => {
      moviesData(each);
    });
  }
};

selectOption.addEventListener("change", () => {
  const selectedOption = selectOption.value;
  const genreFilter = document.getElementById("genreFilter");
  const yearFilter = document.getElementById("yearFilter");
  const selectGenre = document.getElementById("selectGenre");
  const selectYear = document.getElementById("selectYear");

  if (selectedOption === "genre") {
    genreFilter.style.display = "block";
    yearFilter.style.display = "none";
    selectGenre.addEventListener("change", () => {
      const selectedGenre = selectGenre.value;
      filterDataOption(selectedOption, selectedGenre);
    });
  } else if (selectedOption === "release-year") {
    genreFilter.style.display = "none";
    yearFilter.style.display = "block";
    selectYear.addEventListener("change", () => {
      const selectedYear = selectYear.value;
      filterDataOption(selectedOption, selectedYear);
    });
  } else {
    genreFilter.style.display = "none";
    yearFilter.style.display = "none";
    filterDataOption(selectedOption);
  }
  filterDataOption(selectedOption);
});

const loginLogout = document.getElementById("login");

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

if (token == "false") {
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
    window.location.href = "/home";
    document.cookie = "token=false; expires=Thu, 1 Jan 2024 00:00:00 UTC";
  }
});
