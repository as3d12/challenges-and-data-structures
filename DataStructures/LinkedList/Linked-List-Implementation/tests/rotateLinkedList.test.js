const LinkedList = require("../linkedList.js");

describe("LinkedList rotateLeft", () => {
    let list;

    beforeEach(() => {
        list = new LinkedList();
        [1, 2, 3, 4, 5, 6].forEach(num => list.add(num));
    });

    test("rotating by k = 0 should leave the list unchanged", () => {
        list.rotateLeft(0);
        let result = [];
        let current = list.head;
        while (current) {
            result.push(current.value);
            current = current.next;
        }
        expect(result).toEqual([1, 2, 3, 4, 5, 6]);
    });

    test("rotating by k > length (k = 7) should rotate by k % length", () => {
        list.rotateLeft(7); 
        let result = [];
        let current = list.head;
        while (current) {
            result.push(current.value);
            current = current.next;
        }
        expect(result).toEqual([2, 3, 4, 5, 6, 1]);
    });
});