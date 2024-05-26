function maximumValueSum(nums: number[], k: number, edges: number[][]): number {
	const delta = nums.map((n) => (n ^ k) - n).sort((a, b) => b - a)
	let res = nums.reduce((a, b) => a + b)

	for (let i = 0; i < nums.length; i += 2) {
		if (i === nums.length - 1) break

		const pathDelta = delta[i] + delta[i + 1]

		if (pathDelta > 0) res += pathDelta
	}

	return res
}
console.log(
	maximumValueSum([1, 2, 1], 3, [
		[0, 1],
		[0, 2],
	])
)
