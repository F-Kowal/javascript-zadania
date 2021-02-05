// Zadanie 1
document.getElementById('test-event').addEventListener('click', (e) => {
    console.info(e);
});

document.body.addEventListener('mousemove', (e) => {
    console.info(e);
});

document.getElementById('test-event').addEventListener('mouseover', (e) => {
    console.info(e);
});

document.addEventListener('keydown', (e) => {
    console.info(e);
});

document.addEventListener('scroll', (e) => {
    console.info(e);
});

document.getElementById('input-test').addEventListener('input', (e) => {
    console.info(e);
});

// Zadanie 2
document.getElementById('ex2').addEventListener('click', (e) => {
    document.getElementById('span-ex2').innerText = e.target.getAttribute('data-text');
});


// Zadanie 3
let div = document.getElementById('ex3');
div.addEventListener('mouseover', (e) => {
    div.style.backgroundColor = 'blue';
});

div.addEventListener('mouseout', (e) => {
    div.style.backgroundColor = 'red';
});

// Zadanie 4
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let errorSpan = document.getElementById('ex3-err');
document.getElementById('input-test').addEventListener('input', (e) => {
    errorSpan.innerText = numbers.some(char => e.target.value.includes(char))
        ? 'To pole nie może zawierać cyfr'
        : null;
});

// Zadanie 5
let counterBtn = document.getElementById('ex5-button');
let counterContainer = document.getElementById('ex5');
let counter = 0;
function counterAction () {
    counter++;
    counterContainer.innerText = counter;
    if(counter >= 10) {
        counterBtn.removeEventListener('click', counterAction);
    }
}
counterBtn.addEventListener('click', counterAction);

// Zadanie 6
document.addEventListener('scroll', (e) => {
    document.body.style.backgroundColor = window.scrollY >= 200
        ? 'red'
        : 'white';
});

// Zadanie 7
let calcButtons = document.querySelectorAll('#calculator button');
let calcOutput = document.querySelector('#calculator input');
let numericButtons = [];
let funcButtons = [];
let currentCalc = [];
let calcFinish = false;

calcButtons.forEach((el) => {
    if (parseInt(el.innerText) || el.innerText === '0') {
        numericButtons.push(parseInt(el.innerText));
    } else {
        funcButtons.push(el.innerText);
    }

    el.addEventListener('click', () => {
        if(calcFinish) {
          calcOutput.value = '';
          calcFinish = false;
        }
        if (funcButtons.includes(el.innerText)) {
            currentCalc.push(calcOutput.value, el.innerText);
            console.log(currentCalc);
            calcOutput.value = calcOutput.value + el.innerText;

            return;
        }
        if (currentCalc.length > 1) {
            doCalc([...currentCalc, el.innerText]);
            return;
        }
        calcOutput.value = calcOutput.value + el.innerText;
    });
});

function doCalc(x) {
    currentCalc = [];
  calcFinish = true;
    let result;
    numbers = [
        Number(x[0]),
        Number(x[2])
    ];
    switch (x[1]) {
        case '+': result = numbers[0] + numbers[1]; break;
        case '-': result = numbers[0] - numbers[1]; break;
        case '/': result = numbers[0] / numbers[1]; break;
        case '*': result = numbers[0] * numbers[1]; break;
    }
    calcOutput.value = result;
}