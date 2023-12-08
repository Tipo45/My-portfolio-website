
 
const hamBurger = document.querySelector(".hamburger");
const navBar = document.querySelector(".navbar");

hamBurger.addEventListener("click", () => {
    hamBurger.classList.toggle("active");
    navBar.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamBurger.classList.remove("active");
    navBar.classList.remove("active");
}))

const sr = ScrollReveal ({
    distance: '25px',
    duration: 2500,
    reset: true
})

sr.reveal('.home',{delay:190, origin: 'bottom'})
sr.reveal('.about, .portfolio, .services, .contact',{delay:200, origin: 'bottom'})