const Queue = require("./Queue");

describe("Queue Implementation", () => {
  let queue;

  beforeEach(() => {
    queue = new Queue();
  });

  test("enqueues a node into the queue", () => {
    queue.enqueue(10);
    expect(queue.peek()).toBe(10);
  });

  test("dequeues a node from the queue", () => {
    queue.enqueue(20);
    queue.enqueue(30);
    expect(queue.dequeue()).toBe(20);
    expect(queue.peek()).toBe(30);
  });

  test("returns message when dequeuing from empty queue", () => {
    expect(queue.dequeue()).toBe("cannot dequeue because the queue is empty");
  });

  test("checks if queue is empty", () => {
    expect(queue.isEmpty()).toBe(true);
    queue.enqueue(40);
    expect(queue.isEmpty()).toBe(false);
  });
});
