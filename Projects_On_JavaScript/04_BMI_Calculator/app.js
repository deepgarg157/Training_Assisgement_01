const form = document.querySelector('form')

form.addEventListener('submit', function (e) {
    e.preventDefault()

    const heights = parseInt(document.querySelector('#height').value)
    const weights = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('.results')

    if (heights === "" || heights < 0 || isNaN(heights)) {
        results.innerHTML = `Please give a valid height ${heights}`;
    }
    else if (weights === "" || weights < 0 || isNaN(weights)) {
        results.innerHTML = `Please give a valid height ${weights}`;
    }
    else {
        const bmi = (weights / ((heights * heights) / 10000)).toFixed(2);
        //show the result
        results.innerHTML = `<span>${bmi}</span>`;
    }
})