// Zadanie 1
let el = document.createElement("div");
el.innerText = "To jest nowy element";
document.body.appendChild(el);

// Zadanie 2
let favFruits = ['truskawka', 'borówka', 'banan', 'arbuz', 'mandarynka', 'jabłko'];
let ul = document.createElement("ul");
favFruits.forEach(x => {
    let li = document.createElement("li");
    li.innerText = x;
    ul.appendChild(li);
});
document.body.appendChild(ul);

// Zadanie 3
document.body.addEventListener('click', () => {
    let list = document.querySelectorAll('ul li');
    list.forEach((child, i) => {
        if (i % 2 === 0) child.remove();
    });
});

// Zadanie 4
let button = document.createElement('button');
button.innerText = 'Click to remove';
button.addEventListener('click', (e) => {
    e.target.remove();
});

document.body.appendChild(button);

// Zadanie 5
let random = Math.floor(Math.random() * 20);
for (let i = 0; i < random; i++) {
    let randomDiv = document.createElement('div');
    randomDiv.innerText = `to jest div numer ${i}`;
    document.body.appendChild(randomDiv);
}

// Zadanie 6
let firstDiv = document.createElement('div');
let secondDiv = document.createElement('div');
let thirdDiv = document.createElement('div');
let firstSpan = document.createElement('span');
let secondSpan = document.createElement('span');

document.body.appendChild(firstDiv);
firstDiv.innerHTML = 'To jest div'
document.body.appendChild(firstSpan);
firstSpan.innerHTML = 'To jest span'
document.body.appendChild(secondDiv);
secondDiv.appendChild(thirdDiv);
thirdDiv.innerHTML = 'To jest div'
document.body.appendChild(secondSpan);
secondSpan.innerHTML = 'To jest span'


// Zadanie 7

let favFruits = ['truskawka', 'borówka', 'banan', 'arbuz', 'mandarynka', 'jabłko'];
let ul1 = document.createElement("ul");
let ul2 = document.createElement("ul");

favFruits.forEach(x => {
    let li = document.createElement("li");
    li.innerText = x;
    ul1.appendChild(li);
});

let listArr = [ul1, ul2];

let buttons = [document.createElement("button"), document.createElement("button")];

function checkButtonDisabled() {
    listArr.forEach((ul, i) => {
        if (ul.childElementCount <= 1){
            buttons[i].disabled = true;
        } else {
            buttons[i].disabled = false;
        }
    })
}

listArr.forEach((ul, i) => {
    buttons[i].innerText = 'Przenieś do drugiej listy';
    buttons[i].addEventListener('click', () => {
        let listItems = ul.querySelectorAll('li');
        let childToTransfer = listItems[listItems.length - 1];
        if (i === 0) {
            ul2.insertBefore(childToTransfer, buttons[1]);
        } else {
            ul1.insertBefore(childToTransfer, buttons[0]);
        }
        checkButtonDisabled();
    });
    ul.appendChild(buttons[i]);
    document.body.appendChild(ul);
});

checkButtonDisabled();

// Zadanie 8
let form = document.createElement('form');
let typeElement = document.createElement('input');
typeElement.placeholder = "Element: ";
let inputText = document.createElement('input');
inputText.placeholder = "Tekst: ";
let colorText = document.createElement('input');
colorText.placeholder = "Kolor: ";
let elementCounter = document.createElement('input');
elementCounter.placeholder = "Ile razy: ";
let createButton = document.createElement('button');
createButton.innerText = "Utwórz";
createButton.type = "submit";

form.appendChild(typeElement);
form.appendChild(inputText);
form.appendChild(colorText);
form.appendChild(elementCounter);
form.appendChild(createButton);

document.querySelector("#root").appendChild(form);

createButton.addEventListener('click', (event) => {
    event.preventDefault();

    for (let i = 0; i < parseInt(elementCounter.value); i++) {
      let newElement = document.createElement(`${typeElement.value}`);
      newElement.style.color = `${colorText.value}`;
      newElement.innerText = inputText.value;

      root.appendChild(newElement);
    }
});

// Zadanie 9

let container = document.createElement("div");

document.body.appendChild(container);

