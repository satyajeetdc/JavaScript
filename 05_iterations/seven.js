const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNums = myNums.map((n) => n + 10);
console.log(newNums);

const newNums1 = myNums
  .map((n) => n * 10)
  .map((n) => n + 1)
  .filter((n) => n % 3 == 0);
console.log(newNums1);
