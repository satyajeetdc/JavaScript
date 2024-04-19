// console.log(Math.PI);

// const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");
// console.log(descriptor);

// const myNewObject = Object.create(null);

const chai = {
  name: "chai",
  price: 5,
  isAvailable: true,
  orderChai: function () {
    console.log("chai nhi bani");
  },
};

// console.log(chai);

Object.defineProperty(chai, "price", {
  writable: false,
  enumerable: false,
  configurable: false,
});

const chaiDescriptor = Object.getOwnPropertyDescriptor(chai, "price");
console.log(chaiDescriptor);

chai.price = 15; // cannot be changed as property was changed above
console.log(chai.price);

for (let [key, value] of Object.entries(chai)) {
  if (typeof value != "function") {
    console.log(`${key} : ${value}`);
  }
}
