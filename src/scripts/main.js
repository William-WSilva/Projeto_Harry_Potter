// ======= Variaveis ======= //

const linksMenu = document.querySelectorAll(".header__Menu__links__item__link");
const togglesMenu = document.querySelectorAll(".header__Menu__links__item__toggle");
const carouselItens  = document.querySelectorAll(".carousel-item");
const dropsMenu = document.querySelector(".header__Menu__drops");
const dropLinks = document.querySelector(".header__Menu__links");
let posicaoScrollAtual = 0

// ======= Eventos ======= //

for (let i = 0; i < linksMenu.length; i++) {
    linksMenu[i].addEventListener("click", function(link){
        
        desativarLinks();
        AtivarLink(link);
        
    });
}

dropsMenu.addEventListener("click", function(){
    if (dropLinks.style.display === "none") {
        dropLinks.style.display = "block";
      } else {
        dropLinks.style.display = "none";
    }
})



// Captura a seção atual com base na posição na janela
document.addEventListener("DOMContentLoaded", function () {
    const secaoFilmes = document.querySelector(".Filmes__carousel").getBoundingClientRect();
    const livros = document.querySelector(".livros").getBoundingClientRect();
    const games = document.querySelector(".games").getBoundingClientRect();
    const autora = document.querySelector(".autora").getBoundingClientRect();
    const footer = document.querySelector(".footer").getBoundingClientRect();
    
    document.addEventListener("scroll", function(){
        posicaoScrollAtual = window.scrollY;
        console.log(`autora: ${autora.top} footer: ${footer.top} Atual: ${posicaoScrollAtual}`)


        // Verificar a posição atual do scroll
        const secoes = [
            { nome: "Filmes", top: secaoFilmes.top },
            { nome: "Livros", top: livros.top },
            { nome: "Games", top: games.top },
            { nome: "Autora", top: autora.top },
            { nome: "Footer", top: footer.top }
          ];
          
          for (const secao of secoes) {
            if (posicaoScrollAtual > secao.top) {
              console.log(`Dentro da seção ${secao.nome} ${secao.top} `);
            }
        }
    })
  });


  
  
  




// $(document).ready(function() {
//     $("#carousel_imagens").slick({autoplay: true});
// })

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