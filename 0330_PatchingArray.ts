function minPatches(nums: number[], n: number): number {
	let patches = 0
	let i = 0
	let miss = 1

	while (miss <= n) {
		if (i < nums.length && nums[i] <= miss) {
			miss += nums[i++]
		} else {
			miss += miss
			patches++
		}
	}

	return patches
}

console.log(minPatches([1, 3], 6))
