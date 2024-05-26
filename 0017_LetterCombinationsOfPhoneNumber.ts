function letterCombinations(digits: string): string[] {
	if (digits.length === 0) return [];

	const chars = ["abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];
	const res: string[] = [];

	function backtrack(comb: string, nextDigits: string) {
		if (nextDigits.length) {
			for (const char of chars[Number(nextDigits[0]) - 2]) {
				backtrack(comb + char, nextDigits.slice(1));
			}
		} else {
			res.push(comb);
		}
	}
	backtrack("", digits);

	return res;
}

console.log(letterCombinations("23"));
