function survivedRobotsHealths(positions: number[], healths: number[], directions: string): number[] {
	const indexMap = new Map()

	positions.forEach((p, i) => indexMap.set(p, i))
	positions.sort((a, b) => a - b)

	const stack: number[] = []

	for (const p of positions) {
		const i = indexMap.get(p)

		if (directions[i] === "R") {
			stack.push(i)
		} else {
			while (stack.length && healths[i]) {
				const j = stack.pop()!

				if (healths[i] > healths[j]) {
					healths[i] -= 1
					healths[j] = 0
				} else if (healths[i] < healths[j]) {
					healths[i] = 0
					healths[j] -= 1
					stack.push(j)
				} else {
					healths[i] = 0
					healths[j] = 0
				}
			}
		}
	}

	return healths.filter((h) => h > 0)
}
console.log(survivedRobotsHealths([5, 4, 3, 2, 1], [2, 17, 9, 15, 10], "RRRRR"))
