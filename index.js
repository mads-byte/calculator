/** HTML Elements */
const numButtons = document.querySelectorAll(".numButton");
const equalButton = document.getElementById("equal-btn");
const screenData = document.getElementById("screen");
const clearButton = document.getElementById("clear")
const activeElement = document.activeElement;
/** End of HTML Elements */

/** Varibles/Data Structures that need to accessed globally */
let expression = [];
let finalExpression;
let result;
let keyResult;
/** End of variables/data structures that need to be accessed globally*/

/**Logic for all calculator buttons (Store and Display values) */
numButtons.forEach(button => {
    function appendNum() {
        let value = button.textContent;
        screenData.value += value;
        console.log(value);
        expression.push(value);                 //pushes each value to an array
        finalExpression = expression.join("");  //joins all values together with no space in between
        console.log(finalExpression);           //logs the newly joined array
        button.blur();                          //takes button out of focus immediately
        screenData.classList.remove("result");
    };
    button.addEventListener("click", appendNum);
});
/**End of logic for all calculator buttons */


/**Evaluates User input */
function solve() {
    try {
        finalExpression = String(screenData.value);
        keyResult = eval(finalExpression);
        if (keyResult == Infinity) {                        //eval() returns infinity to division by zero so this responds to it
            screenData.value = "DivisionByZero";            //Displays Error in input
            alert("Division by zero not permitted");        //Warns user not to divide by zero
            keyResult = "";
        }
        else {
            screenData.value = keyResult;
            screenData.classList.add("result");
            console.log(keyResult);
            removeOrange();
        }
    } catch (error) {                                       //catches any and all errors other than division by zero
        console.log(error);
        screenData.value = error.name;                      // displays the name of the error to the user
        alert("Please only enter numbers and operators");
    }

};

equalButton.addEventListener("click", solve);
/**End of logic for evaluating user input*/

/**Clear button logic */
clearButton.addEventListener("click", () => {
    screenData.value = "";
    screenData.classList.remove("result");
});
/**End of clear button logic */

/**Logic for displaying results when user presses Enter/Return key */
screenData.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        solve();
    }
});
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









