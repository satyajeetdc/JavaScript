class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`Username : ${this.username}`);
  }

  static createId() {
    console.log(
      `ID for ${this.username} : ${Math.floor(Math.random() * 1000 + 1)}`
    );
  }
}

const satyajeet = new User("satyajeetdc");

satyajeet.logMe();
// satyajeet.createId();

class Teacher extends User {
  constructor(username, email) {
    super(username);
    this.email = email;
  }
}

const teacher101 = new Teacher("teacher10001", "t@yahoo.com");

teacher101.logMe();
// teacher101.createId();

