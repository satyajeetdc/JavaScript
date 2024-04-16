// {
//   let a = 10; // block scope

//   const b = 20; // block scope

//   var c = 30; // global scope
// }

// // console.log(a); // error
// // console.log(b); // error
// console.log(c); // access ho gya

// function one() {
//   const username = "satyajeet";
//   console.log(username);  // cannot be accessed
//   function two() {
//     const age = "25";
//     console.log(username, age);
//     function three() {
//       const password = "pwd";
//       console.log(username, age, password);
//     }
//     three();
//   }
//   two();
// }

// one();

// =-=-=-=-=-=-=-=-=-=-=-=-=-= INTERESTING =-=-=-=-=-=-=-=-=-=-=-=-=-=

addOne(5);
function addOne(num) {
  return num + 1;
}

addTwo(5); // Cannot access 'addTwo' before initialization
const addTwo = function (num) {
  return num + 2;
};
