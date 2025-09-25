const MinStack = require("./MinStack");

describe("MinStack", () => {
  let stack;

  beforeEach(() => {
    stack = new MinStack();
  });

  test("should retrieve the minimum element in the stack", () => {
    stack.push(15);
    stack.push(7);
    stack.push(12);
    stack.push(3);

    expect(stack.getMin()).toBe(3);
  });

  test("should update minimum element after popping", () => {
    stack.push(15);
    stack.push(7);
    stack.push(12);
    stack.push(3);

    stack.pop(); 
    expect(stack.getMin()).toBe(7);
  });

  test("should update minimum element after pushing", () => {
    stack.push(15);
    stack.push(7);
    stack.push(12);

    expect(stack.getMin()).toBe(7);

    stack.push(2); 
    expect(stack.getMin()).toBe(2);
  });
});
