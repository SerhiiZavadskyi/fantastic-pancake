function totalWaviness(num1: number, num2: number): number {
	function waviness(n: number): number {
		const digits = n.toString().split("").map(Number);

		if (digits.length < 3) {
			return 0;
		}

		let count = 0;

		for (let i = 1; i < digits.length - 1; i++) {
			const prev = digits[i - 1];
			const curr = digits[i];
			const next = digits[i + 1];

			if ((curr > prev && curr > next) || (curr < prev && curr < next)) {
				count++;
			}
		}

		return count;
	}

	let res = 0;

	for (let i = num1; i <= num2; i++) {
		res += waviness(i);
	}

	return res;
}

console.log(totalWaviness(120, 130));
