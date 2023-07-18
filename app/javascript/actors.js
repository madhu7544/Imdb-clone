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
const loginBtn = document.getElementById("login");

if (loginBtn) {
  loginBtn.addEventListener("click", () => {
    window.location.href = "/login";
  });
}
const logoutBtn = document.getElementById("logout");

if (logoutBtn) {
  logoutBtn.addEventListener("click", () => {
    const url = window.location.href;
    const id = url.split("/").pop();
    console.log(id);
    fetch(`/actors/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          window.location.href = `/actors/${id}`;
        } else {
          console.error("Error deleting the resource");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  });
}

