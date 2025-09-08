const LinkedList = require("../../linkedList");

test('LinkedList add method', () => {
    const list = new LinkedList();
    list.add(1);
    list.add(2);
    expect(list.head.value).toBe(1);
    expect(list.head.next.value).toBe(2);
});

test('LinkedList remove method', () => {
    const list = new LinkedList();
    list.add(1);
    list.add(2);
    list.remove(1);
    list.remove(2);
    expect(list.head).toBeNull();
});

test('LinkedList includes method', () => {
    const list = new LinkedList();
    list.add(1);
    expect(list.includes(1)).toBe(true);
    expect(list.includes(2)).toBe(false);
});

