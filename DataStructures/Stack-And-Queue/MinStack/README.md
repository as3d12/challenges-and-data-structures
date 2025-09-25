
# MinStack – O(1) `getMin`


## Problem Domain
Design a stack that supports the following operations **in O(1) time** each:
- `push(x)`
- `pop()`
- `top()`
- `getMin()` → returns the minimum element currently in the stack

**Key idea:** store with every node the **minimum-so-far** at that depth.

---

## Inputs & Expected Outputs

Example sequence:
```txt
push(15), push(7), push(12), push(3)
getMin()  → 3
pop()     → (removes 3)
getMin()  → 7
push(2)
getMin()  → 2
```
Expected print view (top at left):  
`Top -> 2 -> 12 -> 7 -> 15`

---

## Edge Cases
- Empty stack: `top()`, `pop()`, `getMin()` should return `null` (or a sentinel) gracefully.
- Duplicated minima (e.g., pushing multiple `2`s) should still work—`min` is tracked per node.
- Monotonic inputs (strictly increasing or decreasing) are handled in O(1) per op.
- Large sequences: memory grows linearly with number of pushes (`O(n)` space).

---

## Visual
Each node carries both its value and the **min-so-far**:

```
Top
[ 2 | 2 ]  ← value|min
[12 | 7 ]
[ 7 | 7 ]
[15 |15 ]
Bottom
```

`getMin()` simply reads `top.min` → **O(1)**.

---

## Algorithm
```
push(x):
  if empty: top = Node(value=x, min=x)
  else:
    newMin = min(x, top.min)
    top = Node(value=x, min=newMin, next=top)

pop():
  if empty: return null
  val = top.value
  top = top.next
  return val

top():
  return empty ? null : top.value

getMin():
  return empty ? null : top.min
```

---

## Real Code (JavaScript / Node.js)

```js
class Node {
  constructor(value, min, next = null) {
    this.value = value;
    this.min = min;
    this.next = next;
  }
}

class MinStack {
  constructor() { this.topNode = null; }

  push(value) {
    if (!this.topNode) this.topNode = new Node(value, value);
    else this.topNode = new Node(value, Math.min(value, this.topNode.min), this.topNode);
  }

  pop() {
    if (!this.topNode) return null;
    const val = this.topNode.value;
    this.topNode = this.topNode.next;
    return val;
  }

  top() { return this.topNode ? this.topNode.value : null; }

  getMin() { return this.topNode ? this.topNode.min : null; }

  isEmpty() { return this.topNode === null; }
}

module.exports = MinStack;
```

---

## Big-O Time / Space Complexity
- **Time:** `push`, `pop`, `top`, `getMin` → **O(1)** each
- **Space:** One node per element storing `(value, min, next)` → **O(n)**

---

## How to Run
```bash
node app.js         # demo run
npm test            # run Jest tests
```

> See the whiteboard image above for a compact summary.
