function minimumSize(nums: number[], maxOperations: number): number {
	const canDivide = (maxBalls: number): boolean => {
		let ops = 0;

		for (const n of nums) {
			ops += Math.ceil(n / maxBalls) - 1;

			if (ops > maxOperations) {
				return false;
			}
		}

		return true;
	};

	let l = 0,
		r = Math.max(...nums);

	while (l < r) {
		let mid = Math.floor((l + r) / 2);

		if (canDivide(mid)) {
			r = mid;
		} else {
			l = mid + 1;
		}
	}
	return l;
}

console.log(minimumSize([9], 2));
