abstract class Heap {
    protected heapContainer: number[] = [];

    constructor(items: number[] = []){
        this.heapContainer = items;

        for(let i = Math.floor(this.size / 2) - 1; i >= 0; i--) {
            this.heapify(i)
        }
    }

    get size() {
        return this.heapContainer.length;
    }

    private getParentIndex (childIndex: number) {
        return Math.floor((childIndex - 1) / 2);
    }

    private getLeftChildIndex (parentIndex: number) {
        return parentIndex * 2 + 1;
    }

    private getRightChildIndex (parentIndex: number) {
        return parentIndex * 2 + 2;
    }

    private swap(idx1: number, idx2: number) {
        let temp = this.heapContainer[idx1];
        this.heapContainer[idx1] = this.heapContainer[idx2];
        this.heapContainer[idx2] = temp;
    }

    peek() {
        return this.heapContainer.length ? this.heapContainer[0]: null;
    }

    add(item: number) {
        this.heapContainer.push(item);
        let i = this.size -1;

        while(i) {
            let parentIndex = this.getParentIndex(i);
            if(!this.pairIsInCorrectOrder(parentIndex, i)) {
                this.swap(i, parentIndex);
                i = parentIndex;
            }
        }
        return this;
    }

    heapify(i: number) {
        let left = this.getLeftChildIndex(i);
        let right = this.getRightChildIndex(i);

        if(left < this.size && !this.pairIsInCorrectOrder(i, left) || !this.pairIsInCorrectOrder(i, right)) {
            const changIdx = this.pairIsInCorrectOrder(left, right) ? left: right;
            this.swap(i, changIdx);
            this.heapify(changIdx)
        }
    }

    remove(idx: number) {

    }

    graph() {
        console.log(this.heapContainer);
    }

    abstract pairIsInCorrectOrder(parentIndex: number, childIndex: number): boolean
}

export class MinHeap extends Heap {
    pairIsInCorrectOrder(parentIndex: number, childIndex: number) {
        return this.heapContainer[parentIndex] <= this.heapContainer[childIndex]
    }
}

export class MaxHeap extends Heap {
    pairIsInCorrectOrder(parentIndex: number, childIndex: number) {
        return this.heapContainer[parentIndex] >= this.heapContainer[childIndex]
    }
}


// const xh = new MaxHeap([16, 4, 10, 14, 7, 9, 3, 2, 8, 1]);
const xh = new MaxHeap([7, 8 , 10, 2, 4, 1, 7]);
xh.graph()