function longestNiceSubarray(nums: number[]): number {
	let res = 0;
	let curr = 0;
	let l = 0;

	for (let r = 0; r < nums.length; r++) {
		while (curr & nums[r]) {
			curr ^= nums[l];
			l++;
		}

		res = Math.max(res, r - l + 1);
		curr ^= nums[r];
	}

	return res;
}

console.log(longestNiceSubarray([1, 3, 8, 48, 10]));
