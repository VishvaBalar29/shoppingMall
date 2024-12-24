export function logOut(event) {
    let currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (!currentUser) {
      console.log("loggedIn");
      event.preventDefault();
    } else {
        console.log("Not loggedIn");
  }
}
