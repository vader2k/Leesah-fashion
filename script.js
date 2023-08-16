const primaryNav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");
const icons = document.querySelector(".nav-icon-holder");

navToggle.addEventListener("click", ()=> {
    const visibility = primaryNav.getAttribute("data-visible");
    console.log("clicked")

    if(visibility === "false"){
        primaryNav.setAttribute("data-visible", true);
        navToggle.setAttribute("aria-expanded", true);
    } else if (visibility === "true") {
        primaryNav.setAttribute("data-visible", false);
        navToggle.setAttribute("aria-expanded", false);
    }
});