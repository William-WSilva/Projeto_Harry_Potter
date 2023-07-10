// ======= Variaveis ======= //

const linksMenu = document.querySelectorAll(".header__Menu__links__item__link");
const togglesMenu = document.querySelectorAll(".header__Menu__links__item__toggle");
const carouselItens  = document.querySelectorAll(".carousel-item");
const dropsMenu = document.querySelector(".header__Menu__drops");
const dropLinks = document.querySelector(".header__Menu__links");
let posicaoScrollAtual = 0

// ======= Eventos ======= //

// ======= Destacar menu ativo ======= //
for (let i = 0; i < linksMenu.length; i++) {
    linksMenu[i].addEventListener("click", function(link){
        
        desativarLinks();
        AtivarLink(link);
    });
}

// ======= Ativar menu Toggle ======= //
dropsMenu.addEventListener("click", function(){
    if (dropLinks.style.display === "none") {
        dropLinks.style.display = "block";
      } else {
        dropLinks.style.display = "none";
    }
})

// ======= Validar Email ======= //
$(".footer__contato__email_newsletter").validate({
    rules:{
        email:{required: true, email: true}},
        messages:{nome: "Por favor, insira seu nome"},
        submitHandler:function(form) {
            form.submit();
        },
        invalidHandler:function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();

            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`);
            }
        }    
})


// ======= Funções ======= //

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