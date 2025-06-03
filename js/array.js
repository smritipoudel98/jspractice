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
