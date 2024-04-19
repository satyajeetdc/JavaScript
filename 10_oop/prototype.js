// let myName = "Satyajeet      ";

// // console.log(myName.length);

// console.log(myName.trueLength);


// let myHeroes = ["thor", "spiderman", "ironman"];

// let heroPower = {
//   thor: "hammer",
//   spiderman: "web",
//   ironman: "tech",
//   getSpiderPower: function () {
//     console.log(`Spiderman's power is ${this.spiderman}`);
//   },
// };

// Object.prototype.satyajeet = function () {
//   console.log("sdc is present in all objects.");
// };

// // heroPower.satyajeet();

// // myHeroes.satyajeet();

// Array.prototype.heySatya = function () {
//   console.log("sdc is in arrays");
// };
// myHeroes.heySatya();
// // heroPower.heySatya();   



let anotherUserName = "Chai aur code      ";
String.prototype.trueLength = function() {
    console.log(this);
    console.log(`True length is ${this.trim().length}`)
}

anotherUserName.trueLength();
"Satya     ".trueLength();