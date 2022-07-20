// Creo un arrey contenente le foto da stampare nello slideshow
const imageList = ["img/01.jpg", "img/02.jpg", "img/03.jpg", "img/04.jpg", "img/05.jpg"];

// Seleziono il container dove voglio aggiungere l'elemento
const imgContainerDom = document.querySelector('.img-container');
const thumbsContainerDom = document.querySelector('.thumbs-container');

// Imposto un ciclo per scorrere tra le imgs
for (let i = 0; i < imageList.length; i++) {

    // Dentro img-container vado a inserire il div contenente le img da stampare e al posto di src metto il nome che ho dato all array così è dinamico
    imgContainerDom.innerHTML +=    `<div class="images"><img class="image" src="${imageList[i]}"></div>`;

    thumbsContainerDom.innerHTML += `<div class="thumb"><img src="${imageList[i]}"></div>`;
}   

// Imposto una variabile in cui dichiaro che l'img che sarà visibile(active) sarà in posizione 0
let active = 0;

// Richiamo tutti gli elementi in img-container che hanno la classe "images"
let imagesList = document.getElementsByClassName('images');

// Aggiungo all'elemento in posizione 0 contenuto in img-container la classe "show" che lo renderà visibile
imagesList[active].classList.add('show');

const thumbList = document.querySelectorAll('.thumb');
thumbList[active].classList.add('active');

const btnUp = document.querySelector('.up');
const btnDown = document.querySelector('.down');

// Aggiungo un event listener al pulsante 'up' in modo tale da poterci associare un'azione
btnUp.addEventListener('click',
    function () {
        // Vado all'elemento in posizione 0 e rimuovo la classe "show"
        imagesList[active].classList.remove('show');
        thumbList[active].classList.remove('active');

        // Incremento il valore (la posizione) di active (quindi dell'img che dovrà essere visibile)
        active++;

        // Aggiungo nuovamente la classe "show" all'elemento incrementato di 1
        imagesList[active].classList.add('show');

        //Nel momento in cui avanziamo con le slide il pulsante per andare indietro deve ricomparire
        btnDown.classList.remove('hidden');

        //Se arriviamo all ultima slide il pulsante per andare avanti deve scomparire
        if (active == imagesList.length - 1) {
            btnUp.classList.add('hidden');
        }
    }
);

// Faccio lo stesso procedimento per il pulsante 'down'


btnDown.addEventListener('click',
    function () {
        imagesList[active].classList.remove('show');
        active--;
        imagesList[active].classList.add('show');

        //Quando torno indietro dall ultima slide il pulsante UP deve ricomparire
        btnUp.classList.remove('hidden');

        //Quando siamo tornati alla prima slide il pulsante DOWN deve scomparire di nuovo
        if (active == 0) {
            btnDown.classList.add('hidden');
        }
    }
);