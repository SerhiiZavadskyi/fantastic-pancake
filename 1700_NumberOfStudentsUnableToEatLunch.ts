function countStudents(students: number[], sandwiches: number[]): number {
	let res = 0

	while (res !== students.length) {
		const sandwich = sandwiches[0]
		const student = students.shift()!

		if (sandwich !== student) {
			students.push(student)
			res++
		} else {
			sandwiches.shift()
			res = 0
		}
	}

	return res
}

function countStudents2(students: number[], sandwiches: number[]): number {
	let res = students.length
	const map = new Map()
	for (const s of students) {
		map.set(s, (map.get(s) ?? 0) + 1)
	}

	for (const s of sandwiches) {
		if (map.get(s) > 0) {
			res--
			map.set(s, map.get(s) - 1)
		} else {
			return res
		}
	}

	return res
}
console.log(countStudents([1, 1, 1, 0, 0, 1], [1, 0, 0, 0, 1, 1]))
