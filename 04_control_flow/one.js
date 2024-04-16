// if

if (2 == "2") {
  console.log("Executed");
}

if (2 === "2") {
  console.log("Executed");
}
console.log("Not Executed");

// if - else

if (2 >= "2") {   // executed
  console.log("Executed");
} else {
  console.log("Not Executed");
}

if(true && true) {
    console.log("Executed");
}

// switch

let randomNumber = Math.floor(Math.random() * 6) + 1;
switch (randomNumber) {
  case 1:
    console.log("You got a one");
    break;
  case 2:
    console.log("You got a two");
    break;
  case 3:
    console.log("You got a three");
    break;
  case 4:
    console.log("You got a four");
    break;
  case 5:
    console.log("You got a five");
    break;
  case 6:
    console.log("You got a six");
    break;

  default:
    console.log("System Error");
    break;
}

// FALSY VALUE ----> false, 0, -0, BigInt, null, undefined, NaN, ""

// TRUTHY VALUES ----> "0", "false", " ", [], {}, function(){}

const emptyObj = {};

if (Object.keys(emptyObj).length === 0) {
  console.log("Empty Object");
}

// Nullish Coalescing Operator(??): null undefined
let val1;
val1 = 5 ?? 10;
console.log(val1); // 5

val2 = null ?? 4;
console.log(val2); // 4

val3 = undefined ?? 5;
console.log(val3);  // 5

val4 = null ?? undefined;
console.log(val4);  // undefined

val5 = null ?? 40 ?? 5;
console.log(val5);  // 40

val6 = null ?? undefined ?? 5;
console.log(val6);  // 5

// Terniary Operator
const iceTeaPrice = 100;
iceTeaPrice < 80 ? console.log("Less than 80") : console.log("More than 80"); // More than 80
