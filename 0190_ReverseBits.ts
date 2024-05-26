function reverseBits(n: number): number {
	if (!n) return 0

	let res = 0

	for (let i = 0; i < 32; i++) {
		res = res * 2 + (n & 1)
		n >>>= 1
	}

	return res
}
