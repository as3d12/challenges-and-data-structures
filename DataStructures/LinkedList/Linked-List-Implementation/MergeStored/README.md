# Merge Two Sorted Linked Lists (Build New List)

## Problem Domain

Given two **sorted** singly linked lists, create and return a **new** linked list that contains all nodes’ values from both lists in **sorted** order.
This implementation collects values, sorts them, and builds a fresh list (it does **not** merge in-place).

> Note: Your current signature uses `list1 = []` and `list2 = []` defaults, but the function expects **LinkedList** objects with a `.head`. Consider defaulting to `null` or requiring arguments.

## Inputs and Expected Outputs

### Input

* Two sorted singly linked lists: `list1`, `list2` (each has `.head`, nodes have `.value`, `.next`)
* Method call: `mergeStoredLists(list1, list2)`

### Expected Output

* A **new** `LinkedList` instance whose nodes contain all values from `list1` and `list2`, sorted ascending.
* Original input lists remain unchanged.

### Examples

```
Input:
list1: Head -> [1] -> [3] -> [5] -> Null
list2: Head -> [2] -> [4] -> [6] -> Null
Output:
Head -> [1] -> [2] -> [3] -> [4] -> [5] -> [6] -> Null
```

```
Input:
list1: Head -> [10] -> Null
list2: Head -> Null
Output:
Head -> [10] -> Null
```

```
Input:
list1: Head -> Null
list2: Head -> Null
Output:
Head -> Null
```

```
Input (with duplicates):
list1: Head -> [1] -> [2] -> [2] -> Null
list2: Head -> [2] -> [3] -> Null
Output:
Head -> [1] -> [2] -> [2] -> [2] -> [3] -> Null
```

## Edge Cases

1. **Both empty**

   * Input: `list1.head = null`, `list2.head = null`
   * Output: `Head -> Null`
   * Behavior: Return an empty list

2. **One empty**

   * Input: `list1` has nodes, `list2` is empty (or vice versa)
   * Output: Identical to the non-empty list’s values

3. **Duplicates**

   * Input: Lists may contain overlapping equal values
   * Output: All duplicates preserved in sorted order


## Visual

### Before:

```
list1: [Head] -> [1] -> [3] -> [5] -> None
list2: [Head] -> [2] -> [4] -> [6] -> None
```

### After:

```
merged: [Head] -> [1] -> [2] -> [3] -> [4] -> [5] -> [6] -> None
```

### Process (array + sort approach):

```
Collect values from list1: [1, 3, 5]
Collect values from list2: [2, 4, 6]
Combined: [1, 3, 5, 2, 4, 6]
Sort -> [1, 2, 3, 4, 5, 6]
Build new list from sorted array
```

## Algorithm

### Current Approach (Array + Sort)

1. Initialize an empty array `values = []`.
2. Traverse `list1`, push each `value` into `values`.
3. Traverse `list2`, push each `value` into `values`.
4. Sort `values` ascending with `values.sort((a, b) => a - b)`.
5. Create a new `LinkedList` (`mergedList`) and append each value (e.g., via `add(value)`).
6. Return `mergedList`.

### Alternative Approach (Optimal One-Pass Merge)

If both lists are already **sorted**, you can merge in **O(n+m)** time without sorting and with **O(1)** extra space (besides the new nodes if you’re building a new list). Use two pointers (`p1`, `p2`) and advance the smaller one, appending as you go.

## Real Code

### Your Current Implementation (Array + Sort)

```js
mergeStoredLists(list1 = [], list2 = []) {
    let values = [];
    let current1 = list1.head;
    let current2 = list2.head;

    while (current1 !== null) {
        values.push(current1.value);
        current1 = current1.next;
    }
    while (current2 !== null) {
        values.push(current2.value);
        current2 = current2.next;
    }

    values.sort((a, b) => a - b);

    let mergedList = new LinkedList();
    for (let value of values) {
        mergedList.add(value);
    }
    return mergedList;
}
```

#### Small polish suggestions

* Prefer `mergeStoredLists(list1, list2)` without array defaults, or default to `null` and guard:

  ```js
  if (!list1 || !list1.head) list1 = { head: null };
  if (!list2 || !list2.head) list2 = { head: null };
  ```
* Ensure `LinkedList.add` appends in O(1) (keep a tail pointer) to avoid O(n²) rebuilding.





## Big O Time/Space Complexity

### Array + Sort (your current method)

* **Time:** O((n + m) · log(n + m)) for sorting
* **Space:** O(n + m) for the `values` array (plus node allocations when building the new list)

### One-Pass Merge (alternative)

* **Time:** O(n + m)
* **Space:** O(1) auxiliary (still allocating new nodes if you build a new list; truly O(1) extra only if you reuse existing nodes in-place)

