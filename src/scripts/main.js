const linksMenu = document.querySelectorAll(".header__Menu__links__item__link");
const togglesMenu = document.querySelectorAll(".header__Menu__links__item__toggle");
const carouselItens  = document.querySelectorAll(".carousel-item");


for (let i = 0; i < linksMenu.length; i++) {
    linksMenu[i].addEventListener("click", function(link){
        
        desativarLinks();
        AtivarLink(link);
    });
}


function AtivarLink(link){
    const linkAtivo = link.target.parentNode.querySelector(".header__Menu__links__item__link");
    const ToggleAtivo = link.target.parentNode.querySelector(".header__Menu__links__item__toggle");

    linkAtivo.classList.add("header__Menu__links__item__link--is-active");
    ToggleAtivo.classList.add("header__Menu__links__item__toggle--is-active");
}

function desativarLinks(){
    for (let i = 0; i < linksMenu.length; i++) {
        linksMenu[i].classList.remove("header__Menu__links__item__link--is-active");
        togglesMenu[i].classList.remove("header__Menu__links__item__toggle--is-active");
    }
}


    
    setInterval(function() {
        console.log("Olá mundo")
      }, 10000); // Executa a cada 1 segundo (1000 milissegundos)
    








$(document).ready(function() {
    $("#carousel_imagens").slick({autoplay: true});
})