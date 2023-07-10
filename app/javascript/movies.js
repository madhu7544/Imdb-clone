let data = [
    {
      id: 1,
      image:
        "https://res.cloudinary.com/dsiyffj0o/image/upload/v1688532310/spiderman_ygqmht.jpg",
      title: "Spider Man",
      ratings: 8.2,
      year: "2018",
      genre: ["Family", "Action"],
      director: "Sam Raimi",
    },
    {
      id: 2,
      image:
        "https://res.cloudinary.com/dsiyffj0o/image/upload/v1688532646/avengers_ony9cd.jpg",
      title: "Avengers",
      ratings: 8.5,
      year: "2012",
      genre: ["Drama", "Thriller"],
      director:"Joe Russo",
    },
    {
      id: 3,
      image:
        "https://res.cloudinary.com/dsiyffj0o/image/upload/v1688532750/godfather_biyyrk.jpg",
      title: "The Godfather",
      ratings: 7,
      year: "1972",
      genre: ["Drama", "Crime"],
      director:"Francis Ford cuppala",
    },
    {
      id: 4,
      image:
        "https://res.cloudinary.com/dsiyffj0o/image/upload/v1688532809/avatar_cgfuct.avif",
      title: "Avatar",
      ratings: 9,
      year: "2018",
      genre: ["Sci-fi", "Action"],
      director:"James Cameron",
    },
    {
      id: 5,
      image:
        "https://res.cloudinary.com/dsiyffj0o/image/upload/v1688532417/spider_2_er9ffi.jpg",
      title: "Spider Man-2",
      ratings: 7.7,
      year: "2016",
      genre: ["Sci-fi", "Action"],
      director: "Sam Raimi",
    },
    {
      id: 6,
      image:
        "https://res.cloudinary.com/dsiyffj0o/image/upload/v1670756880/snow-removal-machine-working-high-ski-slope-snowstorm_454047-2149_1_xfrlul.png",
      title: "Ghost Rider",
      ratings: 8,
      year: "2013",
      genre: ["Thriller", "Action"],
      director:"Mark Naveldion",
    },
    {
      id: 7,
      image:"https://images-na.ssl-images-amazon.com/images/M/MV5BNDc1MGUyNzItNWRkOC00MjM1LWJjNjMtZTZlYWIxMGRmYzVlXkEyXkFqcGdeQXVyMzU3MDEyNjk@._V1_SX1777_CR0,0,1777,999_AL_.jpg",
      title:"Game of Thrones",
      ratings:7.1,
      year: "2011",
      genre: ["Adventure, Drama, Fantasy"],
      director:"Mark Mylod",
    }
  ];
  
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
console.log(token);

if (token === "false") {
  loginLogout.innerText = "Login";
} else {
  loginLogout.innerText = "Logout";
}
loginLogout.addEventListener("click", () => {
  if (token === "false") {
    loginLogout.innerText = "Login";
    window.location.href = "/login.html";
  } else {
    loginLogout.innerText = "Logout";
    window.location.href = "/movies.html";
    document.cookie = "token=false; expires=Thu, 1 Jan 2024 00:00:00 UTC";
  }
});