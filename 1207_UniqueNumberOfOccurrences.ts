function uniqueOccurrences(arr: number[]): boolean {
	const map = new Map();

	for (const num of arr) {
		map.set(num, (map.get(num) || 0) + 1);
	}

	return map.size === new Set(map.values()).size;
}

console.log(uniqueOccurrences([1, 2, 2, 1, 1, 3, 2]));
