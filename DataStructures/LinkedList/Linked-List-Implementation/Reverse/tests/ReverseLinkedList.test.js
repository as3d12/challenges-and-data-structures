const LinkedList = require("../linkedList");

test('LinkedList Reverse method', () => {
    const list = new LinkedList();
    list.add(1);
    list.add(2);
    list.add(3);
    list.Reverse();
    expect(list.head.value).toBe(3);
    expect(list.head.next.value).toBe(2);
    expect(list.head.next.next.value).toBe(1);
});

test('LinkedList Reverse one element method', () => {
    const list = new LinkedList();
    list.add(1);
    list.Reverse();
    expect(list.head.value).toBe(1);
});

test('LinkedList reverse empty method', () => {
    const list = new LinkedList();
    list.Reverse();
    expect(list.head).toBeNull();
});


test('LinkedList reverse duplicate values method', () => {
    const list = new LinkedList();
    list.add(1);
    list.add(2);
    list.add(2);
    list.add(3);
    list.Reverse();
    expect(list.head.value).toBe(3);
    expect(list.head.next.value).toBe(2);
    expect(list.head.next.next.value).toBe(2);
    expect(list.head.next.next.next.value).toBe(1);
});


