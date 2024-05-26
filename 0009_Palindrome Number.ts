function isPalindrome(x: number): boolean {
	if (x < 0) return false;

	let div = 1;

	while (x >= 10 * div) {
		div *= 10;
	}

	while (x) {
		const right = x % 10;
		const left = Math.floor(x / div);

		if (left !== right) return false;

		x = Math.floor((x % div) / 10);
		div = div / 100;
	}

	return true;
}

console.log(isPalindrome(1211));
