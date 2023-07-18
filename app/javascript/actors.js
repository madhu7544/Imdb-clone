// const actorData = {
//   name: "Tobey Meguire",
//   bio: "Tobias Vincent Maguire is an American actor and film producer. Maguire played the title character in Sam Raimi's Spider-Man trilogy, and later reprised the role in Spider-Man: No Way Home.",
//   photo:
//     "https://res.cloudinary.com/dsiyffj0o/image/upload/v1688555512/Tobey_Maguire_2014_tkxv6u.jpg",
//   acted: [
//     "This Boy's Life",
//     "Spider-Man",
//     "Spider-Man 2",
//     "Spider-Man 3",
//     "Spider-Man: No Way Home",
//   ],
// };

// const populateProfile = (actorData) => {
//   document.getElementById("profile-name").textContent = actorData.name;
//   document.getElementById("profile-bio").textContent = actorData.bio;
//   document.getElementById("profile-photo").src = actorData.photo;

//   const actedMoviesList = document.getElementById("acted-movies-list");
//   actorData.acted.map((movie) => {
//     const listItem = document.createElement("li");
//     listItem.textContent = movie;
//     actedMoviesList.appendChild(listItem);
//   });
// };

// populateProfile(actorData);

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
    window.location.href = "/actors";
    document.cookie = "token=false; expires=Thu, 1 Jan 2024 00:00:00 UTC";
  }
});
