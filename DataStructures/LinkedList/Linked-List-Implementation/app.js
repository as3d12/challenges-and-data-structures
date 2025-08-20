const LinkedList = require("./linkedList");

const list = new LinkedList();
list.add(5);
list.add(10);
list.add(20);
list.add(30);
list.printList();  

list.remove(10);
list.remove(100);
list.printList();  

console.log(list.includes(20));  
console.log(list.includes(10));  

list.insertAt(15, 2);
list.printList();  
