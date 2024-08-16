function lemonadeChange(bills: number[]): boolean {
	let five = 0
	let ten = 0
	let twenty = 0

	for (const bill of bills) {
		if (bill === 5) {
			five++
		} else if (bill === 10) {
			if (five === 0) {
				return false
			}
			five--
			ten++
		} else {
			if (ten >= 1 && five >= 1) {
				five--
				ten--
				twenty++
			} else if (five >= 3) {
				five -= 3
				twenty++
			} else {
				return false
			}
		}
	}

	return true
}
console.log(lemonadeChange([5, 5, 10, 10, 20]))
