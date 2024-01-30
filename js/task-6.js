'use strict'


const mainBox = document.getElementById('boxes');
// console.log(mainBox);
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const input = document.querySelector("input");
const newDivs = document.querySelector("div");

createBtn.addEventListener('click', createBoxes)
destroyBtn.addEventListener('click', destroyBoxes)

function destroyBoxes() {
  mainBox.innerHTML = "";
  input.value = "";

}



function createBoxes(amount) {
   mainBox.innerHTML = "";
  amount = Number(input.value);
  let size = 30;
  if (amount <= 100 && amount > 1) {
  for (let i = 0; i <= amount; i++){
      const box = document.createElement('div');
      size += 10;
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
      // mainBox.insertAdjacentHTML("beforeBegin", mainBox);    
  }  
}
  input.value = "";
  console.log(mainBox);
}
 
  
  

  






 
// const box = document.createElement('div');
// mainBox.append(box);
 








