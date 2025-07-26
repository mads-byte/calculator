/** HTML Elements */
const numButtons = document.querySelectorAll(".numButton");
const equalButton = document.getElementById("equal-btn");
const screenData = document.getElementById("screen");
const clearButton = document.getElementById("clear")
const activeElement = document.activeElement;
/** End of HTML Elements */

let expression = [];
let finalExpression;
let result;
let keyResult;


/**Logic for all calculator buttons (Store and Display values) */
numButtons.forEach(button => {
    function appendNum() {
        let value = button.textContent;
        screenData.value += value;
        console.log(value);
        expression.push(value);
        finalExpression = expression.join("");
        console.log(finalExpression);
        button.blur();
        screenData.classList.remove("result");
    };
    button.addEventListener("click", appendNum);
});
/**End of logic for all calculator buttons */


/**Equal button logic */
function solve() {
    finalExpression = String(screenData.value);
    keyResult = eval(finalExpression);
    //screenData.value = result;
    screenData.value = keyResult;
    screenData.classList.add("result");
    console.log(keyResult);
    removeOrange();
};
equalButton.addEventListener("click", solve);
/**End of equal button logic */

/**Clear button logic */
clearButton.addEventListener("click", () => {
    screenData.value = "";
    screenData.classList.remove("result");
});
/**End of clear button logic */

/**Logic for displaying results when user presses Enter/Return key */
screenData.addEventListener("keydown", (event) => {

    if (event.key === "Enter") {
        keyResult = eval(screenData.value);
        screenData.classList.add("result");
        screenData.value = keyResult;
    };


})
/** End of logic for Enter/Return key */


/**Logic for displaying results when user presses "=" key */
screenData.addEventListener("keydown", (event) => {
    if (event.key === "=") {
        event.preventDefault()
        keyResult = eval(screenData.value);
        screenData.classList.add("result");
        screenData.value = keyResult;
    };
});
/** End of logic for "=" key */


/**Logic to remove orange text color when user resumes typing */
function removeOrange() {
    if (screenData.value != keyResult) {
        screenData.classList.remove("result");
    };
};

screenData.addEventListener("input", () => {
    removeOrange();
});
/**End of logic for removing orange text color */








