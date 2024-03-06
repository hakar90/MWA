// Selecting elements using querySelector
const searchBtn = document.querySelector("#search-btn");
const searchBar = document.querySelector(".search-bar-container");
const loginBtn = document.querySelector(".icons #login-btn");
const closeLoginBar = document.querySelector(".login-form-container i");
const loginBar = document.querySelector(".login-form-container");
const signupBtn = document.querySelector(".login-form-container form p #SignUp");
const closeSignupBar = document.querySelector(".login-form-container1 i");
const signup = document.querySelector(".login-form-container1");
const btn = document.querySelector("#feed .wrapper button");

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

// Adding click event listener to validate feedback form and redirect
btn.addEventListener("click", () => {
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const feedbackInput = document.getElementById("feedback");

    if (validateInput(nameInput) && validateInput(emailInput) && validateInput(feedbackInput)) {
        window.location.href = "../home.html";
        alert("Your feedback was received");
    } else {
        alert("Please fill in all required fields");
    }
});

// Function to validate input by checking if it's not empty
function validateInput(input) {
    return input.value.trim() !== "";
}
