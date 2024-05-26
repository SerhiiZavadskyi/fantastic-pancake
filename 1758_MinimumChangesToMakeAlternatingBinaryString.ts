function minOperations1(s: string): number {
	let res1 = 0;
	let res2 = 0;
	let strToBuild1 = "";
	let strToBuild2 = "";

	for (let i = 0; i < s.length; i++) {
		strToBuild1 += i % 2 ? 1 : 0;
		strToBuild2 += i % 2 ? 0 : 1;
	}

	for (let i = 0; i < s.length; i++) {
		if (s[i] !== strToBuild1[i]) {
			res1++;
		}

		if (s[i] !== strToBuild2[i]) {
			res2++;
		}
	}

	return Math.min(res1, res2);
}

function minOperations(s: string): number {
	let result = 0;

	for (let i = 0; i < s.length; i++) {
		if (i % 2) {
			result += s[i] === "0" ? 1 : 0;
		} else {
			result += s[i] === "1" ? 1 : 0;
		}
	}

	return Math.min(result, s.length - result);
}

console.log(minOperations("10010100"));
