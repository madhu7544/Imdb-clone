// let data = [
//   {
//     id: 1,
//     image:
//       "https://res.cloudinary.com/dsiyffj0o/image/upload/v1688532310/spiderman_ygqmht.jpg",
//     title: "Spider Man",
//     ratings: 8.2,
//     year: "2018",
//     genre: ["Family", "Action"],
//   },
//   {
//     id: 2,
//     image:
//       "https://res.cloudinary.com/dsiyffj0o/image/upload/v1688532646/avengers_ony9cd.jpg",
//     title: "Avengers",
//     ratings: 8.5,
//     year: "2012",
//     genre: ["Drama", "Thriller"],
//   },
//   {
//     id: 3,
//     image:
//       "https://res.cloudinary.com/dsiyffj0o/image/upload/v1688532750/godfather_biyyrk.jpg",
//     title: "The Godfather",
//     ratings: 7,
//     year: "1972",
//     genre: ["Drama", "Crime"],
//   },
//   {
//     id: 4,
//     image:
//       "https://res.cloudinary.com/dsiyffj0o/image/upload/v1688532809/avatar_cgfuct.avif",
//     title: "Avatar",
//     ratings: 9,
//     year: "2018",
//     genre: ["Sci-fi", "Action"],
//   },
//   {
//     id: 5,
//     image:
//       "https://res.cloudinary.com/dsiyffj0o/image/upload/v1688532417/spider_2_er9ffi.jpg",
//     title: "Spider Man-2",
//     ratings: 7.7,
//     year: "2016",
//     genre: ["Sci-fi", "Action"],
//   },
//   {
//     id: 6,
//     image:
//       "https://res.cloudinary.com/dsiyffj0o/image/upload/v1670756880/snow-removal-machine-working-high-ski-slope-snowstorm_454047-2149_1_xfrlul.png",
//     title: "Ghost Rider",
//     ratings: 8,
//     year: "2013",
//     genre: ["Thriller", "Action"],
//   },
// ];

// const moviesData = (each) => {
//   const liElement = document.createElement("li");
//   liElement.classList.add("each-movie");
//   liElement.innerHTML = `
//       <a class="movie-anchor" href="/movies/${each.id}">
//         <img class="movie-image" src="${each.image}">
//         <div class="content">
//           <h3 class="movie-title">${each.title}</h3>
//           <p class="movie-rating">Ratings: ${each.ratings}</p>
//         </div>
//       </a>
//     `;
//   moviesPage.appendChild(liElement);
// };

// const searchInput = document.getElementById("inputSearch");
// const searchButton = document.getElementById("searchBtn");
// const selectOption = document.getElementById("selectOption");


// data.map((each) => {
//   moviesData(each);
// });

// const filterData = () => {
//   moviesPage.innerHTML = "";
//   const searchName = searchInput.value.toLowerCase().trim();
//   const filteredData = data.filter((movie) =>
//     movie.title.toLowerCase().includes(searchName)
//   );
//   filteredData.map((each) => {
//     moviesData(each);
//   });
// };
// searchButton.addEventListener("click", filterData);

// const filterDataOption = (selectOption, selected) => {
//   console.log(selectOption);
//   console.log(selected);
//   moviesPage.innerHTML = "";

//   if (selectOption === "all") {
//     data.map((each) => {
//       moviesData(each);
//     });
//   } else if (selectOption === "genre") {
//     if (selected === "all" || selected === undefined) {
//       data.map((each) => {
//         moviesData(each);
//       });
//     }
//     const filteredData = data.filter((movie) => {
//       if (movie.genre.includes(selected)) {
//         return true;
//       }
//       return false;
//     });
//     filteredData.map((each) => {
//       moviesData(each);
//     });
//   } else if (selectOption === "release-year") {
//     if (selected === "all" || selected === undefined) {
//       data.map((each) => {
//         moviesData(each);
//       });
//     }
//     const filteredData = data.filter((movie) => {
//       if (movie.year == selected) {
//         return true;
//       }
//       return false;
//     });
//     filteredData.map((each) => {
//       moviesData(each);
//     });
//   } else if (selectOption === "rating") {
//     const filteredData = data.sort((a, b) => {
//       return b.ratings - a.ratings;
//     });
//     filteredData.map((each) => {
//       moviesData(each);
//     });
//   }
// };




