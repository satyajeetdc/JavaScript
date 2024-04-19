const User = {
  _email: "satyajeetdc@sdc.com",
  _password: "password",

  get email() {
    return this._email.toUpperCase();
  },

  set email(value) {
    this._email = value;
  },
};

const user = Object.create(User);
console.log(user.email);
