let date = new Date();

console.log(typeof date); // date object

console.log(date); // 2024-04-16T04:20:23.173Z
console.log(date.toString()); // Tue Apr 16 2024 04:20:23 GMT+0000 (Coordinated Universal Time)
console.log(date.toDateString()); // Tue Apr 16 2024
console.log(date.toISOString()); // 2024-04-16T04:21:52.899Z
console.log(date.toLocaleDateString()); // 4/16/2024
console.log(date.toJSON()); // 2024-04-16T04:22:48.218Z
console.log(date.toTimeString()); // 04:24:30 GMT+0000 (Coordinated Universal Time)

let newDate = new Date(2024, 3, 18);
console.log(newDate.toDateString()); // Thu Apr 18 2024

let newDate2 = new Date(2024, 3, 18, 5, 3, 18);
console.log(newDate2.toLocaleString()); // 4/18/2024, 5:03:18 AM

let myDate = new Date("2024-04-18"); // Format can also be like "04-18-2024"
// console.log(myDate.toDateString());         // Thu Apr 18 2024

let timeStamp = Date.now();
console.log(timeStamp); // 1713242020294

console.log(myDate.getTime()); // 1713398400000

console.log(Date.now()); // 1713242138049 (in ms)
console.log(Math.floor(Date.now() / 1000)); // 1713242198 (in s)

let newDate1 = new Date();
console.log(newDate1.getDay()); // SUN - 0
console.log(newDate1.getMonth()); // JAN - 0

console.log(
  newDate.toLocaleString("default", {
    weekday: "short",
  })
);
