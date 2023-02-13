const calculatorDisplay1 = document.querySelector("#display1");
const calculatorDisplay2 = document.querySelector("#display2");
const operatorDisplay = document.querySelector("#operator");
const outputDisplay = document.querySelector("#output");

const numBtn = document.getElementsByClassName("num-btn");
const clearBtn = document.getElementById("clear");
const addBtn = document.getElementById("add-btn");
const subtractBtn = document.getElementById("subtract-btn");
const multiplyBtn = document.getElementById("multiply-btn");
const divideBtn = document.getElementById("divide-btn");
const equalBtn = document.getElementById("equal");


let calculation = {
    operator: "",
    output: "",
    num: [],
};

let currentNum = 0;

// Calculator only works with two numbers, currently
calculatorDisplay1.textContent = currentNum;
calculatorDisplay2.textContent = calculation.num;

// This loop makes the numbers functional
// FIX: Each operator button pressed should save current num, and then start a new num
for (let i = 0; i < numBtn.length; i++) {
    numBtn[i].addEventListener("click", function() {
    if (calculation.operator == "add" || calculation.operator == "subtract"
    || calculation.operator == "multiply" || calculation.operator == "divide") {
        num = numBtn[i].value;
            calculatorDisplay2.textContent += num;
            currentNum = calculatorDisplay2.textContent;
    } else if (calculation.num = [""] ) {
        for (var num in calculation)
            num = numBtn[i].value;
            calculatorDisplay1.textContent += num;
            currentNum = calculatorDisplay1.textContent;
        } 
    })
};

addBtn.addEventListener("click", function() {
    calculation.operator = "add";
    operatorDisplay.textContent = "+";
    document.getElementById("operator").hidden = false;
    operate(add, calculation.num);
    console.log(calculation.operator);
})

subtractBtn.addEventListener("click", function() {
    calculation.operator = "subtract";
    operatorDisplay.textContent = "-";
    document.getElementById("operator").hidden = false;
    operate(subtract, calculation.num);
    console.log(calculation.operator);
})

multiplyBtn.addEventListener("click", function() {
    calculation.operator = "multiply";
    operatorDisplay.textContent = "x";
    document.getElementById("operator").hidden = false;
    operate(multiply, calculation.num);
    console.log(calculation.operator);
})

divideBtn.addEventListener("click", function() {
    calculation.operator = "divide";
    operatorDisplay.textContent = "÷";
    document.getElementById("operator").hidden = false;
    operate(divide, calculation.num);
    console.log(calculation.operator);
})

equalBtn.addEventListener("click", function() {
    document.getElementById("output").hidden = false;
    console.log(calculation.num);
    if (calculation.operator == "add") {
        add(currentNum, calculation.num)
    } else if (calculation.operator == "subtract") {
        subtract(currentNum, calculation.num)
    } else if (calculation.operator == "multiply") {
        multiply(currentNum, calculation.num)
    } else if (calculation.operator == "divide") {
        divide(currentNum, calculation.num)
    }
})

clear.addEventListener("click", function() {
    calculation.num = 0;
    currentNum = 0;
    calculation.operator = "";
    calculatorDisplay1.textContent = currentNum;
    calculatorDisplay2.textContent = calculation.num[1];
    document.getElementById("operator").hidden = true;
    document.getElementById("display2").hidden = true;
    document.getElementById("output").hidden = true;
})

function operate (operator, num1, num2) {
    document.getElementById("display2").hidden = false;
    calculation['num'].push(currentNum);
    currentNum = 0;
    calculatorDisplay2.textContent = currentNum;
    return operator (num1, num2);
}


// CALCULATION FUNCTIONS

function add (num1, num2) {
    num1 = Number(currentNum);
    num2 = Number(calculation.num[1]);
    calculation.output = num1 + num2;
    outputDisplay.textContent = calculation.output;
    console.log(num1, num2);
}

function subtract (num1, num2) {
    num1 = Number(currentNum);
    num2 = Number(calculation.num[1]);
    calculation.output = num1 - num2;
    outputDisplay.textContent = calculation.output;
    console.log(num1, num2);
}

function multiply (num1, num2) {
    num1 = Number(currentNum);
    num2 = Number(calculation.num[1]);
    calculation.output = num1 * num2;
    outputDisplay.textContent = calculation.output;
    console.log(num1, num2);
}

function divide (num1, num2) {
    num1 = Number(currentNum);
    num2 = Number(calculation.num[1]);
    calculation.output = num1 / num2;
    outputDisplay.textContent = calculation.output;
    console.log(num1, num2);
}
