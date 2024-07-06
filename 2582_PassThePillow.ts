function passThePillow(n: number, time: number): number {
	let chunks = Math.floor(time / (n - 1))

	return chunks % 2 === 0 ? (time % (n - 1)) + 1 : n - (time % (n - 1))
}

console.log(passThePillow(18, 38))
