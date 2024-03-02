function sortedSquares(nums: number[]): number[] {
	const res: number[] = new Array(nums.length);
	let left = 0;
	let right = nums.length - 1;
	let i = right;

	while (left <= right) {
		const sq1 = nums[left] * nums[left];
		const sq2 = nums[right] * nums[right];

		if (sq1 > sq2) {
			res[i] = sq1;
			left++;
		} else {
			res[i] = sq2;
			right--;
		}

		i--;
	}

	return res;
}

console.log(sortedSquares([-4, -1, 0, 3, 10]));

function sortedSquares2(nums: number[]): number[] {
	return nums.map((n) => Math.pow(n, 2)).sort((a, b) => a - b);
}
