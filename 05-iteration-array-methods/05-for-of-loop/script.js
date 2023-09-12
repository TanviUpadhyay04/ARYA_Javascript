const items = ['book', 'table', 'chair', 'kite'];
const users = [
    { name: 'Brad'}, { name:'Kate'}, { name: 'Steve'}];


//for(const item of items){
  //  console.log(item);
//}

for(const user of users){
    console.log(user.name);
}

//Loop over strings
const str = 'hello world';

for(const letter of str){
    console.log(letter);
}

//Loop over Maps
const map = new Map();
map.set('name', 'John');
map.set('age', 30);

for(const [key, value] of map) {
    console.log(key, value);
}