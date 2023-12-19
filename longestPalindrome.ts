function longestPalindrome(s: string): string {
	let res = "",
		resLen = 0;

	for (let i = 0; i < s.length; i++) {
		let l = i,
			r = i;

		while (l >= 0 && r < s.length && s[l] === s[r]) {
			if (r - l + 1 > resLen) {
				res = s.slice(l, r + 1);
				resLen = r - l + 1;
			}

			l--;
			r++;
			console.log(l, r);
		}

		l = i;
		r = i + 1;

		while (l >= 0 && r < s.length && s[l] === s[r]) {
			if (r - l + 1 > resLen) {
				res = s.slice(l, r + 1);
				resLen = r - l + 1;
			}

			l--;
			r++;
			console.log(l, r);
		}
	}
	return res;
}

console.log(longestPalindrome("cbbbd"));
