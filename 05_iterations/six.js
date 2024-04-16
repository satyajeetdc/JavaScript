const prog = ["cpp", "js", "ruby", "python", "java"];

const values = prog.forEach((item) => {
  return item;
});
console.log(values); // forEach does not return any value

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newNums = myNums.filter((num) => num > 5);
console.log(newNums);

const myNums1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newNums1 = myNums.filter((num) => {
  return num > 5;
}); // use return, otherwise will return empty array
console.log(newNums1);

const myNums2 = [];
myNums.forEach((num) => {
  if (num > 5) {
    myNums2.push(num);
  }
});
console.log(myNums2);

const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
  { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
];

let userBooks = books.filter((item) => item.genre === "History");
console.log(userBooks);

let userBooks1 = books.filter((item) => {
  return item.genre === "Science" && item.publish >= 2000;
});
console.log(userBooks1);
