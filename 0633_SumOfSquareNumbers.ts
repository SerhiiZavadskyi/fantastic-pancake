function judgeSquareSum(c: number): boolean {
	let l = 0,
		r = Math.floor(Math.sqrt(c))

	while (l <= r) {
		const sum = l * l + r * r

		if (sum > c) {
			r--
		} else if (sum < c) {
			l++
		} else {
			return true
		}
	}

	return false
}
function judgeSquareSum2(c: number): boolean {
	const sqrt = new Set()

	for (let i = 0; i < Math.sqrt(c) + 1; i++) {
		sqrt.add(i * i)
	}

	let a: number = 0
	while (a * a <= c) {
		const target = c - a * a

		if (sqrt.has(target)) {
			return true
		}
		a++
	}

	return false
}

console.log(judgeSquareSum(5))
