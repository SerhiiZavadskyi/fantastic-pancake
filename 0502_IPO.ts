export class MaxHeap {
	heap: [number, number][]

	constructor() {
		this.heap = []
	}

	public push(item: [number, number]): void {
		this.heap.push(item)
		this.bubbleUp()
	}

	public pop(): [number, number] | undefined {
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
			let leftChild: [number, number] | undefined
			let rightChild: [number, number] | undefined
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
					(swapIndex !== -1 && rightChild[0] > (leftChild as [number, number])[0])
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

function findMaximizedCapital(k: number, w: number, profits: number[], capital: number[]): number {
	const maxProfit: MaxHeap = new MaxHeap()
	const minCapital: MaxHeap = new MaxHeap() // have to multiply by -1 to convert to minHeap

	for (let i = 0; i < profits.length; i++) {
		minCapital.push([-1 * capital[i], -1 * profits[i]])
	}

	for (let i = 0; i < k; i++) {
		while (minCapital.size() && -1 * minCapital.heap[0][0] <= w) {
			const [_, p] = minCapital.pop()!

			maxProfit.push([-1 * p, 0])
		}

		if (!maxProfit.size()) {
			break
		}
		w += maxProfit.pop()![0] ?? 0
	}

	return w
}

console.log(findMaximizedCapital(2, 0, [1, 2, 3], [0, 1, 1]))
