function maximumHappinessSum(happiness: number[], k: number): number {
	// happiness.sort((a, b) => b - a)

	// let maxSum = 0
	// let i = 0
	// while (k > 0) {
	// 	const val = happiness[i] - i
	// 	if (val < 0) {
	// 		return maxSum
	// 	}
	// 	maxSum += val
	// 	i++
	// 	k--
	// }
	// return maxSum

	happiness.sort((a, b) => b - a)
	let maxSum = 0

	for (let i = 0; i < k; i++) {
		const val = happiness[i] - i
		if (val < 0) {
			return maxSum
		}
		maxSum += val
	}

	return maxSum
}
console.log(maximumHappinessSum([12, 1, 42], 3))
