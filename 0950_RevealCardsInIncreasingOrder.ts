function deckRevealedIncreasing(deck: number[]): number[] {
	const res: number[] = new Array(deck.length)
	const indices: number[] = new Array(deck.length).fill(deck.length - 1).map((n, i) => n - i)
	deck.sort((a, b) => b - a)

	while (deck.length > 0) {
		const card = deck.pop()!
		const idx = indices.pop()!
		res[idx] = card
		indices.unshift(indices.pop()!)
	}

	return res
}

function deckRevealedIncreasing2(deck: number[]): number[] {
	const res: number[] = new Array(deck.length)
	const indices: number[] = []

	for (let i = deck.length - 1; i >= 0; i--) {
		indices.push(i)
	}

	deck.sort((a, b) => a - b)

	for (const n of deck) {
		const idx = indices.pop()!
		res[idx] = n
		indices.unshift(indices.pop()!)
	}

	return res
}

console.log(deckRevealedIncreasing2([17, 13, 11, 2, 3, 5, 7]))
