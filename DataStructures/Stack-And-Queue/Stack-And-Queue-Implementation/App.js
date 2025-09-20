const Stack = require("./Stack");
const Queue = require("./Queue");

// ------------------- Stack Demo -------------------
console.log("=== Stack Demo (LIFO) ===");

const stack = new Stack();

stack.push(10); // Stack: Top -> 10
stack.push(20); // Stack: Top -> 20 -> 10
stack.push(30); // Stack: Top -> 30 -> 20 -> 10

console.log(stack.pop());      // Output: 30  >> Last In First Out
console.log(stack.peek());     // Output: 20  >> Top value stays
console.log(stack.isEmpty());  // Output: false >> Still has 20, 10
console.log(stack.pop());      // Removes 20
console.log(stack.pop());      // Removes 10
console.log(stack.isEmpty());  // Output: true >> Now it's empty

// ------------------- Queue Demo -------------------
console.log("\n=== Queue Demo (FIFO) ===");

const queue = new Queue();

queue.enqueue(10); // Queue: Front -> 10
queue.enqueue(20); // Queue: Front -> 10 -> 20
queue.enqueue(30); // Queue: Front -> 10 -> 20 -> 30

console.log(queue.dequeue());   // Output: 10 >> First In First Out
console.log(queue.peek());      // Output: 20 >> Front value stays
console.log(queue.isEmpty());   // Output: false >> Still has 20, 30
console.log(queue.dequeue());   // Removes 20
console.log(queue.dequeue());   // Removes 30
console.log(queue.isEmpty());   // Output: true >> Now it's empty
