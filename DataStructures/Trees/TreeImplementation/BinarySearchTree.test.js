const BinarySearchTree = require('./BinarySearchTree');

describe('BinarySearchTree', () => {
  let bst;

  beforeEach(() => {
    bst = new BinarySearchTree();
  });

  describe('Constructor', () => {
    test('should create empty BST when no root provided', () => {
      expect(bst.root).toBeNull();
    });

    test('should create BST with root value when provided', () => {
      const bstWithRoot = new BinarySearchTree(10);
      expect(bstWithRoot.root.value).toBe(10);
      expect(bstWithRoot.root.left).toBeNull();
      expect(bstWithRoot.root.right).toBeNull();
    });
  });

  describe('Adding a node', () => {
    test('should add root node to empty tree', () => {
      bst.add(10);
      expect(bst.root.value).toBe(10);
      expect(bst.root.left).toBeNull();
      expect(bst.root.right).toBeNull();
    });

    test('should add nodes to correct positions', () => {
      bst.add(10);
      bst.add(5);
      bst.add(15);
      bst.add(3);
      bst.add(7);
      bst.add(12);
      bst.add(18);

      expect(bst.root.value).toBe(10);
      expect(bst.root.left.value).toBe(5);
      expect(bst.root.right.value).toBe(15);
      expect(bst.root.left.left.value).toBe(3);
      expect(bst.root.left.right.value).toBe(7);
      expect(bst.root.right.left.value).toBe(12);
      expect(bst.root.right.right.value).toBe(18);
    });

    test('should handle duplicate values by adding to right', () => {
      bst.add(10);
      bst.add(10);
      expect(bst.root.value).toBe(10);
      expect(bst.root.right.value).toBe(10);
      expect(bst.root.left).toBeNull();
    });
  });

  describe('Checking if a node exists', () => {
    beforeEach(() => {
      bst.add(10);
      bst.add(5);
      bst.add(15);
      bst.add(3);
      bst.add(7);
      bst.add(12);
      bst.add(18);
    });

    test('should return true for existing values', () => {
      expect(bst.contains(10)).toBe(true);
      expect(bst.contains(5)).toBe(true);
      expect(bst.contains(15)).toBe(true);
      expect(bst.contains(3)).toBe(true);
      expect(bst.contains(7)).toBe(true);
      expect(bst.contains(12)).toBe(true);
      expect(bst.contains(18)).toBe(true);
    });

    test('should return false for non-existing values', () => {
      expect(bst.contains(1)).toBe(false);
      expect(bst.contains(6)).toBe(false);
      expect(bst.contains(11)).toBe(false);
      expect(bst.contains(20)).toBe(false);
    });

    test('should return false for empty tree', () => {
      const emptyBst = new BinarySearchTree();
      expect(emptyBst.contains(10)).toBe(false);
    });
  });

  describe('Removing a node', () => {
    beforeEach(() => {
      bst.add(10);
      bst.add(5);
      bst.add(15);
      bst.add(3);
      bst.add(7);
      bst.add(12);
      bst.add(18);
    });

    test('should remove leaf nodes correctly', () => {
      bst.remove(3);
      expect(bst.contains(3)).toBe(false);
      expect(bst.root.left.left).toBeNull();
      
      bst.remove(18);
      expect(bst.contains(18)).toBe(false);
      expect(bst.root.right.right).toBeNull();
    });

    test('should remove nodes with one child correctly', () => {
      // Add a node with only right child
      bst.add(2);
      bst.remove(3); // 3 now has only left child (2)
      expect(bst.contains(3)).toBe(false);
      expect(bst.contains(2)).toBe(true);
      expect(bst.root.left.left.value).toBe(2);
    });

    test('should remove nodes with two children correctly', () => {
      bst.remove(5); // Node with two children
      expect(bst.contains(5)).toBe(false);
      
      // Check that tree structure is maintained
      expect(bst.contains(3)).toBe(true);
      expect(bst.contains(7)).toBe(true);
      expect(bst.root.left.value).toBe(7); // 7 should replace 5
    });

    test('should remove root node correctly', () => {
      bst.remove(10);
      expect(bst.contains(10)).toBe(false);
      expect(bst.root.value).toBe(12); // 12 should replace 10
      
      // Verify all other nodes still exist
      expect(bst.contains(5)).toBe(true);
      expect(bst.contains(15)).toBe(true);
      expect(bst.contains(3)).toBe(true);
      expect(bst.contains(7)).toBe(true);
      expect(bst.contains(18)).toBe(true);
    });

    test('should handle removing non-existing values gracefully', () => {
      const originalStructure = {
        root: bst.root.value,
        leftChild: bst.root.left.value,
        rightChild: bst.root.right.value
      };
      
      bst.remove(100); // Non-existing value
      
      // Tree structure should remain unchanged
      expect(bst.root.value).toBe(originalStructure.root);
      expect(bst.root.left.value).toBe(originalStructure.leftChild);
      expect(bst.root.right.value).toBe(originalStructure.rightChild);
    });

    test('should handle removing from empty tree', () => {
      const emptyBst = new BinarySearchTree();
      expect(() => emptyBst.remove(10)).not.toThrow();
      expect(emptyBst.root).toBeNull();
    });

    test('should remove all nodes and leave empty tree', () => {
      const values = [10, 5, 15, 3, 7, 12, 18];
      values.forEach(value => bst.remove(value));
      
      values.forEach(value => {
        expect(bst.contains(value)).toBe(false);
      });
      
      expect(bst.root).toBeNull();
    });
  });
});