function openLock(deadends: string[], target: string): number {
	let start = "0000"
	const queue: [string, number][] = []
	queue.push([start, 0])
	const visited = new Set(deadends)

	if (visited.has(start)) return -1

	function children(lock: string): string[] {
		const result: string[] = []
		for (let i = 0; i < 4; i++) {
			let digit = ((Number(lock[i]) + 1) % 10).toString()
			result.push(lock.slice(0, i) + digit + lock.slice(i + 1))
			digit = ((Number(lock[i]) - 1 + 10) % 10).toString()
			result.push(lock.slice(0, i) + digit + lock.slice(i + 1))
		}

		return result
	}

	while (queue && queue.length) {
		const [lock, turns] = queue.shift()!

		if (lock === target) {
			return turns
		}

		for (const child of children(lock)) {
			if (!visited.has(child)) {
				visited.add(child)
				queue.push([child, turns + 1])
			}
		}
	}

	return -1
}

console.log(openLock(["0201", "0101", "0102", "1212", "2002"], "0202"))
