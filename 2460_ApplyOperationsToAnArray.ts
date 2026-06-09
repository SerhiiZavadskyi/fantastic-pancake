function applyOperations(nums: number[]): number[] {
	for (let i = 0; i < nums.length - 1; i++) {
		if (nums[i] === nums[i + 1]) {
			nums[i] *= 2;
			nums[i + 1] = 0;
		}
	}

	let j = 0;

	for (let i = 0; i < nums.length; i++) {
		if (nums[i] !== 0) {
			const temp = nums[i];
			nums[i] = nums[j];
			nums[j] = temp;
			//[nums[i], nums[j]] = [nums[j], nums[i]];
			j++;
		}
	}

	return nums;
}

console.log(applyOperations([847, 847, 0, 0, 0, 399, 416, 416, 879, 879, 206, 206, 206, 272]));
