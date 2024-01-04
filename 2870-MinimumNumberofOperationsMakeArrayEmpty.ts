function minOperations(nums: number[]): number {
	const map = new Map();

	for (const num of nums) {
		map.set(num, (map.get(num) || 0) + 1);
	}

	let result = 0;

	for (const [_, count] of map) {
		if (count === 1) return -1;

		result += Math.ceil(count / 3);
	}

	return result;
}

function minOperationsDfs(nums: number[]): number {
	const map: Record<string, number> = {};

	for (const num of nums) {
		map[num] = (map[num] || 0) + 1;
	}

	const count = Object.values(map);
	const cache: Record<string, number> = {};

	function dfs(n: number): number {
		if (n < 0) return Infinity;

		if ([2, 3].includes(n)) return 1;

		if (n in cache) return cache[n];

		const res = Math.min(dfs(n - 2), dfs(n - 3));

		if (res === -1) return -1;

		cache[n] = res + 1;

		return res + 1;
	}
	let result = 0;

	for (const c of count) {
		const op = dfs(c);

		if (op === Infinity) return -1;

		result += op;
	}

	return result;
}

console.log(
	minOperations([
		14, 12, 14, 14, 12, 14, 14, 12, 12, 12, 12, 14, 14, 12, 14, 14, 14, 12,
		12,
	])
);
