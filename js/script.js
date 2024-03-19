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
const mainGrid = document.querySelector('#ms-grid');
const gameScreen = document.querySelector('#ms-result');
const resetButton = document.querySelector('#reset-btn');
const h1Screen = document.querySelector('#h1-screen');
const score = document.querySelector('#score');
/* EVENTS */
playButton.addEventListener('click', function () {
    const footer = document.querySelector('footer');
    const difficulty = changeDifficulty('easy', 'medium', 'hard', 100, 81, 3);
    const bombs = 1;
    const bombsArray = [];
    const maxScore = parseInt(difficulty) - bombs;
    let scoreCounter = 0;
    footer.classList.remove('d-none');
    footer.classList.add('d-flex');
    mainGrid.innerHTML = '';
    for (let i = 0; i < bombs; i++) {
        const randomNumber = getRandomUniqueNumber(1, difficulty, bombsArray);
        bombsArray.push(randomNumber);
    }
    console.log(bombsArray);
    for (let i = 1; i <= difficulty; i++) {
        const square = createSquare(i);
        mainGrid.append(square);
        square.addEventListener('click', function () {
            if (bombsArray.includes(i)) {
                this.classList.add('bg-danger');
                gameScreen.classList.remove('d-none');
                gameScreen.classList.add('d-flex');
                gameScreen.classList.add('ms-lose');
                h1Screen.innerHTML = 'Game Over';
            } else {
                this.classList.add('bg-primary');
                scoreCounter++;
                const scoreString = scoreCounter.toString().padStart(5, '0');
                score.innerHTML = `${scoreString}`;
                this.style.pointerEvents = 'none';
                if (scoreCounter === maxScore) {
                    gameScreen.classList.remove('d-none');
                    gameScreen.classList.add('d-flex');
                    gameScreen.classList.add('ms-win');
                    h1Screen.innerHTML = 'You Win';
                }
            }
        });
    }
});
resetButton.addEventListener("click", function () {
    location.reload();
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
function getRandomUniqueNumber(min, max, array) {
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