function logOut(event) {
  let currentUser = JSON.parse(localStorage.getItem("currentUser"));
  if (!currentUser) {
    alert("No user logged in!!");
    event.preventDefault();
  } else {
    localStorage.removeItem("currentUser");
    window.location.href = "index.html";
    alert("User logged out!!");
  }
}
