//This is a single line of code

/* Multiline comment
console.log(100);

console.log('Hello World');

console.log(20, 'Hello', true);

*/
const x=100;

console.log(x);

console.error('Alert');

console.warn('Warning');

console.table({name: 'Brad', email: 'brad@gmail.com'});

console.group('simple');
console.log(x);
console.error('Alert');
console.warn('Warning');
console.groupEnd();

const styles = 'padding: 10px; background-color:white; color:green';

console.log('%cHello World',styles)

//String
const firstName = 'Sara';

//Number
const age = 30;
const temp = 98.9;

//Boolean

const hasKids = true;

//Null
const aptNumber = null;

//Undefined
let score;

//Symbol
const id = Symbol('id');

//BigInt
const n = 90034968974634670n;

//Reference Types

const numbers = [1, 2, 3, 4]

const person = {
    name: 'Brad',
};

function sayHello() {
    console.log('Hello');
}
const output = sayHello;

console.log(output, typeof output);

