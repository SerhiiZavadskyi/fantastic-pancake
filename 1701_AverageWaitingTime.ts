function averageWaitingTime(customers: number[][]): number {
	let time = 0
	let total = 0

	for (const [arrival, order] of customers) {
		total += Math.max(time - arrival, 0)
		time = Math.max(time, arrival)
		total += order
		time += order
	}

	return total / customers.length
}

console.log(
	averageWaitingTime([
		[1, 2],
		[2, 5],
		[4, 3],
	])
)
