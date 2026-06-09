function divideArray(nums: number[]): boolean {
	const count = new Map();

	nums.forEach((n) => count.set(n, (count.get(n) ?? 0) + 1));

	for (const [_, cnt] of count) {
		if (cnt % 2 === 1) {
			return false;
		}
	}

	return true;
}

function divideArray2(nums: number[]): boolean {
	const numsSet = new Set();

	for (const n of nums) {
		if (numsSet.has(n)) {
			numsSet.delete(n);
		} else {
			numsSet.add(n);
		}
	}

	return numsSet.size === 0;
}

console.log(divideArray2([3, 2, 3, 2, 2, 2]));
