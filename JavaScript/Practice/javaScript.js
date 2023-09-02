let string = ""
let buttons = document.querySelectorAll('.btn')
let displayValue = document.getElementById('display')

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', function (e) {
        if (e.target.innerHTML == '=') {
            string = eval(string)
            displayValue.value = string
        }

        else if (e.target.innerHTML == 'RES') {
            string = ""
            displayValue.value = string
        } else if (e.target.innerHTML == 'DEL') {
            string = string.substring(0, string.length - 1)
            displayValue.value = string
        }
        else {
            string = string + e.target.innerHTML
            displayValue.value = string
            console.log(e.target);

        }
    })
})  