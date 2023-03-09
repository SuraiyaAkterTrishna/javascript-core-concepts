// string comparison with toUpperCase() and toLowerCase()
const userName = 'Karina';
const userInput = 'karinA';
if(userName.toLowerCase() === userInput.toLowerCase()){
    console.log('Valid user');
}
else{
    console.log('User is invalid');
}

let myAddress = 'Jessore Khulna Bangladesh';
let userAddress = 'jessore khulna bangladesh';

const address = myAddress.toUpperCase();
// console.log(address);
const user = userAddress.toUpperCase();
// console.log(user);
if(address === user){
    console.log('Valid user address');
}
else{
    console.log('Invalid user address');
}