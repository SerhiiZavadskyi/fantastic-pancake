function differenceOfSums(n: number, m: number): number {
	let num1 = 0;
	let num2 = 0;

	for (let i = 1; i < n + 1; i++) {
		if (i % m) {
			num1 += i;
		} else {
			num2 += i;
		}
	}

	return num1 - num2;
}
console.log(differenceOfSums(5, 1));
