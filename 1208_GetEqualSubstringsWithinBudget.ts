function equalSubstring(s: string, t: string, maxCost: number): number {
	let currCost = 0
	let l = 0
	let res = 0

	for (let r = 0; r < s.length; r++) {
		currCost += Math.abs(s.charCodeAt(r) - t.charCodeAt(r))

		while (currCost > maxCost) {
			currCost -= Math.abs(s.charCodeAt(l) - t.charCodeAt(l))
			l++
		}
		res = Math.max(res, r - l + 1)
	}

	return res
}
console.log(equalSubstring("abcd", "bcdf", 3))
