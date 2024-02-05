let menuicon = document.getElementById("menu-icon");
let navbar = document.getElementById("navbar-mobile");
let clodeicon = document.getElementById("close-icon");

menuicon.addEventListener("click", openmenu);
clodeicon.addEventListener("click", closemenu);

function openMenu() {
    console.log("menu is clicked");
    navbar.classList.add("active");
}
function closeMenu() {
    console.log("menu is clicked");
    navbar.classList.remove("active");
}