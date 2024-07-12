function maximumGain(s: string, x: number, y: number): number {
	function removePair(pair: string, score: number): number {
		let res = 0
		const stack: string[] = []

		for (const c of s) {
			if (c === pair[1] && stack.length && stack.at(-1) === pair[0]) {
				stack.pop()
				res += score
			} else {
				stack.push(c)
			}
		}

		s = stack.join("")

		return res
	}

	let maxPoints = 0
	const pair = x > y ? "ab" : "ba"

	maxPoints += removePair(pair, Math.max(x, y))
	maxPoints += removePair(pair.split("").reverse().join(""), Math.min(x, y))

	return maxPoints
}
console.log(maximumGain("cdbcbbaaabab", 4, 5))
