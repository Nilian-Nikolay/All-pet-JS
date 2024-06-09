let num1input = document.getElementById('num1');
let num2input = document.getElementById('num2');

let add = document.getElementById('add');
let subtract = document.getElementById('subtract');
let multiply = document.getElementById('multiply');
let divide = document.getElementById('divide');

let result = document.getElementById('res');


function resultat(operator) {
    let num1 = Number(num1input.value);
    let num2 = Number(num2input.value);
    let res;
    switch (operator) {
        case '+':
            res = num1 + num2;
            break;
        case '-':
            res = num1 - num2;
            break;
        case '*':
            res = num1 * num2;
            break;
        case '/':
            res = (num1 / num2);
            if (res % 1 !== 0) {
                res = res.toFixed(4);
            }
            break;
    }
    result.textContent = res;
}

add.addEventListener('click', () => {    resultat('+'); });
subtract.addEventListener('click', () => {    resultat('-'); });
multiply.addEventListener('click', () => {    resultat('*'); });
divide.addEventListener('click', () => {    resultat('/'); });
    