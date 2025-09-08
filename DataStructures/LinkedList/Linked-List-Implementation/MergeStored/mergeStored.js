const LinkedList = require("../linkedList.js");


const list1 = new LinkedList();
const list2 = new LinkedList();

list1.add(10);
list1.add(20);
list1.add(30);

list1.printList();

list2.add(5);
list2.add(15);
list2.add(25);
list2.add(35);


list2.printList();

const mergedList = list1.mergeStoredLists(list1, list2);
mergedList.printList();
