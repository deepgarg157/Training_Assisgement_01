const clock=document.querySelector('#clock')

setInterval(function (){
const now=new Date()
console.log(now);
clock.innerHTML=now.toLocaleString()
},1000)

