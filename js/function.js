function myfunction(a, b) {
  let c = a + b;
  console.log(c);
  return c;
}
myfunction(1, 2); // returns 3
//normal function
hello = function () {
  return "Hello World!";
};
//arrow (ES6) function
let hello = "";
hello = () => {
  return "Hello World!";
};
let a = hello();
console.log(a); // returns Hello World!
