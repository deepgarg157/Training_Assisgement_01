let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById('user-score')
const computerScore_span = document.getElementById('computer-score')
const result_div = document.querySelector('.result > p')
const rock_div = document.getElementById('r')
const paper_div = document.getElementById('p')
const scissors_div = document.getElementById('s')

function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML=userScore
    computerScore_span.innerHTML=computerScore
    result_div.innerHTML=`User ${userChoice} beats computer ${computerChoice} the WIN!!`
}

function lose(userChoice, computerChoice) {
    computerScore++;
    userScore_span.innerHTML=userScore
    computerScore_span.innerHTML=computerScore
    result_div.innerHTML=`User ${userChoice} Lose computer ${computerChoice} the LOSE!!`
}

function draw(userChoice, computerChoice) {
    result_div.innerHTML=`User ${userChoice} Draw computer ${computerChoice} the DRAW!!`
}
function getComputerChoice() {
    const choice = ['r', 'p', 's']
    const randomNumber = Math.floor(Math.random() * 3)
    return choice[randomNumber]
}

function game(userChoice) {
    const computerChoice = getComputerChoice()
    switch (userChoice + computerChoice) {
        case 'rs':
        case 'pr':
        case 'sp':
            win(userChoice, computerChoice)
            break;
        case 'rp':
        case 'sr':
        case 'pr':
            lose(userChoice, computerChoice)
            break;
        case 'rr':
        case 'pp':
        case 'ss':
            draw(userChoice, computerChoice)
            break;
    }
}

function main() {
    rock_div.addEventListener('click', function () {
        game('r')
    })

    paper_div.addEventListener('click', function () {
        game('p')
    })

    scissors_div.addEventListener('click', function () {
        game('s')
    })
}

main()