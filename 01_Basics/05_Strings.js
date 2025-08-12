const name = "Saurav"
const surname = "Bhasin"

console.log(`My name is ${name} ${surname}`)

const gameName = new String('Cassiopeia-sb')

console.log(gameName[0])
console.log(gameName.__proto__);
console.log(gameName.length)
console.log(gameName.toUpperCase())

console.log(gameName.charAt(6));
console.log(gameName.indexOf('i'));
const newString = gameName.substring(0,6)
console.log(newString);

const anotherString = gameName.slice(-10,2)
console.log(anotherString);

const stringWithSpaces = "    Hello World!    "
console.log(stringWithSpaces)
console.log(stringWithSpaces.trim());

const url = "https://www.example.com/saurav%20"

const splitWord = "Saurav_Bhasin_JavaScript"
console.log(url.replace("%", " "));
console.log(splitWord.split("_"));