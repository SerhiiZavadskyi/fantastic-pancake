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

function strStr(haystack: string, needle: string): number {
	for (let i = 0; i < haystack.length; i++) if (haystack.slice(i, i + needle.length) === needle) return i;
	return -1;
}

console.log(strStr("leetcode", "tc")); // 3
console.log(strStr("sadbutsad", "sad")); // 0
