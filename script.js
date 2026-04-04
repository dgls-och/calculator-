const calDisplay = document.querySelector(".display");
const numButtons = document.querySelectorAll(".num-buttons > button");
const operatorButtons = document.querySelectorAll(".operator-buttons > button");
let firstOperand = [];
let operator;
let secondOperand = [];

numButtons.forEach(button => button.addEventListener('click', e => {
    e.preventDefault();
    if (button.id === "clear") {
        clearAll();
        console.log(firstOperand, operator, secondOperand);
    } else {
        evaluateNumButtons(button);
    }
}));

operatorButtons.forEach(button => button.addEventListener('click', e => {
    e.preventDefault();
    evaluateOperatorButtons(button);
}));

function clearAll() {
    firstOperand = [];
    secondOperand = [];
    operator = undefined;
    calDisplay.textContent = "";
}

function stringnumberToNum(str) {
    return Number.isInteger(str) ? operand = parseInt(str)
        : operand = parseFloat(str);
}

function setFirstOperand(operand) {
    firstOperand.push(operand);
    let firstOperandCopy = [...firstOperand];
    calDisplay.textContent = firstOperandCopy.join("");
}

function setSecondOperand(operand) {
    secondOperand.push(operand);
    let secondOperandCopy = [...secondOperand];
    calDisplay.textContent = secondOperandCopy.join("");
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

function evaluateNumButtons(button) {
    if (button.id === "=") {
        if (
            firstOperand.length > 0
            && secondOperand.length > 0
            && (typeof operator) === "string"
        ) {
            let firstOperandNum = stringnumberToNum(firstOperand.join(""));
            let secondOperandNum = stringnumberToNum(secondOperand.join(""));
            let result = operate(operator, firstOperandNum, secondOperandNum);
            calDisplay.textContent = result;
            firstOperand = [], secondOperand = [], operator = undefined;
            console.log(firstOperand, operator, secondOperand);
        }
    } else if (operator === undefined) {
        if (button.id === ".") {
            //start here
        } else {
            setFirstOperand(button.id);
            console.log(firstOperand, operator, secondOperand);
        }
    } else if (typeof operator === "string") {
        setSecondOperand(button.id);
        console.log(firstOperand, operator, secondOperand);
    }
}

function evaluateOperatorButtons(button) {
    if (firstOperand.length > 0 && secondOperand.length == 0 && !operator) {
        if (button.id === "del") {
            firstOperand.pop();
            let newValue = stringnumberToNum(firstOperand.join(""));
            calDisplay.textContent = firstOperand.length > 0
                ? newValue : 0;
            console.log(firstOperand, operator, secondOperand);
        } else {
            setOperator(button.id);
            console.log(firstOperand, operator, secondOperand);
        }
    }

    if (
        firstOperand.length > 0
        && secondOperand.length > 0
        && (typeof operator) === "string"
    ) {
        if (button.id === "del") {
            secondOperand.pop();
            let newValue = stringnumberToNum(secondOperand.join(""));
            calDisplay.textContent = secondOperand.length > 0
                ? newValue : 0;
            console.log(firstOperand, operator, secondOperand);
        } else {
            let firstOperandNum = stringnumberToNum(firstOperand.join(""));
            let secondOperandNum = stringnumberToNum(secondOperand.join(""));
            let result = operate(operator, firstOperandNum, secondOperandNum);
            calDisplay.textContent = result;
            firstOperand = [], secondOperand = [], operator = button.id;
            firstOperand.push(result);
            console.log(firstOperand, operator, secondOperand);
        }
    }

    if (firstOperand.length > 0 && operator && secondOperand.length == 0) {
        if (button.id == "del") {
            if (calDisplay.textContent == 0) {
                calDisplay.textContent = operator;
                console.log(firstOperand, operator, secondOperand);
            } else if (calDisplay.textContent == operator) {
                operator = undefined;
                calDisplay.textContent = stringnumberToNum(firstOperand.join(""));
                console.log(firstOperand, operator, secondOperand);
            }
        }
    }
}
