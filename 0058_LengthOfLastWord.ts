function lengthOfLastWord(s: string): number {
	return s.trim().split(" ").at(-1)?.length || 0
}

function lengthOfLastWord2(s: string): number {
	return s.split(" ").filter(Boolean).at(-1)?.length || 0
}

function lengthOfLastWord3(s: string): number {
	let res = 0
	let prev: string | null = null

	for (let r = s.length - 1; r >= 0; r--) {
		if (s[r] !== " ") {
			prev = s[r]
			res += 1
		}

		if (prev !== null && s[r] === " ") {
			break
		}
	}

	return res
}

function lengthOfLastWord4(s: string): number {
	let res = 0

	for (let r = s.length - 1; r >= 0; r--) {
		if (s[r] === " ") {
			if (res > 0) {
				return res
			}
		} else {
			res++
		}
	}

	return res
}
console.log(lengthOfLastWord4("a"))
//console.log(lengthOfLastWord3("luffy is still joyboy"))
