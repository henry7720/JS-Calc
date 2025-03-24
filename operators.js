function handleOldOutOps() {
    if (outputBox.value === "0" || outputBox.value.trim().toLowerCase() === "nan") {
        calculatorValue = "0";
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
    if (outputBox.value === "0" || calculatorValue === "" || outputBox.value.trim().toLowerCase() === "nan") {
        calculatorValue = "(";

    } else {
        calculatorValue += "(";
    }
    outputBox.value = calculatorValue;
});

document.getElementById("right-paren").addEventListener("click", function () {
    calculatorValue += ")";
    outputBox.value = calculatorValue;
});

document.getElementById("mod").addEventListener("click", function () {
    handleOldOutOps();
    calculatorValue += "%";

    outputBox.value = calculatorValue;
});


document.getElementById("add").addEventListener("click", function () {
    handleOldOutOps();
    calculatorValue += "+";

    outputBox.value = calculatorValue;
});

document.getElementById("minus").addEventListener("click", function () {
    if (outputBox.value === "0" || outputBox.value.trim().toLowerCase() === "nan") {
        calculatorValue = "-";
    } else {
        calculatorValue += "-";
    }
    outputBox.value = calculatorValue;
});

document.getElementById("decimal").addEventListener("click", function () {
    calculatorValue += ".";
    outputBox.value = calculatorValue;
});