const MinStack = require("./MinStack");

const minStack = new MinStack();


minStack.push(15); 
minStack.push(7);  
minStack.push(12); 
minStack.push(3);  


minStack.printStack(); 


let min = minStack.getMin();
console.log("min:", min); 


let popped = minStack.pop();
console.log("popped:", popped); 
minStack.printStack(); 

min = minStack.getMin();
console.log("min:", min); 


let peeked = minStack.top();
console.log("peeked:", peeked); 


minStack.push(2); 
minStack.printStack(); 


min = minStack.getMin();
console.log("min:", min); 


let isEmpty = minStack.isEmpty();
console.log("isEmpty:", isEmpty); 
