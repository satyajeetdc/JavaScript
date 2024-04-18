// First Promise

  const promiseOne = new Promise(function (resolve, reject) {
  // Do an async task - eg. DB calls, cryptography tasks, newtwork related
  setTimeout(function () {
    console.log("async task is complete");
    resolve();
  }, 1000);
});

promiseOne.then(function () {
  console.log("promise consumed");
});

// Second Promise

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("async task 2 is complete");
    resolve();
  }, 1000);
}).then(function () {
  console.log("promise 2 reslved");
});

// Third Promise

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {}, 1000);
  resolve({ username: "chai", email: "example@gmail.com" });
});

promiseThree.then(function (user) {
  console.log(user);
});

// Fourth Promise

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ username: "chai", email: "example@gmail.com" });
    } else {
      reject("Error: something went wrong");
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((name) => {
    console.log(name);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(() => console.log("promise is either resolved or rejected"));

// Fifth Promise
const promiseFive = new Promise((resolve, reject) => {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ username: "satyajeetdc", email: "satyajeetdc@gmail.com" });
    } else {
      reject("Error");
    }
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response.email);
  } catch {
    console.log("Error");
  }
}
consumePromiseFive();

// API handling
async function getAllUsers() {
  try {
    const response = await fetch("https://api.github.com/users/satyajeetdc");
    const data = await response.json();
    console.log(data);
  } catch {
    console.log("error");
  }
}
getAllUsers();


// // Using fetch()
fetch("https://api.github.com/users/satyajeetdc")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
