const gameboard = document.getElementById("gameboard");
const player = document.getElementById("player")
const infoDisplay = document.getElementById("info-display");
const width = 8
let changePlayerText = 'black'
player.textContent=changePlayerText

const startPieces = [
    rook, knight, bishop, queen, king, bishop, knight, rook,
    pawn, pawn, pawn, pawn, pawn, pawn, pawn, pawn,
    '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '',
    pawn, pawn, pawn, pawn, pawn, pawn, pawn, pawn,
    rook, knight, bishop, queen, king, bishop, knight, rook,
]

function createBoard(){
     startPieces.forEach((startPiece, i)=>{
        const square = document.createElement("div")
        square.classList.add('square')
        square.setAttribute('square-id', i)
        square.innerHTML=startPiece;
        square.firstChild?.setAttribute('draggable', true)
        const row = Math.floor((63-i)/8) + 1
        if(row % 2 === 0){
            square.classList.add(i%2===0 ? 'beige' : 'brown')
        }else{
            square.classList.add(i%2===0 ? 'brown' : 'beige')
        }

        if(i<=15){
            square.firstChild.firstChild.classList.add('black')
        }

        if(i>=48){
            square.firstChild.firstChild.classList.add('white')
        }
        gameboard.append(square)
     })
}

createBoard();



const allSquares = document.querySelectorAll("#gameboard .square")

allSquares.forEach(square =>{
    square.addEventListener('dragstart', dragStart)
    square.addEventListener('dragover', dragOver)
    square.addEventListener('drop', drop)
})

let startPositionID;
let draggedElement;

function dragStart(e){
   startPositionID = e.target.parentNode.getAttribute("square-id")
   draggedElement = e.target
   
}

function dragOver(e){
     e.preventDefault()
}

function drop(e){
    e.stopPropagation()
    e.target.append(draggedElement)

    const correctGo = draggedElement.firstChild.classList.contains(changePlayerText)

    const taken = e.target.classList.contains(".piece")

    const valid = checkIfValid(e.target)

    const opponentGo = changePlayerText === 'white' ? 'black' : 'white'

    const takenByOpponentGo = e.target.firstChild?.classList.contains(opponentGo)

    if(correctGo){
        if(takenByOpponentGo && valid){
            e.target.parentNode.append(draggedElement)
            e.target.remove()
            changePlayer()
            return
        }
        if(taken && !takenByOpponentGo){
            infoDisplay.textContent = "you cannot go here";
            setTimeout(()=> infoDisplay.textContent = '' , 2000)
            return
        }
        if(valid){
            e.target.append(draggedElement)
            changePlayer()
            return
        }
    }
}

function checkIfValid(target){
    const targetId = target.getAttribute('square-id') || target.getAttribute()
    const startId = Number(startPositionID)
    const piece = draggedElement.id
}

function changePlayer(){
    if(changePlayerText === 'black'){
        reverseIds()
        changePlayerText = 'white'
        player.textContent= 'white'
    }
    else{
        revertIds()
        changePlayerText = 'black'
        player.textContent='black'
    }
}

function reverseIds(){
    const allSquare = document.querySelectorAll('.square')
    allSquare.forEach((square, i)=>
    square.setAttribute('square-id' , (width*width-1)-i)
    )
}

function revertIds(){
    const allSquare = document.querySelectorAll('.square')
    allSquare.forEach((square, i)=>
    square.setAttribute('square-id' ,i)
    )
}
