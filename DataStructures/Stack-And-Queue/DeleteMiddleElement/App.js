const StackWithDeleteMiddle = require("./StackWithDeleteMiddle");

const stack = new StackWithDeleteMiddle();

stack.push(7);
stack.push(14);
stack.push(3);
stack.push(8);
stack.push(5);

console.log(stack.displayStack()); 
stack.deleteMiddle();
console.log(stack.displayStack()); 

stack.push(2);
stack.push(9);
stack.push(11);
console.log(stack.displayStack()); 
stack.deleteMiddle();
console.log(stack.displayStack()); 

