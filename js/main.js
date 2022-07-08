// Creo un arrey contenente le foto da stampare nello slideshow
const imageList = ["img/01.jpg", "img/02.jpg", "img/03.jpg", "img/04.jpg", "img/05.jpg"];

// Seleziono il container dove voglio aggiungere l'elemento
const imgContainerDom = document.querySelector('.img-container');

// Imposto un ciclo per scorrere tra le imgs
for (let i = 0; i < imageList.length; i++) {
    // Dentro img-container vado a inserire il div contenente le img da stampare e al posto di src metto il nome che ho dato all array così è dinamico
    imgContainerDom.innerHTML += `<div class="images"> <img class="img" src="${imageList[i]}"> </div>`;

}

// Imposto una variabile in cui dichiaro che l'img che sarà visibile sarà in posizione 0
let imgShow = 0;

// Richiamo tutti gli elementi in img-container che hanno la classe "images"
let imgContainerElements = document.getElementsByClassName('images');

// Aggiungo all'elemento in posizione 0 contenuto in img-container la classe "show" che lo renderà visibile
imgContainerElements[imgShow].classList.add('show');