function mapWordWeights(words: string[], weights: number[]): string {
	let res = "";

	for (const word of words) {
		let currSum = 0;

		for (let i = 0; i < word.length; i++) {
			currSum += weights[word[i].charCodeAt(0) - "a".charCodeAt(0)];
		}

		res += String.fromCharCode("z".charCodeAt(0) - (currSum % 26));
	}

	return res;
}

console.log(
	mapWordWeights(
		["abcd", "def", "xyz"],
		[5, 3, 12, 14, 1, 2, 3, 2, 10, 6, 6, 9, 7, 8, 7, 10, 8, 9, 6, 9, 9, 8, 3, 7, 7, 2],
	),
);
