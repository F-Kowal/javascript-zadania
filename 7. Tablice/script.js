// zadanie 1
 
let array = [1, 2, 3]
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

// zadanie 2

let array1 = [1, 2, 3, 4, 5, 6, 'a', 'b', 'c'];

console.log (`Pierwszy i drugi element: ${array1[0]} ${array1[1]}`);

console.log(`Ostatni element: ${[array1[array1.length - 1]]}`);

for (let i = 0; i < array1.length; i++) {
    console.log(`Wszystkie elementy: ${array1[i]}`);
}

for (let i = 0; i < array1.length; i++) {
    if (i % 2) {
        console.log(`Co drugi element: ${array1[i]}`);
    }
}

array1.forEach((x) => {
    if (typeof(x) == "string") {
        console.log(`Wszystkie stringi:  ${x}`);
    }
});

array1.forEach((y) => {
    if(typeof(y) == "number") {
    console.log(`Wszystkie liczby: ${y}`);
    } 
});


//zadanie 3
let array2 = [1, 2, 3, 4, 5, 6];
console.log(array2.reduce((a, b) => a + b));
console.log(array2.reduce((a, b) => a - b));
console.log(array2.reduce((a, b) => a + b) / array2.length);
array2.filter((v, i) => v % 2 === 0).forEach((v) => {
    console.log(v);
});
array2.filter((v, i) => v % 2 !== 0).forEach((v) => {
    console.log(v);
});
let biggest = 0;
array2.forEach(v => {
    if (v > biggest) {
        biggest = v;
    }
});
console.log(biggest);
let smallest = 0;
array2.forEach(v => {
    if (v < smallest) {
        smallest = v;
    }
});
console.log(smallest);
let arrayLength = array2.length - 1;
array2.forEach((v, i) => {
  console.log(array2[arrayLength - i]);
});

//zadanie 4

function sumNumbers(param) {
    let x = 0;
    for(let i = 0; i < param.length; i++) {
        x = x + param[i];
    }
    console.log(x);
}
let array3 = [1, 2, 3, 4, 5];
sumNumbers(array3);

// Zadanie 5

function printElements(array) {
    let avg = array.reduce((a, b) => a + b) / array.length;
    array.forEach((x) => {
        console.log(x * avg);
    });;
}

printElements([1, 2, 3, 4, 5]);

//zadanie 6

function evenAvg(array) {
    let evenNumbers = array.filter((x, i) => x % 2 === 0);
    return evenNumbers.reduce((a, b) => a + b) / evenNumbers.length;
}

console.log(evenAvg([1, 2, 3, 4, 5]));

//zadanie 7
let array4 = [13, 5, 21, 37, 1, 0, 3];

function sort(array) {
    return array.sort((a, b) => a - b);
}

console.log(sort(array4));

//zadanie 8
function sumIndexes(arr1, arr2) {
    let arraySum = 0;
    arr1.forEach((x, i) => arraySum += i);
    arr2.forEach((x, i) => arraySum += i);
    return arraySum;
}

console.log(sumIndexes(['hello'], [1, 2, 3, 4]));

//zadanie 9
let array5 = [1, 2, 5, 21, 3, 0];
function returNewArray(array) {
    return array.map((x) => x * -1);
}

console.log(returNewArray(array5));