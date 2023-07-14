let loginForm = document.getElementById("log-in-form");
let errorPassword = document.getElementById("error-password");
let errorEmail = document.getElementById("email-error");

// const data = document.cookie;

// const passwordEmail = (cookieValue) => {
//   const cookies = data.split("; ");
//   const cookie = cookies.find((each) => each.startsWith(`${cookieValue}=`));
//   if (cookie) {
//     const [name, value] = cookie.split("=");
//     return value;
//   }
// };

// const password = passwordEmail("password");
// const email = passwordEmail("email");

// loginForm.addEventListener("submit", (e) => {
//   e.preventDefault();
//   let emailElement = document.getElementsByName("email")[0].value;
//   let passwordElement = document.getElementsByName("password")[0].value;

//   if (emailElement === "") {
//     errorEmail.textContent = "Email is required";
//   } else {
//     errorEmail.textContent = "";
//   }

//   if (passwordElement === "") {
//     errorPassword.textContent = "Password is required";
//   } else {
//     errorPassword.textContent = "";
//   }
//   if (emailElement !== "" && passwordElement !== "") {
//     if (emailElement === email && passwordElement === password) {
//       let snackbar = document.getElementById("snackbar");
//       snackbar.innerHTML = "Successfully Login";
//       snackbar.classList.add("show");
//       setTimeout(function () {
//         snackbar.classList.remove("show");
//         window.location.href = "/home.html";
//         document.cookie = `token= true; expires=Thu, 18 Dec 2023 12:00:00 UTC;`;
//         s;
//       }, 3000);
//     } else {
//       errorPassword.textContent = "Email and password Mismatch";
//     }
//   }
// });

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
        headers: {
          "Content-Type": "application/json",
          "X-CSRF-Token": csrfToken,
        },
      },
      body: JSON.stringify({ email: emailElement, password: passwordElement }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          let snackbar = document.getElementById("snackbar");
          snackbar.innerHTML = "<%= flash[:notice] %>";
          snackbar.classList.add("show");
          setTimeout(function () {
            snackbar.classList.remove("show");
            window.location.href = "/home";
          }, 3000);
        } else {
          errorPassword.textContent = "<%= flash.now[:alert] %>";
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
});
