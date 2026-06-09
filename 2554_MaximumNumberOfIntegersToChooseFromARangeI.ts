function maxCount(banned: number[], n: number, maxSum: number): number {
	const bannedSet = new Set(banned);
	let currentSum = 0;
	let count = 0;

	for (let i = 1; i <= n; i++) {
		if (!bannedSet.has(i) && currentSum + i <= maxSum) {
			currentSum += i;
			count++;
		}
	}

	return count;
}

console.log(maxCount([1, 6, 5], 5, 6));
