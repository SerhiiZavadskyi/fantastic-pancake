function pivotInteger(n: number): number {
	const nums = new Array(n).fill(1).map((num, i) => num + i)
	let sumLeft = 0
	let sumRight = 0

	for (let i = 0; i < n; i++) {
		sumLeft = nums.slice(0, i + 1).reduce((a, b) => a + b, 0)
		sumRight = nums.slice(i).reduce((a, b) => a + b, 0)

		if (sumLeft === sumRight) {
			return nums[i]
		}
	}

	return -1
}

function pivotInteger2(n: number): number {
	const totalSum = ((1 + n) * n) / 2
	let sum = 0

	for (let i = 1; i <= n; i++) {
		sum += i

		if (2 * sum === totalSum + i) {
			return i
		}
	}

	return -1
}

console.log(pivotInteger2(8))
