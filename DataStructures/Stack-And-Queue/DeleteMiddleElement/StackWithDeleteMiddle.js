const Stack = require("../Stack-And-Queue-Implementation/Stack");

class StackWithDeleteMiddle extends Stack {
    constructor() {
        super();
    }

    deleteMiddle() {
     
        if (this.isEmpty()) {
            return null;
        }

 
        if (this.top.next === null) {
            return this.pop();
        }

       
        let count = this.getSize();
        
      
        let middlePosition;
        if (count % 2 === 0) {
            middlePosition = Math.floor(count / 2) - 1;
        } else {
            middlePosition = Math.floor(count / 2);
        }

 
        const tempStack = new Stack();
        
       
        for (let i = 0; i < middlePosition; i++) {
            tempStack.push(this.pop());
        }
        
        
        const removedElement = this.pop();
        
  
        while (!tempStack.isEmpty()) {
            this.push(tempStack.pop());
        }
        
        return removedElement;
    }

 
    getSize() {
        let count = 0;
        let current = this.top;
        while (current !== null) {
            count++;
            current = current.next;
        }
        return count;
    }

    // Helper method to display stack contents
    displayStack() {
        if (this.isEmpty()) {
            return "Stack is empty";
        }
        
        let result = "Stack: Top";
        let current = this.top;
        while (current !== null) {
            result += ` -> ${current.value}`;
            current = current.next;
        }
        return result;
    }
}

module.exports = StackWithDeleteMiddle; 