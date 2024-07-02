function threeConsecutiveOdds(arr: number[]): boolean {
	for (let i = 0; i < arr.length - 2; i++) {
		if (arr[i] % 2 && arr[i + 1] % 2 && arr[i + 2] % 2) {
			return true
		}
	}

	return false
}

function threeConsecutiveOdds2(arr: number[]): boolean {
	let count = 0

	for (const n of arr) {
		if (n % 2) {
			count++
		} else {
			count = 0
		}
		if (count === 3) {
			return true
		}
	}

	return false
}
console.log(threeConsecutiveOdds2([1, 2, 34, 3, 4, 5, 7, 23, 12]))
