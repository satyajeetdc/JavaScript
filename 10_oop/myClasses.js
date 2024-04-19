// ES6

class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  encryptPassword() {
    return `${this.password}abc`;
  }

  greet(){
    return `Welcome back ${this.username}`
  }
}

const chai = new User("satyajeetdc", "satyajeetdc@gmail.com", "password");

console.log(chai.greet());


// behind the scenes  ---->>>>

function User1(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}

User1.prototype.encryptPassword = function() {
  return `212${this.password}xyz`;
}

const tea = new User1("tea", "tea@gmail.com", "password");

console.log(tea.encryptPassword());