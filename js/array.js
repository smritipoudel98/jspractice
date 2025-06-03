//map() method example
const letters = ["a", "b", "c"];
const withIndex = letters.map((letter, index) => `${index}:${letter}`);

console.log(withIndex); // ["0:a", "1:b", "2:c"]

//reduce() method example
const oldarray = [
  [1, 2],
  [3, 4],
  [5, 6],
];
const newarray = oldarray.reduce((acc, arr) => acc.concat(arr), []);
console.log(newarray); // [1, 2, 3, 4, 5, 6]

//filter() method example
const products = [
  { name: "Laptop", price: 999 },
  { name: "Phone", price: 699 },
  { name: "Tablet", price: 299 },
];
const new_products = products.filter((item) => item.price < 500);
console.log(new_products); // [{ name: "Tablet", price: 299 }]

//split() method example
const sentence = "Hello world from JavaScript";
const word = sentence.split(" "); // Split by space in each word
const words = sentence.split(""); // Split by comma in each text
console.log(word); // ["Hello", "world", "from", "JavaScript"]
console.log(words); // ["H", "e", "l", "l", "o", " ", "w", "o", "r", "l", "d", " ", "f", "r", "o", "m", " ", "J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]

//rest() method example
function sum(...numbers) {
  return numbers.map((current) => current * 2);
}
console.log(sum(1, 2, 3, 4, 5)); // [2, 4, 6, 8, 10]

//destructuring example
const colors = ["red", "green", "blue"];

// Destructuring
const [first, second, third] = colors;
console.log(first); // 'red'
console.log(second); // 'green'
console.log(third); // 'blue'

//destructuring function parameters example
function displayColors({ primary, secondary }) {
  console.log(`Primary color: ${primary}`);
  console.log(`Secondary color: ${secondary}`);
}
const colorPalette = {
  primary: "blue",
  secondary: "yellow",
};
displayColors(colorPalette);

//spread operator example
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combinedArray = [...array1, ...array2];
console.log(combinedArray); // [1, 2, 3, 4, 5, 6]

//spread operator with objects example
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const combinedObject = { ...obj1, ...obj2 };
console.log(combinedObject); // { a: 1, b: 2, c: 3, d: 4 }

//array destructuring with rest operator example
const numbers = [1, 2, 3, 4, 5];
const [firstNum, secondNum, ...restOfNumbers] = numbers;
console.log(firstNum); // 1
console.log(secondNum); // 2
console.log(restOfNumbers); // [3, 4, 5]

//control structure example
// if-else,switch,for,while,do-while
const age = 20;
if (age < 18) {
  console.log("You are a minor.");
} else if (age >= 18 && age < 65) {
  console.log("You are an adult.");
} else {
  console.log("You are a senior citizen.");
}

//function inside function example
function outerFunction(user) {
  function innerFunction(greeting) {
    return greeting + "," + user + "!";
  }
  return innerFunction("Hello");
}

console.log(outerFunction("Alice")); // Output: Hello, Alice!
//Using return greeting, name returns only name due to the comma operator.
// To combine greeting and name into a single string, use a template literal(${ greeting }, ${ name }!) or
// string concatenation(greeting + ', ' + name + '!').

//callback function example
function displayResult(result) {
  console.log("Result:", result);
}

function calculateSum(a, b, callback) {
  const sum = a + b;
  callback(sum); // Call the callback with the result
}

calculateSum(5, 3, displayResult); // Output: Result: 8

//primitive vs reference types example
//primitive
let a1 = 4;
let a2 = a1;
a2 = 3;
console.log(a1); // 4, primitive type (number) is copied by value
console.log(a2); // 3

let s1 = "hello";
let s2 = s1;
s2 = "world";
console.log(s1); // hello, primitive type (number) is copied by value
console.log(s2); //world
//reference
let arr1 = [1, 2, 3]; // Reference (array)
let arr2 = arr1; // Copy of reference
arr2[3] = 4;

console.log(arr1); // Output: [1, 2, 3, 4] (original modified)
console.log(arr2); // Output: [1, 2, 3, 4]

//join array
let arr = ["apple", "banana", "cherry"];
let joinedString = arr.join(" +");
console.log(joinedString); // Output: "apple + banana + cherry"

const container = document.getElementById("container");
const button = document.getElementById("btn");
button.classList.add("active");

button.addEventListener("click", () => {
  alert("Button clicked!");
});
