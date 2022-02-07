let numbArray = [];
let numberToShow = 5;

//Funzione che crea 5 numeri random e li pusha in un array
let random = randomNumbers(numberToShow);
console.log(random);

function randomNumbers (showNumb) { 

    for (let i = 1; i <= showNumb; i++) {

        const randomNumb = Math.floor(Math.random() * 99) + 1;
        numbArray.push(randomNumb);

    }

    return numbArray;
}

//accedo all'elemento del DOM con l'id numbero-box
let accessBox = document.getElementById('number-box');

//mostro l'array di numeri random nell'elemento span
accessBox.innerHTML = `<span>${random}</span>`;


/*
Funzione che dopo 30 secondi mi chiede di inserire un numero tante volte quanto è lungo l'array dei numeri randomici
poi confronta questi numeri con quelli random 
e mostra eventualmente quelli che sono inclusi nell'array dei numeri randomici
*/
setTimeout(function () {

    accessBox.innerHTML = '';
    numbCorrect = [];

    /* chiedo di inserire 5 numeri*/
    for (let i = 0; i < numbArray.length; i++) { 

          let alertValue = parseInt(prompt('Inserisci uno dei numeri che hai visto'));

          if (random.includes(alertValue)) {

              //se il numero inserito è contenuto nell'array dei numeri random lo pusho in un array
              numbCorrect.push(alertValue);
            
          }
    }
    
    //se l'array contiene almeno un numero indovinato
    if (!numbCorrect.length == 0) {
          
          accessBox.innerHTML = `<h1>I numeri indovinati sono ${numbCorrect.length}: </h1>
                                  <span>${numbCorrect}</span>`;
    } else {

          //se non ho indovinato nessun numero viene mostrato questo messaggio
          accessBox.innerHTML = `<h1>Peccato non hai indovinato nessun numero!</h1>`;

    }

    return accessBox;

}

,30000);