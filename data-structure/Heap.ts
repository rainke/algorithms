abstract class Heap {
    protected heapContainer: number[] = [];

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
        this.heapifyUp();
        return this;
    }
    /**
     * 自下而上的序列化
     */
    private heapifyUp() {
        let index = this.heapContainer.length - 1;
        while(index) {
            let parentIndex = this.getParentIndex(index);
            if(this.pairIsInCorrectOrder(parentIndex, index)) {
                return
            } else {
                this.swap(index, parentIndex);
                index = parentIndex;
            }
        }
    }

    remove(item: number) {

    }

    graph() {
        console.log('          1            ');
        console.log('         2 3           ');
        console.log('        4 5 6 7        ');
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

const mh = new MinHeap();
const xh = new MaxHeap();

mh.add(3).add(2).add(5).add(4).add(2)
xh.add(3).add(2).add(5).add(4).add(2)
// mh.graph();
console.log(mh);
console.log(xh);