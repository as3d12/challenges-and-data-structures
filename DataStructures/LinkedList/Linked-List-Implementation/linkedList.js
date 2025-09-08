const Node = require('./node.js');
class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    add(value) {
        const newNode = new Node(value);
        if (this.head === null) {
            this.head = newNode;
            return;
        }
        let current = this.head;
        while (current.next !== null) {
            current = current.next;
        }
        current.next = newNode;
        this.length++;
    }

    remove(value) {
        if (this.head === null) {
            console.log('List is empty');
            return;
        }

        if (this.head.value === value) {
            this.head = this.head.next;
            this.length--;
        } else {
            let current = this.head;
            while (current.next !== null) {
                if (current.next.value === value) {
                    current.next = current.next.next;
                    this.length--;
                    return;
                }

                else {
                    console.log('There is no node with value ' + value);
                    return;
                }
                current = current.next;
            }
        }
    }

    includes(value) {
        let current = this.head;
        while (current !== null) {
            if (current.value === value) {
                return true;
            }
            current = current.next;
        }
        return false;
    }

    insertAt(value, index) {
        if (index < 0 || index > this.length) {
            console.log('Invalid index');
            return;
        }
        const newNode = new Node(value);
        if (index === 0) {
            newNode.next = this.head;
            this.head = newNode;
        } else {
            let current = this.head;
            for (let i = 0; i < index - 1; i++) {
                current = current.next;
            }
            newNode.next = current.next;
            current.next = newNode;
        }
        this.length++;
    }

    printList() {
        if (this.head === null) {
            console.log('List is empty');
            return;
        }
        let current = this.head;
        const values = [];
        while (current !== null) {
            values.push(current.value);
            current = current.next;
        }
        console.log("head --> " + values.join(" --> ") + " --> null");
    }

    Reverse() {
        if (this.head === null) {
            console.log('List is empty');
            return;
        }
        let prev = null;
        let current = this.head;
        let next = null;
        while (current !== null) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        this.head = prev;
    }

     mergeStoredLists(list1 = [], list2 = []) {
    
     let values = [];
     let current1 = list1.head;
     let current2 = list2.head;
     while (current1 !== null) {
         values.push(current1.value);
         current1 = current1.next;
     }
     while (current2 !== null) {
         values.push(current2.value);
         current2 = current2.next;
     }

     values.sort((a, b) => a - b);

     let mergedList = new LinkedList();
     for (let value of values) {
         mergedList.add(value);
     }
     return mergedList;
 }
}

module.exports = LinkedList;
