function longestIdealString(s: string, k: number): number {
	const map = new Map()

	for (let i = 0; i < 26; i++) {
		map.set(String.fromCharCode(i + "a".charCodeAt(0)), i)
	}

	const dp: number[] = new Array(26).fill(0)
	for (const c of s) {
		const curr = map.get(c)
		let longest = 0
		for (let prev = 0; prev < 26; prev++) {
			if (Math.abs(curr - prev) <= k) {
				longest = Math.max(longest, 1 + dp[prev])
			}
		}
		dp[curr] = Math.max(dp[curr], longest)
	}

	return Math.max(...dp)
}

function longestIdealStringRecursive(s: string, k: number): number {
	const memo = new Map()
	function helper(i: number, prev: string): number {
		if (i === s.length) {
			return 0
		}
		const key = `${i}-${prev}`

		if (memo.has(key)) {
			return memo.get(key)
		}

		let res = helper(i + 1, prev)

		if (prev === "" || Math.abs(s[i].charCodeAt(0) - prev.charCodeAt(0)) <= k) {
			res = Math.max(res, 1 + helper(i + 1, s[i]))
		}
		memo.set(key, res)
		return res
	}
	return helper(0, "")
}
console.log(longestIdealString("acfgbd", 2))
