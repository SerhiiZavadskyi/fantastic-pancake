function maxSumDivThree(nums: number[]): number {
	let total = 0;
	let smallest1 = Infinity;
	let smallest2 = Infinity;

	for (const n of nums) {
		total += n;

		if (n % 3 === 1) {
			smallest2 = Math.min(smallest2, smallest1 + n);
			smallest1 = Math.min(smallest1, n);
		}
		if (n % 3 === 2) {
			smallest1 = Math.min(smallest1, smallest2 + n);
			smallest2 = Math.min(smallest2, n);
		}
	}

	if (total % 3 === 0) {
		return total;
	}

	if (total % 3 === 1) {
		return total - smallest1;
	}
	if (total % 3 === 2) {
		return total - smallest2;
	}

	return total;
}
console.log(maxSumDivThree([1, 2, 3, 4, 5, 6, 7]));
