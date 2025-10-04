# Stack with Delete Middle Element

## Problem Domain

The goal is to implement a stack data structure that extends the basic stack functionality with an additional operation to delete the middle element. This challenge requires maintaining the LIFO (Last In, First Out) property of the stack while providing efficient access to remove the middle element.

### Requirements:
- Extend the existing Stack class with a `deleteMiddle()` method
- Remove the middle element from the stack without affecting the order of other elements
- Handle different stack sizes (odd and even number of elements)
- Use an auxiliary stack to achieve the deletion
- Maintain the original stack order after the operation

### Middle Element Definition:
- **For odd number of elements (n)**: Middle position = `Math.floor(n/2)` (0-indexed from top)
- **For even number of elements (n)**: Middle position = `Math.floor(n/2) - 1` (0-indexed from top)

## Inputs and Expected Outputs

### Example 1: Odd Number of Elements
**Input Stack:** [7, 14, 3, 8, 5] (top → 5 → 8 → 3 → 14 → 7)
- **Stack Size:** 5 elements (odd)
- **Middle Position:** `Math.floor(5/2) = 2` (0-indexed)
- **Element to Remove:** 3 (at position 2 from top)
- **Expected Output:** [7, 14, 8, 5] (top → 5 → 8 → 14 → 7)
- **Returned Value:** 3

