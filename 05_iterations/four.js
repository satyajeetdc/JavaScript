const myObj = {
  js: "javascript",
  cpp: "C++",
  rb: "ruby",
};

// iterating keys
for (const key in myObj) {
  console.log(key);
}

// iterating values
for (const key in myObj) {
  console.log(myObj[key]);
}

const prog = ["cpp", "js", "ruby", "python"];
for (const key in prog) {
  console.log(prog[key]);
}
