// Todo: Make M+ M- and MC functional
let string = "";
let buttons = document.querySelectorAll('.btn');
let inputs = document.querySelector('input')
Array.from(buttons).forEach((button) => {
  button.addEventListener('click', (e) => {
    if (e.target.innerHTML == '=') {
      string = eval(string);
      inputs.value = string;
    }
    else if (e.target.innerHTML == 'AC') {
      string = ''
      inputs.value = string;
    }
    else if (e.target.innerHTML == 'DEL') {
      string = string.substring(0, string.length - 1)
      inputs.value = string
    }
    else {
      console.log(e.target)
      string = string + e.target.innerHTML;
      inputs.value = string;
    }
  })
})