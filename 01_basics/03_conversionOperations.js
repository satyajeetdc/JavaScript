let score = "33";
console.log(typeof(score));
console.log(typeof score);

let value = Number(score);
console.log(typeof value);

let newScore= "33a";
let newValue = Number(newScore); // NaN
console.log(typeof newValue);
console.log(newValue);   // NaN

let a = null;
console.log(a);
console.log(Number(a));   // 0

let b = false;
console.log(b);
console.log(Number(b));   // false -> 0, true -> 1

let isLoggedIn = true;
console.log(isLoggedIn);
console.log(typeof Number(isLoggedIn));



