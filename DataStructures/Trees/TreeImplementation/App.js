const BinaryTree = require("./BinaryTree");
const TNode = require("./Tnode");
const LeafSum = require("./LeafSum/FindLeafSum");

const Btree = new BinaryTree();

Btree.root = new TNode(9);
Btree.root.left = new TNode(8);
Btree.root.right = new TNode(12);
Btree.root.left.left = new TNode(3);
Btree.root.left.right = new TNode(7);
Btree.root.right.left = new TNode(17);
Btree.root.right.right = new TNode(23);
Btree.root.left.left.right = new TNode(4);

let leafSum = LeafSum(Btree);
console.log("Sum of all leaf nodes in the Binary Tree is: ", leafSum);