const submitActor = document.getElementById("submitActor");
const errorMsg = document.getElementById("errorMsg");

let id = 0
let dropdown = document.getElementById("movieIdDropdown");
    dropdown.addEventListener("change", function() {
      let selectedOption = dropdown.options[dropdown.selectedIndex];
      let movieId = parseInt(selectedOption.value);
      id = movieId
      console.log("Selected Movie ID: " + movieId);
});
console.log(id)


submitActor.addEventListener("click", (e) => {
  e.preventDefault();

  const name = document.getElementById("actorName").value;
  const photo = document.getElementById("actorImage").value;
  const description = document.getElementById("actorBio").value;
  
  const movies_id = id;

  const csrfToken = document
    .querySelector("meta[name='csrf-token']")
    .getAttribute("content");
  fetch("/addactor", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-CSRF-Token": csrfToken,
    },
    body: JSON.stringify({
      name: name,
      photo: photo,
      description: description,
      movie_id: movies_id,
    }),
  })
    .then((response) => {
      if (response.ok) {
        console.log("Actor was successfully saved");
        window.location.replace('/home')
      } else {
        return response.json();
      }
    })
    .then((data) => {
      if (data && data.errors) {
        errorMsg.textContent = data.errors.join(", ");
      } else {
        // errorMsg.textContent = "An error occurred.";
      }
    })
    .catch((error) => {
      console.log(error);
    });
});
