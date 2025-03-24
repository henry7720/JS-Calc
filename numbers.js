let calculatorValue = "";
let outputBox = document.getElementById("output-box");

function handleOldOutNums() {
    if (outputBox.value === "0" || outputBox.value.trim().toLowerCase() === "nan") {
        calculatorValue = "";
    }
}
document.getElementById("zero").addEventListener("click", function () {
    handleOldOutNums();
    calculatorValue += "0";

    outputBox.value = calculatorValue;
});

document.getElementById("one").addEventListener("click", function () {
    handleOldOutNums();
    calculatorValue += "1";

    outputBox.value = calculatorValue;
});

document.getElementById("two").addEventListener("click", function () {
    handleOldOutNums();
    calculatorValue += "2";

    outputBox.value = calculatorValue;
});

document.getElementById("three").addEventListener("click", function () {
    handleOldOutNums();
    calculatorValue += "3";

    outputBox.value = calculatorValue;
});

document.getElementById("four").addEventListener("click", function () {
    handleOldOutNums();
    calculatorValue += "4";

    outputBox.value = calculatorValue;
});

document.getElementById("five").addEventListener("click", function () {
    handleOldOutNums();
    calculatorValue += "5";

    outputBox.value = calculatorValue;
});


document.getElementById("six").addEventListener("click", function () {
    handleOldOutNums();
    calculatorValue += "6";

    outputBox.value = calculatorValue;
});

document.getElementById("seven").addEventListener("click", function () {
    handleOldOutNums();
    calculatorValue += "7";

    outputBox.value = calculatorValue;
});

document.getElementById("eight").addEventListener("click", function () {
    handleOldOutNums();
    calculatorValue += "8";

    outputBox.value = calculatorValue;
});

document.getElementById("nine").addEventListener("click", function () {
    handleOldOutNums();
    calculatorValue += "9";

    outputBox.value = calculatorValue;
});