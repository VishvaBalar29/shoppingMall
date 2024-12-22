function checSignUpkValidation(username, email, password, confirmPassword) {
  console.log("Validating user!!");
  const usernameErr = document.getElementById("usernameErr");
  const emailErr = document.getElementById("emailErr");
  const pswdErr = document.getElementById("pswdErr");
  const cpswdErr = document.getElementById("cpswdErr");
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  usernameErr.innerHTML = "";
  emailErr.innerHTML = "";
  pswdErr.innerHTML = "";
  cpswdErr.innerHTML = "";

  let success = false;
      if (!username) {
        usernameErr.innerHTML = "*User Name is required";
      } else if (!email) {
        emailErr.innerHTML = "*Email is required.";
      } else if(!regex.test(email)){
        emailErr.innerHTML = "*Invalid email address. Please enter a valid email.";
      } else if (!password) {
        pswdErr.innerHTML = "*Password is required.";
      } else if (!confirmPassword) {
        cpswdErr.innerHTML = "*Confirm Password is required.";
      } else if (confirmPassword != password) {
        cpswdErr.innerHTML = "*Password and Confirm password is not same.";
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
        confirmPassword
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
