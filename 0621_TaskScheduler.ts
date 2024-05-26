function leastInterval(tasks: string[], n: number): number {
	const map = new Map()
	let time = 0
	let max = 0

	for (const task of tasks) {
		map.set(task, (map.get(task) ?? 0) + 1)
		max = Math.max(max, map.get(task))
		time++
	}

	let res = (n + 1) * (max - 1)

	for (const [_, cnt] of map) {
		if (cnt === max) {
			res++
		}
	}

	return Math.max(time, res)
}

console.log(leastInterval(["A", "A", "A", "B", "B", "B"], 2))
