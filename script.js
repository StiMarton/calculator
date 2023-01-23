const calculatorDisplay1 = document.querySelector("#display1");
const calculatorDisplay2 = document.querySelector("#display2");
const outputDisplay = document.querySelector("#output");
const numBtn = document.getElementsByClassName("num-btn");
const clearBtn = document.getElementById("clear");
const addBtn = document.getElementById("add-btn");
const equalBtn = document.getElementById("equal");

let calculation = {
    num1: 0,
    num2: 0,
    operator: "",
    output: "",
};

calculatorDisplay1.textContent = calculation.num1;
calculatorDisplay2.textContent = calculation.num2;

clear.addEventListener("click", function() {
    calculation.num1 = 0;
    calculation.num2 = 0;
    calculation.operator = "";
    calculatorDisplay1.textContent = calculation.num1;
    calculatorDisplay2.textContent = calculation.num2;
    document.getElementById("operator").hidden = true;
    document.getElementById("display2").hidden = true;
    document.getElementById("output").hidden = true;
})

addBtn.addEventListener("click", function() {
    document.getElementById("operator").hidden = false;
    document.getElementById("display2").hidden = false;
    calculation.operator = "add";
    if (!calculation.num1) {
        calculation.num1 = calculatorDisplay1.textContent;
    } else if (!calculation.num2) {
        calculation.num2 = calculatorDisplay2.textContent;
    }
})

equalBtn.addEventListener("click", function() {
    document.getElementById("output").hidden = false;
    console.log(calculation.num1, calculation.num2);
    if (calculation.operator == "add") {
        add(calculation.num1, calculation.num2)
    }
})

function add (num1, num2) {
    num1 = Number(calculation.num1);
    num2 = Number(calculation.num2);
    calculation.output = num1 + num2;
    outputDisplay.textContent = calculation.output;
    console.log(num1, num2);
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
    if (calculation.operator == "add") {
        num2 = numBtn[i].value;
        calculatorDisplay2.textContent += num2;
        calculation.num2 = calculatorDisplay2.textContent ;
    } else {
        num1 = numBtn[i].value;
        calculatorDisplay1.textContent += num1;
        calculation.num1 = calculatorDisplay1.textContent;
    }
    });
}

