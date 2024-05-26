function countSubstringsDp(s: string): number {
	const dp = Array.from({ length: s.length }, () => new Array(s.length).fill(0));
	let res = 0;

	for (let i = 0; i < dp.length; i++) {
		for (let j = 0; j < dp.length; j++) {
			if (s[i] === s[j]) {
				dp[i][j] = 1;
			}
		}
	}

	for (let i = s.length; i >= 0; i--) {
		for (let j = i; j < s.length; j++) {
			if (s[i] === s[j] && i !== j) {
				dp[i][j] = dp[i + 1][j - 1];
			}
			res += dp[i][j];
		}
	}

	return res;
}

function countSubstrings(s: string): number {
	let res = 0;

	for (let i = 0; i < s.length; i++) {
		res += totalPalindromes(s, i, i);
		res += totalPalindromes(s, i, i + 1);
	}
	return res;
}

function totalPalindromes(s: string, l: number, r: number): number {
	let res = 0;

	while (l >= 0 && r < s.length && s[l] === s[r]) {
		res++;
		l--;
		r++;
	}

	return res;
}
console.log(countSubstrings("abc"));
