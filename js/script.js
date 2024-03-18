/*
// Metto in allerta il bottone
// Per 100 volte genero un quadrato
// Lo aggiungo nel DOM
// - Al click di ogni quadrato cambia il colore
// - Stampa in console il numero della cella
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