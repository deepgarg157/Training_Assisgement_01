let SCORE=0;
let ComputerScore=0;

const handOptions={
    'rock':'./assets/Rock.png',
    'paper':'./assets/Paper.png',
    'scissors':'./assets/Scissors.png'
}

const pickUserHand = (hand) => {
    console.log(hand);

    // hide the current page
    let hands = document.querySelector('.hands')
    hands.style.display = 'none'
    // show the next page with the hand you picked

    let contest = document.querySelector('.contest')

    contest.style.display = 'flex'

    // set the user pick
    
        document.getElementById('userPickImage').src = handOptions[hand]

        pickComputerHand(hand)
    
}

const pickComputerHand=(hand)=>{

    const hands=['rock', 'paper', 'scissors'];
    const computerhand=hands[Math.floor(Math.random()*3)]

    // set the computer pick
    
    document.getElementById('computerPickImage').src = handOptions[computerhand]

    referee(hand, computerhand)
    
}

// conditions
const referee=(userhand, computerhand)=>{
  if(userhand=='rock' && computerhand=='scissors'){
    decision('YOU WIN AGAINST PC')
    setScore(SCORE + 1)
    document.querySelector(".newGame").innerHTML='PLAY AGAIN'
  }
  else if(userhand=='paper' && computerhand=='rock'){
    decision('YOU WIN AGAINST PC')
    setScore(SCORE + 1)
    document.querySelector(".newGame").innerHTML='PLAY AGAIN'
  }
  else if(userhand=='scissors' && computerhand=='paper'){
    decision('YOU WIN AGAINST PC')
    setScore(SCORE + 1)
    document.querySelector(".newGame").innerHTML='PLAY AGAIN'
  }
  else if(userhand=='rock' && computerhand=='paper'){
    decision('YOU LOST AGAINST PC')
    computerScore(ComputerScore + 1)
    document.querySelector(".newGame").innerHTML='PLAY AGAIN'
  }
  else if(userhand=='paper' && computerhand=='scissors'){
    decision('YOU LOST AGAINST PC')
    computerScore(ComputerScore + 1)
    document.querySelector(".newGame").innerHTML='PLAY AGAIN'
  }
  else if(userhand=='scissors' && computerhand=='rock'){
    decision('YOU LOST AGAINST PC')
    computerScore(ComputerScore + 1)
    document.querySelector(".newGame").innerHTML='PLAY AGAIN'
  }
  else if(userhand=='rock' && computerhand=='rock'){
    decision('TIE UP')
    document.querySelector(".newGame").innerHTML='REPLAY'
  }
  else if(userhand=='paper' && computerhand=='paper'){
    decision('TIE UP')
    document.querySelector(".newGame").innerHTML='REPLAY'
  }
  else if(userhand=='scissors' && computerhand=='scissors'){
    decision('TIE UP')
    document.querySelector(".newGame").innerHTML='REPLAY'
  }
}

const decision=(decision)=>{
document.querySelector('.decision h1').innerHTML=decision;
}

const setScore = (newScore) => {
    SCORE = newScore;
    document.querySelector(".your-score h1").innerText = newScore;
  }

  const computerScore = (newScore) => {
    ComputerScore = newScore;
    document.querySelector(".computer-score h1").innerText = newScore;
  } 

  const restartGame = () => {
    let contest = document.querySelector(".contest");
    contest.style.display = "none";
  
    let hands = document.querySelector(".hands");
    hands.style.display = "flex";
  }
