function continuousSubarrays(nums: number[]): number {
	let j = 0;
	let count = 0;
	const map = new Map();

	function getCount(num: number): number {
		return (map.get(num) ?? 0) + (map.get(num + 1) ?? 0) + (map.get(num + 2) ?? 0) + (map.get(num - 1) ?? 0) + (map.get(num - 2) ?? 0);
	}

	for (let i = 0; i < nums.length; i++) {
		map.set(nums[i], (map.get(nums[i]) ?? 0) + 1);

		while (i - j + 1 > getCount(nums[i])) {
			map.set(nums[j], map.get(nums[j]) - 1);

			j++;
		}

		count += i - j + 1;
	}

	return count;
}
console.log(continuousSubarrays([1, 2, 3, 4]));
