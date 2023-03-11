// Math.pow() give any numbers to the power
const myNumber = Math.pow(2, 8);
// console.log(myNumber);

// Math.abs() make any number to absolute number. It takes all negative number as positive number
const firstNumber = 25;
const secondNumber = 55;
const gap = Math.abs(firstNumber - secondNumber);

if(gap > 5) {
    // console.log('Marriage possible');
}
else {
    // console.log('Find anyone else');
}

// Math.round()
const num1 = 100;
const num2 = 3;
let result = num1 / num2;
// console.log(result);
// console.log(Math.round(result));

// Math.ceil(), Math.floor()
// console.log(Math.ceil(result));
// console.log(Math.floor(result));

// Math.random()
const lottery = Math.round(Math.random()*100) ;
// console.log(lottery);

for(let i = 0; i <= 50; i++) {
    const random = Math.round(Math.random()*100);
    console.log(random);
}

