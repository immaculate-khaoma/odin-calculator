let currentValue = '';
let previousValue = '';
let operator = null;

//adding DOM elements
const previousDisplay = document.querySelector('.previousDisplay');
const currentDisplay = document.querySelector('.currentDisplay');
const backBtn = document.querySelector('.backBtn');
const deleteBtn = document.querySelector('.deleteBtn');
const numBtn = document.querySelectorAll('.numBtn');
const decimalBtn =document.querySelector('.decimalBtn');
const bracketBtn =document.querySelectorAll('.bracketBtn');
const operatorBtn = document.querySelectorAll('.operatorBtn');
const equalsBtn = document.querySelector('.equalsBtn');

//adding eventListeners
numBtn.forEach((btn) => {
  btn.addEventListener('click', () => {
    appendNumber(btn.textContent);
  })
})

//function to display digits on screen
function appendNumber(num) {
  currentValue += num;
}