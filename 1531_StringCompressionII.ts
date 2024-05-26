function getLengthOfOptimalCompression(s: string, k: number): number {
	const cache: Record<string, number> = {};
	function count(
		i: number,
		k: number,
		prev: string,
		prev_count: number
	): number {
		const key = `${i},${k},${prev},${prev_count}`;
		if (cache[key]) {
			return cache[key];
		}
		if (k < 0) return 101;
		else if (s.length - i === k) return 0;

		let res;
		if (s[i] === prev) {
			const inc = [1, 9, 99].includes(prev_count) ? 1 : 0;
			res = inc + count(i + 1, k, prev, prev_count + 1);
		} else {
			res = Math.min(
				count(i + 1, k - 1, prev, prev_count),
				1 + count(i + 1, k, s[i], 1)
			);
		}
		cache[key] = res;
		return res;
	}

	return count(0, k, "", 0);
}

console.log(
	getLengthOfOptimalCompression(
		"ckdhbgfkckkbdgjbfiebackbjidkhacdbebahddgbgfefcecfihdbkgfkgdggkaacaafdeigfbahdjbikageceaa",
		65
	)
);
