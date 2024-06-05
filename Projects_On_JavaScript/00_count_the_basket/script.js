const firstBasketCount = document.querySelector('.firstBasketCount')
const secondBasketCount = document.querySelector('.secondBasketCount')
const leftArrowCount = document.querySelector('.leftArrowCount')
const rightArrowCount = document.querySelector('.rightArrowCount')

const totalCount = 10
let firstCount = totalCount
let secondCount = 0

firstBasketCount.innerHTML = firstCount
secondBasketCount.innerHTML = secondCount

rightArrowCount.addEventListener('click', () => {
    if (firstCount > 0) {
        firstCount--
        firstBasketCount.innerHTML = firstCount
        secondCount++
        secondBasketCount.innerHTML = secondCount
    }
})

leftArrowCount.addEventListener('click', () => {
    if (secondCount > 0) {
        firstCount++
        firstBasketCount.innerHTML = firstCount
        secondCount--
        secondBasketCount.innerHTML = secondCount
    }
})