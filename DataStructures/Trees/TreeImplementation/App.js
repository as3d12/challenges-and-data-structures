const BinaryTree = require("./BinaryTree");
const TNode = require("./Tnode");
const FindSecondMax = require("./SecondMaxValue/FindSecondMax");

const Btree = new BinaryTree();

Btree.root = new TNode(10);
Btree.root.left = new TNode(5);
Btree.root.right = new TNode(20);
Btree.root.left.left = new TNode(3);
Btree.root.left.right = new TNode(7);
Btree.root.right.left = new TNode(15);
Btree.root.right.right = new TNode(25);

let secondMax = FindSecondMax(Btree);
console.log("Second Maximum Value in the Binary Tree is: ", secondMax);