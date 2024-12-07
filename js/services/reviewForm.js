document.getElementById('reviewForm').addEventListener('submit', function (event) {
    let isValid = true;

    // Validate Name
    const name = document.getElementById('name').value.trim();
    const nameError = document.getElementById('nameError');
    if (name === "") {
        nameError.textContent = "Name is required.";
        isValid = false;
    } else {
        nameError.textContent = "";
    }

    // Validate Email
    const email = document.getElementById('email').value.trim();
    const emailError = document.getElementById('emailError');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "" || !emailRegex.test(email)) {
        emailError.textContent = "Please enter a valid email.";
        isValid = false;
    } else {
        emailError.textContent = "";
    }

    if (!isValid) {
        event.preventDefault();
    }
});