function timeRequiredToBuy2(tickets: number[], k: number): number {
	let sec = 0

	while (tickets[k] > 0) {
		for (let i = 0; i < tickets.length; i++) {
			if (tickets[i] !== 0) {
				tickets[i] -= 1
				sec++
			}

			if (tickets[k] === 0) break
		}
	}

	return sec
}

function timeRequiredToBuy(tickets: number[], k: number): number {
	let sec = 0

	for (let i = 0; i < tickets.length; i++) {
		if (i <= k) {
			sec += Math.min(tickets[i], tickets[k])
		} else {
			sec += Math.min(tickets[i], tickets[k] - 1)
		}
	}

	return sec
}

console.log(timeRequiredToBuy([5, 1, 1, 1], 0))
console.log(timeRequiredToBuy([84, 49, 5, 24, 70, 77, 87, 8], 3))
