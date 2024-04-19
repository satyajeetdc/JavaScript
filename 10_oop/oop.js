// const user = {
//   username: "satyajeetdc",
//   loginCount: 8,
//   isLoggedIn: true,
//   getUserDetails: function () {
//     // console.log("got user details fro DB");
//     // console.log(`${this.username} got the response from DB`);
//     console.log(this);
//   },
// };

// const user1 = {
//   username: "kshitiz",
//   loginCount: 5,
//   isLoggedIn: false,
//   getUserDetails: function () {
//     console.log(`${this.username} got the response from DB`);
//     console.log(this);
//   },
// };

function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;
  this.greet = function () {
    console.log(`welcome ${this.username}`);
  };

  return this; // optional as its defaultly returned
}

// const userOne = User("satyajeet", 11, true);
const userOne = new User("satyajeet", 11, true);
const userTwo = new User("kshitiz", 5, false);

// console.log(userOne);
// console.log(userTwo.greet());

console.log(userOne.constructor);