//querySelectorAll()

const list = document.querySelectorAll('li');
console.log(list[1]);

//list[1].style.color= 'red';

//list.forEach(((item,index)=>{
   // item.style.color='red'


   // if(index==1){
//item.innerHTML=`Oranges
//<button class="remove-item btn-link text-red">
  //<i class="fa-solid fa-xmark"></i>
//</button>`

//}}
    //));

const listItems2 = document.getElementsByClassName('items');
listItems2.forEach(items=>items.style.color='black');
console.log(document.getElementsByTagName('li')[1].innerHTML);

