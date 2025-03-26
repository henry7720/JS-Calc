
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
    while (expression.length > 0) {
        if (expression[0] === "+") {
            expression.shift();
            let tempCall = valueOfTerm(expression);
            value = numberFiltration(value + tempCall);
        } else if (expression[0] === "-") {
            expression.shift();
            let tempCall = valueOfTerm(expression);
            value = numberFiltration(value - tempCall);
        } else {
            break;
        }
    }
    return value;
}

/* A term should start with a factor, an expression in parentheses or a digit sequence, followed by a *, /, or % character and another factor any number of times.
The function evaluates the term and returns the value.
*/
function valueOfTerm(expression) {
    let value = valueOfFactor(expression);
    while (expression.length > 0) {
        if (expression[0] === "*") {
            expression.shift();
            let tempCall = valueOfFactor(expression);
            value = numberFiltration(value * tempCall);
        } else if (expression[0] === "/") {
            expression.shift();
            let tempCall = valueOfFactor(expression);
            if (tempCall === 0) {
                throw new Error("Division by zero is undefined.");
            }
            value = numberFiltration(value / tempCall);
        }
        // else if (expression[0] === "%") {
        //     expression.shift();
        //     let tempCall = valueOfFactor(expression);
        //     if (tempCall === 0) {
        //         throw new Error("Division by zero is undefined.");
        //     }
        //     value = numberFiltration(value % tempCall);
        // }
        else if (expression[0] === "(" || /\d/.test(expression[0])) {
            let nextValue = valueOfFactor(expression);
            value = numberFiltration(value * nextValue);
        } else {
            break;
        }
    }
    return value;
}

// A factor is an expression in parentheses, a digit sequence (including decimals), or a negated factor. The function evaluates the factor and returns its value.
function valueOfFactor(expression) {
    if (expression[0] === "-") {
        expression.shift();
        return -1 * valueOfFactor(expression);
    } else if (expression[0] === "(") {
        expression.shift();
        let value = parseExpression(expression);
        expression.shift(); // Remove the ")"
        return value;
    } else {
        return valueOfDigitSequence(expression);
    }
}

// Returns the digit sequence
function valueOfDigitSequence(expression) {
    // String to build the number, including significand and exponent
    let numberStr = "";
    let hasDecimal = false; // Flag to ensure only one decimal point is included before the exponent
    let hasExponent = false; // Flag to ensure only one exponent marker ('e' or 'E') is included

    // Loop through the expression until we encounter a character that isn't part of the number
    while (expression.length > 0) {
        let currentChar = expression[0]; // Get the current character

        if (/\d/.test(currentChar)) {
            // If the currentCharacter is a digit, append it to numberStr and remove it from expression
            numberStr += currentChar;
            expression.shift();
        } else if (currentChar === "." && !hasDecimal && !hasExponent) {
            // If the currentCharacter is a decimal point and we haven't already included one or an exponent,
            // append it to numberStr, set hasDecimal to true, and remove it from expression
            hasDecimal = true;
            numberStr += currentChar;
            expression.shift();
        } else if ((currentChar === "e" || currentChar === "E") && !hasExponent) {
            // If the currentCharacter is 'e' or 'E' and we haven't already included an exponent,
            // append it to numberStr, set hasExponent to true, and remove it from expression
            hasExponent = true;
            numberStr += currentChar;
            expression.shift();
            // Check for an optional sign (+ or -) immediately after the exponent marker
            if (expression[0] === "+" || expression[0] === "-") {
                numberStr += expression.shift();
            }
        } else {
            // If the currentCharacter doesn't match any of the above (e.g., an operator like '+'), stop parsing there
            break;
        }
    }

    // Convert the built string to a number and apply filtration to ensure consistent precision
    return numberFiltration(numberStr);
}