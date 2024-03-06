// Selecting elements using querySelector
const searchBtn = document.querySelector("#search-btn");
const searchBar = document.querySelector(".search-bar-container");
const discover = document.querySelector(".home .content a");
const loginBtn = document.querySelector(".icons #login-btn");
const closeLoginBar = document.querySelector(".login-form-container i");
const loginBar = document.querySelector(".login-form-container");
const signupBtn = document.querySelector(".login-form-container form p #SignUp");
const closeSignupBar = document.querySelector(".login-form-container1 i");
const signup = document.querySelector(".login-form-container1");
const vidBtn = document.querySelectorAll(".img-btn");

// Adding click event listener to redirect on discover button click
discover.addEventListener("click", () => {
    window.location.href = "../packages.html";
});

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

// Adding mouseover event listener to change background image on hover
vidBtn.forEach(btn => {
    btn.addEventListener("mouseover", () => {
        document.querySelector('.controls .active').classList.remove("active");
        btn.classList.add("active");
        let src = btn.getAttribute("data-src");
        document.querySelector("#home").style.background = "url(" + src + ") " + "no-repeat";
        document.querySelector("#home").style.backgroundSize = "cover";
    });
});
