let currentInput = '';
let currentOperator = '';
let display = document.getElementById('display');

function appendValue(value) {
  currentInput += value;
  display.value = currentInput;
}

function setOperator(operator) {
  currentOperator = operator;
  currentInput += ' ' + operator + ' ';
  display.value = currentInput;
}

function clearDisplay() {
  currentInput = '';
  currentOperator = '';
  display.value = '';
}

function calculateResult() {
  const parts = currentInput.split(' ');
  const num1 = parseFloat(parts[0]);
  const operator = parts[1];
  const num2 = parseFloat(parts[2]);

  if (isNaN(num1) || isNaN(num2)) {
    display.value = 'Invalid Input';
    return;
  }

  switch (operator) {
    case '+':
      display.value = num1 + num2;
      break;
    case '-':
      display.value = num1 - num2;
      break;
    case '*':
      display.value = num1 * num2;
      break;
    case '/':
      if (num2 === 0) {
        display.value = 'Cannot divide by zero';
      } else {
        display.value = num1 / num2;
      }
      break;
    default:
      display.value = 'Invalid Operator';
  }
}