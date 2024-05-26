const max = Math.max
const min = Math.min

function trap(height: number[]): number {
	if (!height.length) {
		return 0
	}
	let res = 0,
		l = 0,
		r = height.length - 1,
		maxLeft = height[l],
		maxRight = height[r]

	while (l < r) {
		if (maxLeft < maxRight) {
			l++
			maxLeft = max(maxLeft, height[l])
			res += maxLeft - height[l]
		} else {
			r--
			maxRight = max(maxRight, height[r])
			res += maxRight - height[r]
		}
	}

	return res
}

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]))
console.log(trap2([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]))

function trap2(height: number[]): number {
	const maxLeft = new Array(height.length + 1).fill(0)
	const maxRight = new Array(height.length + 1).fill(0)
	const minLeftRight = new Array(height.length + 1).fill(0)

	for (let i = 0; i < height.length; i++) {
		maxLeft[i + 1] = Math.max(...maxLeft, height[i])
		maxRight[height.length - 1 - i] = Math.max(...maxRight, height[height.length - 1 - i])
	}

	for (let i = 0; i < maxLeft.length; i++) {
		minLeftRight[i] = Math.min(maxLeft[i], maxRight[i])
	}

	let res = 0

	for (let i = 0; i < minLeftRight.length; i++) {
		const diff = minLeftRight[i] - height[i]

		if (diff >= 0) {
			res += diff
		}
	}

	return res
}
