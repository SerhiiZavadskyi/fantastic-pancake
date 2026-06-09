function countInterestingSubarrays(nums: number[], modulo: number, k: number): number {
	const set = new Set(nums);
	const map = new Map<number, number>();
	let count = 0;
	let start = 0;

	for (let i = 0; i < nums.length; i++) {
		map.set(nums[i], (map.get(nums[i]) || 0) + 1);
		while (map.size === set.size) {
			count += nums.length - i;
			const firstEl = nums[start];
			map.set(firstEl, map.get(firstEl)! - 1);
			if (map.get(firstEl)! === 0) {
				map.delete(firstEl);
			}
			start++;
		}
	}
	return count;
}
console.log(countInterestingSubarrays([3, 2, 4], 2, 1));
