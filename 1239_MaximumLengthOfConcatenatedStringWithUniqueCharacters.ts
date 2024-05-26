function maxLength(arr: string[]): number {
	const charSet = new Set<string>();

	function overlap(charSet: Set<string>, s: string): boolean {
		const prev = new Set();

		for (const c of s) {
			if (charSet.has(c) || prev.has(c)) return true;
			prev.add(c);
		}

		return false;
	}

	function backtrack(i: number): number {
		if (i === arr.length) {
			return charSet.size;
		}

		let res = 0;

		if (!overlap(charSet, arr[i])) {
			for (const c of arr[i]) {
				charSet.add(c);
			}

			res = backtrack(i + 1);

			for (const c of arr[i]) {
				charSet.delete(c);
			}
		}

		return Math.max(res, backtrack(i + 1));
	}

	return backtrack(0);
}

console.log(maxLength(["cha", "r", "act", "ers"]));
