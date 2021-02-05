// Zadane 1
let i = 0;

let time = setInterval(() => {
    i += 1;
    console.log(`Cześć po raz ${i}`);

    if (i >= 15) {
        clearInterval(time);
    }
}, 1000);

// Zadanie 2
var arr = [5,"a",2,1,15,"abc", true]

setTimeout(() => {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }

    let i = 0;

    var interval = setInterval(() => {
        console.log(arr[i]);
        i++;
        if (i >= arr.length) {
            clearInterval(interval);            
        }
    }, 3000);
}, 2000);