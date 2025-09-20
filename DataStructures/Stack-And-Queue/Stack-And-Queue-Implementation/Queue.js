const Node = require("./Node");

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
  }

  enqueue(value) {
    const newNode = new Node(value);

    if (!this.front) {
      // queue is empty
      this.front = this.rear = newNode;
    } else {
      this.rear.next = newNode;
      this.rear = newNode;
    }
  }

  dequeue() {
    if (!this.front) return "cannot dequeue because the queue is empty";

    const removed = this.front.value;
    this.front = this.front.next;

    if (!this.front) {
      this.rear = null; // queue is empty now
    }

    return removed;
  }

  peek() {
    return this.front ? this.front.value : "Queue is Empty";
  }

  isEmpty() {
    return this.front === null;
  }
}

module.exports = Queue;
