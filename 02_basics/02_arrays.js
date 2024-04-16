const marvel_heroes = ["Thor", "IronMan", "SpiderMan"];
const dc_heroes = ["Batman", "Superman", "Flash"];

marvel_heroes.push(dc_heroes); // creates array within the array
console.log(marvel_heroes);
console.log(marvel_heroes[3][1]); // Superman

marvel_heroes.concat(dc_heroes); // doesnt alter the original array, returns a new array
console.log(marvel_heroes);
console.log(marvel_heroes.concat(dc_heroes));

const allHeroes = [...marvel_heroes, ...dc_heroes]; // SPREAD
console.log(allHeroes);

const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
const realArr = anotherArray.flat();   // [ 1, 2, 3, 4, 5, 6, 7, 6, 7, [ 4, 5 ] ]
console.log(realArr);
const realArr1 = anotherArray.flat(Infinity);
console.log(realArr1);  // [ 1, 2, 3, 4, 5, 6, 7, 6, 7,  4, 5 ]

console.log(Array.isArray("Satyajeet")); // false
console.log(Array.from("Satyajeet")); // ['S', 'a', 't', 'y', 'a', 'j', 'e', 'e', 't' ]
console.log(Array.from({ name: "Satyajeet" })); // [] -> INTERESTING

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3)); // [ 100, 200, 300 ]
