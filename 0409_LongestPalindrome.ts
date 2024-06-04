function longestPalindrome(s: string): number {
	const seen = new Set()
	let res = 0

	for (const c of s) {
		if (seen.has(c)) {
			seen.delete(c)
			res += 2
		} else {
			seen.add(c)
		}
	}

	if (seen.size > 0) {
		res++
	}

	return res
}

console.log(longestPalindrome("abccccdd"))
