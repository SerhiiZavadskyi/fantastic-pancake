function scoreOfString(s: string): number {
	let score = 0

	for (let i = 0; i < s.length - 1; i++) {
		score += Math.abs(s.charCodeAt(i) - s.charCodeAt(i + 1))
	}

	return score
}

function scoreOfString2(s: string): number {
	return s
		.split("")
		.reduce(
			(acc, curr, i) => (i < s.length - 1 ? acc + Math.abs(curr.charCodeAt(0) - s[i + 1].charCodeAt(0)) : acc),
			0
		)
}

console.log(scoreOfString("zaz"))
