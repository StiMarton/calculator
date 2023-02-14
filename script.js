const calculatorDisplay = document.querySelector("#display");
const operatorDisplay = document.querySelector("#operator");
const outputDisplay = document.querySelector("#output");

const numBtn = document.getElementsByClassName("num-btn");
const opBtn = document.getElementsByClassName("op-btn");
const clearBtn = document.getElementById("clear");
const equalBtn = document.getElementById("equal");
/*const addBtn = document.getElementById("add-btn");
const subtractBtn = document.getElementById("subtract-btn");
const multiplyBtn = document.getElementById("multiply-btn");
const divideBtn = document.getElementById("divide-btn");*/

let calculation = {
    operator: [],
    output: "",
    num: [],
};

let value = 0;

calculatorDisplay.textContent = value;

// This loop makes the numbers functional
// FIX: Each operator button pressed should save current num, and then start a new num
for (let i = 0; i < numBtn.length; i++) {
    numBtn[i].addEventListener("click", function() {
    if (calculation.num = [""] ) {
        for (var num in calculation)
            num = numBtn[i].value;
            calculatorDisplay.textContent += num;
            value = calculatorDisplay.textContent;
    }
    })
};

for (let i = 0; i < opBtn.length; i++) {
    opBtn[i].addEventListener("click", function() {
    if (calculation.operator = [""] ) {
        for (var operator in calculation)
            operator = opBtn[i].value;
            calculatorDisplay.textContent += operator;
            value = calculatorDisplay.textContent;
            console.log("operator");
        }
    })
};

/*
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
*/
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
    value = 0;
    calculation.operator = "";
    calculatorDisplay.textContent = value;
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
