function isPowerOfTwo(n: number): boolean {
	return n > 0 && (n & (n - 1)) === 0;
}

function isPowerOfTwo2(n: number): boolean {
	let x = 1;

	while (x < n) {
		x *= 2;
	}

	return x === n;
}

function isPowerOfTwo3(n: number): boolean {
	return Math.log2(n) % 1 === 0;
}

function isPowerOfTwo4(n: number): boolean {
	return n > 0 && (1 << 30) % n === 0;
}

function isPowerOfTwoRecursive(n: number): boolean {
	if (n < 1) return false;
	if (n === 1) return true;
	return isPowerOfTwo(n / 2);
}

console.log(isPowerOfTwoRecursive(14));
console.log(isPowerOfTwoRecursive(536870912));
