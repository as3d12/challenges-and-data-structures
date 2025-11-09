# Leaf Sum Challenge

## Problem Domain
Calculate the sum of all leaf nodes in a binary tree. A leaf node is defined as a node that does not have any children (both left and right child references are null). The method should traverse the tree, identify all leaf nodes, sum their values, and return the total.

## Inputs and Expected Outputs

### Example 1: Standard Tree
**Input:**
```
Tree Structure:
       9
      / \
     8   12
    / \   \
   3   7   17
  /
 23
```

**Expected Output:** `47`

**Explanation:** The leaf nodes are 23, 7, and 17. Sum = 23 + 7 + 17 = 47

### Example 2: Tree with Negative Values
**Input:**
```
Tree Structure:
       10
      / \
     5   -3
    / \    \
  -8   2   15
```

**Expected Output:** `9`

**Explanation:** The leaf nodes are -8, 2, and 15. Sum = -8 + 2 + 15 = 9

## Edge Cases

1. **Empty Tree:** If the tree has no root node, return `0`
2. **Single Node Tree:** If the tree has only a root node (which is also a leaf), return the root's value
3. **Null/Undefined Input:** Throw an error with descriptive message
4. **Invalid Node Values:** Throw an error if node values are not valid numbers
5. **Negative Values:** Handle negative numbers correctly in the sum calculation

## Visual



**Whiteboard Content:**
- Problem Domain: Calculate sum of all leaf nodes
- Input/Output Examples with tree diagrams
- Edge Cases: Empty tree, null input, negative values
- Visual Tree Representations showing leaf nodes highlighted
- Algorithm Steps with pseudocode
- Real Code Implementation in JavaScript
- Time/Space Complexity Analysis

## Algorithm

### Approach: Depth-First Traversal (Recursive)

1. **Input Validation:**
   - Check if tree is null/undefined → throw error
   - Check if tree.root is null → return 0

2. **Initialize:**
   - Create a variable `leafSum` to store the cumulative sum (initialized to 0)

3. **Define Recursive Traverse Function:**
   - Base case: If current node is null, return
   - Validation: Check if node value is a valid number
   - Leaf Check: If node has no left child AND no right child:
     - Add node's value to `leafSum`
   - Recursive calls:
     - Traverse left subtree
     - Traverse right subtree

4. **Execute Traversal:**
   - Call traverse function starting from root
   - Return the final `leafSum`

5. **Exception Handling:**
   - Wrap logic in try-catch block
   - Throw descriptive errors for any exceptions

### Pseudocode
```
FUNCTION LeafSum(tree):
    TRY:
        IF tree is null or undefined:
            THROW error "Tree cannot be null or undefined"
        
        IF tree.root is null:
            RETURN 0
        
        SET leafSum = 0
        
        FUNCTION traverse(node):
            IF node is null:
                RETURN
            
            IF node.value is not a valid number:
                THROW error "Node value must be valid number"
            
            IF node.left is null AND node.right is null:
                ADD node.value to leafSum
            
            CALL traverse(node.left)
            CALL traverse(node.right)
        
        CALL traverse(tree.root)
        RETURN leafSum
    
    CATCH error:
        THROW error with descriptive message
```

## Real Code

```javascript
const BinaryTree = require('../BinaryTree');
const TNode = require('../Tnode');

const LeafSum = (tree) => {
    try {
        // Validate input
        if (!tree) {
            throw new Error('Tree cannot be null or undefined');
        }

        // Handle empty tree
        if (!tree.root) {
            return 0;
        }

        let leafSum = 0;

        // Recursive traversal function
        function traverse(node) {
            if (node === null) {
                return;
            }

            // Validate node value
            if (typeof node.value !== 'number' || isNaN(node.value)) {
                throw new Error('Node value must be a valid number');
            }

            // Check if it's a leaf node
            if (node.left === null && node.right === null) {
                leafSum += node.value;
            }

            // Traverse left and right subtrees
            traverse(node.left);
            traverse(node.right);
        }

        traverse(tree.root);
        return leafSum;
    } catch (error) {
        // Handle exceptions with descriptive message
        throw new Error(`Error calculating leaf sum: ${error.message}`);
    }
};

module.exports = LeafSum;
```

## Big O Time/Space Complexity

### Time Complexity: **O(n)**
- **n** = number of nodes in the tree
- We visit each node exactly once during the traversal
- At each node, we perform constant-time operations (checking if it's a leaf, adding to sum)
- Therefore, time complexity is linear: O(n)

### Space Complexity: **O(h)**
- **h** = height of the tree
- Space is used by the recursive call stack
- In the worst case (skewed tree), h = n → O(n) space
- In the best case (balanced tree), h = log(n) → O(log n) space
- Average case for a balanced tree: O(log n)

### Complexity Analysis Summary
- **Best Case:** O(n) time, O(log n) space (balanced tree)
- **Average Case:** O(n) time, O(log n) space (reasonably balanced tree)
- **Worst Case:** O(n) time, O(n) space (completely skewed tree)

## Testing

Run the tests using:
```bash
npm test -- LeafSum/FindLeafSum.test.js
```

### Test Cases Covered:
1. ✅ Standard tree with multiple levels
2. ✅ Tree with negative leaf values
3. ✅ Empty tree (no root)
4. ✅ Null tree input (exception handling)
5. ✅ Undefined tree input (exception handling)
