const BinarySearchTree = require("./BinarySearchTree");

const bst = new BinarySearchTree();

bst.add(10);
bst.add(5);

bst.add(15);
bst.add(7);

console.log(bst.contains(7)); 
console.log(bst.contains(20));
bst.remove(5);
console.log(bst.contains(5));