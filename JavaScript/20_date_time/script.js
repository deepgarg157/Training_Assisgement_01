const currentDate = new Date()
const months =  ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
const days = ['Monday', 'Tuesday', 'wednesday',' thrusday', 'friday', 'sathruday', 'sunday']

console.log(days[currentDate.getDay() -1])
console.log(months[currentDate.getMonth()])
console.log(currentDate.getDate())
console.log(currentDate.getFullYear())

const selectData = document.getElementById('date')
const addData = document.getElementById('add')

addData.addEventListener('click', function(){
    const select = selectData.value
    const date = new Date(select)
    if(select){
        const result = currentDate.getDate() - date.getDate()
        console.log('Days', result)
        selectData.value=''
    }
   else(
    alert('select the date')
   )
})