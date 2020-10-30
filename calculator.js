// Number buttons
const oneBtn = document.getElementById('calc-one');
const twoBtn = document.getElementById('calc-two');
const threeBtn = document.getElementById('calc-three');
const fourBtn = document.getElementById('calc-four');
const fiveBtn = document.getElementById('calc-five');
const sixBtn = document.getElementById('calc-six');
const sevenBtn = document.getElementById('calc-seven');
const eightBtn = document.getElementById('calc-eight');
const nineBtn = document.getElementById('calc-nine');
const zeroBtn = document.getElementById('calc-zero');

// Function buttons
const decimalBtn = document.getElementById('calc-decimal');
const clearBtn = document.getElementById('calc-clear');
const backspaceBtn = document.getElementById('calc-backspace');
const divideBtn = document.getElementById('calc-divide');
const multiplyBtn = document.getElementById('calc-multiply');
const substractBtn = document.getElementById('calc-substract');
const addBtn = document.getElementById('calc-add');
const equalsBtn = document.getElementById('calc-equals');

// Display
let displayValElement = document.getElementById('calc-display-val');

// Theme buttons
const lightBtn = document.getElementById('light-color');
const darkBtn = document.getElementById('dark-color');

// Arrays of number and operatorss buttons
const calcNumBtns = document.querySelectorAll('.calc-btn-num');
const calcOperatorBtns = document.querySelectorAll('.calc-btn-operator');

// Operations variable declaration
let displayVal = 0;
let pendingVal;
let arrayDisplayVal = [];
let operator;
let decimalValue = false;

// Addition
const add = function(num1, num2) {
    return Number(num1) + Number(num2);
}

// Substraction
const substract = function(num1, num2) {
    return Number(num1) - Number(num2);
}

// Multiplciation
const multiply = function(num1, num2) {
    return Number(num1) * Number(num2);
}

// Division
const divide = function(num1, num2) {
    return Number(num1) / Number(num2);
    
}

// Operation
const operate = function(operator, num1, num2) {
    switch (operator) {
        case '+':
            return add(num1, num2);
        case '-':
            return substract(num1, num2);
        case 'x':
            return multiply(num1, num2);    
        case '/':
            return divide(num1, num2);    
    }
}

// Update display with number buttons presses
const updateDisplayVal = (e) => {
    let btnText = e.target.innerText;

    if (displayVal === 0)
        displayVal = '';

    displayVal += btnText;
    displayValElement.innerText = displayVal;
}

// Reset display for second operand
const logOperation = (e) => {

    if (operator)
        submitOperation();

    operator = e.target.innerText;
    
    pendingVal = displayValElement.innerText;
    displayVal = 0;
}

// Push result to display
const submitOperation = () => {
    if (operator) {
        // Round to 5 decimals max
        let operationResult = Math.round(
            operate(operator, pendingVal, displayVal)*100000) / 100000;
        let finalResult = operationResult != Infinity ? operationResult : '😬';
        displayValElement.innerText = finalResult;
        // Reset conditional values
        displayVal = 0;
        decimalValue = false;
        operator = 0;
    }
}

// Clear function
const clearValues = () => {
    operator = 0;
    pendingVal = 0;
    displayVal = 0;
    displayValElement.innerText = '0';
}

// Decimal values
const addDecimalValue = () => {
    // Figure out if number has a decimal already
    if (!decimalValue) {
        displayVal += '.';
        displayValElement.innerText = displayVal;
    }
    decimalValue = true;
}


// Color theme selector
const setLightTheme = () => {
    localStorage.setItem('theme', 'theme-light');
    document.documentElement.className = 'theme-light';
}

const setDarkTheme = () => {
    localStorage.setItem('theme', 'theme-dark');
    document.documentElement.className = 'theme-dark';
}

(function () {
    if (localStorage.getItem('theme') === 'theme-light') {
        setLightTheme();
    } else {
        setDarkTheme();
    }
 })();

 // Backspace functionality
 const backspace = () => {
     arrayDisplayVal = displayVal.split('');
     arrayDisplayVal.pop();
     displayVal = arrayDisplayVal.join('');

     displayValElement.innerText = displayVal == '' ? '0' : displayVal;
 }

// Buttons event listeners
calcNumBtns.forEach(btn => {
    btn.addEventListener('click', updateDisplayVal, false);
});

calcOperatorBtns.forEach(btn => {
    btn.addEventListener('click', logOperation, false);
});

equalsBtn.addEventListener('click', submitOperation, false);
clearBtn.addEventListener('click', clearValues, false);
decimalBtn.addEventListener('click', addDecimalValue, false);
backspaceBtn.addEventListener('click', backspace, false);

lightBtn.addEventListener('click', setLightTheme, false);
darkBtn.addEventListener('click', setDarkTheme, false);



