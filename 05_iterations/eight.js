const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let initialValue = 0;
const sumOfArray = myNums.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);

console.log(sumOfArray);
