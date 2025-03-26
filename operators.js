function handleOldOutOps() {
    if (outputBox.value === "0" || outputBox.value.trim().toLowerCase().includes("nan")) {
        calculatorValue = "0";
    }
}

function handleOpReplacement(operator) {
    if (outputBox.value === "0" || outputBox.value.trim().toLowerCase().includes("nan")) {
        calculatorValue = operator;
    } else {
        calculatorValue += operator;
    }
}

document.getElementById("mult").addEventListener("click", function () {
    handleOldOutOps();
    calculatorValue += "*";

    outputBox.value = calculatorValue;
});

document.getElementById("div").addEventListener("click", function () {
    handleOldOutOps();
    calculatorValue += "/";

    outputBox.value = calculatorValue;
});

document.getElementById("left-paren").addEventListener("click", function () {
    handleOpReplacement("(");
    outputBox.value = calculatorValue;
});

document.getElementById("right-paren").addEventListener("click", function () {
    calculatorValue += ")";
    outputBox.value = calculatorValue;
});

// document.getElementById("mod").addEventListener("click", function () {
//     handleOldOutOps();
//     calculatorValue += "%";

//     outputBox.value = calculatorValue;
// });

document.getElementById("sqrt").addEventListener("click", function () {
    handleOldOutOps();
    calculatorValue = parseExpression(outputBox.value);

    if (calculatorValue < 0) {
        alert("Taking a square root of a negative number is not allowed. Please fix your input value.");
        return;
    }

    let evaluation = Math.sqrt(calculatorValue);
    calculatorValue = numberFiltration(evaluation).toString();
    outputBox.value = calculatorValue;
});

document.getElementById("add").addEventListener("click", function () {
    handleOldOutOps();
    calculatorValue += "+";

    outputBox.value = calculatorValue;
});

document.getElementById("minus").addEventListener("click", function () {
    handleOpReplacement("-");
    outputBox.value = calculatorValue;
});

document.getElementById("decimal").addEventListener("click", function () {
    handleOldOutOps();
    calculatorValue += ".";

    outputBox.value = calculatorValue;
});