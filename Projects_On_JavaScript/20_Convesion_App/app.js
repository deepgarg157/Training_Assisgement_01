const usd_dollar = document.querySelector("#usd-dollar");
const INR = document.querySelector("#INR");
const button = document.querySelector("#convert-btn");

var convert_value = 0;

function USD_Dollar(e) {
    console.log("usd")
    let usd_value = usd_dollar.value
    convert_value = usd_value * 83.3525
    console.log(convert_value)
}

function INR_Value() {
    console.log("INR")
    INR.value = convert_value
}

function handleClick() {

    button.addEventListener("click", () => {
        console.log("button click")
        USD_Dollar();
        INR_Value()
    })
}

handleClick()