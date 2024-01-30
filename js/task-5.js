'use strict'
const btn = document.querySelector("button");
const body = document.querySelector("body");
let color = document.querySelector(".color");


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
  
}

btn.addEventListener('click', event => {
  let randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor;
  color.innerHTML = randomColor;

  console.log(randomColor);
})
  


