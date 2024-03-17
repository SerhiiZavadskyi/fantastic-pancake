function insert(intervals: number[][], newInterval: number[]): number[][] {
	const result: number[][] = []
	let i = 0

	for (const interval of intervals) {
		if (interval[0] > newInterval[1]) {
			result.push(newInterval)
			return [...result, ...intervals.slice(i)]
		} else if (interval[1] < newInterval[0]) {
			result.push(interval)
		} else {
			newInterval = [Math.min(newInterval[0], interval[0]), Math.max(newInterval[1], interval[1])]
		}

		i++
	}

	result.push(newInterval)

	return result
}

console.log(
	insert(
		[
			[1, 2],
			[3, 5],
			[6, 7],
			[8, 10],
			[12, 16],
		],
		[4, 8]
	)
)

console.log(
	insert(
		[
			[1, 3],
			[6, 9],
		],
		[2, 5]
	)
)
