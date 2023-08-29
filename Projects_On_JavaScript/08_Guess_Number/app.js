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
    if(isNaN(guess)){
       alert('PLease enter the valid number')
    }else if(guess < 1){
        alert('enter the number more than 1')
    }else if(guess > 100){
        alert('enter the number less than 100')
    }else{
        previousGuess.push(guess)
        if(newGuess === 11){
            displayguess(guess)
            displayMessage('game over. random number was ' `${randomNumber}`)
            endGame()
        }else{
            displayguess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess) {
    if(guess===randomNumber){
        displayMessage('you guess the right number')
    }else if(guess < randomNumber){
        displayMessage('the number is TOOO low')
    }else if(guess > randomNumber){
        displayMessage('the number is TOOO high')
    }
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

