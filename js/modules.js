//for modules...
class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  static printName(u1, u2) {
    console.log(`My name is ${u1.name}.`);
    console.log(`My name is ${u2.name}.`);
  }
  static printAge(u1, u2) {
    console.log(`${u1.name} is ${u1.age} years old. `);
    console.log(`${u2.name} is  ${u2.age} years old. `);
  }
}

export default User;
