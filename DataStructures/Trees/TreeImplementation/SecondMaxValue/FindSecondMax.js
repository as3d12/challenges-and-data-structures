const BinaryTree = require('../BinaryTree');
const TNode = require('../Tnode');

const FindSecondMax = (tree) => {
    if (!tree.root) {
        return null;
    }
    
   
    const values = [];
    
    function inOrderTraversal(node) {
        if (node !== null) {
            inOrderTraversal(node.left);
            values.push(node.value);
            inOrderTraversal(node.right);
        }
    }
    
    inOrderTraversal(tree.root);
    
    
    let max = null;
    let secondMax = null;

    for (let value of values) {
        if (max === null || value > max) {
            secondMax = max;
            max = value;
        } else if (secondMax === null || (value > secondMax && value < max)) {
            secondMax = value;
        }
    }

    return secondMax;
};

module.exports = FindSecondMax;
