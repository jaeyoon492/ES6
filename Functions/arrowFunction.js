const names = ["nico", "jaeyoon", "load"];

// const hearts = names.map((item) => item + "😍");

// console.log(hearts);

const hearts = names.map(function (item) {
  return item + "♡";
});

console.log(hearts);

function SayHello(nameOfPerson, age) {
  console.log("hello my name is " + nameOfPerson + "and my age is " + age);
}
SayHello("nico", 12);
SayHello("she", 23);
SayHello("he", 23);
SayHello("ha", 34);

const Players = {
  name: ["jeayoon", "lynn", "flynn"],

  sayHello: function () {
    this.name.map((item) => item + "🤣");
  },
};

Players.sayHello();
