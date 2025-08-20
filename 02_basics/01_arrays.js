const myArr = [0,1,2,3,5,65,6];
const myHeroes = ['Saurav', 'Bhasin', 'Cassiopeia'];
console.log(myArr[0]);
const myArr2 = new Array(1,2,3,4,5);

// // Array methods
// myArr.push(7); // Add to end
// console.log(myArr);

// myArr.pop(); // Remove from end
// console.log(myArr);

// myArr.unshift(9); // Add to start
// console.log(myArr);

// myArr.shift(); // Remove from start
// console.log(myArr);

console.log(myArr.includes(5)); // Check if exists
console.log(myArr.indexOf(5)); // Get index of element

//slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1,3);

// console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1,3);
// console.log(myn2);
console.log("C ", myArr);