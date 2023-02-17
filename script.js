const calculatorDisplay = document.querySelector("#display");
const calculatorDisplay2 = document.querySelector("#display2");
const operatorDisplay = document.querySelector("#operator");
const outputDisplay = document.querySelector("#output");

const numBtn = document.getElementsByClassName("num-btn");
const operators = document.querySelectorAll(".op-btn");
const clearBtn = document.getElementById("clear");
const equalBtn = document.getElementById("equal");

let operator;
let result;
let calculation = {
    num1: "",
    num2: "",
};

let value;

calculatorDisplay.textContent = value;
calculatorDisplay2.textContent = value;

clear.addEventListener("click", function() {
    calculation.num1 = "";
    calculation.num2 = "";
    operator = "";
    value = "";
    calculatorDisplay.textContent = value;
    calculatorDisplay2.textContent = value;
    operatorDisplay.textContent = operator;
    document.getElementById("operator").hidden = true;
    document.getElementById("display2").hidden = true;
})

for (let i = 0; i < numBtn.length; i++) {
    numBtn[i].addEventListener("click", function() {
        if (!calculation.num1) {
        for (var num in calculation)
            num = numBtn[i].value;
            calculatorDisplay.textContent += num;
            value = calculatorDisplay.textContent;
        } else {
            for (var num in calculation)
                num = numBtn[i].value;
                calculatorDisplay2.textContent += num;
                value = calculatorDisplay2.textContent;
        }
    })
};

operators.forEach(o => {
    o.addEventListener("click", function() {
        document.getElementById("operator").hidden = false;
        document.getElementById("display2").hidden = false;
        operatorDisplay.textContent = o.textContent;
        operator = operatorDisplay.textContent;
        if (operator) {
            if (calculation.num1 && calculation.num2) {
                calculation.num1 = operate(operator, calculation.num1, calculation.num2);
                calculation.num2 = "";
            }
        } 
        if (!calculation.num1) {
            calculation.num1 = value;
        } else {
            calculation.num2 = value;
          
        }
        console.log(calculation);
        console.log(operator);
        return operator;
    })
})



equalBtn.addEventListener("click", function() {
    calculation.num2 = value;
    if (calculation.num1 && calculation.num2 && operator) {
        document.getElementById("operator").hidden = true;
        document.getElementById("display2").hidden = true;
        result = operate(operator, calculation.num1, calculation.num2)
        calculation.num1 = result;
        calculatorDisplay.textContent = result;
        calculation.num2 = 0;
        calculatorDisplay2.textContent = "";
        console.log("Equal 1 works");
    } else if (calculation.num1 && operator) {
        result = operate(operator, calculation.num1, calculation.num2)
        calculation.num1 = result;
        calculatorDisplay.textContent = result;
        console.log("Equal 2 works");
    }
    console.log("The value of number two is " + calculation.num2);
    console.log("The operator is " + operator);
})

function operate(operator, num1, num2) {
    switch (operator) {
        case '+':
            operator = "";
            return add (num1, num2);
        case '-':
            operator = "";
            return subtract (num1, num2);
        case 'x':
            operator = "";
            return multiply (num1, num2);
        case '÷':
            operator = "";
            return divide (num1, num2);
    }
}

// CALCULATION FUNCTIONS

function add(num1, num2) {
    return Number(num1) + Number(num2);
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    if (num2 == '0') {
        alert('ERROR! You broke the calculator by dividing 0!');
    } else {
    return num1 / num2;
    }
}
