function minimumLength(s: string): number {
	if (s.length === 1) return 1;

	let l = 0;
	let r = s.length - 1;

	while (l < r && s[l] === s[r]) {
		let char = s[l];

		while (char === s[l]) {
			l++;
		}

		while (l < r && char === s[r]) {
			r--;
		}
	}

	return r - l + 1;
}

console.log(minimumLength("cabaabac"));
console.log(minimumLength("aabccabba"));
