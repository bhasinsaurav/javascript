const score = 400;

const balance = new Number(100);
//console.log(balance);
//console.log(score);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const otherNumber = 123.456789;
// console.log(otherNumber.toPrecision(2));

const hundreds = 100000;
// console.log(hundreds.toLocaleString());

// Math operations

console.log(Math.abs(-10)); // Absolute value

console.log(Math.round(4.7)); // Rounding
console.log(Math.ceil(4.1)); // Round up
console.log(Math.floor(4.9)); // Round down


console.log(Math.random()); // Random number between 0 and 1
console.log((Math.random()*10) + 1);

const min = 10 ;
const max = 20;

console.log(Math.floor(Math.random() * (max - min +1) + min)); 