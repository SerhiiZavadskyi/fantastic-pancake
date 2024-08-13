export class MaxHeap<T> {
	private heap: T[]

	constructor() {
		this.heap = []
	}

	public push(item: T): void {
		this.heap.push(item)
		this.bubbleUp()
	}

	public pop(): T | undefined {
		if (this.size() === 0) return undefined
		const top = this.heap[0]
		const end = this.heap.pop()
		if (this.size() > 0 && end !== undefined) {
			this.heap[0] = end
			this.bubbleDown()
		}
		return top
	}

	public size(): number {
		return this.heap.length
	}

	public peak(): T {
		return this.heap[0]
	}

	private bubbleUp(): void {
		let index = this.heap.length - 1
		const element = this.heap[index]

		while (index > 0) {
			const parentIndex = Math.floor((index - 1) / 2)
			const parent = this.heap[parentIndex]

			if (element <= parent) break

			this.heap[index] = parent
			index = parentIndex
		}
		this.heap[index] = element
	}

	private bubbleDown(): void {
		let index = 0
		const length = this.heap.length
		const element = this.heap[0]

		while (true) {
			const leftChildIndex = 2 * index + 1
			const rightChildIndex = 2 * index + 2
			let leftChild: T | undefined
			let rightChild: T | undefined
			let swapIndex = -1

			if (leftChildIndex < length) {
				leftChild = this.heap[leftChildIndex]
				if (leftChild > element) {
					swapIndex = leftChildIndex
				}
			}

			if (rightChildIndex < length) {
				rightChild = this.heap[rightChildIndex]
				if ((swapIndex === -1 && rightChild > element) || (swapIndex !== -1 && rightChild > leftChild!)) {
					swapIndex = rightChildIndex
				}
			}

			if (swapIndex === -1) break

			this.heap[index] = this.heap[swapIndex]
			index = swapIndex
		}
		this.heap[index] = element
	}
}
