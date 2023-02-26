const calculatorDisplay = document.querySelector("#display");
const calculatorDisplay2 = document.querySelector("#display2");
const operatorDisplay = document.querySelector("#operator");
const outputDisplay = document.querySelector("#output");

const numBtn = document.getElementsByClassName("num-btn");
const operators = document.querySelectorAll(".op-btn");
const clearBtn = document.getElementById("clear");
const equalBtn = document.getElementById("equal");
const dotBtn = document.getElementById("dot");

let equalsSelected; 
let operator;
let result;
let calculation = {
    num1: null,
    num2: null,
};

calculatorDisplay.textContent = calculation.num1;
calculatorDisplay2.textContent = calculation.num2;

clear.addEventListener("click", function() {
    calculation.num1 = null;
    calculation.num2 = null;
    operator = null;
    calculatorDisplay.textContent = calculation.num1;
    calculatorDisplay2.textContent = calculation.num2;
    operatorDisplay.textContent = operator;
    document.getElementById("operator").hidden = true;
    document.getElementById("display2").hidden = true;
    equalsSelected = false;
    enableDotBtn();
});

dotBtn.addEventListener("click", function() {
    if (result) {
        result = null;
    }
    if (!calculation.num1) {
        calculation.num1 = "0.";
    } else if (calculation.num1 && !operator && !calculation.num2) {
        calculation.num1 = calculation.num1.toString() + ".";
    } else if (operator && !calculation.num2) {
        calculation.num2 = "0.";
    } else if (calculation.num2) {
        calculation.num2 = calculation.num2.toString() + ".";
    }
    calculatorDisplay.textContent = calculation.num1;
    if (calculation.num2) {
    calculatorDisplay2.textContent = calculation.num2;
        }
    console.log(calculation.num1, operator, calculation.num2, result);
    disableDotBtn();
});

function disableDotBtn() {
    dotBtn.disabled = true;
}

function enableDotBtn() {
    dotBtn.disabled = false;
}

for (let i = 0; i < numBtn.length; i++) {
    numBtn[i].addEventListener("click", function() {
        if (calculation.num1 && equalsSelected) {
            operator = "";
            value = numBtn[i].value;
            calculatorDisplay.textContent = value;
            calculation.num1 = value;
            equalsSelected = false;
        } else if (!calculation.num1 || !operator) {
            for (var num in calculation)
                operator = "";
                operatorDisplay.textContent = operator.textContent;
                num = numBtn[i].value;
                calculatorDisplay.textContent += num;
                value = calculatorDisplay.textContent;
                calculation.num1 = value;
        } else {
            for (var num in calculation)
                num = numBtn[i].value;
                calculatorDisplay2.textContent += num;
                value = calculatorDisplay2.textContent;
                calculation.num2 = value;
        }
    });
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
        enableDotBtn();
        equalsSelected = false;
        return operator;
    });
});

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
        enableDotBtn();
    } 
    equalsSelected = true;
});

function operate(operator, num1, num2) {
    switch (operator) {
        case '+':
            operator = "";
            return add (num1, num2);
        case '-':
            operator = "";
            return subtract (num1, num2);
        case '*':
            operator = "";
            return multiply (num1, num2);
        case '÷':
            operator = "";
            return divide (num1, num2);
    }
}

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
    return Math.round(num1 / num2 * 100) / 100;
    }
}
