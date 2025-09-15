# Linked List Rotate by K

## Problem Domain

Given a singly linked list and an integer `k`, rotate the list to the **left** by `k` places.

* If `k` is negative → rotate to the **right** by `|k|`.
* If `k` is `0` → the list remains unchanged.
* If `k` is larger than the list length → rotate by `k % length`.

---

## Inputs and Expected Outputs

**Example 1:**

```
Input:  Head → 1 → 2 → 3 → 4 → 5 → 6 → Null, k = 2
Output: Head → 3 → 4 → 5 → 6 → 1 → 2 → Null
```

**Example 2:**

```
Input:  Head → 10 → 20 → 30 → 40 → 50 → Null, k = 3
Output: Head → 40 → 50 → 10 → 20 → 30 → Null
```

**Example 3:**

```
Input:  Head → 5 → 10 → 15 → 20 → Null, k = 1
Output: Head → 10 → 15 → 20 → 5 → Null
```

---

## Edge Cases

* **k < 0** → rotate right.
* **k = 0** → no rotation.
* **k ≥ list length** → rotate by `k % length`.
* **Empty list** → return empty.
* **Single-node list** → unchanged.

---

## Visual

Example: Rotate `Head → 1 → 2 → 3 → 4 → 5 → 6 → Null` by `k = 2`

```
Before:  1 → 2 → 3 → 4 → 5 → 6 → Null
                      ↑
Cut here (k=2)

After:   3 → 4 → 5 → 6 → 1 → 2 → Null
```

---

## Algorithm

1. Compute the **length** of the list and find the tail.
2. Normalize `k = ((k % length) + length) % length`.
3. If `k == 0`, return the head.
4. Link the tail to the head (circular list).
5. Traverse `k-1` steps to find the new tail.
6. The next node becomes the **new head**.
7. Break the circular link.

---

## Real Code (JavaScript)

```js
LinkedList.prototype.rotateLeft = function(k) {
  if (!this.head || !this.head.next || k === 0) return this.head;

  // Step 1: get length and tail
  let len = 1, tail = this.head;
  while (tail.next) {
    tail = tail.next;
    len++;
  }

  // Step 2: normalize k
  k = ((k % len) + len) % len;
  if (k === 0) return this.head;

  // Step 3: make circular
  tail.next = this.head;

  // Step 4: move to new tail
  let cut = this.head;
  for (let i = 0; i < k - 1; i++) cut = cut.next;

  // Step 5: rewire
  this.head = cut.next;
  cut.next = null;

  return this.head;
};
```

---

## Big O Time/Space Complexity

* **Time Complexity:**

  * O(n) → one pass to find length, another pass to find new tail.
* **Space Complexity:**

  * O(1) → no extra memory used, only pointers updated.

