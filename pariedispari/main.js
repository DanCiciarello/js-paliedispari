/* 
Richiesta:
L’utente sceglie pari o dispari.
L’utente inserisce un numero da 1 a 5.
Generiamo poi un numero random (sempre da 1 a 5) per il computer
(usando una funzione).
Sommiamo i due numeri (quello inserito dall’utente e
quello random del computer).
Stabiliamo se la somma dei due numeri è pari o dispari
(usando una funzione).
Dichiariamo chi ha vinto.
Se l’utente aveva scelto pari e la somma è pari, ha vinto l’utente,
altrimenti il computer.
*/

/* ------------------------------------------------------------ */

// Dichiaro la funzione per generare un numero random
function randomNum () {
    // Genero un numero casuale tra 1 e 5
    let randomNum = Math.floor(Math.random() * 5) + 1;
    // Ritorno il numero generato
    return randomNum;
}

// Dichiaro la funzione per decidere se un numero è pari o dispari
function isEven (num) {
    // Controllo se l'input non è un numero
    if (isNaN(num)) {
        return undefined;
    }
    // Se è valido proseguo
    else {
        // Controllo se è pari
        if (num % 2 == 0) {
            return true;
        }
        // Altrimenti è dispari
        else {
            return false;
        }
    }
};

/* ------------------------------------------------------------ */

// Recupero gli elementi dal dom
let userEvenElement = document.querySelector("#userEven");
let userInputElement = document.querySelector("#userInput");
let confirmBtnElement = document.querySelector("#confirmBtn");
let challengeResultElement = document.querySelector("#challengeResult");

// Aggiungo un event listener per il tasto Conferma
confirmBtnElement.addEventListener("click", function(){

    // Resetto la sezione del risultato
    challengeResultElement.innerHTML = "";

    // Dichiaro/resetto le variabili necessarie
    let numSum = 0;
    let numSumEven;
    let userEven;
    let statusOk = true;

    // Recupero la scelta pari o dispari dell'utente
    let userEvenCheck = userEvenElement.value;

    // Recupero il numero inserito dall'utente
    let userInput = parseInt(userInputElement.value);

    // Controllo che sia stato scelto pari o dispari
    if (userEvenCheck === "pari" || userEvenCheck === "Pari") {
        userEven = true;
    } else if (userEvenCheck === "dispari" || userEvenCheck === "Dispari") {
        userEven = false;
    } else {
        alert("Inserisci una scelta valida tra pari o dispari!");
        statusOk = false;
    }

    // Controllo che sia stato inserito un numero valido
    if (isNaN(userInput) || userInput == "") {
        alert("Inserisci un numero valido!");
        statusOk = false;
    } else if (userInput > 5 || userInput < 0) {
        alert("Inserisci un numero compreso tra 1 e 5!");
        statusOk = false;
    }

    // Se è tutto corretto procedo
    if (statusOk) {

        // Genero un numero casuale del computer
        let computerInput = randomNum();

        // Sommo il numero dell'utente e del computer
        numSum = userInput + computerInput;

        // Stabilisco se la somma dei due numeri è pari
        numSumEven = isEven(numSum);

        // Controllo se ha vinto l'utente
        if (userEven === numSumEven) {
            challengeResultElement.innerHTML = `<p>Il computer ha giocato il numero ${computerInput}, quindi la somma dei due numeri è ${numSum}.</p><h3>Complimenti, hai vinto!</h3>`;
        } else {
            challengeResultElement.innerHTML = `<p>Il computer ha giocato il numero ${computerInput}, quindi la somma dei due numeri è ${numSum}.</p><h3>Mi dispiace, ha vinto il computer...</h3>`;
        }

    }

});