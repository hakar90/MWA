// Selecting elements using querySelector
const searchBtn = document.querySelector("#search-btn");
const searchBar = document.querySelector(".search-bar-container");
const loginBtn = document.querySelector(".icons #login-btn");
const closeLoginBar = document.querySelector(".login-form-container i");
const loginBar = document.querySelector(".login-form-container");
const signupBtn = document.querySelector(".login-form-container form p #SignUp");
const closeSignupBar = document.querySelector(".login-form-container1 i");
const signup = document.querySelector(".login-form-container1");
const book = document.querySelector("#book-btn");

// Adding scroll event listener to hide search bar on scroll
window.onscroll = () => {
    searchBtn.classList.remove("fa-times");
    searchBar.classList.remove("active");
};

// Adding click event listener to toggle search bar
searchBtn.addEventListener('click', () => {
    searchBtn.classList.toggle("fa-times");
    searchBar.classList.toggle("active");
});

// Adding click event listener to show login form
loginBtn.addEventListener('click', () => {
    loginBar.style = ('top:0');
    
    // Adding click event listener to close login form
    closeLoginBar.addEventListener('click', () => {
        loginBar.style = ('top:120%');
    });
});

// Adding click event listener to show signup form and hide login form
signupBtn.addEventListener("click", () => {
    loginBar.style = ('top:-120%');
    signup.style = ('top:0');
    
    // Adding click event listener to close signup form
    closeSignupBar.addEventListener('click', () => {
        signup.style = ('top:120%');
    });
});

// Adding click event listener to validate and redirect on book button click
book.addEventListener("click", () => {
    const from = document.getElementById("where-from");
    const to = document.getElementById("where-to");
    const num = document.getElementById("number");
    
    // Function to validate input fields
    function validateInput(input) {
        return input.value.trim() !== "";
    }

    // Checking if all required fields are filled
    if (validateInput(from) && validateInput(to) && validateInput(num)) {
        // Redirecting to home.html
        window.location.href = "../home.html";
        alert("Your flight was booked");
    } else {
        alert("Please fill in all required fields");
    }
});
