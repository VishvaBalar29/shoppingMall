function checLoginkValidation(
  email,
  password,
  error
) {
  console.log("Validating user!!");

  let success = false;
  if (!email) {
    error.innerHTML = "*Email is required.";
  } else if (!password) {
    error.innerHTML = "*Password is required.";
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
  localStorage.setItem("currentUser", JSON.stringify(currentUser));
  window.location.href = "index.html";
}
