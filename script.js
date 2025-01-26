let menuVisible = false;

function mostrarOcultarMenu() {
    let nav = document.getElementById("nav");
    if (menuVisible) {
        nav.classList.remove("responsive");
        menuVisible = false;
    } else {
        nav.classList.add("responsive");
        menuVisible = true;
    }
}

function seleccionar() {
    let nav = document.getElementById("nav");
    nav.classList.remove("responsive");
    menuVisible = false;
}

function efectoHabilidades() {
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("htmlcss");
        habilidades[1].classList.add("javascript");
        habilidades[2].classList.add("php");
        habilidades[3].classList.add("mysql");
        habilidades[4].classList.add("python");
        habilidades[5].classList.add("c");
    }
}

window.onscroll = function(){
    efectoHabilidades();
}