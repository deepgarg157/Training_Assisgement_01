const increase = document.querySelector('.increment')
const decrease = document.querySelector('.decrement')
const value = document.querySelector('.value')

value.innerHTML = 0
let count = 0;
increase.addEventListener('click', function () {

    count = count + 1
    value.innerHTML = count

    if (count >= 10) {
        return count = 0
    }

})

decrease.addEventListener('click', function () {
    count = count - 1
    value.innerHTML = count
})
