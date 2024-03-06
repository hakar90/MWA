// Selecting elements using querySelector
const searchBtn = document.querySelector("#search-btn");
const searchBar = document.querySelector(".search-bar-container");
const loginBtn = document.querySelector(".icons #login-btn");
const closeLoginBar = document.querySelector(".login-form-container i");
const loginBar = document.querySelector(".login-form-container");
const signupBtn = document.querySelector(".login-form-container form p #SignUp");
const closeSignupBar = document.querySelector(".login-form-container1 i");
const signup = document.querySelector(".login-form-container1");
const btn = document.querySelector("#slides button");
const packages = document.querySelectorAll(".packages .package");

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

// Adding click event listener to redirect to packages section
btn.addEventListener("click", () => {
    window.location.href = "#packages";
});

// Adding mouseover and mouseout event listeners to packages for opacity change
packages.forEach((pack) => {
    const packName = pack.querySelector("span");

    pack.addEventListener("mouseover", () => {
        packName.style.opacity = 1;
    });

    pack.addEventListener("mouseout", () => {
        packName.style.opacity = 0;
    });
});

// Adding click event listener to redirect to book.html on package click
packages.forEach((pack) => {
    pack.addEventListener("click", () => {
        window.location.href = "../book.html";
    });
});

//I tried to make the page switch to book and add the name of the city in the "where-to" but it did not work