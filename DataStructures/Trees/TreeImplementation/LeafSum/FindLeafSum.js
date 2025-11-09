const BinaryTree = require('../BinaryTree');
const TNode = require('../Tnode');
const LeafSum = (tree) => {
    try {
        if (!tree) {
            throw new Error('Tree cannot be null or undefined');
        }

        if (!tree.root) {
            return 0;
        }

        let leafSum = 0;

        function traverse(node) {
            if (node === null) {
                return;
            }

            if (typeof node.value !== 'number' || isNaN(node.value)) {
                throw new Error('Node value must be a valid number');
            }

            if (node.left === null && node.right === null) {
                leafSum += node.value;
            }

            traverse(node.left);
            traverse(node.right);
        }

        traverse(tree.root);
        return leafSum;
    } catch (error) {
        throw new Error(`Error calculating leaf sum: ${error.message}`);
    }
};

module.exports = LeafSum;