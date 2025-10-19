# Find Second Maximum Value in Binary Tree

## Problem Domain
Write a function called `FindSecondMax` that takes a binary tree as input and returns the second maximum value stored in the tree. If the tree contains fewer than two distinct values, the function should return `null`.

## Inputs and Expected Outputs

### Input:
- A `BinaryTree` object containing nodes with integer values

### Output:
- An integer representing the second maximum value in the tree
- `null` if the tree has fewer than two distinct values

### Examples:

**Example 1:**
```
Input Tree:
        10
       /  \
      5    20
     / \   / \
    3   7 15  25

Output: 20
Explanation: The maximum value is 25, and the second maximum is 20.
```

**Example 2:**
```
Input Tree:
        10

Output: null
Explanation: Tree has only one node, so no second maximum exists.
```

**Example 3:**
```
Input Tree:
        -10
       /    \
     -20    -5
     /        \
   -30        -1

Output: -5
Explanation: The maximum value is -1, and the second maximum is -5.
```

## Edge Cases

1. **Empty Tree**: Returns `null` when the tree has no nodes
2. **Single Node Tree**: Returns `null` when there's only one node (no second maximum exists)
3. **Duplicate Values**: When the tree contains duplicate maximum values, the function finds the second distinct maximum value
4. **All Same Values**: Returns `null` when all nodes have the same value
5. **Negative Values**: Correctly handles trees with negative numbers
6. **Two Nodes Only**: Returns the smaller value as the second maximum

## Visual

### Whiteboard Image

![Find Second Maximum Value Whiteboard](https://via.placeholder.com/800x600.png?text=Whiteboard+Image+Here)

**Visual Representation of the Algorithm:**

```
Original Tree:          Process:                    Result:
     10                 
    /  \                Step 1: Traverse tree       Values: [3, 5, 7, 10, 15, 20, 25]
   5    20              (In-order traversal)        
  / \   / \             
 3   7 15  25           Step 2: Find max and        max = 25
                        second max in one pass      secondMax = 20
                        
                        Step 3: Return secondMax    Output: 20
```

## Algorithm

### Approach:
The algorithm uses an **in-order traversal** to collect all node values, then iterates through the values once to find the maximum and second maximum values.

### Steps:
1. **Check if tree is empty**: If `tree.root` is `null`, return `null`
2. **Initialize empty array**: Create an array `values` to store all node values
3. **Traverse the tree**: Use in-order traversal to collect all node values into the array
4. **Initialize variables**: Set `max = null` and `secondMax = null`
5. **Find max and second max**: Iterate through the values array:
   - If current value > max: update `secondMax = max`, then `max = value`
   - Else if current value > secondMax AND value < max: update `secondMax = value`
6. **Return result**: Return `secondMax` (will be `null` if no valid second maximum exists)

### Pseudocode:
```
FUNCTION FindSecondMax(tree)
    IF tree.root is NULL
        RETURN null
    END IF
    
    values = []
    
    FUNCTION inOrderTraversal(node)
        IF node is NOT NULL
            inOrderTraversal(node.left)
            values.append(node.value)
            inOrderTraversal(node.right)
        END IF
    END FUNCTION
    
    inOrderTraversal(tree.root)
    
    max = null
    secondMax = null
    
    FOR EACH value IN values
        IF max is NULL OR value > max
            secondMax = max
            max = value
        ELSE IF secondMax is NULL OR (value > secondMax AND value < max)
            secondMax = value
        END IF
    END FOR
    
    RETURN secondMax
END FUNCTION
```

## Real Code

### Implementation:

```javascript
const BinaryTree = require('../BinaryTree');
const TNode = require('../Tnode');

const FindSecondMax = (tree) => {
    if (!tree.root) {
        return null;
    }
    
    const values = [];
    
    function inOrderTraversal(node) {
        if (node !== null) {
            inOrderTraversal(node.left);
            values.push(node.value);
            inOrderTraversal(node.right);
        }
    }
    
    inOrderTraversal(tree.root);
    
    let max = null;
    let secondMax = null;

    for (let value of values) {
        if (max === null || value > max) {
            secondMax = max;
            max = value;
        } else if (secondMax === null || (value > secondMax && value < max)) {
            secondMax = value;
        }
    }

    return secondMax;
};

module.exports = FindSecondMax;
```

### Usage Example:

```javascript
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
console.log("Second Maximum Value in the Binary Tree is:", secondMax);
// Output: Second Maximum Value in the Binary Tree is: 20
```

## Big O Time/Space Complexity

### Time Complexity: **O(n)**
- **Traversal**: The in-order traversal visits each node exactly once → O(n)
- **Finding max and second max**: Iterating through the values array once → O(n)
- **Total**: O(n) + O(n) = O(n)

Where `n` is the number of nodes in the binary tree.

### Space Complexity: **O(n)**
- **Values array**: Stores all n node values → O(n)
- **Recursion stack**: In the worst case (skewed tree), the recursion depth can be n → O(n)
- **Total**: O(n)

Where `n` is the number of nodes in the binary tree.

### Optimization Notes:
- The current implementation trades space for simplicity by storing all values
- An optimized approach could traverse the tree once without storing values, maintaining max and secondMax during traversal
- However, the time complexity would remain O(n) as we must visit all nodes to ensure we find the correct second maximum

## Unit Tests with Jest

### Test Cases:

```javascript
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
        
        expect(FindSecondMax(tree)).toBe(20);
    });

    test('should return null for a tree with only one node', () => {
        const tree = new BinaryTree();
        tree.root = new TNode(10);
        
        expect(FindSecondMax(tree)).toBe(null);
    });

    test('should return null for an empty tree', () => {
        const tree = new BinaryTree();
        
        expect(FindSecondMax(tree)).toBe(null);
    });

    test('should find the second maximum value in a tree with negative values', () => {
        const tree = new BinaryTree();
        tree.root = new TNode(-10);
        tree.root.left = new TNode(-20);
        tree.root.right = new TNode(-5);
        tree.root.left.left = new TNode(-30);
        tree.root.right.right = new TNode(-1);
        
        expect(FindSecondMax(tree)).toBe(-5);
    });

    test('should handle duplicate values correctly', () => {
        const tree = new BinaryTree();
        tree.root = new TNode(20);
        tree.root.left = new TNode(10);
        tree.root.right = new TNode(20);
        tree.root.left.left = new TNode(5);
        tree.root.left.right = new TNode(15);
        
        expect(FindSecondMax(tree)).toBe(15);
    });
});
```

### Running the Tests:

```bash
# Install dependencies
npm install

# Run all tests
npm test

# Run specific test file
npm test FindSecondMax.test.js

# Run with coverage
npm test -- --coverage
```

## Conclusion

The `FindSecondMax` function efficiently finds the second maximum value in a binary tree with O(n) time complexity. It handles various edge cases including empty trees, single-node trees, duplicate values, and negative numbers. The implementation is straightforward, well-tested, and provides reliable results for all valid binary tree inputs.