function repeatLimitedString(s: string, repeatLimit: number): string {
	let res = "";
	const count = new Array(26).fill(0);

	for (const char of s) {
		count[char.charCodeAt(0) - "a".charCodeAt(0)]++;
	}
	console.log(count);

	for (let i = count.length - 1; i >= 0; i--) {
		if (count[i] === 0) {
			continue;
		}

		let j = 0;

		while (j < repeatLimit && count[i] > 0) {
			res += String.fromCharCode(i + "a".charCodeAt(0));
			count[i]--;
			j++;
		}
	}
	console.log(count);

	return res;
}

console.log(repeatLimitedString("cczazcc", 3));
