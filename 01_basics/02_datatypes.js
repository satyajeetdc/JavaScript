"use strict"; // Treat all JS code as in newer version

// alert("hello");   // We are using node js, not browser

let name = "Satyajeet"; // string
let age = 21; // number
let isLoggedIn = false; // boolean

// null --> standalone value, shows the variable is empty
// undefined --> no value is defined
// symbol --> used for finding uniqueness, used in React, figma, etc...

// object

// console.log(typeof null); // OBJECT
// console.log(typeof undefined); // undefined

// const id = Symbol("123");
// const nextId = Symbol("123");
// console.log(id === nextId); // false
// console.log(id);
// console.log(nextId);

// Array, Objects, fucntion

const arr = [1, 2, 3];

let myObject = {
  name: "satyajeet",
  age: 25,
};

const myFunc = function () {
  console.log("Hello World!");
};

console.table([typeof arr, typeof myObject, typeof myFunc]);