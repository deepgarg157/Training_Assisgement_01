const randomNumber = (parseInt(Math.random() * 100 + 1))

const submitGuess = document.querySelector('#subt')
const inputUser = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

let previousGuess = []

let newGuess = 1;

let playGame = true;

if (playGame) {
    submitGuess.addEventListener('click', function(e){
        e.preventDefault
        const guess=parseInt(inputUser.value)
        console.log(guess);
        validateGuess(guess)
    })
}

function validateGuess(guess) {
    // 
}

function checkGuess(guess) {
    // 
}

function displayguess(guess) {
    // 
}

function displayMessage(message) {
    // 
}

function endGame() {
    // 
}

function startGame() {
    // 
}

