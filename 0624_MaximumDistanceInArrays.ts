function maxDistance(arrays: number[][]): number {
	let max = 0
	let currMin = arrays[0][0]
	let currMax = arrays[0][arrays[0].length - 1]

	for (const arr of arrays.slice(1)) {
		max = Math.max(max, Math.max(arr.at(-1)! - currMin, currMax - arr[0]))
		currMin = Math.min(currMin, arr[0])
		currMax = Math.max(currMax, arr.at(-1)!)
	}

	return max
}

function maxDistance2(arrays: number[][]): number {
	let max = 0

	for (let i = 0; i < arrays.length; i++) {
		for (let j = i + 1; j < arrays.length; j++) {
			const arr1 = arrays[i]
			const arr2 = arrays[j]

			for (let k = 0; k < arr1.length; k++) {
				for (let m = k; m < arr2.length; m++) {
					max = Math.max(max, Math.abs(arr1[k] - arr2[m]))
				}
			}
		}
	}

	return max
}

console.log(
	maxDistance([
		[1, 2, 3],
		[4, 5],
		[1, 2, 3],
	])
)
