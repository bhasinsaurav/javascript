const marvel = ["thor", "Ironman", "hulk", "spiderman", "captain america"];
const dc = ["batman", "superman", "flash", "aquaman"];

// marvel.push(dc);

// console.log(marvel);

// let allHeroes = marvel.concat(dc);

// console.log(allHeroes);

const allHeroes = [...marvel, ...dc];

// console.log(allHeroes);

const anotherArray = [1,2,3,[4,5,6,6],7,[6,7,[12,56]]];

const real_another_array = anotherArray.flat(Infinity);

console.log(real_another_array);

console.log(Array.isArray("Saurav"));
console.log(Array.from("Saurav"));
console.log(Array.from({name :"Saurav"}));  //interesting

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));