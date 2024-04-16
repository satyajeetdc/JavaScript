// for iteration

for (let index = 0; index < 10; index++) {
  if (index === 5) {
    console.log("5 is the best number");
  }
  console.log(index);
}

for (let i = 0; i < 3; i++) {
  console.log(`Outer loop value : ${i}`);
  for (let j = 0; j < 3; j++) {
    console.log(`Outer loop value : ${i}, Inner loop value : ${j}`);
  }
}

let myArr = ["Flash", "Superman", "Batman"];
for (let index = 0; index < myArr.length; index++) {
  console.log(myArr[index]);
}

// break and continue
let str = "Flash";
for (let i = 0; i < 20; i++) {
  if(i === 5) break;
  console.log(str);
}

for (let i = 0; i < 5; i++) {
  if(i === 3) continue;
  console.log(i);
}

