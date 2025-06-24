const hamburguer = document.getElementById("hamburguer");
const links = document.querySelector(".menu-links");
const header = document.querySelector("header");
const banner = document.querySelector(".inicio");

window.addEventListener("scroll", () => { //Função para mudar estilo do header ao scrollar a página
    if(window.scrollY > 150) {
        header.classList.add("scrolled");
    }
    else {
        header.classList.remove("scrolled");
    }
});

links.addEventListener("click", toggleLinks);
hamburguer.addEventListener("click", toggleLinks);
function toggleLinks() { //Função para abrir barra lateral em versão mobile
    hamburguer.classList.toggle("active");
    links.classList.toggle("active");
    if(hamburguer.classList.contains("active") && window.matchMedia("(max-width: 900px)").matches) {
        document.body.style.overflow = "hidden";
    }
    else {
        document.body.style.overflow = "visible";
    }
}

window.addEventListener("load", () => { //Diversas fotos de fundo
    const currentBanner = Math.floor(Math.random() * 3) + 1;
    banner.style.backgroundImage = `var(--gradient), url(./src/assets/banner${currentBanner}.jpg)`;
});