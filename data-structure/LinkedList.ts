interface LinkedNode {
    value: number;
    next: LinkedNode;
}

class LinkedList {
    private head: LinkedNode = null;
    private tail: LinkedNode = null;

    add(value: number) {
        const tail: LinkedNode = {
            value,
            next: null
        };
        if(this.head === null) {
            this.head = tail;
        }
        if(this.tail) {
            this.tail.next = tail;
        }
        this.tail = tail;
    }

    prepend(value: number) {
        const head: LinkedNode = {
            value,
            next: null
        }
        if(this.head) {
            head.next = this.head;
        }
        this.head = head;

        if(this.tail === null) {
            this.tail = head;
        }
    }

    toString() {
        let current: LinkedNode = this.head;
        let rst = '';
        while(current) {
            rst += current.value + ' -> '
            current = current.next;
        }

        return rst.slice(0, -4);
    }
}

const l = new LinkedList();
// l.add(3);
// l.add(4);
// l.add(5);
l.prepend(2);
l.add(3);
console.log(l);