### Example 2: Even Number of Elements
**Input Stack:** [7, 14, 8, 5, 2, 9, 11] (top → 11 → 9 → 2 → 5 → 8 → 14 → 7)
- **Stack Size:** 7 elements (odd, but let's consider a 4-element subset)
- **Input Stack:** [7, 14, 8, 5] (top → 5 → 8 → 14 → 7)
- **Stack Size:** 4 elements (even)
- **Middle Position:** `Math.floor(4/2) - 1 = 1` (0-indexed)
- **Element to Remove:** 8 (at position 1 from top)
- **Expected Output:** [7, 14, 5] (top → 5 → 14 → 7)
- **Returned Value:** 8

### Example 3: Single Element
**Input Stack:** [42]
- **Stack Size:** 1 element
- **Expected Output:** [] (empty stack)
- **Returned Value:** 42

### Example 4: Empty Stack
**Input Stack:** []
- **Stack Size:** 0 elements
- **Expected Output:** [] (remains empty)
- **Returned Value:** null

## Edge Cases

1. **Empty Stack**: 
   - Return `null` when attempting to delete from an empty stack
   - Stack remains unchanged

2. **Single Element Stack**:
   - Remove and return the only element
   - Stack becomes empty after operation

3. **Two Element Stack** (even):
   - Middle position = 0 (remove top element)
   - Stack contains one element after operation

4. **Large Stacks**:
   - Algorithm should work efficiently for any stack size
   - Proper handling of middle calculation for both odd and even sizes

5. **Consecutive Operations**:
   - Multiple `deleteMiddle()` calls should work correctly
   - Each operation recalculates the middle position

## Visual (Whiteboard Image)

```
Delete Middle Element Algorithm Flow:

Initial Stack (5 elements):     Temp Stack:        Final Stack:
┌─────┐                        ┌─────┐            ┌─────┐
│  5  │ ← top                  │     │            │  5  │ ← top
├─────┤                        ├─────┤            ├─────┤
│  8  │                        │     │            │  8  │
├─────┤                        ├─────┤            ├─────┤
│  3  │ ← middle (remove)      │     │            │ 14  │
├─────┤                        ├─────┤            ├─────┤
│ 14  │                        │     │            │  7  │
├─────┤                        ├─────┤            └─────┘
│  7  │                        │     │
└─────┘                        └─────┘

Step 1: Count elements (n=5)
Step 2: Calculate middle = floor(5/2) = 2
Step 3: Pop 2 elements to temp stack:
        Main: [7,14,3] | Temp: [8,5]
Step 4: Remove middle element (3)
        Main: [7,14] | Temp: [8,5]
Step 5: Push back from temp stack:
        Push 8: Main: [7,14,8] | Temp: [5]
        Push 5: Main: [7,14,8,5] | Temp: []
```

## Algorithm

### Step-by-Step Approach:

1. **Handle Edge Cases:**
   - If stack is empty, return `null`
   - If stack has one element, pop and return it

2. **Calculate Stack Size:**
   - Traverse the linked list to count total elements
   - Store count in variable `n`

3. **Determine Middle Position:**
   - If `n` is odd: `middlePosition = Math.floor(n/2)`
   - If `n` is even: `middlePosition = Math.floor(n/2) - 1`

4. **Use Temporary Stack:**
   - Create an auxiliary stack
   - Pop `middlePosition` elements from main stack to temp stack

5. **Remove Middle Element:**
   - Pop the middle element from main stack
   - Store this element to return later

6. **Restore Stack Order:**
   - Pop all elements from temp stack back to main stack
   - This maintains the original order (except for removed element)

7. **Return Removed Element:**
   - Return the middle element that was removed

### Pseudocode:
```
function deleteMiddle():
    if stack is empty:
        return null
    
    if stack has only one element:
        return pop()
    
    count = getSize()
    
    if count is even:
        middlePosition = floor(count/2) - 1
    else:
        middlePosition = floor(count/2)
    
    tempStack = new Stack()
    
    // Move elements before middle to temp stack
    for i from 0 to middlePosition-1:
        tempStack.push(this.pop())
    
    // Remove middle element
    removedElement = this.pop()
    
    // Restore elements from temp stack
    while tempStack is not empty:
        this.push(tempStack.pop())
    
    return removedElement
```

## Real Code

```javascript
const Stack = require("../Stack-And-Queue-Implementation/Stack");

class StackWithDeleteMiddle extends Stack {
    constructor() {
        super();
    }

    deleteMiddle() {
        // Handle edge case: empty stack
        if (this.isEmpty()) {
            return null;
        }

        // Handle edge case: stack with only one element
        if (this.top.next === null) {
            return this.pop();
        }

        // Count elements in the stack
        let count = this.getSize();
        
        // Calculate middle position according to requirements:
        // If n is even, middle = n/2 - 1
        // If n is odd, middle = n/2
        let middlePosition;
        if (count % 2 === 0) {
            middlePosition = Math.floor(count / 2) - 1;
        } else {
            middlePosition = Math.floor(count / 2);
        }

        // Use temporary stack to hold elements while reaching the middle
        const tempStack = new Stack();
        
        // Pop elements until we reach the middle position
        for (let i = 0; i < middlePosition; i++) {
            tempStack.push(this.pop());
        }
        
        // Remove the middle element
        const removedElement = this.pop();
        
        // Push the held elements back onto the main stack in original order
        while (!tempStack.isEmpty()) {
            this.push(tempStack.pop());
        }
        
        return removedElement;
    }

    // Helper method to get the size of the stack
    getSize() {
        let count = 0;
        let current = this.top;
        while (current !== null) {
            count++;
            current = current.next;
        }
        return count;
    }

    // Helper method to display stack contents
    displayStack() {
        if (this.isEmpty()) {
            return "Stack is empty";
        }
        
        let result = "Stack: Top";
        let current = this.top;
        while (current !== null) {
            result += ` -> ${current.value}`;
            current = current.next;
        }
        return result;
    }
}

module.exports = StackWithDeleteMiddle;
```

## Big O Time/Space Complexity

### Time Complexity: **O(n)**
- **Counting elements**: O(n) - traverse the entire stack once
- **Moving to temp stack**: O(k) where k = middlePosition ≤ n/2
- **Removing middle**: O(1) - single pop operation
- **Restoring from temp**: O(k) where k = middlePosition ≤ n/2
- **Overall**: O(n) + O(k) + O(1) + O(k) = O(n)

### Space Complexity: **O(n)**
- **Temporary stack**: O(k) where k ≤ n/2 in worst case
- **Variables**: O(1) for counting and positions
- **Overall**: O(k) = O(n/2) = O(n)

### Analysis:
- The algorithm is efficient with linear time complexity
- Space usage is optimized by only storing at most half the elements temporarily
- The approach maintains the original stack structure and order
- No additional data structures beyond the temporary stack are needed

### Comparison with Alternative Approaches:
1. **Array-based approach**: Would require O(n) space to convert entire stack
2. **Recursive approach**: Would use O(n) call stack space
3. **Two-stack approach**: Current implementation is optimal for space usage

The chosen implementation strikes a good balance between simplicity, efficiency, and maintaining the stack's integrity.
