const arr = [1, 2, 3, 4, 5];
const myHeroes = new Array(1, 2, 3, 4);

// console.log(arr);               // [ 1, 2, 3, 4, 5 ]
// console.log(myHeroes);          // [ 1, 2, 3, 4 ]

// Array Methods

// arr.push(6);
// arr.push(7);
// console.log(arr);           // [ 1, 2, 3, 4, 5, 6, 7 ]

// arr.pop();
// console.log(arr);           // [ 1, 2, 3, 4, 5, 6 ]

// arr.unshift(0);             // inserts the item from left

// console.log(arr.includes(10)); // false - boolean
// console.log(arr.indexOf(10)); // -1 means not present

// const newArr = arr.join();
// console.log(arr); // [ 1, 2, 3, 4, 5 ]
// console.log(newArr); // 1,2,3,4,5 -> string
// console.log(typeof newArr); // string

// SLICE and SPLICE

console.log(arr.slice(1, 3)); // [ 2, 3 ]  -> doesnt manipulate the original array
console.log(arr); // [ 1, 2, 3, 4, 5 ]

console.log(arr.splice(1, 3)); // [ 2, 3, 4 ]  -> manipulates the original array
console.log(arr); // [ 1, 5 ]


