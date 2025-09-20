const Stack = require("./Stack");

describe("Stack Implementation", () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  test("pushes a node onto the stack", () => {
    stack.push(10);
    expect(stack.peek()).toBe(10);
  });

  test("pops a node from the stack", () => {
    stack.push(20);
    stack.push(30);
    expect(stack.pop()).toBe(30);
    expect(stack.peek()).toBe(20);
  });

  test("returns message when popping from empty stack", () => {
    expect(stack.pop()).toBe("cannot pop because the stack is empty");
  });

  test("checks if stack is empty", () => {
    expect(stack.isEmpty()).toBe(true);
    stack.push(40);
    expect(stack.isEmpty()).toBe(false);
  });
});
