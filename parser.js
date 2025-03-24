
const RADIX = 10;
const PRECISION = 8;

/* A guaranteed way to provide an appropriately formatted float */
function numberFiltration(value) {
    return parseFloat(Number(value).toFixed(PRECISION));
}

/* Given an array of characters representing a mathematical expression 
(a term, which is defined below, followed by a + or - character and then by another term any number of times) 
ending with =, the function returns the value of the expression.
*/
function parseExpression(expression) {
    if (typeof expression === "string") {
        expression = expression.split("");
    }
    let value = valueOfTerm(expression);
    while (expression[0] === '+' || expression[0] === '-') {
        if (expression[0] === '+') {
            expression.shift();
            let tempCall = valueOfTerm(expression);
            value = numberFiltration(value + tempCall);
        } else if (expression[0] === '-') {
            expression.shift();
            let tempCall = valueOfTerm(expression);
            value = numberFiltration(value - tempCall);
        }
    }
    return value;
}

/* A term should start with a factor, an expression in parentheses or a digit sequence, followed by a *, /, or % character and another factor any number of times.
The function evaluates the term and returns the value.
*/
function valueOfTerm(expression) {
    let value = valueOfFactor(expression);
    while (expression[0] === '*' || expression[0] === '/' || expression[0] === '%') {
        if (expression[0] === '*') {
            expression.shift();
            let tempCall = valueOfFactor(expression);
            value = numberFiltration(value * tempCall);
        } else if (expression[0] === '/') {
            expression.shift();
            let tempCall = valueOfFactor(expression);
            if (tempCall === 0) {
                throw new Error("Division by zero is undefined.");
            }
            value = numberFiltration(value / tempCall);
        }
        // else if (expression[0] === '%') {
        //     expression.shift();
        //     let tempCall = valueOfFactor(expression);
        //     if (tempCall === 0) {
        //         throw new Error("Division by zero is undefined.");
        //     }
        //     value = numberFiltration(value % tempCall);
        // }
    }
    return value;
}

// A factor is an expression in parentheses, a digit sequence (including decimals), or a negated factor. The function evaluates the factor and returns its value.
function valueOfFactor(expression) {
    if (expression[0] === '-') {
        expression.shift();
        return -1 * valueOfFactor(expression);
    } else if (expression[0] === '(') {
        expression.shift();
        let value = parseExpression(expression);
        expression.shift(); // Remove the ')'
        return value;
    } else {
        return valueOfDigitSequence(expression);
    }
}

// A digit sequence is a sequence of digits possibly including a decimal point. The function evaluates the digit sequence and returns its value as a float.
function valueOfDigitSequence(expression) {
    let numberStr = "";
    while (/\d/.test(expression[0]) || expression[0] === '.') {
        if (expression[0] === '.' && numberStr.includes('.')) {
            break; // Stop if trying to add a second decimal point
        }
        numberStr += expression.shift();
    }

    // Convert numberStr to a number, pull 8 digits max, then parsefloat drops trailing zeros
    return numberFiltration(numberStr);
}