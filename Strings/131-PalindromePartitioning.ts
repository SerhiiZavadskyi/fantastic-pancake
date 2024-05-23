function partition(s: string): string[][] {
	const res: string[][] = []
	const part: string[] = []

	const dfs = (i: number) => {
		if (i === s.length) {
			res.push([...part])
			return
		}

		for (let j = i; j < s.length; j++) {
			if (isPali(s, i, j)) {
				part.push(s.slice(i, j + 1))
				dfs(j + 1)
				part.pop()
			}
		}
	}
	dfs(0)
	return res
}
function isPali(s: string, l: number, r: number): boolean {
	while (l < r) {
		if (s[l] !== s[r]) return false
		l++
		r--
	}

	return true
}
console.log(partition("aab"))
