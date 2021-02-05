//zadanie 1
 
function logInConsole() {
    console.log("Udało Się!");
}
logInConsole();

//zadanie 2 

function displayInConsole(param) {
    console.log(param)
}
displayInConsole('hello there');

//zadanie 3

function returnArray(someArray) {
    return someArray;
}

let array = [15, 3, 'hey']
returnArray(array);

//zadanie 4

function displayString(someString) {
       let i = 0;
       let myInterval = setInterval(() => {
           if (i < 5) {
               console.log(someString)
               i++
           }
           else {
               console.log("Koniec")
               clearInterval(myInterval)
           }
       },3000)
    }
displayString('hello there');