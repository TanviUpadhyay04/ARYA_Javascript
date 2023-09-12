let x;

const arr = [34, 55, 95, 20, 15];

//arr.push(100); //add 100 to the array

//arr.pop(); //remove 100 from the array

//arr.unshift(99); //add 99 to the start

//arr.shift(); //remove 99

//arr.reverse(); //reverse the array

x = arr.includes(200);

x = arr.indexOf(15); //index at which no is present

x = arr.slice(1, 4); //only these many elements will be present in array

//x = arr.splice(1, 4);

//x = arr.splice(3 , 1);

x = arr.splice(1, 4).reverse().toString().charAt(0);

console.log(x, arr);