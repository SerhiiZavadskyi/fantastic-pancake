import { MaxHeap } from "./helpers/MaxHeap"

class KthLargest {
	maxHeap: MaxHeap<number> = new MaxHeap()

	constructor(private k: number, private nums: number[]) {
		this.nums.forEach((n: number) => this.maxHeap.push(-1 * n))

		while (this.maxHeap.size() > this.k) {
			this.maxHeap.pop()
		}
	}

	add(val: number): number {
		this.maxHeap.push(-1 * val)
		if (this.maxHeap.size() > this.k) {
			this.maxHeap.pop()
		}
		return this.maxHeap.peak() * -1
	}
}
const kthLargest = new KthLargest(3, [4, 5, 8, 2])

console.log(kthLargest.add(3)) // return 4
console.log(kthLargest.add(5)) // return 5
console.log(kthLargest.add(10)) // return 5
console.log(kthLargest.add(9)) // return 8
console.log(kthLargest.add(4)) // return 8
