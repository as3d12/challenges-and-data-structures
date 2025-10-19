const BinaryTree = require('../BinaryTree');
const TNode = require('../Tnode');
const FindSecondMax = require('./FindSecondMax');

describe('FindSecondMax', () => {
    
    test('should find the second maximum value in a binary tree', () => {
        const tree = new BinaryTree();
        tree.root = new TNode(10);
        tree.root.left = new TNode(5);
        tree.root.right = new TNode(20);
        tree.root.left.left = new TNode(3);
        tree.root.left.right = new TNode(7);
        tree.root.right.left = new TNode(15);
        tree.root.right.right = new TNode(25);
        
        const result = FindSecondMax(tree);
        expect(result).toBe(20);
    });

    test('should return null for a tree with only one node', () => {
        const tree = new BinaryTree();
        tree.root = new TNode(10);
        
        const result = FindSecondMax(tree);
        expect(result).toBe(null);
    });

    test('should return null for an empty tree', () => {
        const tree = new BinaryTree();
        
        const result = FindSecondMax(tree);
        expect(result).toBe(null);
    });

    test('should find the second maximum value in a tree with negative values', () => {
        const tree = new BinaryTree();
        tree.root = new TNode(-10);
        tree.root.left = new TNode(-20);
        tree.root.right = new TNode(-5);
        tree.root.left.left = new TNode(-30);
        tree.root.right.right = new TNode(-1);
        
        const result = FindSecondMax(tree);
        expect(result).toBe(-5);
    });

    test('should handle duplicate values correctly', () => {
        const tree = new BinaryTree();
        tree.root = new TNode(20);
        tree.root.left = new TNode(10);
        tree.root.right = new TNode(20);
        tree.root.left.left = new TNode(5);
        tree.root.left.right = new TNode(15);
        
        const result = FindSecondMax(tree);
        expect(result).toBe(15);
    });

    test('should find the second maximum value in a tree with two nodes', () => {
        const tree = new BinaryTree();
        tree.root = new TNode(10);
        tree.root.left = new TNode(5);
        
        const result = FindSecondMax(tree);
        expect(result).toBe(5);
    });

    test('should return null for a tree with all duplicate values', () => {
        const tree = new BinaryTree();
        tree.root = new TNode(10);
        tree.root.left = new TNode(10);
        tree.root.right = new TNode(10);
        
        const result = FindSecondMax(tree);
        expect(result).toBe(null);
    });

    test('should find the second maximum value in a tree with mixed positive and negative values', () => {
        const tree = new BinaryTree();
        tree.root = new TNode(0);
        tree.root.left = new TNode(-10);
        tree.root.right = new TNode(10);
        tree.root.left.left = new TNode(-20);
        tree.root.right.right = new TNode(20);
        
        const result = FindSecondMax(tree);
        expect(result).toBe(10);
    });
});
