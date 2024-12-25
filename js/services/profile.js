let currentUser = JSON.parse(localStorage.getItem("currentUser"));
if (!currentUser) {
    alert("Please Log In...")
}
else{
    let username = document.getElementById('username');
    let email = document.getElementById('email');
    let cardname = document.getElementById('cardname');

    username.innerHTML = currentUser.userName;
    email.innerHTML = currentUser.email;
    cardname.valaue = currentUser.userName;
}

function logOut(event) {
    let currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (!currentUser) {
      alert("No user logged in!!");
      event.preventDefault();
    } else {
      localStorage.removeItem("currentUser");
      localStorage.removeItem("cart");
      localStorage.removeItem("order");
      window.location.href = "index.html";
      alert("User logged out!!");
    }
  }