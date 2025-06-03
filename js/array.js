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
