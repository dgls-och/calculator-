const calDisplay = document.querySelector(".display");
const numButtons = document.querySelectorAll(".num-buttons > button");
const operatorButtons = document.querySelectorAll(".operator-buttons > button");
let firstOperand;
let operator;
let secondOperand;

numButtons.forEach(button => button.addEventListener('click', e => {
    e.preventDefault();
    if (button.id === "clear") {
        calDisplay.textContent = "";
    } else {
        calDisplay.textContent = button.id;
    }
}));

operatorButtons.forEach(button => button.addEventListener('click', e => {
    e.preventDefault();
    console.log(`Button ${button.id} clicked!`);
}))

function findSum(num1, num2) {
    return num1 + num2;
}

function findDifference(num1, num2) {
    return num1 - num2;
}

function findQuotient(num1, num2) {
    if (num2 === 0) {
        throw "ERR: division by zero";
    } else {
        return num1 / num2;
    }
}

function findMultiple(num1, num2) {
    return num1 * num2;
}

function operate(operator, firstOperand, secondOperand) {
    if (operator === "+") {
        return findSum(firstOperand, secondOperand);
    }

    if (operator === "-") {
        return findDifference(firstOperand, secondOperand);
    }

    if (operator === "*") {
        return findMultiple(firstOperand, secondOperand);
    }

    if (operator === "/") {
        return findQuotient(firstOperand, secondOperand);
    }
}
console.log(operate("/", 5, 0))
