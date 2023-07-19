const loginBtn = document.getElementById("login");

if (loginBtn) {
  loginBtn.addEventListener("click", () => {
    console.log("login");
    window.location.href = "/login";
  });
}
const logoutBtn = document.getElementById("logout");

if (logoutBtn) {
  const submitReview = document.getElementById("submitBtn");
  console.log(submitReview);
  
  submitReview.addEventListener("click", (e) => {
    e.preventDefault();
    let url = window.location.href;
    let id = parseInt(url.split("/").pop());
    const rating = document.getElementById("rating").value;
    const review = document.getElementById("review").value;
    console.log(rating)
  
    fetch(`/movies/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        rating,
        review,
        id
      }),
    })
      .then((response) => {
        console.log("Review was successfully saved");
        window.location.replace(`/movies/${id}`);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  logoutBtn.addEventListener("click", () => {
    console.log("logout");
    let url = window.location.href;
    let id = url.split("/").pop();
    console.log(id);

    fetch(`/movies/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          window.location.href = `/movies/${id}`;
        } else {
          console.error("Error deleting the resource");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  });
}
