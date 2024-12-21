function checSignUpkValidation(username, email, password, confirmPassword,error) {
  console.log("Validating user!!");

  let success = false;
  if (!username) {
    error.innerHTML = "*User Name is required";
  } else if (!email) {
    error.innerHTML = "*Email is required.";
  } else if (!password) {
    error.innerHTML = "*Password is required.";
  } else if (!confirmPassword) {
    error.innerHTML = "*Confirm Password is required.";
  } else if (confirmPassword != password) {
    error.innerHTML = "*Password and Confirm password is not same.";
  } else {
    success = true;
  }
  return success;
}

function signUpUser(event) {
  event.preventDefault();

  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const confirmPassword = document
    .getElementById("confirm-password")
    .value.trim();
  const error = document.getElementById("error");

  let success = checSignUpkValidation(
    username,
    email,
    password,
    confirmPassword,
    error
  );

  if (!success) {
    return false;
  }
  let users = JSON.parse(localStorage.getItem("users")) || [];
  if (users.find((u) => u.email == email)) {
    error.innerHTML = "*Email is already in use. Please try another.";
    return false;
  }
  let newUser = {
    userName: username,
    email: email,
    password: password,
  };
  users.push(newUser);
  localStorage.setItem("users", JSON.stringify(users));
  window.location.href = "login.html";
}
