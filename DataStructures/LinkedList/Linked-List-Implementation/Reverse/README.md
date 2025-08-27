# Reverse Linked List

## Problem Domain

Use your previous linked list implementation to include a function that reverses the linked list. The function should not create a new list but it should reverse the linked list itself.

## Inputs and Expected Outputs

### Input
- A linked list with nodes containing integer values
- Method call: `reverse()`

### Expected Output
- The same linked list object, but with nodes reversed in order
- Returns the new head of the reversed list

### Example
```
Input: Head -> [1] -> [2] -> [3] -> [4] -> Null
Output: Head -> [4] -> [3] -> [2] -> [1] -> Null
```
```
Input: Head -> [10] -> Null
Output: Head -> [10] -> Null
```

```
Input: Null
Output: Head -> Null
```

## Edge Cases

1. **Empty list** (head is null)
   - Input: `Null`
   - Output: `Head -> Null`
   - Behavior: Function should handle gracefully without errors

2. **Single-node list** (no change after reversal)
   - Input: `Head -> [5] -> Null`
   - Output: `Head -> [5] -> Null`
   - Behavior: List remains unchanged

3. **List with duplicate values**
   - Input: `Head -> [1] -> [2] -> [2] -> [3] -> Null`
   - Output: `Head -> [3] -> [2] -> [2] -> [1] -> Null`
   - Behavior: Duplicates are preserved in reversed order

## Visual

### Before Reversal:
```
[Head] -> [1] -> [2] -> [3] -> [4] -> None
```

### After Reversal:
```
[Head] -> [4] -> [3] -> [2] -> [1] -> None
```

### Step-by-Step Process:
```
Step 1: [1] -> [2] -> [3] -> [4] -> None
        prev  curr   next

Step 2: None <- [1]   [2] -> [3] -> [4] -> None
        prev   curr   next

Step 3: None <- [1] <- [2]   [3] -> [4] -> None
               prev   curr   next

Step 4: None <- [1] <- [2] <- [3]   [4] -> None
                      prev   curr   next

Step 5: None <- [1] <- [2] <- [3] <- [4]   None
                             prev   curr   next
```

## Algorithm

### Iterative Approach (Recommended)

1. Initialize three pointers:
   - `previous = None`
   - `current = head`
   - `next_node = None`

2. Traverse the list while `current` is not None:
   - Store the next node: `next_node = current.next`
   - Reverse the current node's pointer: `current.next = previous`
   - Move pointers forward:
     - `previous = current`
     - `current = next_node`

3. Update head to point to the last processed node (stored in `previous`)

4. Return the new head

### Recursive Approach (Alternative)

1. Base case: If head is None or head.next is None, return head
2. Recursively reverse the rest of the list
3. Reverse the current connection
4. Return the new head

## Real Code
### LinkedList Class with Reverse Method

```js
Reverse() {
        if (this.head === null) {
            console.log('List is empty');
            return;
        }
        let prev = null;
        let current = this.head;
        let next = null;
        while (current !== null) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        this.head = prev;
    }
```

## Big O Time/Space Complexity

### Iterative Solution
- **Time Complexity: O(n)**
  - We visit each node exactly once
  - n = number of nodes in the linked list

- **Space Complexity: O(1)**
  - Only using a constant amount of extra space
  - Three pointer variables regardless of input size

### Recursive Solution
- **Time Complexity: O(n)**
  - We visit each node exactly once
  - n = number of nodes in the linked list

- **Space Complexity: O(n)**
  - Recursive call stack uses O(n) space
  - Each recursive call adds a frame to the stack

