abstract class Heap {
  protected heapContainer: number[] = [];

  constructor(items: number[] = []) {
    this.heapContainer = items;

    for (let i = Math.floor(this.size / 2) - 1; i >= 0; i--) {
      this.heapify(i);
    }
  }

  get size() {
    return this.heapContainer.length;
  }

  get height() {
    return Math.ceil(Math.log2(this.size));
  }

  private getParentIndex(childIndex: number) {
    return Math.floor((childIndex - 1) / 2);
  }

  private getLeftChildIndex(parentIndex: number) {
    return parentIndex * 2 + 1;
  }

  private getRightChildIndex(parentIndex: number) {
    return parentIndex * 2 + 2;
  }

  private swap(idx1: number, idx2: number) {
    let temp = this.heapContainer[idx1];
    this.heapContainer[idx1] = this.heapContainer[idx2];
    this.heapContainer[idx2] = temp;
  }

  peek() {
    return this.heapContainer.length ? this.heapContainer[0] : null;
  }

  add(item: number) {
    this.heapContainer.push(item);
    let i = this.size - 1;

    while (i) {
      let parentIndex = this.getParentIndex(i);
      if (!this.pairIsInCorrectOrder(parentIndex, i)) {
        this.swap(i, parentIndex);
        i = parentIndex;
      }
    }
    return this;
  }

  heapify(i: number) {
    let left = this.getLeftChildIndex(i);
    let right = this.getRightChildIndex(i);
    if (left < this.size && (!this.pairIsInCorrectOrder(i, left) || !this.pairIsInCorrectOrder(i, right))) {
      const changIdx = this.pairIsInCorrectOrder(left, right) ? left : right;
      this.swap(i, changIdx);
      this.heapify(changIdx);
    }
  }

  remove(idx: number) {}

  graph() {
    const height = this.height;
    const numbers = 2 ** (height - 1);
    const stringLength = numbers + (numbers - 1) * 3;
    let strs: string[][] = [];
    for (let i = height; i > 0; i--) {
      if (i == height) {
        strs.unshift(
          Array.from({ length: stringLength }, (_, idx) => {
            return idx % 4 ? ' ' : '$';
          })
        );
      } else {
        const prev = strs[0];
        let next: string[] = [];
        let _num = 0;
        let sin$ = false;
        for (let x of prev) {
          if (x === '$') {
            if (sin$) {
              next[next.length - Math.ceil(_num / 2)] = '$';
            }
            sin$ = !sin$;
            _num = 0;
            next.push(' ');
          } else if (x === ' ') {
            _num++;
            next.push(' ');
          }
        }
        strs.unshift(next);
      }
    }

    let logs = strs.map(item => item.join('')).join('\n\n');

    this.heapContainer.forEach(item => {
      logs = logs.replace('$', item.toString());
    });

    logs = logs.replace(/\$/g, ' ');

    console.log(logs);
  }

  abstract pairIsInCorrectOrder(parentIndex: number, childIndex: number): boolean;
}

export class MinHeap extends Heap {
  pairIsInCorrectOrder(parentIndex: number, childIndex: number) {
    return this.heapContainer[parentIndex] <= this.heapContainer[childIndex];
  }
}

export class MaxHeap extends Heap {
  pairIsInCorrectOrder(parentIndex: number, childIndex: number) {
    return this.heapContainer[parentIndex] >= this.heapContainer[childIndex];
  }
}

// const xh = new MaxHeap([16, 4, 10, 14, 7, 9, 3, 2, 8, 1]);
const xh = new MinHeap([7, 8, 10, 2, 4, 1, 7, 5, 1, 3, 6, 2, 2]);
xh.graph();
