function majorityElement(nums: number[]): number {
	let count = new Map();
	let half = Math.floor(nums.length / 2);

	for (let num of nums) {
		const n = count.get(num) ?? 0;
		if (n === half) {
			return num;
		}

		count.set(num, n + 1);
	}

	return 1;
}
console.log(majorityElement([1]));
