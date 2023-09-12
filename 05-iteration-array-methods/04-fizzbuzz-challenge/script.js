// For loop
for (let i=1; i<= 100; i++)
{
    if(i%3 === 0 && i % 5 ===0){
        console.log('Fizzbuzz');
    }
    
    if(i % 3 ===0){
        console.log('Fizz');
    }else if(i%5 === 0) {
        console.log('Buzz');

    } else {
        console.log(i);
    }
}

//While loop
let j =1;

while(j <=100){
    for (let i=1; i<= 100; i++)
{
    if(j%3 === 0 && j % 5 ===0){
        console.log('Fizzbuzz');
    }
    
    if(j % 3 ===0){
        console.log('Fizz');
    }else if(j%5 === 0) {
        console.log('Buzz');

    } else {
        console.log(j);
    }
}
}