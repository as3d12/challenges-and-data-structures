const TNode = require("./Tnode");

class BinaryTree {
  constructor(root) {
    if (root !== undefined) {
      this.root = new TNode(root);
    } else {
      this.root = null;
    }
  }


  preOrderTraversal(node = this.root) {
    const result = [];
    if (node !== null) {
      this.preOrderTraversalHelper(node, result);
    }
    return result;
  }

  preOrderTraversalHelper(node, result) {
    if (node === null) return;
    result.push(node.value);
    this.preOrderTraversalHelper(node.left, result);
    this.preOrderTraversalHelper(node.right, result);
  }

  InOrderTraversal(node = this.root) {
    const result = [];
    if (node !== null) {
      this.InOrderTraversalHelper(node, result);
    }
    return result;
  }

  InOrderTraversalHelper(node, result) {
    if (node === null) return;
    this.InOrderTraversalHelper(node.left, result);
    result.push(node.value);
    this.InOrderTraversalHelper(node.right, result);
  }

  postOrderTraversal(node = this.root) {
    const result = [];
    if (node !== null) {
      this.postOrderTraversalHelper(node, result);
    }
    return result;
  }

  postOrderTraversalHelper(node, result) {
    if (node === null) return;
    this.postOrderTraversalHelper(node.left, result);
    this.postOrderTraversalHelper(node.right, result);
    result.push(node.value);
  }

  setLeftChild(node, value) {
    if (node) {
      node.left = new TNode(value);
      return node.left;
    }
    return null;
  }

  setRightChild(node, value) {
    if (node) {
      node.right = new TNode(value);
      return node.right;
    }
    return null;
  }

  printTree() {
    const queue = [];
    queue.push(this.root);
    while (queue.length > 0) {
      const current = queue.shift();
      console.log(current.value);
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
  }

}

module.exports = BinaryTree;
