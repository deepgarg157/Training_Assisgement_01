const increase = document.querySelector('.increment')
const decrease = document.querySelector('.decrement')
const value = document.querySelector('.value')


let count = 0;
increase.addEventListener('click', function () {
    count = count + 1
    value.innerHTML = count
})

decrease.addEventListener('click', function () {
    count = count -1
    value.innerHTML = count
})
