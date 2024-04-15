// TYPES ---->>> STACK  &  HEAP

// STACK ---->>>> Primitive data types - copy of original - original value not changed
// HEAP  ---->>>> Non Primitive data types - reference of original- original value changes


// STACK =>

let myName = "Satyajeet";
let anotherName = myName;  // copy

anotherName = "Chowdhury";
console.table([anotherName, myName]);



// HEAP =>

let userOne = {
    email: "user@yahoo.com",
    upiId: "user@bhim"
};

let userTwo = userOne;   // Reference

console.log(userTwo);

userTwo.upiId = "user2@bhim";

console.log(userTwo);
console.log(userOne);