function bagOfTokensScore(tokens: number[], power: number): number {
	let res = 0;
	let score = 0;
	let left = 0;
	let right = tokens.length - 1;

	tokens.sort((a, b) => a - b);

	while (left <= right) {
		if (power >= tokens[left]) {
			power -= tokens[left];
			score++;
			left++;
			res = Math.max(res, score);
		} else if (score > 0) {
			power += tokens[right];
			score--;
			right--;
		} else {
			break;
		}
	}

	return res;
}

console.log(bagOfTokensScore([100, 200, 300, 400], 200));
