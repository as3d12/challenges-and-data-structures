const BinaryTree = require('../BinaryTree');
const TNode = require('../Tnode');
const LeafSum = require('./FindLeafSum');

describe('LeafSum', () => {
  test('Test calculating the sum of all leaf nodes in a binary tree using the provided example', () => {

    const tree = new BinaryTree(9);
    tree.root.left = new TNode(8);
    tree.root.right = new TNode(12);
    tree.root.left.left = new TNode(3);
    tree.root.left.right = new TNode(7);
    tree.root.right.right = new TNode(17);
    tree.root.left.left.left = new TNode(23);

    const result = LeafSum(tree);
    expect(result).toBe(47);
  });

  test('Test calculating the sum of all leaf nodes in a binary tree using example with negative leaf values', () => {
   
    const tree = new BinaryTree(10);
    tree.root.left = new TNode(5);
    tree.root.right = new TNode(-3);
    tree.root.left.left = new TNode(-8);
    tree.root.left.right = new TNode(2);
    tree.root.right.right = new TNode(15);

    const result = LeafSum(tree);
    expect(result).toBe(9);
  });

  test('Test handling exceptions - empty tree', () => {
    const tree = new BinaryTree();
    const result = LeafSum(tree);
    expect(result).toBe(0);
  });

  test('Test handling exceptions - null tree', () => {
    expect(() => LeafSum(null)).toThrow('Error calculating leaf sum: Tree cannot be null or undefined');
  });

  test('Test handling exceptions - undefined tree', () => {
    expect(() => LeafSum(undefined)).toThrow('Error calculating leaf sum: Tree cannot be null or undefined');
  });
});
