const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const doubledNumbers = numbers.map((number)  => 'Number' + number * 2);

console.log(doubledNumbers);

//Save with forEach

const doubledNumbers2 = [];

numbers.forEach((number) => {
    doubledNumbers2.push(number * 2);
});

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

//Create an array of company names
const companyNames = companies.map((company) => company.name);
//console.log(companyNames);

//Create an array with just company and category
const companyInfo = companies.map((company) => {
    return {
        name: company.name,
        category: company.category,
    };
});

//Create an array of the length of each company in years
const companyYears = companies.map((company) => {
    return {
        name: company.name,
        length: company.end - company.start + 'years',
    };
});

//Chain map methods
const squareAndDouble = numbers
.map((number) => Math.sqrt(number))
.map((sqrt) => sqrt *2);

const squareAndDouble2 = numbers
.map(function (number){
    return Math.sqrt(number);
})
.map(function(sqrt){
    return sqrt = 2;
})
.map (function(sqrtDoubled){
    return sqrtDoubled * 3;
});

//Chaining different methods
const evenDouble = numbers
.filter((number) => number % 2 === 0)
.map((number) => number * 2);

console.log(evenDouble);