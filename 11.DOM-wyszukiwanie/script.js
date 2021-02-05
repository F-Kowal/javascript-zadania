// Zadanie 1

var elements = document.getElementsByClassName("list");

// Zadanie 2

function getElements(elementName) 
{
    var elements = document.getElementsByTagName(elementName);

    return elements; 
}

var liElements = getElements("li");
console.log(liElements);

// Zadanie 3

var listElements = document.getElementById("list");
console.log(listElements);

// Zadanie 4

function elements(element) {
    console.log(element);
}

elements(document.querySelectorAll("li"));
elements(document.querySelectorAll("ul"));
elements(document.querySelectorAll("span"));
elements(document.querySelectorAll("div.list span"));
elements(document.querySelectorAll("div#spans span"));