// Zadanie 1

const buz = document.querySelector("#buz");
const baz = document.querySelector("#baz");
const foo = document.querySelector("#foo");

console.log(buz.parentElement);
console.log(baz.previousElementSibling);
console.log(foo.children);
console.log(foo.parentNode);
console.log(foo.firstElementChild);
console.log(foo.children[Math.floor(foo.children.length / 2)]);



// Zadanie 2
function foo(element) {
    var element1 = document.getElementById(element);
    element1.addEventListener('click', function(){
        var txt = this.children[0].children[0].children[0].children[1].children[0].children[0].innerText;
        console.log(txt);
    })
}


foo("ex2");

// Zadanie 3

function foo(){
    const root = document.getElementById('ex3');
    const buttons = root.querySelectorAll('button');
    
    buttons.forEach(key => {
        console.log(key)
        
        key.addEventListener('click', e => {
            if(key.nextElementSibling.style.display === 'none'){
                key.nextElementSibling.style.display='block';
            }else {
                key.nextElementSibling.style.display='none';
            }
            
        })
    })   
    
}

foo()

// Zadanie 4

const ex3Divs = document.querySelectorAll('#ex3 button');

ex3Divs.forEach((div) => {
    div.addEventListener('click', (event) => {
        const parentElement = event.target.parentElement;
        let randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
        parentElement.style.backgroundColor = randomColor;
    })
})

//zadanie 5

let liElements = document.querySelectorAll('div#ex5 ul li')
let divElements = document.querySelectorAll('div#ex5 div')

divElements.forEach(changeColor => {
    changeColor.addEventListener('mouseover', event => {
        let divColor = event.target.style.backgroundColor
        liElements[0].style.backgroundColor = divColor;
    })
})

divElements.forEach(changeColor => {
    changeColor.addEventListener('mouseover', event => {
        let divColor = event.target.style.backgroundColor
        liElements[liElements.length - 1].style.backgroundColor = divColor;
    })
})

divElements.forEach(changeColor => {
    changeColor.addEventListener('mouseover', event => {
    let divColor = event.target.style.backgroundColor
    for(let i = 0; i>liElements.length; i++) {
        if(i % 2 == 1) {
            liElements[i].style.backgroundColor = divColor;
        }
    }
    })
})

divElements.forEach(changeColor => {
    changeColor.addEventListener('mouseover', event => {
    let divColor = event.target.style.backgroundColor
    for(let i = 0; i<liElements.length; i++) {   
    liElements[i].style.backgroundColor = divColor;
    }
    })
})

divElements.forEach(changeColor => {
    changeColor.addEventListener('mouseover', event => {
    let divColor = event.target.style.backgroundColor
    liElements[0].parentElement.style.backgroundColor = divColor
    })
})

//zadanie 6
const firstTask = document.getElementById('ex6').firstElementChild.firstElementChild.firstElementChild
console.log(firstTask)

const secondTask = document.getElementById('ex6').firstElementChild.parentElement.firstElementChild.firstElementChild.nextElementSibling.parentElement;
console.log(secondTask);

const thirdTask = document.getElementById('ex6').parentElement.firstElementChild.parentElement.nextElementSibling.firstElementChild.firstElementChild.firstElementChild
console.log(thirdTask)