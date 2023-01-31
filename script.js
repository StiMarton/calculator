const calculatorDisplay1 = document.querySelector("#display1");
const calculatorDisplay2 = document.querySelector("#display2");
const operatorDisplay = document.querySelector("#operator");
const outputDisplay = document.querySelector("#output");

const numBtn = document.getElementsByClassName("num-btn");
const clearBtn = document.getElementById("clear");
const addBtn = document.getElementById("add-btn");
const subtractBtn = document.getElementById("subtract-btn")
const equalBtn = document.getElementById("equal");


let calculation = {
    operator: "",
    output: "",
    num: [],
};

let currentNum = 0;

calculatorDisplay1.textContent = currentNum;
calculatorDisplay2.textContent = calculation.num;

// This loop makes the numbers functional
// FIX: Each operator button pressed should save current num, and then start a new num
for (let i = 0; i < numBtn.length; i++) {
    numBtn[i].addEventListener("click", function() {
    if (calculation.operator == "add") {
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

//NEW ADD BUTTON
//The add button should call the operate function
addBtn.addEventListener("click", function() {
    calculation.operator = "add";
    operatorDisplay.textContent = "+";
    document.getElementById("operator").hidden = false;
    operate(add, calculation.num);
    console.log(calculation.operator);
})

/* OLD Add button
addBtn.addEventListener("click", function() {
    document.getElementById("operator").hidden = false;
    document.getElementById("display2").hidden = false;
    operatorDisplay.textContent = "+";
    calculation.operator = "add";
    if (!calculation.num1) {
        calculation.num1 = calculatorDisplay1.textContent;
    } else if (!calculation.num2) {
        calculation.num2 = calculatorDisplay2.textContent;
    }
})
*/

subtractBtn.addEventListener("click", function() {
    document.getElementById("operator").hidden = false;
    document.getElementById("display2").hidden = false;
    operatorDisplay.textContent = "-";
    calculation.operator = "subtract";
    if (!calculation.num1) {
        calculation.num1 = calculatorDisplay1.textContent;
        console.log("Subtract 1 works");
    } else if (!calculation.num2) {
        calculation.num2 = calculatorDisplay2.textContent;
        console.log("Subtract 2 works");
    }
})

equalBtn.addEventListener("click", function() {
    document.getElementById("output").hidden = false;
    console.log(calculation.num);
    if (calculation.operator == "add") {
        add(currentNum, calculation.num)
    } else if (calculation.operator == "subtract") {
        subtract(calculation.num1, calculation.num2)
    }
})

clear.addEventListener("click", function() {
    calculation.num = 0;
    currentNum = 0;
    calculation.operator = "";
    calculatorDisplay1.textContent = currentNum;
    calculatorDisplay2.textContent = calculation.num2;
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

/* WIP Add with array
function add (array) {
    return [array].reduce((partialSum, a) => partialSum + a, 0);
}
*/
function add (num1, num2) {
    num1 = Number(currentNum);
    num2 = Number(calculation.num[1]);
    calculation.output = num1 + num2;
    outputDisplay.textContent = calculation.output;
    console.log(num1, num2);
}


function subtract (num1, num2) {
    num1 = Number(calculation.num1);
    num2 = Number(calculation.num2);
    calculation.output = num1 - num2;
    outputDisplay.textContent = calculation.output;
    console.log(num1, num2);
}

function multiply (num1, num2) {
    return num1 * num2;
}

function divide (num1, num2) {
    return num1 / num2;
}


/* Old number presser
for (let i = 0; i < numBtn.length; i++) {
    numBtn[i].addEventListener("click", function() {
    if (calculation.operator == "add" || calculation.operator == "subtract") {
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
*/
