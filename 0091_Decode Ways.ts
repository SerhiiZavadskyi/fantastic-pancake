// recursive approach
function numDecodings(s: string): number {
	const dp: Record<number, number> = { [s.length]: 1 };

	function dfs(i: number): number {
		if (i in dp) {
			return dp[i];
		}

		if (s[i] === "0") return 0;

		let res = dfs(i + 1);

		if (
			(i + 1 < s.length && s[i] === "1") ||
			(s[i] === "2" && +s[i + 1] <= 6 && +s[i + 1] >= 0)
		) {
			res += dfs(i + 2);
		}

		dp[i] = res;

		return res;
	}

	return dfs(0);
}

//dynamic programming
function numDecodings2(s: string): number {
	const dp: Record<number, number> = { [s.length]: 1 };

	for (let i = s.length - 1; i >= 0; i--) {
		if (s[i] === "0") {
			dp[i] = 0;
		} else {
			dp[i] = dp[i + 1];
		}

		if (
			(i + 1 < s.length && s[i] === "1") ||
			(s[i] === "2" && +s[i + 1] <= 6 && +s[i + 1] >= 0)
		) {
			dp[i] += dp[i + 2];
		}
	}

	return dp[0];
}
