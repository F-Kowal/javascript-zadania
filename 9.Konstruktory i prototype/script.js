// Zadanie 1
class Person {
    constructor(imie, nazwisko, wiek, kraj, miasto, jezyk) {
        Object.assign(this, { imie, nazwisko, wiek, kraj, miasto, jezyk })
    }

    changeAge(age) {
        this.wiek = age;
    }

    changeCity(city) {
        this.miasto = city;
    }
}

const person1 = new Person('Filip', 'Kowal', 23, 'Polska', 'Kraków', 'polski');
const person2 = new Person('Dominika', 'Nowak', 35, 'Polska', 'Wrocław', 'polski');
const person3 = new Person('Bill', 'Gates', 55, 'USA', 'Seattle', 'angielski');
const person4 = new Person('Harry', 'Hart', 48, 'Wielka Brytania', 'Londyn', 'angielski');
const person5 = new Person('Hideo', 'Kojima', 57, 'Japonia', 'Tokyo', 'japoński');

person1.changeAge(26);
person1.changeCity('Gdańsk');
person2.changeAge(15);
person2.changeCity('Warszawa');
person3.changeAge(99);
person3.changeCity('Chicago');
person4.changeAge(42);
person4.changeCity('Oxford');
person5.changeAge(102);
person5.changeCity('Hiroshima');
console.log(person1, person2, person3, person4, person5);


// Zadanie 2
class Calculator {
    constructor() {
        this.historyOfOperation = []
    }
     showHistoryOfOperations() {
         return this.historyOfOperation.forEach((OperationHistory) => console.log(OperationHistory));
    }
    cleanHistoryOfOperations() {
        this.historyOfOperation = []
    }
     add (x,y) {
        let addingResult = x + y
        this.historyOfOperation.push({
            OperationHistory: 'add two numbers:', x, y ,'result:': addingResult
        });
        return addingResult;
    }
     subtract(x,y) {
        let subtractionResult = x - y
        this.historyOfOperation.push({
            OperationHistory: 'subtracts two numbers', x, y, 'result:': subtractionResult
        });
        return subtractionResult;
    }
     multiply(x,y) {
        let multiplicationResult = x * y
        this.historyOfOperation.push({
            OperationHistory: 'multiply two number:', x, y, 'result:': multiplicationResult
        });
        return multiplicationResult;
    }
     divide(x,y) {
        let dividingResult = x / y
        this.historyOfOperation.push({
            OperationHistory: 'divide two numbers:', x, y, 'result:': dividingResult
        });
        return dividingResult;
    }
}

let firstOperations = new Calculator;
let secondOperations = new Calculator;
firstOperations.add(1,2)
secondOperations.add(6,3);
firstOperations.subtract(10,5)
secondOperations.subtract(6,3);
firstOperations.multiply(8,7)
secondOperations.multiply(6,3);
firstOperations.divide(125,5)
secondOperations.divide(6,3);
firstOperations.showHistoryOfOperations();
secondOperations.showHistoryOfOperations();
secondOperations.cleanHistoryOfOperations();
secondOperations.showHistoryOfOperations();

// Zadanie 3:
function RandNum() {
	this.changeNumber = () => {
		RandNum.prototype.interval = setInterval(() => {
			RandNum.prototype.num = Math.round(Math.random() * 10);
			console.log(RandNum.prototype.num);
		}, 1000);
	};
	this.isMoreThan5 = () => {
		RandNum.prototype.check = setInterval(() => {
			if (RandNum.prototype.num > 5) {
        console.log("Większa niż 5, koniec");
				clearInterval(RandNum.prototype.interval);
				clearInterval(RandNum.prototype.check);
			}
		}, 1000);
	};
}
const randNumChange = new RandNum();
const randNumCheck = new RandNum();
randNumChange.changeNumber();
randNumCheck.isMoreThan5();