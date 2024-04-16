// const user = {
//   username: "satyajeet",
//   price: "199",
//   welcomeMsg: function () {
//     console.log(`Welcome ${this.username}.`); // this -> refers current context
//     console.log(this);
//   },
// };

// user.welcomeMsg();

// user.username = "sam";
// user.welcomeMsg();

// console.log(this);  // {} as we are inside node, at global level, its an empty object

// function chai() {
//     let user = "satya";
//     console.log(this.user); // this doesnt work inside the function
// }
// chai();

// const chai = function () {
//   let user = "satya";
//   console.log(this.user);
// };
// chai();  // undefined

// const chai = () => {
//   let user = "satya";
//   console.log(this);
// };
// chai(); // {}

const addTwos = (num1, num2) => {
  return num1 + num2; // explicit return
};
console.log(addTwos(2, 5));

const addTwos1 = (num1, num2) => num1 + num2; // implicit return
console.log(addTwos1(2, 5));

const returnObj = () => ({ username: "satya" }); // use  () while returning objects
