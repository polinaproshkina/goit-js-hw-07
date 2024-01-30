'use strict'
const list = document.getElementsByTagName('h2');
console.log(`Number of categories: ${list.length}`)
let listArray = [];
const listTwo = document.getElementsByClassName('item')
    for (let i = 0; i < list.length; i++) {
        listArray.push(list[i].textContent) 
        console.log(`Category: ${list[i].textContent}`)
        let elem = listTwo[i].lastElementChild.childElementCount;
        console.log(`Elements: ${elem}`)
    }













