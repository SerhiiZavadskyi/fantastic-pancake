function minOperations(logs: string[]): number {
	let level = 0
	const operations = new Map([
		["./", 0],
		["../", -1],
	])

	for (const log of logs) {
		if (operations.has(log)) {
			level += level !== 0 ? operations.get(log)! : 0
		} else {
			level++
		}
	}

	return level
}

console.log(minOperations(["./", "../", "./"]))
