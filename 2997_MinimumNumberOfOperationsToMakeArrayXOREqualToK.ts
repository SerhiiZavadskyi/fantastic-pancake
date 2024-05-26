function minOperations(nums: number[], k: number): number {
	let x = 0

	for (const n of nums) {
		x ^= n
	}

	x ^= k
	let count = 0

	while (x > 0) {
		count += x % 2
		x = Math.floor(x / 2)
	}

	return count

	//  let x = 0

	// 	for (const n of nums) {
	// 		x ^= n
	// 	}

	// 	x ^= k

	// 	return x === 0 ? 0 : x.toString(2).match(/1/g)?.length || -1
}

function minOperations2(nums: number[], k: number): number {
	let x = 0
	let count = 0

	for (const n of nums) {
		x ^= n
	}

	for (let i = 0; i < 32; i++) {
		if ((x & (1 << i)) > 0 != (k & (1 << i)) > 0) {
			count++
		}
	}

	return count
}

console.log(minOperations([2, 1, 3, 4], 1))
