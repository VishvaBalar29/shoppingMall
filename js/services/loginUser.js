function checLoginkValidation(
  email,
  password,
  error
) {
  console.log("Validating user!!");
  const emailErr = document.getElementById("emailErr");
  const pswdErr = document.getElementById("pswdErr");
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  emailErr.innerHTML = "";
  pswdErr.innerHTML = "";

  let success = false;
  if (!email) {
    emailErr.innerHTML = "*Email is required.";
  } else if (!regex.test(email)) {
    emailErr.innerHTML = "*Invalid email address. Please enter a valid email.";
  } else if (!password) {
    pswdErr.innerHTML = "*Password is required.";
  } else {
    success = true;
  }
  return success;
}

function loginUser(event) {
  event.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const error = document.getElementById("error");
  let success = checLoginkValidation(email, password, error);

  if (!success) {
    return false;
  }
  let users = JSON.parse(localStorage.getItem("users")) || [];
  let currentUser = users.find((u) => u.email == email);
  if (!currentUser) {
    error.innerHTML = "*Invalid email.";
    return false;
  }
  if (currentUser.password != password) {
    error.innerHTML = "*Invalid credential.";
    return false;
  }

  let loggedIn = JSON.parse(localStorage.getItem("currentUser"));
  if (loggedIn) {
    error.innerHTML = "Another User is already logged in. Please log out first.";
  }
  else {
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
    window.location.href = "index.html";
  }


}
