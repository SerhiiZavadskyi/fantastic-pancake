function numberOfBeams(bank: string[]): number {
	const map: Record<string, number> = {};
	let count = 0;

	for (let i = 0; i < bank.length; i++) {
		const row = bank[i];
		const key = i + 1 + row;
		for (const num of row) {
			if (num === "1") {
				map[key] = (map[key] || 0) + 1;
			}
		}
	}

	const cells = Object.values(map);

	for (let i = 0; i < cells.length - 1; i++) {
		count += cells[i] * cells[i + 1];
	}

	return count;
}

function numberOfBeams2(bank: string[]): number {
	return bank
		.filter((cell) => cell.includes("1"))
		.map((cell) => cell.replace(/0/g, "").length)
		.reduce((acc, curr, i, arr) => {
			if (i < arr.length - 1) {
				return acc + curr * arr[i + 1];
			}
			return acc;
		}, 0);
}

function numberOfBeams3(bank: string[]): number {
	let prev = bank[0].replace(/0/g, "").length;
	let res = 0;

	for (let i = 1; i < bank.length; i++) {
		const curr = bank[i].replace(/0/g, "").length;

		if (curr) {
			res += prev * curr;
			prev = curr;
		}
	}

	return res;
}

console.log(
	numberOfBeams([
		"00101",
		"10100",
		"00000",
		"11110",
		"11100",
		"01001",
		"00100",
		"11010",
	])
);
