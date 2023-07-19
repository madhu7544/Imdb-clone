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