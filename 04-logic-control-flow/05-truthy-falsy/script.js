//Falsy Values
//-false
//-0
//-"" 0r ''(Empty String)
//-null
//-undefined
//-NaN

//Truthy Values:
//-Everything else that is not falsy
//-true
//-'0' (0 in a string)
//-''(space in a string)
//-'false'(false in a string)
//- [] (empty array)
//- {} (empty object)
//- function () {} (empty function)


const x = 'false';

if(x){
    console.log('This is Truthy');
} else {
    console.log('This is Falsy');
}

console.log(Boolean(x));

//Truthy and Falsy caveats
const children = 3;

if (!isNaN(children)) {
    console.log(`You have ${children} children`);
} else {
    console.log('Please enter no of children');
}

//Checking for empty arrays
const posts = ['Post One'];

if (posts.length > 0){
    console.log('List Posts');
} else{
    console.log('No posts To list');
}

//Checking for empty objects
const user = {};

if(Object.keys(user).length > 0){
    console.log('list user');
} else {
    console.log('No user');
}

//Loose Equality (==)
console.log(false === 0);
console.log('' === 0);
console.log(null === undefined);