const jim = 84; 
const dela = 97; 
const chinku = 92; 

// using if else 
function getMin(a, b, c){
    if(a < b && a < c){
        return a;
    }
    else if(b < a && b < c){
        return b; 
    }
    else {
        return c;
    }
}
const smallest = getMin(jim, dela, chinku);
console.log(smallest);

const rony = 27; 
const trishna = 33; 
const sagor = 41; 
function getSmallest(x, y, z){
    const small = Math.min(x, y, z);
    return small;
}
const smallestNumber = getSmallest(rony, trishna, sagor);
console.log(smallestNumber);