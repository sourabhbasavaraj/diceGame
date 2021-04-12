var randomNumber = Math.floor(Math.random() * 6) +  1; 

console.log(randomNumber)
var randomDice = "images/dice" + randomNumber + ".png";

var randomImg= document.querySelectorAll("img")[0];
randomImg.setAttribute("src", randomDice);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
console.log (randomNumber2)
var randomDice2 = "images/dice" + randomNumber2 + ".png";

var randomImg2 = document.querySelectorAll("img")[1];
randomImg2.setAttribute ("src", randomDice2)

if (randomNumber > randomNumber2)
{
    document.querySelector("h1").innerHTML = "Player 1 Wins!"
}
else if (randomNumber < randomNumber2)
{
    document.querySelector("h1").innerHTML = "Player 2 Wins!"
}
else 
{
    document.querySelector("h1").innerHTML = "It's a draw!"
}