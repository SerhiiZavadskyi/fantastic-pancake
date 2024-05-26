export class MaxHeap {
	private heap: [number, number, number][]

	constructor() {
		this.heap = []
	}

	public push(item: [number, number, number]): void {
		this.heap.push(item)
		this.bubbleUp()
	}

	public pop(): [number, number, number] | undefined {
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

	private bubbleUp(): void {
		let index = this.heap.length - 1
		const element = this.heap[index]

		while (index > 0) {
			const parentIndex = Math.floor((index - 1) / 2)
			const parent = this.heap[parentIndex]

			if (element[0] <= parent[0]) break

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
			let leftChild: [number, number, number] | undefined
			let rightChild: [number, number, number] | undefined
			let swapIndex = -1

			if (leftChildIndex < length) {
				leftChild = this.heap[leftChildIndex]
				if (leftChild[0] > element[0]) {
					swapIndex = leftChildIndex
				}
			}

			if (rightChildIndex < length) {
				rightChild = this.heap[rightChildIndex]
				if (
					(swapIndex === -1 && rightChild[0] > element[0]) ||
					(swapIndex !== -1 && rightChild[0] > (leftChild as [number, number, number])[0])
				) {
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
