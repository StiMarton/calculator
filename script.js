const calculatorDisplay = document.querySelector("#display");
const numBtn = document.querySelectorAll("num-btn");

let displayNum = 0;

calculatorDisplay.textContent = displayNum;




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