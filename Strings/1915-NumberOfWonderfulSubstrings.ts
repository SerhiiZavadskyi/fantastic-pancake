function wonderfulSubstrings(word: string): number {
	const count = new Map()
	count.set(0, 1)
	let res = 0
	let bitmask = 0

	for (const char of word) {
		const charIdx = char.charCodeAt(0) - 97
		bitmask ^= 1 << charIdx
		res += count.get(bitmask) ?? 0

		for (let i = 0; i < 10; i++) {
			res += count.get(bitmask ^ (1 << i)) ?? 0
		}

		count.set(bitmask, (count.get(bitmask) ?? 0) + 1)
	}

	return res
}
console.log(wonderfulSubstrings("aabb"))
