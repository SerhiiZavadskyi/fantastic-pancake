function topKFrequent2(nums: number[], k: number): number[] {
	const map: Record<number, number> = {};
	const res: number[] = [];

	for (const num of nums) {
		map[num] = (map[num] || 0) + 1;
	}

	const mostFrequent = Object.entries(map).sort((a, b) => b[1] - a[1]);

	for (let i = 0; i < k; i++) {
		res.push(+mostFrequent[i][0]);
	}

	return res;
}

function topKFrequent1(nums: number[], k: number): number[] {
	const map = new Map<number, number>();

	for (const num of nums) {
		map.set(num, (map.get(num) || 0) + 1);
	}

	return Array.from(map.entries())
		.sort((a, b) => b[1] - a[1])
		.slice(0, k)
		.map(([key]) => key);
}

function topKFrequent(nums: number[], k: number): number[] {
	const map: Record<number, number> = {};
	const frequent: number[][] = [...Array(nums.length + 1)].map(
		() => new Array()
	);

	for (const num of nums) {
		map[num] = (map[num] || 0) + 1;
	}

	for (const [num, count] of Object.entries(map)) {
		frequent[count].push(+num);
	}

	const res: number[] = [];

	for (let i = frequent.length - 1; i >= 0; i--) {
		for (const n of frequent[i]) {
			if (res.length === k) {
				return res;
			}

			res.push(n);
		}
	}

	return res;
}

console.log(topKFrequent([5, 3, 1, 1, 1, 3, 73, 1], 2));
