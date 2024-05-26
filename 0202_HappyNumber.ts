function isHappy(n: number): boolean {
	let st = new Set();
	while (1) {
		n = numSquareSum(n);
		if (n == 1) return true;
		if (st.has(n)) return false;
		st.add(n);
	}

	return true;
}

function numSquareSum(n: number): number {
	return n
		.toString()
		.split("")
		.reduce((acc, curr) => acc + Math.pow(+curr, 2), 0);
}
console.log(isHappy(2));
