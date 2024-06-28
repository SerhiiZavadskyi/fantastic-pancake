function maximumImportance(n: number, roads: number[][]): number {
	let res = 0

	const edgeCount = new Array(n).fill(0)

	for (const [n1, n2] of roads) {
		edgeCount[n1]++
		edgeCount[n2]++
	}

	edgeCount.sort((a, b) => a - b)

	let label = 1

	for (const cnt of edgeCount) {
		res += cnt * label
		label++
	}

	return res
}

console.log(
	maximumImportance(5, [
		[0, 1],
		[1, 2],
		[2, 3],
		[0, 2],
		[1, 3],
		[2, 4],
	])
)
