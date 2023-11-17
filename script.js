import { themeToggle } from "./themeToggle.js";

const button = document.querySelector("button");

button.addEventListener("click", themeToggle);

//html element for the nav bar to function correctly
const navBar = document.querySelector(".navBar");
const hamburger = document.querySelector(".burgerMenu");

let navOpen = false;

//toggles navbar and changes styling
function toggleNav() {
    if (navOpen === false) {
        navBar.classList = "showNav";
        hamburger.classList = "burgerMenu";
        navOpen = true;
    }
    else {
        navBar.classList = "navBar";
        
        navOpen = false;
    }
}