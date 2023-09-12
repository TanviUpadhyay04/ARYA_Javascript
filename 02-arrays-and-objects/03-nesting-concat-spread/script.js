let x;

const fruits = ['apple', 'pear', 'orange'];
const berries = ['strawberry', 'blueberry', 'raspberry'];

//fruits.push(berries); //Nesting is adding 1 array inside another

//x = fruits[3][1];

const allFruits = [fruits, berries];

x = allFruits[1][0];

//Concat

x = fruits.concat(berries);

//Spread Operator (...)

x = [...fruits, ...berries];

//Flatten Arrays
const arr = [1 , 2, [3, 4], 5 , [6, 7], 8];
x = arr.flat();

//Static Methods on array object

x = Array.isArray('Hello'); //checking if it is actual array

x = Array.from('12345'); // Takes string and converts it into array

const a = 1;
const b = 2;
const c = 3;

x = Array.of(a, b, c); //combines a,b,c to make an array

console.log(x);