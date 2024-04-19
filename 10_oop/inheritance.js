class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`Username : ${this.username}`);
  }
}

class Teacher extends User {
  constructor(username, email, password) {
    super(username);
    this.email = email;
    this.password = password;
  }

  addCourse() {
    console.log(`New course was added by ${this.username}`);
  }
}

const chai = new Teacher(
  "Teacher101",
  "teacher101@school.com",
  "teacher101password"
);

// chai.addCourse();

const masalaChai = new User("user101");

masalaChai.logMe();
chai.logMe();

console.log(chai === masalaChai); // false
console.log(chai === Teacher); // false

console.log(chai instanceof Teacher); // true
console.log(chai instanceof User); // true
console.log(Teacher instanceof User); // false
