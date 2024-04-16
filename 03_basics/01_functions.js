// function printName() {
//   console.log("satyajeet");
// }

// printName(); // satyajeet

// function addNums(number1, number2) {
//   // parameters
//   console.log(number1 + number2);
// }

// addNums("a", 2); // a2       // arguments
// addNums("4", 4); // 44
// addNums(2, 2); // 4
// addNums(); // NaN

// const result = addNums(4, 4);
// console.log(result); // undefined as nothing was returned

// function mulNums(number1, number2) {
//   return number1 * number2;
//   console.log("after return"); // will never get executed
// }

// const res = mulNums(4, 4);
// console.log(res); // 16

function loginUserMessage(userName = "default") {
  // default value will be used when no arguments are passed
  //   if (userName === undefined)
  if (!userName) {
    console.log("Please enter a username");
    return;
  }
  return `Welcome back ${userName} !!`;
}

console.log(loginUserMessage("Satyajeet"));

console.log(loginUserMessage()); // undefined, without if block
