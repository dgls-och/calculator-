function findSum(num1, num2) {
    return num1 + num2;
}

function findDifference(num1, num2) {
    return num1 - num2;
}

function findQuotient(num1, num2) {
    return num1 / num2;
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

let firstOperand;
let operator;
let secondOperand;