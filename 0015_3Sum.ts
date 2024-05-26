function threeSum(nums: number[]): number[][] {
	const res: number[][] = [];
	nums.sort((a, b) => a - b);

	for (let i = 0; i < nums.length; i++) {
		if (i > 0 && nums[i] === nums[i - 1]) continue;

		let l = i + 1,
			r = nums.length - 1;
		while (l < r) {
			const sum = nums[i] + nums[l] + nums[r];

			if (sum === 0) {
				res.push([nums[i], nums[l], nums[r]]);
				l++;
				while (nums[l] === nums[l - 1] && l < r) {
					l++;
				}
			} else if (sum < 0) {
				l++;
			} else {
				r--;
			}
		}
	}

	return res;
}
console.log(threeSum([-1, 0, 1, 2, -1, -4]));
