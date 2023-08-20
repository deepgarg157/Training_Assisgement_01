const colorChange=()=>{
    const randomNumber=Math.floor(Math.random()*16777215)
    const randomCode='#' + randomNumber.toString(16)
    document.body.style.background=randomCode
    document.getElementById('color-code').innerText=randomCode

}

document.getElementById('btn').addEventListener('click', colorChange)

colorChange()