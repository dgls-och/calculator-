const calDisplay = document.querySelector(".display");
const numButtons = document.querySelectorAll(".num-buttons > button");
const operatorButtons = document.querySelectorAll(".operator-buttons > button");
let firstOperand;
let operator;
let secondOperand;
let result = 0;

numButtons.forEach(button => button.addEventListener('click', e => {
    e.preventDefault();
    if (button.id === "clear") {
        clearAll();
    }
}));

operatorButtons.forEach(button => button.addEventListener('click', e => {
    e.preventDefault();
    setOperator(button.id);
}));

function clearAll() {
  firstOperand = undefined;
  secondOperand = undefined;
  operator = undefined;
  result = 0;
  calDisplay.textContent = "";
}

function setFirstOperand(operand) {
    firstOperand = operand;
    calDisplay.textContent = firstOperand;
}

function setSecondOperand(operand) {
    secondOperand = operand;
    calDisplay.textContent = secondOperand;
}

function setOperator(operand) {
    operator = operand;
    calDisplay.textContent = operator;
}

function findSum(num1, num2) {
    return num1 + num2;
}

function findDifference(num1, num2) {
    return num1 - num2;
}

function findQuotient(num1, num2) {
    if (num2 === 0) {
        return "ERR: division by zero";
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
console.log(operate("/", 5, 0));
