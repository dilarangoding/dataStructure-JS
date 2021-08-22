// Object Literal

let fruits = {
  name: 'grape',
  description: 'Popular and famous fruit.',
  colors: ['purple', 'green'],
  isSmall: true,
  order: 1,
  owner: 'Abdul',
}

// console.log(fruits['isSmall']);
// console.log(fruits.description);
// console.log(fruits.owner || 'Riyon');

let keys = Object.keys(fruits);
console.log(keys);
let values = Object.values(fruits);
console.log(values);

let entries = Object.entries(fruits);
console.log(entries);

fruits.price = 15000;
console.log(fruits);
fruits.price = 20000;
console.log(fruits);

delete fruits.price;
console.log(fruits);
