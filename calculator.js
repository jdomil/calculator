const add = function(num1, num2) {
    return num1 + num2;
}

const substract = function(num1, num2) {
    return num1 - num2;
}

const multiply = function(num1, num2) {
    return num1 * num2;
}

const divide = function(num1, num2) {
    return num1 / num2;
}

const operate = function(operator, num1, num2) {
    switch (operator) {
        case '+':
            return add(num1, num2);
        case '-':
            return substract(num1, num2);
        case '*':
            return multiply(num1, num2);    
        case '/':
            return divide(num1, num2);    
    
        default:
            break;
    }
}

let oneBtn = document.getElementById('calc-one');
let twoBtn = document.getElementById('calc-two');
let threeBtn = document.getElementById('calc-three');
let fourBtn = document.getElementById('calc-four');
let fiveBtn = document.getElementById('calc-five');
let sixBtn = document.getElementById('calc-six');
let sevenBtn = document.getElementById('calc-seven');
let eightBtn = document.getElementById('calc-eight');
let nineBtn = document.getElementById('calc-nine');
let zeroBtn = document.getElementById('calc-zero');

let decimalBtn = document.getElementById('calc-decimal');
let clearBtn = document.getElementById('calc-clear');
let backspaceBtn = document.getElementById('calc-backspace');
let divideBtn = document.getElementById('calc-divide');
let multiplyBtn = document.getElementById('calc-multiply');
let substractBtn = document.getElementById('calc-substract');
let addBtn = document.getElementById('calc-add');
let equalsBtn = document.getElementById('calc-equals');

let displayValElement = document.getElementById('calc-display-val');

let calcNumBtns = document.querySelectorAll('.calc-btn-num');
let calcOperatorBtns = document.querySelectorAll('.calc-btn-operator');

let displayVal = 0;
let pendingVal;
let evalStringArray = [];

let updateDisplayVal = (clickObj) => {
    let btnText = clickObj.target.innerText;

    if (displayVal === 0) {
        displayVal = '';
    }

    displayVal += btnText;
    displayValElement.innerText = displayVal;
}

calcNumBtns.forEach(btn => {
    btn.addEventListener('click', updateDisplayVal, false);
});

// calcOperatorBtns.forEach(btn => {
//     btn.addEventListener('click', performOperation, false);
// });



