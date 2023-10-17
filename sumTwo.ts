function twoSum(nums: number[], target: number): number[] | undefined {
	const map = new Map();

	for (let i = 0; i < nums.length; i++) {
		const diff = target - nums[i];

		if (map.has(diff)) return [map.get(diff), i];

		map.set(nums[i], i);
	}
}

console.log(twoSum([2, 11, 15, 7, 3], 9));
