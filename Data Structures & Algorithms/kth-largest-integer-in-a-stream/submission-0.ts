class MinHeap {
    private data: number[] = [-Infinity]; // slot 0 is the sentinel, the root is index 1

    constructor(initial: number[] = []) {
        for (const v of initial) this.data.push(v);
        for (let i = this.size() >> 1; i >= 1; i--) this.sink(i);
    }

    size(): number { return this.data.length - 1; }
    peek(): number | undefined { return this.data[1]; }

    push(val: number): void {
        this.data.push(val);
        this.swim(this.size());
    }

    pop(): number | undefined {
        if (this.size() === 0) return undefined;
        const top = this.data[1];
        const last = this.data.pop()!;
        if (this.size() > 0) {
            this.data[1] = last;
            this.sink(1);
        }
        return top;
    }

    private swim(i: number): void {
        while (this.data[i >> 1] > this.data[i]) { // the sentinel stops this at the root
            this.swap(i, i >> 1);
            i >>= 1;
        }
    }

    private sink(i: number): void {
        const n = this.size();
        while (2 * i <= n) {
            let c = 2 * i;
            if (c + 1 <= n && this.data[c + 1] < this.data[c]) c++;
            if (this.data[i] <= this.data[c]) break;
            this.swap(i, c);
            i = c;
        }
    }

    private swap(a: number, b: number): void {
        [this.data[a], this.data[b]] = [this.data[b], this.data[a]];
    }
}

class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    k: number;
    nums: number[]
    heap: MinHeap
    constructor(k: number, nums: number[]) {
        this.k = k;
        this.heap = new MinHeap(nums);
         while(this.heap.size() > this.k) {
            this.heap.pop()
        }
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val: number): number {
        this.heap.push(val)
        if(this.heap.size() > this.k) {
            this.heap.pop()
        }
        return this.heap.peek()
    }
}
