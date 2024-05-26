function trailingZeroes(n: number): number {
	let res = 0;

	while (n > 0) {
		n = Math.floor(n / 5);
		res += n;
	}

	return res;
}

function trailingZeroes2(n: number): number {
	const factorials: number[] = [];
	factorials[0] = 1;

	for (let i = 1; i <= n; i++) {
		factorials[i] = factorials[i - 1] * i;
	}
	console.log(factorials);

	let res = 0;
	const tail = factorials[n].toString();

	for (let i = tail.length - 1; i >= 0; i--) {
		if (tail[i] === "0") {
			res++;
		} else {
			break;
		}
	}

	return res;
}

console.log(trailingZeroes(1000));
