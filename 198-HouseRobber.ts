function rob(nums: number[]): number {
	let sum1 = 0;
	let sum2 = 0;

	for (const n of nums) {
		const temp = Math.max(n + sum1, sum2);
		sum1 = sum2;
		sum2 = temp;
	}

	return sum2;
}

console.log(rob([1, 2, 3, 1]));
