const name = "Satyajeet";
const repoCount = 21;

// console.log(name + repoCount);    // DONT
console.log(`${name} has ${repoCount} repositories`);  // string interpolation

const newName = new String("satyajeet-das-chowdhury");

console.log(newName[0]); 
console.log(newName.__proto__);

console.log(newName.length);
console.log(newName.toUpperCase());
console.log(newName.charAt(5));
console.log(newName.indexOf("t"));

const newString = newName.substring(0, 9);     // satyajeet
console.log(newString);

const anotherString = newName.slice(-9);    // chowdhury
console.log(anotherString);

const newStringOne = "     new message     ";
let newStringOne1 = newStringOne.trim();
console.table([newStringOne, newStringOne1]);

const url = "https://www.satyajeet.xyz/home%20page";
console.log(url.replace("%20", "-"));

console.log(url.includes("satyajeet"));     // true
console.log(url.includes("satyajeetdas"));  // false

console.log(newName.split("-"));