function makeGood(s: string): string {
	let i = 0
	let stack: string[] = []

	while (i < s.length) {
		if (
			stack.length > 0 &&
			stack[stack.length - 1] !== s[i] &&
			stack[stack.length - 1].toLowerCase() === s[i].toLowerCase()
		) {
			stack.pop()
		} else {
			stack.push(s[i])
		}

		i++
	}

	return stack.join("")
}

function makeGood2(s: string): string {
	let stack: string[] = []

	for (const char of s) {
		if (stack.length && stack.at(-1) !== char && stack.at(-1)?.toLowerCase() === char.toLowerCase()) {
			stack.pop()
		} else {
			stack.push(char)
		}
	}

	return stack.join("")
}
console.log(makeGood("leEeetcode"))
console.log(makeGood("abBAcC"))
