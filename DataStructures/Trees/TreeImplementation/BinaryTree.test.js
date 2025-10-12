const BinaryTree = require('./BinaryTree');
const TNode = require('./Tnode');

describe('BinaryTree', () => {
  let tree;

  beforeEach(() => {
    
    tree = new BinaryTree(1);
    tree.setLeftChild(tree.root, 2);
    tree.setRightChild(tree.root, 3);
    tree.setLeftChild(tree.root.left, 4);
    tree.setRightChild(tree.root.left, 5);
  });

  describe('Constructor', () => {
    test('should create tree with root value', () => {
      const newTree = new BinaryTree(10);
      expect(newTree.root.value).toBe(10);
      expect(newTree.root.left).toBeNull();
      expect(newTree.root.right).toBeNull();
    });

    test('should create empty tree when no root provided', () => {
      const emptyTree = new BinaryTree();
      expect(emptyTree.root).toBeNull();
    });
  });

  describe('Pre-order Traversal', () => {
    test('should return correct pre-order traversal', () => {
      const result = tree.preOrderTraversal();
      expect(result).toEqual([1, 2, 4, 5, 3]);
    });

    test('should return empty array for empty tree', () => {
      const emptyTree = new BinaryTree();
      const result = emptyTree.preOrderTraversal();
      expect(result).toEqual([]);
    });

    test('should return single value for tree with only root', () => {
      const singleTree = new BinaryTree(42);
      const result = singleTree.preOrderTraversal();
      expect(result).toEqual([42]);
    });
  });

  describe('In-order Traversal', () => {
    test('should return correct in-order traversal', () => {
      const result = tree.InOrderTraversal();
      expect(result).toEqual([4, 2, 5, 1, 3]);
    });

    test('should return empty array for empty tree', () => {
      const emptyTree = new BinaryTree();
      const result = emptyTree.InOrderTraversal();
      expect(result).toEqual([]);
    });

    test('should return single value for tree with only root', () => {
      const singleTree = new BinaryTree(42);
      const result = singleTree.InOrderTraversal();
      expect(result).toEqual([42]);
    });
  });

  describe('Post-order Traversal', () => {
    test('should return correct post-order traversal', () => {
      const result = tree.postOrderTraversal();
      expect(result).toEqual([4, 5, 2, 3, 1]);
    });

    test('should return empty array for empty tree', () => {
      const emptyTree = new BinaryTree();
      const result = emptyTree.postOrderTraversal();
      expect(result).toEqual([]);
    });

    test('should return single value for tree with only root', () => {
      const singleTree = new BinaryTree(42);
      const result = singleTree.postOrderTraversal();
      expect(result).toEqual([42]);
    });
  });
});