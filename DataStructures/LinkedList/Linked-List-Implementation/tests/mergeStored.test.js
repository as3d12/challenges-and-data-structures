const LinkedList = require("../../linkedList");

test('One List Is Empty', () => {
    const list1 = new LinkedList();
    const list2 = new LinkedList();

    list1.add(1);
    list1.add(2);
    list1.add(3);

    const mergedList = LinkedList.mergeStoredLists(list1, list2);
    expect(mergedList.head.value).toBe(1);
    expect(mergedList.head.next.value).toBe(2);
    expect(mergedList.head.next.next.value).toBe(3);
});


test('Two List Is Empty', () => {
    const list1 = new LinkedList();
    const list2 = new LinkedList();

    const mergedList = LinkedList.mergeStoredLists(list1, list2);
    expect(mergedList.head).toBeNull();
});



test('Merge Two Lists', () => {
    const list1 = new LinkedList();
    const list2 = new LinkedList();

    list1.add(5);
    list1.add(10);
    list1.add(15);

    list2.add(2);
    list2.add(3);
    list2.add(20);

    const mergedList = LinkedList.mergeStoredLists(list1, list2);
    expect(mergedList.head.value).toBe(2);
    expect(mergedList.head.next.value).toBe(3);
    expect(mergedList.head.next.next.value).toBe(5);
    expect(mergedList.head.next.next.next.value).toBe(10);
    expect(mergedList.head.next.next.next.next.value).toBe(15);
    expect(mergedList.head.next.next.next.next.next.value).toBe(20);
});
