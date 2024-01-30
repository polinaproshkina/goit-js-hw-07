'use strict'
const textInput = document.getElementById("name-input");
const textOutput = document.getElementById("name-output");

function eventF(event) {
 textOutput.textContent = event.currentTarget.value.trim();
    if (event.currentTarget.value.trim() === "") {
        textOutput.textContent = "Anonymous";
    }
}

textInput.addEventListener("input", eventF);





