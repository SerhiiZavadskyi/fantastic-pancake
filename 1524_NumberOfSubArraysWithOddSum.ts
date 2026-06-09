function numOfSubarrays(arr: number[]): number {
	let currSum = 0,
		oddCount = 0,
		evenCount = 0,
		res = 0;
	const MOD = 10 ** 9 + 7;

	for (const n of arr) {
		currSum += n;

		if (currSum % 2) {
			res = (res + 1 + evenCount) % MOD;
			oddCount++;
		} else {
			res = (res + oddCount) % MOD;
			evenCount++;
		}
	}

	return res;
}

console.log(numOfSubarrays([1, 3, 5]));
