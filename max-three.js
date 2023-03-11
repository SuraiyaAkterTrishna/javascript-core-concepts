const jim = 84; 
const dela = 97; 
const chinku = 92; 

// using if else 
function getMax(a, b, c){
    if(a > b && a > c){
        return a;
    }
    else if(b > a && b > c){
        return b; 
    }
    else {
        return c;
    }
}
const largest = getMax(jim, dela, chinku);
// console.log(largest);

const rony = 27; 
const trishna = 33; 
const sagor = 41; 
function getLargest(x, y, z){
    const largest = Math.max(x, y, z);
    return largest;
}
const largestNumber = getLargest(rony, trishna, sagor);
console.log(largestNumber);