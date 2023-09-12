const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//const evenNumbers = numbers.filter(function (number) {
  //         return number % 2 == 0;
//});


//Short Method
// const evenNumbers = numbers.filter((number)  => number % 2 === 0);

//Same with ForEach
const evenNumbers = [];
numbers.forEach((number) => {
    if (number % 2 === 0){
        evenNumbers.push(number);
    }
});

console.log(evenNumbers);

const companies = [
  { name: 'Company One', category: 'Finance', start: 1981, end: 2004},
  { name: 'Company Two', category: 'Retail', start: 1992, end: 2008},
  { name: 'Company Three', category: 'Finance', start: 1981, end: 2004},
  { name: 'Company Four', category: 'Finance', start: 1981, end: 2004},
  { name: 'Company Five', category: 'Finance', start: 1981, end: 2004},
  { name: 'Company Six', category: 'Finance', start: 1981, end: 2004},
  { name: 'Company Seven', category: 'Finance', start: 1981, end: 2004},
  { name: 'Company Eight', category: 'Finance', start: 1981, end: 2004},
  { name: 'Company Nine', category: 'Finance', start: 1981, end: 2004},
];
