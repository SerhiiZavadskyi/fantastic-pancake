import { MaxHeap } from "./helpers/MaxHeap"

function nthUglyNumber(n: number): number {
	const maxHeap = new MaxHeap<number>()
	maxHeap.push(-1)
	const visit = new Set()
	const factors = [2, 3, 5]

	for (let i = 0; i < n; i++) {
		const num = maxHeap.pop()! * -1
		if (n - 1 === i) {
			return num
		}

		for (const f of factors) {
			if (!visit.has(-num * f)) {
				visit.add(-num * f)
				maxHeap.push(-num * f)
			}
		}
	}
	return -1
}
console.log(nthUglyNumber(10))
