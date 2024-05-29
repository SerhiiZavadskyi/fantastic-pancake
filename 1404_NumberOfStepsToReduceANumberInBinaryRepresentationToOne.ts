function numSteps(s: string): number {
	let steps = 0

	while (s !== "1") {
		if (s.at(-1) === "0") {
			s = s.slice(0, s.length - 1)
		} else {
			let i = s.length - 1
			let str = Array.from(s)

			while (i >= 0 && s[i] === "1") {
				str[i] = "0"
				i--
			}

			if (i === -1) {
				str = ["1"].concat(str)
			} else {
				str[i] = "1"
			}
			s = str.join("")
		}

		steps++
	}

	return steps
}

function numSteps2(s: string): number {
	let steps = 0
	let carry = 0

	for (let i = s.length - 1; i >= 1; i--) {
		const digit = (Number(s[i]) + carry) % 2
		if (digit === 0) {
			steps++
		} else if (digit === 1) {
			carry++
			steps++
		}
	}

	return steps + carry
}

console.log(numSteps2("1101"))
