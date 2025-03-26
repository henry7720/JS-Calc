
document.getElementById("clear").addEventListener("click", function () {
    calculatorValue = "";
    outputBox.value = "0";
});

document.getElementById("calculate").addEventListener("click", function () {
    calculatorValue = outputBox.value;

    try {
        calculatorValue = parseExpression(calculatorValue).toString();
        outputBox.value = calculatorValue;
    } catch (e) {
        alert("Division by zero is not allowed. Please fix your input value.");
    }
});

document.getElementById("output-form").addEventListener("submit", function (event) {
    event.preventDefault();

    calculatorValue = outputBox.value;

    try {
        calculatorValue = parseExpression(calculatorValue).toString();
        outputBox.value = calculatorValue;
    } catch (e) {
        alert("Division by zero is not allowed. Please fix your input value.");
    }
});

outputBox.addEventListener("focusin", function () {
    if (outputBox.value === "0") {
        calculatorValue = "";
        outputBox.value = calculatorValue;
    }
});

outputBox.addEventListener("focusout", function () {
    if (outputBox.value === "") {
        outputBox.value = "0";
    }
});