const fbUser1 = new Object(); // ------ SINGLETON OBJECT

const fbUser = {}; // ------ NON SINGLETON OBJECT

fbUser.id = "123abc";
fbUser.name = "Altman";
fbUser.isLoggedIn = false;

// console.log(fbUser);

const regularUser = {
  email: "s@gmail.com",
  fullName: {
    fisrtname: "Sam",
    lastName: "Altman",
  },
  id: fbUser.id,
};

console.log(regularUser.fullName.fisrtname); // Sam
console.log(regularUser.fullName?.fisrtname); // ? for safety, it fullName is not found  // INTERESTING

console.log(regularUser["fullName"]["lastName"]); // Altman

const obj1 = {
  1: "a",
  2: "b",
};

const obj2 = {
  3: "c",
  4: "d",
};

const obj3 = Object.assign(obj1, obj2); // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
console.log(obj3);
console.log(obj1); // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

const obj4 = Object.assign({}, obj1, obj2); //  --->> BEST PRACTICE --{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
console.log(obj4);

const obj5 = { ...obj1, ...obj2 }; // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
console.log(obj5);

const Userss = [
  {
    id: 1,
    email: "s@gmail.com",
  },
  {
    id: 2,
    email: "demo@gmail.com",
  },
];

console.log(Userss[1].email); // demo@gmail.com

console.log(Userss.keys()); // Object [Array Iterator] {}

console.log(Object.keys(Userss)); // [ '0', '1' ]
console.log(typeof Object.keys(Userss)); // object - (array type)

console.log(Object.values(Userss)); // [ { id: 1, email: 's@gmail.com' }, { id: 2, email: 'demo@gmail.com' } ]

console.log(Object.entries(Userss));

//   [
//     [ '0', { id: 1, email: 's@gmail.com' } ],
//     [ '1', { id: 2, email: 'demo@gmail.com' } ]
//   ]

console.log(fbUser.hasOwnProperty("name")); // true


