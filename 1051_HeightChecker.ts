function heightChecker(heights: number[]): number {
	let res = 0
	const expected = heights.slice().sort((a, b) => a - b)

	for (let i = 0; i < heights.length; i++) {
		if (heights[i] !== expected[i]) {
			res++
		}
	}

	return res
}

// Counting sorting
const MAX_LENGTH = 101

function heightChecker2(heights: number[]): number {
	const count = new Array(MAX_LENGTH).fill(0)
	let res = 0
	const expected: number[] = []

	for (const h of heights) {
		count[h] += 1
	}

	for (let i = 1; i < MAX_LENGTH; i++) {
		const cnt = count[i]

		for (let j = 0; j < cnt; j++) {
			expected.push(i)
		}
	}
	for (let i = 0; i < heights.length; i++) {
		if (heights[i] !== expected[i]) {
			res++
		}
	}

	return res
}

console.log(heightChecker([5, 1, 2, 3, 4]))