// searchButton.addEventListener("click", () => {
//   let searchQuery = document.getElementById("inputSearch").value;
//   console.log(searchQuery);
//   searchMovies(searchQuery);
// });

// function searchMovies(query) {
//   fetch("/home?query=" + encodeURIComponent(query))
//     .then(function (response) {
//       if (response.ok) {
//         return response.json();
//       } else {
//         throw new Error("Error: " + response.status);
//       }
//     })
//     .then(function (movies) {
//       renderMovies(movies);
//     })
//     .catch(function (error) {
//       console.error("Error:", error);
//     });
// }

// const loginLogout = document.getElementById("login-a");


// const dataFromCookie = document.cookie;

// const passwordEmail = (cookieValue) => {
//   const cookies = dataFromCookie.split("; ");
//   const cookie = cookies.find((each) => each.startsWith(`${cookieValue}=`));
//   if (cookie) {
//     const [name, value] = cookie.split("=");
//     return value;
//   }
// };

// const token = passwordEmail("token");

// if (token == "false") {
//   loginLogout.innerText = "Login";
// } else {
//   loginLogout.innerText = "Logout";
// }
// loginLogout.addEventListener("click", () => {
//   if (token === "false") {
//     loginLogout.innerText = "Login";
//     window.location.href = "/login";
//   } else {
//     loginLogout.innerText = "Logout";
//     window.location.href = "/home";
//     document.cookie = "token=false; expires=Thu, 1 Jan 2024 00:00:00 UTC";
//   }
// });


let searchForm = document.getElementById("search-form")

searchForm.addEventListener("input", function(event) {
  event.preventDefault();

  let search="";
  const query = document.getElementById("query").value;
  if (query.length>3){
    search = query
  }
  const selectOption = document.getElementById("selectOption").value;
  let rating = ""
  let all =""
  if (selectOption=='rating'){
    rating = 'rating';
  }
  else if (selectOption=='all'){
    all ="all";
  }

  
  const selectGenre = document.getElementById("selectGenre").value;
  const selectYear = document.getElementById("selectYear").value;
  const moviesPage = document.getElementById("moviesPage")
  const formData = {
    title: search,
    genre: selectGenre,
    year: selectYear,
    rating: rating,
    all:all
  };
  let formData2 = new URLSearchParams(formData);

  fetch(`/search?${formData2}`, {
    method: "GET",
    headers: {}
    }).then((response)=>{
      return response.json();
    }).then((data)=>{
        moviesPage.innerHTML= ""
        data.map(movie=>{
          moviesPage.innerHTML +=`
            <li class="each-movie">
              <a  href="/movies/${movie.id}" class="movie-anchor">
                <img src="${movie.poster}" class="movie-image"/>
                <div class="content">
                  <h3 class="movie-title">${movie.title}</h3>
                  <p class="movie-rating">Ratings: ${movie.rating}</p>
                </div>
              </a>
            </li>
          `
        })
    })
    .catch((error)=>{
        console.log(error)
    })
});

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
    });
  } else if (selectedOption === "release-year") {
    genreFilter.style.display = "none";
    yearFilter.style.display = "block";
    selectYear.addEventListener("change", () => {
      const selectedYear = selectYear.value;
    });
  } else {
    genreFilter.style.display = "none";
    yearFilter.style.display = "none";
  }
});

const loginBtn = document.getElementById("login")

if (loginBtn){
  loginBtn.addEventListener('click',()=>{
    console.log("login")
    window.location.href = "/login"
  })
}
const logoutBtn = document.getElementById("logout")


if (logoutBtn){
  const addMovie = document.getElementById("addMovie")

addMovie.addEventListener('click',()=>{
  window.location.href = "/addmovie"
})

  logoutBtn.addEventListener('click',()=>{
    console.log("logout")
    fetch('/home', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => {
        if (response.ok) {
          window.location.href='/home'
        } else {
          console.error('Error deleting the resource');
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
  })
}