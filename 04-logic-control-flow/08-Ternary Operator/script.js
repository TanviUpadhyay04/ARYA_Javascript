const age = 19;

//Using an if statement
if (age >= 18) {
    console.log('You can vote!');
} else {
    console.log('You cannot vote');
}

//Using a Ternary Operator
age>= 18 ? console.log('You can vote!') : console.log('You cannot vote!');

//Assigning a conditional value to a variable
const canVote = age >= 18 ? true : false;
const canVote2 = age >= 18 ? 'you can vote' : 'you cannot vote';
console.log(canVote);
console.log(canVote2);

//Multiple statements

const auth = true;
//let redirect;

//if (auth) {
  //  alert('Wekcome to the dashboard');
    //redirect = '/dashboard';
//} else {
  //  alert('access denied');
    //redirect = '/login'
//}

//const redirect = auth ? (alert('Welcome to the dashboard'),'/dashboard') : (alert('access denied'),'/login');
//console.log(redirect);

//auth ? console.log('Welcome to the dashboard') : null;
auth && console.log('Welcome to the dashboard');