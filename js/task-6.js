'use strict'


const mainBox = document.querySelector("#boxes");
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const input = document.querySelector("input");

createBtn.addEventListener('click', createBoxes)
destroyBtn.addEventListener('click', destroyBoxes)

function destroyBoxes() {
  mainBox.innerHTML = "";
  input.value = "";
}

function createBoxes(amount) {
   mainBox.innerHTML = "";
  amount = Number(input.value);
  if (amount <= 100 && amount >= 1) {
  for (let i = 0; i < amount; i++){
      const box = document.createElement('div');
      let size = 30+(i*10);
      box.style.width = `${size}px`;
      box.style.height = `${size}px`;
      box.setAttribute("class", "newDiv");
      
      function getRandomHexColor() {
        return `#${Math.floor(Math.random() * 16777215)
          .toString(16)
          .padStart(6, 0)}`;
      }
      box.style.backgroundColor = getRandomHexColor();
      mainBox.append(box);
  }  
}
  input.value = "";
}
 
  
  

  






 
// const box = document.createElement('div');
// mainBox.append(box);
 








