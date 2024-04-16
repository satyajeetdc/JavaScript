// for of

let arr = [1, 2, 3, 4, 5];

for (const element of arr) {
  console.log(element);
}

const greetings = "HelloWorld";

for (const greet of greetings) {
  console.log(greet);
}

// Maps --> Unique and order stays same

const map = new Map();
map.set(1, "a");
map.set(2, "b");
console.log(map);
console.log(map.get(2));
console.log(map.size);

for (const item of map) {
  console.log(item);
}

for (const [key, value] of map) {
  console.log(`Key : ${key}, Value : ${value}`);
}

// objects are not iterable using for of loop
const myObj = {
  game1: "nfs",
  game2: "gta",
};

for (const [key, value] of myObj) {
  console.log(`Key : ${key}, Value : ${value}`);
}
