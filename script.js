const calculatorDisplay = document.querySelector("#display");
const numBtn = document.getElementsByClassName("num-btn");
const clearBtn = document.getElementById("clear");
const addBtn = document.getElementById("add-btn");
const equalBtn = document.getElementById("equal");

let num1 = "";
let num2 = "";
let operator = "";
let displayNum = 0;
calculatorDisplay.textContent = displayNum;


clear.addEventListener("click", function() {
    let displayNum = 0;
    calculatorDisplay.textContent = displayNum;
})

addBtn.addEventListener("click", function() {
    operator = add;
    if (!num1) {
        num1 = calculatorDisplay.textContent;
        displayNum = 0;
        calculatorDisplay.textContent = displayNum;
    } else if (!num2) {
        num2 = calculatorDisplay.textContent;
        displayNum = 0;
        calculatorDisplay.textContent = displayNum;
    }
    console.log(num1, num2);
})

equalBtn.addEventListener("click", function() {

})

function add (num1, num2) {
    return num1 + num2;
}

function subtract (num1, num2) {
    return num1 - num2;
}

function multiply (num1, num2) {
    return num1 * num2;
}

function divide (num1, num2) {
    return num1 / num2;
}

function operate (operator, num1, num2) {
    return operator (num1, num2);
}

for (let i = 0; i < numBtn.length; i++) {
    numBtn[i].addEventListener("click", function() {
        displayNum = numBtn[i].value;
        calculatorDisplay.textContent += displayNum;
    });
}

console.log(operator);