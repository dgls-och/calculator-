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
    enableDotBttn();
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

function findSum(num1, num2) { return num1 + num2; }

function findDifference(num1, num2) { return num1 - num2; }

function findQuotient(num1, num2) {
    if (num2 === 0) {
        return "ERR: division by zero";
    } else {
        return num1 / num2;
    }
}

function findMultiple(num1, num2) { return num1 * num2; }

function operate(operator, firstOperand, secondOperand) {
    if (operator === "+") return findSum(firstOperand, secondOperand);

    if (operator === "-") return findDifference(firstOperand, secondOperand);

    if (operator === "*") return findMultiple(firstOperand, secondOperand);

    if (operator === "/") return findQuotient(firstOperand, secondOperand);
}

function evaluateNumButtons(button) {
    if (button.id === "=") {
        if (firstOperand.length > 0 && secondOperand.length > 0 && operator) {
            let firstOperandNum = stringnumberToNum(firstOperand.join(""));
            if (secondOperand[0] == "(") secondOperand.shift();
            let secondOperandNum = stringnumberToNum(secondOperand.join(""));
            let result = operate(operator, firstOperandNum, secondOperandNum);
            calDisplay.textContent = result;
            firstOperand = [], secondOperand = [], operator = undefined;
            enableDotBttn();
        }
    } else if (secondOperand.length == 0 && !operator) {
        if (button.id === ".") {
            if (firstOperand.length == 0 || firstOperand[0] == "-") {
                setFirstOperand("0");
                setFirstOperand(button.id);
                button.disabled = true;
            } else {
                setFirstOperand(button.id);
                button.disabled = true;
            }
        } else {
            setFirstOperand(button.id);
        }
    } else if (firstOperand.length > 0 && operator) {
        if (button.id === ".") {
            if (
                secondOperand.length < 1
                || secondOperand[0] == "("
                || secondOperand[0] == "-"
            ) {
                setSecondOperand("0");
                setSecondOperand(button.id);
                button.disabled = true;
            } else {
                setSecondOperand(button.id);
                button.disabled = true;
            }
        } else {
            setSecondOperand(button.id);
        }
    }
}

function evaluateOperatorButtons(button) {
    if (firstOperand.length > 0 && secondOperand.length == 0 && !operator) {
        if (button.id === "del") {
            let removedValue = firstOperand.pop();
            let newValue = firstOperand.join("");
            calDisplay.textContent = firstOperand.length > 0
                ? newValue : "";
            if (removedValue === ".") enableDotBttn();
        }

        if (
            !(firstOperand.length == "1" && firstOperand[0] == "-"
                || firstOperand.length == "3" && firstOperand[2] == ".")
        ) {
            setOperator(button.id);
            enableDotBttn();
        }
    } else if (firstOperand.length < 1 && secondOperand.length < 1 && !operator) {
        if (button.id === "-") setFirstOperand(button.id);
    } else if (
        firstOperand.length > 0
        && secondOperand.length > 0
        && (typeof operator) === "string"
    ) {
        if (button.id === "del") {
            let removedValue = secondOperand.pop();
            let newValue = secondOperand.join("");
            calDisplay.textContent = secondOperand.length > 0
                ? newValue : operator;
            if (removedValue === ".") enableDotBttn();
        } else

            if (
                !(secondOperand.length == "1" && secondOperand[0] == "-"
                    || secondOperand.length == "2" && secondOperand[1] == "-"
                    || secondOperand.length == "3" && secondOperand[2] == "."
                    || secondOperand.length == "4" && secondOperand[3] == ".")
            ) {
                let firstOperandNum = stringnumberToNum(firstOperand.join(""));
                if (secondOperand[0] == "(") secondOperand.shift();
                let secondOperandNum = stringnumberToNum(secondOperand.join(""));
                let result = operate(operator, firstOperandNum, secondOperandNum);
                calDisplay.textContent = result;
                firstOperand = [], secondOperand = [], operator = button.id;
                firstOperand.push(result.toString());
                enableDotBttn();
            }
    } else if (firstOperand.length > 0 && operator && secondOperand.length == 0) {
        if (button.id == "del") {
            if (calDisplay.textContent == operator) {
                operator = undefined;
                calDisplay.textContent = firstOperand.join("");
            }
        }

        if (button.id === "-") {
            if (operator == "-") {
                setSecondOperand("(");
                setSecondOperand(button.id);
            } else {
                setSecondOperand(button.id);
            }
        }
    }
}

function enableDotBttn() {
    document.querySelector("button[id='.']").disabled = false;
}
