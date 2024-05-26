function numRescueBoats(people: number[], limit: number): number {
	people.sort((a, b) => a - b)
	let boats = 0
	let l = 0
	let r = people.length - 1

	while (l <= r) {
		if (people[l] + people[r] <= limit) {
			l++
		}
		r--
		boats++
	}

	return boats
}

console.log(numRescueBoats([2, 4], 5))
