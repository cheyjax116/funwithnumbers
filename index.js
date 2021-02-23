

document.querySelector("button").addEventListener("click", fetchNumbers)

async function fetchNumbers(){

const response = await fetch('https://cors-anywhere.herokuapp.com/http://numbersapi.com/random/trivia')
const data = await response.text();
document.querySelector(".par").innerHTML = data;
document.querySelector(".par").classList.add('box');
}




