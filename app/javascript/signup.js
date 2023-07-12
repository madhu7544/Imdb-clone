let signUpData = document.getElementById("signUpForm");
let errorName = document.getElementById("errorName");
let errorEmail = document.getElementById("errorEmail");
let errorPassword = document.getElementById("errorPassword");
let errorRePassword = document.getElementById("errorRePassword");

signUpData.addEventListener("submit", function (event) {
  event.preventDefault();
  const name = document.getElementsByName("name")[0].value.trim();
  const email = document.getElementsByName("email")[0].value.trim();
  const password = document.getElementsByName("password")[0].value.trim();
  const rePassword = document.getElementsByName("re-password")[0].value.trim();

  if (name === "") {
    errorName.textContent = "Name is required";
  } else if (!name.match(/^[a-zA-Z\s]+$/)) {
    errorName.textContent = "Enter a valid name";
  } else {
    errorName.textContent = "";
  }

  if (email === "") {
    errorEmail.textContent = "Email is required.";
  } else if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
    errorEmail.textContent = "Enter Valid Email Address";
  } else {
    errorEmail.textContent = "";
  }

  if (password === "") {
    errorPassword.textContent = "Password is required.";
  } else if (!password.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)) {
    errorPassword.textContent =
      "Password must contain at least 8 characters, including one letter and one number.";
  } else {
    errorPassword.textContent = "";
  }

  if (rePassword === "") {
    errorRePassword.textContent = "Please re-enter your password.";
  } else if (password !== rePassword) {
    errorRePassword.textContent = "Passwords do not match.";
  } else {
    errorRePassword.textContent = "";
  }

  if (
    name !== "" &&
    name.match(/^[a-zA-Z\s]+$/) &&
    email !== "" &&
    email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) &&
    password !== "" &&
    password.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/) &&
    rePassword !== "" &&
    rePassword === password
  ) {
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    })
      .then((response) => {
        let snackbar = document.getElementById("snackbar");
        snackbar.innerHTML = "Successfully Signup";
        snackbar.classList.add("show");
        setTimeout(function () {
          snackbar.classList.remove("show");
          window.location.href = "/login";
          document.cookie = `token=false; expires=Thu, 1 Dec 2024 12:00:00 UTC;`;
        }, 3000);
      })
      .catch((error) => {
        console.log(error);
        // Handle network errors
        // Display error messages to the user
      });
  }
});

// let snackbar = document.getElementById("snackbar");
//     snackbar.innerHTML = "Successfully Signup";
//     snackbar.classList.add("show");
//     setTimeout(function () {
//       snackbar.classList.remove("show");
//       window.location.href = "/login.html";
//     }, 3000);

// document.cookie = `name= ${name}; expires=Thu, 1 Dec 2024 12:00:00 UTC;`;
// document.cookie = `email=${email}; expires=Thu, 1 Dec 2024 12:00:00 UTC;`;
// document.cookie = `password=${password}; expires=Thu, 1 Dec 2024 12:00:00 UTC;`;
