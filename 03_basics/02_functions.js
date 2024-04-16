function calculateCartPrice(num1) {
  return num1;
}

console.log(calculateCartPrice(200));  // 200

console.log(calculateCartPrice(200, 300, 400)); // 200

function calculateCartPrices(...num1) {
  // rest operator
  return num1;
}

console.log(calculateCartPrices(200, 300, 400)); // [ 200, 300, 400 ]

function calculateCartPrice1(val1, val2, ...num1) {
  // rest operator
  return num1;
}

console.log(calculateCartPrice1(200, 300, 400)); // [ 400 ]

// functions and objects

const user = {
  username: "satyajeet",
  age: 25,
};

function handleObject(anyObject){
    console.log(`username: ${anyObject.username} and age: ${anyObject.ages}`);
}

handleObject(user);

// functions and arrays

const myNewArr = [100, 200, 300];

function arrReturn(getArray) {
    return getArray[1];
}

console.log(arrReturn(myNewArr));