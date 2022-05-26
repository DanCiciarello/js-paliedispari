/* 
Richiesta:
Chiedere all’utente di inserire una parola.
Creare una funzione per capire se la parola inserita è palindroma.
*/

/* ------------------------------------------------------------ */

// Funzione per capire se una parola è palindroma
function isPalindrome (wordToCheck) {

    // Inserisco le lettere della parola in un array
    let wordArray = wordToCheck.split("");

    // Creo un array della parola al contrario
    let wordReverseArray = wordArray.reverse();

    // Unisco le lettere della parola al contrario
    let wordReverse = wordReverseArray.join("");

    // Controllo se le due parole sono uguali
    if (wordToCheck === wordReverse) {
        alert("La parola è palindroma!");
    }
    // Altrimenti informo l'utente che non è palindroma
    else {
        alert("La parola NON è palindroma!")
    };

}

// Recupero gli elementi del dom
let userInputElement = document.querySelector("#userInput");
let confirmBtnElement = document.querySelector("#confirmBtn");

// Aggiungo un event listener al tasto Conferma
confirmBtnElement.addEventListener("click",function(){

    // Recupero l'input dell'utente
    let userInput = userInputElement.value;

    // Invoco la funzione con la parola dell'utente
    isPalindrome(userInput);

});