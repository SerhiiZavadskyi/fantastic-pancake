function findMinArrowShots(points: number[][]): number {
	points.sort((a, b) => a[0] - b[0])
	let res = points.length,
		prev = points[0]

	for (let i = 1; i < points.length; i++) {
		let curr = points[i]

		if (curr[0] <= prev[1]) {
			res--
			prev = [curr[0], Math.min(curr[1], prev[1])]
		} else {
			prev = curr
		}
	}

	return res
}

console.log(
	findMinArrowShots([
		[10, 16],
		[2, 8],
		[1, 6],
		[7, 12],
	])
)
