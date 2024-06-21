function maxSatisfied(customers: number[], grumpy: number[], minutes: number): number {
	let l = 0
	let window = 0
	let maxWindow = 0
	let satisfied = 0

	for (let r = 0; r < customers.length; r++) {
		if (grumpy[r] === 1) {
			window += customers[r]
		} else {
			satisfied += customers[r]
		}

		if (r - l + 1 > minutes) {
			if (grumpy[l] === 1) {
				window -= customers[l]
			}

			l++
		}

		maxWindow = Math.max(maxWindow, window)
	}

	return maxWindow + satisfied
}
console.log(maxSatisfied([1, 0, 1, 2, 1, 1, 7, 5], [0, 1, 0, 1, 0, 1, 0, 1], 3))
