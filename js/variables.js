//variable declaration can be hoisted, but not initialization.
// This code demonstrates variable hoisting in JavaScript.
//var can be redeclared and updated.
a = 1;
b = 2;
console.log(a);
console.log(b);
var a;
var b;
//let and const declarations are not hoisted in the same way as var.
/*a = 1;
b = 2;
console.log(a);
console.log(b);
let a;
let b;*/

//let  varibles::
//let can be updated but not redeclared. but can be redeclared in different scopes.
let x = 10;

console.log("outside scope:", x);
function test() {
  let x = 20;
  console.log("scope:", x);
}
test();
//const variables::
//const variables cannot be updated or redeclared.
const y = 30;
console.log(y);
