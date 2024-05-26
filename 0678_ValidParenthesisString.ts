function checkValidString(s: string): boolean {
	let min = 0,
		max = 0

	for (const c of s) {
		if (c === "(") {
			min++
			max++
		} else if (c === ")") {
			min--
			max--
		} else {
			min--
			max++
		}

		if (max < 0) return false
		if (min < 0) min = 0
	}

	return min === 0
}

console.log(checkValidString("(((((*)))**"))
console.log(checkValidString("()"))
console.log(checkValidString("(*)))"))
