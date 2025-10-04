const StackWithDeleteMiddle = require('./StackWithDeleteMiddle');

describe('StackWithDeleteMiddle - Delete Middle Element Tests', () => {
    let stack;

    beforeEach(() => {
        stack = new StackWithDeleteMiddle();
    });

    test('Deleting the middle element of a stack with odd number of elements', () => {
        stack.push(1);
        stack.push(2);
        stack.push(3);
        stack.push(4);
        stack.push(5);
        const removedElement = stack.deleteMiddle();
        
        expect(removedElement).toBe(3);
        expect(stack.pop()).toBe(5);
        expect(stack.pop()).toBe(4);
        expect(stack.pop()).toBe(2);
        expect(stack.pop()).toBe(1);
        expect(stack.isEmpty()).toBe(true);
    });

    test('Deleting the middle element of a stack with even number of elements', () => {
        stack.push(1);
        stack.push(2);
        stack.push(3);
        stack.push(4);
    
        const removedElement = stack.deleteMiddle();
        
        expect(removedElement).toBe(3);
        expect(stack.pop()).toBe(4);
        expect(stack.pop()).toBe(2);
        expect(stack.pop()).toBe(1);
        expect(stack.isEmpty()).toBe(true);
    });

    test('Deleting from an empty stack', () => {
        const result = stack.deleteMiddle();
        
        expect(result).toBe(null);
        expect(stack.isEmpty()).toBe(true);
    });

    test('Deleting from a stack with one element', () => {
        stack.push(42);
        
        const removedElement = stack.deleteMiddle();
        
        expect(removedElement).toBe(42);
        expect(stack.isEmpty()).toBe(true);
    });
});
