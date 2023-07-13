const submitMovie = document.getElementById("submitMovie");

submitMovie.addEventListener("click", (e) => {
  e.preventDefault();

  const title = document.getElementById("title").value;
  const poster = document.getElementById("poster").value;
  const genre = document.getElementById("genre").value;
  const releaseDate = document.getElementById("releaseDate").value;
  const director = document.getElementById("director").value;
  const producer = document.getElementById("producer").value;
  const duration = document.getElementById("duration").value;
  const description = document.getElementById("description").value;
  const castCrew = document.getElementById("castCrew").value;

  fetch("/addmovie", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title,
      poster,
      genre,
      director,
      duration,
      description,
      releaseDate,
      producer,
      castCrew
    }),
  })
    .then((response) => {
      console.log("Movie was successfully saved");
    })
    .catch((error) => {
      console.log(error);
    });
});
