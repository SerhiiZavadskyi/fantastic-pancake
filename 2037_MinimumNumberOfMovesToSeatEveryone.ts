function minMovesToSeat(seats: number[], students: number[]): number {
	seats.sort((a, b) => a - b)
	students.sort((a, b) => a - b)

	return seats.reduce((acc, curr, i) => acc + Math.abs(curr - students[i]), 0)
}

function minMovesToSeat2(seats: number[], students: number[]): number {
	const maxIdx = Math.max(...seats, ...students) + 1
	const countSeats = new Array(Math.max(maxIdx)).fill(0)
	const countStudents = new Array(Math.max(maxIdx)).fill(0)

	seats.forEach((n) => countSeats[n]++)
	students.forEach((n) => countStudents[n]++)

	let moves = 0,
		i = 0,
		j = 0,
		remain = students.length

	while (remain > 0) {
		if (countSeats[i] === 0) {
			i += 1
		}

		if (countStudents[j] === 0) {
			j += 1
		}

		if (countSeats[i] && countStudents[j]) {
			moves += Math.abs(i - j)
			countSeats[i] -= 1
			countStudents[j] -= 1
			remain -= 1
		}
	}

	return moves
}
console.log(minMovesToSeat2([3, 1, 5], [2, 7, 4]))
