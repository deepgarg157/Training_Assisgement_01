let date=document.querySelector('button')
let dateTime=new Date()
console.log(dateTime);

let para=document.getElementById('demo')




function showdate(){
    date.addEventListener('click', function(){
        para.innerHTML=dateTime
    })
}



setInterval(showdate(),1000)