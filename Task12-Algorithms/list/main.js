import {List} from './List.js'

let list = new List();

list.putToEnd("0");
list.putToEnd("1");
list.putToEnd("3");
console.log(list);

console.log(list.print());

console.log('list.setByIndex(2,"2")')
list.setByIndex(2,"2")
console.log(list.print());

console.log('list.edit(1,"11")');
list.edit(1,"11");
console.log(list.print());


console.log('list.getByIndex(1)');
console.log(list.getByIndex(1));

console.log("list.dellete(2);");
list.dellete(2);
console.log(list.print());


