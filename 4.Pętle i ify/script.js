// Zadanie 1
let number1 = 99;
let number2 = 31;

if (number1 > number2) 
{
    console.log(number1);
} 
else 
{
    console.log(number2);    
}

// Zadanie 2
let num1 = 10;
let num2 = 15;
let num3 = 20;

if (num1 > num2 && num1 > num3)
{
    console.log(num1);
} 
else if(num2 > num1 && num2 > num3) 
{
    console.log(num2);
} 
else 
{
    console.log(num3);
}

// Zadanie 3
for (let i = 0; i < 10; i++) {
    console.log("Lubię JavaScript");    
}

// Zadanie 4
let result = 0;

for (let i = 1; i <= 10; i++) {
    result += i;   
}

console.log(result);

// Zadanie 5
var n = 5;
var sum = 0;

for (let i = 0; i <= n; i++) {
    sum += i;  
    if (i % 2 == 0) {
        console.log(`${i} - parzysta`); 
    } else {
        console.log(`${i} - nieparzysta`); 
    }
}

console.log(sum);

// Zadanie 6
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        console.log(`i = ${i}, j = ${j}`);    
    }   
}

// Zadanie 7
for (let i = 0; i < 100; i++) {    
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("FizzBuzz"); 
    } else if (i % 3 == 0){
        console.log("Fizz"); 
    } else if (i % 5 == 0){
        console.log("Buzz"); 
    } else {
        console.log(i);
    }
}

// Zadanie 8
// a)
let stars = '*';
for (let i = 0; i < 5; i++) {
    console.log(stars);
    stars += '*';    
}

// b)
let stars = '*';
let spacer = ' ';
for (var i=0; i<5; i++) {
    var result = '';
    for (var j = 5 - 1; j > i; j--) {
        result += spacer;
    }
    for (var k = 0; k <= i; k++) {
        result += stars + spacer;
    }
    console.log(result);
}

// c)
var result = '';
for (var i=1; i<=5; i++) {
  result = '';
  for (var j=i; j<5; j++) {
    result += ' ';
  }
  for (var k=0; k<(i*2)-1; k++) {
    result += '*';
  }
  console.log(result);
}


// e)
let stars = ' *';

for (var x = 0; x < 5; x++) {
var result = '';
for (var y = 0; y < 5 - x; y++) {
result += ' ';
}
for (var z = 0; z < x + 1; z++) {
result += stars;
}
console.log(result);
}
for (var v = 0; v < 3; v++) {
console.log('     *');
}