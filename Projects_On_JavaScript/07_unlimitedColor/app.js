const randomColor = function () {
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
};

let intervalID

let startClick = function () {

    if (!intervalID){
        intervalID = setInterval(setIntervalId, 1000)
    }
    

    function setIntervalId() {
        document.body.style.backgroundColor = randomColor()
    }

}

let stopClick = function () {
    clearInterval(intervalID)
    clearInterval=null
}

document.querySelector('#start').addEventListener('click', startClick)

document.querySelector('#stop').addEventListener('click', stopClick)    