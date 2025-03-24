
document.getElementById("clear").addEventListener("click", function () {
    calculatorValue = "";
    outputBox.value = "0";
});

document.getElementById("calculate").addEventListener("click", function () {
    if (calculatorValue === "") {
        return;
    }

    try {
        calculatorValue = parseExpression(calculatorValue);
    } catch (e) {
        alert("Division by zero is not allowed. Please fix your input value.");
    }

    let numericValue = Number(calculatorValue);
    if (!Number.isInteger(numericValue)) {
        calculatorValue = parseFloat(numericValue.toFixed(8).toString());
    }
    outputBox.value = calculatorValue;
});

document.getElementById("output-form").addEventListener("submit", function (event) {
    event.preventDefault();

    try {
        calculatorValue = parseExpression(outputBox.value);
    } catch (e) {
        alert("Division by zero is not allowed. Please fix your input value.");
    }

    let numericValue = Number(calculatorValue);
    if (!Number.isInteger(numericValue)) {
        calculatorValue = parseFloat(numericValue.toFixed(8).toString());
    }
    outputBox.value = calculatorValue;
});

outputBox.addEventListener("focusin", function () {
    if (outputBox.value === "0") {
        calculatorValue = "";
    }

    outputBox.value = calculatorValue;
});

outputBox.addEventListener("focusout", function () {
    if (outputBox.value === "") {
        outputBox.value = "0";
    }
});