// max from two values
const jim = 84; 
const dela = 77; 

// using if-else statement 
/* if(jim > dela) {
    console.log("Jim will eat the cake");
}
else {
    console.log("Dela will eat the cake");
} */

// using function 
/* function getMax(a, b) {
    if(a > b){
        return a;
    }
    else {
        return b;
    }
}
const largest = getMax(jim, dela);
console.log(largest); */

// using Math.max()

const largest = Math.max(jim, dela);
console.log(largest);

