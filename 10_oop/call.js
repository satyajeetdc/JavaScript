function setUsername(username) {
  // Complex DB calls
  this.username = username;
  console.log("working");
}

function createUser(username, email, password) {
  setUsername.call(this, username);
  this.email = email;
  this.password = password;
}

const chai = new createUser("chai", "chai@chai.com", "password");

console.log(chai);
