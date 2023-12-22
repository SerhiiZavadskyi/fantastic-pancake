function maxScore2(s: string): number {
	let res = 0;

	for (let i = 1; i < s.length; i++) {
		const zeros = s
			.slice(0, i)
			.split("")
			.reduce((acc, curr) => (curr === "0" ? ++acc : acc), 0);
		const ones = s
			.slice(i)
			.split("")
			.reduce((acc, curr) => (curr === "1" ? ++acc : acc), 0);

		res = Math.max(res, zeros + ones);
	}

	return res;
}

function maxScore1(s: string): number {
	let res = 0;

	for (let i = 1; i < s.length; i++) {
		const l = s.slice(0, i);
		const r = s.slice(i);
		let zeros = 0;
		let ones = 0;

		for (const char of l) {
			if (char === "0") {
				zeros++;
			}
		}

		for (const char of r) {
			if (char === "1") {
				ones++;
			}
		}

		res = Math.max(res, zeros + ones);
	}

	return res;
}

function maxScore(s: string): number {
	let res = 0;
	let ones = s
		.split("")
		.reduce((count, char) => (char === "1" ? count + 1 : count), 0);
	let zeros = 0;

	for (let i = 0; i < s.length - 1; i++) {
		s[i] === "0" ? zeros++ : ones--;
		res = Math.max(res, zeros + ones);
	}

	return res;
}

console.log(maxScore("011101"));
