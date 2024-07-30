function minimumDeletions(s: string): number {
	let minDeletions = s.length
	let aCount = 0
	let bCount = 0

	for (let i = 0; i < s.length; i++) aCount += Number(s[i] === "a")

	for (let i = 0; i < s.length; i++) {
		minDeletions = Math.min(minDeletions, aCount + bCount)
		aCount -= Number(s[i] === "a")
		bCount += Number(s[i] === "b")
	}

	return minDeletions
}

console.log(minimumDeletions("aababbab"))
