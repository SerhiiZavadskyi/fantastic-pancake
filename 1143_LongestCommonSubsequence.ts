function longestCommonSubsequence(text1: string, text2: string): number {
	const length1 = text1.length;
	const length2 = text2.length;
	const dp: number[][] = Array.from({ length: length1 + 1 }, () =>
		Array.from({ length: length2 + 1 }, () => 0)
	);

	for (let i = 1; i < length1 + 1; i++) {
		for (let j = 1; j < length2 + 1; j++) {
			if (text1[i - 1] === text2[j - 1]) {
				dp[i][j] = dp[i - 1][j - 1] + 1;
			} else {
				dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
			}
		}
	}

	return dp[length1][length2];
}

function longestCommonSubsequence2(text1: string, text2: string): number {
	const dp: number[][] = Array.from({ length: text1.length + 1 }, () =>
		Array.from({ length: text2.length + 1 }, () => 0)
	);

	for (let i = text1.length - 1; i > -1; i--) {
		for (let j = text2.length - 1; j > -1; j--) {
			if (text1[i] === text2[j]) {
				dp[i][j] = dp[i + 1][j + 1] + 1;
			} else {
				dp[i][j] = Math.max(dp[i + 1][j], dp[i][j + 1]);
			}
		}
	}

	return dp[0][0];
}

console.log(longestCommonSubsequence2("abcdeabcde", "acee"));
