function minHeightShelves(books: number[][], shelfWidth: number): number {
	const dp: number[] = new Array(books.length + 1).fill(Infinity)
	dp[0] = 0

	for (let i = 1; i <= books.length; i++) {
		let width = 0
		let height = 0

		for (let j = i - 1; j >= 0; j--) {
			width += books[j][0]
			if (width > shelfWidth) break

			height = Math.max(height, books[j][1])
			dp[i] = Math.min(dp[i], dp[j] + height)
		}
	}

	return dp[books.length]
}

function minHeightShelves2(books: number[][], shelfWidth: number): number {
	const cache = new Map()

	const helper = (i: number): number => {
		if (i === books.length) {
			return 0
		}

		if (cache.has(i)) {
			return cache.get(i)
		}

		let currWidth = shelfWidth
		let maxHeight = 0
		let min = Infinity

		for (let j = i; j < books.length; j++) {
			const [w, h] = books[j]

			if (currWidth < w) {
				break
			}

			currWidth -= w
			maxHeight = Math.max(maxHeight, h)
			min = Math.min(min, helper(j + 1) + maxHeight)
		}
		cache.set(i, min)
		return min
	}

	return helper(0)
}
console.log(
	minHeightShelves(
		[
			[1, 1],
			[2, 3],
			[2, 3],
			[1, 1],
			[1, 1],
			[1, 1],
			[1, 2],
		],
		4
	)
)
