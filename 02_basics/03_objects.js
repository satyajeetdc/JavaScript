// singleton -> Object.create

// object literals

const mySym = Symbol("key1");

const User = {
  name: "Satyajeet",
  age: 25,
  email: "mail@mail.com",
  isLoggedIn: false,
  lastLoggedInDays: ["saturday", "monday"],
  beta_user: true,
  [mySym]: "user1", // Symbols initialization syntax within an object
};

// console.log(User.name);
// console.log(User["lastLoggedInDays"]);
// console.log(User["beta_user"]);

// console.log(User[mySym]);
// console.log(typeof User[mySym]); // string ??????

// Object.freeze(User); // freeze an object so that it becomes immutable

// User.name = "SD Chowdhury";  // DOESNT Change as User obj has been frozen
// console.log(User.name);

// console.log(User);

User.greeting = function () {
  console.log("Hello all !!!");
};

// console.log(User.greeting); // [Function (anonymous)]
// console.log(User.greeting()); // Hello all !!! --- undefined

User.greeting1 = function () {
  console.log(`Hello ${this.name}`);
};

console.log(User.greeting1()); // Hello Satyajeet
