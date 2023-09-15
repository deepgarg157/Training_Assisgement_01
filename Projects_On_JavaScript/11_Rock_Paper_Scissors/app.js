const userScore_span = document.getElementById('user-score')
const computerScore_span = document.getElementById('computer-score')
const result_div = document.querySelector('.result > p')
const rock_div = document.getElementById('r')
const paper_div = document.getElementById('p')
const scissors_div = document.getElementById('s')
const reset = document.getElementById('reset')
const rules= document.getElementById('rule')
const cross=document.querySelector('.cross')

let score;
if(localStorage.getItem("score")){
    score=JSON.parse(localStorage.getItem("score"))
    console.log(score)
    userScore_span.innerHTML=score.userScore
    computerScore_span.innerHTML=score.computerScore
}else{
    score={
        userScore:0,
        computerScore:0
    }
}

function win(userChoice, computerChoice) {
    score.userScore++;
    localStorage.setItem("score",JSON.stringify(score))
    userScore_span.innerHTML=score.userScore
    computerScore_span.innerHTML=score.computerScore
    // result_div.innerHTML=`User ${userChoice} beats computer ${computerChoice} the WIN!!`
}

function lose(userChoice, computerChoice) {
    score.computerScore++;
    localStorage.setItem("score",JSON.stringify(score))
    userScore_span.innerHTML=score.userScore
    computerScore_span.innerHTML=score.computerScore
    // result_div.innerHTML=`User ${userChoice} Lose computer ${computerChoice} the LOSE!!`
}

function draw(userChoice, computerChoice) {
    // result_div.innerHTML=`User ${userChoice} Draw computer ${computerChoice} the DRAW!!`
}
function getComputerChoice() {
    const choice = ['r', 'p', 's']
    const randomNumber = Math.floor(Math.random() * 3)
    return choice[randomNumber]
}

function game(userChoice) {
    const computerChoice = getComputerChoice()
    console.log(userChoice);
    console.log(computerChoice);
    switch (userChoice + computerChoice) {
        case 'rs':
        case 'pr':
        case 'sp':
            win(userChoice, computerChoice)
            break;
        case 'rp':
        case 'sr':
        case 'pr':
        case 'ps':
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

    rules.addEventListener('click', function(){
        document.querySelector('.rules-container').style.display=null
    })

    cross.addEventListener('click', function(){
        document.querySelector('.rules-container').style.display='none'
    })

    reset.addEventListener('click',()=>{
        score.userScore=0
        score.computerScore=0
        localStorage.setItem("score",JSON.stringify(score))
        userScore_span.innerHTML=score.userScore
        computerScore_span.innerHTML=score.computerScore
    })
}

main()