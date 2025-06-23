const hamburguer = document.getElementById("hamburguer");
const links = document.querySelector(".menu-links");
const header = document.querySelector("header");

window.addEventListener("scroll", function() {
    if(window.scrollY > 150) {
        header.classList.add("scrolled");
    }
    else {
        header.classList.remove("scrolled");
    }
});

links.addEventListener("click", toggleLinks);
hamburguer.addEventListener("click", toggleLinks);
function toggleLinks() {
    hamburguer.classList.toggle("active");
    links.classList.toggle("active");
    if(hamburguer.classList.contains("active")) {
        document.body.style.overflow = "hidden";
    }
    else {
        document.body.style.overflow = "visible";
    }
}