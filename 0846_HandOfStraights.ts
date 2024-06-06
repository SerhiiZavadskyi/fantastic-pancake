function isNStraightHand(hand: number[], groupSize: number): boolean {
	if (hand.length % groupSize !== 0) {
		return false
	}

	const count = new Map<number, number>()

	for (const h of hand) {
		count.set(h, (count.get(h) ?? 0) + 1)
	}

	const minHeap = [...count.keys()].sort((a, b) => b - a)

	while (minHeap.length > 0) {
		const min = minHeap[minHeap.length - 1]

		for (let i = min; i < min + groupSize; i++) {
			if (!count.has(i)) {
				return false
			}

			count.set(i, (count.get(i) ?? 0) - 1)

			if (count.get(i) === 0) {
				if (i !== minHeap[minHeap.length - 1]) {
					return false
				}

				minHeap.pop()
			}
		}
	}

	return true
}

console.log(isNStraightHand([1, 2, 3, 6, 2, 3, 4, 7, 8], 3))
