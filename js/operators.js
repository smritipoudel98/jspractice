/*Arithmetic Operators(+,-,*, /, %,**(exponential), ++(increment), --(decrement))
Assignment Operators(==, !=, ===, !==, <, >, <=, >=)    
Comparison Operators
String Operators
Logical Operators
Bitwise Operators
Ternary Operators
Type Operators*/

//Arithmetic Operators
function add(x, y) {
  let a = x + y;
  console.log("Sum:", a);
  return a;
}
add(2, 3);

function subtract(c, d) {
  let e = c - d;
  console.log("Difference:", e);
  return e;
}
subtract(5, 2);

function multiply(f, g) {
  let h = f * g;
  console.log("Product:", h);
  return h;
}
multiply(4, 5);

function divide(i, j) {
  let k = i / j;
  console.log("Division:", k);
  return k;
}
divide(10, 2);

function modulus(l, m) {
  let n = l % m;
  console.log("Modulus:", n);
}
modulus(11, 3);

function exponential(o, p) {
  let q = o ** p;
  console.log("Exponential:", q);
  return q;
}
exponential(2, 3);

function decrement(z, step = 2) {
  let s = z;
  if (s < 10) {
    s -= step;
    console.log("Decrement value is :", s);
  } else {
    console.log("The value is greater than 10");
  }
  return s;
}
let t = 1;
let v = decrement(t);
