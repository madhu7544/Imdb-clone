let loginForm = document.getElementById("login-form");
let errorPassword = document.getElementById("error-password");
let errorEmail = document.getElementById("email-error");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let emailElement = document.getElementsByName("email")[0].value;
  let passwordElement = document.getElementsByName("password")[0].value;

  if (emailElement === "") {
    errorEmail.textContent = "Email is required";
  } else {
    errorEmail.textContent = "";
  }

  if (passwordElement === "") {
    errorPassword.textContent = "Password is required";
  } else {
    errorPassword.textContent = "";
  }
  if (emailElement !== "" && passwordElement !== "") {
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: emailElement, password: passwordElement }),
    })
      .then((response) => response)
      .then((data) => {
        if (data.status != 422) {
          let snackbar = document.getElementById("snackbar");
          snackbar.innerHTML = "Successfully Login";
          snackbar.classList.add("show");
          setTimeout(function () {
            snackbar.classList.remove("show");
            window.location.href = "/home";
          }, 3000);
        } else {
          errorPassword.textContent = "Invalid username or password";
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
});
