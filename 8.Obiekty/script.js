// Zadanie 1:
let car = {
    color: 'red',
    wheels: 4,
    model: 'BMW'
}

for (let [key] of Object.entries(car)) {
    console.log(car[key]);
}

// Zadanie 2:
let car = {
    color: 'red',
    wheels: 4,
    name: 'BMW',
    changeName: function (newName) {
        this.name = newName;
    }
}

car.changeName('Opel');
console.log(car);

// Zadanie 3:
function sumObject(array) {
    this.sum = array.reduce((a, b) => a + b);
}

let sumObj = new sumObject([1, 2, 3, 4]);

console.log(sumObj.sum);

// Zadanie 4:
let car = {
    model: 'BMW',
    age: 12,
    color: 'Black ofc'
}

for (let [key, value] of Object.entries(car)) {
    console.log(`${key}: ${value}`);
}

// Zadanie 5:
let car = {
    model: 'BMW',
    age: 12,
    color: 'Black',
    owner: {
      name: 'Filip',
      age: 23
    }
}

for (let [key, value] of Object.entries(car.owner)) {
    console.log(`${key}: ${value}`);
}

// Zadanie 6:
let car = {
    model: 'BMW',
    age: 12,
    color: 'Black',
    owner: {
      name: 'Filip',
      age: 23
    }
}

car.engine = 1.8;
car.sayHello = () => {
  console.log('Hello');
}
car.sayHello();