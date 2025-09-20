const Node = require("./Node");

class Stack {
  constructor() {
    this.top = null;
  }

  push(value) {
  
    const newNode = new Node(value);

    newNode.next = this.top;

    this.top = newNode;
  }

  pop() {

    if (!this.top) return "cannot pop because the stack is empty";

    const removed = this.top.value;

    this.top = this.top.next;

    return removed;
  }

  peek() {

    if (this.top) {
      return this.top.value;
    } else {
      return "Stack is Empty";
    }
  }

  isEmpty() {

    return this.top === null;
  }
}

module.exports = Stack;
