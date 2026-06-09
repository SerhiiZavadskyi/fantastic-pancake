function mirrorDistance(n: number): number {
	return Math.abs(n - +Array.from(String(n)).reverse().join(""));
}

console.log(mirrorDistance(25));
console.log(mirrorDistance(7));
console.log(mirrorDistance(10));
