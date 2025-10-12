const TNode = require("./Tnode");

class BinarySearchTree {
    constructor(root) {
        if (root !== undefined) {
            this.root = new TNode(root);
        } else {
            this.root = null;
        }
    }


    add(value) {
        if (this.root === null) {
            this.root = new TNode(value);
        } else {
            this.addNodeHelper(this.root, value);
        }
    }

    addNodeHelper(node, value) {
        if (value < node.value) {
            if (node.left === null) {
                node.left = new TNode(value);
            } else {
                this.addNodeHelper(node.left, value);
            }
        } else {
            if (node.right === null) {
                node.right = new TNode(value);
            } else {
                this.addNodeHelper(node.right, value);
            }
        }
    }


    remove(value) {
        this.root = this.removeNodeHelper(this.root, value);

    }

    removeNodeHelper(node, value) {
        if (node === null) return null;

        if (value < node.value) {
            node.left = this.removeNodeHelper(node.left, value);
        } else if (value > node.value) {
            node.right = this.removeNodeHelper(node.right, value);
        } else {
           
            if (node.left === null && node.right === null) {
                return null; 
            } else if (node.left === null) {
                return node.right; 
            } else if (node.right === null) {
                return node.left; 
            } else {
                
                const minValue = this.findMinValue(node.right);
                node.value = minValue;
                node.right = this.removeNodeHelper(node.right, minValue);
            }
        }
        return node;
    }

    findMinValue(node) {
        while (node.left !== null) {
            node = node.left;
        }
        return node.value;
    }

    contains(value) {
        if (this.root === null) {
            return false;
        }
        return this.containsNodeHelper(this.root, value);
    }
    containsNodeHelper(node, value) {
        if (node === null) return false;
        if (value === node.value) return true;
        if (value < node.value) {
            return this.containsNodeHelper(node.left, value);
        } else {
            return this.containsNodeHelper(node.right, value);
        }
    }
}
module.exports = BinarySearchTree;