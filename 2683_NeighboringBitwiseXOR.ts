function doesValidArrayExist(derived: number[]): boolean {
	let xor = 0;

	for (const n of derived) {
		xor ^= n;
	}

	return xor === 0;
}

console.log(doesValidArrayExist([1, 0]));
