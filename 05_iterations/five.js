const prog = ["cpp", "js", "ruby", "python", "java"];

prog.forEach((item) => console.log(item));

function printMe(item) {
  console.log(item);
}

prog.forEach(printMe);

prog.forEach((item, index, arr) => console.log(item, index, arr));

const myCoding = [
  {
    name: "Satyajeet",
    email: "satya@gmail.com",
  },
  {
    name: "Kshitiz",
    email: "ksh@gmail.com",
  },
  {
    name: "Arindam",
    email: "arin@gmail.com",
  },
];

myCoding.forEach((item) => {
  console.log(item.name, " : ", item.email);
});
