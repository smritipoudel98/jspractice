//object
let a = {
  name: "smriti",
  age: 25,
  greet() {
    console.log("hello", this.name, "your age is", this.age);
  },
};
a.greet();

//class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Hello, my name is ${this.name} and I'm ${this.age} years old`;
  }
}

const john = new Person("John", 30);
console.log(john.greet()); // "Hello, my name is John and I'm 30 years old"
