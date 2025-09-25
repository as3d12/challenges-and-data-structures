const Node = require("./Node");


class MinStack {
  constructor() {
    this.topNode = null;
  }

 
  push(value) {
    if (this.topNode === null) {
      this.topNode = new Node(value, value);
    } else {
      const newMin = Math.min(value, this.topNode.min);
      const newNode = new Node(value, newMin, this.topNode);
      this.topNode = newNode;
    }
  }

 
  pop() {
    if (this.topNode === null) return null;
    const poppedValue = this.topNode.value;
    this.topNode = this.topNode.next;
    return poppedValue;
  }

 
  top() {
    if (this.topNode === null) return null;
    return this.topNode.value;
  }


  getMin() {
    if (this.topNode === null) return null;
    return this.topNode.min;
  }

  
  printStack() {
    let current = this.topNode;
    let output = "Top -> ";
    while (current) {
      output += current.value + " -> ";
      current = current.next;
    }
    console.log(output.slice(0, -4)); 
  }

  
  isEmpty() {
    return this.topNode === null;
  }
}

module.exports = MinStack;
