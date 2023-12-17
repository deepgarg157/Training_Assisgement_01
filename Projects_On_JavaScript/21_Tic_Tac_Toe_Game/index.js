const boxes = document.querySelectorAll(".boxes")
const winnerPlay = document.querySelector('.winner')
const resetButton = document.querySelector('.reset-btn')

let select0 = true

const winnerPath = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 4, 6],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8]
]

boxes.forEach((box) => {
    box.addEventListener('click', (e) => {
        if (select0) {
            box.innerHTML = '0'
            select0 = false
        }
        else {
            box.innerHTML = 'X'
            select0 = true
        }
        box.disabled = true
        winnerPlayer()
    })
})

const disablePlayTrue = () => {
    for (let box of boxes) {
        box.disabled = true
    }
}

const disablePlayFalse = () => {
    for (let box of boxes) {
        box.disabled = false
        box.innerHTML = ''
    }
}

const resetGame = () => {
    select0 = true
    disablePlayFalse()
    winnerPlay.style.display = 'none'
}

const showWinner = (winner) => {
    const winnerPlayer = `winner is ${winner}`
    winnerPlay.innerHTML = winnerPlayer
    winnerPlay.style.display = 'block'
    disablePlayTrue()
}

const lose = () => {
    winnerPlay.innerHTML = 'No one is winner'
}

const winnerPlayer = () => {
    for (let pattern of winnerPath) {
        const pos1Val = boxes[pattern[0]].innerText
        const pos2Val = boxes[pattern[1]].innerText
        const pos3Val = boxes[pattern[2]].innerText

        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                console.log('winner')
                showWinner(pos1Val)
            }
            else if (pos1Val !== pos2Val & pos2Val !== pos3Val) {
                lose()
            }
        }

    }
}

resetButton.addEventListener('click', resetGame)