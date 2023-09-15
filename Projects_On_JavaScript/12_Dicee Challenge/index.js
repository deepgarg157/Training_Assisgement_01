var randomNumber1=Math.floor((Math.random()*6)+1)
var randomImage="dice" + randomNumber1 + ".png"
var imageSource= "images/" + randomImage

var image=document.querySelectorAll('img')[0]

image.setAttribute('src', imageSource)

var randomNumber2=Math.floor((Math.random()*6)+1)
var randomImage1="dice" + randomNumber2 + ".png"
var imageSource1= "images/" + randomImage1

var image1=document.querySelectorAll('img')[1]

image1.setAttribute('src', imageSource1)

if(randomNumber1 > randomNumber2){
  document.querySelector('h1').innerHTML='Player 1 WIN!'
}
else if(randomNumber2 > randomNumber1){
  document.querySelector('h1').innerHTML='Player 2 WIN!'
}
else{
  document.querySelector('h1').innerHTML='DIE'
}

