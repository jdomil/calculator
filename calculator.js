const add = function(num1, num2) {
    return Number(num1) + Number(num2);
}

const substract = function(num1, num2) {
    return Number(num1) - Number(num2);
}

const multiply = function(num1, num2) {
    return Number(num1) * Number(num2);
}

const divide = function(num1, num2) {
    return Number(num1) / Number(num2);
}

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

const decimalBtn = document.getElementById('calc-decimal');
const clearBtn = document.getElementById('calc-clear');
const backspaceBtn = document.getElementById('calc-backspace');
const divideBtn = document.getElementById('calc-divide');
const multiplyBtn = document.getElementById('calc-multiply');
const substractBtn = document.getElementById('calc-substract');
const addBtn = document.getElementById('calc-add');
const equalsBtn = document.getElementById('calc-equals');

let displayValElement = document.getElementById('calc-display-val');

const calcNumBtns = document.querySelectorAll('.calc-btn-num');
const calcOperatorBtns = document.querySelectorAll('.calc-btn-operator');

let displayVal = 0;
let pendingVal;
let operator;

const updateDisplayVal = (e) => {
    let btnText = e.target.innerText;

    if (displayVal === 0)
        displayVal = '';

    displayVal += btnText;
    displayValElement.innerText = displayVal;
}

const logOperation = (e) => {

    if (operator)
        submitOperation();

    operator = e.target.innerText;
    
    pendingVal = displayValElement.innerText;
    displayVal = 0;
}

const submitOperation = () => {
    // console.log('Operator:' + operator + '. Num1:' + pendingVal + '. Num 2:' + displayVal);
    if (operator) {
        displayValElement.innerText = operate(operator, pendingVal, displayVal);
        operator = 0;
    }
}

calcNumBtns.forEach(btn => {
    btn.addEventListener('click', updateDisplayVal, false);
});

calcOperatorBtns.forEach(btn => {
    btn.addEventListener('click', logOperation, false);
});

equalsBtn.addEventListener('click', submitOperation, false)




