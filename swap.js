// swap with a temp variable
var a = 10; 
var b = 7; 
var temp = a; 
a = b; 
b = temp;
// console.log(a, b);

// swap without temp
var p = 20;
var q = 10;
p = p + q; 
q = p - q;
p = p - q;
console.log(p, q);

//simply swap
var x = 30; 
var y = 50;
[x , y] = [y , x];
console.log(x, y);