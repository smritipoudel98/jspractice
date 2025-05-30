import User from "./modules.js";

let user1 = new User("Smriti", 25);
let user2 = new User("Shruti", 15);
User.printName(user1, user2);
User.printAge(user1, user2);
console.log(user1);
