function divideArray(nums: number[], k: number): number[][] {
	const result: number[][] = [];
	nums.sort((a, b) => a - b);

	for (let i = 0; i < nums.length; i += 3) {
		if (nums[i + 2] - nums[i] > k) {
			return [];
		}

		result.push(nums.slice(i, i + 3));
	}

	return result;
}

console.log(divideArray([1, 3, 4, 8, 7, 9, 3, 5, 1], 2));
