class Node {
  constructor(value, min, next = null) {
    this.value = value;
    this.min = min;   
    this.next = next;
  }
}

module.exports = Node;
