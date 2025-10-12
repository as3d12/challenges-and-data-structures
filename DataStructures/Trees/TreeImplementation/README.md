# Trees Demo

This project contains implementations of Binary Tree and Binary Search Tree data structures in JavaScript, along with comprehensive unit tests using Jest.

## Whiteboard Analysis

### Problem Domain

This project implements two fundamental tree data structures:

- **Binary Tree**: A hierarchical data structure where each node has at most two children (left and right)
- **Binary Search Tree (BST)**: A binary tree with the ordering property where left subtree values < root < right subtree values

### Inputs and Expected Outputs

#### Binary Tree Traversals

- **Input**: A binary tree with nodes
- **Pre-order Output**: Root → Left → Right (e.g., [1, 2, 4, 5, 3])
- **In-order Output**: Left → Root → Right (e.g., [4, 2, 5, 1, 3])
- **Post-order Output**: Left → Right → Root (e.g., [4, 5, 2, 3, 1])

#### Binary Search Tree Operations

- **Add Input**: Value to insert → **Output**: Updated BST maintaining order property
- **Contains Input**: Value to search → **Output**: Boolean (true/false)
- **Remove Input**: Value to delete → **Output**: Updated BST with node removed

### Edge Cases

- Empty trees (null root)
- Single-node trees
- Removing nodes with 0, 1, or 2 children
- Duplicate values in BST
- Non-existent values in search/remove operations

### Visual Representation

```text
Example BST after adding [10, 5, 15, 3, 7, 12, 18]:

           10
          /  \
         5    15
        / \   / \
       3   7 12  18

Pre-order: [10, 5, 3, 7, 15, 12, 18]
In-order:  [3, 5, 7, 10, 12, 15, 18] (sorted!)
Post-order: [3, 7, 5, 12, 18, 15, 10]
```

### Algorithm

#### Tree Traversals

1. **Pre-order**: Visit root, traverse left, traverse right
2. **In-order**: Traverse left, visit root, traverse right  
3. **Post-order**: Traverse left, traverse right, visit root

#### BST Operations

1. **Add**: Compare with root, go left if smaller, right if larger/equal, insert when null found
2. **Search**: Compare with current node, go left/right until found or null
3. **Remove**: Three cases:
   - Leaf: Simply remove
   - One child: Replace with child
   - Two children: Replace with inorder successor (leftmost in right subtree)

### Real Code Implementation

```javascript
// BST Add Operation
add(value) {
    if (this.root === null) {
        this.root = new TNode(value);
    } else {
        this.addNodeHelper(this.root, value);
    }
}

// BST Remove Operation (handles all three cases)
removeNodeHelper(node, value) {
    if (node === null) return null;
    
    if (value < node.value) {
        node.left = this.removeNodeHelper(node.left, value);
    } else if (value > node.value) {
        node.right = this.removeNodeHelper(node.right, value);
    } else {
        // Node to be deleted found
        if (node.left === null && node.right === null) {
            return null; // Leaf node
        } else if (node.left === null) {
            return node.right; // Only right child
        } else if (node.right === null) {
            return node.left; // Only left child
        } else {
            // Two children: find inorder successor
            const minValue = this.findMinValue(node.right);
            node.value = minValue;
            node.right = this.removeNodeHelper(node.right, minValue);
        }
    }
    return node;
}
```

### Big O Time/Space Complexity

#### Binary Tree Traversals

- **Time Complexity**: O(n) - must visit every node once
- **Space Complexity**: O(h) - where h is height, due to recursion stack

#### Binary Search Tree Operations

- **Best/Average Case**: O(log n) - balanced tree
- **Worst Case**: O(n) - completely unbalanced (like a linked list)
- **Space Complexity**: O(h) for recursion stack

| Operation | Best Case | Average Case | Worst Case |
|-----------|-----------|--------------|------------|
| Add       | O(log n)  | O(log n)     | O(n)       |
| Search    | O(log n)  | O(log n)     | O(n)       |
| Remove    | O(log n)  | O(log n)     | O(n)       |

## Files

- `BinaryTree.js` - Binary Tree implementation with traversal methods
- `BinarySearchTree.js` - Binary Search Tree implementation with add, remove, and search operations
- `TNode.js` - Tree node class
- `App.js` - Example usage
- `BinaryTree.test.js` - Unit tests for Binary Tree
- `BinarySearchTree.test.js` - Unit tests for Binary Search Tree

## Features

### Binary Tree
- Pre-order traversal
- In-order traversal  
- Post-order traversal
- Helper methods for building trees

### Binary Search Tree
- Add nodes
- Remove nodes (handles all cases: leaf, one child, two children)
- Search for nodes
- Maintains BST property

## Testing

The project includes comprehensive unit tests covering:

### BinaryTree Tests:
- ✅ Pre-order traversal
- ✅ In-order traversal
- ✅ Post-order traversal

### BinarySearchTree Tests:
- ✅ Adding nodes
- ✅ Checking if nodes exist
- ✅ Removing nodes

## Running Tests

```bash
# Run all tests
npm test

# Run tests with coverage
npm test:coverage

# Run tests in watch mode
npm test:watch

# Run the demo app
npm start
```

## Test Coverage

Current test coverage:
- BinarySearchTree.js: 100% coverage
- TNode.js: 100% coverage  
- BinaryTree.js: 77.55% coverage

All 26 tests pass successfully!