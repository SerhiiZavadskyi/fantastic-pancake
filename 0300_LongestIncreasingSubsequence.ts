function lengthOfLIS(nums: number[]): number {
	let res: number[] = [];

	for (const num of nums) {
		let [left, right] = [0, res.length];

		while (left < right) {
			const mid = Math.floor((right + left) / 2);
			if (res[mid] >= num) right = mid;
			else left = mid + 1;
		}

		res[left] = num;
	}

	return res.length;
}

function lengthOfLIS2(nums: number[]): number {
	let res: number[] = new Array(nums.length).fill(1);

	for (let i = nums.length - 1; i >= 0; i--) {
		for (let j = i + 1; j < nums.length; j++) {
			if (nums[i] < nums[j]) {
				res[i] = Math.max(res[i], 1 + res[j]);
			}
		}
	}

	return Math.max(...res);
}

console.log(lengthOfLIS2([10, 9, 2, 5, 3, 7, 101, 18]));
