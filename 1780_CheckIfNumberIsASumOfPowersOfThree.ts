function checkPowersOfThree(n: number): boolean {
	const backtrack = (i: number, curr: number): boolean => {
		if (curr === n) return true;
		if (curr > n || 3 ** i > n) return false;
		if (backtrack(i + 1, curr + 3 ** i)) return true;

		return backtrack(i + 1, curr);
	};
	return backtrack(0, 0);
}

function checkPowersOfThree2(n: number): boolean {
	let i = 0;

	while (3 ** i <= n) {
		i++;
	}
	i--;

	while (i >= 0) {
		if (3 ** i <= n) {
			n -= 3 ** i;
		}
		i--;
	}

	return n === 0;
}

console.log(checkPowersOfThree2(12));
