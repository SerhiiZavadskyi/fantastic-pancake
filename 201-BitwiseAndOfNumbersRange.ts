function rangeBitwiseAnd(left: number, right: number): number {
	let res = 0;

	for (let i = 1; i <= 32; i++) {
		const bit = (left >> i) & 1;

		if (bit === 0) continue;

		const remain = left % (1 << (i + 1));
		const diff = (1 << (i + 1)) - remain;

		if (right - left < diff) {
			res = res | (1 << i);
		}
	}

	return res;
}

function rangeBitwiseAnd2(left: number, right: number): number {
	let shift = 0;
	while (left < right) {
		left >>= 1;
		right >>= 1;
		shift++;
		console.log(left, right);
	}
	return left << shift;
}

console.log(rangeBitwiseAnd2(5, 7)); // 4
