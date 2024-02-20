function missingNumberSet(nums: number[]): number {
	const set = new Set(nums);

	for (let i = 0; i <= nums.length; i++) {
		if (!set.has(i)) return i;
	}

	return -1;
}

function missingNumber(nums: number[]): number {
	const sum = nums.reduce((acc, curr) => acc + curr, 0);
	const expectedSum = (nums.length * (nums.length + 1)) / 2;
	return expectedSum - sum;
}

console.log(missingNumber([3, 0, 1]));
