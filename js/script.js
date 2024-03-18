/*
// Metto in allerta il bottone
// Creo una funzione che genera 16 numeri random non ripetuti che rappresentano le bombe
// Per 100 volte genero un quadrato
// Lo aggiungo nel DOM
// - Al click di ogni quadrato
// - Se la cella cliccata è una bomba la cella si colora di rosso
// - Altrimenti di blu
// - Creo un output in cui viene evidenziato il numero di celle non bombe selezionate
*/
/* VARIABLES */
const playButton = document.querySelector('#play-btn');
const mainContainer = document.querySelector('.ms-container');
const mainGrid = document.querySelector('#ms-grid');
const square = document.createElement('div');
/* EVENTS */
playButton.addEventListener('click', function () {
    const footer = document.querySelector('footer');
    const difficulty = changeDifficulty('easy', 'medium', 'hard', 100, 81, 49);
    footer.classList.remove('d-none');
    footer.classList.add('d-flex');
    mainContainer.classList.remove('d-none');
    mainGrid.innerHTML = '';
    for (let i = 1; i <= difficulty; i++) {
        const square = createSquare(i);
        mainGrid.append(square);
        square.addEventListener('click', function () {
            this.classList.add('bg-primary');
            setTimeout(function () {
                alert(`Hai selezionato il quadrato: ${i}`);
            }, 0);
        });
    }
});
/* FUNCTIONS */
// Funzione che genera un quadrato
// number: dato di tipo numerico
// return: elemento nel DOM rappresentante un quadrato
function createSquare(number) {
    const difficultySelect = document.querySelector('#difficulty').value;
    const square = document.createElement('div');
    const difficultyClass = changeDifficulty('easy', 'medium', 'hard', 'ms-square-easy', 'ms-square-medium', 'ms-square-hard');
    square.classList.add('ms-square');
    square.classList.add(difficultyClass);
    square.classList.add('d-flex');
    square.classList.add('justify-content-center');
    square.classList.add('align-items-center');
    square.innerHTML = `<span>${number}</span>`;
    return square;
}
// Funzione per cambiare livello di difficoltà
// value1, value2, value3: elemento di tipo stringa che rappresenta il value nel DOM
// numberOrString1, numberOrString2, numberOrString3: elemento di tipo numero o stringa che rappresenta il valore che viene modificato
// return: variabile che cambia la diffcoltà
function changeDifficulty(value1, value2, value3, numberOrString1, numberOrString2, numberOrString3) {
    let difficulty;
    const difficultySelect = document.querySelector('#difficulty').value;
    if (difficultySelect === value1) {
        difficulty = numberOrString1;
    } else if (difficultySelect === value2) {
        difficulty = numberOrString2;
    } else if (difficultySelect === value3) {
        difficulty = numberOrString3;
    }
    return difficulty;
}
// Funzione che genera numeri random
// Presa da w3schools
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// Funzione che valida i numeri random e le in serisce nell'array, partendo dal presupposto che il numero non è valido
// min: elemento di tipo numerico che identifica l'estremo inferiore della mio range
// max: elemento di tipo numerico che identifica l'estremo superiore della mio range
// array: array di numeri in cui andranno i numeri validati
// return: un elemento numero validato tra un range
function uniqueRandomNumber(min, max, array) {
    let numberValid = false;
    let rndNumber;
    while (!numberValid) {
        rndNumber = getRndInteger(min, max);
        if (!array.includes(rndNumber)) {
            numberValid = true;
        }
    }
    return rndNumber;
}
console.log(uniqueRandomNumber(1, 100, [3, 4]));