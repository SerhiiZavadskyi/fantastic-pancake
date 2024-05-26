function sequentialDigits(low: number, high: number): number[] {
	const res: number[] = [];
	const lowDigit = low.toString().length;
	const highDigit = high.toString().length;

	for (let digits = lowDigit; digits <= highDigit; digits++) {
		for (let start = 1; start <= 9; start++) {
			if (start + digits > 10) {
				break;
			}

			let num = start;
			let prev = start;

			for (let i = 0; i < digits - 1; i++) {
				num *= 10;
				prev += 1;
				num += prev;
			}

			if (num >= low && num <= high) {
				res.push(num);
			}
		}
	}

	return res;
}

function sequentialDigits2(low: number, high: number): number[] {
	const res: number[] = [];
	const digits = "123456789";
	const lowDigit = low.toString().length;
	const highDigit = high.toString().length;

	for (let digitLength = lowDigit; digitLength <= highDigit; digitLength++) {
		for (let i = 0; i < 10 - digitLength; i++) {
			const num = parseInt(digits.slice(i, i + digitLength));

			if (num >= low && num <= high) {
				res.push(num);
			}
		}
	}

	return res;
}
console.log(sequentialDigits(58, 155));
