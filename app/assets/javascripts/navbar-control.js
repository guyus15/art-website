document.addEventListener('DOMContentLoaded', () => {

    navbarBurger = document.querySelectorAll(".navbar-burger")[0];

    navbarBurger.addEventListener('click',() => {
        target = document.querySelector(".navbar-menu");

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        navbarBurger.classList.toggle('is-active');
        target.classList.toggle('is-active');
    } )
});