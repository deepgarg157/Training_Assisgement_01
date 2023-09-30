const input = document.getElementById('input')
const add = document.querySelector('.add')
let addList = document.querySelector('.addlist')

add.addEventListener('click', function (e) {
    if (input.value === "") {
        alert("Enter the title")
    } else {
        console.log('add clicked');
        let li = document.createElement('li')
        li.innerHTML = input.value;
        addList.appendChild(li)
        let span = document.createElement('span')
        span.innerHTML = "\u00d7"
        li.appendChild(span)
    }

    input.value = "";
    saveData();

})

addList.addEventListener('click', function (e) {
    if (e.target.tagName == "LI") {
        e.target.classList.toggle('checked')
        saveData();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
})

function saveData() {
    localStorage.setItem("data", addList.innerHTML)
}

function saveTask(){
    addList.innerHTML=localStorage.getItem("data")
}

saveTask();