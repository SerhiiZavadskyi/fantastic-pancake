function maximumSum(nums: number[]): number {
	const count = new Map();
	const countDigitSum = (digit: number): number => Array.from(String(digit)).reduce((acc, n) => acc + Number(n), 0);

	for (const num of nums) {
		const sum = countDigitSum(num);

		if (count.has(sum)) {
			count.get(sum).push(num);
		} else {
			count.set(sum, [num]);
		}
	}

	let max = -1;

	for (const [_, digits] of count) {
		if (digits.length >= 2) {
			digits.sort((a: number, b: number) => b - a);

			max = Math.max(max, digits[0] + digits[1]);
		}
	}

	return max;
}