function renderForm(){
    let form = document.createElement('form');
    form.classList.add('zad9-form');

    let name = document.createElement('input');
    name.placeholder = "Imię";
    name.setAttribute('name', 'name');

    let surname = document.createElement('input');
    surname.placeholder = "Nazwisko";
    surname.setAttribute('name', 'surname');

    let age = document.createElement('input');
    age.placeholder = "Wiek";
    age.setAttribute('name', 'age');

    let numberOfKids = document.createElement('input');
    numberOfKids.placeholder = "Ilość dzieci";
    numberOfKids.setAttribute('name', 'numberOfKids');

    form.appendChild(name);
	form.appendChild(surname);
	form.appendChild(age);
    form.appendChild(numberOfKids);
    return form;
}

container.appendChild(renderForm());

let addButton = document.createElement('button');
addButton.innerText = "Utwórz";
addButton.addEventListener("click", () => {
	table.innerHTML += createTable();
});
container.appendChild(addButton);


let moreButton = document.createElement('button');
moreButton.innerText = "Więcej";
moreButton.addEventListener("click", () => {
	container.appendChild(renderForm()); 
});
container.appendChild(moreButton);

let table = document.createElement("table");
table.classList.add('table-form');


document.body.appendChild(table);

function createTable() {
	const outputTable = document.querySelector(".table-form");
	
	let html = "";
	let forms = document.querySelectorAll(".zad9-form");
	
	if(outputTable.innerHTML === ""){
		html += "<tr><td>Imię</td><td>Nazwisko</td><td>Wiek</td><td>Liczba dzieci</td></tr>";
	}
	
	forms.forEach((form) => {
        let name = uppercaseFirstLetter(form.querySelector("input[name='name']").value);
        let surname = uppercaseFirstLetter(form.querySelector("input[name='surname']").value);
        let age = uppercaseFirstLetter(form.querySelector("input[name='age']").value);
		let numberOfKids = uppercaseFirstLetter(form.querySelector("input[name='numberOfKids']").value);
		
		html += `<tr><th>${name}</th><th>${surname}</th><th>${age}</th><th>${numberOfKids}</th></tr>`;
	});
	
	return html;
}

// Zadanie 10

function uppercaseFirstLetter(string){
	if(string !== ""){
		string = string[0].toUpperCase() + string.substr(1, string.length);
		return string;
	}
	else{
		return string;
	}
}

// Zadanie 11

function zad11(params) {
    const numbers = params.match(/[0-9]+/g);
    if (numbers.length > 0) {
        console.log(numbers.reduce((a, b) => Number(a) + Number(b)));

        const multi = numbers.reduce((a, b) => Number(a) * Number(b));

        console.log(`Suma liczb: ${multi}`);

        for (let i = 0; i < multi; i++) {
            const div = document.createElement('div');
            div.innerText = `div${i}`;
            document.body.appendChild(div);
        }
    }
}
zad11('hello there');

// Zadanie 12

function createObject(str) {
    return {
        string: str
    }
}

const alaStr = createObject('Ala ma kota');
alaStr.alaToOla = function () {
    if (this.string.includes('Ala')) {
        this.string = this.string.replaceAll('Ala', 'Ola');
        console.log(this.string);
    } else {
        const div = document.createElement('div');
        div.innerText = 'Słowo Ala nie występuje w tekście.';
        document.body.appendChild(div);
    }
}

alaStr.alaToOla();


// Zadanie 13

let stringArr = ['Ala','ma','kota wqw2212'];

function returnNumberOfLetters (params){
    let numbersCounter = 0;
    params.forEach(v => {
        numbersCounter += v.length;
    });
    return numbersCounter;
}

function sumNumbers(params) {
    let numbers = params.map(v => v.match(/[0-9]+/g));
    let allNumbers = numbers.flat();
    return allNumbers.reduce((a, b) => Number(a) + Number(b));
}

function avgNumbers(params) {
    let numbers = params.map(v => v.match(/[0-9]+/g));
    let allNumbers = numbers.flat().filter(v => v);
    let sum = allNumbers.reduce((a, b) => Number(a) + Number(b));
    return sum / allNumbers.length;
}

console.log(returnNumberOfLetters(stringArr));
console.log(sumNumbers(stringArr));
console.log(avgNumbers(stringArr));

// Zadanie 14

let object = {
    name: '',
    surname: '',
    age: ''
}

function assignNewValues(name, surname, age) {
    object.name = name;
    object.surname = surname,
    object.age = age;

    if (name.length > 5 || surname.length > 5 || age.length > 5) {
        let button = document.createElement('button');
        button.innerText = 'Przywróć';
        
        button.addEventListener('click', (e) => {
            object = {
                name: '',
                surname: '',
                age: ''
            }
        });
        document.body.appendChild(button);
    }
}

assignNewValues('Filip', 'Kowal', '23');
console.log(object);